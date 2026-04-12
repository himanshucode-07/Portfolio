import { projects } from "../data/project"

export default function ProjectPage() {
  return (
    <div>
      <h1>Projects Page</h1>

      {projects.map((project) => {
        return <h1 key={project.id}>{project.title}</h1>
      })}
    </div>
  )
}