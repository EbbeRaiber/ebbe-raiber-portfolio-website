const titlecard = () => {
  return (
    <div className="flex flex-col justify-start bg-secondarybackground/50 border-5 border-mainbackground/50 md:rounded-md rounded-b-md">
      <h1 className="text-4xl md:text-6xl p-3">Ebbe Raiber</h1>
          <h2 className="text-2xl md:text-3xl md:py-3 px-3">Software Developer</h2>
          <div className="flex flex-row md:flex-col gap-2 text-xl md:justify-end py-8">
            <a href="https://www.linkedin.com/in/ebberaiber" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 md:py-1.5 pl-3">LinkedIn</a>
            <a href="https://github.com/EbbeRaiber" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 md:py-1.5 pl-3">GitHub</a>
            <a href="#contact" className="opacity-50 hover:opacity-100 md:py-1.5 pl-3">Contact</a>
          </div>
    </div>
  )
}

export default titlecard
