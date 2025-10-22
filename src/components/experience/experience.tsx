
const experience = () => {
  return (
      <div className="flex bg-secondarybackground/70 border-mainbackground/50 border-5 rounded-md mt-4 mb-4">
        <section id="experience">
            <h2 className="justify-center text-2xl mx-4 pt-4">
                Experience
            </h2>
            <div className="group relative grid sm:grid-cols-8">
                <header className="sm:col-span-2 justify-center text-sm pt-4 pl-4 text-lightshade/50">
                    2023 - 2025
                </header>
                <div className="sm:col-span-6 px-5">
                    <h3 className="text-xl md:text-xl py-4">Computer Systems Technician – Software Engineering</h3>
                    <p className="text-md md:text-lg pb-4 text-lightshade/80">Through Sheridan College’s Computer Systems Technician, I gained <span className="font-bold text-lightshade/100">strong </span> practical experience in <span className="font-bold text-lightshade/100">Programming, Software Design and Web Development</span>.
                    </p>
                    <p className="text-md md:text-lg pb-4 text-lightshade/80">
                    The program helped me build a solid foundation in <span className="font-bold text-lightshade/100">Object Oriented Programming </span> and <span className="font-bold text-lightshade/100">Project Managment </span> while strengthening my <span className="font-bold text-lightshade/100">Teamwork, Problem-solving, and Communication skills</span>. This combination of technical and professional skills has prepared me to contribute effectively to real-world software and IT projects.</p>
                    <ul className="flex flex-wrap pb-4">
                        <li className="mt-2 mr-2.5 text-lightshade">
                            <div className="px-3 bg-lightaccent/80 rounded-full">JavaScript</div>
                        </li>
                        <li className="mt-2 mr-2.5 text-lightshade">
                            <div className="px-3 bg-lightaccent/80 rounded-full">Java</div>
                        </li>
                        <li className="mt-2 mr-2.5 text-lightshade">
                            <div className="px-3 bg-lightaccent/80 rounded-full">C#</div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
      </div>
  )
}

export default experience
