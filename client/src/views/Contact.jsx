import React from "react";
import "./styles.css"

const Contact = props => {
  return (
	  <>
	 <div id="con">
          <h2>Contact Us:</h2>
          <form action="">
            <section className="left">
              <div className="input-container">
                <label htmlFor="name">Name</label>
                <input type="text" required />
              </div>
              <div className="input-container">
                <label htmlFor="age" required>
                  Age
                </label>
                <input type="text" required />
              </div>
              <div className="input-container">
                <label htmlFor="phone">Phone</label>
                <input type="text" required />
              </div>
              <div className="input-container">
                <label htmlFor="email">Email</label>
                <input type="text" required />
              </div>
            </section>
            <section className="right">
              <div className="input-container">
                <label htmlFor="address">Address 1</label>
                <input type="text" required />
              </div>
              <div className="input-container">
                <label htmlFor="subject">Subject</label>
                <input type="text" required />
              </div>
              <div className="input-container">
                <label htmlFor="comments">Comments</label>
                <textarea name="comments" id="" required />
              </div>
            </section>
            <div className="send-container">
              <input type="submit" value="Send" onClick="return true" />
              {/* <br/> */}
            </div>
          </form>
        </div>
	</>
  );
};

export default Contact;