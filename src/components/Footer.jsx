import React from 'react'
import Inst from '../img/inst.svg';
import Wht from '../img/wht.svg';
import '../styles/basic.css';
import '../styles/cart.css';
import '../styles/categories.css';
import '../styles/filter.css';
import '../styles/footer.css';
import '../styles/map.css';
import '../styles/product.css';
import '../styles/sale.css';
import '../styles/header.css'

export default function Footer() {
  return (
    <footer>
      <section className="contact">
        <header>
          <h1>Contact</h1>
        </header>
        <div className="conts">
          <article className="phone">
            <p>Phone</p>
            <h2>+7 (499) 350-66-04</h2>
          </article>
          <article className="socials">
            <p className="socials-title">Socials</p>
            <div className="imgsocial">
              <img
                src={Inst}
                alt="Instagram"
                style={{ width: "38px", height: "38px" }}
              />
              <img
                src={Wht}
                alt="WhatsApp"
                className="wht"
                style={{ width: "38px", height: "38px" }}
              />
            </div>
          </article>
          <article className="address">
            <p>Address</p>
            <h2>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</h2>
          </article>
          <article className="work">
            <p>Working Hours</p>
            <h2>24 hours a day</h2>
          </article>
        </div>
        <div className="map-container">
          <iframe
            title="IThub College Location"
            className="map-iframe"
            src="https://www.google.com/maps?q=IThub+college+Dubininskaya+Ulitsa+96,+Moscow,+Russia,+115093&hl=en&output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </footer>
  );
}