import ReactIcon from '../assets/images/tech-icons/React.png'
import JavaScriptIcon from '../assets/images/tech-icons/JavaScript.png'
import TypeScriptIcon from '../assets/images/tech-icons/TypeScript.png'
import GitIcon from '../assets/images/tech-icons/Git.png'
import PythonIcon from '../assets/images/tech-icons/Python.png'
import FirebaseIcon from '../assets/images/tech-icons/Firebase.png'
import NodeIcon from '../assets/images/tech-icons/Node.png'
import ExpoIcon from '../assets/images/tech-icons/Expo.svg'
import FigmaIcon from '../assets/images/tech-icons/Figma.png'
import { useEffect, useState } from 'react'

export default function OrbitingSkill() {
    const initialWindowSize = window.innerWidth
    const [scaleRatio, setScalingRatio] = useState<number>(1)

    useEffect(() => {
        const handleResize = () => {
            setScalingRatio(window.innerWidth / initialWindowSize)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [initialWindowSize])

    const lowerSkills = [
        { icon: PythonIcon, label: 'Python', delay: '-10s' },
        { icon: FirebaseIcon, label: 'Firebase', delay: '-20s' },
        { icon: ExpoIcon, label: 'Expo', delay: '-30s' },
        { icon: NodeIcon, label: 'Node.js', delay: '-40s' },
        { icon: FigmaIcon, label: 'Figma', delay: '-0s' }
    ]

    const upperSkills = [
        { icon: ReactIcon, label: 'React / React Native', delay: '-12.5s' },
        { icon: JavaScriptIcon, label: 'JavaScript', delay: '-25s' },
        { icon: TypeScriptIcon, label: 'TypeScript', delay: '-37.5s' },
        { icon: GitIcon, label: 'Git', delay: '0s' }
    ]

    const orbitPath = `M${1539 * scaleRatio} ${205 * scaleRatio}C${1539 * scaleRatio} ${92.3339 * scaleRatio} ${1172.55 * scaleRatio} ${1 * scaleRatio} ${720.5 * scaleRatio} ${1 * scaleRatio}C${268.455 * scaleRatio} ${1 * scaleRatio} ${-98 * scaleRatio} ${92.3339 * scaleRatio} ${-98 * scaleRatio} ${205 * scaleRatio}`
    const orbitPathReversed = `M${-98 * scaleRatio} ${205 * scaleRatio}C${-98 * scaleRatio} ${92.3339 * scaleRatio} ${268.455 * scaleRatio} ${1 * scaleRatio} ${720.5 * scaleRatio} ${1 * scaleRatio}C${1172.55 * scaleRatio} ${1 * scaleRatio} ${1539 * scaleRatio} ${92.3339 * scaleRatio} ${1539 * scaleRatio} ${205 * scaleRatio}`;


    return (
        <div className='w-full min-h-screen absolute overflow-hidden'>

            <svg
                className='absolute top-[45%] md:top-[25%] lg:top-[20%] w-full'
                viewBox={`0 -100 ${1440 * scaleRatio} ${window.innerWidth < 500 ? 800 : 400}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path id="orbitPathLower" d={orbitPath} stroke="white" strokeWidth="1" />

                {lowerSkills.map((skill, index) => (
                    <g key={index}>
                        {/* Circle and Icon */}
                        <g>
                            <animateMotion dur="50s" values="1.0, 0.5, 0.0" repeatCount="indefinite" rotate="auto" begin={skill.delay}>
                                <mpath href="#orbitPathLower" />
                            </animateMotion>

                            <circle r={window.innerWidth < 500 ? 48 : 24} fill="white" />
                            <image
                                href={skill.icon}
                                width={window.innerWidth < 500 ? 64 : 24}
                                height={window.innerWidth < 500 ? 64 : 24}
                                x={window.innerWidth < 500 ? -32 : -12}
                                y={window.innerWidth < 500 ? -32 : -12}
                                className='rotate-180'
                            />
                        </g>

                        <g>
                            <animateMotion dur="50s" repeatCount="indefinite" rotate="auto" begin={skill.delay}>
                                <mpath href="#orbitPathLower" />
                            </animateMotion>

                            <text
                                textAnchor="middle"
                                fontSize={window.innerWidth < 500 ? 28 : 12}
                                fontFamily="sans-serif"
                                fill="white"
                                y={window.innerWidth < 500 ? -80 : -50}
                                className='rotate-180'
                            >
                                {skill.label}
                            </text>
                        </g>
                    </g>
                ))}

            </svg>

            <svg className='absolute top-[55%] md:top-[35%] lg:top-[30%] w-full' viewBox={`0 -50 ${1440 * scaleRatio} 400`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={orbitPath} stroke="white" strokeWidth="1.5" />
            </svg>
            <svg className='absolute top-[57%] md:top-[37%] lg:top-[32%] w-full' viewBox={`0 -50 ${1440 * scaleRatio} 400`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={orbitPath} stroke="white" strokeWidth="1.5" />
            </svg>
            <svg className='absolute top-[61%] md:top-[41%] lg:top-[36%] w-full' viewBox={`0 -50 ${1440 * scaleRatio} 400`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={orbitPath} stroke="white" strokeWidth="1.5" />
            </svg>

            <svg
                className='absolute top-[70%] md:top-[50%] lg:top-[45%] w-full'
                viewBox={`0 -100 ${1440 * scaleRatio} ${window.innerWidth < 500 ? 800 : 400}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path id="orbitPathUpper" d={orbitPathReversed} stroke="white" strokeWidth="1.5" />

                {upperSkills.map((skill, index) => (
                    <g key={index}>
                        <g>
                            <animateMotion dur="50s" repeatCount="indefinite" rotate="auto" begin={skill.delay}>
                                <mpath href="#orbitPathUpper" />
                            </animateMotion>

                            <circle r={window.innerWidth < 500 ? 48 : 24} fill="white" />
                            <image
                                href={skill.icon}
                                width={window.innerWidth < 500 ? 64 : 24}
                                height={window.innerWidth < 500 ? 64 : 24}
                                x={window.innerWidth < 500 ? -32 : -12}
                                y={window.innerWidth < 500 ? -32 : -12}
                            />
                        </g>

                        <g>
                            <animateMotion dur="50s" repeatCount="indefinite" rotate="auto" begin={skill.delay}>
                                <mpath href="#orbitPathUpper" />
                            </animateMotion>

                            <text
                                textAnchor="middle"
                                fontSize={window.innerWidth < 500 ? 28 : 12}
                                fontFamily="sans-serif"
                                fill="white"
                                y={window.innerWidth < 500 ? -80 : -50}

                            >
                                {skill.label}
                            </text>
                        </g>
                    </g>
                ))}
            </svg>

        </div>
    )
}
