export default function Resume() {
    return (
        <>
            <div className="dark:bg-gray-900">
                <section className="mx-auto container w-full py py-48">
                    <div className="flex flex-col justify-center items-center">
                        <div className="md:text-5xl text-4xl font-black text-center text-gray-500 dark:text-white leading-snug lg:w-3/4">
                            <h2>Download My Resume</h2>
                        </div>
                        <div className="flex mt-16">
                            <a href="./Assets/Resume-Josh-Nolan.pdf" rel="noreferrer" target="_blank" className=" focus:ring-indigo-900 hover:opacity-90  w-48 h-16 font-bold text-center text-xl text-white bg-gradient-to-l from-indigo-500 to-indigo-900 rounded-xl">Click Here!</a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
