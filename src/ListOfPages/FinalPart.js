import "./FinalPart.css";

import ProfileQuotes from "../Images/Vector-3.png";


const Final_Part = () => {

    return (
        <div className="final_part">
        <div className="inner_contentss">
          <div className="horiz">
            
          <div className="profileImg_align">
          <img 
            src={ProfileQuotes}
            className="quotes_img"
            height="26px"
            width="26px"
          />
          <hr className="xLine"/>
          </div>
         <div className="quote_para">
         <span className="quotes">&ldquo;</span>Iam very happy with them.I&apos;ll<br/>
           continue to use their services in
           future & highly recommend them
           to anyone.<span className="quotes">&ldquo;</span>
            
         <h5 className="names">Muhib Abrar</h5>
         </div>
         </div>

         <div className="horiz">
         <div className="profileImg_align"> 
         <img 
            src={ProfileQuotes}
            className="quotes_img"
            height="26px"
            width="26px"
          />
          <hr className="xLine"/>
          </div>
         <div className="quote_para">
           <span className="quotes">&ldquo;</span>Rama has a high level of integrity,<br/>
           intellect, knowledge of his<br/>
           business, resourcefulness and<br/>
           humanity. <span>&ldquo;</span>
           
         <h5 className="names">Colin Saldahna</h5>
         </div>
        </div>
       
    </div>
  </div>
    );
}

export default Final_Part;
