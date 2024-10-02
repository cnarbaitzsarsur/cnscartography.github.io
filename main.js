document.addEventListener('DOMContentLoaded', function () {
    const filterBtns = document.querySelectorAll('.filterbtn');
    const projects = document.querySelectorAll('.container');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;

            projects.forEach(project => {
                const projectFilters = project.dataset.filter.split(' ');
                if (filter === 'all' || projectFilters.includes(filter)) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
});

window.onload = function() {
    w3.slideshow(".slide", 2000);
  };