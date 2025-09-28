// Portfolio Data Configuration
const data = {
  about: {
    name: 'Pradeep S',
    title: 'MERN Stack & Machine Learning Developer',
    intro: `Computer Science & Cybersecurity undergrad (graduating 2027) with hands-on experience in Java and full-stack development. Finalist in MSME Ideathon 5.0 with strong foundations in software design, testing, and deployment. Skilled in Google Workspace, Firebase, and ML tools; passionate about building scalable solutions and contributing to collaborative teams.`,
    additional: '',
    education: [
      {
        degree: 'B.E. in Computer Science and Engineering (Cyber Security)',
        school: 'Muthayammal Engineering College, Namakkal',
        year: '2023 – 2027',
        gpa: 'CGPA: 8.7/10 (current)',
      },
    ],
    interests: [
      'Artificial Intelligence & Applied Machine Learning',
      'Full-stack product engineering',
      'Cybersecurity innovations',
      'Hackathons & rapid prototyping',
      'Community-driven tech mentoring',
    ],
  },
  social: {
    github: 'https://github.com/Cyberpradeep',
    linkedin: 'https://www.linkedin.com/in/pradeepselladurai',
    leetcode: 'https://leetcode.com/u/pradeepcy/',
    email: 'pradeepnaveen930@gmail.com',
  },
  resume: {
    viewUrl: '/Pradeep%20Selladurai%20--%20Resume.pdf',
    downloadUrl: '/Pradeep%20Selladurai%20--%20Resume.pdf',
    lastUpdated: 'January 2025',
  },
  skills: {
    languages: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C', 'SQL'],
    frontend: ['React.js', 'Material UI', 'Tailwind CSS', 'HTML5', 'CSS3'],
    backend: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Firebase Functions'],
    ml: ['TensorFlow', 'Keras', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'OpenCV'],
    tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Jupyter Notebook', 'Google Colab', 'Notion'],
    deployment: ['Netlify', 'Vercel', 'Firebase', 'Render'],
    databases: ['MongoDB', 'MySQL Server'],
    web: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Material UI', 'Tailwind CSS', 'REST APIs', 'JWT Authentication'],
  },
  experience: [
    {
      title: 'AI & ML Intern',
      company: 'Edunet Foundation',
      period: 'Jan 2025 – Feb 2025',
      description: 'Worked on a real-time machine learning project for Garbage Image Classification using Convolutional Neural Networks (CNN). Built, trained, and evaluated models using TensorFlow and OpenCV.'
    },
    {
      title: 'Machine Learning Intern',
      company: 'Tamizhan Skills',
      period: 'Dec 2024 – Jan 2025',
      description: 'Completed projects including Spam Email Detection, Handwritten Digit Recognition, and Loan Eligibility Prediction using Python and scikit-learn. Gained practical experience in building, evaluating, and deploying ML models.'
    },
    {
      title: 'Security Awareness Analyst (Virtual Intern)',
      company: 'Mastercard via Forage',
      period: 'Aug 2024',
      description: 'Worked on simulated tasks such as phishing attack detection, employee awareness campaigns, and recommendations to improve cybersecurity culture.'
    },
  ],
  education: [
    {
      degree: 'B.E. in Computer Science and Engineering (Cyber Security)',
      college: 'Muthayammal Engineering College, Namakkal',
      year: '2023 – 2027',
      highlights: [
        'Currently pursuing my B.E. degree in CSE (Cyber Security)',
        'Participated in hackathons and technical symposiums',
        'Completed multiple real-world projects and internships',
      ],
    },
  ],
  hackathons: [
    {
      title: 'Finalist – MSME Ideathon 5.0',
      date: 'July 2025',
      description: 'Led the TalkToMachine vernacular AI assistant to help MSME operators interact in native languages, delivering 50% better accessibility through Hugging Face models and collaborative teamwork.',
      tech: ['DistilBERT', 'Hugging Face', 'AI Assistant', 'Team Leadership'],
      achievement: 'Advanced to the national finalist round with TalkToMachine',
    },
    {
      title: 'Participant – HackIndia 2025',
      date: 'March 2025',
      description: 'Built a MERN stack-based campus utility app focused on preordering food and managing college resources. Collaborated with a team to design, develop, and deploy the solution in under 36 hours.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Material UI'],
      achievement: 'Successfully deployed a full-stack solution in 36 hours',
    },
    {
      title: 'Participant – National Cybersecurity Conclave, NIT Calicut',
      date: 'Feb 2025',
      description: 'Presented ideas on secure, decentralized file backup using blockchain technology. Networked with cybersecurity and ML professionals and explored practical AI applications in security.',
      tech: ['Blockchain', 'Cybersecurity', 'AI'],
      achievement: 'Presented at a national-level cybersecurity event',
    },
  ],
  projects: [
    {
      title: 'TalkToMachine – Vernacular AI Assistant',
      description: 'AI assistant powered by DistilBERT and Hugging Face that helps MSME operators interact in native languages, improving accessibility by 50% and advancing to the MSME Ideathon 5.0 finalist round.',
      technologies: ['Python', 'DistilBERT', 'Hugging Face', 'React.js', 'Node.js', 'Express.js'],
      githubUrl: 'https://github.com/Cyberpradeep/TalkToMachine.git',
      liveUrl: '',
    },
    {
      title: 'Gemini-Powered AI Code Reviewer',
      description: 'Automated code review platform that uses the Google Gemini API to deliver focused feedback, interactive chat, diff previews, and one-click fixes across multiple programming languages.',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Google Gemini API', 'Vercel'],
      githubUrl: 'https://github.com/Cyberpradeep/Gemini-AI_Code_Reviewer',
      liveUrl: 'https://www.aicodereviewer.dev',
    },
    {
      title: 'Canteen Preorder App (MERN Stack)',
      description: 'A full-stack web app that allows students to preorder food before breaks to reduce waiting time.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Material UI', 'JWT Authentication', 'REST APIs'],
      githubUrl: 'https://github.com/Cyberpradeep/canteen_preorder_app.git',
      liveUrl: '',
    },
    {
      title: 'Loan Eligibility Predictor',
      description: 'Built a logistic regression model to predict loan approvals using applicant financial data.',
      technologies: ['Python', 'scikit-learn', 'Pandas', 'Streamlit', 'Data Visualization'],
      githubUrl: 'https://github.com/Cyberpradeep/loan-eligibility-predictor.git',
      liveUrl: 'https://huggingface.co/spaces/Prap017/loan_eligibility_predictor',
    },
    {
      title: 'Spam Email Detection (Machine Learning)',
      description: 'Developed a model using NLP and Naive Bayes to classify emails as spam or not.',
      technologies: ['Python', 'Pandas', 'NumPy', 'scikit-learn', 'NLTK', 'Jupyter Notebook'],
      githubUrl: 'https://github.com/Cyberpradeep/Email_Spam_checker.git',
      liveUrl: 'https://huggingface.co/spaces/Prap017/Email_Spam_Detection',
    },
    {
      title: 'Handwritten Digit Recognition',
      description: 'Created a CNN model that identifies digits from handwritten images using the MNIST dataset.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'MNIST', 'Deep Learning'],
      githubUrl: 'https://github.com/Cyberpradeep/Handwritten_Digit_Finder',
      liveUrl: 'https://huggingface.co/spaces/Prap017/Handwrieen_recogination',
    },
    {
      title: 'College Fund Management System',
      description: 'Web app for managing club funds and student payments with secure role-based access.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'JWT', 'Role-Based Authorization'],
      githubUrl: 'https://github.com/Cyberpradeep/college-fund-management',
      liveUrl: '',
    },
    {
      title: 'Final Project – Garbage Collection',
      description: 'A smart system for efficient garbage collection and management using IoT and ML.',
      technologies: ['IoT', 'Machine Learning', 'Python', 'Sensors', 'Data Analytics'],
      githubUrl: 'https://github.com/Cyberpradeep/Final_Project',
      liveUrl: '',
    },
  ],
  certifications: [
    {
      title: 'Microsoft Certified: Azure AI Fundamentals (AI-900)',
      issuer: 'Microsoft',
      date: '2024',
      description: 'Earners of the Azure AI Fundamentals certification have demonstrated foundational knowledge of machine learning (ML) and artificial intelligence (AI) concepts and related Microsoft Azure services.',
      link: 'https://learn.microsoft.com/api/credentials/share/en-us/PRADEEPS-7652/8B547C692765F791?sharingId=FB2098054B69487C',
    },
  ],
};

export const portfolioData = data;

export default data; 