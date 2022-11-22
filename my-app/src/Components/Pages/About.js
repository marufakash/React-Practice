import React, { useState } from 'react';
import style from './home.module.css';
import { BlogsData } from './data';

const About = () => {

  const [blogs, setBlogs] = useState(BlogsData);
  // console.log(blogs)

  return (
    <div className={style.container}>
        <h1 className={style.h1}>About Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus beatae saepe numquam praesentium nobis perferendis, alias dolorem, culpa voluptatibus odit doloribus sed necessitatibus veniam dolore eaque. Voluptate eos qui odit, accusamus iure quae nobis delectus quidem aliquam, quaerat nemo modi ipsa alias aperiam nihil nam vero laborum cumque voluptatibus, sequi necessitatibus. Quod illum mollitia optio quis quo soluta, accusantium aut minus doloribus repellat, distinctio sapiente deserunt ipsum ullam, expedita nulla.</p>
        {blogs.map((blog) => 
          <article key={blog.id}>
              <h3>{blog.title}</h3>
              <p>{blog.body}</p>
          </article>
        )}
    </div>
  )
}

export default About;