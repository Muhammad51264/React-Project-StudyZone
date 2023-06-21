const CoursesInfo = [{
    "courses": [
      {
        "ID": "1001",
        "Course Name": "Web Development Bootcamp",
        "Price": 99.99,
        "Category": "Programming",
        "Ratings": 4.8,
        "description": "Comprehensive course on building websites and web applications using HTML, CSS, and JavaScript.",
        "image": "https://example.com/web_dev_bootcamp.jpg",
        "hours": 40,
        "what you will learn": [
          "HTML5 and CSS3 fundamentals",
          "Responsive web design",
          "JavaScript programming",
          "Front-end frameworks (e.g., React, Angular)",
          "Backend development with Node.js and Express"
        ],
        "language": "English"
      },
      {
        "ID": "1002",
        "Course Name": "Data Science and Machine Learning",
        "Price": 129.99,
        "Category": "Programming",
        "Ratings": 4.6,
        "description": "Learn the essential concepts and techniques of data science and machine learning using Python and popular libraries.",
        "image": "https://example.com/data_science_ml.jpg",
        "hours": 60,
        "what you will learn": [
          "Data preprocessing and exploration",
          "Supervised and unsupervised learning algorithms",
          "Feature engineering and selection",
          "Model evaluation and validation",
          "Deep learning with TensorFlow and Keras"
        ],
        "language": "English"
      },
      {
        "ID": "1003",
        "Course Name": "Mobile App Development with Flutter",
        "Price": 89.99,
        "Category": "Programming",
        "Ratings": 4.7,
        "description": "Build cross-platform mobile apps for iOS and Android using the Flutter framework and Dart programming language.",
        "image": "https://example.com/flutter_app_dev.jpg",
        "hours": 35,
        "what you will learn": [
          "Flutter framework and Dart language fundamentals",
          "UI design and layouts",
          "State management",
          "API integration",
          "Publishing apps to app stores"
        ],
        "language": "English"
      },
      {
        "ID": "1004",
        "Course Name": "Python for Beginners",
        "Price": 59.99,
        "Category": "Programming",
        "Ratings": 4.5,
        "description": "An introductory course to learn Python programming from scratch and build a strong foundation.",
        "image": "https://example.com/python_beginners.jpg",
        "hours": 25,
        "what you will learn": [
          "Python syntax and data types",
          "Control flow and loops",
          "Functions and modules",
          "File handling",
          "Introduction to object-oriented programming (OOP)"
        ],
        "language": "English"
      },
      {
        "ID": "1005",
        "Course Name": "UI/UX Design Fundamentals",
        "Price": 79.99,
        "Category": "Design",
        "Ratings": 4.4,
        "description": "Learn the fundamentals of user interface (UI) and user experience (UX) design to create intuitive and visually appealing digital products.",
        "image": "https://example.com/ui_ux_design.jpg",
        "hours": 30,
        "what you will learn": [
          "Principles of UI and UX design",
          "Wireframing and prototyping",
          "Typography and color theory",
          "Usability testing and user research",
          "Design tools like Sketch and Figma"
        ],
        "language": "English"
      },
      {
        "ID": "1006",
        "Course Name": "Ethical Hacking and Penetration Testing",
        "Price": 149.99,
        "Category": "Programming",
        "Ratings": 4.9,
        "description": "Master the skills of ethical hacking and penetration testing to identify and secure vulnerabilities in computer systems and networks.",
        "image": "https://example.com/ethical_hacking.jpg",
        "hours": 50,
        "what you will learn": [
          "Information gathering and reconnaissance",
          "Network scanning and enumeration",
          "Vulnerability assessment and exploitation",
          "Wireless network security",
          "Web application security testing"
        ],
        "language": "English"
      },
      {
        "ID": "1007",
        "Course Name": "Introduction to Artificial Intelligence",
        "Price": 69.99,
        "Category": "Programming",
        "Ratings": 4.6,
        "description": "Explore the fundamentals of artificial intelligence, including machine learning, neural networks, and natural language processing.",
        "image": "https://example.com/intro_ai.jpg",
        "hours": 30,
        "what you will learn": [
          "Machine learning algorithms and techniques",
          "Deep learning and neural networks",
          "Natural language processing",
          "AI applications and ethical considerations",
          "Building AI-powered systems"
        ],
        "language": "English"
      },
      {
        "ID": "1008",
        "Course Name": "Digital Marketing Strategies",
        "Price": 79.99,
        "Category": "Marketing",
        "Ratings": 4.3,
        "description": "Learn effective digital marketing strategies to promote products and services, attract customers, and boost brand awareness.",
        "image": "https://example.com/digital_marketing.jpg",
        "hours": 35,
        "what you will learn": [
          "Search engine optimization (SEO)",
          "Social media marketing",
          "Email marketing and automation",
          "Pay-per-click (PPC) advertising",
          "Analytics and data-driven marketing"
        ],
        "language": "English"
      },
      {
        "ID": "1009",
        "Course Name": "Financial Management and Investment",
        "Price": 89.99,
        "Category": "Marketing",
        "Ratings": 4.5,
        "description": "Gain knowledge and skills in financial management, investment strategies, and understanding financial markets.",
        "image": "https://example.com/financial_management.jpg",
        "hours": 40,
        "what you will learn": [
          "Financial statements and analysis",
          "Risk management and diversification",
          "Asset valuation",
          "Investment planning and portfolio management",
          "Economic factors and market trends"
        ],
        "language": "English"
      },
      {
        "ID": "1010",
        "Course Name": "Photography Basics and Techniques",
        "Price": 49.99,
        "Category": "Design",
        "Ratings": 4.7,
        "description": "Learn the essentials of photography, including camera settings, composition, lighting, and editing techniques.",
        "image": "https://example.com/photography_basics.jpg",
        "hours": 20,
        "what you will learn": [
          "Camera settings and exposure",
          "Composition rules and techniques",
          "Lighting setups and techniques",
          "Post-processing and photo editing",
          "Different genres of photography"
        ],
        "language": "English"
      },
      {
        "ID": "1011",
        "Course Name": "Business Communication Skills",
        "Price": 59.99,
        "Category": "Marketing",
        "Ratings": 4.4,
        "description": "Enhance your communication skills for professional settings, including writing emails, delivering presentations, and effective teamwork.",
        "image": "https://example.com/business_communication.jpg",
        "hours": 25,
        "what you will learn": [
          "Effective written communication",
          "Public speaking and presentation skills",
          "Negotiation and conflict resolution",
          "Active listening and empathy",
          "Building professional relationships"
        ],
        "language": "English"
      },
      {
        "ID": "1012",
        "Course Name": "Music Production and Mixing",
        "Price": 89.99,
        "Category": "Marketing",
        "Ratings": 4.6,
        "description": "Learn the art of music production, recording, and mixing using digital audio workstations (DAWs) and industry-standard techniques.",
        "image": "https://example.com/music_production.jpg",
        "hours": 35,
        "what you will learn": [
          "Digital audio workstations (DAWs)",
          "Music theory and composition",
          "Recording and editing techniques",
          "Audio mixing and mastering",
          "Sound design and synthesis"
        ],
        "language": "English"
      },
      {
        "ID": "1013",
        "Course Name": "Project Management Fundamentals",
        "Price": 69.99,
        "Category": "Marketing",
        "Ratings": 4.5,
        "description": "Learn the key principles and techniques of project management to effectively plan, execute, and control projects.",
        "image": "https://example.com/project_management.jpg",
        "hours": 30,
        "what you will learn": [
          "Project initiation and planning",
          "Scope management and requirements gathering",
          "Scheduling and resource allocation",
          "Risk management",
          "Project monitoring and control"
        ],
        "language": "English"
      },
      {
        "ID": "1014",
        "Course Name": "Artificial Neural Networks",
        "Price": 79.99,
        "Category": "Programming",
        "Ratings": 4.7,
        "description": "Dive deeper into artificial neural networks and explore advanced concepts, architectures, and training algorithms.",
        "image": "https://example.com/neural_networks.jpg",
        "hours": 40,
        "what you will learn": [
          "Multilayer perceptrons",
          "Convolutional neural networks (CNNs)",
          "Recurrent neural networks (RNNs)",
          "Generative adversarial networks (GANs)",
          "Transfer learning and fine-tuning"
        ],
        "language": "English"
      },
      {
        "ID": "1015",
        "Course Name": "Android App Development",
        "Price": 89.99,
        "Category": "Programming",
        "Ratings": 4.6,
        "description": "Learn to build native Android apps using Java or Kotlin, and understand key concepts of mobile app development.",
        "image": "https://example.com/android_app_dev.jpg",
        "hours": 35,
        "what you will learn": [
          "Java or Kotlin programming for Android",
          "User interface design and layouts",
          "Handling user input and navigation",
          "Working with data and databases",
          "Publishing apps on the Google Play Store"
        ],
        "language": "English"
      },
      {
        "ID": "1016",
        "Course Name": "Graphic Design for Beginners",
        "Price": 59.99,
        "Category": "Design",
        "Ratings": 4.4,
        "description": "Learn the basics of graphic design, including typography, layout design, color theory, and creating visual assets.",
        "image": "https://example.com/graphic_design.jpg",
        "hours": 25,
        "what you will learn": [
          "Design principles and elements",
          "Typography and fonts",
          "Color theory and color schemes",
          "Layout design and composition",
          "Creating graphics with Adobe Photoshop and Illustrator"
        ],
        "language": "English"
      },
      {
        "ID": "1017",
        "Course Name": "Introduction to Blockchain Technology",
        "Price": 69.99,
        "Category": "Programming",
        "Ratings": 4.5,
        "description": "Explore the fundamentals of blockchain technology, its applications, and the decentralized ecosystem.",
        "image": "https://example.com/intro_blockchain.jpg",
        "hours": 30,
        "what you will learn": [
          "Blockchain concepts and components",
          "Cryptocurrencies and smart contracts",
          "Decentralized applications (DApps)",
          "Blockchain security and privacy",
          "Industry use cases and future trends"
        ],
        "language": "English"
      },
      {
        "ID": "1018",
        "Course Name": "Business Analytics and Data Visualization",
        "Price": 79.99,
        "Category": "Programming",
        "Ratings": 4.3,
        "description": "Learn how to analyze business data, derive insights, and present them effectively using data visualization techniques.",
        "image": "https://example.com/business_analytics.jpg",
        "hours": 35,
        "what you will learn": [
          "Data analysis and exploratory data visualization",
          "Descriptive and diagnostic analytics",
          "Dashboard design and interactive visualizations",
          "Key performance indicators (KPIs)",
          "Data storytelling and communication"
        ],
        "language": "English"
      },
      {
        "ID": "1019",
        "Course Name": "Social Media Marketing",
        "Price": 89.99,
        "Category": "Marketing",
        "Ratings": 4.5,
        "description": "Learn to create effective social media marketing campaigns and leverage social media platforms to grow your brand and engage with your audience.",
        "image": "https://example.com/social_media_marketing.jpg",
        "hours": 40,
        "what you will learn": [
          "Social media strategy and planning",
          "Content creation and curation",
          "Community management and engagement",
          "Social media advertising",
          "Analytics and performance tracking"
        ],
        "language": "English"
      },
      {
        "ID": "1020",
        "Course Name": "Introduction to Cybersecurity",
        "Price": 59.99,
        "Category": "Programming",
        "Ratings": 4.4,
        "description": "Get an overview of cybersecurity principles, threats, and best practices to protect digital assets and maintain data privacy.",
        "image": "https://example.com/intro_cybersecurity.jpg",
        "hours": 25,
        "what you will learn": [
          "Cybersecurity fundamentals",
          "Network security and encryption",
          "Identity and access management",
          "Security policies and incident response",
          "Emerging threats and trends"
        ],
        "language": "English"
      }
    ]
  }
  ]



export default CoursesInfo
