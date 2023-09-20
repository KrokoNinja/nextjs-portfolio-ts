import { skillsData } from "@/lib/data";

export default function Skills() {
	return (
		<section id="skills" className="flex flex-col items-center justify-center">
			<h2 className="text-2xl font-bold mb-6">Skills</h2>
			<ul className="flex gap-3 max-w-lg flex-wrap">
				{skillsData.map((skill) => (
					<li key={skill} className="flex items-center border border-gray-200 px-3 py-2 rounded-md">
						{skill}
					</li>
				))}
			</ul>
		</section>
	);
}
