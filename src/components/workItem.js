import React from 'react'

const WorkItemExperience = ({ title, role, techstack, description, duties, siteUrl, images, duration}) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center mb-6">
          <div className="ml-6 flex-grow">
            <h3 className="text-xl font-bold mb-1">{title} <span role="img" aria-label="icon">🚀</span></h3>
            <p className="text-sm text-white-500 mb-1">{role} | {duration} | {techstack}</p>
            <p className="text-white-700 mb-3">{description}</p>
            <ul className="list-disc list-inside text-white-700 mb-3">
              {duties.map((duty, index) => (
                <li key={index}>{duty}</li>
              ))}
            </ul>
          </div>
          </div>
    )
}

export default WorkItemExperience;