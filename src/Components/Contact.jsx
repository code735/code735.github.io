import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact me</h1>
            <a id="contact-phone">+91 8551087343</a><i id="phoneicone" className="fa-solid fa-phone"></i>
            <a id="contact-email" href="mailto:sonvanesaurabh7@gmail.com">Email</a><i id="phoneicone" className="fa-solid fa-envelope"></i>
            <section id="resume">
              <a className="contact-resume" href="./Resume/Saurabh-Sonvane-Resume.pdf" download="">Resume</a>
            </section>
            <div className="social-icons">
              <a id="contact-github" href="https://github.com/s17200" target="_blank"><i className="fa-brands fa-github"></i></a>
              <a id="contact-linkedin" href="https://www.linkedin.com/in/saurabh-sonvane-64106017b/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="contact-right">
            <form action="mailto:sonvanesaurabh7@gmail.com">
              <input type="text" name="Name" placeholder="Your name" required />
              <input type="email" name="email" placeholder="Your email" required />
              <textarea name="message" cols="30" rows="10" placeholder="Your message"></textarea>
              <button type="submit" className="btn btn2">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;