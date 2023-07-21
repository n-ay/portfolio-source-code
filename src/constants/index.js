import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    c,
    python,
    java,
    sql,
    git,
    figma,
    docker,
    optum,
    meta,
    aws,
    starbucks,
    fanisko,
    carrent,
    jobit,
    tripguide,
    threejs,
    kubernetes,
  } from "../assets";
  

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Development",
      icon: web,
    },
    {
      title: "XR Development",
      icon: mobile,
    },
    {
      title: "Machine Learning",
      icon: backend,
    },
    {
      title: "AR Educator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: c,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
   
    {
      name: "React JS",
      icon: reactjs,
    },
   
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    
    {
      name: "Kubernetes",
      icon: kubernetes,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Associate ProServ Consultant",
      company_name: "Amazon Web Services (AWS)",
      icon: aws,
      iconBg: "#E6DEDD",
      date: "August 2023 - Present",
      points: [
        "Engaged in the 6-month AWS Tech U program, an accelerated workforce development initiative for recent graduates and early career professionals, involving cohort-based training, completion of a specialized curriculum, shadowing AWS experts, receiving coaching, and successfully preparing for and obtaining certifications, including AWS Certified Cloud Practitioner and AWS Certified Solutions Architect Associate.",
      ],
    },
    {
      title: "XR Developer - Intern",
      company_name: "Fanisko",
      icon: fanisko,
      iconBg: "#383E56",
      date: "April 2023 - July 2023",
      points: [
        "Developed an immersive 3D simulated live match in Augmented Reality that enables cricket fans to experience live cricket matches and visualize player stats in real-time in AR, at their convenience.",
        "Implemented plane tracking in AR using WebXR, real-time live cricket data retrieval using Javascript, visualizing data like wagon wheel using three.js, and a captivating user experience using three.js, HTML, and CSS.",
        "Selected as one of the top 100 developers out of 10,000+ applicants for the first edition of the XROS Fellowship program, an initiative of FICCI, supported by Meta and implemented by Reskill.",
      ],
    },
    {
      title: "Software Developer - Intern",
      company_name: "Optum, UnitedHealth Group",
      icon: optum,
      iconBg: "#E6DEDD",
      date: "May 2022 - July 2022",
      points: [
        "Developed and implemented Kubernetes policies for horizontal auto-scaling of various internal micro-services.",
        "Designed and tested server infrastructure using APIs and also evaluated performance on various micro-services using Apache JMeter.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Spark AR Educator",
      company_name: "Reskilll (in partnership with Meta)",
      icon: meta,
      iconBg: "#383E56",
      date: "August 2021 - December 2021",
      points: [
        "Taught and impacted 1300+ students by educating them about Augmented Reality in more than 10 training sessions.",
        "Delivered live training on building Augmented Reality experiences using Meta's Spark AR software.",
        "Organized and judged 5+ AR hackathons to promote Meta Spark AR education in top technical colleges of India.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Few-Shot Food Image recognition using Prototypical Networks",
      description:
        "(Undergraduate Thesis) Implementing a few-shot learning technique using prototypical networks and CNN to accurately classify food images",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pytorch",
          color: "green-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/n-ay",
    },
    {
      name: "Detecting Communities in Large-Scale Dynamic Social Networks",
      description:
        "Network Analysis to detect communities in a social network based on SIR(Susceptible-Infected-Recovered)-like model and K-means greedy clustering.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "numpy",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/n-ay/community-detection",
    },
    {
      name: "3D Simulated Live Match in AR with Interaction",
      description:
        "An immersive 3D simulated live match in Augmented Reality that enables cricket fans to experience live cricket matches and visualize player stats in real-time in AR.",
      tags: [
        {
          name: "three.js",
          color: "blue-text-gradient",
        },
        {
          name: "WebXR",
          color: "pink-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "orange-text-gradient",
        },        
        {
          name: "CSS",
          color: "orange-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/n-ay/3d-live-simulated-match-with-interaction",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };