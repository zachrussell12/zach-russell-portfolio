import { useRef } from 'react';


//Icons
import { MdOpenInNew } from "react-icons/md";

//Datapad Images
import DatapadStrip from '../assets/images/datapad-graphics/datapad-strip.png'
import ThinLine from '../assets/images/datapad-graphics/ThinLine.svg'
import datpadPicture from '../assets/images/datapad-graphics/datapad-picture.png'
import Symbols from '../assets/images/datapad-graphics/Symbols.svg'
import Noise from '../assets/videos/animated_noise.gif'
import NoiseTestTwo from '../assets/videos/noise_test_overlay_two.mp4'
import NoiseTestThree from '../assets/videos/Noise_Alternate.mp4'
import ButtonSymbolOne from '../assets/images/datapad-graphics/ButtonSymbolOne.svg'
import ButtonSymbolTwo from '../assets/images/datapad-graphics/ButtonSymbolTwo.svg'
import ArrowIcon from '../assets/images/datapad-graphics/arrow-icon.svg'
import DatapadExperienceOne from "./DatapadExperienceOne";
import DatapadExperienceTwo from "./DatapadExperienceTwo";
import DatapadExperienceThree from "./DatapadExperienceThree";

export default function ExperienceDatapad() {

    const scrollRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current && cardRef.current) {
            scrollRef.current.scrollBy({
                left: -cardRef.current.offsetWidth,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current && cardRef.current) {
            scrollRef.current.scrollBy({
                left: cardRef.current.offsetWidth,
                behavior: 'smooth',
            });
        }
    };



    return (
        <div className='bg-foreground flex flex-col w-4xl xl:w-4xl relative z-50 p-4 py-6 rounded-xl datapad-hard-shadow'>

            <div id="screen" className='bg-background border-[1px] border-white/25 px-4 py-2 rounded-xl relative flex flex-col justify-center items-center overflow-hidden'>
                <img className='absolute w-full h-full object-cover mix-blend-overlay opacity-75 z-5' src={Noise} />
                <video id="pixel-video" className='absolute w-full h-full object-cover z-5 mix-blend-darken opacity-25' autoPlay playsInline muted loop src={NoiseTestThree} />
                <video id="pixel-video" className='absolute w-full h-full object-cover z-5 mix-blend-soft-light opacity-50' autoPlay playsInline muted loop src={NoiseTestTwo} />
                <div id='datapad-content' className='w-full h-full flex flex-col datapad-glow-effect'>
                    <div className="scanline-overlay w-[150%] self-center -px-16 min-h-[150%] -my-4" />

                    <img className='brightness-125' src={DatapadStrip} />
                    <h2 className='p-2 text-green-foreground brightness-125 text-5xl turret-road-extrabold text-center'>EXPERIENCE DATABASE</h2>
                    <img className='brightness-125 w-full py-1' src={ThinLine} />

                    <div className='flex flex-row justify-between items-center px-4'>
                        <div className='flex flex-col w-full'>
                            <div className='flex flex-col min-w-3/4 max-h-32 flex-wrap '>
                                <p className='text-green-foreground brightness-125 turret-road-bold py-4 text-2xl'><span className='turret-road-extrabold pr-4'>NAME:</span> Zachary Russell</p>
                                <p className='text-green-foreground brightness-125 turret-road-bold py-4 text-2xl'><span className='turret-road-extrabold pr-4'>ORIGIN:</span> Tampa, FL</p>
                                <p className='text-green-foreground brightness-125 turret-road-bold py-4 text-2xl'><span className='turret-road-extrabold pr-4'>PRONOUNS:</span> He/Him</p>
                                <p className='text-green-foreground brightness-125 turret-road-bold py-4 text-2xl'><span className='turret-road-extrabold pr-4'>LOCATION:</span> Orlando, FL</p>
                            </div>
                            <img className='pr-32 pt-4' src={Symbols} />
                        </div>
                        <img className='max-w-1/4' src={datpadPicture} />
                    </div>
                    <img className='brightness-125 w-full py-1' src={ThinLine} />

                    <div ref={scrollRef} className='pt-8 w-full h-full flex flex-row overflow-x-scroll scrollbar-hide'>

                        <div ref={cardRef} className='min-w-full'>
                            <DatapadExperienceOne />
                        </div>
                        <DatapadExperienceTwo />
                        <DatapadExperienceThree />

                    </div>

                </div>

            </div>
            <div id='button-container' className='w-full flex flex-row justify-between items-center pt-4'>
                <div className='flex flex-row gap-x-4'>
                    <div className='bg-orange-background p-4 rounded-full border-1 border-orange-foreground button-shadow-orange'>
                        <img className='aspect-square object-contain scale-125 self-center' src={ButtonSymbolOne} />
                    </div>
                    <div className='bg-pink-background p-4 rounded-full border-1 border-pink-foreground button-shadow-pink'>
                        <img className='aspect-square object-contain scale-125 self-center' src={ButtonSymbolTwo} />
                    </div>
                </div>
                <div className='flex flex-row justify-end items-center w-1/2 gap-x-4'>
                    <button className='bg-purple-background p-4 rounded-full border-1 border-purple-foreground button-shadow-purple purple-rounded cursor-pointer'>
                        <MdOpenInNew size={30} className='text-purple-foreground' />
                    </button>
                    <div className='flex flex-row gap-x-4'>
                        <button onClick={scrollLeft} className='bg-green-background py-2 px-8 rounded-lg border-1 border-green-foreground button-shadow-green green cursor-pointer arrow-button'>
                            <img className='w-14 h-14' src={ArrowIcon} />
                        </button>
                        <button onClick={scrollRight} className='bg-green-background py-2 px-8 rounded-lg border-1 border-green-foreground button-shadow-green green cursor-pointer arrow-button'>
                            <img className='w-14 h-14 rotate-180' src={ArrowIcon} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
