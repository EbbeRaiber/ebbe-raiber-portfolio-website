import projectsData from '../../data/projects.json';

const Projects = () => {
  return (
    <section>
      {projectsData.map(project => (
        <div className="mb-4">
        <div
          key={project.id}
          className="bg-secondarybackground/70 border-mainbackground/50 border-5 rounded-md p-4 transition duration-300"
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-bold mb-2">{project.name}</h3>
          <p className="mb-4">{project.synopsis}</p>
          <a
            href={project.link}
            className="hover:underline"
          >
            View Project
          </a>
        </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
