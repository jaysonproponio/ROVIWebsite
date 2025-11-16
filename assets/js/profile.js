// Profile Management Script - Shared across all pages

function loadUserProfile() {
    const user = getCurrentUser();
    if (user) {
        const usernameDisplay = document.getElementById('username-display');
        const profileIcon = document.getElementById('profile-icon');
        if (usernameDisplay && profileIcon) {
            usernameDisplay.textContent = user.username;
            usernameDisplay.style.display = 'block';
            profileIcon.style.display = 'block';
        }
    }
}

function toggleProfileDropdown() {
    const dropdown = document.getElementById('profile-dropdown');
    if (dropdown) {
        dropdown.classList.toggle('active');
    }
}

function handleLogout() {
    showModal('Logout', 'Are you sure you want to logout?', 'warning', 'logout()');
}

// Make functions globally available
window.loadUserProfile = loadUserProfile;
window.toggleProfileDropdown = toggleProfileDropdown;
window.handleLogout = handleLogout;

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    const profileContainer = document.querySelector('.profile-container');
    const dropdown = document.getElementById('profile-dropdown');
    if (profileContainer && dropdown && !profileContainer.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('rovi-modal');
    if (modal && e.target === modal) {
        closeModal();
    }
});

