//Images
import ReactIcon from '../assets/images/tech-icons/React.png'
import JavaScriptIcon from '../assets/images/tech-icons/JavaScript.png'
import TypeScriptIcon from '../assets/images/tech-icons/TypeScript.png'
import GitIcon from '../assets/images/tech-icons/Git.png'
import PythonIcon from '../assets/images/tech-icons/Python.png'
import FirebaseIcon from '../assets/images/tech-icons/Firebase.png'
import NodeIcon from '../assets/images/tech-icons/Node.png'
import ExpoIcon from '../assets/images/tech-icons/Expo.svg'
import FigmaIcon from '../assets/images/tech-icons/Figma.png'

export default function OrbitingSkill() {

    return (
        <div className='w-full min-h-screen absolute overflow-x-hidden hidden md:inline lg:inline'>
            <svg className='-translate-x-2 absolute bottom-[10%] w-full lg:bottom-[20%]' viewBox={`0 0 ${window.innerWidth} 205`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={`M${window.innerWidth} 205C${window.innerWidth - 155.5} 126 ${window.innerWidth * 0.76} 1 ${window.innerWidth / 2} 1C367.455 1 155.5 140 1 205`} stroke="white" stroke-width="1.5" />
            </svg>

            {/* Lower Icons */}
            <div className='w-full h-96 opacity-100 absolute bottom-[3.25%] overflow-x-hidden rotate=180 justify-center items-center lg:bottom-[15.5%]'>
                <div style={
                    {
                        left: 0, bottom: '50%', position: 'absolute', offsetPath: `path("M${window.innerWidth} 205C${window.innerWidth - 155.5} 126 ${window.innerWidth * 0.76} 1 ${window.innerWidth / 2} 1C367.455 1 155.5 140 1 205")`, animation: 'moveHalfEllipseBackwards 50s linear infinite', animationDelay: '-10s',
                    }
                }>
                    <div className='bg-white p-2 h-12 w-12 rounded-full mx-auto transition-all lg:h-16 lg:w-16'>
                        <img className='rotate-180' src={PythonIcon}/>
                    </div>
                    <p className='rotate-180 text-white text-base text-center pb-2 font-bold lg:text-lg'>Python</p>
                </div>
            </div>

            <div className='w-full h-96 opacity-100 absolute bottom-[3.25%] overflow-x-hidden rotate=180 justify-center items-center lg:bottom-[15.5%]'>
                <div style={
                    {
                        left: 0, bottom: '50%', position: 'absolute', offsetPath: `path("M${window.innerWidth} 205C${window.innerWidth - 155.5} 126 ${window.innerWidth * 0.76} 1 ${window.innerWidth / 2} 1C367.455 1 155.5 140 1 205")`, animation: 'moveHalfEllipseBackwards 50s linear infinite', animationDelay: '-20s',
                    }
                }>
                    <div className='bg-white p-2 h-12 w-12 rounded-full mx-auto lg:h-16 lg:w-16'>
                        <img className='rotate-180' src={FirebaseIcon}/>
                    </div>
                    <p className='rotate-180 text-white text-base text-center pb-2 font-bold lg:text-lg'>Firebase</p>
                </div>
            </div>

            <div className='w-full h-96 opacity-100 absolute bottom-[3.25%] overflow-x-hidden rotate=180 justify-center items-center lg:bottom-[15.5%]'>
                <div style={
                    {
                        left: 0, bottom: '50%', position: 'absolute', offsetPath: `path("M${window.innerWidth} 205C${window.innerWidth - 155.5} 126 ${window.innerWidth * 0.76} 1 ${window.innerWidth / 2} 1C367.455 1 155.5 140 1 205")`, animation: 'moveHalfEllipseBackwards 50s linear infinite', animationDelay: '-30s',
                    }
                }>
                    <div className='bg-white p-3.5 h-12 w-12 rounded-full mx-auto lg:w-16 lg:h-16'>
                        <img className='rotate-180' src={ExpoIcon}/>
                    </div>
                    <p className='rotate-180 text-white text-base text-center pb-2 font-bold lg:text-lg'>Expo</p>
                </div>
            </div>

            <div className='w-full h-96 opacity-100 absolute bottom-[3.25%] overflow-x-hidden rotate=180 justify-center items-center lg:bottom-[15.5%]'>
                <div style={
                    {
                        left: 0, bottom: '50%', position: 'absolute', offsetPath: `path("M${window.innerWidth} 205C${window.innerWidth - 155.5} 126 ${window.innerWidth * 0.76} 1 ${window.innerWidth / 2} 1C367.455 1 155.5 140 1 205")`, animation: 'moveHalfEllipseBackwards 50s linear infinite', animationDelay: '-40s',
                    }
                }>
                    <div className='bg-white p-3.5 h-12 w-12 rounded-full mx-auto lg:w-16 lg:h-16'>
                        <img className='rotate-180' src={NodeIcon}/>
                    </div>
                    <p className='rotate-180 text-white text-base text-center pb-2 font-bold lg:text-lg'>Node.js</p>
                </div>
            </div>

            <div className='w-full h-96 opacity-100 absolute bottom-[3.25%] overflow-x-hidden rotate=180 justify-center items-center lg:bottom-[15.5%]'>
                <div style={
                    {
                        left: 0, bottom: '50%', position: 'absolute', offsetPath: `path("M${window.innerWidth} 205C${window.innerWidth - 155.5} 126 ${window.innerWidth * 0.76} 1 ${window.innerWidth / 2} 1C367.455 1 155.5 140 1 205")`, animation: 'moveHalfEllipseBackwards 50s linear infinite', animationDelay: '-0s',
                    }
                }>
                    <div className='bg-white p-3.5 h-12 w-12 rounded-full mx-auto lg:w-16 lg:h-16'>
                        <img className='rotate-180' src={FigmaIcon}/>
                    </div>
                    <p className='rotate-180 text-white text-base text-center pb-2 font-bold lg:text-lg'>Figma</p>
                </div>
            </div>

            <svg className='-translate-x-2 absolute bottom-[20%] w-full lg:bottom-[30%]' viewBox={`0 0 ${window.innerWidth} 205`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={`M${window.innerWidth} 205C${window.innerWidth - 155.5} 126 ${window.innerWidth * 0.76} 1 ${window.innerWidth / 2} 1C367.455 1 155.5 140 1 205`} stroke="white" strokeWidth="1" />
            </svg>

            <svg className='-translate-x-2 absolute bottom-[26%] w-full lg:bottom-[36%]' viewBox={`0 0 ${window.innerWidth} 205`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={`M${window.innerWidth} 205C${window.innerWidth - 155.5} 126 ${window.innerWidth * 0.76} 1 ${window.innerWidth / 2} 1C367.455 1 155.5 140 1 205`} stroke="white" strokeWidth="1" />
            </svg>

            <svg className='-translate-x-2 absolute bottom-[27%] w-full lg:bottom-[37%]' viewBox={`0 0 ${window.innerWidth} 205`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={`M${window.innerWidth} 205C${window.innerWidth - 155.5} 126 ${window.innerWidth * 0.76} 1 ${window.innerWidth / 2} 1C367.455 1 155.5 140 1 205`} stroke="white" strokeWidth="0.75" />
            </svg>

            <svg className='-translate-x-2 absolute bottom-[35%] w-full lg:bottom-[45%]' viewBox={`0 0 ${window.innerWidth} 205`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={`M${window.innerWidth} 205C${window.innerWidth - 155.5} 126 ${window.innerWidth * 0.76} 1 ${window.innerWidth / 2} 1C367.455 1 155.5 140 1 205`} stroke="white" strokeWidth="1.5" />
            </svg>

            {/* Upper Icons */}
            <div className='w-full h-96 opacity-100 absolute bottom-[29%] overflow-x-hidden rotate=180 justify-center items-center lg:bottom-[40.5%]'>
                <div style={
                    {
                        left: 0, bottom: '50%', position: 'absolute', offsetPath: `path("M${window.innerWidth} 205C${window.innerWidth - 155.5} 126 ${window.innerWidth * 0.76} 1 ${window.innerWidth / 2} 1C367.455 1 155.5 140 1 205")`, animation: 'moveHalfEllipse 50s linear infinite', animationDelay: '-12.5s',
                    }
                }>
                    <div className='bg-white p-3 h-12 w-12 rounded-full mx-auto lg:h-16 lg:w-16'>
                        <img src={ReactIcon}/>
                    </div>
                    <p className='rotate-180 text-white text-base text-center pb-2 font-bold lg:text-lg'>React / React Native</p>
                </div>
            </div>

            <div className='w-full h-96 opacity-100 absolute bottom-[29%] overflow-x-hidden rotate=180 justify-center items-center lg:bottom-[40.5%]'>
                <div style={
                    {
                        left: 0, bottom: '50%', position: 'absolute', offsetPath: `path("M${window.innerWidth} 205C${window.innerWidth - 155.5} 126 ${window.innerWidth * 0.76} 1 ${window.innerWidth / 2} 1C367.455 1 155.5 140 1 205")`, animation: 'moveHalfEllipse 50s linear infinite', animationDelay: '-25s',
                    }
                }>
                    <div className='bg-white p-3.5 h-12 w-12 rounded-full mx-auto lg:h-16 lg:w-16'>
                        <img className='rotate-180' src={JavaScriptIcon}/>
                    </div>
                    <p className='rotate-180 text-white text-base text-center pb-2 font-bold lg:text-lg'>JavaScript</p>
                </div>
            </div>

            <div className='w-full h-96 opacity-100 absolute bottom-[29%] overflow-x-hidden rotate=180 justify-center items-center lg:bottom-[40.5%]'>
                <div style={
                    {
                        left: 0, bottom: '50%', position: 'absolute', offsetPath: `path("M${window.innerWidth} 205C${window.innerWidth - 155.5} 126 ${window.innerWidth * 0.76} 1 ${window.innerWidth / 2} 1C367.455 1 155.5 140 1 205")`, animation: 'moveHalfEllipse 50s linear infinite', animationDelay: '-37.5s',
                    }
                }>
                    <div className='bg-white p-3.5 h-12 w-12 rounded-full mx-auto lg:h-16 lg:w-16'>
                        <img className='rotate-180' src={TypeScriptIcon}/>
                    </div>
                    <p className='rotate-180 text-white text-base text-center pb-2 font-bold lg:text-lg'>TypeScript</p>
                </div>
            </div>

            <div className='w-full h-96 opacity-100 absolute bottom-[29%] overflow-x-hidden rotate=180 justify-center items-center lg:bottom-[40.5%]'>
                <div style={
                    {
                        left: 0, bottom: '50%', position: 'absolute', offsetPath: `path("M${window.innerWidth} 205C${window.innerWidth - 155.5} 126 ${window.innerWidth * 0.76} 1 ${window.innerWidth / 2} 1C367.455 1 155.5 140 1 205")`, animation: 'moveHalfEllipse 50s linear infinite', animationDelay: '0',
                    }
                }>
                    <div className='bg-white p-3.5 h-12 w-12 rounded-full mx-auto lg:h-16 lg:w-16'>
                        <img className='rotate-180' src={GitIcon}/>
                    </div>
                    <p className='rotate-180 text-white text-base text-center pb-2 font-bold lg:text-lg'>Git</p>
                </div>
            </div>

        </div>
    )
}
