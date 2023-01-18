const data = [
    {
        id: 1,
        college: "SHAPE",
        logo: "shape.jpg",
        venue: "Tsing Yi",
        category: "Business Information System",
        course: "BSc(Hons) Information Technology",
        university: "University of the West of England, Bristol",
        mode: "Part Time",
        qf: 5,
        duration: 18,
        tuition: 76900.00,
        intake: "31/3/2023",
        start: "9/2023",
        assessment: "Coursework assignment, Presentation, Examination, Project",
        modules: "Information Technology Project, Ethical and Professional Issues in Computing and Digital Media, Advanced topics in Web Development 1, Advanced topics in Web Development 2, Seurity Management in Practice, Mobile Applications, Mobile Networks, Usability and Interaction Design, Cryptography, Big Data Anlytics",
        link: "https://www.shape.edu.hk/course/BSc_Hons_Information_Technology"
    },
    {
        id: 2,
        college: "SHAPE",
        logo: "shape.jpg",
        venue: "Tsing Yi",
        category: "Business Information System",
        course: "BSc(Hons) Information Technology",
        university: "University of the West of England, Bristol",
        mode: "Full Time",
        qf: 5,
        duration: 12,
        tuition: 76900.00,
        intake: "31/3/2023",
        start: "9/2023",
        assessment: "Coursework assignment, Presentation, Examination, Project",
        modules: "Information Technology Project, Ethical and Professional Issues in Computing and Digital Media, Advanced topics in Web Development 1, Advanced topics in Web Development 2, Seurity Management in Practice, Mobile Applications, Mobile Networks, Usability and Interaction Design, Cryptography, Big Data Anlytics",
        link: "https://www.shape.edu.hk/course/BSc_Hons_Information_Technology"
    },
    {
        id: 3,
        college: "SHAPE",
        logo: "shape.jpg",
        venue: "Sha Tin, Chai Wan",
        category: "Computer Science",
        course: "BSc(Hons) Computing",
        university: "Conventry University",
        mode: "Part Time",
        qf: 5,
        duration: 14,
        tuition: 69450.00,
        intake: "31/3/2023",
        start: "9/2023",
        assessment: "Coursework, Phase Test, Final Project, etc",
        modules: "Data Science for Developers, Individual Project, Web API Development, Mobile App Development, User Experience Design, Security, Academic Writing 3: Writing Skills for Dissert and Res Prj",
        link: "https://www.shape.edu.hk/course/BSc_Hons_Computing"
    },
    {
        id: 4,
        college: "SHAPE",
        logo: "shape.jpg",
        venue: "Sha Tin, Chai Wan",
        category: "Computer Science",
        course: "BSc(Hons) Computing",
        university: "Conventry University",
        mode: "Full Time",
        qf: 5,
        duration: 12,
        tuition: 69450.00,
        intake: "31/3/2023",
        start: "9/2023",
        assessment: "Coursework, Phase Test, Final Project, etc",
        modules: "Data Science for Developers, Individual Project, Web API Development, Mobile App Development, User Experience Design, Security, Academic Writing 3: Writing Skills for Dissert and Res Prj",
        link: "https://www.shape.edu.hk/course/BSc_Hons_Computing"
    },
    {
        id: 5,
        college: "SHAPE",
        logo: "shape.jpg",
        venue: "Lee Wai Lee, Tsuen Mun",
        category: "Digital Media",
        course: "BSc(Hons) Digital Media",
        university: "University of the West of England, Bristol",
        mode: "Full Time",
        qf: 5,
        duration: 12,
        tuition: 76900.00,
        intake: "31/3/2023",
        start: "9/2023",
        assessment: "Oral Presentation, Assignment, Examination, Laboratory, Practical Report",
        modules: "Commercial Games Development, 3D Modelling and Animation, Audio-Visual Production, Interaction Design, Live Sound, Advanced Performance",
        link: "https://www.shape.edu.hk/course/BSc_Hons_Digital_Media"
    },
    {
        id: 6,
        college: "SHAPE",
        logo: "shape.jpg",
        venue: "Lee Wai Lee, Tsuen Mun",
        category: "Digital Media",
        course: "BSc(Hons) Digital Media",
        university: "University of the West of England, Bristol",
        mode: "Part Time",
        qf: 5,
        duration: 18,
        tuition: 76900.00,
        intake: "31/3/2023",
        start: "9/2023",
        assessment: "Oral Presentation, Assignment, Examination, Laboratory, Practical Report",
        modules: "Commercial Games Development, 3D Modelling and Animation, Audio-Visual Production, Interaction Design, Live Sound, Advanced Performance",
        link: "https://www.shape.edu.hk/course/BSc_Hons_Digital_Media"
    },
    {
        id: 7,
        college: "SHAPE",
        logo: "shape.jpg",
        venue: "Chai Wan",
        category: "Cyber Security",
        course: "BSc(Hons) Ethical Hacking and Cybersecurity",
        university: "Conventry University",
        mode: "Full Time",
        qf: 5,
        duration: 12,
        tuition: 81450.00,
        intake: "31/3/2023",
        start: "9/2023",
        assessment: "Coursework, Examination, Final Project",
        modules: "Digital Forensics Fundamentals, Intermediate Digital Forensics, Data Recovery and Advanced Digital Forensic Analysis, Advanced Network Management and Design, Ethical Hacking 2, Systems Security, Indiviual Project, Academic Writing 3: Writing Skills for Disseration and Research Project",
        link: "https://www.shape.edu.hk/course/BSc_Hons_Ethical_Hacking_and_Cybersecurity"
    },
    {
        id: 8,
        college: "HKUSPACE",
        logo: "hkuspace.jpg",
        venue: "North Point, Casueway Bay, Admiralty",
        category: "Cyber Security",
        course: "BSc(Hons) Cyber Security",
        university: "University of Plymouth, United Kingdom",
        mode: "Part Time",
        qf: "N/A",
        duration: 24,
        tuition: 108000.00,
        intake: "2023",
        start: "2023",
        assessment: "Coursework, Final year project",
        modules: "Real World Project, Operational Research, Data & Information Retrieval, Project Management, Agile Development, Effective Communications, Information Technology and Global Development, Security and Compliance in the Cloud, Individual Project",
        link: "https://hkuspace.hku.hk/prog/bsc-hons-cyber-security"
    },
    {
        id: 9,
        college: "HKUSPACE",
        logo: "hkuspace.jpg",
        venue: "North Point, Casueway Bay, Admiralty",
        category: "Network & Security",
        course: "BSc(Honor) Computer Networks and Security",
        university: "Middlesex University London, United Kingdom",
        mode: "Part Time",
        qf: "N/A",
        duration: 36,
        tuition: 150000.00,
        intake: "2023",
        start: "2023",
        assessment: "Year 1:  Coursework. Year 2 & 3:  Coursework, Examination",
        modules: "Year 1: Computer Systems Architecture and Operation Systems Programming for Data Communication and Networks, Science, Technology, Engineering and Mathematics, Computer Networks. Year 2: Data Communications, Network Practices and Operations, Network and Protocol Analysis, Project Management and Professional Practice Year 3: Advanced Networking, Network Management and Disaster Recovery, Network Security, Individual Project",
        link: "https://hkuspace.hku.hk/prog/bsc-hon-computer-networks-and-security"
    },
    {
        id: 10,
        college: "SCOPE",
        logo: "scope.jpg",
        venue: "Kowloon Tong, Tsim Sha Tsui",
        category: "Business Information System",
        course: "BSc(Honor) Computer Networks and Security",
        university: "Conventry University",
        mode: "Part Time",
        qf: 5,
        duration: 24,
        tuition: 124000.00,
        intake: "2023",
        start: "2023",
        assessment: "Coursework, examination",
        modules: "Real World Project, Operational Research, Data & Information Retrieval, Project Management, Agile Development, Effective Communications, Information Technology and Global Development, Security and Compliance in the Cloud, Individual Project",
        link: "https://www5.scope.edu/programmes/bachelors-degree-top-up/bsc-hons-information-technology-business"
    },
    {
        id: 11,
        college: "SCOPE",
        logo: "scope.jpg",
        venue: "Kowloon Tong, Tsim Sha Tsui",
        category: "Business Information System",
        course: "BSc(Honor) Computer Networks and Security",
        university: "Conventry University",
        mode: "Full Time",
        qf: 5,
        duration: 12,
        tuition: 124000.00,
        intake: "2023",
        start: "2023",
        assessment: "Coursework, examination",
        modules: "Real World Project, Operational Research, Data & Information Retrieval, Project Management, Agile Development, Effective Communications, Information Technology and Global Development, Security and Compliance in the Cloud, Individual Project",
        link: "https://www5.scope.edu/programmes/bachelors-degree-top-up/bsc-hons-information-technology-business"
    },
    {
        id: 12,
        college: "SPEED",
        logo: "speed.jpg",
        venue: "Hung Hom",
        category: "Business Information System",
        course: "BSc(Honours) in Applied Sciences (Information Systems and Web Technologies)",
        university: "N/A",
        mode: "Part Time",
        qf: "N/A",
        duration: 36,
        tuition: 209820.00,
        intake: "2023",
        start: "4/9/2023",
        assessment: "",
        modules: "Scheme Compulsory: Business Communication in Chinese, Effective Professional Communication in English, Integrated Study (Applied Sciences),  Management of Technology/Innovation and Entrepreneurship, Professional Ethics and Social Responsibilities, Research Methodology in Applied Sciences. Foundation: Computer Programming Concepts, Introduction to Internet Technologies, Introduction to Probability and Statistics Award-Specific Compulsory: Computer Network Administration, Computer Security, Database Technologies and Management, Electronic Commerce Strategy and Implementation, Enterprise Cloud Computing, Machine Learning for Data Mining, Management Information System, Web Application Development and Management, Web Systems and Technologies. Elective (any 2): Artificial Intelligence, Big Data Analytics, Foundation of Animation, Mobile Application Development, Multimedia Technology for the Internet, FinTech and Blockchain, Project Management",
        link: "https://www.speed-polyu.edu.hk/programme/applied-sciences-iswt-pt"
    },
    {
        id: 13,
        college: "SPEED",
        logo: "speed.jpg",
        venue: "Hung Hom",
        category: "Business Information System",
        course: "Bachelor of Science (Honours) in Information and Communications Technology",
        university: "N/A",
        mode: "Part Time",
        qf: 5,
        duration: 24,
        tuition: 209820.00,
        intake: "2023",
        start: "4/9/2023",
        assessment: "",
        modules: "Scheme Compulsory: Business Communication in Chinese, Effective Professional Communication in English, Integrated Study (Applied Sciences),  Management of Technology/Innovation and Entrepreneurship, Professional Ethics and Social Responsibilities, Research Methodology in Applied Sciences. Foundation: Computer Programming Concepts, Introduction to Internet Technologies, Introduction to Probability and Statistics Award-Specific Compulsory: Computer Network Administration, Computer Security, Database Technologies and Management, Electronic Commerce Strategy and Implementation, Enterprise Cloud Computing, Machine Learning for Data Mining, Management Information System, Web Application Development and Management, Web Systems and Technologies. Elective (any 2): Artificial Intelligence, Big Data Analytics, Foundation of Animation, Mobile Application Development, Multimedia Technology for the Internet, FinTech and Blockchain, Project Management",
        link: "https://www.speed-polyu.edu.hk/programme/applied-sciences-iswt"
    },
    {
        id: 14,
        college: "HKU",
        logo: "hku.jpg",
        venue: "",
        category: "Computer Science",
        course: "BSC(Hons) in Applied Computing",
        university: "N/A",
        mode: "Full Time",
        qf: 5,
        duration: 48,
        tuition: 110710.00,
        intake: "2023",
        start: "2023",
        assessment: "",
        modules: "Year 1: Programming Methodology, Programming and Data Structures, Computer System, Contemporary Information Technologies, Introduction to Business. Year 2: Computer Network, Discrete Mathematics and Algorithms, Database Design and Management, Graphic and Digital Design, Advanced Programming, Principles of Management. Year 3: AI, Computing Technologies in Web Applications, Software Engineering, Human-Computer Interaction, Professionalism and Ethics in Computing, Major Elective 1 & 2. Year 4: Senior Project (2 semesters), User Experience Designs, Major Elective 3 & 4",
        link: "https://comp.hsu.edu.hk/en/computing-degree/program-structure-21/"
    },
    {
        id: 15,
        college: "HKU",
        logo: "hku.jpg",
        venue: "",
        category: "Computer Science",
        course: "BA(Hons) in Applied and Human-Centered Computing",
        university: "N/A",
        mode: "Full Time",
        qf: 5,
        duration: 48,
        tuition: 110710.00,
        intake: "2023",
        start: "2023",
        assessment: "",
        modules: "Year 1: Programming Methodology, Programming and Data Structures, Computer System, Introduction to Business, Psychology. Year 2: Computer Network, Discrete Mathematics and Algorithms, Database Design and Management, Graphic and Digital Design, Principles of Managment. Year 3: Computing for Web Applications, Software Engineering, Human-Computer Interaction, Professionalism and Ethics in Computing, Digital Humanities and Chinese Computing, Major Elective 1 -3. Year 4:  Senior Project (2 semesters), User Experience Designs, Internet Culture, Major Elective 4 - 6",
        link: "https://comp.hsu.edu.hk/en/computing-degree/programme-structure/"
    },
    {
        id: 16,
        college: "Thei",
        logo: "thei.jpg",
        venue: "Chai Wan and other campuses",
        category: "Business Information System",
        course: "BA(Hons) in Applied and Human-Centered Computing",
        university: "N/A",
        mode: "Part Time",
        qf: 5,
        duration: 48,
        tuition: 2605.00,
        intake: "28/2/2023",
        start: "2023",
        assessment: "",
        modules: "Year 3: Mobile Applications Development, Game Engines & Game Development, Advanced Database Systems, Network Switching & Routing, Cloud Computing, Enterprise Architecture & System Development, Work-integrated Learning, General Education Core. Module: Chinese 2, General Education Core Module: English for Academic Studies 2, General Education Core Module: English for Professional Purposes, General Education Elective Module 3, Program Elective Module 1. Year 4: Cybersecurity Operations, Machine Learning, Data Science, Modern Web Technology &        Development, Enterprise Network Technologies, Advanced Topics in ICT, Program Elective Module 2, Program Elective Module 3, Final Year Project 1, Final Year Project 2, General Education Elective Module 4",
        link: "https://comp.hsu.edu.hk/en/computing-degree/programme-structure/"
    },
    {
        id: 17,
        college: "Thei",
        logo: "thei.jpg",
        venue: "Chai Wan and other campuses",
        category: "Business Information System",
        course: "BA(Hons) in Applied and Human-Centered Computing",
        university: "N/A",
        mode: "Full Time",
        qf: 5,
        duration: 24,
        tuition: 2605.00,
        intake: "28/2/2023",
        start: "2023",
        assessment: "",
        modules: "Year 3: Mobile Applications Development, Game Engines & Game Development, Advanced Database Systems, Network Switching & Routing, Cloud Computing, Enterprise Architecture & System Development, Work-integrated Learning, General Education Core. Module: Chinese 2, General Education Core Module: English for Academic Studies 2, General Education Core Module: English for Professional Purposes, General Education Elective Module 3, Program Elective Module 1. Year 4: Cybersecurity Operations, Machine Learning, Data Science, Modern Web Technology &        Development, Enterprise Network Technologies, Advanced Topics in ICT, Program Elective Module 2, Program Elective Module 3, Final Year Project 1, Final Year Project 2, General Education Elective Module 4",
        link: "https://comp.hsu.edu.hk/en/computing-degree/programme-structure/"
    },
    {
        id: 18,
        college: "HKMA",
        logo: "hkma.png",
        venue: "CauseWay Bay",
        category: "Business Information System",
        course: "BSc(Hons) Information Technology and Business Information Systems",
        university: "Middlesex University London, United Kingdom",
        mode: "Part Time",
        qf: "N/A",
        duration: 12,
        tuition: 62800.00,
        intake: "30/12/2022",
        start: "28/1/2023",
        assessment: "Coursework, Examination",
        modules: "Strategic Information Systems (Exterprise Project) Management, Business Intelligence, Individual Project, User Experience Design.",
        link: "https://www2.hkma.org.hk/modular/bis/"
    },
    {
        id: 19,
        college: "HKCT",
        logo: "hkct.png",
        venue: "",
        category: "Computer Science",
        course: "BSc (Hons) Computing",
        university: "Leeds Beckett University",
        mode: "Part Time",
        qf: "N/A",
        duration: 16,
        tuition: 61920.00,
        intake: "2023",
        start: "9/2023",
        assessment: "Assignments, Examinations, Projects",
        modules: "Production Project (Double Modules) , Advanced Databases Systems , Advanced Software Engineering , Developing Mobile Applications, Digital Security",
        link: "https://hkctpts.edu.hk/en/programmes/information-technology/computing-y3"
    },
    {
        id: 20,
        college: "HKCT",
        logo: "hkct.png",
        venue: "",
        category: "Computer Science",
        course: "BSc (Hons) Computing",
        university: "Leeds Beckett University",
        mode: "Full Time",
        qf: "N/A",
        duration: 12,
        tuition: 61920.00,
        intake: "2023",
        start: "9/2023",
        assessment: "Assignments, Examinations, Projects",
        modules: "Production Project (Double Modules) , Advanced Databases Systems , Advanced Software Engineering , Developing Mobile Applications, Digital Security",
        link: "https://hkct.edu.hk/en/programmes/information-technology/Bachelor-Degree-computing-y3"
    },
    {
        id: 21,
        college: "Hang Seng University",
        logo: "hsu.jpg",
        venue: "Sha Tin",
        category: "Computer Science",
        course: "BSc (Hons) in Applied Computing",
        university: "N/A",
        mode: "Full Time",
        qf: "N/A",
        duration: 48,
        tuition: 0,
        intake: "2023",
        start: "2023",
        assessment: "",
        modules: "Year 1: Programming Methodology, Programming and Data Structures, Computer System, Contemporary Information Technologies. Year 2: Computer Network, Discrete Mathematics and Algorithms, Database Design and Management, Graphic and Digital Design, Advanced Programming. Year 3: AI, Compuing Technologies in Web Applications, Software Engineering, Human-Computer Interaction, Professionalism and Ethics in Computing, Major Elective 1 and 2. Year 4: Senior Project (2 semesters), User Experience Designs, Major Elective 3 and 4.",
        link: "https://comp.hsu.edu.hk/en/computing-degree/program-structure-21/"
    },
    {
        id: 22,
        college: "Hang Seng University",
        logo: "hsu.jpg",
        venue: "Sha Tin",
        category: "Business Information System",
        course: "BSc (Hons) in Applied and Human-Centred Computing",
        university: "N/A",
        mode: "Full Time",
        qf: "N/A",
        duration: 48,
        tuition: 0,
        intake: "2023",
        start: "2023",
        assessment: "",
        modules: "Year 1: Programming Methodology, Programming and Data Structures, Computer System. Year 2: Computer Network, Discrete Mathematics and Algorithms, Database Desgin and Management, Graphic and Digital and Management, Graphic and Digital Design. Year 3: Computing for Web Application, Software Engineering, Human-Computer Interaction, Professionalism and Ethics in Computing, Digital Humanities and Chinese Computing, Major Elective 1-3. Year 4: Senior Project (2 semesters), User Experience Designs, Internet Culture, Major Elective 4-6.",
        link: "https://comp.hsu.edu.hk/en/computing-degree/program-structure-21/"
    },
    {
        id: 23,
        college: "Unisoft",
        logo: "unisoft.jpg",
        venue: "",
        category: "Computer Science",
        course: "BSc (Hons) of Computing",
        university: "University of Greenwich",
        mode: "Part Time",
        qf: "N/A",
        duration: 8,
        tuition: 60000.00,
        intake: "2/2023",
        start: "9/2023",
        assessment: "Examination, assignments",
        modules: "Human Computer Interaction and Design, Requirements Management, Mobile Application Design and Development, Database Management & Administration, Practical Project",
        link: "https://www.uec.edu.hk/greenwich-degree"
    },
    {
        id: 24,
        college: "HKMU",
        logo: "hkmu.png",
        venue: "",
        category: "Business Information System",
        course: "Bachelor of Computing with Honours in Internet Technology (BCOMPHIT)",
        university: "University of Greenwich",
        mode: "Part Time",
        qf: "N/A",
        duration: 8,
        tuition: 0,
        intake: "2023",
        start: "2023",
        assessment: "",
        modules: "Introduction to Information and Communication Technology, A Foundation in Pure Mthematics, English and Communications for Business I, Information Technology for Learning, Introduction to Internet Services and Applications, English for Effective Communication I: Listening and Speaking, English for Effective Communication I: Reading and Writing, Computing Fundamentals with Java, Computer Programming and Problem Solving, Computer Architecture and Operating Systems, Discrete Structures, Advanced Java Programming and Mobile Application Development, Software Engineering and Project Management, Relational DataBase : Theory and Practice, Networking Applications and Electronic Commerce, Internet Technology for Business Applications, Computer Networks, Networks and Distributed Systems, Machine Learning and Applications, Applied Computing Project, Web Site Desing, Fundamentals of Communications Technology, Quality Management for Science and Technology, Safety and Reliability for Science and Technology.",
        link: "https://www.hkmu.edu.hk/st/computing/programmes/part-time/undergraduate/",
    },
    {
        id: 25,
        college: "HKMU",
        logo: "hkmu.png",
        venue: "",
        category: "Network & Security",
        course: "Bachelor of Science (Hons) in Computing and Networking (BSCHCN)",
        university: "University of Greenwich",
        mode: "Part Time",
        qf: "N/A",
        duration: 8,
        tuition: 0,
        intake: "2023",
        start: "2023",
        assessment: "",
        modules: "A foundation in Pure Mathematics, English and Communications for Business I, Information Technology for Learning, Introduction to Interenet Services and Applications, Network Programming and Design, Computing Fundamentals with Java, Computer Projgramming and Problem Solving, Computer Architecture and Operating Systems, Computer Networks, Software Engineering and Project Management, Advanced Java Programming and Mobile Application Development, Relational Database: Theory and Practice, Machine Learning and Applications, Applied Computing Project, Networks and Distributed Systems, Computers and Processors, Information Theory and Digital Communications, Quality Management for Science and Technology, Safety and Reliability for Science and Technology, Networking Applications and Electronic Commerce, Advanced Electronic Commerce.",
        link: "https://www.hkmu.edu.hk/st/computing/programmes/part-time/undergraduate/"
    },
    {
        id: 26,
        college: "HKIT",
        logo: "hkit.jpg",
        venue: "",
        category: "Business Information System",
        course: "BSc (Hons) Computing",
        university: "Glyndwr University",
        mode: "Part Time",
        qf: 5,
        duration: 12,
        tuition: 59800.00,
        intake: "2023",
        start: "2023",
        assessment: "Assignment",
        modules: "Year 1: Computer systems, Managing Data, Web Design & Development, Game Asset Development, Problem Solving with Programming, Information and System Engineering. Year 2: Responsible Computing, Group Project, Internet & Mobile Applications Development, User Experience Design, Databases and Web-based Information Systems, Applied Programming, Responsible Computing. Year 3: Distributed Data and Data Analytics, Advanced Mobile Development, IT Project Management, Future Technologies, Project.",
        link: "https://www.hkit.edu.hk/en/degree_gu.php?pgm=GUC&info=info"
    },
    {
        id: 27,
        college: "HKIT",
        logo: "hkit.jpg",
        venue: "",
        category: "Business Information System",
        course: "BSc (Hons) Computing",
        university: "Glyndwr University",
        mode: "Full Time",
        qf: 5,
        duration: 8,
        tuition: 59800.00,
        intake: "2023",
        start: "2023",
        assessment: "Assignment",
        modules: "Year 1: Computer systems, Managing Data, Web Design & Development, Game Asset Development, Problem Solving with Programming, Information and System Engineering. Year 2: Responsible Computing, Group Project, Internet & Mobile Applications Development, User Experience Design, Databases and Web-based Information Systems, Applied Programming, Responsible Computing. Year 3: Distributed Data and Data Analytics, Advanced Mobile Development, IT Project Management, Future Technologies, Project.",
        link: "https://www.hkit.edu.hk/en/degree_gu.php?pgm=GUC&info=info"
    },
    {
        id: 28,
        college: "HKIT",
        logo: "hkit.jpg",
        venue: "",
        category: "Cyber Security",
        course: "BSc (Hons) Cyber Security",
        university: "University of West London",
        mode: "Part Time",
        qf: 5,
        duration: 12,
        tuition: 76000.00,
        intake: "2/2023",
        start: "2023",
        assessment: "Assignment",
        modules: "Year 1: Computer Architecure, Mathematics for Computing, Programming, Cyber Security for Society, Algorithms and Data Types, Information Systems and Databases. Year 2: Applied Cryptography, Theory of Computation, Artificial Intelligence, Network and Security, Cyber Threat Analysis, Group Research Project. Year 3: Project (over 2 semesters), Enterprise Security Management, Cyber Crime, Advanced Topics in Cyber Security, Machine Learning.",
        link: "https://www.hkit.edu.hk/en/degree_uwl.php?pgm=uwlbs"
    },
    {
        id: 29,
        college: "HKIT",
        logo: "hkit.jpg",
        venue: "",
        category: "Cyber Security",
        course: "BSc (Hons) Cyber Security",
        university: "University of West London",
        mode: "Full Time",
        qf: 5,
        duration: 12,
        tuition: 76000.00,
        intake: "2/2023",
        start: "2023",
        assessment: "Assignment",
        modules: "Year 1: Computer Architecure, Mathematics for Computing, Programming, Cyber Security for Society, Algorithms and Data Types, Information Systems and Databases. Year 2: Applied Cryptography, Theory of Computation, Artificial Intelligence, Network and Security, Cyber Threat Analysis, Group Research Project. Year 3: Project (over 2 semesters), Enterprise Security Management, Cyber Crime, Advanced Topics in Cyber Security, Machine Learning.",
        link: "https://www.hkit.edu.hk/en/degree_uwl.php?pgm=uwlbs"
    },
];

const coursesContainer = document.querySelector(".courses");
const courseType = document.querySelector(".courseType");
const categoriesContainer = document.querySelector(".courseSubject");
const searchInput = document.querySelector(".search");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayCourses = (filteredCourses) => {
    coursesContainer.innerHTML = filteredCourses.map((course) =>
        `
    <div class="course">
        <img class="uLogo" src="./images/${course.logo}" alt="Logo"/>
        <div class="uDetails">
            <span class="uCollege">Collegue Name: ${course.college}</span>
            <span class="uVenue">Venue: ${course.venue}</span>
            <span class="uCategory">Category: ${course.category}</span>
            <span class="uCourseName">Course Name: ${course.course}</span>
            <span class="uCoUniversity">Co-operated University: ${course.university}</span>
            <span class="uMode">Mode: ${course.mode}</span>
            <span class="uQFLevel">QF Level: ${course.qf}</span>
            <span class="uDuration">Period: ${course.duration} months</span>
            <span class="uTuitionFee">Tuition Fee: $${course.tuition}</span>
            <span class="uNextIntake">Next intake: ${course.intake}</span>
            <span class="uStartDate">Start date: ${course.start}</span>
            <span class="uAssessment">Assessment: ${course.assessment}</span>
            <span class="uModules">Modules: ${course.modules}</span>
            <span class="uLink">Website: <a href="${course.link}">Link</a></span>
        </div>
    </div>
    `
    ).join("");
};

const setCourseType = () => {
    courseType.addEventListener("click", (e) => {
        const selectedType = (e.target.textContent);
        selectedType === "All" ? displayCourses(data) : displayCourses(data.filter((item) => item.mode === selectedType));
    });
};

const setCourseSubject = () => {
    const allCats = data.map(item => item.category);
    const categories = ["All", ...allCats.filter((item, i) => {
        return allCats.indexOf(item) === i; 
    })];

    categoriesContainer.innerHTML = categories.map(cat =>
        `
            <span class="cat">${cat}</span>
        `    
    ).join("");

    categoriesContainer.addEventListener("click", (e) => {
        const selectedCat = (e.target.textContent);

        selectedCat === "All" ? 
        displayCourses(data) 
        : displayCourses(data.filter((item) => item.category === selectedCat
        ));
    });
};

searchInput.addEventListener("keyup",(e) => {
    const value = e.target.value.toLowerCase();

    if(value) {
        displayCourses(data.filter(item => item.course.toLowerCase().indexOf(value) !== -1))

    } else {
        displayCourses(data);
    }

});

const setPrices = () => {
    const priceList = data.map((item) => item.tuition);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);

    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "$" + maxPrice;

    priceRange.addEventListener("input",(e) => {
        priceValue.textContent = "$" + e.target.value;
        displayCourses(data.filter((item) => item.tuition <= e.target.value));
    })
};

displayCourses(data);
setCourseType();
setCourseSubject();
setPrices();