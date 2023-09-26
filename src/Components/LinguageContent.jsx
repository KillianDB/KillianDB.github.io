import './LinguageContent.css'
import ImgLinguage from '../assets/img/${linguage}.svg'

function LinguageContent({linguage}) {
  return(
    <>
            <div class="linguageContent"> 
                 <ImgLinguage/> 
                 //fazer .map
                 <div class="linguageDescription"> 
                 <h2>{linguage.name}</h2> 
                 <p>{linguage.description}</p> 
             </div> 
             </div>
              </>
  )

}

export default LinguageContent