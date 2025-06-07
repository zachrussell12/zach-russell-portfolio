//Tech Datapad Images
import pythonIcon from '../assets/images/datapad-graphics/python-icon.png'
import reactIcon from '../assets/images/datapad-graphics/react-icon.png'
import javascriptIcon from '../assets/images/datapad-graphics/javascript-icon.png'
import firebaseIcon from '../assets/images/datapad-graphics/firebase-icon.png'
import gitIcon from '../assets/images/datapad-graphics/git-icon.png'
import nodeIcon from '../assets/images/datapad-graphics/node-icon.png'
import csharpIcon from '../assets/images/datapad-graphics/csharp-icon.png'

export default function DatapadExperienceTwo() {
    return (
        <div className='flex flex-col w-full'>

            <div className='flex flex-row justify-between items-end'>
                <h3 className='text-green-foreground brightness-125 text-xl turret-road-bold text-left md:px-4 md:text-5xl'>Software Engineer</h3>
                <p className='text-green-foreground brightness-125 text-sm turret-road-regular text-left md:px-4 md:text-4xl'>Orlando</p>
            </div>

            <div className='flex flex-col justify-start items-end w-full pt-2 gap-y-1 md:flex-row md:pt-8 md:gap-x-32'>
                <div className='flex flex-row justify-between items-end w-full md:w-fit'>
                    <h4 className='px-0 text-green-foreground brightness-125 text-base turret-road-bold text-left md:text-2xl md:px-4'>COMPANY:</h4>
                    <p className='px-0 text-green-foreground brightness-125 text-sm turret-road-regular text-left md:text-xl md:px-4'>Self-employed</p>
                </div>
                <div className='flex flex-row justify-between items-end w-full md:w-fit'>
                    <h4 className='px-0 text-green-foreground brightness-125 text-base turret-road-bold text-left md:text-2xl md:px-4'>TENURE:</h4>
                    <p className='px-0 text-green-foreground brightness-125 text-sm turret-road-regular text-left md:text-xl md:px-4'>Oct 2023 - Present</p>
                </div>
            </div>

            <div className='flex flex-col pt-4 pl-0 md:pt-8 md:pl-4'>
                <h4 className='text-green-foreground brightness-125 text-base turret-road-bold text-left md:text-2xl'>SKILLS UTILIZED:</h4>
                <div className='flex flex-row pt-1 gap-x-1 md:gap-x-2 md:pt-2'>
                    <img className='w-8 h-8 md:w-16 md:h-16' src={pythonIcon} />
                    <img className='w-8 h-8 md:w-16 md:h-16' src={reactIcon} />
                    <img className='w-8 h-8 md:w-16 md:h-16' src={javascriptIcon} />
                    <img className='w-8 h-8 md:w-16 md:h-16' src={firebaseIcon} />
                    <img className='w-8 h-8 md:w-16 md:h-16' src={gitIcon} />
                    <img className='w-8 h-8 md:w-16 md:h-16' src={nodeIcon} />
                    <img className='w-8 h-8 md:w-16 md:h-16' src={csharpIcon} />
                </div>
            </div>

            <div className='flex flex-col pt-8 pl-0 pb-4 md:pb-8 md:pl-4 md:pt-16'>
                <h4 className='text-green-foreground brightness-125 text-base turret-road-bold text-left md:text-2xl'>KEY INFORMATION:</h4>
                <ul className='list-disc pl-4 grid columns-1 gap-y-2 mb-0 pt-2 md:pt-4 md:mb-8 md:gap-y-8 md:pl-16'>
                    <li className='text-green-foreground brightness-125 text-sm turret-road-regular text-left md:text-xl'>
                        Utilized Python to build the Clash Marker BIM Tool which facilitates the transfer of clash and viewpoint data between Autodesk Navisworks and design software like AutoCAD, Revit, BricsCAD, and SprinkCAD.
                    </li>
                    <li className='text-green-foreground brightness-125 text-sm turret-road-regular text-left md:text-xl'>
                        Utilized C# to create Revit and Navisworks plug-ins to work in accordance with Clash Marker.
                    </li>
                    <li className='text-green-foreground brightness-125 text-sm turret-road-regular text-left md:text-xl'>
                        Utilized Node.js and a Heroku instance to create a middleware server to facilitate communication between the tool and the Firebase backend.
                    </li>
                    <li className='text-green-foreground brightness-125 text-sm turret-road-regular text-left md:text-xl'>
                        Increased customer clash resolution workflows by 30-50%.
                    </li>
                    <li className='text-green-foreground brightness-125 text-sm turret-road-regular text-left md:text-xl'>
                        Developed a React web store with Firebase backend to facilitate the purchasing of the tool using Stripe integration.
                    </li>
                </ul>
            </div>
        </div>
    )
}
