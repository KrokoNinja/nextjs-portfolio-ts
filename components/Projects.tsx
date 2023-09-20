import { projectsData } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
	return (
		<section id="projects" className="flex flex-col items-center">
			<h2 className="text-2xl font-bold mb-6">My Projects</h2>
			{projectsData.map((project) => (
				<ProjectCard
					key={project.title}
					title={project.title}
					description={project.description}
					image={project.imageUrl}
					tags={project.tags}
				/>
			))}
		</section>
	);
}
