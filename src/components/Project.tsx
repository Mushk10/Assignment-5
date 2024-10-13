import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: "Calculator",
        desc: "A typescript and javascriptbase calculator",
        img: "/1.png",
        tags: ["Typescript" , "Javascript" , "Python"],
    },
    {
        id: 1,
        title: "ID CARD",
        desc: "A simple student ID card in which i use next.js , tailwind css",
        img: "/2.png",
        tags: ["Next.js","Tailwind CSS","Tpescript"]
    },
    {
        id: 2,
        title: "Registration form",
        desc: "A registrantion form using HTML",
        img: "/3.png",
        tags: ["HTML","Typescript","javascript"]
    },
];

const Project = () => {
  return (
    <div id='project' className='container pt-32'>
      <Heading title='MY PROJECTS' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center '>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Project
