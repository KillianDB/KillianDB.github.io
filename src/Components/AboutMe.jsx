import './AboutMe.css'
import ImgHello from '../assets/img/hello-word.gif'

function AboutMe() {
  return(
    <>
            <div class="aboutMe"> 
         <div class="textAbout"> 
         <h1>About me</h1> 
         <p>"I'm a young student of software engineering, eager to enhance my skills as a developer. My passion lies in continuous learning and coding (and dancing too!). Currently, I'm enrolled in three free courses focused on Golang, Python, and React. I have a background in full-stack web development, specializing in JavaScript. During my web development course, I gained proficiency in HTML, CSS, MySQL, jQuery, Bootstrap, EJS, ReactJS, Node.js, Express, and JavaScript. 
  
             One of the highlights of my course was the completion of a final project. Working collaboratively with a team of students, we built an e-commerce platform using EJS and SQL, following the Scrum methodology. In this project, I had the opportunity to take on the role of Product Owner for one sprint, effectively managing the project's direction and requirements. 
  
             I'm continuously seeking new opportunities to expand my knowledge and contribute to innovative projects within the software engineering field."</p> 
            </div>  
            <ImgHello/> 
         </div>
              </>
  )
}

export default AboutMe;