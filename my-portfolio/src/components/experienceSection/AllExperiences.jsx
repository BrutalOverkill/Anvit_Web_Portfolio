import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job:'Software Engineer Trainee',
    company:'Shriram Value Services',
    date:'July 2018-July 2019',
    responsibilties:[
      "Understanding the requirement from the product team.",
      "Implementing the various frontend features using HTML,CSS and JavaScript.",
      "Back End development of features using ASP.NET.",
      "Data Manipulation and Retreival using SQL."
    ],
  },
  {
    job:'Software Engineer',
    company:'Novac Technology Solutions',
    date:'August 2019-October 2022',
    responsibilties:[
      "Understanding the requirement from the product team.",
      "Implementing the various frontend features using HTML,CSS and JavaScript.",
      "Back End development of features using ASP.NET.",
      "Data Manipulation and Retreival using SQL."
    ],
  },
  {
    job:'Full Stack Developer',
    company:'Octagos Health Pvt. Ltd',
    date:'October 2022-Present',
    responsibilties:[
      "Implementing reusable components.",
      "Working on various features for the Product using Angular,React and modern Javascript.",
      "Using .net Core to implement scalability and back end of the Apllication.",
      "Deployment of the Application through Azure.",
      "Automating the data reading and mining through Robotic Automation Process(RPA)."
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => (
  <div key={index} className="flex items-center">
    <SingleExperience experience={experience} />
    {index < experiences.length - 1 && (
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
      </motion.div>
    )}
  </div>
))}
    </div>
  );
};

export default AllExperiences;