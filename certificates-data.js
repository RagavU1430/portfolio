// Deduplicated Certificates Data Array
const CERTIFICATES_DATA = [
  {
    "id": "google-ai-essentials",
    "title": "Google AI Essentials Specialization",
    "issuer": "Google / Coursera",
    "category": "ai",
    "icon": "fab fa-google",
    "badge": "Specialization",
    "desc": "5-course comprehensive professional specialization by Google mastering generative AI tools, prompt engineering, and workplace productivity.",
    "file": "certificates/Coursera/Coursera - Google AI Essentials ( Full ).pdf",
    "thumb": "certificates/Coursera/Coursera - Google AI Essentials (Full).jpg",
    "tags": [
      "Generative AI",
      "Prompt Engineering",
      "Productivity",
      "Google AI"
    ]
  },
  {
    "id": "google-prompting-spec",
    "title": "Google Prompting Specialization",
    "issuer": "Google / Coursera",
    "category": "ai",
    "icon": "fab fa-google",
    "badge": "Specialization",
    "desc": "4-course advanced Google credential covering professional prompt design, task automation, and collaborative AI.",
    "file": "certificates/Coursera/Coursera - Google Prompting ( Full ).pdf",
    "thumb": "certificates/Coursera/Coursera - Google Prompting ( Full ).jpg",
    "tags": [
      "Prompt Design",
      "Workflow Automation",
      "LLMs",
      "Google"
    ]
  },
  {
    "id": "gemini-multi-agent",
    "title": "Multi-Agent Workflows with Gemini Enterprise",
    "issuer": "Google Cloud & Gemini",
    "category": "ai",
    "icon": "fas fa-robot",
    "badge": "Advanced AI",
    "desc": "Designing, deploying, and orchestrating autonomous multi-agent systems using Google Gemini Enterprise models.",
    "file": "certificates/Custom/Orchestrate Multi Agent Workflows with Gemini Enterprise.png",
    "thumb": "certificates/Custom/Orchestrate Multi Agent Workflows with Gemini Enterprise.png",
    "tags": [
      "Gemini Enterprise",
      "Multi-Agent AI",
      "AI Architecture"
    ]
  },
  {
    "id": "aws-prompt-basics",
    "title": "Foundations of Prompt Engineering",
    "issuer": "Amazon Web Services (AWS)",
    "category": "ai",
    "icon": "fab fa-aws",
    "badge": "AWS Certified",
    "desc": "Official AWS credential on foundation models, tokenization parameters, contextual priming, and prompt engineering.",
    "file": "certificates/AWS/aws prompt basics.pdf",
    "thumb": "certificates/AWS/aws prompt basics_thumb.jpg",
    "tags": [
      "AWS",
      "Prompt Engineering",
      "Foundation Models"
    ]
  },
  {
    "id": "aws-llm-building",
    "title": "Building Language Models on AWS",
    "issuer": "Amazon Web Services (AWS)",
    "category": "ai",
    "icon": "fab fa-aws",
    "badge": "AWS Certified",
    "desc": "Designing, fine-tuning, and deploying large language models with enterprise security on AWS infrastructure.",
    "file": "certificates/AWS/Building language models on aws.pdf",
    "thumb": "certificates/AWS/Building language models on aws_page-0001.jpg",
    "tags": [
      "AWS Bedrock",
      "LLM Deployment",
      "Fine-Tuning"
    ]
  },
  {
    "id": "anthropic-claude-with-ai",
    "title": "Claude with Anthropic AI",
    "issuer": "Anthropic",
    "category": "ai",
    "icon": "fas fa-brain",
    "badge": "Official Skilljar",
    "desc": "In-depth mastery of Anthropic Claude architectures, system prompting, XML tagging, and context utilization.",
    "file": "certificates/Anthropic/Claude with anthropic AI.pdf",
    "thumb": "certificates/Anthropic/Claude with anthropic AI_page-0001.jpg",
    "tags": [
      "Anthropic Claude",
      "Context Window",
      "Prompt Design"
    ]
  },
  {
    "id": "anthropic-claude-101",
    "title": "Claude 101 Certification",
    "issuer": "Anthropic",
    "category": "ai",
    "icon": "fas fa-brain",
    "badge": "Official Anthropic",
    "desc": "Core capabilities of Anthropic Claude, conversational mechanics, reasoning abilities, and safe AI usage.",
    "file": "certificates/Anthropic/Claude 101.pdf",
    "thumb": "certificates/Anthropic/Claude 101_page-0001.jpg",
    "tags": [
      "Claude 3.5",
      "LLM Principles",
      "Anthropic"
    ]
  },
  {
    "id": "anthropic-cowork",
    "title": "Introduction to Claude Cowork",
    "issuer": "Anthropic",
    "category": "ai",
    "icon": "fas fa-user-astronaut",
    "badge": "Official Anthropic",
    "desc": "Techniques for collaborating with Claude as an intelligent copilot for code generation and engineering workflows.",
    "file": "certificates/Anthropic/Certificate to introduction to claude cowork.pdf",
    "thumb": "certificates/Anthropic/Certificate to introduction to claude cowork_thumb.jpg",
    "tags": [
      "AI Co-pilot",
      "Productivity",
      "Anthropic"
    ]
  },
  {
    "id": "tcs-yuva-ai",
    "title": "YUVA AI For All Certification",
    "issuer": "TCS iON & IndiaAI",
    "category": "ai",
    "icon": "fas fa-microchip",
    "badge": "Government / TCS",
    "desc": "National Artificial Intelligence program covering neural network foundations, ethics, and societal transformation.",
    "file": "certificates/Custom/Tcs Ion Yuva AI Certificatea.pdf",
    "thumb": "certificates/Custom/Tcs Ion Yuva AI Certificatea_thumb.jpg",
    "tags": [
      "TCS iON",
      "IndiaAI",
      "Machine Learning"
    ]
  },
  {
    "id": "ms-unlocking-ai",
    "title": "Unlocking AI for Everyone",
    "issuer": "Microsoft & NCVET",
    "category": "ai",
    "icon": "fab fa-microsoft",
    "badge": "NCVET Recognized",
    "desc": "Skill competency certification recognized by the National Council for Vocational Education and Training & Microsoft.",
    "file": "certificates/Custom/certificate_658a7e4d-dadd-4922-8f22-9593b904f690.pdf",
    "thumb": "certificates/Custom/certificate_658a7e4d-dadd-4922-8f22-9593b904f690_thumb.jpg",
    "tags": [
      "Microsoft",
      "NCVET",
      "Applied AI"
    ]
  },
  {
    "id": "ec-council-ai",
    "title": "AI Essentials Certification",
    "issuer": "EC-Council",
    "category": "ai",
    "icon": "fas fa-shield-virus",
    "badge": "EC-Council Certified",
    "desc": "Core AI concepts, cybersecurity considerations in artificial intelligence, and foundational data science principles.",
    "file": "certificates/Custom/EC COUNCIL - AI ESSENTIALS.png",
    "thumb": "certificates/Custom/EC COUNCIL - AI ESSENTIALS.png",
    "tags": [
      "EC-Council",
      "AI Security",
      "Data Science"
    ]
  },
  {
    "id": "vibe-coding-ai-agents",
    "title": "5-Day AI Agents Intensive Course",
    "issuer": "Vibe Coding Academy",
    "category": "ai",
    "icon": "fas fa-code-branch",
    "badge": "Agentic Coding",
    "desc": "Intensive hands-on training building multi-agent systems, tool calling, memory stores, and vibe-coding techniques.",
    "file": "certificates/Custom/5-Day AI Agents_ Intensive Vibe Coding Course.png",
    "thumb": "certificates/Custom/5-Day AI Agents_ Intensive Vibe Coding Course.png",
    "tags": [
      "Agentic AI",
      "Tool Calling",
      "Full-Stack AI"
    ]
  },
  {
    "id": "ai-for-all-soar",
    "title": "AI for ALL - SOAR Certification",
    "issuer": "SOAR Initiative",
    "category": "ai",
    "icon": "fas fa-lightbulb",
    "badge": "Specialized",
    "desc": "Equitable AI fundamentals, algorithmic literacy, and real-world deployment across education and industry.",
    "file": "certificates/Custom/AI for ALL - SOAR.jpg",
    "thumb": "certificates/Custom/AI for ALL - SOAR.jpg",
    "tags": [
      "Ethics",
      "AI Literacy",
      "Community Tech"
    ]
  },
  {
    "id": "google-cloud-student",
    "title": "Google Certified Student Developer",
    "issuer": "Google Cloud Platform",
    "category": "cloud",
    "icon": "fab fa-google",
    "badge": "Google Certified",
    "desc": "Certified competence in building and deploying scalable web applications on Google Cloud infrastructure.",
    "file": "certificates/Custom/Google Certified Student.png",
    "thumb": "certificates/Custom/Google Certified Student.png",
    "tags": [
      "Google Cloud",
      "GCP Compute",
      "Cloud Architecture"
    ]
  },
  {
    "id": "google-cloud-tech-series",
    "title": "Google Cloud Technical Series",
    "issuer": "Google Cloud",
    "category": "cloud",
    "icon": "fab fa-google",
    "badge": "Technical Credential",
    "desc": "Deep dive into GCP infrastructure, container orchestration with Kubernetes, Cloud Functions, and networking.",
    "file": "certificates/Custom/Google_Cloud Technical Series.pdf",
    "thumb": "certificates/Custom/Google_Cloud Technical Series_thumb.jpg",
    "tags": [
      "GCP",
      "Kubernetes",
      "Cloud Networking"
    ]
  },
  {
    "id": "salesforce-admin",
    "title": "Salesforce Administrator Explorer",
    "issuer": "Salesforce & NASSCOM FutureSkills",
    "category": "cloud",
    "icon": "fab fa-salesforce",
    "badge": "NASSCOM Aligned",
    "desc": "Enterprise CRM configuration, security controls, automated workflows, data validation, and custom object modeling.",
    "file": "certificates/Nasscom/Salesforce Administrator Explorer.pdf",
    "thumb": "certificates/Nasscom/Salesforce Administrator Explorer_thumb.jpg",
    "tags": [
      "Salesforce",
      "CRM Architecture",
      "Workflow Automation"
    ]
  },
  {
    "id": "hackerrank-java",
    "title": "Java (Basic) Skill Certification",
    "issuer": "HackerRank",
    "category": "dev",
    "icon": "fab fa-java",
    "badge": "HackerRank Certified",
    "desc": "Rigorous technical assessment validating OOP principles, polymorphism, abstract classes, collections, and algorithms in Java.",
    "file": "certificates/Hacker Rank/Java Hackerrank.png",
    "thumb": "certificates/Hacker Rank/Java Hackerrank.png",
    "tags": [
      "Java",
      "OOP",
      "Algorithms"
    ]
  },
  {
    "id": "hackerrank-python",
    "title": "Python (Basic) Skill Certification",
    "issuer": "HackerRank",
    "category": "dev",
    "icon": "fab fa-python",
    "badge": "HackerRank Certified",
    "desc": "Verified assessment in Python core syntax, list comprehensions, functional constructs, and problem solving.",
    "file": "certificates/Hacker Rank/python(basic) hackkerrank.png",
    "thumb": "certificates/Hacker Rank/python(basic) hackkerrank.png",
    "tags": [
      "Python",
      "Data Structures",
      "Problem Solving"
    ]
  },
  {
    "id": "mongodb-crud",
    "title": "CRUD Operations in MongoDB",
    "issuer": "MongoDB & Credly",
    "category": "dev",
    "icon": "fas fa-database",
    "badge": "Credly Verified",
    "desc": "Official MongoDB credential for document modeling, indexing, aggregation queries, and ACID transactional pipelines.",
    "file": "certificates/Custom/CRUD Operations in Mongo DB - Mongo DB.pdf",
    "thumb": "certificates/Custom/CRUD Operations in Mongo DB - Mongo DB_thumb.jpg",
    "tags": [
      "MongoDB",
      "NoSQL",
      "Database Indexing"
    ]
  },
  {
    "id": "infosys-python-foundation",
    "title": "Python Foundation Certification",
    "issuer": "Infosys Springboard",
    "category": "dev",
    "icon": "fab fa-python",
    "badge": "Infosys Certified",
    "desc": "Comprehensive industry benchmark certification evaluating robust software development and object design in Python.",
    "file": "certificates/Infosys Springboard/Python Foundation Certification.pdf",
    "thumb": "certificates/Infosys Springboard/Python Foundation Certification_thumb.jpg",
    "tags": [
      "Python",
      "Infosys Springboard",
      "Software Engineering"
    ]
  },
  {
    "id": "infosys-java-fundamentals",
    "title": "Java Programming Fundamentals",
    "issuer": "Infosys Springboard",
    "category": "dev",
    "icon": "fab fa-java",
    "badge": "Infosys Certified",
    "desc": "Comprehensive Java course covering object lifecycles, encapsulation, inheritance hierarchy, and exception handling.",
    "file": "certificates/Infosys Springboard/Java Programming Fundamentals.pdf",
    "thumb": "certificates/Infosys Springboard/Java Programming Fundamentals_thumb.jpg",
    "tags": [
      "Java",
      "Object Oriented Design",
      "Collections"
    ]
  },
  {
    "id": "infosys-nosql",
    "title": "Introduction to NoSQL Databases",
    "issuer": "Infosys Springboard",
    "category": "dev",
    "icon": "fas fa-server",
    "badge": "Infosys Certified",
    "desc": "Non-relational database principles, horizontal scaling, document and key-value datastores.",
    "file": "certificates/Infosys Springboard/Intro to NO-SQL.pdf",
    "thumb": "certificates/Infosys Springboard/Intro to NO-SQL_thumb.jpg",
    "tags": [
      "NoSQL",
      "Distributed DB",
      "Springboard"
    ]
  },
  {
    "id": "ibm-design-thinking",
    "title": "Enterprise Design Thinking",
    "issuer": "IBM",
    "category": "dev",
    "icon": "fas fa-pencil-ruler",
    "badge": "IBM Certified",
    "desc": "Framework for user-centered innovation, rapid prototyping, agile ideation, and collaborative engineering.",
    "file": "certificates/Custom/IBMDesign20260103-32-tfz308_page-0001.jpg",
    "thumb": "certificates/Custom/IBMDesign20260103-32-tfz308_page-0001.jpg",
    "tags": [
      "Design Thinking",
      "UI/UX",
      "IBM"
    ]
  },
  {
    "id": "forage-swe-simulation",
    "title": "Software Engineering Job Simulation",
    "issuer": "Forage Industry Partner",
    "category": "dev",
    "icon": "fas fa-laptop-code",
    "badge": "Job Simulation",
    "desc": "Practical tasks in enterprise software architecture, code reviews, debugging, and production pipeline readiness.",
    "file": "certificates/Forage/bWqaecPDbYAwSDqJy_Sj7temL583QAYpHXD_EueeWBNid6CNHgRbr_1771675646347_completion_certificate_page-0001.jpg",
    "thumb": "certificates/Forage/bWqaecPDbYAwSDqJy_Sj7temL583QAYpHXD_EueeWBNid6CNHgRbr_1771675646347_completion_certificate_page-0001.jpg",
    "tags": [
      "Software Engineering",
      "Code Review",
      "Forage"
    ]
  },
  {
    "id": "nasscom-iot-gold",
    "title": "Introduction to IoT & Digital Transformation",
    "issuer": "NASSCOM (Gold Grade - 83%)",
    "category": "iot",
    "icon": "fas fa-award",
    "badge": "Gold Category",
    "desc": "Cleared national assessment with Gold Grade (83/100) aligned to IT-ITeS Sector Skills Council and Government Standards.",
    "file": "certificates/Nasscom/Nasscom__IOT_Ragav.pdf",
    "thumb": "certificates/Nasscom/Nasscom__IOT_Ragav_thumb.jpg",
    "tags": [
      "IoT Gold",
      "NASSCOM",
      "Digital Transformation"
    ]
  },
  {
    "id": "cisco-iot-update",
    "title": "Introduction to IoT Architecture",
    "issuer": "Cisco Networking Academy",
    "category": "iot",
    "icon": "fas fa-network-wired",
    "badge": "Cisco Certified",
    "desc": "Core architecture of connected devices, sensors, fog computing, communication protocols, edge analytics, and industrial IoT.",
    "file": "certificates/Custom/IntrotoIoTUpdate20251125-30-3lkm3t_page-0001.jpg",
    "thumb": "certificates/Custom/IntrotoIoTUpdate20251125-30-3lkm3t_page-0001.jpg",
    "tags": [
      "Cisco",
      "Edge Computing",
      "IoT Security",
      "Sensors"
    ]
  },
  {
    "id": "mastercard-cybersecurity",
    "title": "Mastercard Cybersecurity Job Simulation",
    "issuer": "Mastercard / Forage",
    "category": "cyber",
    "icon": "fas fa-user-shield",
    "badge": "Mastercard / Forage",
    "desc": "Completed practical tasks in phishing email simulation design, attack vector identification, and security awareness metrics.",
    "file": "certificates/Forage/Cybersecurity Job Simulation.pdf",
    "thumb": "certificates/Forage/Cybersecurity Job Simulation_thumb.jpg",
    "tags": [
      "Mastercard",
      "Threat Simulation",
      "Phishing Analysis"
    ]
  },
  {
    "id": "tata-cybersecurity-iam",
    "title": "Cybersecurity Analyst (IAM Simulation)",
    "issuer": "Tata / Forage",
    "category": "cyber",
    "icon": "fas fa-lock",
    "badge": "Tata / Forage",
    "desc": "Hands-on practical execution of Identity & Access Management (IAM), access governance, security policies, and integrations.",
    "file": "certificates/Forage/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_EueeWBNid6CNHgRbr_1768725948707_completion_certificate.pdf",
    "thumb": "certificates/Forage/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_EueeWBNid6CNHgRbr_1768725948707_completion_certificate_thumb.jpg",
    "tags": [
      "IAM",
      "Cybersecurity",
      "Access Control"
    ]
  },
  {
    "id": "cr1061-tech-skills",
    "title": "Cybersecurity & Tech Skills (CR1061)",
    "issuer": "Professional Certification",
    "category": "cyber",
    "icon": "fas fa-shield-alt",
    "badge": "Competency",
    "desc": "Validated skills in cyber defense foundations, network baseline protections, and secure systems administration.",
    "file": "certificates/Custom/Ragav_CR1061_certificate_page-0001.jpg",
    "thumb": "certificates/Custom/Ragav_CR1061_certificate_page-0001.jpg",
    "tags": [
      "Security Baselines",
      "System Protection",
      "IT Security"
    ]
  },
  {
    "id": "enginow-ai-intern-cert",
    "title": "AI Internship Completion Certificate",
    "issuer": "Enginow Technologies",
    "category": "internship",
    "icon": "fas fa-briefcase",
    "badge": "4-Week AI Program",
    "desc": "Completed full-stack Artificial Intelligence internship building real-world AI applications and NLP pipelines.",
    "file": "certificates/Internship/Internship Complete Certificate.png",
    "thumb": "certificates/Internship/Internship Complete Certificate.png",
    "tags": [
      "AI Internship",
      "Applied NLP",
      "Enginow"
    ]
  },
  {
    "id": "pega-systems-internship",
    "title": "Pega Systems Enterprise Internship",
    "issuer": "Pega Systems Experience",
    "category": "internship",
    "icon": "fas fa-cogs",
    "badge": "Enterprise Pega",
    "desc": "Enterprise low-code workflow orchestration, case management lifecycle, and automated business process architectures.",
    "file": "certificates/Internship/PEGA INTERN.jpg",
    "thumb": "certificates/Internship/PEGA INTERN.jpg",
    "tags": [
      "Pega Systems",
      "Workflow Automation",
      "Case Management"
    ]
  },
  {
    "id": "blue-silicon-internship",
    "title": "Blue Silicon Infotech Internship",
    "issuer": "Blue Silicon Infotech",
    "category": "internship",
    "icon": "fas fa-microchip",
    "badge": "Technical Internship",
    "desc": "Embedded systems integration, firmware workflows, and hardware-software interface engineering.",
    "file": "certificates/Internship/Blue Silicon.jpeg",
    "thumb": "certificates/Internship/Blue Silicon.jpeg",
    "tags": [
      "Embedded Systems",
      "Hardware Interface",
      "Blue Silicon"
    ]
  },
  {
    "id": "summer-of-code-2026",
    "title": "EduLinkUp Summer of Code (ELUSOC 2026)",
    "issuer": "ELUSOC / EduLinkUp",
    "category": "hackathon",
    "icon": "fas fa-terminal",
    "badge": "Open Source",
    "desc": "3-month open source fellowship from June through August 2026 contributing to active open-source software codebases.",
    "file": "certificates/Custom/Summer Of Code 2026.jpg",
    "thumb": "certificates/Custom/Summer Of Code 2026.jpg",
    "tags": [
      "Summer of Code",
      "Open Source",
      "Git Collaboration"
    ]
  },
  {
    "id": "vbyld-2027",
    "title": "Viksit Bharat Young Leaders Dialogue 2027",
    "issuer": "VBYLD National Initiative",
    "category": "hackathon",
    "icon": "fas fa-trophy",
    "badge": "National Honor",
    "desc": "National youth leadership summit participation representing innovation, technology, and national development.",
    "file": "certificates/Custom/Viksit Bharat Young Leaders Dialogue (VBYLD) 2027_Certificate_Ragav U.png",
    "thumb": "certificates/Custom/Viksit Bharat Young Leaders Dialogue (VBYLD) 2027_Certificate_Ragav U.png",
    "tags": [
      "National Summit",
      "Youth Leadership",
      "Innovation"
    ]
  },
  {
    "id": "neurobots-hackathon",
    "title": "NeuroBots Robotics & AI Hackathon",
    "issuer": "NeuroBots Competition",
    "category": "hackathon",
    "icon": "fas fa-brain",
    "badge": "Hackathon Finalist",
    "desc": "Collaborative competition developing intelligent robotic control systems, computer vision, and neural models.",
    "file": "certificates/Hackathons/NeuroBots_Participation.png",
    "thumb": "certificates/Hackathons/NeuroBots_Participation.png",
    "tags": [
      "NeuroBots",
      "Robotics AI",
      "Hackathon"
    ]
  },
  {
    "id": "unstop-competition",
    "title": "National Skill Assessment & Challenge",
    "issuer": "Unstop Platform",
    "category": "hackathon",
    "icon": "fas fa-medal",
    "badge": "Competition",
    "desc": "Competitive programming and domain skill challenge testing algorithmic speed, accuracy, and technical logic.",
    "file": "certificates/Unstop/ebac0b7c-d950-4b09-8cea-afca76d45779.jpg",
    "thumb": "certificates/Unstop/ebac0b7c-d950-4b09-8cea-afca76d45779.jpg",
    "tags": [
      "Unstop",
      "Competitive Coding",
      "Algorithm"
    ]
  }
];
