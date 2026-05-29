// ===================================
// ZubairToolsLab - Tools Renderer
// Dynamically loads and displays tools
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    renderAllTools();
    renderPopularTools();
    initLoadMore();
});

// Render All Tools Grid
function renderAllTools() {
    const toolsGrid = document.getElementById('toolsGrid');
    if (!toolsGrid) return;
    
    toolsGrid.innerHTML = '';
    
    toolsData.forEach(tool => {
        const toolCard = createToolCard(tool);
        toolsGrid.appendChild(toolCard);
    });
}

// Render Popular Tools
function renderPopularTools() {
    const popularToolsGrid = document.getElementById('popularToolsGrid');
    if (!popularToolsGrid) return;
    
    const popularTools = toolsData.filter(tool => tool.popular).slice(0, 8);
    
    popularToolsGrid.innerHTML = '';
    
    popularTools.forEach(tool => {
        const toolCard = createToolCard(tool);
        popularToolsGrid.appendChild(toolCard);
    });
}

// Create Tool Card Element
function createToolCard(tool) {
    const card = document.createElement('div');
    card.className = 'tool-card fade-in';
    card.dataset.category = tool.category;
    card.dataset.id = tool.id;
    card.setAttribute('role', 'article');
    card.setAttribute('aria-label', `${tool.name} - ${tool.description}`);
    
    // Create tags HTML
    const tagsHtml = tool.tags.map(tag => 
        `<span class="tool-tag">${tag}</span>`
    ).join('');
    
    card.innerHTML = `
        <a href="${tool.url}" style="text-decoration: none; color: inherit;">
            <span class="tool-icon" aria-hidden="true">${tool.icon}</span>
            <h3 class="tool-title">${tool.name}</h3>
            <p class="tool-description">${tool.description}</p>
            <div class="tool-tags">
                ${tagsHtml}
            </div>
        </a>
    `;
    
    // Add click tracking
    card.addEventListener('click', () => {
        trackToolUsage(tool.id);
    });
    
    return card;
}

// Load More Functionality
function initLoadMore() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const toolsGrid = document.getElementById('toolsGrid');
    
    if (loadMoreBtn && toolsGrid) {
        let visibleCount = 24;
        const toolCards = Array.from(toolsGrid.querySelectorAll('.tool-card'));
        
        // Hide tools beyond initial count
        toolCards.slice(visibleCount).forEach(card => {
            card.style.display = 'none';
        });
        
        loadMoreBtn.addEventListener('click', () => {
            visibleCount += 24;
            toolCards.slice(0, visibleCount).forEach(card => {
                card.style.display = 'block';
            });
            
            if (visibleCount >= toolCards.length) {
                loadMoreBtn.style.display = 'none';
            }
        });
        
        // Show/hide button based on total tools
        if (toolCards.length <= visibleCount) {
            loadMoreBtn.style.display = 'none';
        }
    }
}

// Filter Tools by Category (called from main.js)
function filterByCategory(category) {
    const toolsGrid = document.getElementById('toolsGrid');
    if (!toolsGrid) return;
    
    const toolCards = toolsGrid.querySelectorAll('.tool-card');
    
    toolCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            card.classList.add('fade-in');
        } else {
            card.style.display = 'none';
        }
    });
}

// Search Tools (called from main.js)
function filterTools(query) {
    const toolsGrid = document.getElementById('toolsGrid');
    if (!toolsGrid) return;
    
    const toolCards = toolsGrid.querySelectorAll('.tool-card');
    
    toolCards.forEach(card => {
        const title = card.querySelector('.tool-title')?.textContent.toLowerCase() || '';
        const description = card.querySelector('.tool-description')?.textContent.toLowerCase() || '';
        const tags = card.querySelectorAll('.tool-tag');
        
        const matchesSearch = title.includes(query) || 
                             description.includes(query) ||
                             Array.from(tags).some(tag => tag.textContent.toLowerCase().includes(query));
        
        card.style.display = matchesSearch ? 'block' : 'none';
    });
}

// Show All Tools (called from main.js)
function showAllTools() {
    const toolsGrid = document.getElementById('toolsGrid');
    if (!toolsGrid) return;
    
    const toolCards = toolsGrid.querySelectorAll('.tool-card');
    toolCards.forEach(card => {
        card.style.display = 'block';
    });
}

// Get Tool by ID
function getToolById(id) {
    return toolsData.find(tool => tool.id === id);
}

// Get Tools by Category
function getToolsByCategory(category) {
    return toolsData.filter(tool => tool.category === category);
}

// Get Random Tools
function getRandomTools(count = 5) {
    const shuffled = [...toolsData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

console.log('Tools renderer initialized! 🛠️');
