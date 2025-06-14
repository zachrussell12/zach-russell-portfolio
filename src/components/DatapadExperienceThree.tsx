//Tech Datapad Images
import javascriptIcon from '../assets/images/datapad-graphics/javascript-icon.png'
import reactIcon from '../assets/images/datapad-graphics/react-icon.png'
import firebaseIcon from '../assets/images/datapad-graphics/firebase-icon.png'
import gitIcon from '../assets/images/datapad-graphics/git-icon.png'
import expoIcon from '../assets/images/datapad-graphics/expo-icon.png'

export default function DatapadExperienceThree() {
    return (
        <div className='flex flex-col w-full'>

            <div className='flex flex-row justify-between items-end'>
                <h3 className='text-green-foreground brightness-125 text-xl turret-road-bold text-left md:px-2 md:text-3xl lg:px-4 lg:text-5xl'>Mobile App Engineer</h3>
                <p className='text-green-foreground brightness-125 text-sm turret-road-regular text-left md:px-2 md:text-xl lg:px-4 lg:text-4xl'>Orlando</p>
            </div>

            <div className='flex flex-col justify-start items-end w-full pt-2 gap-y-1 md:flex-row md:pt-4 md:gap-x-4 lg:flex-row lg:pt-8 lg:gap-x-32'>
                <div className='flex flex-row justify-between items-end w-full md:w-fit'>
                    <h4 className='px-0 text-green-foreground brightness-125 text-base turret-road-bold text-left md:text-xl md:px-2 lg:text-2xl lg:px-4'>COMPANY:</h4>
                    <p className='px-0 text-green-foreground brightness-125 text-sm turret-road-regular text-left md:text-lg md:px-2 lg:text-xl lg:px-4'>Self-employed</p>
                </div>
                <div className='flex flex-row justify-between items-end w-full md:w-fit'>
                    <h4 className='px-0 text-green-foreground brightness-125 text-base turret-road-bold text-left md:text-xl md:px-2 lg:text-2xl lg:px-4'>TENURE:</h4>
                    <p className='px-0 text-green-foreground brightness-125 text-sm turret-road-regular text-left md:text-lg md:px-2 lg:text-xl lg:px-4'>Jun 2021 - Aug 2023</p>
                </div>
            </div>

            <div className='flex flex-col pt-4 pl-0 md:pt-8 md:pl-2 lg:pt-8 lg:pl-4'>
                <h4 className='text-green-foreground brightness-125 text-base turret-road-bold text-left md:text-xl lg:text-2xl'>SKILLS UTILIZED:</h4>
                <div className='flex flex-row pt-1 gap-x-1 md:gap-x-2 md:pt-2 lg:gap-x-2 lg:pt-2'>
                    <img className='w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16' src={javascriptIcon} />
                    <img className='w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16' src={reactIcon} />
                    <img className='w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16' src={firebaseIcon} />
                    <img className='w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16' src={gitIcon} />
                    <img className='w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16' src={expoIcon} />
                </div>
            </div>

            <div className='flex flex-col pt-8 pl-0 pb-4 md:pb-11 md:pl-2 md:pt-8 lg:pb-8 lg:pl-4 lg:pt-16'>
                <h4 className='text-green-foreground brightness-125 text-base turret-road-bold text-left md:text-xl lg:text-2xl'>KEY INFORMATION:</h4>
                <ul className='llist-disc pl-4 grid columns-1 gap-y-2 mb-0 pt-2 md:pt-2 md:mb-4 md:gap-y-4 md:pl-8 lg:pt-4 lg:mb-8 lg:gap-y-8 lg:pl-16'>
                    <li className='text-green-foreground brightness-125 text-sm turret-road-regular text-left md:text-lg lg:text-xl'>
                        Developed a mobile application that used research related to stress on the brain to organize your daily schedule in order to avoid burnout and elevated stress.
                    </li>
                    <li className='text-green-foreground brightness-125 text-sm turret-road-regular text-left md:text-lg lg:text-xl'>
                        The algorithm helped users improve their efficiency without sacrificing mental well-being.
                    </li>
                    <li className='text-green-foreground brightness-125 text-sm turret-road-regular text-left md:text-lg lg:text-xl'>
                        Utilized React Native (Javascript) and Firebase to facilitate the various functions in the app including:
                        <ul className='list-disc pl-4 grid columns-1 gap-y-1 pt-1 md:pt-2 md:gap-y-2 md:pl-6'>
                            <li>Account Creation and Log-in including Google OAuth</li>
                            <li>Recurring Notifications for reminders in the app</li>
                            <li>Storing user data in Firestore for daily app needs</li>
                            <li>Cloud functions to handle various needs for the application</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}
