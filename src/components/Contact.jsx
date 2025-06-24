import React from "react";
import Header from "./Header";
import { useTheme } from "../theme/ThemeContext.jsx";
import { Fade } from "react-awesome-reveal";

const Contact = (props) => {
  const { header } = props;
  const { theme } = useTheme();

  return (
    <div id="/contact">
      <Header title={header} />

      <div className="contact-container">
        <Fade direction="left" duration={2000} cascade damping={1e3} triggerOnce>
          <form
            className="contact-form"
            action={`mailto:razanbarri.1@gmail.com`}
            method="POST"
            encType="text/plain"
          >
            <input type="text" placeholder="Name" name="name" />
            <input type="email" placeholder="Email" name="email" required />
            <select name="enquiry" id="enquiry">
              <option>Freelance Project Proposal</option>
              <option>General enquiry</option>
              <option>Feedback</option>
              <option>Hire Me</option>
            </select>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Message"
            ></textarea>
            <button
              style={{
                cursor: "pointer",
                backgroundColor: "black",
                color: "white",
                padding: "10px 20px",
                fontWeight: "bold",
                margin: "0px",
                border: "none",
                borderRadius: "5px",
                fontSize: "small",
                justifyItems: "center",
              }}
              type="submit"
            >
              Send Message
            </button>
          </form>
        </Fade>

        <div className="contactText">
          <Fade direction="right" duration={2000} cascade damping={1e3} triggerOnce>
            <p className="contact-text">
              I am always interested in discussing new projects or
              opportunities. If you have any questions or would like to get in touch, please feel free to reach out to me.
            </p>
          </Fade>

          <Fade direction="up" duration={3000} cascade damping={1e3}>
            <div className="contact-links" style={{ fontWeight: "bold", lineHeight: "2", marginTop: "1rem" }}>
              📧 Email: razanbarri.1@gmail.com  
              <br />
              📞 Phone: 0598011143
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Contact;
