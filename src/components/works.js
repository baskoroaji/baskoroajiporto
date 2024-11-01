// Works.js
import React from 'react';
import WorkItemExperience from './workItem';

const WorksExperience = () => {
  const workData = [
    {
      title: 'BPTI UHAMKA',
      role: 'Front-end Developer',
      duration: 'Jun 2022 - Aug 2022',
      description: 'An intership for BPTI UHAMKA',
      techstack: 'Javascript, ReactJS, NextJS, Laravel, MySQL, Bootstrap',
      duties: [
        'Developing a prototype for the uhamka.ac.id homepage using Javascript NextJS Framework server-side rendering to improve client-side performance',
        'Consuming API for developing the homepage using server-side rendering to improve user experience and dynamic data from MySQL database',
        'Contributing to help other workmate creating responsive UI using NextJS',
        'Fix UI on news section and authentication login page'
      ],
    },
  ];

  return (
    <section className="bg-gray-900 py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-white mb-10">Works</h2>
        {workData.map((work, index) => (
          <WorkItemExperience key={index} {...work} />
        ))}
      </div>
    </section>
  );
};

export default WorksExperience;
