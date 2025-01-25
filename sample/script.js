// Projects Section Interactive Features
document.addEventListener('DOMContentLoaded', () => {
    const projectItems = document.querySelectorAll('.project-item');
    
    // Add click event to project items
    projectItems.forEach(item => {
        item.addEventListener('click', () => {
            // Toggle detailed view or modal
            item.classList.toggle('expanded');
        });
    });

    // Dynamically add project tags
    function addProjectTags() {
        const projectTags = document.querySelectorAll('.project-tag');
        
        projectTags.forEach(tagContainer => {
            const tags = tagContainer.querySelectorAll('.tag');
            
            tags.forEach(tag => {
                tag.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent parent click event
                    console.log(`Clicked tag: ${tag.textContent}`);
                    // You could implement tag filtering logic here
                });
            });
        });
    }

    // Initialize tag interactions
    addProjectTags();

    // Optional: Filter projects (placeholder function)
    function filterProjects(tag) {
        projectItems.forEach(item => {
            const itemTags = item.querySelectorAll('.tag');
            const isVisible = Array.from(itemTags).some(t => t.textContent.toLowerCase().includes(tag.toLowerCase()));
            
            item.style.display = isVisible ? 'block' : 'none';
        });
    }
});