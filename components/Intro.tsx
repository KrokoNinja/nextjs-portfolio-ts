"use client";

import Image from "next/image";
import ProfilePicture from "@/public/cut-out-lennert.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
	return (
		<section className="mb-28 max-w-[50rem] text-center sm:mb-0">
			<div className="flex items-center justify-center">
				<div className="relative">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: "tween", duration: 0.2 }}
					>
						<Image
							src={ProfilePicture}
							alt="Lennert Pfundtner"
							quality={95}
							priority={true}
							className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
						/>
					</motion.div>

					<motion.span
						className="absolute bottom-0 right-0 text-4xl"
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}
					>
						👋
					</motion.span>
				</div>
			</div>

			<motion.p
				className="mb-10 mt-4 px-4 font-medium text-2xl !leading-[1.5] md:text-3xl lg:text-4xl sm:px-0"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<span className="font-bold">Hi, I'm Lennert Pfundtner</span>, a{" "}
				<span className="font-bold">Frontend Developer</span> from Germany{" "}
				<span className="font-bold">studying Computer Science</span> at IU Internationale
				Hochschule. <span className="underline">Currently learning Next.js and Tailwind CSS</span>.
			</motion.p>

			<motion.div
				className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
			>
				<Link
					href="#contact"
					className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
				>
					Contact me here{" "}
					<BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
				</Link>
				<a
					href="/CV.pdf"
					className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10"
					download
				>
					Download CV{" "}
					<HiDownload className="opacity-60 group-hover:translate-y-1 transition cursor-pointer" />
				</a>
				<a
					href="https://www.linkedin.com/in/lennert-pfundtner-655ba9227/"
					target="_blank"
					className="bg-white text-gray-700 hover:text-gray-950 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition border border-black/10"
				>
					<BsLinkedin />
				</a>
				<a
					href="https://github.com/KrokoNinja"
					target="_blank"
					className="bg-white text-gray-700 hover:text-gray-950 p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition border border-black/10"
				>
					<BsGithub />
				</a>
			</motion.div>
		</section>
	);
}
