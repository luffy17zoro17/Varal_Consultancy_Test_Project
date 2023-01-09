
import "./FourthPage.css";
import Arrow from "../Images/Vector.png";
import HowToImg from "../Images/Vector-4.png";

import Final_Part from "./FinalPart";

const FourthPage = () => {
    return (
      <div className="fourthPage_body">
        <div className="fourthPage_innerBody">
            <p className="services_para">
              We have gathered a team of 
              professionals to craft adequate
              services you can rely on for a 
              friction free setup in UAE.
              <span className="services_bottomHeader">
                <span className="services_learnMore">
                   More about our services 
                <img src={Arrow} height="20px" width="20px"/>
                </span> 
              </span>  
            </p>

            <div className="pricing_desktop">
            <p className="pricing_inner">Most <span>popular affordable pricing</span> per jurisdictions
              are brought to you to kick off your adventure.
            </p>
            </div>

            <div className="services_imageBody">
            <img src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
               
                className="services_image"
                height="372px"
                width="372px"
            />
            </div>

          <div className="fourthPage_secondHalf">
            <div className="ReadAbout_content">
               <hr/> <h5 className="ReadAbout_heading">
                 Read about our blogs for more<br/>
                  information on our processes
               </h5> 
            </div>

            <div className="inner_contentBody">
                <div className="inner_contentss">
                  <div className="horiz">
                  <img 
                    src={HowToImg}
                    className="howTo_img"
                    height="30px"
                    width="30px"
                  />
                 <div className="howTo_one">
                   How to start a company<br/>
                   formation in Dubai 
                 <h5 className="minutes">5 Minutes</h5>
                 </div>
                 </div>

                 <div className="horiz">
                 <img 
                    src={HowToImg}
                    className="howTo_img"
                    height="30px"
                    width="30px"
                  />
                 <div className="howTo_one">
                   How to start an Offshore<br/>
                   company formation in Dubai
                 <h5 className="minutes">5 Minutes</h5>
                 </div>
                </div>
            </div>
          </div> 
          <div className="Satisfied_content">
               <hr/> <h5 className="Satisfied_heading">
                Satisfied We are When Our<br/>
                Customers Are Happy
                
               </h5> 
          </div>
             
        </div>

       <Final_Part/> 
      </div>  
     </div> 
    );
}

export default FourthPage;