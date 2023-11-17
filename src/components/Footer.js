import React from 'react';

export default function Footer() { //Created footer with links to components & contact information

  return (
    <>
      <div id="footerBackground">
        <div id="footerStyling" className="container">
          <footer className="py-2 my-2">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3 text-light">
              <li className="nav-item">
                <a href="/" className="nav-link px-2 text-light fw-normal fs-4">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link px-2 text-light fw-normal fs-4">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/Catalogue" className="nav-link px-2 text-light fw-normal fs-4">
                  Catalogue
                </a>
              </li>
              <li className="nav-item">
                <a href="/AddProduct" className="nav-link px-2 text-light fw-normal fs-4">
                  New Products
                </a>
              </li>
              <li className="nav-item">
                <a href="/Contact" className="nav-link px-2 text-light fw-normal fs-4">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="text-center">
              <h2 className="footerTitle text-light fw-bold">NAIROBI CENTRAL HARWARE LTD. ©</h2>
              <p>
                EMAIL: <a href="mailto:sales.nchl@gmail.com" className="text-light">sales.nchl@gmail.com</a> |
                CONTACT: <a href="tel:+254705235256" className="text-light">(+254) 705-235-256</a> |
                FACEBOOK: <a href="https://web.facebook.com/nairobicentralhardware" className="text-light">Nairobi Central Hardware</a>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
