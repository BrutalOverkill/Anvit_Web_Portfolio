import React from 'react'

export const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
        <h2 className="text-6xl text-cyan mb-10">About Me</h2>
        <p className="text-white">
        Dynamic Full Stack Developer with more than 6 years of experience, 
        adept at transforming complex challenges into scalable and efficient digital 
        solutions. Expertise in crafting high-quality user experiences using HTML, 
        CSS, and JavaScript, complemented by a strong command of AngularJS 
        for front-end development. Also has great command on .NET Framework 
        to provide a solid backend for the Application.Proven track record in 
        improving application architecture and performance, significantly enhancing 
        user engagement and operational efficiency. Proficient in leveraging cloud 
        technologies, particularly Microsoft Azure, to ensure seamless deployment 
        and maintenance of applications. Passionate about automating workflows and 
        implementing microservices that drive innovation and productivity.</p>
        <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">My Projects</button>
    </div>
  )
}

export default AboutMeText;