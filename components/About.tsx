"use client";

import { motion } from "framer-motion";

export default function About() {
	return (
		<motion.section
			id="about"
			className="flex flex-col items-center justify-center p-4 max-w-3xl"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.15 }}
		>
			<h2 className="text-2xl font-bold mb-6">About me</h2>
			<p className="text-center">
				I'm a <span className="font-bold">self-taught Frontend Developer</span> deeply passionate
				about crafting captivating web experiences. Knowing the{" "}
				<span className="underline">fundamentals of HTML, CSS, and JavaScript</span>, I like
				translating imaginative designs into seamless, user-friendly websites. Currently, I'm{" "}
				<span className="underline">diving into React, Next.JS, TypeScript and Tailwind CSS</span>,
				embracing the challenge of building dynamic web applications. I thrive on collaboration,
				constantly seeking opportunities to enhance my skills and stay updated with industry trends.
				Beyond coding, I play Darts and love to watch football in the 'Westfalenstadion' of Borussia
				Dortmund together with my friends.
			</p>
		</motion.section>
	);
}
