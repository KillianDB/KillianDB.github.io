import './ProjectContent.css'
import ImgProject from '../assets/img/${linguage}.svg'

function ProjectContent({project}) {
  return(
    <>
                                        <div class="container cardProject"> 
                                 <div class="box-img"> 
                                     <ImgProject/> 
                                 </div> 
                                 <div class="info-content"> 
                                     <p class="h1 titleProject">{project.title}</p> 
                                     <p class="h6 descriptionProject"> 
                                         {Project.description}
                                     </p> 
                                     <ul class="technologiesProject"> 
{/*                                      //fazer .map */}
                                       {/* {for(i=0;i>project.legth(); i++) {                               <li>{project.tech}</li> } */}
                                     </ul> 
                                         <a href={project.link} target="_blank"> See more</a>
         <a href={project.repo} target="_blank"> Repository</a>                             
                                           </div>
                                          </div>
                                   
              </>
  )

}

export default ProjectContent
