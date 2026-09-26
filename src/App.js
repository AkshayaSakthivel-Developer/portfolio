import "./App.css";
import profile from "./assets/profile.jpg";

function App() {
  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({
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

          {/* ================= SOCIAL LINKS ================= */}
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


        {/* ================= PROFILE ================= */}
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

        <p className="section-subtitle">
          GET TO KNOW ME
        </p>

        <h2>About Me</h2>

        <p className="about-text">
          I am an aspiring Full Stack Developer passionate about creating
          responsive and user-friendly web applications. I am continuously
          improving my skills by building real-world projects and exploring
          modern web technologies.
        </p>


        <div className="about-cards">

          <div className="about-card">

            <h3>🎓 Education</h3>

            <p>
              Computer Science Background
            </p>

          </div>


          <div className="about-card">

            <h3>💻 Development</h3>

            <p>
              Frontend & Backend Development
            </p>

          </div>


          <div className="about-card">

            <h3>🚀 Goal</h3>

            <p>
              Build impactful web applications
            </p>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}
      <section id="skills" className="section skills-section">

        <p className="section-subtitle">
          WHAT I WORK WITH
        </p>

        <h2>My Skills</h2>


        <div className="skills">

          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Redux</span>
          <span>Python</span>
          <span>Django</span>
          <span>SQL</span>
          <span>MongoDB</span>
          <span>Express.js</span>
          <span>Node.js</span>
          <span>Git</span>
          <span>GitHub</span>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section projects-section">

        <p className="section-subtitle">
          MY WORK
        </p>

        <h2>Major Projects</h2>


        <div className="projects">

          {/* ================= MAJOR PROJECT 1 ================= */}
          <div className="project-card featured">

            <div className="project-number">
              01
            </div>

            <h3>
              E-Commerce Shopping Cart
            </h3>

            <p>
              A full-stack eCommerce application with product listing,
              authentication, shopping cart, checkout and order management.
            </p>

            <div className="project-tech">

              <span>React</span>
              <span>Redux</span>
              <span>Django</span>
              <span>REST API</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>


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


          {/* ================= MAJOR PROJECT 2 ================= */}
          <div className="project-card">

            <div className="project-number">
              02
            </div>

            <h3>
              Social Media App
            </h3>

            <p>
              A full-stack social media application focused on creating
              interactive user experiences with frontend and backend
              functionality.
            </p>

            <div className="project-tech">

              <span>React</span>
              <span>Django</span>
              <span>Redux</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>


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


          {/* ================= MAJOR PROJECT 3 ================= */}
          <div className="project-card">

            <div className="project-number">
              03
            </div>

            <h3>
              CampusFix
            </h3>

            <p>
              A full-stack campus service request management system
              that allows students to report issues and manage service
              requests through a user-friendly web application.
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

        <h2 className="mini-title">
          Mini Projects
        </h2>


        <div className="mini-projects">

          

            <a
  href="https://github.com/AkshayaSakthivel-Developer/Akshu-Fitness"
  target="_blank"
  rel="noopener noreferrer"
  className="mini-project-link"
>
  🏋️ Gym Website
  <span>View GitHub →</span>
</a>



            <a
  href="https://github.com/AkshayaSakthivel-Developer/Sumendhra-Cart"
  target="_blank"
  rel="noopener noreferrer"
  className="mini-project-link"
>
  🛒 E-Commerce Landing Page
  <span>View GitHub →</span>
</a>

     

             <a
  href="https://github.com/AkshayaSakthivel-Developer/Digital-Resume"
  target="_blank"
  rel="noopener noreferrer"
  className="mini-project-link"
>
  📄 Digital Resume — Light & Dark Theme
  <span>View GitHub →</span>
</a>
      

            <a
  href="https://github.com/AkshayaSakthivel-Developer/Bootstrap-Registration-Form"
  target="_blank"
  rel="noopener noreferrer"
  className="mini-project-link"
>
  📝 Responsive Registration Form — Bootstrap
  <span>View GitHub →</span>
</a>

            
            

            <a
  href="https://github.com/AkshayaSakthivel-Developer/JavaScript-Todo-List"
  target="_blank"
  rel="noopener noreferrer"
  className="mini-project-link"
>
  ✅ Todo List
  <span>View GitHub →</span>
</a>
            
          
            <a
  href="https://github.com/AkshayaSakthivel-Developer/JavaScript-Registration-Form"
  target="_blank"
  rel="noopener noreferrer"
  className="mini-project-link"
>
  👤 User Registration Form
  <span>View GitHub →</span>
</a>
            
         

            <a
  href="https://github.com/AkshayaSakthivel-Developer/Live-News-API"
  target="_blank"
  rel="noopener noreferrer"
  className="mini-project-link"
>
  📰 Live News API
  <span>View GitHub →</span>
</a>
         
            <a
  href="https://github.com/AkshayaSakthivel-Developer/React-Ecommerce-App"
  target="_blank"
  rel="noopener noreferrer"
  className="mini-project-link"
>
  🔐 E-Commerce Registration & Signup
  <span>View GitHub →</span>
</a>
            
         

            <a
  href="https://github.com/AkshayaSakthivel-Developer/React-Todo-List"
  target="_blank"
  rel="noopener noreferrer"
  className="mini-project-link"
>
  ⚛️ Todo List Application — React
  <span>View GitHub →</span>
</a>
         

            <a
  href="https://github.com/AkshayaSakthivel-Developer/React-Weather-App"
  target="_blank"
  rel="noopener noreferrer"
  className="mini-project-link"
>
  🌦️ Live Weather Application
  <span>View GitHub →</span>
</a>
            
         

            <a
  href="https://github.com/AkshayaSakthivel-Developer/React-Movie-Search-App"
  target="_blank"
  rel="noopener noreferrer"
  className="mini-project-link"
>
  🎬 Movie Search App
  <span>View GitHub →</span>
</a>
        

            <a
  href="https://github.com/AkshayaSakthivel-Developer/React-Book-Library"
  target="_blank"
  rel="noopener noreferrer"
  className="mini-project-link"
>
  📚 Book Library Management System
  <span>View GitHub →</span>
</a>
          

          <a
  href="https://github.com/AkshayaSakthivel-Developer/Electricity-Board-Management-System"
  target="_blank"
  rel="noopener noreferrer"
  className="mini-project-link"
>
  ⚡ Electricity Board Management System — Django & React
  <span>View GitHub →</span>
</a>

<a
  href="https://github.com/AkshayaSakthivel-Developer/Book-Store-MERN-Application"
  target="_blank"
  rel="noopener noreferrer"
  className="mini-project-link"
>
  🛍️ Book Store Application — MERN Stack
  <span>View GitHub →</span>
</a>

        </div>

      </section>


      {/* ================= CERTIFICATES ================= */}
<section id="certificates" className="section certificates-section">
  <p className="section-subtitle">MY ACHIEVEMENTS</p>
  
  <h2>Certificates</h2>

  <div className="certificates">

    <div className="certificate-card">
      <h3>Full Stack Development Course</h3>
      <p>GUVI HCL</p>
      <p>Issued: September 15, 2026</p>

      <a
        href="/certificates/Full-Stack.png"
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
        href="/certificates/git-in-tamil.pdf"
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
        href="/certificates/IV.jpeg"
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
        href="/certificates/MERN stack.jpg"
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
        href="/certificates/Phishing attack.jpg"
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
        href="/certificates/Integration and Deployment.jpg"
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
        href="/certificates/Spoken Eng.jpeg"
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

        <p className="section-subtitle">
          GET IN TOUCH
        </p>

        <h2>
          Let's Connect
        </h2>

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


    </div>
  );
}

export default App;