// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch projects from GitHub API
    fetch('https://api.github.com/users/jt-tanui/repo s')
        .then(response => response.json())
        .then(data => {
            const projectList = document.querySelector('.project-list');

            // Display each project as a list item
            data.forEach(project => {
                const projectItem = document.createElement('div');
                projectItem.classList.add('project-item');
                projectItem.innerHTML = `
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <a href="${project.html_url}" target="_blank">View on GitHub</a>
                `;
                projectList.appendChild(projectItem);
            });
        })
        .catch(error => console.error('Error fetching GitHub projects:', error));

    // Function to fetch certificates from GitHub Gist (assuming it's in JSON format)
    fetch('https://api.github.com/gists/gist_id')
        .then(response => response.json())
        .then(data => {
            const certificateList = document.querySelector('.certificate-list');

            // Display each certificate as a list item
            Object.keys(data.files).forEach(filename => {
                const certificateItem = document.createElement('div');
                certificateItem.classList.add('certificate-item');
                certificateItem.innerHTML = `
                    <h3>${filename}</h3>
                    <p>${data.files[filename].content}</p>
                `;
                certificateList.appendChild(certificateItem);
            });
        })
        .catch(error => console.error('Error fetching GitHub Gist:', error));
});
