function Hero() {
  return (
    <section id="home" className="hero shell">
      <div className="hero-copy">
        <p className="eyebrow">
          <i /> Open to internships and entry-level roles
        </p>
        <p className="hello">Hello, I&apos;m</p>
        <h1>
          Prince
          <br />
          <em>Prajapati</em>
        </h1>
        <p className="hero-summary">
          An aspiring MERN stack developer or Software Developer building responsive web applications and looking for
          opportunities to learn, contribute, and grow.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#work">
            View my work <span>&darr;</span>
          </a>
          <a className="button resume-button" href="/Prince_Prajapati_Resume.pdf" download>
            Download resume <span>&darr;</span>
          </a>
          <a className="text-link" href="#contact">
            Hire me <span>&rarr;</span>
          </a>
        </div>
      </div>
      <div className="hero-art" aria-label="Developer profile illustration">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="profile-card">
          <div className="avatar">
            P<span>P</span>
          </div>
          <div className="code-window">
            <div className="code-top">
              <b />
              <b />
              <b />
            </div>
            <p>
              <span>const</span> developer = {'{'}
            </p>
            <p>&nbsp;&nbsp;name: <strong>&apos;Prince&apos;</strong>,</p>
            <p>&nbsp;&nbsp;focus: <strong>&apos;web&apos;</strong>,</p>
            <p>&nbsp;&nbsp;create: () =&gt; <span>true</span></p>
            <p>{'}'}</p>
          </div>
        </div>
        <div className="floating-tag tag-react">React</div>
        <div className="floating-tag tag-js">JS</div>
      </div>
      <div className="scroll-note">SCROLL TO EXPLORE <span>&darr;</span></div>
    </section>
  )
}

export default Hero
