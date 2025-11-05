import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="subscribe">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="contact">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h4>CURRENCY</h4>
          <p>US USD</p>
          <small>Transactions will be completed in Euros and a currency reference is available on hover.</small>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <div className="footer-links">
          <div>
            <h4>metta muse</h4>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>

          <div>
            <h4>QUICK LINKS</h4>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>

        <div className="footer-social">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <span>📸</span>
            <span>💼</span>
          </div>

          <h4>metta muse ACCEPTS</h4>
          <div className="cards">
            <img src="/visa.svg" alt="Visa" />
            <img src="/mastercard.svg" alt="Mastercard" />
            <img src="/amex.svg" alt="Amex" />
            <img src="/paypal.svg" alt="PayPal" />
          </div>
        </div>
      </div>

      <div className="copyright">Copyright © 2023 mettamuse. All rights reserved.</div>
    </footer>
  );
}
