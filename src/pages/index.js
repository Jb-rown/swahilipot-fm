/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header
      id='header'
      className='navbar navbar-expand navbar-light navbar-absolute-top'
    >
      <div className='container'>
        <nav className='navbar-nav-wrap'>
          <a
            className='navbar-barnd'
            href='#'
            aria-label='Space'
          >
            <Image
              className='navbar-brand-logo'
              src='/branding/logo-no-bg-500.png'
              width={100}
              height={100}
              alt='Swahilipot FM Official Logo'
            />
          </a>
          {/* End Default Logo */}
          <div className='ms-auto'>
  <a
    className='btn btn-primary btn-transition me-3' 
    href='https://swahilipothub.co.ke/'
    target='_blank'
  >
    About Swahilipot
  </a>
  <a
    className='btn btn-primary btn-transition me-3' 
    href='https://swahilipothub.co.ke/'
    target='_blank'
  >
    Programs
  </a>
  <a
    className='btn btn-primary btn-transition' 
    href='https://swahilipothub.co.ke/'
    target='_blank'
  >
    Contact
  </a>
</div>



        </nav>
      </div>
    </header>
  );
};

const Footer = () => {
  // get current year
  const year = new Date().getFullYear();

  return (
    <footer className='position-sm-absolute start-0 end-0 bottom-0' style={{ backgroundColor: 'grey' }}>

      <div className='container py-4'>
        <div className='row align-items-md-center text-center text-md-start'>
          <div className='col-md mb-3 mb-md-0'>
            <p className='mb-0' color='white'>
              © Swahilipot FM {year}. All rights reserved.
            </p>
          </div>
          <div className='col-md d-md-flex justify-content-md-end'>
            {/* Socials */}
            <ul className='list-inline mb-0'>
              <li className='list-inline-item'>
                <a
                  className='btn btn-icon btn-sm btn-ghost-secondary rounded-circle'
                  href='https://www.instagram.com/swahilipotfm/'
                >
                  <i className='bi-instagram' />
                </a>
              </li>
              <li className='list-inline-item'>
                <a
                  className='btn btn-icon btn-sm btn-ghost-secondary rounded-circle'
                  href='https://www.twitter.com/swahilipotfm/'
                >
                  <i className='bi-twitter' />
                </a>
              </li>
              <li className='list-inline-item'>
                <a
                  className='btn btn-icon btn-sm btn-ghost-secondary rounded-circle'
                  href='https://www.facebook.com/swahilipotfm/'
                >
                  <i className='bi-facebook' />
                </a>
              </li>
              <li className='list-inline-item'>
                <a
                  className='btn btn-icon btn-sm btn-ghost-secondary rounded-circle'
                  href='https://www.spotify.com/swahilipotfm/'
                >
                  <i className='bi-spotify' />
                </a>
              </li>
            </ul>
            {/* End Socials */}
          </div>
        </div>
      </div>
    </footer>
  );
};

const CountDown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-12-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className='col-3 col-sm-5'>
      <div className='text-center text-sm-start'>
        {/* <div>
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div> */}
      </div>
    </div>
  );
};

const Home = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const backgrounds = [
    '/bg1.jpg',
    '/bg2.jpg',
    ///'/bg3.jpg',
    // Add more images as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgrounds[bgIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1,
          opacity: 0.3, 
        }}
      />
      <Header />
      <main id='content' role='main'>
        {/* Content */}
        <div className='d-sm-flex'>
          <div className='container d-sm-flex align-items-sm-center vh-sm-100 content-space-t-3 content-space-b-1 content-space-b-sm-3 content-space-sm-0'>
            <div className='row justify-content-sm-between align-items-sm-center flex-grow-1'>
            <div className='col-9 col-sm-5 mb-5 mb-sm-0'>
            
              {/* End Col */}
              <CountDown />
              {/* End Col */}
            </div>
            {/* End Row */}
          </div>
        </div>
        <div className='contain'>
                 <h1 class="title">Welcome to <span>Swahilipot FM</span></h1>
              <p class="description">Your upcoming FM radio station bringing you the latest news, music, and entertainment.</p>
                 <div class="grid">
                  <a href="#" class="card">
                  <h3>Location</h3>
                 <img src='img1.jpg'></img>
                   <p>We are located at Mombasa town.</p>
                   </a>
                   <div className="card">
                  <h3>Programs</h3>
               <img src='img2.jpg'></img>
               <p>Discover our lineup of programs and shows.</p>
                </div>
                <div className="card">
                  <h3>Community Programs</h3>
               <img src='community.jpg'></img>
               <p>We are actively involved in community programs.</p>
               </div>
               <div className="card">
                  <h3>Our frequencies</h3>
               <img src='frequency.jpg'></img>
               <p>Reach us by tuning on your radio .</p>
                </div>
             </div>
          </div>
         </div>
<div class="fm-frequencies">
  <div class="fm-frequency"><p><span> Tune in </span>9.7 FM Mombasa || 97.1 Malindi || 91.7 Kilifi </p></div>
</div>
        {/* End Content */}
      </main>
      <Footer />
      
    </>
  );
};

export default Home;
