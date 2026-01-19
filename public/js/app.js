// Application State
const state = {
  user: null,
  token: null
};

// Check for existing session
window.addEventListener('DOMContentLoaded', () => {
  const savedUser = localStorage.getItem('user');
  const savedToken = localStorage.getItem('token');

  if (savedUser && savedToken) {
    state.user = JSON.parse(savedUser);
    state.token = savedToken;
    showLoggedInState();
  }
});


// Login Form Handler
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('login-error');

    try {
      // Find login endpoint dynamically
      const response = await fetch('/api/user-interface-and-navigation/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
      });

      const result = await response.json();

      if (result.success && result.data.user) {
        state.user = result.data.user;
        state.token = result.data.user.token;

        // Save to localStorage
        localStorage.setItem('user', JSON.stringify(state.user));
        localStorage.setItem('token', state.token);

        showLoggedInState();
        errorDiv.classList.add('hidden');
      } else {
        errorDiv.textContent = result.error || 'Login failed';
        errorDiv.classList.remove('hidden');
      }
    } catch (error) {
      errorDiv.textContent = 'Error connecting to server';
      errorDiv.classList.remove('hidden');
    }
  });
}

// Logout Handler
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    state.user = null;
    state.token = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    document.getElementById('login-section').classList.remove('hidden');
    document.getElementById('search-section').classList.add('hidden');
    document.getElementById('user-info').classList.add('hidden');
    document.getElementById('login-form').reset();
  });
}

function showLoggedInState() {
  const loginSection = document.getElementById('login-section');
  const searchSection = document.getElementById('search-section');
  const userInfo = document.getElementById('user-info');
  const usernameDisplay = document.getElementById('username-display');

  if (loginSection) loginSection.classList.add('hidden');
  if (searchSection) searchSection.classList.remove('hidden');
  if (userInfo) userInfo.classList.remove('hidden');
  if (usernameDisplay) usernameDisplay.textContent = 'Welcome, ' + state.user.username;
}


// Image Search Handler
const searchForm = document.getElementById('search-form');
if (searchForm) {
  searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const query = document.getElementById('search-query').value;
    const loadingDiv = document.getElementById('loading');
    const resultsDiv = document.getElementById('results');

    loadingDiv.classList.remove('hidden');
    resultsDiv.innerHTML = '';

    try {
      const response = await fetch('/api/image-search-functionality/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + (state.token || ''),
        },
        body: JSON.stringify({ query })
      });

      const result = await response.json();

      loadingDiv.classList.add('hidden');

      if (result.success && result.data.images) {
        displayImages(result.data.images);
      } else {
        resultsDiv.innerHTML = '<p>No images found</p>';
      }
    } catch (error) {
      loadingDiv.classList.add('hidden');
      resultsDiv.innerHTML = '<p class="error">Error searching for images</p>';
    }
  });
}

function displayImages(images) {
  const resultsDiv = document.getElementById('results');

  resultsDiv.innerHTML = images.map(image => '<div class="image-card">' +
    '<img src="' + image.url + '" alt="' + image.title + '">' +
    '<div class="image-card-content">' +
    '<h3>' + image.title + '</h3>' +
    '<p>' + image.description + '</p>' +
    '</div>' +
    '</div>'
  ).join('');
}
