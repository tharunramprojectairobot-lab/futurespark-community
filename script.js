// Mouse-following cursor
const cursor = document.createElement('div');
cursor.className = 'cursor-follow';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX - 10}px`;
    cursor.style.top = `${e.clientY - 10}px`;
});

// Load initial data from localStorage
let memberCount = parseInt(localStorage.getItem('memberCount')) || 0;
let feedPosts = JSON.parse(localStorage.getItem('feedPosts')) || [
    {
        avatar: 'https://via.placeholder.com/50',
        author: 'Tharunram',
        timestamp: new Date().toLocaleString(),
        text: 'Welcome to futurespark community! Stay tuned for updates.',
        gif: 'https://via.placeholder.com/300x150?text=Welcome+GIF',
        likes: 5,
        comments: ['Great start!', 'Excited to be here!']
    },
    {
        avatar: 'https://via.placeholder.com/50',
        author: 'Community Member',
        timestamp: new Date(Date.now() - 86400000).toLocaleString(),
        text: 'Just joined! Loving the vibe.',
        gif: null,
        likes: 3,
        comments: ['Welcome!', 'Awesome!']
    },
    {
        avatar: 'https://via.placeholder.com/50',
        author: 'Another User',
        timestamp: new Date(Date.now() - 172800000).toLocaleString(),
        text: 'Check out this cool project!',
        gif: 'https://via.placeholder.com/300x150?text=Project+GIF',
        likes: 7,
        comments: ['Looks amazing!', 'Inspired!']
    }
];

// Update UI on load
document.getElementById('member-count').querySelector('.counter').textContent = memberCount;
renderFeed();

// Hide loader after page load
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
    }, 3000);
});

// Animated counter function
function animateCounter(element