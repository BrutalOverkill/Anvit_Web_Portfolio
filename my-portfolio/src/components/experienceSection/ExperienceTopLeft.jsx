import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300 px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">Since 2018</p>
      <div className="font-bold text-6xl text-lightBrown">
        <ExperienceInfo number="6" text='Years'/>
        <p>-</p>
        <ExperienceInfo number="4" text='Real World Apllications'/>
      </div>
      <p className="text-center text-white">With 6 years of experience building dynamic,scalable and user-friendly Web Application from front-end to back-end.</p>
      <ExperienceInfo number="$100k" texr='Max Budget'/>
    </div>
  )
}

export default ExperienceTopLeft