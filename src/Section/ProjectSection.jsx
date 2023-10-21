import Button from '../Componment/Button'
import {projects} from '../Componment/ProjectData'

function ProjectSection() {
  return (
    <div className="container mx-auto px-7">
    <div className="grid grid-cols-4 gap-4">
      {/* component */}
      {/* This is an example component */}

      {
        projects.map(project => (
            <div className="max-w-lg mx-auto">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
          <a href="#">
            <img
              className="rounded-t-lg"
              src={project.Project_img}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                {project.Project_title}
              </h5>
            </a>
            <p className="font-normal text-gray-700 mb-3">
             {project.Project_description}
            </p>
            <Button>{project.Project_title.slice(0,3)}- Click Here </Button>
          </div>
        </div>
      </div>
        ))}
      
   
    </div>
  </div>
  
  )
}

export default ProjectSection