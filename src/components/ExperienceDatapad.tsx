import { useState } from 'react';

//Icons
import { MdOpenInNew } from "react-icons/md";

//Datapad Images
import DatapadStrip from '../assets/images/datapad-graphics/datapad-strip.png'
import ThinLine from '../assets/images/datapad-graphics/ThinLine.svg'
import datpadPicture from '../assets/images/datapad-graphics/datapad-picture.png'
import Symbols from '../assets/images/datapad-graphics/Symbols.svg'
import Noise from '../assets/videos/animated_noise.gif'
import NoiseTestTwo from '../assets/videos/Pixels.mp4'
import NoiseTestThree from '../assets/videos/Noise_Alternate.mp4'
import ButtonSymbolOne from '../assets/images/datapad-graphics/ButtonSymbolOne.svg'
import ButtonSymbolTwo from '../assets/images/datapad-graphics/ButtonSymbolTwo.svg'
import ArrowIcon from '../assets/images/datapad-graphics/arrow-icon.svg'
import DatapadExperienceOne from "./DatapadExperienceOne";
import DatapadExperienceTwo from "./DatapadExperienceTwo";
import DatapadExperienceThree from "./DatapadExperienceThree";

const experienceLinks = ['https://apps.apple.com/us/app/crowdfree/id6737516256', 'https://tps-technology.com/clashmarker', 'https://apps.apple.com/us/app/mindful/id1637254506']

export default function ExperienceDatapad() {

    const [position, setPosition] = useState(0);

    const nextExperience = () => {

        if(position == 2) return;

        const container = document.getElementById("experience-container")

        if(container){
            container.classList.add("glitch-container")
            
            setTimeout(() => {
                container.classList.remove('glitch-container');
                setPosition(prev => prev == 2 ? 2 : prev + 1);

                setTimeout(()=> {
                    container.style.visibility = 'visible';
                }, 50)
            }, 175)
        }

    }

    const previousExperience = () => {

        if(position == 0) return;

        const container = document.getElementById("experience-container")

        if(container){
            container.classList.add("glitch-container")
            
            setTimeout(() => {
                container.classList.remove('glitch-container');
                setPosition(prev => prev == 0 ? 0 : prev - 1);

                setTimeout(()=> {
                    container.style.visibility = 'visible';
                }, 50)
            }, 175)
        }

    }

    return (
        <div className='bg-foreground flex flex-col w-full relative z-50 p-2 py-4 rounded-xl datapad-hard-shadow md:p-2 md:py-4 md:h-full md:w-2xl lg:p-4 lg:py-6 lg:h-full lg:w-4xl'>

            <div id="screen" className='bg-background border-[1px] border-white/25 px-2 py-2 rounded-xl relative flex flex-col justify-center items-center overflow-hidden md:px-4 md:py-2'>
                <img className='absolute w-full h-full object-cover mix-blend-overlay opacity-75 z-5' src={Noise} />
                <video id="pixel-video" className='absolute w-full h-full object-cover z-5 mix-blend-darken opacity-25' autoPlay playsInline muted loop src={NoiseTestThree} />
                <video id="pixel-video" className='absolute w-full h-full object-cover z-5 mix-blend-soft-light opacity-50' autoPlay playsInline muted loop src={NoiseTestTwo} />
                <div id='datapad-content' className='w-full h-full flex flex-col datapad-glow-effect'>
                    <div className="scanline-overlay w-[150%] self-center -px-16 min-h-[150%] -my-4" />

                    <img className='brightness-125' src={DatapadStrip} />
                    <h2 className='text-green-foreground brightness-125 text-xl p-0 turret-road-extrabold text-center md:text-3xl md:p-1 lg:text-5xl lg:p-2'>EXPERIENCE DATABASE</h2>
                    <img className='brightness-125 w-full py-1' src={ThinLine} />

                    <div className='flex-row justify-between hidden items-center px-0 md:px-1 lg:px-4 md:flex'>
                        <div className='flex flex-col w-full h-full'>
                            <div className='flex flex-col min-w-3/4 max-h-32 flex-wrap '>
                                <p className='text-green-foreground brightness-125 turret-road-bold py-0 text-lg md:py-2 md:text-lg lg:py-4 lg:text-2xl'><span className='turret-road-extrabold pr-4'>NAME:</span> Zachary Russell</p>
                                <p className='text-green-foreground brightness-125 turret-road-bold py-0 text-lg md:py-2 md:text-lg lg:py-4 lg:text-2xl'><span className='turret-road-extrabold pr-4'>ORIGIN:</span> Tampa, FL</p>
                                <p className='text-green-foreground brightness-125 turret-road-bold py-0 text-lg md:py-2 md:text-lg lg:py-4 lg:text-2xl'><span className='turret-road-extrabold pr-4'>PRONOUNS:</span> He/Him</p>
                                <p className='text-green-foreground brightness-125 turret-road-bold py-0 text-lg md:py-2 md:text-lg lg:py-4 lg:text-2xl'><span className='turret-road-extrabold pr-4'>LOCATION:</span> Orlando, FL</p>
                            </div>
                            <img className='pr-16 pt-1 md:pr-32 md:pt-4 lg:pr-32 lg:pt-4' src={Symbols} />
                        </div>
                        <img className='w-1/4 h-32 object-left object-cover md:max-w-1/4 lg:max-w-1/4' src={datpadPicture} />
                    </div>

                    <img className='brightness-125 w-full py-1 hidden md:inline lg:inline' src={ThinLine} />

                    
                    <div id='experience-container' className='pt-2 w-full h-full flex flex-row md:pt-4 lg:pt-8'>
                        {position == 0 && <DatapadExperienceOne />}
                        {position == 1 && <DatapadExperienceTwo />}
                        {position == 2 && <DatapadExperienceThree />}
                    </div>

                </div>

            </div>
            <div id='button-container' className='w-full flex flex-row justify-between items-center pt-2 md:pt-3 lg:pt-4'>
                <div className='flex flex-row gap-x-4'>
                    <div className='bg-orange-background p-2 rounded-full border-1 border-orange-foreground/50 button-shadow-orange md:p-4 lg:p-4'>
                        <img className='aspect-square object-contain h-6 md:h-7 lg:h-8 self-center' src={ButtonSymbolOne} />
                    </div>
                    <div className='bg-pink-background p-2 rounded-full border-1 border-pink-foreground/50 button-shadow-pink md:p-4 lg:p-4'>
                        <img className='aspect-square object-contain h-6 md:h-7 lg:h-8 self-center' src={ButtonSymbolTwo} />
                    </div>
                </div>
                <div className='flex flex-row justify-end items-center w-1/2 gap-x-3 md:gap-x-4 lg:gap-x-4'>
                    <button onClick={() => {window.open(experienceLinks[position])}} className='bg-purple-background py-2 px-1 rounded-full border-1 border-purple-foreground/50 button-shadow-purple purple-rounded cursor-pointer md:p-4 lg:p-4'>
                        <MdOpenInNew size={30} className='text-purple-foreground h-6 md:h-8' />
                    </button>
                    <div className='flex flex-row gap-x-2 md:gap-x-3  lg:gap-x-4'>
                        <button onClick={previousExperience} className='bg-green-background py-2 px-2 rounded-lg border-1 border-green-foreground/50 button-shadow-green green cursor-pointer arrow-button md:py-2 md:px-6 lg:py-2 lg:px-8'>
                            <img className='w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14' src={ArrowIcon} />
                        </button>
                        <button onClick={nextExperience} className='bg-green-background py-2 px-2 rounded-lg border-1 border-green-foreground/50 button-shadow-green green cursor-pointer arrow-button md:py-2 md:px-6 lg:py-2 lg:px-8'>
                            <img className='w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14 rotate-180' src={ArrowIcon} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
