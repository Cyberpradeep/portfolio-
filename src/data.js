// Portfolio Data Configuration
const data = {
  about: {
    name: 'Pradeep S',
    title: 'MERN Stack & Machine Learning Developer',
    intro: `Hey! I'm Pradeep, an engineering student currently pursuing my B.E. in Computer Science and Engineering (Cyber Security) at Muthayammal Engineering College, Namakkal. I specialize in full-stack web development using the MERN stack and also enjoy creating intelligent applications using machine learning.\n\nI’ve completed multiple internships focused on real-world applications like spam detection, digit recognition, garbage classification, and web apps for canteen preordering and fund management. My goal is to build impactful, scalable, and intelligent solutions that improve daily life and campus experiences.`,
    additional: '',
  },
  skills: {
    languages: ['Java', 'C', 'SQL', 'Python3', 'JavaScript', 'Python'],
    tools: ['Git', 'VS Code', 'Postman', 'MongoDB', 'MySQL Server', 'Jupyter Notebook', 'Google Colab'],
    web: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'Material UI'],
    ml: ['scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'TensorFlow', 'Keras', 'OpenCV'],
    deployment: ['Netlify', 'Vercel', 'Firebase'],
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

export default data; 