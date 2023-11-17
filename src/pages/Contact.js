import React from 'react'

export default function Contact() { // Contact us page with contact details & a Contact form
  return (
    <div className="contact-container my-5">
      <h1 className="contact-heading">Contact Us</h1>

      <div className="row contact-row">
        <div className="col-md-6 contact-col">
          <h3 className="contact-heading-3">Contact Information</h3>
          <p className="contact-text">
            Might you have questions or need assistance? Contact us now using the information below:
          </p>
          <p className="contact-strong-address">
            <strong>Address:</strong> #6, Allied Industries Ltd
            Baba Dogo Rd, Ruaraka, Industrial Area
            Nairobi, Kenya
          </p>
          <br />
          <p className="contact-strong">
            <strong>Sales Email:</strong> <br /> sales.nchl@gmail.com
          </p>
          <p className="contact-strong">
            <strong>Finance Email:</strong> <br /> finance.nchl@gmail.com
          </p>
          <p className="contact-strong">
            <strong>Human Resources Email:</strong> humanresource.nchl@gmail.com
          </p>
          <br />
          <p className="contact-strong">
            <strong>Phone:</strong> (+254)705-235-256 OR (+254)700-355-663
          </p>
        </div>
        <div className="col-md-6 contact-col">
          <h3 className="contact-heading-3">Contact Form</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="contact-form-label">NAME:</label>
              <input type="text" placeholder="Insert name" className="contact-form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="contact-form-label">EMAIL:</label>
              <input type="email" placeholder="Insert email address" className="contact-form-control" id="email" />
            </div>
            <div>
              <label htmlFor="message" className="contact-form-label">MESSAGES:</label>
              <textarea className="contact-textarea" placeholder="Type your query here" id="message" rows="5"></textarea>
            </div>
            <button type="submit" className="contact-btn">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
}