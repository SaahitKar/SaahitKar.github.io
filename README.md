<!DOCTYPE html>
<html>
    <head>
        <link rel = "stylesheet" href = "src/style.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
<script src="https://kit.fontawesome.com/cfbbd1f5fe.js" crossorigin="anonymous"></script>    
    <title>Saahit's Portfolio</title>
        <meta charset="UTF-8" />
    </head>
    <body>
        <section class = "hero">
            <nav>
                <img class = "logo" src = "src/images/pixlr-bg-result.png" alt = "Saahit Karumuri's Logo">
                <ul>
                    <li><a href = "#aboutme" >About</a></li>
                    <li><a href = "#proj" >Projects</a></li>
                    <li><a href = "#end" >Contact</a></li>
                </ul>
            </nav>
            <div class = "hero-area"> 
                <div class = "hero-text">
                    <h1>Saahit Karumuri</h1>
                    <p>Full Stack Developer</p>
                <div class = "button"> <a href = "#aboutme">About Me</a></div>
                </div>
                <div class = "socials"> 
                    <div>
                    <a href = "https://www.linkedin.com/in/saahit-karumuri-8058501b7/" class = "social">
                        <svg xmlns="http://www.w3.org/2000/svg" fill = "#ffffff" width="50" height="50" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    </a>
                </div>
                <div>
                    <a href = "https://github.com/SaahitKar" class = "social">
                        <svg xmlns="http://www.w3.org/2000/svg" fill = "#ffffff" width="50" height="50" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                </div>
                </div>
            </div>
        </section>
        <section class = "sub-section" id = "aboutme">
            <div class = "info">
                <h2>About Me</h2>
                <p>My name is Saahit Karumuri. I am currently a student at UTD pursuing a degree in Computer Science and a minor in Finance.</p>
                <h6>Skills</h6>
                <div>
                    <p class = "skill">Java</p>
                    <p class = "skill">C++</p>
                    <p class = "skill">Python</p> 
                    <p class = "skill">HTML/JavaScript/CSS</p>  
                    <p class = "skill">SQL</p>
                 </div>
            </div>
            <div class = "headshot-container">
                
            </div>
        </section>
        <section class="subsectalt" id = "proj">
            <h2>Projects</h2>
            <div class = "project-container">
                <div class = "project-card">
                    <img class = "project-image" src = "src/images/pics.png" alt = "Project 1">
                    <h3>Project One</h3>
                    <p class = "subtext">This project is a simulation of the current stock market. I worked on the front-end portion of this project.</p>
                    <hr/>
                    <p class = "subtext"><a class = "projlink" href = "https://github.com/NickBurnett/hackutd-sevenseas">View Here</a></p>
                </div>
                <div class = "project-card">
                    <img class = "project-image" src = "C:\Users\laxmo\OneDrive\Desktop\Portfolio Website\src\images\Screenshot 2022-01-11 094118.png" alt = "Project 2">
                    <h3>Project Two</h3>
                    <p class = "subtext">This project creates two hash tables and hashes them based on RGB value or names.</p>
                    <hr/>
                    <p class = "subtext"><a class = "projlink" href = "https://github.com/SaahitKar/ColorHashTable">View Here</a></p>
                </div>
                <div class = "project-card"> 
                    <img class = "project-image" src = "C:\Users\laxmo\OneDrive\Desktop\Portfolio Website\src\images\Screenshot 2022-01-15 134822.png" alt = "Project 3">
                    <h3>Project Three</h3>
                    <p class = "subtext">This program outputs any imbalances that occur during the creation of the tree and rotates to maintain the balance of the AVL tree.</p>
                    <hr/>
                    <p class = "subtext"><a class = "projlink" href = "https://github.com/SaahitKar/AVL-Tree">View Here</a></p>
                </div>
                <div class = "project-card"> 
                    <img class = "project-image" src = "C:\Users\laxmo\OneDrive\Desktop\Portfolio Website\src\images\Screenshot 2022-01-15 135747.png" alt = "Project 4">
                    <h3>Project Four</h3>
                    <p class = "subtext">This program simulates a game of MineSweeper with bombs placed in random locations around the board.</p>
                    <hr/>
                    <p class = "subtext"><a class = "projlink" href = "https://github.com/SaahitKar/MineSweeper">View Here</a></p>
                </div>
            </div>
        </section>
        <footer id = "end">
            <h4>Contact Me: </h4>
            <h5>Saahitkarumuri@gmail.com</h5>
        </footer>
        <script src = "src/app.js"></script>
    </body>
</html>
