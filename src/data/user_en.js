const INFO = { 
    main: {
        title: "Pablo Marín Gómez - Portfolio",
        name: "Pablo Marín Gómez",
        email: "pa.mrgom@gmail.com",
        logo: "../logo.png",
    },
    
    nav_bar: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
        based_on: "Based on © 2023 Tharindu.dev. All rights reserved."

    },

    card_headers: {
        works: "Work Experience", 
        studies: "Education",   
    },

    socials_content: {
        github: "GitHub Projects",
        linkedin: "LinkedIn Profile"
    },

    socials: {
        github: "https://github.com/TheNeoStormZ",
        linkedin: "https://linkedin.com/in/pablo-marín-gómez-777959253",
        stackoverflow: "https://stackoverflow.com/users/15750198/theneostormz",
    },
    homepage: {
        title: "Software Developer, specialized in",
        rotating: ['Cybersecurity', 'Python', 'Java', 'React'],
        description:
            "I am a software developer specializing in cybersecurity, focused on creating robust and secure applications. With experience in languages like Java and Python, I aim to combine functionality and protection in every project, offering effective and user-oriented solutions.",
    },
    about: {
        title: "Pablo Marín Gómez - Technology Enthusiast",
        description:
            "I am a computer engineer with a focus on software development and cybersecurity. Through my experience in diverse projects, I have acquired a solid command of languages such as Java and Python, as well as modern frameworks and security practices. My goal is to design efficient and secure applications that improve user experience, always seeking to be at the forefront of technology and innovation.",
    },
    studies: [
        {
            title: "Ethical Hacking Master",
            institution:
                "KSchool",
            timeframe: "November 2023 - July 2024",
            logo: "./kschool-logo.png",
        },
        {
            title: "Computer Engineering - Software Engineering",
            institution:
                "University of Seville",
            timeframe: "September 2019 - July 2023",
            logo: "./us-logo.png",
        },
    ],
    work: [
        {
            title: "Atlansec",
            description:
                "Front-End Developer",
            timeframe: "December 2024 - February 2025",
            url: "https://es.linkedin.com/company/atlansecsl",
            logo: "./atlansecsl_logo.jpg",
        },
    ],
    
    contact_header: {
        header: "Get in touch with me",
        line_one: "Thank you for visiting my portfolio! If you have any questions, comments, or simply want to chat about a project, please don't hesitate to contact me. You can do so directly through my email:",
        line_two: "I look forward to hearing from you soon!"
    },

    projects_header: {
        header: "Projects I've worked on",
        description: "Throughout my career in software development and cybersecurity, I have worked on various projects ranging from web and mobile applications to security analysis tools. Each project has been an opportunity to apply knowledge in technologies such as Java, Python, and development frameworks, as well as to delve into information security practices. Here you will find a selection of these projects, which showcase my programming skills."
    },

    projects: [
        {
            title: "Project in Expo Framework",
            description:
                "Mobile application development using Expo Framework and React Native.",
            logo: "https://cdn.worldvectorlogo.com/logos/expo-1.svg",
            linkText: "Private Repository",
            link: "#",
        },
        {
            title: "Statuere",
            description:
                "Statuere is a ToDo application that allows you to add tasks with a name and a description, mark them as completed (which visually differentiates them from the rest) and delete them.",
            logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
            linkText: "View on GitHub",
            link: "https://github.com/TheNeoStormZ/Statuere",
        },
        {
            title: "Quipu",
            description:
                "Quipu is a platform that helps writers organize and relate characters and stories, improving their productivity through an intuitive interface.",
            logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
            linkText: "View on GitHub",
            link: "https://github.com/TheNeoStormZ/quipu-writer",
        },
        {
            title: "BirdVerify",
            description:
                "BirdVerify is a native application to verify if a Twitter user was previously verified, using a SQLite database with data up to December 11, 2022.",
            logo: "https://cdn.worldvectorlogo.com/logos/android-logomark.svg",
            linkText: "View on GitHub",
            link: "https://github.com/TheNeoStormZ/BirdVerify",
        },
        {
            title: "FoodCheck",
            description:
                "FoodCheck is a PWA that allows users to filter and compare food products according to their preferences, diets and intolerances.",
            logo: "https://cdn.worldvectorlogo.com/logos/django.svg",
            linkText: "View on GitHub",
            link: "https://github.com/ispp-FoodCheck/FoodCheck",
        },
        {
            title: "SpringElectric",
            description:
                "Learning project to explore NoSQL technologies, focused on MongoDB, and using Spring Boot for electrical data management. Implements CSV data loading functionalities.",
            logo: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1-1.svg",
            linkText: "View on GitHub",
            link: "https://github.com/TheNeoStormZ/SpringElectric",
        },
        {
            title: "Phonetic",
            description:
                "Web platform development for the sale of mobile accessories of various brands, from covers to VR headsets.",
            logo: "https://cdn.worldvectorlogo.com/logos/django.svg",
            linkText: "Private Repository",
            link: "#",
        },
        {
            title: "Plegamiento 2D - Un enfoque informatico",
            description:
                "Collaborative project where research was carried out on the prediction of protein folding and a basic implementation was made in Python.",
            logo: "https://cdn.worldvectorlogo.com/logos/matplotlib-1.svg",
            linkText: "View on GitHub",
            link: "https://github.com/TheNeoStormZ/Proteinas-2D",
        },
        {
            title: "Project REMORY",
            description:
                "Group project for eliciting requirements for a consultancy, where both a System Analysis and the System Requirements were obtained.",
            logo: "./us-logo.png",
            linkText: "View on GitHub",
            link: "https://github.com/TheNeoStormZ/super-REMORY",
        },
        {
            title: "Decide",
            description:
                "This collaborative project involved several groups in various tasks for an external project. My role included adapting the interface for translation, translating to Spanish and configuring Docker, deployment in Render and the appropriate Github Actions.",
            logo: "https://cdn.worldvectorlogo.com/logos/docker-4.svg",
            linkText: "View on GitHub",
            link: "https://github.com/Villanueva-del-Trabuco-EGC/decide",
        },
        {
            title: "Dwarf",
            description:
                "Implementation of the Dwarf board game to a web platform developed with Spring Framework, using Java as a programming language. Collaborative project.",
            logo: "https://cdn.worldvectorlogo.com/logos/spring-3.svg",
            linkText: "View on GitHub",
            link: "https://github.com/gii-is-DP1/dp1-2021-2022-l8-5",
        },
        {
            title: "Showcase",
            description:
                "Implementation of basic functions of photographic social networks, using Python, MariaDB and the Silence framework of the University of Seville.",
            logo: "https://avatars.githubusercontent.com/u/45563345?s=200&v=4",
            linkText: "View on GitHub",
            link: "https://github.com/TheNeoStormZ/Proyecto-curso-IISSI2",
        },
    ],
};

export default INFO;