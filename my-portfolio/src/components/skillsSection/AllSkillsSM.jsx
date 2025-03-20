import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCSharp } from "react-icons/tb";
import { PiFileSqlFill } from "react-icons/pi";
import { FaAngular } from "react-icons/fa";
import { VscAzureDevops } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";

const skills = [
    {
      skill: "HTML",
      icon: FaHtml5,
    },
    {
      skill: "CSS",
      icon: FaCss3Alt,
    },
    {
      skill: "ReactJS",
      icon: FaReact,
    },
    {
      skill: "Redux",
      icon: SiRedux,
    },
    {
      skill: "NextJS",
      icon: SiNextdotjs,
    },
    {
      skill: "TailwindCSS",
      icon: RiTailwindCssFill,
    },
    {
      skill: "C#",
      icon: TbBrandCSharp,
    },
    {
      skill: "SQL",
      icon: PiFileSqlFill,
    },
    {
      skill: "Angular",
      icon: FaAngular,
    },
    {
      skill: "Azure",
      icon: VscAzureDevops,
    },
    {
      skill: "AWS",
      icon: FaAws,
    },
  ];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
            <div key={index} className="flex flex-col items-center">
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
            </div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
