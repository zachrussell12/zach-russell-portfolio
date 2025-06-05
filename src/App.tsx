import { useEffect, useMemo, useState } from 'react';

//CSS
import './index.css'
import './App.css'

//Icons
import { AiOutlineGithub } from "react-icons/ai";

//Images
import StarsColored from './assets/images/backgrounds/stars-colored.png'
import Constellations from './assets/images/backgrounds/constellations.png'
import Stars from './assets/images/backgrounds/stars.png'
import Planet from './assets/images/backgrounds/Planet.svg'


//Components
import OrbitingSkill from './components/OrbitingSkill';
import ExperienceDatapad from './components/ExperienceDatapad';

function App() {

  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = ['Frontend Developer', 'React Native Engineer', 'Application Engineer', 'Software Engineer']

  const starCount = 150;
  const stars = useMemo(() => {
    return Array.from({ length: starCount }, (_, i) => {
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
  }, []);

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
        <span id="shooting-star"></span>
      </div>


      <div className="w-full h-full flex flex-col items-center justify-center relative z-1">

        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          {stars}
        </div>

        <div className='h-full w-full '>

          <section id="landing" className='px-4 md:px-8 py-8 mx-auto max-w-8xl flex flex-col items-center justify-center h-full'>
            <h2 className='text-3xl xl:text-5xl font-bold text-gray-50  pb-4'>
              I am a
            </h2>
            <h1
              id="titleTextContainer"
              className={`text-8xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
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
            <p className='text-gray-50 text-xs -mt-2'>...pssst check out the constellations</p>
          </section>

          <section id="skills-orbiting" className="flex flex-col items-center justify-start min-h-[85%] w-full relative bg-background z-10">
            <div className="absolute top-0 left-0 w-full h-full z-0">
              <img src={Stars} className="absolute top-0 left-0 w-full h-full object-cover" alt="Stars Background" />
            </div>


            <h2 className="text-white text-3xl xl:text-5xl mt-32 z-10 text-center">
              Out of this World Skills
            </h2>

            <div className='absolute w-full h-full z-0'>
              <img
                src={Planet}
                className="absolute -bottom-24 sm:-bottom-38 lg:-bottom-64 2xl:-bottom-[35%] left-0 w-full object-contain z-1 pointer-events-none rotate-image-hue"
                alt="Planet Gradient"
              />
            </div>

            <OrbitingSkill />

          </section>

          <section id="experience-datapad" className='flex flex-row items-center justify-center h-full w-full relative gap-x-0 xl:gap-x-16 px-4'>
            <div className='min-w-full min-h-full bg-background -z-5 absolute'></div>

            <div className='p-4 -mr-16 xl:mr-0 xl:max-w-1/4'>
              <h2 className='text-gray-50 text-4xl font-bold text-left pb-8'>About Me</h2>
              <p className='text-gray-50 text-lg text-left font-light'>I strive to be apart of projects that make impactful differences in people's lives. My previous experiences allowed me to gather a plethora of knowledge that has culminated into the engineer I am today.<br /><br />
                An engineer that isn't focused on chasing the newest and greatest framework, but one that is focused on maintaining <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-highlight to-green-foreground font-bold'>expert problem solving skills</span> and <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-highlight to-green-foreground text-green-foreground font-bold'>strong core development fundamentals.</span>
              </p>
            </div>
            <div className='h-full flex flex-col justify-center items-center z-50 xl:scale-90 scale-80 xl:mr-0 -mr-24'>
              <ExperienceDatapad />
            </div>
          </section>


        </div>
      </div>
    </div>
  )
}

export default App
