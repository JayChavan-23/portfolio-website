const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
  const counterItems = [
    { value: 3, suffix: "+", label: "Years of Experience" },
    { value: 200, suffix: "+", label: "LeetCode Questions" },
    { value: 20, suffix: "+", label: "Completed Projects" },
    { value: 1785, suffix: "+", label: "TopCode Rating" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Team Player",
      desc: "Actively collaborating with others to achieve positive results in a supportive atmosphere.",
    },
    {
      imgPath: "/images/time.png",
      title: "Quick Learner",
      desc: "Always eager to learn and apply new concepts and technologies.",
    },
    {
      imgPath: "/images/time.png",
      title: "Robust Code ",
      desc: "Committed to industry best practices,well-structured code that is easy to maintain and understand.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Python Developer",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "Project Manager",
      imgPath: "/images/logos/git.svg",
    },
  ];
  
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python Developer",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Project Manager",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const expCards = [
    {
      review: "The Commonwealth Bank Tech Explorer program provided invaluable insight into the tech roles within the banking industry. The hands-on tasks, especially the iOS widget development, were practical and significantly enhanced my understanding of software engineering.",
      imgPath: "/images/exp1.png",
      logoPath: "/images/logo1.png",
      title: "Commonwealth Bank Tech Explorer Program",
      date: "Date of Completion (e.g., July 2025)",
      responsibilities: [
        "Engaged in a self-paced job simulation covering software engineering, tech analysis, cybersecurity, and data science.",
        "Completed a practical task on building an iOS widget, focusing on iOS development processes and banking app design.",
        "Developed skills in creative planning, design thinking, teamwork, communication, critical thinking, and problem-solving.",
        "Earned a certificate of completion, enhancing resume and LinkedIn profile for future applications."
      ]
    },
    {
      review: "As an AI Research Assistant at the Australian Institute of Machine Learning, I investigated methodologies to enhance Large Language Models' reasoning abilities through in-context learning, conducting research under the guidance of Professor Lingqiao Liu. This role improved my understanding of current Artifical Intelligence research and practical application.",
      imgPath: "/images/exp2.png",
      logoPath: "/images/logo2.png",
      title: "AI Research Assistant",
      date: "Mar 2025 - Nov 2025",
      responsibilities: [
        "Investigated methodologies for enhancing Large Language Models' (LLMs) reasoning abilities through in-context learning.",
        "Conducted research under the guidance of Professor Lingqiao Liu.",
        "Gained hands-on experience in advanced machine learning research and experimental design.",
        "Applied theoretical knowledge to practical challenges in LLM development."
      ]
    },
    {
      review: "At Coles Supermarket, I provided essential front desk support, adeptly resolving customer queries in a fast-paced retail setting and managing complex transactions with professionalism. My role involved logging customer incidents and coordinating effectively with various store teams.",
      imgPath: "/images/exp3.png",
      logoPath: "/images/logo3.png",
      title: "Customer Service Assistant",
      date: "March 2024 - Present",
      responsibilities: [
        "Provided front desk support, resolving customer queries in a fast-paced retail environment.",
        "Logged customer incidents and coordinated with store teams.",
        "Managed returns, complaints, and service desk transactions with professionalism and care."
      ]
    },
    {
      review: "As a Lead Designer Intern at Mama Drones, I played a pivotal role in designing a user-friendly and visually appealing interface for an Agri-tech bot, conducting extensive on-field research and data collection. My efforts led to a significant increase in app downloads and I also contributed to the design of the official company website.",
      imgPath: "/images/exp4.png",
      logoPath: "/images/logo4.png",
      title: "Lead Designer Intern",
      date: "May 2023 – July 2023",
      responsibilities: [
        "Lead designer intern at Mama Drones, a startup focused on creating an Agri-tech bot for Farmer’s Assistant[cite: 25].",
        "Overcame the primary challenge of designing a user-friendly yet visually appealing interface for farmers[cite: 26].",
        "Conducted extensive on-field research, data collection, and created a user-centric app design, resulting in a significant increase in app downloads[cite: 27].",
        "Played a key role in designing Mama Drone's official website[cite: 28]."
      ]
    },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Esther Howard",
      mentions: "@estherhoward",
      review:
        "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
      imgPath: "/images/client1.png",
    },
    {
      name: "Wade Warren",
      mentions: "@wadewarren",
      review:
        "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
      imgPath: "/images/client3.png",
    },
    {
      name: "Guy Hawkins",
      mentions: "@guyhawkins",
      review:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      imgPath: "/images/client2.png",
    },
    {
      name: "Marvin McKinney",
      mentions: "@marvinmckinney",
      review:
        "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
      imgPath: "/images/client5.png",
    },
    {
      name: "Floyd Miles",
      mentions: "@floydmiles",
      review:
        "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
      imgPath: "/images/client4.png",
    },
    {
      name: "Albert Flores",
      mentions: "@albertflores",
      review:
        "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      imgPath: "/images/client6.png",
    },
  ];
  
  const socialImgs = [
    {
      name: "insta",
      imgPath: "/images/insta.png",
    },
    {
      name: "fb",
      imgPath: "/images/fb.png",
    },
    {
      name: "x",
      imgPath: "/images/x.png",
    },
    {
      name: "linkedin",
      imgPath: "/images/linkedin.png",
    },
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };