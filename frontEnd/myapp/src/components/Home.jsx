

import React from 'react';
import { Link } from 'react-scroll';
import '../App.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Beautiful Blooms</h1>
        <p>Your go-to flower shop for stunning arrangements</p>
      </header>

      <section className="promotional-section">
        <h1>Discover the Beauty of Flowers</h1>
        <p>
          Welcome to Beautiful Blooms, where we bring you the freshest and most beautiful flowers.
          Our expert florists create stunning arrangements for all occasions.
        </p>
        <Link to="flower-section" smooth={true} duration={500}>
          <button>Scroll down</button>
        </Link>
      </section>

      <section className="about-us">
        <h1>About Us</h1>
        <p>
          Learn more about our commitment to providing the best floral services and customer
          satisfaction.
        </p>
        <button>About Us</button>
      </section>

      <section id="flower-section" className="flower-section">
        {/* Add your scrolling flower images here */}
        <img src="https://i.pinimg.com/474x/a8/27/74/a82774ed11809e82cf77f8ceb6e0fdc9.jpg" alt="Flower 1" />
        <img src="https://i.pinimg.com/236x/e8/b4/91/e8b4914eba45c85c250ef86fee10e278.jpg" alt="Flower 2" />
        <img src="https://i.pinimg.com/236x/85/ac/f1/85acf12eddd2c1698a7a08f8f7f935a9.jpg" alt="Flower 3" />
        <img src="https://i.pinimg.com/236x/91/42/e6/9142e67ab8871aced8c6f23d39c479a5.jpg" alt="Flower 4" />
        <img src="https://i.pinimg.com/236x/81/a9/1e/81a91e4a8097632e374a17459ff6a7d6.jpg" alt="Flower 5" />
        <img src="https://i.pinimg.com/236x/ea/7b/dd/ea7bdd3239b48790f5920475abbc3983.jpg" alt="Flower 6" />
        <img src="https://i.pinimg.com/236x/66/92/96/6692964b4753feac2d68658f1ee3b0ff.jpg" alt="Flower 4" />
        <img src="https://i.pinimg.com/236x/df/05/f4/df05f4462bc167a01f2f8939b07a56ef.jpg" alt="Flower 5" />
        <img src="https://i.pinimg.com/236x/5a/f4/fb/5af4fbed610f3d508767fdfcd3cff72f.jpg" alt="Flower 6" />
        {/* Add more images as needed */}
      </section>

      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>Have questions or special requests? Reach out to us!</p>
        <button>Contact Us</button>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Beautiful Blooms</p>
      </footer>
    </div>
  );
};

export default LandingPage;
