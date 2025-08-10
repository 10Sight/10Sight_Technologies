import illustration1 from '../assets/Illustrator/W01.jpg';
import illustration2 from '../assets/Illustrator/W02.jpg';
import illustration3 from '../assets/Illustrator/W03.jpg';
// import line from '../assets/line.png'


const WorkingProcessFlex = () => {

    return (
        <div className="container bg-white relative px-4 mx-auto py-10 overflow-x-hidden">
            {/* Section Title */}
            <div className="text-center flex flex-col items-center justify-center mb-12 mx-auto max-w-[28rem] sora-700">
                <h2 className="text-3xl text-primary font-bold">Our working process on how to grow your business</h2>
            </div>

            {/* Process Steps */}
            <div className="container flex flex-col mx-auto w-fit lg:justify-around lg:gap-20 lg:flex-row">
                {/* Step 1 */}
                <div className="px-4 mb-8 " >
                    <div className="flex flex-col items-center ">

                        <div className="w-[15rem] h-[15rem] flex-shrink-0">

                            <img src={illustration1} alt="Planning and Requirement" className="object-contain w-full h-full" />
                        </div>
                        <div className='flex items-center text-center max-w-[20rem] justify-center flex-col'>
                            <span className="text-xl font-bold bg-black text-white p-[9.5px] size-12 rounded-full">01</span>
                            <h2 className="mt-2 text-xl font-semibold">Planning and Requirement</h2>
                            <p className="mt-2 text-gray-700 sora-400 text-[0.95rem]">Planning and Requirement phase involves defining project goals, gathering client needs, and documenting specifications to ensure clear development guidelines.</p>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="px-4 mb-8 " >
                    <div className="flex flex-col items-center ">
                        <div className="w-[15rem] h-[15rem] flex-shrink-0">

                            <img src={illustration2} alt="Design and Development" className="object-contain w-full h-full" />
                        </div>
                        <div className='flex items-center text-center justify-center flex-col max-w-[20rem]'>
                            <span className="text-xl font-bold bg-black text-white p-[9.5px] size-12 rounded-full">02</span>

                            <h2 className="mt-2 text-xl font-semibold">Design and Development</h2>
                            <p className="mt-2  text-gray-700 sora-400 text-[0.95rem]">Design and Development: Crafting user-centric websites and applications with seamless functionality, innovative designs, and cutting-edge technology to elevate user experiences.</p>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="px-4 mb-8 " >
                    <div className="flex flex-col items-center ">

                        <div className="w-[15rem] h-[15rem] flex-shrink-0">
                            <img src={illustration3} alt="Deployment and Maintenance" className="object-contain w-full h-full" />
                        </div>
                        <div className='flex items-center text-center max-w-[20rem] justify-center flex-col'>
                            <span className="text-xl font-bold bg-black text-white p-[9.5px] size-12 rounded-full">03</span>

                            <h2 className="mt-2 text-xl font-semibold">Deployment and Maintenance</h2>
                            <p className="mt-2 text-gray-700 sora-400 text-[0.95rem]">Deployment and Maintenance involve launching applications, monitoring performance, updating software, and ensuring continuous functionality and security over time.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Line Image */}
            {/* <div className="flex absolute w-full items-center top-[22rem] z-[-1] justify-center mt-8">
                <img src={line} alt="Line" className="hidden w-fit lg:block" />
            </div> */}
        </div>
    )
}

export default WorkingProcessFlex


