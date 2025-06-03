//Tech Datapad Images
import javascriptIcon from '../assets/images/datapad-graphics/javascript-icon.png'
import reactIcon from '../assets/images/datapad-graphics/react-icon.png'
import firebaseIcon from '../assets/images/datapad-graphics/firebase-icon.png'
import gitIcon from '../assets/images/datapad-graphics/git-icon.png'
import expoIcon from '../assets/images/datapad-graphics/expo-icon.png'

export default function DatapadExperienceThree() {
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
                    <p className='px-4 text-green-foreground brightness-125 text-xl turret-road-regular text-left'>Jun 2021 - Aug 2023</p>
                </div>
            </div>

            <div className='flex flex-col pt-8 pl-4'>
                <h4 className='text-green-foreground brightness-125 text-2xl turret-road-bold text-left'>SKILLS UTILIZED:</h4>
                <div className='flex flex-row pt-2 gap-x-2'>
                    <img className='w-16 h-16' src={javascriptIcon} />
                    <img className='w-16 h-16' src={reactIcon} />
                    <img className='w-16 h-16' src={firebaseIcon} />
                    <img className='w-16 h-16' src={gitIcon} />
                    <img className='w-16 h-16' src={expoIcon} />
                </div>
            </div>

            <div className='flex flex-col pt-16 pl-4 pb-7'>
                <h4 className='text-green-foreground brightness-125 text-2xl turret-road-bold text-left'>KEY INFORMATION:</h4>
                <ul className='list-disc pl-16 grid columns-1 gap-y-8 mb-8 pt-4'>
                    <li className='text-green-foreground brightness-125 text-xl turret-road-regular text-left'>
                        Developed a mobile application that used research related to stress on the brain to organize your daily schedule in order to avoid burnout and elevated stress.
                    </li>
                    <li className='text-green-foreground brightness-125 text-xl turret-road-regular text-left'>
                        The algorithm helped users improve their efficiency without sacrificing mental well-being.
                    </li>
                    <li className='text-green-foreground brightness-125 text-xl turret-road-regular text-left grid columns-1 gap-y-2'>
                        Utilized React Native (Javascript) and Firebase to facilitate the various functions in the app including:
                        <ul className='list-disc pl-6'>
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
