
import './ThirdPage.css';
import Arrow from "../Images/Vector.png";
import AdviceImgOne from "../Images/Group.png";
import BankImgTwo from "../Images/ILLUSTRATION031.png";
import RegistrImgThree from "../Images/Group-1.png";
import VisasImgFourth from "../Images/Group-2.png";


const ThirdPage = () => {
    return (
      <div className="thirdPage_body">
       <div className="thirdPage_innerBodyOne">
       <div className="imgOne_body">
        <div className="blue_circle"/>
        <img
         src={AdviceImgOne}
         className="adviceImg_one"
        />
       </div> 

       <div className="adviceText_body">
         <h1 className="advice_heading">Advice & Guidance</h1>
         <p className="advice_para">
            All activities in the UAE are licensed. Whether
            manufacturing, finance, trading, marketing,
            consultancy or restaurants. In some countries
            only manufacturing is licensed. In others there
            is a threshold below which business are
            encouraged. Get our insightfull guidance
            today.
         </p>
         <h2 className="advice_learnMore">Learn more
         <img src={Arrow} height="20px" width="20px"/></h2>
       </div>
       </div>


       <div className="thirdPage_innerBodyTwo">
       <div className="imgTwo_body">
        <img
         src={BankImgTwo}
         className="bankImg_two"
        />
       </div> 

       <div className="bankText_body">
         <h1 className="bank_heading">Bank Account Setup</h1>
         <p className="bank_para">
            There are many banks in the United Arab
            Emirates [UAE]. Both locally owned and
            branches of multinational ones. Foreign banks
            adjust according to their parent's strategies and
            have changed local requirements overnight in
            the past. But we are here to help you.
         </p>
         <h2 className="bank_learnMore">Learn more
         <img src={Arrow} height="20px" width="20px"/></h2>
       </div>
       </div>



       <div className="thirdPage_innerBodyThree">
       <div className="imgThree_body">
        <img
         src={RegistrImgThree}
         className="registrImg_three"
        />
       </div> 
       <div className="registrText_body">
         <h1 className="registr_heading">Registration Document Preparation</h1>
         <p className="registr_para">
            Several documents must be prepared to start the process of
             registering a new company in the United Arab Emirates. Be it 
             a Dubai local company, a free zone one or an offshore entity. 
             Your registered agent is dedicated to get this done for you 
             for a seamless process. 
         </p>
         <h2 className="registr_learnMore">Learn more
         <img src={Arrow} height="20px" width="20px"/></h2>
       </div>
       </div>




       <div className="fourthPage_innerBodyFourth">
       <div className="imgFourth_body">
        <img
         src={VisasImgFourth}
         className="visasImg_Fourth"
        />
       </div> 

       <div className="visasText_body">
         <h1 className="visas_heading">UAE Company Visas</h1>
         <p className="visas_para">
            Your application for visas is critical
            especially if you intend to move to
            Dubai. This becomes even more urgent if
            your family will also move with you.
            All the paperwork is done on your
            behalf smoothly os that you may only focus 
            on doing what matters most to you. 
         </p>
         <h2 className="visas_learnMore">Learn more
         <img src={Arrow} height="20px" width="20px"/></h2>
       </div>
       </div>
      </div>  
    );
}


export default ThirdPage;