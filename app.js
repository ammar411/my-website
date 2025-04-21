function Navbar() {
  return (
    <nav className="navbar">
      <a href="#about">About</a>
      <a href="#work">Work</a>
      <a href="#projects">Projects</a>
      <a href="#certifications">Certifications</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

function Hero() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Ammar_Khalid_Resume.pdf";
    link.click();
  };

  return (
    <section className="hero-section">
      <img src="p.jpg" alt="Ammar" />
      <h1>Hello, I'm Ammar Khalid</h1>
      <h2>Software Engineer (FullStack Developer)</h2>
      <p>Based in Pakistan</p>
      <button className="btn" onClick={downloadResume}>Resume</button>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About</h2>
      <p>
      I am a passionate Software Engineer with two years of experience in frontend and backend development. My expertise lies in crafting efficient, scalable, and user-friendly web applications using modern technologies.

I specialize in HTML, CSS, JavaScript, React.js, and Bootstrap, creating intuitive and responsive user interfaces. On the backend, I work with PHP, REST APIs, and SQL databases to develop robust and secure systems.

With a strong focus on clean code, performance optimization, and user experience, I strive to build high-quality solutions that meet both business and user needs.
      </p>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="section">
      <h2 className="section-title">Work Experience</h2>
      <div className="work-card">Web Developer-Team Lead Intern (July 24-Sep 24)</div>
      <div className="work-card">Frontend Developer (Feb 24-May 24)</div>
      <div className="work-card">Freelancing Developer (Feb 2022-May 2023)</div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="project-card"> <a href="https://github.com/ammar411/Food-Delivery-Website">Online Food Delivery Website</a> </div>
      <div className="project-card"><a href="https://github.com/ammar411/Services-Website">E-Commerce Website</a></div>
      <div className="project-card"> <a href="https://github.com/ammar411/E-Commerce-Website"> Bussiness Website for online store</a></div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="section">
      <h2 className="section-title">Certifications</h2>
      <div className="cert-card">Full Stack Web Development - ITsoler Pvt Ltd</div>
      <div className="cert-card">React JS Certification - Web Developer Ezitech Solutions</div>
  
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <p>Email: ammarmalik046@gmail.com</p>
      <p>Phone: +923345865096</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/ammar-khalid-15883b247" target="_blank">LinkedIn</a></p>
      <p>GitHub: <a href="https://github.com/ammar411" target="_blank">GitHub</a></p>
    </section>
  );
}

function Footer() {
  return <footer>&copy; 2024 Ammar Khalid. All rights reserved.</footer>;
}

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
