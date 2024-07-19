"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Chatterly application",
    description: "A chat website to connect and chat with friends in real-time on our site through email. Join various chat groups or start private conversations for a fun and engaging experience.",
    image: "/images/projects/1.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/priyajit27/Chatterly-application",
    previewUrl: "https://chatterly-application.netlify.app/",
  },
  {
    id: 2,
    title: "AgroBuddy (Solving for India Hackathon - GFG)",
    description: "A comprehensive agrotech solution providing farmers with essential crop details for informed decision-making and improved productivity.",
    image: "/images/projects/2.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Raj217/agro-buddy",
    previewUrl: "https://agrobuddy.netlify.app/",
  },
  {
    id: 3,
    title: "Note-Keeper application",
    description: "A note-taking website where the user can create, customize and organize their notes on personalized e-notebook account. One can write, edit and manage their thoughts effortlessly.",
    image: "/images/projects/3.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/priyajit27/Virtual-Notebook",
    previewUrl: "https://note-keeper-web.netlify.app/",
  },
  {
    id: 4,
    title: "Medicart Application",
    description: "This medical system leverages blockchain technology to address data fragmentation, privacy concerns, and communication inefficiencies. Blockchain ensures secure, tamper-resistant storage and access to comprehensive patient records, thereby enhancing collaboration and safeguarding privacy.",
    image: "/images/projects/4.jpg",
    tag: ["All", "Blockchain"],
    gitUrl: "https://github.com/K2302/Medicart",
    previewUrl: "https://medicart-git-main-k2302.vercel.app/",
  },
  {
    id: 5,
    title: "E-Cell Website",
    description: "The E-Cell NIT Silchar website showcases our initiatives in fostering entrepreneurship and innovation among students.",
    image: "/images/projects/5.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/priyajit27/e-cell-website-22",
    previewUrl: "https://ecellnits.org/",
  },
  {
    id: 6,
    title: "Fund-Management-System",
    description: "The Fund-Management System utilizes blockchain technology to ensure secure, transparent, and efficient handling of financial transactions.",
    image: "/images/projects/6.jpeg",
    tag: ["All", "Blockchain"],
    gitUrl: "https://github.com/Darpan-2002/-Fund-Management-System",
    previewUrl: "https://github.com/Darpan-2002/-Fund-Management-System",
  },
];

const Project = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Blockchain"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Project;
