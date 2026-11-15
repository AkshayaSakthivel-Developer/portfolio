
import "./App.css";
import profile from "./assets/profile.jpg";

function App() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="App">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <h2 className="logo">Akshaya Sakthivel</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>

          <a
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            download="Akshaya_Sakthivel_Resume.pdf"
            className="secondary-btn"
          >
            Download Resume
          </a>
        </div>
      </nav>

      {/* ================= HOME ================= */}
      <section id="home" className="home">
        <div className="home-content">
          <p className="hello">Hello, I'm</p>

          <h1>Akshaya Sakthivel</h1>

          <h2>
            Full Stack <span>Developer</span>
          </h2>

          <p className="intro">
            I build responsive and user-friendly web applications using
            modern technologies. I enjoy turning ideas into functional
            and meaningful digital experiences.
          </p>

          <div className="home-buttons">
            <button
              onClick={scrollToProjects}
              className="primary-btn"
            >
              View My Projects
            </button>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="social-links">
            <a
              href="https://github.com/AkshayaSakthivel-Developer"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/akshaya-sakthivel-4140162b4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* PROFILE */}
        <div className="profile-container">
          <img
            src={profile}
            alt="Akshaya Sakthivel"
            className="profile-image"
          />

          <div className="profile-tag">
            <span>💻</span>
            Building & Learning
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="section about-section">
        <p className="section-subtitle">GET TO KNOW ME</p>

        <h2>About Me</h2>

        <p className="about-text">
          I am a passionate Full-Stack Developer with a strong foundation
          in Computer Science and a keen interest in building modern web
          applications. I have hands-on experience working with React.js,
          JavaScript, Redux, Python, Django, Node.js, Express.js, and
          databases through academic and personal projects.

          I enjoy developing responsive user interfaces, integrating REST
          APIs, implementing CRUD operations, and solving real-world
          problems through technology. I am currently pursuing my M.Sc.
          in Computer Science and continuously improving my development
          skills to become a professional software developer.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>🎓 Education</h3>
            <p>
              B.Sc. Computer Science Graduate | Currently Pursuing M.Sc.
              Computer Science at Rajeswari College of Arts and Science
              for Women.
            </p>
          </div>

          <div className="about-card">
            <h3>💻 Development</h3>
            <p>
              Building web applications using React.js, Redux, Python,
              Django, Node.js, Express.js, and database technologies.
            </p>
          </div>

          <div className="about-card">
            <h3>🚀 Goal</h3>
            <p>
              To become a skilled Full-Stack Developer and create
              responsive, user-friendly, and impactful web applications.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="section skills-section">
        <p className="section-subtitle">WHAT I WORK WITH</p>

        <h2>My Skills</h2>

        <div className="skills">
          <div className="skill-category">
            <h3>Frontend Development</h3>
            <div className="skill-items">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>React.js</span>
              <span>Redux</span>
              <span>Bootstrap</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Backend Development</h3>
            <div className="skill-items">
              <span>Python</span>
              <span>Django</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>REST APIs</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Database</h3>
            <div className="skill-items">
              <span>MySQL</span>
              <span>MongoDB</span>
              <span>SQL</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Development Tools</h3>
            <div className="skill-items">
              <span>Git</span>
              <span>GitHub</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section projects-section">
        <p className="section-subtitle">MY WORK</p>

        <h2>Major Projects</h2>

        <div className="projects">

          {/* MAJOR PROJECT 1 */}
          <div className="project-card featured">
            <div className="project-number">01</div>

            <h3>E-Commerce Shopping Cart</h3>

            <p>
              A full-stack eCommerce application with product listing,
              authentication, shopping cart, checkout and order management.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>Redux</span>
              <span>Python</span>
              <span>Django REST Framework</span>
              <span>MySQL</span>
            </div>

            <a
              href="https://github.com/AkshayaSakthivel-Developer/E-commerce-App"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View Project →
            </a>
          </div>

          {/* MAJOR PROJECT 2 */}
          <div className="project-card">
            <div className="project-number">02</div>

            <h3>Social Media App</h3>

            <p>
              A React-based social media application designed to provide
              an interactive user experience with reusable components
              and state management using Redux.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>Redux</span>
              <span>JavaScript</span>
            </div>

            <a
              href="https://github.com/AkshayaSakthivel-Developer/Social-Media-App"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View Project →
            </a>
          </div>

          {/* MAJOR PROJECT 3 */}
          <div className="project-card">
            <div className="project-number">03</div>

            <h3>CampusFix</h3>

            <p>
              A full-stack campus service request management system
              that enables students to report campus issues, track
              request status, and helps staff and administrators
              manage service requests through role-based access.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
            </div>

            <a
              href="https://github.com/AkshayaSakthivel-Developer/CampusFix"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View Project →
            </a>
          </div>
        </div>

        {/* ================= MINI PROJECTS ================= */}
        <h2 className="mini-title">Mini Projects</h2>

        <div className="mini-projects">

          {/* 1 */}
          <div className="mini-project-link">
            <div className="mini-project-content">
              <h3>🏋️ Akshu Fitness – Gym Website</h3>
              <p>
                A beginner-friendly frontend gym website developed
                using HTML and CSS. It showcases gym services,
                fitness programs, member testimonials, and contact
                information with a responsive layout.
              </p>
              <div className="project-tech">
                <span>HTML5</span>
                <span>CSS3</span>
              </div>
            </div>
            <a href="https://github.com/AkshayaSakthivel-Developer/Akshu-Fitness" target="_blank" rel="noopener noreferrer">
              View GitHub →
            </a>
          </div>

          {/* 2 */}
          <div className="mini-project-link">
            <div className="mini-project-content">
              <h3>🛒 Sumendhra Cart – E-Commerce Landing Page</h3>
              <p>
                A frontend e-commerce landing page developed using
                HTML and CSS. It showcases product categories,
                promotional offers, product details, and a contact
                form to provide a simple online shopping interface.
              </p>
              <div className="project-tech">
                <span>HTML5</span>
                <span>CSS3</span>
              </div>
            </div>
            <a href="https://github.com/AkshayaSakthivel-Developer/Sumendhra-Cart" target="_blank" rel="noopener noreferrer">
              View GitHub →
            </a>
          </div>

          {/* 3 */}
          <div className="mini-project-link">
            <div className="mini-project-content">
              <h3>📄 Digital Resume – Light & Dark Theme</h3>
              <p>
                A personal digital resume website developed to
                showcase profile details, technical skills,
                education, and projects. Includes light and dark
                theme switching with JavaScript and localStorage
                to remember the selected theme.
              </p>
              <div className="project-tech">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>localStorage</span>
              </div>
            </div>
            <a href="https://github.com/AkshayaSakthivel-Developer/Digital-Resume" target="_blank" rel="noopener noreferrer">
              View GitHub →
            </a>
          </div>

          {/* 4 */}
          <div className="mini-project-link">
            <div className="mini-project-content">
              <h3>📝 Responsive Registration Form</h3>
              <p>
                A responsive event registration form developed
                using HTML and Bootstrap 5. It includes input
                fields for first name, last name, email, password,
                and password confirmation, with a clean and
                mobile-friendly layout.
              </p>
              <div className="project-tech">
                <span>HTML5</span>
                <span>Bootstrap 5</span>
              </div>
            </div>
            <a href="https://github.com/AkshayaSakthivel-Developer/Bootstrap-Registration-Form" target="_blank" rel="noopener noreferrer">
              View GitHub →
            </a>
          </div>

          {/* 5 */}
          <div className="mini-project-link">
            <div className="mini-project-content">
              <h3>📝 Akshu Todo List</h3>
              <p>
                A dynamic Todo List application developed using
                HTML, CSS, JavaScript, and Bootstrap. Users can
                add tasks, mark them as completed, and delete
                them. It uses localStorage to save tasks and
                restore them even after refreshing the page.
              </p>
              <div className="project-tech">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>Bootstrap 5</span>
                <span>localStorage</span>
              </div>
            </div>
            <a href="https://github.com/AkshayaSakthivel-Developer/JavaScript-Todo-List" target="_blank" rel="noopener noreferrer">
              View GitHub →
            </a>
          </div>

          {/* 6 */}
          <div className="mini-project-link">
            <div className="mini-project-content">
              <h3>📋 JavaScript Registration Form – ES6 Classes</h3>
              <p>
                A registration management application developed
                using HTML, Bootstrap 5, and JavaScript ES6 classes.
                It allows users to register, validates input details,
                displays registered users in a table, and provides
                search functionality by name, email, or gender.
              </p>
              <div className="project-tech">
                <span>HTML5</span>
                <span>Bootstrap 5</span>
                <span>JavaScript</span>
                <span>ES6 Classes</span>
                <span>DOM Manipulation</span>
              </div>
            </div>
            <a href="https://github.com/AkshayaSakthivel-Developer/JavaScript-Registration-Form" target="_blank" rel="noopener noreferrer">
              View GitHub →
            </a>
          </div>

          {/* 7 */}
          <div className="mini-project-link">
            <div className="mini-project-content">
              <h3>📰 Live News Application</h3>
              <p>
                A live news application developed using React and
                NewsAPI. It fetches the latest headlines based on
                different news categories and displays articles
                with titles, descriptions, images, authors, and
                publication dates. Users can explore news
                categories and read full articles.
              </p>
              <div className="project-tech">
                <span>React.js</span>
                <span>JavaScript</span>
                <span>React Router</span>
                <span>Bootstrap 5</span>
                <span>NewsAPI</span>
                <span>Fetch API</span>
              </div>
            </div>
            <a href="https://github.com/AkshayaSakthivel-Developer/Live-News-API" target="_blank" rel="noopener noreferrer">
              View GitHub →
            </a>
          </div>

          {/* 8 */}
          <div className="mini-project-link">
            <div className="mini-project-content">
              <h3>🛍️ React E-Commerce Application</h3>
              <p>
                A responsive e-commerce application developed
                using React.js and Bootstrap. It provides product
                browsing, product detail views, and user login
                and signup screens through reusable React
                components.
              </p>
              <div className="project-tech">
                <span>React.js</span>
                <span>JavaScript</span>
                <span>Bootstrap 5</span>
                <span>React Bootstrap</span>
                <span>React Router DOM</span>
              </div>
            </div>
            <a href="https://github.com/AkshayaSakthivel-Developer/React-Ecommerce-App" target="_blank" rel="noopener noreferrer">
              View GitHub →
            </a>
          </div>

          {/* 9 */}
          <div className="mini-project-link">
            <div className="mini-project-content">
              <h3>✅ React Todo List Application</h3>
              <p>
                A responsive Todo List application developed
                using React.js and React Bootstrap. Users can
                add new tasks, mark tasks as completed, undo
                completed tasks, and delete them. It uses React
                Hooks and localStorage to manage and preserve
                tasks across page refreshes.
              </p>
              <div className="project-tech">
                <span>React.js</span>
                <span>JavaScript</span>
                <span>React Hooks</span>
                <span>React Bootstrap</span>
                <span>localStorage</span>
              </div>
            </div>
            <a href="https://github.com/AkshayaSakthivel-Developer/React-Todo-List" target="_blank" rel="noopener noreferrer">
              View GitHub →
            </a>
          </div>

          {/* 10 */}
          <div className="mini-project-link">
            <div className="mini-project-content">
              <h3>🌤️ React Weather Application</h3>
              <p>
                A weather application developed using React.js
                and the OpenWeatherMap API. Users can search for
                a city to retrieve current weather information.
                It uses Axios for API requests, React Hooks for
                state management, and React Bootstrap for the
                user interface and error messages.
              </p>
              <div className="project-tech">
                <span>React.js</span>
                <span>JavaScript</span>
                <span>React Hooks</span>
                <span>Axios</span>
                <span>OpenWeatherMap API</span>
                <span>React Bootstrap</span>
              </div>
            </div>
            <a href="https://github.com/AkshayaSakthivel-Developer/React-Weather-App" target="_blank" rel="noopener noreferrer">
              View GitHub →
            </a>
          </div>

          {/* 11 */}
          <div className="mini-project-link">
            <div className="mini-project-content">
              <h3>🎬 React Movie Search Application</h3>
              <p>
                A movie search application developed using
                React.js and the OMDb API. Users can search
                for movies by title, view movie posters and
                release years, and explore detailed information
                including plot, director, and cast. Axios is
                used to fetch movie data, with React Bootstrap
                for the user interface.
              </p>
              <div className="project-tech">
                <span>React.js</span>
                <span>JavaScript</span>
                <span>React Hooks</span>
                <span>Axios</span>
                <span>OMDb API</span>
                <span>React Bootstrap</span>
              </div>
            </div>
            <a href="https://github.com/AkshayaSakthivel-Developer/React-Movie-Search-App" target="_blank" rel="noopener noreferrer">
              View GitHub →
            </a>
          </div>

          {/* 12 */}
          <div className="mini-project-link">
            <div className="mini-project-content">
              <h3>📚 React Book Library Management System</h3>
              <p>
                A book library management application developed
                using React.js, React Router DOM, and Context API.
                It allows users to view, add, edit, and manage
                book records through separate pages. It uses
                centralized state management with BookContext
                and dynamic routing for navigation.
              </p>
              <div className="project-tech">
                <span>React.js</span>
                <span>JavaScript</span>
                <span>React Router DOM</span>
                <span>Context API</span>
              </div>
            </div>
            <a href="https://github.com/AkshayaSakthivel-Developer/React-Book-Library" target="_blank" rel="noopener noreferrer">
              View GitHub →
            </a>
          </div>

          {/* 13 */}
          <div className="mini-project-link">
            <div className="mini-project-content">
              <h3>⚡ Electricity Board Management System</h3>
              <p>
                A full-stack Electricity Board Management System
                developed using React.js and Django. It manages
                electricity connection applications, applicant
                information, connection details, application
                statuses, and reviewer information.
              </p>
              <div className="project-tech">
                <span>React.js</span>
                <span>Python</span>
                <span>Django</span>
                <span>Django ORM</span>
                <span>Database</span>
              </div>
            </div>
            <a
              href="https://github.com/AkshayaSakthivel-Developer/Electricity-Board-Management-System"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub →
            </a>
          </div>

          {/* 14 */}
          <div className="mini-project-link">
            <div className="mini-project-content">
              <h3>📚 Book Store Application (MERN Stack)</h3>
              <p>
                A full-stack Book Store application developed using
                the MERN stack. It allows users to add, view, update,
                delete, and search book records. The application uses
                React for the frontend, Node.js and Express.js for
                REST API development, and MongoDB for database
                management.
              </p>
              <div className="project-tech">
                <span>React.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>Mongoose</span>
                <span>Axios</span>
                <span>React Bootstrap</span>
              </div>
            </div>
            <a href="https://github.com/AkshayaSakthivel-Developer/Book-Store-MERN-Application" target="_blank" rel="noopener noreferrer">
              View GitHub →
            </a>
          </div>

        </div>
      </section>

      {/* ================= CERTIFICATES ================= */}
      <section
        id="certificates"
        className="section certificates-section"
      >
        <p className="section-subtitle">MY ACHIEVEMENTS</p>

        <h2>Certificates</h2>

        <div className="certificates">

          <div className="certificate-card">
            <h3>Full Stack Development Course</h3>
            <p>GUVI HCL</p>
            <p>Issued: September 15, 2026</p>
            <a
              href={`${process.env.PUBLIC_URL}/certificates/Full-Stack.png`}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-btn"
            >
              View Certificate →
            </a>
          </div>

          <div className="certificate-card">
            <h3>Git in Tamil</h3>
            <p>GUVI</p>
            <p>Issued: March 8, 2026</p>
            <a
              href={`${process.env.PUBLIC_URL}/certificates/Git Certificate.png`}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-btn"
            >
              View Certificate →
            </a>
          </div>

          <div className="certificate-card">
            <h3>Artificial Intelligence Industrial Training</h3>
            <p>Kaashiv Infotech</p>
            <p>Issued: July 19, 2024</p>
            <a
              href={`${process.env.PUBLIC_URL}/certificates/IV.jpeg`}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-btn"
            >
              View Certificate →
            </a>
          </div>

          <div className="certificate-card">
            <h3>MERN Stack Bootcamp</h3>
            <p>NoviTech R&D Private Limited</p>
            <p>3-hour Bootcamp · August 25, 2024</p>
            <a
              href={`${process.env.PUBLIC_URL}/certificates/MERN stack.jpg`}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-btn"
            >
              View Certificate →
            </a>
          </div>

          <div className="certificate-card">
            <h3>Phishing Attacks: Detection and Prevention</h3>
            <p>NoviTech R&D Private Limited</p>
            <p>1-hour Webinar · November 9, 2024</p>
            <a
              href={`${process.env.PUBLIC_URL}/certificates/Phishing attack.jpg`}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-btn"
            >
              View Certificate →
            </a>
          </div>

          <div className="certificate-card">
            <h3>Continuous Integration & Deployment Mastery</h3>
            <p>NoviTech R&D Private Limited</p>
            <p>1-hour Webinar · November 9, 2024</p>
            <a
              href={`${process.env.PUBLIC_URL}/certificates/Integration and Deployment.jpg`}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-btn"
            >
              View Certificate →
            </a>
          </div>

          <div className="certificate-card">
            <h3>Spoken English Course</h3>
            <p>SRM</p>
            <p>Course Completion Certificate</p>
            <a
              href={`${process.env.PUBLIC_URL}/certificates/Spoken Eng.jpeg`}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-btn"
            >
              View Certificate →
            </a>
          </div>

        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="section contact-section">
        <p className="section-subtitle">GET IN TOUCH</p>

        <h2>Let's Connect</h2>

        <p>
          I'm always interested in learning, building projects and
          exploring new opportunities.
        </p>

        <div className="contact-info">
          <p>
            📧 Email —{" "}
            <a href="mailto:akshayasakthivel2004@gmail.com">
              akshayasakthivel2004@gmail.com
            </a>
          </p>

          <p>
            🔗 LinkedIn —{" "}
            <a
              href="https://linkedin.com/in/akshaya-sakthivel-4140162b4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/akshaya-sakthivel-4140162b4/
            </a>
          </p>

          <p>
            💻 GitHub —{" "}
            <a
              href="https://github.com/AkshayaSakthivel-Developer"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/AkshayaSakthivel-Developer
            </a>
          </p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer>
        <p>© 2026 Akshaya Sakthivel. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;
