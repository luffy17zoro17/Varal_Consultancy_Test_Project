
import "./SecondPage.css";

import playImg from "../Images/Group117.png";
import DungeonImg from "../Images/dungeon.png";
import CrownImg from "../Images/Vector-2.png";
import OffshorImg from "../Images/Vector-1.png";



const SecondPage = () => {
    return (
      <div className="secondPage_body">
         <div>
           <p className="violet_para">
            Watch the video about UAE or
            Offshore Company Registration</p>
            <img 
              className="play_img"
              src={playImg}
              height="30px"
              width="30px"
              alt="group117"
            />  
         </div>
         <div className="textbody_one">
           <h1 className="heading_one"><span className="headingone_underline">Dedicated</span><br/>
             to our mission we are
           </h1>
           <p className="para_one">Our service include Company Formation &
            Renewals, Trust & Fiduciary, Tax Residency<br/>
            Setup with Family, Bank Accounts, Remote<br/>
            Management, Stock Trading Platforms, Ownership Solutions.</p>
         </div>


          <div className="desktop_horizontal">
         <div className="textbody_two">
           <img
             src={DungeonImg}
             height="35px"
             width="35px"
             alt="dungeon"
             className="img_two"
           />
           <h1 className="heading_two">UAE Free Zone Company</h1>
           <p className="para_two">Your registration agent, will answer all<br/>
             of your questions and help you to reach<br/>a conclusion that
             meets your objectives<br/>of investing in the UAE.   
            </p>
            <h3 className="bottomHeading_two">Get Started</h3>
         </div>



         <div className="textbody_three">
           <img
             src={CrownImg}
             height="35px"
             width="35px"
             alt="dungeon"
             className="img_three"
           />
           <h1 className="heading_three">Dubai Local Companies</h1>
           <p className="para_three">The Dubai LLC formation documents<br/>
              are actually articles of organization or a<br/>
              certificate of organization. You can get yours today.   
            </p>
            <h3 className="bottomHeading_three">Get Started</h3>
         </div>


         <div className="textbody_four">
           <img
             src={OffshorImg}
             height="35px"
             width="35px"
             alt="dungeon"
             className="img_four"
           />
           <h1 className="heading_four">Offshore Companies</h1>
           <p className="para_four">The can register an offshore company<br/>
              and open its bank account in Dubai.<br/>
              Your agent will help you along all the<br/>process
            
            </p>
            <h3 className="bottomHeading_four">Get Started</h3>
         </div>
         </div>

         <div className="finalContent_five">
           <p className="finalPara_five">Learn the ways in which you can benefit from a<br/>
           UAE/Offshore Company. Then get started on<br/>
           fulfilling your UAE dream.</p>
           <h3 className="finalHeading_five">Claim a Free Quote</h3>

         </div>
      </div>  
    );
}

export default SecondPage;