import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "The Brogram",
    year: "Ultimate place to track your workout and turn you into a GymBro",
    align: "right",
    image: "../../images/brogram.png",
    link: "https://brogram-workouts.netlify.app",
  },
  {
    name: "Anvit's Marketplace",
    year: "A place to sell all the products that I envisgn in future",
    align: "left",
    image: "../../images/website-img-2.webp",
    link: "#",
  },
  {
    name: "My Subscription tracker",
    year: "Track all your subscription to know your yearly expenses on entertainment",
    align: "right",
    image: "../../images/website-img-3.jpg",
    link: "#",
  },
  // {
  //   name: "Bank of Luck",
  //   year: "May2024",
  //   align: "left",
  //   image: "../../images/website-img-4.jpg",
  //   link: "#",
  // },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
