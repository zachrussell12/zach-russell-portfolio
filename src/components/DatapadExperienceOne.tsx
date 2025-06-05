//Tech Datapad Images
import typescriptIcon from '../assets/images/datapad-graphics/typescript-icon.png'
import reactIcon from '../assets/images/datapad-graphics/react-icon.png'
import firebaseIcon from '../assets/images/datapad-graphics/firebase-icon.png'
import gitIcon from '../assets/images/datapad-graphics/git-icon.png'
import expoIcon from '../assets/images/datapad-graphics/expo-icon.png'

export default function DatapadExperienceOne() {
    return (
        <div className='flex flex-col min-w-full'>

            <div className='flex flex-row justify-between items-end'>
                <h3 className='px-4 text-green-foreground brightness-125 text-5xl turret-road-bold text-left'>React Native Developer</h3>
                <p className='px-4 text-green-foreground brightness-125 text-4xl turret-road-regular text-left'>Orlando</p>
            </div>

            <div className='flex flex-row justify-start items-end pt-8 gap-x-32'>
                <div className='flex flex-row justify-between items-end'>
                    <h4 className='px-4 text-green-foreground brightness-125 text-2xl turret-road-bold text-left'>COMPANY:</h4>
                    <p className='px-4 text-green-foreground brightness-125 text-xl turret-road-regular text-left'>Self-employed</p>
                </div>
                <div className='flex flex-row justify-between items-end'>
                    <h4 className='px-4 text-green-foreground brightness-125 text-2xl turret-road-bold text-left'>TENURE:</h4>
                    <p className='px-4 text-green-foreground brightness-125 text-xl turret-road-regular text-left'>Nov 2024 - Nov 2024</p>
                </div>
            </div>

            <div className='flex flex-col pt-8 pl-4'>
                <h4 className='text-green-foreground brightness-125 text-2xl turret-road-bold text-left'>SKILLS UTILIZED:</h4>
                <div className='flex flex-row pt-2 gap-x-2'>
                    <img className='w-16 h-16' src={typescriptIcon} />
                    <img className='w-16 h-16' src={reactIcon} />
                    <img className='w-16 h-16' src={firebaseIcon} />
                    <img className='w-16 h-16' src={gitIcon} />
                    <img className='w-16 h-16' src={expoIcon} />
                </div>
            </div>

            <div className='flex flex-col pt-16 pl-4 pb-8'>
                <h4 className='text-green-foreground brightness-125 text-2xl turret-road-bold text-left'>KEY INFORMATION:</h4>
                <ul className='list-disc pl-16 grid columns-1 gap-y-8 mb-8 pt-4'>
                    <li className='text-green-foreground brightness-125 text-xl turret-road-regular text-left'>
                        Rapidly developed the CrowdFree application for students at UCF that wanted a way to avoid events on campus.
                    </li>
                    <li className='text-green-foreground brightness-125 text-xl turret-road-regular text-left'>
                        Hundreds of users on campus used the app to report events and successfully avoided unwanted confrontation.
                    </li>
                    <li className='text-green-foreground brightness-125 text-xl turret-road-regular text-left '>
                        Utilized React Native (Typescript) and Firebase to facilitate various functions throughout the app including:
                        <ul className='list-disc pl-6 grid columns-1 gap-y-2 pt-2'>
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
