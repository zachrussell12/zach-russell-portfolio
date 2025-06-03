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
        <div className='w-full min-h-screen absolute overflow-x-hidden'>
            <svg className='-translate-x-2 absolute bottom-[35%] w-full' viewBox={`0 0 ${window.innerWidth} 205`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={`M${window.innerWidth} 205C${window.innerWidth - 155.5} 126 ${window.innerWidth * 0.76} 1 ${window.innerWidth / 2} 1C367.455 1 155.5 140 1 205`} stroke="white" stroke-width="1.5" />
            </svg>

            {/* Lower Icons */}
            <div className='w-full h-96 opacity-100 absolute bottom-[30%] overflow-x-hidden rotate=180 justify-center items-center'>
                <div style={
                    {
                        left: 0, bottom: '50%', position: 'absolute', offsetPath: `path("M${window.innerWidth} 205C${window.innerWidth - 155.5} 126 ${window.innerWidth * 0.76} 1 ${window.innerWidth / 2} 1C367.455 1 155.5 140 1 205")`, animation: 'moveHalfEllipseBackwards 50s linear infinite', animationDelay: '-10s',
                    }
                }>
                    <div className='bg-white p-2 h-16 w-16 rounded-full mx-auto transition-all'>
                        <img className='rotate-180' src={PythonIcon}/>
                    </div>
                    <p className='rotate-180 text-white text-lg text-center pb-2 font-bold'>Python</p>
                </div>
            </div>

            <div className='w-full h-96 opacity-100 absolute bottom-[30%] overflow-x-hidden rotate=180 justify-center items-center'>
                <div style={
                    {
                        left: 0, bottom: '50%', position: 'absolute', offsetPath: `path("M${window.innerWidth} 205C${window.innerWidth - 155.5} 126 ${window.innerWidth * 0.76} 1 ${window.innerWidth / 2} 1C367.455 1 155.5 140 1 205")`, animation: 'moveHalfEllipseBackwards 50s linear infinite', animationDelay: '-20s',
                    }
                }>
                    <div className='bg-white p-2 h-16 w-16 rounded-full mx-auto'>
                        <img className='rotate-180' src={FirebaseIcon}/>
                    </div>
                    <p className='rotate-180 text-white text-lg text-center pb-2 font-bold'>Firebase</p>
                </div>
            </div>

            <div className='w-full h-96 opacity-100 absolute bottom-[30%] overflow-x-hidden rotate=180 justify-center items-center'>
                <div style={
                    {
                        left: 0, bottom: '50%', position: 'absolute', offsetPath: `path("M${window.innerWidth} 205C${window.innerWidth - 155.5} 126 ${window.innerWidth * 0.76} 1 ${window.innerWidth / 2} 1C367.455 1 155.5 140 1 205")`, animation: 'moveHalfEllipseBackwards 50s linear infinite', animationDelay: '-30s',
                    }
                }>
                    <div className='bg-white p-3.5 h-16 w-16 rounded-full mx-auto'>
                        <img className='rotate-180' src={ExpoIcon}/>
                    </div>
                    <p className='rotate-180 text-white text-lg text-center pb-2 font-bold'>Expo</p>
                </div>
            </div>

            <div className='w-full h-96 opacity-100 absolute bottom-[30%] overflow-x-hidden rotate=180 justify-center items-center'>
                <div style={
                    {
                        left: 0, bottom: '50%', position: 'absolute', offsetPath: `path("M${window.innerWidth} 205C${window.innerWidth - 155.5} 126 ${window.innerWidth * 0.76} 1 ${window.innerWidth / 2} 1C367.455 1 155.5 140 1 205")`, animation: 'moveHalfEllipseBackwards 50s linear infinite', animationDelay: '-40s',
                    }
                }>
                    <div className='bg-white p-3.5 h-16 w-16 rounded-full mx-auto'>
                        <img className='rotate-180' src={NodeIcon}/>
                    </div>
                    <p className='rotate-180 text-white text-lg text-center pb-2 font-bold'>Node.js</p>
                </div>
            </div>

            <div className='w-full h-96 opacity-100 absolute bottom-[30%] overflow-x-hidden rotate=180 justify-center items-center'>
                <div style={
                    {
                        left: 0, bottom: '50%', position: 'absolute', offsetPath: `path("M${window.innerWidth} 205C${window.innerWidth - 155.5} 126 ${window.innerWidth * 0.76} 1 ${window.innerWidth / 2} 1C367.455 1 155.5 140 1 205")`, animation: 'moveHalfEllipseBackwards 50s linear infinite', animationDelay: '-0s',
                    }
                }>
                    <div className='bg-white p-3.5 h-16 w-16 rounded-full mx-auto'>
                        <img className='rotate-180' src={FigmaIcon}/>
                    </div>
                    <p className='rotate-180 text-white text-lg text-center pb-2 font-bold'>Figma</p>
                </div>
            </div>

            <svg className='-translate-x-2 absolute bottom-[45%] w-full' viewBox={`0 0 ${window.innerWidth} 205`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={`M${window.innerWidth} 205C${window.innerWidth - 155.5} 126 ${window.innerWidth * 0.76} 1 ${window.innerWidth / 2} 1C367.455 1 155.5 140 1 205`} stroke="white" stroke-width="1" />
            </svg>

            <svg className='-translate-x-2 absolute bottom-[51%] w-full' viewBox={`0 0 ${window.innerWidth} 205`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={`M${window.innerWidth} 205C${window.innerWidth - 155.5} 126 ${window.innerWidth * 0.76} 1 ${window.innerWidth / 2} 1C367.455 1 155.5 140 1 205`} stroke="white" stroke-width="1" />
            </svg>

            <svg className='-translate-x-2 absolute bottom-[52%] w-full' viewBox={`0 0 ${window.innerWidth} 205`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={`M${window.innerWidth} 205C${window.innerWidth - 155.5} 126 ${window.innerWidth * 0.76} 1 ${window.innerWidth / 2} 1C367.455 1 155.5 140 1 205`} stroke="white" stroke-width="0.75" />
            </svg>

            <svg className='-translate-x-2 absolute bottom-[60%] w-full' viewBox={`0 0 ${window.innerWidth} 205`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={`M${window.innerWidth} 205C${window.innerWidth - 155.5} 126 ${window.innerWidth * 0.76} 1 ${window.innerWidth / 2} 1C367.455 1 155.5 140 1 205`} stroke="white" stroke-width="1.5" />
            </svg>

            {/* Upper Icons */}
            <div className='w-full h-96 opacity-100 absolute bottom-[55%] overflow-x-hidden rotate=180 justify-center items-center'>
                <div style={
                    {
                        left: 0, bottom: '50%', position: 'absolute', offsetPath: `path("M${window.innerWidth} 205C${window.innerWidth - 155.5} 126 ${window.innerWidth * 0.76} 1 ${window.innerWidth / 2} 1C367.455 1 155.5 140 1 205")`, animation: 'moveHalfEllipse 50s linear infinite', animationDelay: '-12.5s',
                    }
                }>
                    <div className='bg-white p-3 h-16 w-16 rounded-full mx-auto'>
                        <img src={ReactIcon}/>
                    </div>
                    <p className='rotate-180 text-white text-lg text-center pb-2 font-bold'>React / React Native</p>
                </div>
            </div>

            <div className='w-full h-96 opacity-100 absolute bottom-[55%] overflow-x-hidden rotate=180 justify-center items-center'>
                <div style={
                    {
                        left: 0, bottom: '50%', position: 'absolute', offsetPath: `path("M${window.innerWidth} 205C${window.innerWidth - 155.5} 126 ${window.innerWidth * 0.76} 1 ${window.innerWidth / 2} 1C367.455 1 155.5 140 1 205")`, animation: 'moveHalfEllipse 50s linear infinite', animationDelay: '-25s',
                    }
                }>
                    <div className='bg-white p-3.5 h-16 w-16 rounded-full mx-auto'>
                        <img className='rotate-180' src={JavaScriptIcon}/>
                    </div>
                    <p className='rotate-180 text-white text-lg text-center pb-2 font-bold'>JavaScript</p>
                </div>
            </div>

            <div className='w-full h-96 opacity-100 absolute bottom-[55%] overflow-x-hidden rotate=180 justify-center items-center'>
                <div style={
                    {
                        left: 0, bottom: '50%', position: 'absolute', offsetPath: `path("M${window.innerWidth} 205C${window.innerWidth - 155.5} 126 ${window.innerWidth * 0.76} 1 ${window.innerWidth / 2} 1C367.455 1 155.5 140 1 205")`, animation: 'moveHalfEllipse 50s linear infinite', animationDelay: '-37.5s',
                    }
                }>
                    <div className='bg-white p-3.5 h-16 w-16 rounded-full mx-auto'>
                        <img className='rotate-180' src={TypeScriptIcon}/>
                    </div>
                    <p className='rotate-180 text-white text-lg text-center pb-2 font-bold'>TypeScript</p>
                </div>
            </div>

            <div className='w-full h-96 opacity-100 absolute bottom-[55%] overflow-x-hidden rotate=180 justify-center items-center'>
                <div style={
                    {
                        left: 0, bottom: '50%', position: 'absolute', offsetPath: `path("M${window.innerWidth} 205C${window.innerWidth - 155.5} 126 ${window.innerWidth * 0.76} 1 ${window.innerWidth / 2} 1C367.455 1 155.5 140 1 205")`, animation: 'moveHalfEllipse 50s linear infinite', animationDelay: '0',
                    }
                }>
                    <div className='bg-white p-3.5 h-16 w-16 rounded-full mx-auto'>
                        <img className='rotate-180' src={GitIcon}/>
                    </div>
                    <p className='rotate-180 text-white text-lg text-center pb-2 font-bold'>Git</p>
                </div>
            </div>

        </div>
    )
}
