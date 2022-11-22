import React from 'react';
import style from './home.module.css';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate("/");
  return (    
    <div className={style.container}>
        <h1 className={style.h1}>Contact Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus beatae saepe numquam praesentium nobis perferendis, alias dolorem, culpa voluptatibus odit doloribus sed necessitatibus veniam dolore eaque. Voluptate eos qui odit, accusamus iure quae nobis delectus quidem aliquam, quaerat nemo modi ipsa alias aperiam nihil nam vero laborum cumque voluptatibus, sequi necessitatibus. Quod illum mollitia optio quis quo soluta, accusantium aut minus doloribus repellat, distinctio sapiente deserunt ipsum ullam, expedita nulla.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi eum, deserunt, cum et quae ab nemo, quis reiciendis dignissimos maiores ipsam minus omnis vero fugiat architecto explicabo. Ea obcaecati voluptate facilis recusandae rem, fugiat nobis labore, cupiditate quod esse sunt ratione? Dolores voluptatibus non libero asperiores obcaecati labore cum fugit facilis nemo vel commodi, eligendi ex sapiente fuga! Laboriosam, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cum maxime laborum quam molestiae exercitationem nemo dolores enim, id illum.</p>
        <button onClick={() => navigate("/")}>Home</button>
    </div>   
  )
}

export default Contact;