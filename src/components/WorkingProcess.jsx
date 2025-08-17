import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import PlanningImg from '../assets/Illustrator/Planning.jpg';
import ReqImg from '../assets/Illustrator/Requirenment.jpg';
import DesignImg from '../assets/Illustrator/Design.jpg';
import DeveImg from '../assets/Illustrator/Development.jpg';
import TestImg from '../assets/Illustrator/Testing.jpg';
import DeployImg from '../assets/Illustrator/Deployment.jpg';
import MaintainImg from '../assets/Illustrator/Maintancence.jpg';
// import service1 from '../assets/services/service1.webp'

const steps = [
  { title: 'Planning', description: 'We start by deeply understanding your vision, business goals, and target audience. This strategic foundation ensures every decision aligns with your long-term objectives.', image: PlanningImg },
  { title: 'Requirement', description: "We gather detailed functional and technical requirements through consultations and research. This helps define the project's scope, deliverables, and timelines clearly.", image: ReqImg },
  { title: 'Design', description: 'Our UI/UX experts craft intuitive wireframes and elegant designs that reflect your brand identity and enhance user engagement across all devices.', image: DesignImg },
  { title: 'Development', description: 'Our developers bring the design to life using modern technologies. We follow clean coding practices and build scalable, secure, and high-performance solutions.', image: DeveImg },
  { title: 'Testing', description: 'We perform rigorous manual and automated testing to ensure your product is bug-free, responsive, and performs smoothly across all platforms.', image: TestImg },
  { title: 'Deployment', description: 'Once tested and approved, we deploy your solution to the live environment with minimal downtime and optimal configuration for speed and stability.', image: DeployImg },
  { title: 'Maintenance', description: 'Post-launch, we provide continuous support, updates, and improvements to ensure your solution remains reliable, up-to-date, and ahead of the curve.', image: MaintainImg },
]

const WorkingProcess = () => {
  React.useEffect(() => {
    AOS.init({ duration: 200 })
  }, [])

  return (
    <div className="relative w-full py-24 px-[5vw] bg-white">
      {/* Vertical Dotted Line */}
      <div className="absolute left-1/2 top-0 h-full w-0.5 border-l border-dotted border-gray-400 -translate-x-1/2 z-0 hidden sm:block mm:block" />

      <div className="flex flex-col gap-28 relative z-10">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0
          return (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center lg:items-stretch gap-10 ${isEven ? 'lg:flex-row-reverse' : ''}`}
              data-aos={isEven ? 'fade-left' : 'fade-right'}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-[300px] h-[300px] object-cover rounded-lg shadow-md"
                  loading='lazy'
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left relative">
                {/* Step number in a circle */}
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold mb-4 mx-auto lg:mx-0">
                  {index + 1}
                </div>
                <h3 className="text-3xl font-semibold text-primary mb-3">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WorkingProcess
