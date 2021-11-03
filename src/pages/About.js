import { motion } from 'framer-motion'


export default function About() {
    return (
        <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div>
                <div className="2xl:mx-auto 2xl:container 2xl:px-20 px-6 ">
                    <div className="flex md:flex-row flex-col-reverse md:items-stretch items-center justify-center">
                        <div className="md:py-20 xl:w-1/2 sm:w-1/2 lg:mr-20 md:mr-6 flex flex-col md:items-end items-center justify-center xl:mr-28">
                            <div className="flex flex-col items-center justify-center">
                                <p className="md:text-5xl text-3xl font-regular text-center text-blue">About Me</p>
                                <div className="w-20 h-20 bg-currentColor rounded-full flex items-center justify-center" role="img" aria-label="academic-cap">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="rgb(174, 203, 230)">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                                </svg>
                                </div>
                                <p className="sm:w-96 w-full text-semi-bold leading-10 text-center text-gray-600">My name is Josh Nolan and my mission is to create web applications that provide solutions to real world problems.
                                </p>
                                <div className="md:mt-14 mt-12 flex flex-col items-center">
                                    <div className="w-20 h-20 bg-currentColor rounded-full flex items-center justify-center" role="img" aria-label="academic-cap">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="rgb(174, 203, 230)">
                                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                        </svg>
                                    </div>
                                    <p className="text-semi-bold leading-10 mt-6 text-center text-gray-600 sm:w-96 w-full">I am a student of Rice University's Full Stack Web Development Boot Camp.</p>
                                </div>
                                <div className="mt-7 flex flex-col items-center">
                                    <div className="w-20 h-20 bg-currentColor rounded-full flex items-center justify-center" role="img" aria-label="music-note">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="rgb(174, 203, 230)">
                                            <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                                        </svg>
                                    </div>
                                    <p className="text-semi-bold leading-10 mt-6 text-center text-gray-600 sm:w-96 w-full">My background is in visual art and I enjoy playing and collecting music.</p>
                                </div>
                                <div className="mt-7 flex flex-col items-center">
                                    <div className="w-20 h-20 bg-currentColor rounded-full flex items-center justify-center" role="img" aria-label="desktop-computer">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="rgb(174, 203, 230)">
                                            <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="text-semi-bold leading-10 mt-6 text-center text-gray-600 sm:w-96 w-full">My Skills Include:<br></br><br></br>HTML<br></br>CSS<br></br>Javascript<br></br>React<br></br>Node.js<br></br>MongoDB<br></br>MySQL<br></br>GraphQL<br></br>Tailwind<br></br>Bootstrap.</p>
                                </div>
                            </div>



                        </div>
                        <div className="py-96 xl:w-1/2 lg:w-1/3 sm:w-1/2">
                            <img src="https://res.cloudinary.com/cosmic-records/image/upload/v1635896531/cosmic%20records/blk-wht_hrklrl.jpg" alt="image of Josh Nolan" className="h-full rounded-2xl object-cover object-center md:block hidden" />
                            <img src="https://res.cloudinary.com/cosmic-records/image/upload/v1635896531/cosmic%20records/blk-wht_hrklrl.jpg" alt="of Josh Nolan" className="h-auto w-auto md:hidden block" />
                        </div>
                    </div>
                </div>
            </div>

        </motion.div>
    );
}





