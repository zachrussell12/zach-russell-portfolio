import './index.css'
import './App.css'
import { AiOutlineGithub } from "react-icons/ai";
import StarsColored from './assets/images/stars-colored.png'
import Constellations from './assets/images/constellations.png'
import Stars from './assets/images/stars.png'
import StarsScarce from './assets/images/stars-scarce.png'
import { useEffect, useState } from 'react';

function App() {

  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = ['Front End Developer', 'React Native Engineer', 'UI/UX Designer', 'Software Engineer']

  const starCount = 150;
  const stars = Array.from({ length: starCount }, (_, i) => {
    const size = Math.random() * 3 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const blinkDuration = Math.random() * 8 + 2;

    return (
      <div
        key={i}
        className="absolute rounded-full bg-white opacity-0 animate-blink"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${y}%`,
          left: `${x}%`,
          animationDuration: `${blinkDuration}s`,
          animationDelay: `${Math.random() * 10}s`,
        }}
      />
    );
  });

  useEffect(() => {
    const mask = document.getElementById('constellationMask');

    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;

      if (mask) {
        mask.style.maskImage = `radial-gradient(circle 350px at ${x}px ${y}px, white 0%, transparent 100%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const changeInterval = setInterval(() => {
      const text = document.getElementById("titleTextContainer");
      if (text) {
        text.style.opacity = '0';

        setTimeout(() => {
          setCurrentTitle((prev) => {
            const next = prev >= titles.length - 1 ? 0 : prev + 1;
            if (text) {
              text.innerText = titles[next];
              text.style.opacity = '1';
            }
            return next;
          });
        }, 1000);
      }
    }, 7000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(changeInterval);
    };
  }, []);


  return (
    <div className="w-full h-full bg-background">

      <nav className='w-full flex flex-row justify-end p-4 gap-4 fixed top-0 z-5'>

        <button className='purple bg-purple-background px-1 py-0 rounded-lg flex flex-col justify-center items-center transition-all hover:cursor-pointer'>
          <p className='text-purple-foreground py-2 px-4 relative'>
            <AiOutlineGithub size={25} />
          </p>
        </button>

        <button className='blue bg-blue-background px-1 py-0 rounded-lg flex flex-col justify-center items-center transition-all hover:cursor-pointer'>
          <p className='text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-blue-highlight to-[#77D2FF] py-2 px-4'>
            Projects
          </p>
        </button>
        <button className='green bg-green-background px-1 py-0 rounded-lg flex flex-col justify-center items-center transition-all hover:cursor-pointer'>
          <p className='text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-green-highlight to-green-foreground py-2 px-4'>
            Contact Me
          </p>
        </button>
      </nav>

      <div
        id="constellationMask"
        className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
      >
        <img
          src={Constellations}
          alt="Constellations"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>


      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <img src={StarsColored} className="absolute top-0 left-0 w-full h-full object-cover" />
        {/*<img src={Stars} className="absolute top-0 left-0 w-full h-full object-cover" />*/}
        {/*<img src={StarsScarce} className="absolute top-0 left-0 w-full h-full object-cover" />*/}
        <span></span>
      </div>


      <div className="w-full h-full flex flex-col items-center justify-center relative z-1">

        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          {stars}
        </div>


        <div className='px-4 md:px-8 py-8 max-w-8xl mx-auto'>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='text-3xl xl:text-5xl font-bold text-gray-50  pb-4'>
              I am a
            </h2>
            <h1
              id="titleTextContainer"
              className={`text-8xl xl:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
                ${currentTitle == 0 ? 'from-green-foreground' : currentTitle == 1 ? 'from-blue-foreground' : currentTitle == 2 ? 'from-orange-foreground' : 'from-pink-foreground'}
                ${currentTitle == 0 ? 'via-green-highlight' : currentTitle == 1 ? 'via-blue-highlight' : currentTitle == 2 ? 'via-orange-highlight' : 'via-pink-highlight'}
                ${currentTitle == 0 ? 'to-green-foreground' : currentTitle == 1 ? 'to-blue-foreground' : currentTitle == 2 ? 'to-orange-foreground' : 'to-pink-foreground'}
                pb-8 transition-all opacity-100 duration-500`}
              style={{
                textShadow: `${currentTitle == 0 ? '0 0 15px rgba(1, 223, 114, 0.6)' : currentTitle == 1 ? '0 0 15px rgba(199,236,255,0.6)' : currentTitle == 2 ? '0 0 15px rgba(252,183,0,0.6)' : '0 0 15px rgba(251,190,223,0.6)'}`,
              }}
            >
              Front End Developer
            </h1>

            <p className='text-lg xl:text-2xl font-normal w-4xl text-center text-gray-50 pb-4'>
              Hey 👋, I'm Zach. I turn dreams and concepts into reality. Currently pushing the boundaries of my imagination and collaborating with people worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
