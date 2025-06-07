import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser'

//CSS
import './index.css'
import './App.css'

//Icons
import { AiOutlineGithub } from "react-icons/ai";

//Images
import StarsColored from './assets/images/backgrounds/stars-colored.png'
import Constellations from './assets/images/backgrounds/constellations.png'
import Stars from './assets/images/backgrounds/stars.png'
import StarScarce from './assets/images/backgrounds/stars-scarce.png'
import StarLess from './assets/images/backgrounds/stars-less.png'
import Planet from './assets/images/backgrounds/Planet.svg'
import Satellite from './assets/images/backgrounds/Satellite.png'

//Components
import OrbitingSkill from './components/OrbitingSkill';
import ExperienceDatapad from './components/ExperienceDatapad';
import SolarSystemProjects from './components/SolarSystemProjects';

function App() {

  const [currentTitle, setCurrentTitle] = useState<number>(0);
  const [contactCooldown, setContactCooldown] = useState<boolean>(false);
  const [sending, setSending] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [sendError, setSendError] = useState<boolean>(false);
  const form = useRef(null);
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

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const target = e.target as HTMLFormElement;

    const email = (target.elements.namedItem('from_email') as HTMLInputElement);

    if (form.current && email) {
      if (emailRegex.test(email.value)) {

        setSending(true);

        emailjs.sendForm(import.meta.env.VITE_EMAILJSSERVICEID, import.meta.env.VITE_EMAILJSTEMPLATEID, form.current, {
          publicKey: 'zLZlONpT1kLop60cT',
        })
          .then(() => {
            target.reset();
            setSending(false);
            setContactCooldown(true);
            const satellite = document.getElementById('satellite-image');

            if (satellite) { satellite.classList.add('floating-satellite') }

            setTimeout(() => {
              setContactCooldown(false);
              if (satellite) { satellite.classList.remove('floating-satellite') }

            }, 35000)
          })
          .catch((err) => {
            console.error(err);
            setSendError(true);
            target.reset();
            setSending(false);
          })
      }
      else{
        setEmailError(true);
        email.value= '';
      }
    }

  }


  return (
    <div className="w-full h-full bg-background">

      <nav className='w-full flex flex-row justify-end items-center p-2 gap-2 fixed top-0 z-50 md:p-4 md:gap-4'>

        <button title='Github' className='purple bg-purple-background px-1 py-0 rounded-lg flex flex-col justify-center items-center transition-all hover:cursor-pointer md:py-0 md:px-1'>
          <p className='text-purple-foreground py-2 px-1 relative md:py-2 md:px-4'>
            <AiOutlineGithub className='h-4 md:h-full' size={25} />
          </p>
        </button>

        <button className='blue bg-blue-background px-1 py-2 rounded-lg flex flex-col justify-center items-center transition-all hover:cursor-pointer md:px-1 md:py-0'>
          <p className='text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-blue-highlight to-[#77D2FF] text-xs py-0 px-1 md:py-2 md:px-4 md:text-base'>
            Projects
          </p>
        </button>
        <button className='green bg-green-background px-1 py-2 rounded-lg flex flex-col justify-center items-center transition-all hover:cursor-pointer md:px-1 md:py-0'>
          <p className='text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-green-highlight to-green-foreground text-xs py-0 px-1 md:py-2 md:px-4 md:text-base'>
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

          <section id="landing" className='px-1 py-4 mx-auto max-w-8xl flex flex-col items-center justify-center h-full md:px-4 md:py-8'>
            <h2 className='text-lg font-bold text-gray-50 pb-2 md:pb-4 md:text-2xl lg:text-3xl'>
              I am a
            </h2>
            <h1
              id="titleTextContainer"
              className={`text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r 
                ${currentTitle == 0 ? 'from-green-foreground' : currentTitle == 1 ? 'from-blue-foreground' : currentTitle == 2 ? 'from-orange-foreground' : 'from-pink-foreground'}
                ${currentTitle == 0 ? 'via-green-highlight' : currentTitle == 1 ? 'via-blue-highlight' : currentTitle == 2 ? 'via-orange-highlight' : 'via-pink-highlight'}
                ${currentTitle == 0 ? 'to-green-foreground' : currentTitle == 1 ? 'to-blue-foreground' : currentTitle == 2 ? 'to-orange-foreground' : 'to-pink-foreground'}
                pb-4 transition-all opacity-100 duration-500 md:pb-8 md:text-6xl lg:text-8xl`}
              style={{
                textShadow: `${currentTitle == 0 ? '0 0 15px rgba(1, 223, 114, 0.6)' : currentTitle == 1 ? '0 0 15px rgba(199,236,255,0.6)' : currentTitle == 2 ? '0 0 15px rgba(252,183,0,0.6)' : '0 0 15px rgba(251,190,223,0.6)'}`,
              }}
            >
              Front End Developer
            </h1>

            <p className='text-xs font-normal w-[90%] text-center text-gray-50 pb-4 md:pb-4 md:w-3xl md:text-base lg:text-2xl lg:w-4xl'>
              Hey 👋, I'm Zach. I turn dreams and concepts into reality. Currently pushing the boundaries of my imagination and collaborating with people worldwide.
            </p>
            <p className='text-gray-50 text-[10px] font-light -mt-3 md:text-xs md:-mt-2 lg:text-sm'>...pssst check out the constellations</p>
          </section>

          <section id="skills-orbiting" className="flex flex-col items-center justify-start min-h-full w-full relative bg-background z-10">

            <div className="absolute top-0 left-0 w-full h-full z-0">
              <img src={Stars} className="absolute top-0 left-0 w-full h-full object-cover" alt="Stars Background" />
            </div>


            <h2 className="text-white text-xl mt-32 z-10 text-center font-medium md:text-3xl lg:text-6xl">
              Out of this World Skills
            </h2>

            <div className='absolute w-full h-full z-0'>
              <img
                src={Planet}
                className="absolute -bottom-[8%] left-0 w-full object-contain z-1 pointer-events-none rotate-image-hue md:-bottom-[30%] lg:-bottom-[35%]"
                alt="Planet Gradient"
              />
            </div>

            

            <OrbitingSkill />

          </section>

          <section id="experience-datapad" className='flex flex-col items-center justify-center min-h-full w-full relative gap-x-0 lg:gap-x-16'>

            <div className='min-w-full min-h-full bg-background -z-5 absolute'></div>

            <div className='flex flex-col-reverse w-[95%] mt-16 max-h-full justify-center items-center md:mt-0 md:flex-row md:max-w-[80%] lg:mt-0 lg:flex-row lg:max-w-[80%]'>
              <div className='h-1/2 flex flex-col justify-center items-center z-50 max-w-full mt-4 mr-0 md:mr-0 md:mt-4 md:scale-90 lg:mr-0 lg:mt-4'>
                <ExperienceDatapad />
              </div>

              <div className='w-full h-fit lg:p-4 lg:mt-0 lg:ml-0 lg:max-w-2/5 z-50'>
                <h2 className='text-gray-50 text-xl font-medium text-left pb-4 lg:text-4xl lg:pb-4'>About Me</h2>
                <p className='text-gray-50 text-sm text-left font-light lg:text-left lg:text-lg'>I strive to be apart of projects that make impactful differences in people's lives. My previous experiences allowed me to gather a plethora of knowledge that has culminated into the engineer I am today.<br /><br />
                  An engineer that isn't focused on chasing the newest and greatest framework, but one that is focused on maintaining <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-highlight to-green-foreground font-bold'>expert problem solving skills</span> and <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-highlight to-green-foreground font-bold'>strong core development fundamentals.</span>
                </p>
              </div>
            </div>

          </section>

          {/*<section id="captains-logs" className='flex flex-col items-center justify-start h-full w-full relative bg-background py-16'>
            <img className='w-full rotate-180 object-cover absolute bottom-0' src={StarScarce} />
            <div className='relative pb-8'>
              <h2 className='text-gray-50 text-4xl font-medium text-center pb-4'>Captain's Logs</h2>
              <p className='text-gray-50 text-lg text-center font-light max-w-2xl'>Use the planets to discover my personal adventures and projects that helped me build additional knowledge I use today.</p>
            </div>

            <SolarSystemProjects />

          </section>*/}

          <section className="flex flex-col items-center justify-center min-h-full w-full relative bg-background z-10 overflow-x-hidden">
            <div className="absolute top-0 left-0 w-full h-full z-0">
              <img src={StarLess} className="absolute top-0 left-0 w-full h-full object-cover" alt="Stars Background" />
            </div>

            <img id='satellite-image' className='absolute w-48 top-24 -left-[15%] rotate-3' src={Satellite} />

            <div className='relative flex flex-col w-[30%]'>
              <h2 className='text-gray-50 text-4xl font-medium pb-1 text-left'>Contact Me</h2>
              <p className='text-gray-50 text-lg text-left font-light pb-4'>Send me a message and let's see what we can do together.</p>
              <form ref={form} id='contact-form' className='w-full flex flex-col justify-center items-end' onSubmit={(e) => sendEmail(e)}>
                <label htmlFor='email'></label>
                <input id='from_email' name='from_email' placeholder='Email' className='bg-border px-4 py-2 rounded-lg text-gray-50 placeholder:text-white/25 w-full mb-2' onFocus={() => {if(emailError || sendError){setSendError(false); setEmailError(false);}}}/>
                <label htmlFor='message'></label>
                <textarea id='message' name='message' placeholder='Message' className='bg-border px-4 py-2 rounded-lg text-gray-50 placeholder:text-white/25 w-full min-h-64 max-h-96 mb-4' onFocus={() => {if(emailError || sendError){setSendError(false); setEmailError(false);}}}></textarea>
                <button disabled={sending || contactCooldown} type='submit' className={`bg-green-background text-green-foreground p-2 rounded-lg cursor-pointer green relative w-fit flex flex-col justify-center items-center transition-all duration-500 ${contactCooldown ? 'opacity-50' : 'opacity-100'}`}>
                  <p className={`relative z-0 ${!sending ? 'opacity-100' : 'opacity-0'}`}>{contactCooldown ? 'Satellite Cooldown' : 'Send Message'}</p>
                  <div className={`w-6 h-6 bg-red-400 absolute rounded-full transition-all duration-200 pointer-events-none ${sending ? 'opacity-100' : 'opacity-0'} green-loading-symbol `}></div>
                </button>
              </form>
              <div className='bg-blue-300 w-full h-fit flex flex-col items-center justify-center mt-8'>
                <p className={`text-red-500 font-bold text-center absolute transition-opacity duration-200 ${emailError ? 'opacity-100' : 'opacity-0'}`}>
                  Please enter a valid email.
                </p>
                <p className={`text-red-500 font-bold text-center absolute transition-opacity duration-200 ${sendError ? 'opacity-100' : 'opacity-0'}`}>
                  Some sort of error occured! You can email me directly <a href='mailto:zachrussell12@gmail.com' className='underline'>here.</a>
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

export default App
