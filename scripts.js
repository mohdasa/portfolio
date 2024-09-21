// // List of projects
// const projects = [
//     {
//         title: 'Institute Management Application',
//         description: 'An application for managing institute operations including student data, courses, and attendance. This project integrates advanced database management, user authentication, and reporting features to streamline academic administration.',
//         imageUrl: 'pictures/science.png', // Path to your image
//         liveLink: 'https://www.example.com/institute-management',
//         codeLink: 'https://github.com/username/institute-management'
//     },
//     {
//         title: 'Xirves',
//         description: 'A voice assistant built in Python to help with daily tasks and queries. It uses natural language processing to understand user commands and provide intelligent responses.',
//         imageUrl: 'pictures/python.png', // Path to your image
//         liveLink: 'https://www.example.com/xirves',
//         codeLink: 'https://github.com/username/xirves'
//     },
//     {
//         title: 'Service Centre Management',
//         description: 'A Python-based application for managing service center operations and customer interactions. It includes features for scheduling, customer support, and inventory management.',
//         imageUrl: 'pictures/java.png', // Path to your image
//         liveLink: 'https://www.example.com/service-centre-management',
//         codeLink: 'https://github.com/username/service-centre-management'
//     },
//     {
//         title: 'Weather Application',
//         description: 'An Android application built in Java to provide real-time weather updates. It fetches data from an API and presents it in a user-friendly interface.',
//         imageUrl: 'pictures/appli.png', // Path to your image
//         liveLink: 'https://www.example.com/weather-app',
//         codeLink: 'https://github.com/username/weather-application'
//     },
//     {
//         title: 'Future Android Project 1',
//         description: 'Description for future Android project 1. This project aims to solve a specific problem using mobile technology.',
//         imageUrl: 'pictures/app.png', // Path to your image
//         liveLink: 'https://www.example.com/future-project1',
//         codeLink: 'https://github.com/username/future-project1'
//     },
//     {
//         title: 'Future Android Project 2',
//         description: 'Description for future Android project 2. This project will utilize machine learning algorithms for enhanced performance.',
//         imageUrl: 'pictures/edu.jpg', // Path to your image
//         liveLink: 'https://www.example.com/future-project2',
//         codeLink: 'https://github.com/username/future-project2'
//     }
// ];

// // Function to generate project cards dynamically
// function loadProjects() {
//     const projectsGrid = document.getElementById('projects-grid');
//     projects.forEach(project => {
//         const card = document.createElement('div');
//         card.classList.add('project-card');

//         card.innerHTML = `
//             <div class="project-inner" style="background-image: url('${project.imageUrl}');">
//                 <h2 class="project-title">${project.title}</h2>
//                 <p class="project-description">${project.description}</p>
//                 <div class="project-buttons">
//                     <a href="${project.liveLink}" class="btn-live" target="_blank">Live Demo</a>
//                     <a href="${project.codeLink}" class="btn-code" target="_blank">Source Code</a>
//                 </div>
//             </div>
//         `;

//         projectsGrid.appendChild(card);
//     });
// }

// // Load projects on page load
// window.onload = loadProjects;
