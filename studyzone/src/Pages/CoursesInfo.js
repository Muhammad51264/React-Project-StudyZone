const CoursesInfo = [
  {
    courses: [
      {
        ID: "1001",
        "Course Name": "Web Development Bootcamp",
        Price: 99.99,
        Category: "programming",
        categoryLogo: "../Images/programming.svg",
        Ratings: 4.8,
        description:
          "Comprehensive course on building websites and web applications using HTML, CSS, and JavaScript.",
        image:
          "https://www.rinex.ai/assets/images/Backend%20development%20Rinex%20Ai.png",
        hours: "40 hours",

        "what you will learn": [
          "HTML5 and CSS3 fundamentals",
          "Responsive web design",
          "JavaScript programming",
          "Front-end frameworks (e.g., React, Angular)",
          "Backend development with Node.js and Express",
        ],
        language: "English",
      },
      {
        ID: "1002",
        "Course Name": "Data Science and Machine Learning",
        Price: 129.99,
        Category: "programming",
        categoryLogo: "../Images/programming.svg",
        Ratings: 4.6,
        description:
          "Learn the essential concepts and techniques of data science and machine learning using Python and popular libraries.",
        image:
          "https://bmsastech.com/wp-content/uploads/2020/05/data-science-vector-image.png",
        hours: "60 hours",
        "what you will learn": [
          "Data preprocessing and exploration",
          "Supervised and unsupervised learning algorithms",
          "Feature engineering and selection",
          "Model evaluation and validation",
          "Deep learning with TensorFlow and Keras",
        ],
        language: "English",
      },
      {
        ID: "1003",
        "Course Name": "Mobile App Development with Flutter",
        Price: 89.99,
        Category: "programming",
        categoryLogo: "../Images/programming.svg",
        Ratings: 4.7,
        description:
          "Build cross-platform mobile apps for iOS and Android using the Flutter framework and Dart programming language.",
        image: "https://crustlab.com/wp-content/uploads/2022/09/Lp_flutter.svg",
        hours: "35 hours",
        "what you will learn": [
          "Flutter framework and Dart language fundamentals",
          "UI design and layouts",
          "State management",
          "API integration",
          "Publishing apps to app stores",
        ],
        language: "English",
      },
      {
        ID: "1004",
        "Course Name": "Python for Beginners",
        Price: 59.99,
        Category: "programming",
        categoryLogo: "../Images/programming.svg",
        Ratings: 4.5,
        description:
          "An introductory course to learn Python programming from scratch and build a strong foundation.",
        image:
          "https://st.depositphotos.com/1796420/4023/v/450/depositphotos_40232747-stock-illustration-vector-icon-of-personal-computer.jpg",
        hours: "25  hours",
        "what you will learn": [
          "Python syntax and data types",
          "Control flow and loops",
          "Functions and modules",
          "File handling",
          "Introduction to object-oriented programming (OOP)",
        ],
        language: "English",
      },
      {
        ID: "1005",
        "Course Name": "UI/UX Design Fundamentals",
        Price: 79.99,
        Category: "Design",
        Ratings: 4.4,
        description:
          "Learn the fundamentals of user interface (UI) and user experience (UX) design to create intuitive and visually appealing digital products.",
        image:
          "https://altitudeaccelerator.ca/wp-content/uploads/2021/11/user-experience-design-ui-ux-virtual-screen-vector-29067507-2.jpg",
        hours: "30  hours",
        "what you will learn": [
          "Principles of UI and UX design",
          "Wireframing and prototyping",
          "Typography and color theory",
          "Usability testing and user research",
          "Design tools like Sketch and Figma",
        ],
        language: "English",
      },
      {
        ID: "1006",
        "Course Name": "Ethical Hacking and Penetration Testing",
        Price: 149.99,
        Category: "programming",
        categoryLogo: "../Images/programming.svg",
        Ratings: 4.9,
        description:
          "Master the skills of ethical hacking and penetration testing to identify and secure vulnerabilities in computer systems and networks.",
        image:
          "https://st2.depositphotos.com/2885805/6485/v/600/depositphotos_64857691-stock-illustration-data-protection-concept.jpg",
        hours: "50  hours",
        "what you will learn": [
          "Information gathering and reconnaissance",
          "Network scanning and enumeration",
          "Vulnerability assessment and exploitation",
          "Wireless network security",
          "Web application security testing",
        ],
        language: "English",
      },
      {
        ID: "1007",
        "Course Name": "Introduction to Artificial Intelligence",
        Price: 69.99,
        Category: "programming",
        categoryLogo: "../Images/programming.svg",
        Ratings: 4.6,
        description:
          "Explore the fundamentals of artificial intelligence, including machine learning, neural networks, and natural language processing.",
        image:
          "https://i.pinimg.com/564x/75/15/47/75154779c924392ec7ff3ec36a3759ea.jpg",
        hours: "30  hours",
        "what you will learn": [
          "Machine learning algorithms and techniques",
          "Deep learning and neural networks",
          "Natural language processing",
          "AI applications and ethical considerations",
          "Building AI-powered systems",
        ],
        language: "English",
      },
      {
        ID: "1008",
        "Course Name": "Digital Marketing Strategies",
        Price: 79.99,
        Category: "Marketing",
        categoryLogo: "../Images/marketing.svg",
        Ratings: 4.3,
        description:
          "Learn effective digital marketing strategies to promote products and services, attract customers, and boost brand awareness.",
        image:
          "https://freedesignfile.com/upload/2019/03/Digital-marketing-strategy-template-vector.jpg",
        hours: "35  hours",
        "what you will learn": [
          "Search engine optimization (SEO)",
          "Social media marketing",
          "Email marketing and automation",
          "Pay-per-click (PPC) advertising",
          "Analytics and data-driven marketing",
        ],
        language: "English",
      },
      {
        ID: "1009",
        "Course Name": "Financial Management and Investment",
        Price: 89.99,
        Category: "Marketing",
        categoryLogo: "../Images/marketing.svg",
        Ratings: 4.5,
        description:
          "Gain knowledge and skills in financial management, investment strategies, and understanding financial markets.",
        image:
          "https://i.pinimg.com/564x/f1/8e/b1/f18eb16b6a19aca884ea0f67e6d62080.jpg",
        hours: "40  hours",
        "what you will learn": [
          "Financial statements and analysis",
          "Risk management and diversification",
          "Asset valuation",
          "Investment planning and portfolio management",
          "Economic factors and market trends",
        ],
        language: "English",
      },
      {
        ID: "1010",
        "Course Name": "Photography Basics and Techniques",
        Price: 49.99,
        Category: "Design",

        Ratings: 4.7,
        description:
          "Learn the essentials of photography, including camera settings, composition, lighting, and editing techniques.",
        image:
          "https://photographylife.com/wp-content/uploads/2010/03/Portrait-Studio-Headshot-Photography-Illustration.png",
        hours: "20  hours",
        "what you will learn": [
          "Camera settings and exposure",
          "Composition rules and techniques",
          "Lighting setups and techniques",
          "Post-processing and photo editing",
          "Different genres of photography",
        ],
        language: "English",
      },
      {
        ID: "1011",
        "Course Name": "Business Communication Skills",
        Price: 59.99,
        Category: "Marketing",
        categoryLogo: "../Images/marketing.svg",
        Ratings: 4.4,
        description:
          "Enhance your communication skills for professional settings, including writing emails, delivering presentations, and effective teamwork.",
        image:
          "https://i.pinimg.com/564x/bc/f3/61/bcf36161649f93f9bcc0cd0fb6effecb.jpg",
        hours: "25  hours",
        "what you will learn": [
          "Effective written communication",
          "Public speaking and presentation skills",
          "Negotiation and conflict resolution",
          "Active listening and empathy",
          "Building professional relationships",
        ],
        language: "English",
      },
      {
        ID: "1012",
        "Course Name": "Music Production and Mixing",
        Price: 89.99,
        Category: "programming",
        categoryLogo: "../Images/marketing.svg",
        Ratings: 4.6,
        description:
          "Learn the art of music production, recording, and mixing using digital audio workstations (DAWs) and industry-standard techniques.",
        image:
          "https://www.freevector.com/uploads/vector/preview/28482/Music-Production.jpg",
        hours: "35  hours",
        "what you will learn": [
          "Digital audio workstations (DAWs)",
          "Music theory and composition",
          "Recording and editing techniques",
          "Audio mixing and mastering",
          "Sound design and synthesis",
        ],
        language: "English",
      },
      {
        ID: "1013",
        "Course Name": "Project Management Fundamentals",
        Price: 69.99,
        Category: "Marketing",
        categoryLogo: "../Images/marketing.svg",
        Ratings: 4.5,
        description:
          "Learn the key principles and techniques of project management to effectively plan, execute, and control projects.",
        image:
          "https://media.istockphoto.com/id/1136679371/vector/project-management-vector-illustration-business-administration-manage-project-concepts-flat.jpg?s=612x612&w=0&k=20&c=VEFxk5iFBPWIoPpNg3LXzsKcdNEL1Y1KXRBNg8HEHt0=",
        hours: "30  hours",
        "what you will learn": [
          "Project initiation and planning",
          "Scope management and requirements gathering",
          "Scheduling and resource allocation",
          "Risk management",
          "Project monitoring and control",
        ],
        language: "English",
      },
      {
        ID: "1014",
        "Course Name": "Artificial Neural Networks",
        Price: 79.99,
        Category: "programming",
        categoryLogo: "../Images/programming.svg",
        Ratings: 4.7,
        description:
          "Dive deeper into artificial neural networks and explore advanced concepts, architectures, and training algorithms.",
        image:
          "https://img.freepik.com/free-vector/artificial-neural-network-training-algorithm-processing-speech-recognition-identity-verification-information-handling-humanoid-cyborg-isolated-concept-metaphor-illustration_335657-1155.jpg?w=2000",
        hours: "40  hours",
        "what you will learn": [
          "Multilayer perceptrons",
          "Convolutional neural networks (CNNs)",
          "Recurrent neural networks (RNNs)",
          "Generative adversarial networks (GANs)",
          "Transfer learning and fine-tuning",
        ],
        language: "English",
      },
      {
        ID: "1015",
        "Course Name": "Android App Development",
        Price: 89.99,
        Category: "programming",
        categoryLogo: "../Images/programming.svg",
        Ratings: 4.6,
        description:
          "Learn to build native Android apps using Java or Kotlin, and understand key concepts of mobile app development.",
        image: "https://www.deepit.com/image/android-app-vector.png",
        hours: "35  hours",
        "what you will learn": [
          "Java or Kotlin programming for Android",
          "User interface design and layouts",
          "Handling user input and navigation",
          "Working with data and databases",
          "Publishing apps on the Google Play Store",
        ],
        language: "English",
      },
      {
        ID: "1016",
        "Course Name": "Graphic Design for Beginners",
        Price: 59.99,
        Category: "Design",
        Ratings: 4.4,
        description:
          "Learn the basics of graphic design, including typography, layout design, color theory, and creating visual assets.",
        image:
          "https://bmsastech.com/wp-content/uploads/2020/05/graphic-design-vector.png",
        hours: "25  hours",
        "what you will learn": [
          "Design principles and elements",
          "Typography and fonts",
          "Color theory and color schemes",
          "Layout design and composition",
          "Creating graphics with Adobe Photoshop and Illustrator",
        ],
        language: "English",
      },
      {
        ID: "1017",
        "Course Name": "Introduction to Blockchain Technology",
        Price: 69.99,
        Category: "programming",
        categoryLogo: "../Images/programming.svg",
        Ratings: 4.5,
        description:
          "Explore the fundamentals of blockchain technology, its applications, and the decentralized ecosystem.",
        image:
          "https://static.vecteezy.com/system/resources/previews/006/911/766/original/blockchain-technology-concept-vector.jpg",
        hours: "30  hours",
        "what you will learn": [
          "Blockchain concepts and components",
          "Cryptocurrencies and smart contracts",
          "Decentralized applications (DApps)",
          "Blockchain security and privacy",
          "Industry use cases and future trends",
        ],
        language: "English",
      },
      {
        ID: "1018",
        "Course Name": "Business Analytics and Data Visualization",
        Price: 79.99,
        Category: "programming",
        categoryLogo: "../Images/programming.svg",
        Ratings: 4.3,
        description:
          "Learn how to analyze business data, derive insights, and present them effectively using data visualization techniques.",
        image:
          "https://datasciencedojo.com/wp-content/uploads/Data-visualization-in-business-analytics--2048x1365.jpg",
        hours: "35  hours",
        "what you will learn": [
          "Data analysis and exploratory data visualization",
          "Descriptive and diagnostic analytics",
          "Dashboard design and interactive visualizations",
          "Key performance indicators (KPIs)",
          "Data storytelling and communication",
        ],
        language: "English",
      },
      {
        ID: "1019",
        "Course Name": "Social Media Marketing",
        Price: 89.99,
        Category: "Marketing",
        categoryLogo: "../Images/marketing.svg",
        Ratings: 4.5,
        description:
          "Learn to create effective social media marketing campaigns and leverage social media platforms to grow your brand and engage with your audience.",
        image:
          "https://static.vecteezy.com/system/resources/previews/004/578/802/original/developing-social-media-digital-marketing-for-business-free-vector.jpg",
        hours: "40  hours",
        "what you will learn": [
          "Social media strategy and planning",
          "Content creation and curation",
          "Community management and engagement",
          "Social media advertising",
          "Analytics and performance tracking",
        ],
        language: "English",
      },
      {
        ID: "1020",
        "Course Name": "Introduction to Cybersecurity",
        Price: 59.99,
        Category: "programming",
        categoryLogo: "../Images/programming.svg",
        Ratings: 4.4,
        description:
          "Get an overview of cybersecurity principles, threats, and best practices to protect digital assets and maintain data privacy.",
        image:
          "https://static.vecteezy.com/system/resources/previews/000/517/735/original/cyber-security-vector.png",
        hours: "25 hours",
        "what you will learn": [
          "Cybersecurity fundamentals",
          "Network security and encryption",
          "Identity and access management",
          "Security policies and incident response",
          "Emerging threats and trends",
        ],
        language: "English",
      },
    ],
  },
];

export default CoursesInfo;
