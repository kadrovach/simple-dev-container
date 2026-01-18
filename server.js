/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Image Search</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; }
                input { padding: 8px; font-size: 16px; }
                button { padding: 8px 16px; font-size: 16px; cursor: pointer; }
                .error { color: red; margin-top: 10px; }
                .success { color: green; margin-top: 10px; }
                img { max-width: 500px; margin-top: 20px; border-radius: 8px; }
            </style>
        </head>
        <body>
            <h1>Image Search</h1>
            <form method="POST" action="/search">
                <label for="word">Enter a word:</label>
                <input type="text" id="word" name="word" placeholder="e.g., cat" required>
                <button type="submit">Search Image</button>
            </form>
        </body>
        </html>
    `);
});

app.post('/search', async (req, res) => {
    const word = req.body.word;
    
    try {
        // Search for images using Unsplash API (free, no key required for basic use)
        const searchRes = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(word)}&client_id=3U4GsQQaA1eoXotuu29XMjMKF-DmRsypzTudP6z4r14&per_page=1`);
        const searchData = await searchRes.json();
        
        if (!searchData.results || searchData.results.length === 0) {
            return res.send(`
                <!DOCTYPE html>
                <html>
                <head><title>Image Search</title></head>
                <body>
                    <h1>Image Search</h1>
                    <p class="error">https://api.unsplash.com/search/photos?query=${encodeURIComponent(word)}&client_id=3U4GsQQaA1eoXotuu29XMjMKF-DmRsypzTudP6z4r14&per_page=1</p>
                    <a href="/">Try again</a>
                </body>
                </html>
            `);
        }
        
        const imageUrl = searchData.results[0].urls.regular;
        const altText = searchData.results[0].alt_description || word;
        
        res.send(`
            <!DOCTYPE html>
            <html>
            <head><title>Image Search</title></head>
            <body>
                <h1>Image Search</h1>
                <p class="success">📸 Results for: <strong>"${word}"</strong></p>
                <img src="${imageUrl}" alt="${altText}">
                <br><a href="/">Search another word</a>
            </body>
            </html>
        `);
    } catch (error) {
        res.send(`
            <!DOCTYPE html>
            <html>
            <head><title>Image Search</title></head>
            <body>
                <h1>Image Search</h1>
                <p class="error">⚠️ Error searching for images. Please try again.</p>
                <a href="/">Try again</a>
            </body>
            </html>
        `);
    }
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);