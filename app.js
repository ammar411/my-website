function Navbar() {
  return (
      <nav className="navbar">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
      </nav>
  );
}

function Hero() {
  const downloadResume = () => {
    // Trigger the download of the resume PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to your PDF
    link.download = 'Ammar_Khalid_Resume.pdf'; // Filename for the downloaded file
    link.click();
  };

  return (
      <section className="hero-section">
          <img src="photo.jpg" alt="Ammar" />
          <h1>Hello, I'm Ammar Khalid</h1>
          <h2>Software Engineer (FullStack Developer)</h2>
          <p>Based in Pakistan</p>
          <button className="btn btn-primary" onClick={downloadResume}>Resume</button>
      </section>
  );
}


function About() {
  return (
      <section id="about" className="section">
          <h2 className="section-title">About</h2>
          <p>Hello! I'm a passionate software engineer with over a year of experience in developing and maintaining websites through both freelancing and internships. During this time, I’ve gained a solid understanding of the full software development lifecycle (SDLC), using Agile methodologies to deliver high-quality, scalable web applications.

I specialize in frontend development with expertise in HTML, CSS, JavaScript, React.js, and Bootstrap, while also having a strong foundation in backend development using PHP, REST APIs, and SQL databases. I’m always eager to learn new technologies and improve my skills to create seamless and user-friendly digital experiences.

My goal is to continue growing as a full-stack developer, leveraging my knowledge to build innovative solutions. I’m excited about new opportunities and challenges in the tech world, and I am always looking to collaborate on projects that make an impact.

Let’s connect!

</p>
          
      </section>
  );
}

function Work() {
  return (
      <section id="work" className="section">
          <h2 className="section-title">Work</h2>
          <div className="row">
              <div className="col-md-6">
                  <div className="card work-card">
                    
                      <div className="card-body">
                          <h5 className="card-title">Web Developer-Team Lead Intern(July 24-Sep 24)</h5>
                          <p>During my internship, I had the opportunity to serve as the team lead for a web development project. In this role, I was responsible for overseeing the development and maintenance of websites, coordinating with team members, and ensuring that tasks were completed efficiently and on time. </p>
                      </div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="card work-card">
                   
                      <div className="card-body">
                          <h5 className="card-title">Front Developer (Feb 24-May 24)</h5>
                          <p>In this internship, I had the opportunity to develop and design websites, contributing to both the technical and visual aspects of the projects. As a key member of the team, I was involved in all stages of website development, from conceptual design to final implementation, ensuring high-quality user experiences.</p>
                      </div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="card work-card">
                   
                      <div className="card-body">
                          <h5 className="card-title">freelancing Developer (Feb 2022-May 2023)</h5>
                          <p> In my frrelancing career I had the opportunity to develop and design websites, contributing to both the technical and visual aspects of the projects. As a key member of different small projects, I was involved in all stages of website development, from conceptual design to final implementation, ensuring high-quality user experiences.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}

function Contact() {
  return (
      <section id="contact" className="section">
          <h2 className="section-title">Contact</h2>
          <p>Let’s get connected...</p>
          <p><strong>Email:</strong> ammarmalik046@gmail.com</p>
          <p><strong>Phone:</strong> +923345865096</p>
          <p><strong>Linkedin:</strong> www.linkedin.com/in/ammar-khalid-15883b247</p>
          <p><strong>Github:</strong> https://github.com/ammar411</p>
      </section>
  );
}

function Footer() {
  return (
      <footer>
          &copy; 2024 Ammar Khalid. All rights reserved.
      </footer>
  );
}

function App() {
  return (
      <div>
          <Navbar />
          <Hero />
          <About />
          <Work />
          <Contact />
          <Footer />
      </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
