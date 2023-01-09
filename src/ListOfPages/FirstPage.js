
import "./FirstPage.css";
import FirstPageImg from "../Images/ILLUSTRATION.png";


const FirstPage = () => {
    return (
     <div className="firstPage_body">  
      <div className="heading_body">
        <h1 className="heading1">Claim a Free Quote</h1>
        <h2 className="heading2">
            <span>Get started</span> on fulfilling<br/>
            your Dubai or UAE dream.
        </h2>
      </div>  
       <div>
          <img
            src={FirstPageImg}
            height="300px"
            width="400px"
            className="first_image"
            alt="illustration"
          />
       </div>
       <h1 className="bottom_heading">UAE & Offshore Company</h1>
       <p className="bottom_para">We provide you with information about UAE
        or Offshore Company Registration & help you setup
       your company with a bank account and visas.</p>

       <div className="button_body">
         <span className="button_l">Start a Company</span>
         <span className="button_r">Renew a Company</span>
       </div>
     </div> 
    );
}

export default FirstPage;