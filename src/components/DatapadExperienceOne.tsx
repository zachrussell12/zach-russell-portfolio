//Tech Datapad Images
import typescriptIcon from '../assets/images/datapad-graphics/typescript-icon.png'
import reactIcon from '../assets/images/datapad-graphics/react-icon.png'
import firebaseIcon from '../assets/images/datapad-graphics/firebase-icon.png'
import gitIcon from '../assets/images/datapad-graphics/git-icon.png'
import expoIcon from '../assets/images/datapad-graphics/expo-icon.png'

export default function DatapadExperienceOne() {
    return (
        <div className='flex flex-col w-full'>

            <div className='flex flex-row justify-between items-end'>
                <h3 className='text-green-foreground brightness-125 text-xl turret-road-bold text-left md:px-4 md:text-5xl'>React Native Developer</h3>
                <p className='text-green-foreground brightness-125 text-sm turret-road-regular text-left md:px-4 md:text-4xl'>Orlando</p>
            </div>

            <div className='flex flex-col justify-start items-end w-full pt-2 gap-y-1 md:flex-row md:pt-8 md:gap-x-32'>
                <div className='flex flex-row justify-between items-end w-full md:w-fit'>
                    <h4 className='px-0 text-green-foreground brightness-125 text-base turret-road-bold text-left md:text-2xl md:px-4'>COMPANY:</h4>
                    <p className='px-0 text-green-foreground brightness-125 text-sm turret-road-regular text-left md:text-xl md:px-4'>Self-employed</p>
                </div>
                <div className='flex flex-row justify-between items-end w-full md:w-fit'>
                    <h4 className='px-0 text-green-foreground brightness-125 text-base turret-road-bold text-left md:text-2xl md:px-4'>TENURE:</h4>
                    <p className='px-0 text-green-foreground brightness-125 text-sm turret-road-regular text-left md:text-xl md:px-4'>Nov 2024 - Nov 2024</p>
                </div>
            </div>

            <div className='flex flex-col pt-4 pl-0 md:pt-8 md:pl-4'>
                <h4 className='text-green-foreground brightness-125 text-base turret-road-bold text-left md:text-2xl'>SKILLS UTILIZED:</h4>
                <div className='flex flex-row pt-1 gap-x-1 md:gap-x-2 md:pt-2'>
                    <img className='w-8 h-8 md:w-16 md:h-16' src={typescriptIcon} />
                    <img className='w-8 h-8 md:w-16 md:h-16' src={reactIcon} />
                    <img className='w-8 h-8 md:w-16 md:h-16' src={firebaseIcon} />
                    <img className='w-8 h-8 md:w-16 md:h-16' src={gitIcon} />
                    <img className='w-8 h-8 md:w-16 md:h-16' src={expoIcon} />
                </div>
            </div>

            <div className='flex flex-col pt-8 pl-0 pb-4 md:pb-8 md:pl-4 md:pt-16'>
                <h4 className='text-green-foreground brightness-125 text-base turret-road-bold text-left md:text-2xl'>KEY INFORMATION:</h4>
                <ul className='list-disc pl-4 grid columns-1 gap-y-2 mb-0 pt-2 md:pt-4 md:mb-8 md:gap-y-8 md:pl-16'>
                    <li className='text-green-foreground brightness-125 text-sm turret-road-regular text-left md:text-xl'>
                        Rapidly developed the CrowdFree application for students at UCF that wanted a way to avoid events on campus.
                    </li>
                    <li className='text-green-foreground brightness-125 text-sm turret-road-regular text-left md:text-xl'>
                        Hundreds of users on campus used the app to report events and successfully avoided unwanted confrontation.
                    </li>
                    <li className='text-green-foreground brightness-125 text-sm turret-road-regular text-left md:text-xl'>
                        Utilized React Native (Typescript) and Firebase to facilitate various functions throughout the app including:
                        <ul className='list-disc pl-4 grid columns-1 gap-y-1 pt-1 md:pt-2 md:gap-y-2 md:pl-6'>
                            <li>Device-based accounts with no sign-up</li>
                            <li>Apple and Google map integration and map marker placement</li>
                            <li>Event voting system and automatic removal</li>
                            <li>Event reporting system and user blacklist system</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}
