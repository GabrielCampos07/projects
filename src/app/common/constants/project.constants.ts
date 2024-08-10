import type { Company } from "../interfaces/company.interface";
import type { Project } from "../interfaces/project.interface";

export const COMPANIES: Company[] = [
	{
		id: 1,
		name: "Cebrace",
		location: "Jacareí, Brazil",
		imageUrl: "logos/cebrace.png",
	},
	{
		id: 2,
		name: "Poliedro",
		location: "São José dos Campos, Brazil",
		imageUrl: "logos/poliedro.png",
	},
	{
		id: 3,
		name: "Multilaser",
		location: "São Paulo, Brazil",
		imageUrl: "logos/multilaser.png",
	},
	{
		id: 4,
		name: "Viasat",
		location: "Carlsbad, USA",
		imageUrl: "logos/viasat.png",
	},
	{
		id: 5,
		name: "Amor Saúde",
		location: "São Paulo, Brazil",
		imageUrl: "logos/amor-saude.png",
	},
	{
		id: 6,
		name: "Xenial",
		location: "Charlotte, USA",
		imageUrl: "logos/xenial.png",
	},
	{
		id: 7,
		name: "ShuffleUp",
		location: "Talin, Estonia",
		imageUrl: "logos/shuffle-up.png",
	},
];

export const PROJECTS: Project[] = [
	{
		id: 1,
		title: "SISDOC",
		description:
			"SISDOC streamlines document management by automating storage, retrieval, and sharing. It improves efficiency with features like version control, approval workflows, and integration with other systems.",
		companyId: 1,
	},
	{
		id: 2,
		title: "Descontos",
		description:
			"Descontos is a competitive pricing strategy that helps Cebrace attract customers by offering discounts based on competitor pricing, enhancing customer trust and increasing sales.",
		companyId: 1,
	},
	{
		id: 3,
		title: "Ecommerce",
		description:
			"Cebrace's Ecommerce platform provides a seamless shopping experience for glass products, featuring a detailed product catalog, secure checkout, and personalized customer support.",
		companyId: 1,
	},
	{
		id: 4,
		title: "SRO",
		description:
			"SRO manages customer complaints effectively by providing a structured process for registration, investigation, and resolution, enhancing customer satisfaction and service quality.",
		companyId: 1,
	},
	{
		id: 5,
		title: "SISCOM",
		description:
			"SISCOM supports business operations with features for sales management, inventory control, and supplier management, aiding informed decision-making and resource efficiency.",
		companyId: 1,
	},
	{
		id: 6,
		title: "Tarefas e Recados",
		description:
			"This platform facilitates communication between students and teachers, allowing task management, feedback, and parental involvement, enhancing educational organization and efficiency.",
		companyId: 2,
	},
	{
		id: 7,
		title: "HD Virtual",
		description:
			"HD Virtual offers online educational resources for students, including digital textbooks and assessments, promoting remote access, personalized learning, and cost savings.",
		companyId: 2,
	},
	{
		id: 8,
		title: "Banco de Questões",
		description:
			"A question bank providing diverse practice materials for students and teachers, offering customization, automatic feedback, and performance tracking to improve learning outcomes.",
		companyId: 2,
	},
	{
		id: 9,
		title: "Itinerários Informativos",
		description:
			"Guides for parents, teachers, and students that offer comprehensive information about academic success, enhancing communication, planning, and student engagement in the educational process.",
		companyId: 2,
	},
	{
		id: 10,
		title: "Multi+",
		description:
			"Multilaser's streaming platform delivers diverse content, personalized viewing experiences, and multi-platform access, catering to varied entertainment preferences and increasing user engagement.",
		companyId: 3,
	},
	{
		id: 11,
		title: "Viasat On Tech",
		description:
			"An app for Viasat technicians that optimizes service visits with features like efficient scheduling, real-time communication, and access to customer information, enhancing service quality.",
		companyId: 4,
	},
	{
		id: 12,
		title: "Amor Saúde",
		description:
			"A platform designed for scheduling and conducting doctor appointments. Users can easily book consultations and communicate directly with their doctors. The platform also allows users to check their appointment dates and manage their medical schedules efficiently.",
		companyId: 5,
	},
	{
		id: 13,
		title: "POS",
		description:
			"A system for the restaurant industry. This system enhances kitchen efficiency, streamlines operations, and improves customer service. The POS solution is intuitive, scalable, and is used by well-known brands like McDonald's and Dutch Bros.",
		companyId: 6,
	},
	{
		id: 14,
		title: "Instacasino",
		description:
			"An online betting site where users can play casino games like slots, poker, and roulette, and place bets securely. It ensures a user-friendly experience with advanced security measures and compliance with regulations.",
		companyId: 7,
	},
];
