import { GitHubIcon, LinkedInIcon, TelegramIcon } from '@/components/icons'

export const RESUME_DATA = {
	name: 'Nathaniel Isewede',
	initials: 'NI',
	location: 'Abuja, Nigeria',
	locationLink: 'https://www.google.com/maps/place/Abuja',
	about:
		'DevOps & Cloud Engineer with a software development background, passionate about automation, scalability, and building reliable infrastructure that empowers development teams.',
	summary: `I specialize in DevOps, Cloud Computing, and Infrastructure Automation, with hands-on expertise in tools like Kubernetes, Terraform, Docker, and CI/CD pipelines. I design and implement cloud-native architectures that are scalable, secure, and resilient with a strong focus on efficiency and reliability.
    I'm driven by a mission to bridge development and operations through automation, helping teams ship faster, safer, and smarter in the cloud.`,
	avatar: '/assets/avatar.jpg',
	personalWebsiteUrl: {
		name: 'Portfolio',
		url: 'https://www.linkedin.com/in/nathaniel-isewede-18a251360'
	},
	contact: {
		link: {
			name: 'Other Links',
			url: 'https://thriving-medovik-44be99.netlify.app'
		},
		email: {
			name: 'Email',
			at: 'nathanielisewede@gmail.com'
		},
		tel: {
			name: 'Phone',
			phoneNumber: '+2348060043487'
		},
		social: [
			{
				name: 'GitHub',
				url: 'https://github.com/NateSewel',
				icon: GitHubIcon
			},
			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/nathaniel-isewede-18a251360',
				icon: LinkedInIcon
			},
			{
				name: 'Telegram',
				url: 'https://t.me/NateSewel',
				icon: TelegramIcon
			}
		]
	},
	education: [
		// {
		// 	school: 'Jawaharlal Nehru Technological University Hyderabad (JNTUH)',
		// 	degree: 'Bachelor of Technology, Mechanical Engineering',
		// 	start: 'Jul, 2015',
		// 	end: 'Jun, 2020',
		// 	description: [
		// 		'Built a strong foundation in core engineering principles including thermodynamics, fluid mechanics, and material science.',
		// 		'Explored interdisciplinary interests that led to a growing passion for automation and cloud infrastructure.',
		// 		'Worked on academic and practical projects involving design, analysis, and simulation of mechanical systems.',
		// 		'Participated in workshops and tech fests, developing early skills in problem-solving and teamwork.',
		// 		'This journey eventually sparked a shift toward DevOps, cloud computing, and open-source collaboration.'
		// 	]
		// },
		{
			school: 'TechCrush Africa - ACTD (USA) & SDC (Canada) Accredited',
			degree: 'Cloud Computing & DevOps Engineering Program',
			start: 'Aug, 2025',
			end: 'Nov, 2025',
			description: ['']
		},
		{
			school: 'ALT School Africa (3MTT)',
			degree: 'Software Development',
			start: 'Jan, 2023',
			end: 'May, 2024',
			description: ['']
		},
		{
			school: 'App Brewery Academy (London)',
			degree: 'Full-Stack Web Development Bootcamp',
			start: 'Jul, 2021',
			end: 'Dec, 2022',
			description: ['']
		}
	],
	work: [
		{
			company: 'Startup Labs',
			link: 'https://www.startuplab.ng',
			badges: ['Onsite'],
			jobs: [
				{
					title: 'DevOps Engineer',
					start: 'Sep, 2025',
					end: 'Present',
					description: [
						'Engineered 6 automated CI/CD pipelines using Azure DevOps and GitOps, cutting deployment time from 45 minutes to 12 minutes (73% reduction) and enabling daily releases versus previous 2x weekly cadence.',
						'Orchestrated 2 Kubernetes clusters (staging + production) hosting 15 containerized applications with 40+ pods, achieving 99.2% uptime across 200+ deployments in 4-month period.',
						'Optimized Docker container builds through multi-stage configurations, achieving 35% reduction in build times and standardizing containerization for 8 microservices.',
						'Achieved 98.3% pipeline success rate across all deployments while collaborating with 6-person development team to resolve infrastructure bottlenecks.'
					]
				}
			]
		},
		{
			company: 'MustardHQ',
			link: 'https://www.mustardhq.org',
			badges: ['Remote'],
			jobs: [
				{
					title: 'Full-Stack Engineer',
					start: 'Dec, 2024',
					end: 'Aug, 2025',
					description: [
						'Led UI redevelopment for 3 client platforms, improving average page load speed from 4.2s to 1.8s (57% faster) and mobile responsiveness scores from 68 to 91 on Google Lighthouse',
						'Delivered 2 full-stack MVPs using React.js, Node.js, and MongoDB within 6-week sprints, serving 500+ users with 99.5% uptime over 6-month period.',
						'Containerized 3 applications with Docker and created initial CI/CD workflows using GitHub Actions, establishing foundation for DevOps transition.',
						'Implemented GitFlow branching strategy and code review processes for 4-person team, reducing merge conflicts by 70% and improving deployment stability.'
					]
				}
			]
		},
		{
			company: 'Lofai Inc.',
			link: 'https://www.lofai.ng',
			badges: ['Remote'],
			jobs: [
				{
					title: 'Frontend Developer',
					start: 'Aug, 2022',
					end: 'Nov, 2024',
					description: [
						'Optimized React application bundle size from 2.8MB to 980KB through code splitting and lazy loading, improving initial load time by 35%.',
						'Integrated 20+ RESTful API endpoints with robust error handling, reducing client-side errors by 40% and improving application stability.',
						'Collaborated in Agile environment with daily standups and sprint planning using Jira, implementing feedback from 50+ usability test sessions.'
					]
				}
			]
		},
		{
			company: 'LemNet Technology.',
			link: 'https://www.lemnet.com.ng',
			badges: ['Remote'],
			jobs: [
				{
					title: 'Full-Stack Developer Intern',
					start: 'Jan, 2022',
					end: 'Jun, 2022',
					description: [
						'Contributed to the development of scalable web applications using the MERN stack.',
						'Assisted senior developers with UI builds and backend integrations, reducing bug rates by 15% through proactive testing.',
						'Gained hands-on experience with version control using Git and collaborative workflows on GitHub.'
					]
				}
			]
		}
	],
	skills: [
		'AWS',
		'EC2',
		'S3',
		'EKS',
		'IAM',
		'Azure',
		'AKS',
		'DevOps',
		'ARM',
		'Kubernetes',
		'Docker',
		'Terraform',
		'Ansible',
		'Linux',
		'Ubuntu',
		'CentOS',
		'CI/CD',
		'Jenkins',
		'GitHub Actions',
		'Azure DevOps',
		'Prometheus',
		'Grafana',
		'ELK Stack',
		'Git',
		'Shell Scripting',
		'Bash',
		'GitLab',
		'Python',
		'YAML',
		'Monitoring',
		'Logging',
		'CloudFormation',
		'Helm',
		'NGINX',
		'Networking',
		'GitHub',
		'GitOps',
		'Jira',
		'Confluence',
		'Agile Methodologies',
		'Collaboration',
		'Problem Solving',
		'Communication',
		'Teamwork',
		'Adaptability',
		'Open Source',
		'Community Engagement',
		'Continuous Learning',
		'Infrastructure as Code',
		'Configuration Management',
		'Secrets Management',
		'Incident Management',
		'Disaster Recovery',
		'Load Balancing',
		'High Availability',
		'Performance Tuning',
		'Security Best Practices',
		'HashiCorp Vault',
		'Agile',
		'DevOps Practices',
		'VS Code'
	],
	projects: [
		{
			title: 'Azure CI/CD to AKS with GitOps',
			techStack: ['AzureDevOps', 'AKS', 'GitOps'],
			description:
				'A complete CI/CD pipeline setup using Azure DevOps to automate the deployment of containerized applications to Azure Kubernetes Service (AKS) clusters, following GitOps principles for streamlined and reliable application delivery.',
			link: {
				label: 'https://github.com/NateSewel/azureci-cd-aks-gitops',
				href: 'https://github.com/NateSewel/azureci-cd-aks-gitops'
			},
			isNew: true
		},
		{
			title: 'Github CI/CD pipeline for Marvin Application',
			techStack: ['GitHub Actions', 'Docker', 'Mavin'],
			description:
				'A robust CI/CD pipeline using GitHub Actions to automate the build, test, and deployment processes for the Marvin application. This project focuses on containerizing the application with Docker and ensuring seamless integration and delivery through automated workflows.',
			link: {
				label: 'https://github.com/NateSewel/github-action-cicd-mavin-app',
				href: 'https://github.com/NateSewel/github-action-cicd-mavin-app'
			},
			isNew: true
		},
		{
			title: 'From Docker to Kubernetes',
			techStack: ['Docker', 'Kubernetes', 'AWS'],
			description:
				'A hands-on project that demonstrates the journey of containerizing applications using Docker and orchestrating them with Kubernetes. This project covers building Docker images, creating Kubernetes manifests, and deploying applications to Kubernetes cluster using Kubeadm.',
			link: {
				label: 'github.com/NateSewel/From-Docker-to-Kubernetes',
				href: 'https://github.com/NateSewel/aws3-tier-webapp-kubernetes'
			},
			isNew: true
		},
	]
}
