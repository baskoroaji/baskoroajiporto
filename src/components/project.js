// Works.js
import React from 'react';
import WorkItem from './projectItem';

const Works = () => {
  const workData = [
    {
      title: 'Data Analytic and Statistic Discord Bot',
      role: 'Software engineer',
      description: 'A collaborative project with my friends to create a Discord bot for data analytic and statistic for the sub-community granblue fantasy',
      techstack: 'Python, Dataframe, Pandas, Matplotlib',
      duties: [
        'Developed a Discord bot for data analytic and statistic',
        'Implemented features such as data visualization, data cleaning, and data from crude API crude data',
        'Collaborated with other developers to ensure the bot functionality and user experience',
      ],
      siteUrl: '#',
      blogUrl: '#',
      images: [
        'https://jie25.s-ul.eu/rY0B6SSD',
        'https://jie25.s-ul.eu/2LF8RTm0',
        'https://jie25.s-ul.eu/PT77nvnH',
      ]
    },
    {
      title: 'Spring Boot Forum Rest API Backend',
      role: 'Backend Developer',
      description: 'Spring Rest API with JWT authentication for forum application',
      techstack: 'Java, Spring Boot, Spring Security, JWT, mysql,docker,MailDev',
      duties: [
        'Developed a REST API backend for forum application',
        'Implemented features such as user registration, login, and forum posting',
        'Implemented Comment for each forum posting',
        'Implemented Clean Code and Architecture',
        'Dockerize the Application',
        'Use MailDev as email server for account activation',
      ],
      siteUrl: 'https://github.com/baskoroaji/harianwibu',
      images: [
        'https://jie25.s-ul.eu/wWpkRm5n',
        'https://jie25.s-ul.eu/1xNARHVP',
        'https://jie25.s-ul.eu/bpD9WPVv',
        'https://jie25.s-ul.eu/cAQdQ0dt',
        'https://jie25.s-ul.eu/ZKIDQgTH',
        'https://jie25.s-ul.eu/PTOKnUwf'

      ]
    },
  ];

  return (
    <section className="bg-gray-900 py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-white mb-10">Project</h2>
        {workData.map((work, index) => (
          <WorkItem key={index} {...work} />
        ))}
      </div>
    </section>
  );
};

export default Works;
