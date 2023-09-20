"use client";

import Image, { StaticImageData } from "next/image";
import { motion, Variants } from "framer-motion";

interface Props {
	title: string;
	description: string;
	image: StaticImageData;
	tags: readonly string[];
}

export default function ProjectCard({ title, description, image, tags }: Props) {
	const projectVariants: Variants = {
		hidden: {
			scale: 0.5,
		},
		visible: {
			scale: 1,
			transition: {
				type: "spring",
				duration: 0.8,
			},
		},
	};

	return (
		<motion.div
			className="group mb-10"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			<motion.div
				className="flex max-w-xl justify-between relative overflow-hidden bg-gray-100 rounded-lg p-6 group-odd:flex-row-reverse"
				variants={projectVariants}
			>
				<div className="flex flex-col max-w-[50%]">
					<h3 className="font-semibold text-xl mb-2">{title}</h3>
					<p className="mb-2">{description}</p>
					<ul className="flex flex-row flex-wrap gap-2">
						{tags.map((tag) => (
							<li className="bg-gray-950 text-white text-sm rounded-full py-1 px-2">{tag}</li>
						))}
					</ul>
				</div>
				<Image
					src={image}
					alt={title}
					quality={95}
					priority={true}
					className="absolute w-96 rounded-t-xl -right-40 top-5 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition group-odd:-left-40 group-odd:group-hover:translate-x-3 group-odd:group-hover:rotate-2"
				/>
			</motion.div>
		</motion.div>
	);
}
