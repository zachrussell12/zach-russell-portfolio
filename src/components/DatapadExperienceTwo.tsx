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
        <div className='flex flex-col min-w-full'>

            <div className='flex flex-row justify-between items-end'>
                <h3 className='px-4 text-green-foreground brightness-125 text-5xl turret-road-bold text-left'>Software Engineer</h3>
                <p className='px-4 text-green-foreground brightness-125 text-4xl turret-road-regular text-left'>Orlando</p>
            </div>

            <div className='flex flex-row justify-start items-end pt-8 gap-x-32'>
                <div className='flex flex-row justify-between items-end'>
                    <h4 className='px-4 text-green-foreground brightness-125 text-2xl turret-road-bold text-left'>COMPANY:</h4>
                    <p className='px-4 text-green-foreground brightness-125 text-xl turret-road-regular text-left'>Self-employed</p>
                </div>
                <div className='flex flex-row justify-between items-end'>
                    <h4 className='px-4 text-green-foreground brightness-125 text-2xl turret-road-bold text-left'>TENURE:</h4>
                    <p className='px-4 text-green-foreground brightness-125 text-xl turret-road-regular text-left'>Oct 2023 - Present</p>
                </div>
            </div>

            <div className='flex flex-col pt-8 pl-4'>
                <h4 className='text-green-foreground brightness-125 text-2xl turret-road-bold text-left'>SKILLS UTILIZED:</h4>
                <div className='flex flex-row pt-2 gap-x-2'>
                    <img className='w-16 h-16' src={pythonIcon} />
                    <img className='w-16 h-16' src={reactIcon} />
                    <img className='w-16 h-16' src={javascriptIcon} />
                    <img className='w-16 h-16' src={firebaseIcon} />
                    <img className='w-16 h-16' src={gitIcon} />
                    <img className='w-16 h-16' src={nodeIcon} />
                    <img className='w-16 h-16' src={csharpIcon} />
                </div>
            </div>

            <div className='flex flex-col pt-16 pl-4'>
                <h4 className='text-green-foreground brightness-125 text-2xl turret-road-bold text-left'>KEY INFORMATION:</h4>
                <ul className='list-disc pl-16 grid columns-1 gap-y-8 mb-8 pt-4'>
                    <li className='text-green-foreground brightness-125 text-xl turret-road-regular text-left'>
                        Utilized Python to build the Clash Marker BIM Tool which facilitates the transfer of clash and viewpoint data between Autodesk Navisworks and design software like AutoCAD, Revit, BricsCAD, and SprinkCAD.
                    </li>
                    <li className='text-green-foreground brightness-125 text-xl turret-road-regular text-left'>
                        Utilized C# to create Revit and Navisworks plug-ins to work in accordance with Clash Marker.
                    </li>
                    <li className='text-green-foreground brightness-125 text-xl turret-road-regular text-left'>
                        Utilized Node.js and a Heroku instance to create a middleware server to facilitate communication between the tool and the Firebase backend.
                    </li>
                    <li className='text-green-foreground brightness-125 text-xl turret-road-regular text-left'>
                        Increased customer clash resolution workflows by 30-50%.
                    </li>
                    <li className='text-green-foreground brightness-125 text-xl turret-road-regular text-left'>
                        Developed a React web store with Firebase backend to facilitate the purchasing of the tool using Stripe integration.
                    </li>
                </ul>
            </div>
        </div>
    )
}
