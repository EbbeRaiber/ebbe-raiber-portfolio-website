const contact = () => {
  return (
    <div className="flex bg-secondarybackground/70 border-mainbackground/50 border-5 rounded-md mt-4 mb-4">
      <section id="contact">
        <h2 className="justify-center text-2xl mx-4 pt-4">
          Contact
        </h2>
        <div className="group relative grid sm:grid-cols-8">
          <div className="sm:col-span-6 p-5">
              <div>Email: </div>
              <a href="mailto:ebberaiber@outlook.com" className="opacity-50 transition-opacity ease-in-out hover:opacity-100">ebberaiber@outlook.com</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default contact
