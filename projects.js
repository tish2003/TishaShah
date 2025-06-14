// Projects data with your specific project names
const projects = [
    {
        name: "SnapOCR",
        type: "Web app",
        url: "https://github.com/yourusername/snapocr"
    },
    {
        name: "AiVerse",
        type: "Website",
        url: "https://github.com/yourusername/aiverse"
    },
    {
        name: "Google Maps Scrapper",
        type: "Web app",
        url: "https://github.com/yourusername/google-maps-scrapper"
    },
    {
        name: "Journal",
        type: "Web app",
        url: "https://github.com/yourusername/journal"
    },
    {
        name: "FlashCards",
        type: "Web app",
        url: "https://github.com/yourusername/flashcards"
    }
];

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    renderDesktopFolders();
});

// Render desktop-style folders
function renderDesktopFolders() {
    const grid = document.getElementById('desktop-grid');
    
    projects.forEach((project, index) => {
        const folderElement = createDesktopFolder(project, index);
        grid.appendChild(folderElement);
    });
}

// Create desktop folder element
function createDesktopFolder(project, index) {
    const folder = document.createElement('div');
    folder.className = `desktop-folder folder-${project.type}`;
    
    folder.innerHTML = `
        <div class="folder-icon">
            <div class="folder-back"></div>
            <div class="folder-front"></div>
            <div class="folder-tab"></div>
        </div>
        <div class="folder-label">${project.name}</div>
        <div class="folder-type">${getTypeLabel(project.type)}</div>
    `;
    
    // Add double-click event
    folder.addEventListener('dblclick', () => {
        openProject(folder, project);
    });
    
    // Add single-click selection
    folder.addEventListener('click', () => {
        selectFolder(folder);
    });
    
    return folder;
}

// Get type label for display
function getTypeLabel(type) {
    const labels = {
        'Web': 'Web',
        'mobile': 'Mobile',
        'data': 'Data',
        'game': 'Game'
    };
    return labels[type] || 'Project';
}

// Select folder (single click)
function selectFolder(folder) {
    // Remove selection from all folders
    document.querySelectorAll('.desktop-folder').forEach(f => {
        f.classList.remove('selected');
    });
    
    // Select clicked folder
    folder.classList.add('selected');
}

// Open project (double click)
function openProject(folder, project) {
    // Add opening animation
    folder.classList.add('opening');
    
    // Remove animation class after animation completes
    setTimeout(() => {
        folder.classList.remove('opening');
    }, 300);
    
    // Open project URL
    setTimeout(() => {
        window.open(project.url, '_blank');
    }, 150);
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    const selected = document.querySelector('.desktop-folder.selected');
    
    if (e.key === 'Enter' && selected) {
        // Find the project data
        const folderIndex = Array.from(selected.parentNode.children).indexOf(selected);
        const project = projects[folderIndex];
        openProject(selected, project);
    }
});
