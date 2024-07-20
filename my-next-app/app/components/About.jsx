"use client";
import React, { useTransition, useState } from "react";
// import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
         <li>C/C++</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Mongodb</li>
      </ul>
    ),
  },
  {
    title: "Coding Profile",
    id: "coding",
    content: (
      <ul className="list-disc pl-2">
        <li><a href="https://leetcode.com/u/priyajit27/">LeetCode</a></li>
        <li><a href="https://www.geeksforgeeks.org/user/priyajitpaul27/">GFG</a></li>
        <li><a href="https://www.naukri.com/code360/profile/36bd929d-8f48-43c7-9640-e24903b2154b">Coding Ninjas</a></li>
        <li><a href="https://www.codechef.com/users/priyajit27">Codechef</a></li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>NIT Silchar</li>
        <li>Ramanuj Gupta Junior College</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/herooo.jpeg" width={500} height={500}  style={{ borderRadius: '5%' }}/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a Final year Undergraduate persuing B.Tech in Computer Science and Engineering from NIT Silchar. Skilled in C, C++, Javascript. Having a good hold on Data Structure and Algorithms with 800+ questions on LeetCode, GFG, Coding Ninjas, Codechef. Also, a full-stack web developer and blockchain enthusiast who loves to solve real life problems with modern technologies.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("coding")}
              active={tab === "coding"}
            >
              {" "}
              Coding Profile{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
