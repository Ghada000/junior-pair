

// import React, { useState } from 'react';
// import { Link } from 'react-scroll';
// import '../App.css';

// const ContactUsModal = ({ onClose }) => {
//   // You can replace these links with your actual social media links
//   const facebookLink = 'https://www.facebook.com/Assidi.ghada12345/';
//   const instagramLink = 'https://www.instagram.com/';
//   const twitterLink = 'https://twitter.com/';

//   return (
//     <div className="contact-us-modal">
//       <h2>Contact Us</h2>
//       <p>Connect with us on social media:</p>
//       <div className="social-links">
//         <a href={facebookLink} target="_blank" rel="noopener noreferrer">
//           <img className='facebook' src="https://imgs.search.brave.com/C9qptyU5gGqePqh4MIC5NhRrxuXO-pDwFcyaMLzIacQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZWRpZ2l0YWxhZ2Vu/Y3kuY29tLmF1L3dw/LWNvbnRlbnQvdXBs/b2Fkcy9GYWNlYm9v/ay1sb2dvLWJsdWUt/Y2lyY2xlLWxhcmdl/LXdoaXRlLWYucG5n" alt="Facebook" />
//         </a>
//         <a href={instagramLink} target="_blank" rel="noopener noreferrer">
//           <img className='instagram' src="https://imgs.search.brave.com/_v-rJKEqR74dJxmHO2v7_1Bx24wC9VKyav0fAdH_Ut8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmd1/aW0uY28udWsvaW1n/L21lZGlhLzIyZTMy/YzFiMWRlNDBlZDcx/MDNlMmUyZTg5OTVi/NzQyYWM2MDBiZDYv/NzBfMF83MTdfNDMw/L21hc3Rlci83MTcu/anBnP3dpZHRoPTQ0/NSZkcHI9MSZzPW5v/bmU" alt="Instagram" />
//         </a>
//         <a href={twitterLink} target="_blank" rel="noopener noreferrer">
//           <img className='twitter' src="https://imgs.search.brave.com/XUxTgw9IYC3Xe7aNv16sgsviU-aknCWuggVr85birwU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzZmL0xvZ29fb2Zf/VHdpdHRlci5zdmc.svg" alt="Twitter" />
//         </a>
//       </div>
//       <button onClick={onClose}>Close</button>
//     </div>
//   );
// };

// const LandingPage = () => {
//   const [showContactModal, setShowContactModal] = useState(false);

//   return (
//     <div className="landing-page">
//       <header className="header">
//         <h1>Beautiful Blooms</h1>
//         <p>Your go-to flower shop for stunning arrangements</p>
//       </header>

//       <section className="promotional-section">
//         <h1>Discover the Beauty of Flowers</h1>
//         <p>
//           Welcome to Beautiful Blooms, where we bring you the freshest and most beautiful flowers.
//           Our expert florists create stunning arrangements for all occasions.
//         </p>
//         <Link to="flower-section" smooth={true} duration={500}>
//           <button >Scroll down</button>
//         </Link>
//       </section>

//       <section className="about-us">
//         <h1>About Us</h1>
//         <p>
//           Learn more about our commitment to providing the best floral services and customer
//           satisfaction.
//         </p>
//         <button>About Us</button>
//       </section>

//       <section id="flower-section" className="flower-section">
//         <img src="https://i.pinimg.com/474x/a8/27/74/a82774ed11809e82cf77f8ceb6e0fdc9.jpg" alt="Flower 1" />
//         <img src="https://i.pinimg.com/236x/e8/b4/91/e8b4914eba45c85c250ef86fee10e278.jpg" alt="Flower 2" />
//         <img src="https://i.pinimg.com/236x/85/ac/f1/85acf12eddd2c1698a7a08f8f7f935a9.jpg" alt="Flower 3" />
//         <img src="https://i.pinimg.com/236x/91/42/e6/9142e67ab8871aced8c6f23d39c479a5.jpg" alt="Flower 4" />
//         <img src="https://i.pinimg.com/236x/81/a9/1e/81a91e4a8097632e374a17459ff6a7d6.jpg" alt="Flower 5" />
//         <img src="https://i.pinimg.com/236x/ea/7b/dd/ea7bdd3239b48790f5920475abbc3983.jpg" alt="Flower 6" />
//         <img src="https://i.pinimg.com/236x/66/92/96/6692964b4753feac2d68658f1ee3b0ff.jpg" alt="Flower 4" />
//         <img src="https://i.pinimg.com/236x/df/05/f4/df05f4462bc167a01f2f8939b07a56ef.jpg" alt="Flower 5" />
//         <img src="https://i.pinimg.com/236x/5a/f4/fb/5af4fbed610f3d508767fdfcd3cff72f.jpg" alt="Flower 6" />
//         {/* Add more images as needed */}
//       </section>

//       <section className="contact-us">
//         <h2>Contact Us</h2>
//         <p>Have questions or special requests? Reach out to us!</p>
//         <button onClick={() => setShowContactModal(true)}>Contact Us</button>
//         {showContactModal && (
//           <ContactUsModal onClose={() => setShowContactModal(false)} />
//         )}
//       </section>

//       <footer className="footer">
//         <p>&copy; 2024 Beautiful Blooms</p>
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../App.css'
// ... (imports and ContactUsModal component remain the same)
const ContactUsModal = ({ onClose }) => {
  // You can replace these links with your actual social media links
  const facebookLink = 'https://www.facebook.com/Assidi.ghada12345/';
  const instagramLink = 'https://www.instagram.com/';
  const twitterLink = 'https://twitter.com/';
}
const LandingPage = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (header) {
        const isScrolled = window.scrollY > header.offsetHeight;
        if (isScrolled) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="landing-page">
      <header className="header dynamic-header">
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
        <button onClick={() => setShowContactModal(true)}>Contact Us</button>
        {showContactModal && (
          <ContactUsModal onClose={() => setShowContactModal(false)} />
        )}
      </section>

      <footer className="footer">
        <p>&copy; 2024 Beautiful Blooms</p>
      </footer>
    </div>
  );
};

export default LandingPage;
