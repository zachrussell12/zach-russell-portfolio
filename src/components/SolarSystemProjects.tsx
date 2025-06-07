import { useState } from 'react'

//Images
import OrbitOne from '../assets/images/solar-system-graphics/OrbitOne.svg'
import OrbitTwo from '../assets/images/solar-system-graphics/OrbitTwo.svg'
import OrbitThree from '../assets/images/solar-system-graphics/OrbitThree.svg'
import OrbitFour from '../assets/images/solar-system-graphics/OrbitFour.svg'
import OrbitFive from '../assets/images/solar-system-graphics/OrbitFive.svg'
import CNNModel from '../assets/images/solar-system-graphics/Model-Skinny.png'
import CoasterConnectionsImage from '../assets/images/solar-system-graphics/CoastConnections.jpg'
import SudokuModel from '../assets/images/solar-system-graphics/SudokuModel.webp'
import RoundTablerImage from '../assets/images/solar-system-graphics/RoundTabler.png'
import MaddieKeyesPhoto from '../assets/images/solar-system-graphics/MaddieKeyesPhoto.png'

export default function SolarSystemProjects() {

    const [projectSelection, setProjectSelection] = useState(0);

    const CoasterConnections = () => {
        return (
            <div className='w-full relative flex flex-col justify-center items-start'>
                <h4 className='text-orange-foreground text-4xl text-left pb-1 font-medium'>Coaster Connections</h4>
                <p className='text-sm text-gray-400 min-w-fit pr-0 pb-4'>May 2025</p>

                <div className='flex flex-row w-full justify-start items-center gap-x-4 pb-8'>
                    <div className='w-fit h-fit py-0.5 px-4 bg-[#02252D] rounded-full'>
                        <p className='text-[#00D9FF] text-sm font-normal'>React</p>
                    </div>
                    <div className='w-fit h-fit py-0.5 px-4 bg-[#2D1402] rounded-full'>
                        <p className='text-[#DFDF01] text-sm font-normal'>Firebase</p>
                    </div>
                    <div className='w-fit h-fit py-0.5 px-4 bg-[#021A2D] rounded-full'>
                        <p className='text-[#43B7FF] text-sm font-normal'>Tailwind</p>
                    </div>
                    <div className='w-fit h-fit py-0.5 px-4 bg-[#02132D] rounded-full'>
                        <p className='text-[#9CC7FF] text-sm font-normal'>Typescript</p>
                    </div>
                </div>

                <p className='text-gray-50 font-light text-left pb-4'>
                    This project was made with the goal of replicating the popular web-based puzzle game, <a className='underline text-blue-highlight' href="https://www.nytimes.com/games/connections" target="_blank">NYT Connections.</a>
                </p>
                <p className='text-gray-50 font-light text-left pb-4'>
                    My goal was to replicate it as close as possible but put my own twist on it. As a gift for someone who loves rollercoasters, I decided to make it completed rollercoaster themed. Making users find 4 groups of 4 coasters that all shared a specific similarity.
                </p>
                <p className='text-gray-50 font-light text-left pb-8'>
                    The puzzle game turned out perfomant, responsive, and almost identical to the original, besides my own styling changes.
                </p>

                <img className='rounded-lg w-full mb-8' loading='eager' src={CoasterConnectionsImage}/>

                <div className='flex flex-row w-full justify-start items-center gap-x-4'>
                    <button onClick={() => window.open('https://github.com/zachrussell12/coaster-connections')} className='bg-green-background text-green-foreground p-2 rounded-lg green cursor-pointer font-bold green'>View Repo</button>
                    <button onClick={() => window.open('https://coasterconnections.netlify.app')} className='bg-blue-background text-blue-foreground p-2 rounded-lg blue cursor-pointer font-bold blue'>Visit Site</button>
                </div>
            </div>
        )
    }

    const MLModel = () => {
        return (
            <div className='w-full relative flex flex-col justify-center items-start'>
                <h4 className='text-blue-foreground font-medium text-3xl xl:text-4xl text-left pb-1'>Designing and Creating a Hybrid CNN-LSTM Machine Learning Model</h4>
                <p className='text-sm text-gray-400 min-w-fit pr-0 pb-4'>Jan 2024 - May 2024</p>

                <div className='flex flex-row w-full justify-start items-center gap-x-4 pb-8'>
                    <div className='w-fit h-fit py-0.5 px-2 bg-[#2D0602] rounded-full'>
                        <p className='text-[#FF5038] text-sm font-normal'>Machine Learning</p>
                    </div>
                    <div className='w-fit h-fit py-0.5 px-2 bg-[#2C2D02] rounded-full'>
                        <p className='text-[#F8FF38] text-sm font-light'>Python</p>
                    </div>
                </div>
                <p className='text-gray-50 font-normal text-left pb-4'>
                    This solo final term project for Machine Learning at UCF challenged my ability to created an ML model for a specific problem.
                </p>
                <p className='text-gray-50 font-normal text-left pb-4'>
                    I tackled the problem of forecasting grocery prices in brick-and-mortar grocery stores.  To achieve the goal, I created a hybrid CNN-LSTM to perform time series forecasting of brick-and-mortar grocery store sales.
                </p>
                <p className='text-gray-50 font-normal text-left pb-8'>
                    The model was able to achieve a high accuracy during training, and outperformed other models trying to achieve the same goal on the testing data.
                </p>

                <img className='rounded-lg w-full mb-8' loading='eager' src={CNNModel}/>

                <button onClick={() => window.open('https://github.com/zachrussell12/Hybrid-CNN-LSTM-Time-Series-Forecasting')} className='bg-green-background text-green-foreground p-2 rounded-lg green cursor-pointer'>View Repo</button>
            </div>
        )
    }

    const SudokuSolver = () => {
        return (
            <div className='w-full relative flex flex-col justify-center items-start'>
                <h4 className='text-green-foreground font-medium text-3xl xl:text-4xl text-left pb-1'>Sudoku Puzzle Solver</h4>
                <p className='text-sm text-gray-400 min-w-fit pr-0 pb-4'>Sep 2024</p>

                <div className='flex flex-row w-full justify-start items-center gap-x-4 pb-8'>
                    <div className='w-fit h-fit py-0.5 px-2 bg-[#2D0602] rounded-full'>
                        <p className='text-[#FF5038] text-sm font-normal'>Machine Learning</p>
                    </div>
                    <div className='w-fit h-fit py-0.5 px-2 bg-[#2D022C] rounded-full'>
                        <p className='text-[#FD64CF] text-sm font-normal'>Artificial Intelligence</p>
                    </div>
                    <div className='w-fit h-fit py-0.5 px-2 bg-[#2C2D02] rounded-full'>
                        <p className='text-[#F8FF38] text-sm font-light'>Python</p>
                    </div>
                </div>
                <p className='text-gray-50 font-normal text-left pb-4'>
                    Sudoku is a fun puzzle game that's been around since 1979. I wanted to see if I could create a way to use image recognition and AI to solve sudoku puzzles.
                </p>
                <p className='text-gray-50 font-normal text-left pb-4'>
                    Using OpenCV and an ensemble classifier of CNNs (of my own design), I was able to accurately read in puzzles from both images and a live webcam. From there, it was as easy as using a simple backtracking algorithm to find the puzzle solution
                </p>
                <p className='text-gray-50 font-normal text-left pb-8'>
                    The solver was able to complete extreme difficult puzzles in just under a few minutes, while easy to hard level puzzles took less than a minute. Truly a fun project to get to know OpenCV.
                </p>

                <img className='rounded-lg w-full mb-8' loading='eager' src={SudokuModel}/>

                <button onClick={() => window.open('https://github.com/zachrussell12/Sudoku-Solver')} className='bg-green-background text-green-foreground p-2 rounded-lg cursor-pointer green'>View Repo</button>
            </div>
        )
    }

    const RoundTabler = () => {
        return (
            <div className='w-full relative flex flex-col justify-center items-start'>
                <h4 className='text-pink-foreground font-medium text-3xl xl:text-4xl text-left pb-1'>RoundTabler Security Analysis Tool</h4>
                <p className='text-sm text-gray-400 min-w-fit pr-0 pb-4'>Sep 2022 - Oct 2022</p>

                <div className='flex flex-row w-full justify-start items-center gap-x-4 pb-8'>
                    <div className='w-fit h-fit py-0.5 px-2 bg-[#1E024D] rounded-full'>
                        <p className='text-[#E8CAFF] text-sm font-normal'>Cybersecurity</p>
                    </div>
                    <div className='w-fit h-fit py-0.5 px-2 bg-[#2D1602] rounded-full'>
                        <p className='text-[#FFA781] text-sm font-normal'>Java</p>
                    </div>
                    <div className='w-fit h-fit py-0.5 px-2 bg-[#04015D] rounded-full'>
                        <p className='text-[#E5E0FF] text-sm font-light'>Docker</p>
                    </div>
                </div>
                <p className='text-gray-50 font-normal text-left pb-4'>
                    As a final project for Secure Software Systems at UCF, I worked as apart of a team to create a security analysis tool.
                </p>
                <p className='text-gray-50 font-normal text-left pb-4'>
                    This tool worked by scanning relational databases for unencrypted credit card and ACH information. It could be deployed via docker on the users network and hooked directly into their database.
                </p>
                <p className='text-gray-50 font-normal text-left pb-8'>
                    I was responsible for parsing and validating command line parameters, docker orchestration, JUnit testing, and program error handling.
                </p>

                <img className='rounded-lg w-full mb-8' loading='eager' src={RoundTablerImage}/>

                <button onClick={() => window.open('https://github.com/ScottPiersall/RoundTabler')} className='bg-green-background text-green-foreground p-2 rounded-lg cursor-pointer green'>View Repo</button>
            </div>
        )
    }

    const MaddieKeyesWebsite = () => {
        return (
            <div className='w-full relative flex flex-col justify-center items-start'>
                <h4 className='text-purple-foreground font-medium text-3xl text-left pb-1 xl:text-4xl'>Maddie Keyes Photography Website</h4>
                <p className='text-sm text-gray-400 min-w-fit pr-0 pb-4'>Sep 2022 - Oct 2022</p>

                <div className='flex flex-row w-full justify-start items-center gap-x-4 pb-8'>
                    <div className='w-fit h-fit py-0.5 px-4 bg-[#02252D] rounded-full'>
                        <p className='text-[#00D9FF] text-sm font-normal'>React</p>
                    </div>
                    <div className='w-fit h-fit py-0.5 px-4 bg-[#2D1402] rounded-full'>
                        <p className='text-[#DFDF01] text-sm font-normal'>Firebase</p>
                    </div>
                </div>
                <p className='text-gray-50 font-normal text-left pb-4'>
                    An elegant and simple portfolio site for a client needing to showcase their photography abilities.
                </p>
                <p className='text-gray-50 font-normal text-left pb-4'>
                    The website was build with a simple vanilla React and Firebase stack. Firestore was utilized to store the client's photos.
                </p>
                <p className='text-gray-50 font-normal text-left pb-8'>
                    Using Firestore gave the client the ability to upload and delete photos on their own, while having them live update on the site without further intervention needed from me.
                </p>

                <img className='rounded-lg w-full mb-8' loading='eager' src={MaddieKeyesPhoto}/>

                <button onClick={() => window.open('https://maddiekeyes.netlify.app/')} className='bg-blue-background text-blue-foreground p-2 rounded-lg blue cursor-pointer'>View Site</button>
            </div>
        )
    }

    const showProject = (id: number) => {
        const container = document.getElementById('project-container');

        if(container){
            container.style.opacity = '0';
            setTimeout(() => {
                setProjectSelection(id);
                container.style.opacity = '1';
            }, 1250)
            
        }
    }

    return (
        <div className='flex flex-row relative w-full h-3/4 px-4 gap-x-4 xl:max-w-8/12'>
            
            <div id='project-container' className='w-1/2 flex flex-col justify-center items-center px-4 transition-opacity duration-200 max-h-full'>
                {projectSelection == 0 && <CoasterConnections/>}
                {projectSelection == 1 && <MLModel/>}
                {projectSelection == 2 && <RoundTabler/>}
                {projectSelection == 3 && <SudokuSolver/>}
                {projectSelection == 4 && <MaddieKeyesWebsite/>}
            </div>
            
            <div className='w-1/2 relative flex flex-col justify-center items-center translate-x-0 xl:translate-x-8 min-h-full'>
                <img className='absolute' src={OrbitOne} />
                <img className='absolute' src={OrbitTwo} />
                <img className='absolute' src={OrbitThree} />
                <img className='absolute' src={OrbitFour} />
                <img className='absolute' src={OrbitFive} />
                <div className='absolute w-72 h-72 rounded-full z-0 radial-glow' />
                <div className='w-16 h-16 relative bg-amber-300 rounded-full z-5' />
                <button onClick={() => {showProject(0);}} className={`w-8 h-8 absolute left-1/2 top-1/2 bg-orange-foreground rounded-full transition-all hover:transform-[scale(1.25)] duration-500 cursor-pointer border-white ${projectSelection == 0 ? 'transform-[scale(1.25)]' : 'transform-none'} ${projectSelection == 0 ? 'border-4' : 'border-none'}`} style={{
                    offsetPath: 'path("M0-59c26.6,0,50.6,6.6,68,17.4C85.4-30.9,96-16.2,96,0s-10.6,30.9-28,41.6C50.6,52.4,26.6,59,0,59s-50.6-6.6-68-17.4C-85.4,30.9-96,16.2-96,0s10.6-30.9,28-41.6C-50.6-52.4-26.6-59,0-59Z")',
                    animation: 'movePlanet 20s linear infinite',
                    offsetAnchor: 'center',
                }} />

                <button onClick={() => {showProject(1);}} className={`w-8 h-8 absolute left-1/2 top-1/2 bg-blue-foreground rounded-full transition-all hover:transform-[scale(1.25)] duration-500 cursor-pointer border-white ${projectSelection == 1 ? 'transform-[scale(1.25)]' : 'transform-none'} ${projectSelection == 1 ? 'border-4' : 'border-none'}`} style={{
                    offsetPath: 'path("M-25.3-101.7c45.6-11.9,89.8-11.3,124.4-.7,34.7,10.6,59.7,31.2,67,59.2,7.3,28-4.4,58.2-29.3,84.5-25,26.3-63.2,48.5-108.8,60.4-45.6,11.9-89.8,11.3-124.4.7-34.7-10.6-59.7-31.2-67-59.2-7.3-28,4.4-58.2,29.3-84.5,25-26.3,63.2-48.5,108.8-60.4Z")',
                    animation: 'movePlanet 15s linear infinite',
                    offsetAnchor: 'center',
                    animationDelay: '-5s',
                }} />

                <button onClick={() => {showProject(2);}} className={`w-8 h-8 absolute left-1/2 top-1/2 bg-pink-foreground rounded-full transition-all hover:transform-[scale(1.25)] duration-500 cursor-pointer border-white ${projectSelection == 2 ? 'transform-[scale(1.25)]' : 'transform-none'} ${projectSelection == 2 ? 'border-4' : 'border-none'}`} style={{
                    offsetPath: 'path("M66.3-143.4c64.8,29.6,116.1,72.4,146.7,117.7,30.6,45.3,40.4,93.1,22.4,132.6-18,39.5-60.5,63.4-114.8,70-54.3,6.6-120.3-4-185.1-33.6-64.8-29.6-116.1-72.4-146.7-117.7-30.6-45.3-40.4-93.1-22.4-132.6,18-39.5,60.5-63.4,114.8-70,54.3-6.6,120.3,4,185.1,33.6Z")',
                    animation: 'movePlanet 35s linear infinite',
                    offsetAnchor: 'center',
                    animationDelay: '-8s'
                }} />

                <button onClick={() => {showProject(3);}} className={`w-8 h-8 absolute left-1/2 top-1/2 bg-green-foreground rounded-full transition-all hover:transform-[scale(1.25)] duration-500 cursor-pointer border-white ${projectSelection == 3 ? 'transform-[scale(1.25)]' : 'transform-none'} ${projectSelection == 3 ? 'border-4' : 'border-none'}`} style={{
                    offsetPath: 'path("M-86.8-169.9c76.8-39.5,156.1-56.2,222.2-51.3,66.1,4.9,119,31.4,143.1,78.2,24.1,46.8,15,105.3-19.5,161.9-34.4,56.7-94.1,111.5-170.9,151-76.8,39.5-156.1,56.2-222.2,51.3-66.1-4.9-119-31.4-143.1-78.2-24.1-46.8-15-105.3,19.5-161.9,34.4-56.7,94.1-111.5,170.9-151Z")',
                    animation: 'movePlanet 25s linear infinite',
                    offsetAnchor: 'center',
                    animationDelay: '-2s'
                }} />

                <button onClick={() => {showProject(4);}} className={`w-8 h-8 absolute left-1/2 top-1/2 bg-purple-foreground rounded-full transition-all hover:transform-[scale(1.25)] duration-500 cursor-pointer border-white ${projectSelection == 4 ? 'transform-[scale(1.25)]' : 'transform-none'} ${projectSelection == 4 ? 'border-4' : 'border-none'}`} style={{
                    offsetPath: 'path("M207.8-60.6c41.3,137.6-17.9,276.7-132,310.9-114.1,34.2-240-49.4-281.3-187-41.3-137.6,17.9-276.7,132-310.9,114.1-34.2,240,49.4,281.3,187Z")',
                    animation: 'movePlanet 30s linear infinite',
                    offsetAnchor: 'center',
                    animationDelay: '-10s'
                }} />

            </div>

        </div>
    )
}
