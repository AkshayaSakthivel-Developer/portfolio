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
        <h2 className="logo">Akshaya.</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
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

          <div className="social-links">
            <a href="#contact">GitHub</a>
            <a href="#contact">LinkedIn</a>
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

        <h2>Featured Projects</h2>


        <div className="projects">


          {/* Project 1 */}
          <div className="project-card featured">

            <div className="project-number">
              01
            </div>

            <h3>
              eCommerce Website
            </h3>

            <p>
              A full-stack eCommerce application with product listing,
              authentication, cart, checkout and order management.
            </p>

            <div className="project-tech">

              <span>React</span>
              <span>Redux</span>
              <span>Django</span>
              <span>REST API</span>

            </div>

            <button className="project-btn">
              View Project →
            </button>

          </div>


          {/* Project 2 */}
          <div className="project-card">

            <div className="project-number">
              02
            </div>

            <h3>
              Social Media App
            </h3>

            <p>
              Full-stack project showcasing frontend and backend
              development skills.
            </p>

            <div className="project-tech">

              <span>React</span>
              
              <span>Django</span>

            </div>

            <button className="project-btn">
              View Project →
            </button>

          </div>


          {/* Project 3 */}
          {/* <div className="project-card">

            <div className="project-number">
              03
            </div>

            <h3>
              Major Project 3
            </h3>

            <p>
              New full-stack project currently under development.
            </p>

            <div className="project-tech">

              <span>React</span>
              <span>Backend</span>
              <span>Database</span>

            </div>

            <button className="project-btn">
              Coming Soon
            </button>

          </div> */}

        </div>


        {/* Mini Projects */}
        <h2 className="mini-title">
          Mini Projects
        </h2>


        <div className="mini-projects">

          <div>
            🌦️ Weather App
          </div>

          <div>
            📰 News App
          </div>

          <div>
            ✅ Todo App
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
            📧 your-email@gmail.com
          </p>

          <p>
            🔗 LinkedIn — Coming Soon
          </p>

          <p>
            💻 GitHub — Coming Soon
          </p>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer>

        <p>
          © 2026 Akshaya Sakthivel. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;