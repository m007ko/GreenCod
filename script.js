// Elements
const dashboardBtn = document.getElementById('dashboardBtn');
const dailyTipBtn = document.getElementById('dailyTipBtn');
const ideasBtn = document.getElementById('ideasBtn');
const mainContent = document.getElementById('main-content');
const tipCard = document.getElementById('tipCard');
const swipeLeft = document.getElementById('swipeLeft');
const swipeRight = document.getElementById('swipeRight');
const savedIdeasList = document.getElementById('savedIdeasList');

let savedIdeas = [];

// Page Navigation
dashboardBtn.addEventListener('click', () => showPage('dashboard'));
dailyTipBtn.addEventListener('click', () => showPage('dailyTip'));
ideasBtn.addEventListener('click', () => showPage('ideas'));

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Swipe Actions
swipeLeft.addEventListener('click', dismissTip);
swipeRight.addEventListener('click', saveTip);

function dismissTip() {
    alert("Tip dismissed!");
    // Load next tip logic could be added here
}

function saveTip() {
    const tipText = tipCard.querySelector('p').textContent;
    savedIdeas.push(tipText);
    updateSavedIdeas();
    alert("Tip saved as an idea!");
    // Load next tip logic could be added here
}

function updateSavedIdeas() {
    savedIdeasList.innerHTML = '';
    savedIdeas.forEach((idea, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${idea}`;
        savedIdeasList.appendChild(listItem);
    });
}

// Initialize with dashboard view
showPage('dashboard');
