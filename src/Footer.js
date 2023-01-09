import './Footer.css';
import Email from "./Images/Group34.png";
import Facebook from "./Images/Vector-5.png";
import Instagram from "./Images/Vector-6.png";
import Youtube from "./Images/Vector-7.png";
import LinkedIn from "./Images/Vector-8.png";



const Footer = () => {
    return (
      <div className="footer_outerBody">  
         <div className="GetToKnow_desktop">
               <hr className="blueRuler_desktop"/> <h5 className="ReadAbout_heading">
                 Get to know the whole us and
                  more of our services
               </h5> 
         </div>
      <div className="footer_body">
        <div className="leftPart_body">
        <div className="leftPart_each">
          <h3 className="leftPart_heading">Services</h3>
          <ul className="leftPart_list">
            <li>Products</li>
            <li>Solutions</li>
            <li>Assurance</li>
            <li>FAQ</li>
            <li>Working at<br/>Varal-Singhania</li>
          </ul>        
        </div>

        <div className="about_desktopRight">
           <h3 className="leftPart_heading">About</h3> 
           <ul className="leftPart_list">
             <li>About Us</li>
             <li>Contact Us</li>
           </ul>
        </div>
        </div>

        <div className="rightPart_body">

        <div className="rightPart_each">
          <h3 className="rightPart_heading">Policies</h3>
          <ul className="rightPart_list">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>        
        </div>

        <div>
           <h3 className="rightPart_heading">Address</h3> 
           <ul className="rightPart_list">
             <li>608 One Lake Plaza,<br/>Cluster T
               Al Sarayat Street,<br/>Jumeirah Lake Towers<br/>
               Dubai<br/>
               United Arab Emirates
             </li>
             <div className="address_desktop">Office Hours:Sunday to thursday
               8:30 AM to 6:30 PM [GMT+4]
               M: +971 55 794 2016
               O: +971 4 447 2061
             </div>
           </ul>
        </div>
        </div>

      </div>  
      <div className="outer_body">
        <div  className="email_outerBody">
          <h3 className="sub_mobile">Subscribe to our Newsletter</h3>
          <h3 className="subHead_desktop">Subscribe Now</h3>
          <p className="sub_desktop">Subscribe now to recieve our<br/>
           Newsletters about amazing<br/>
           opportunities in Dubai</p>
          <div className="email_body">
          <input
            className="email_input"
            placeholder="Enter email address"
          />
          <img src={Email}
            className="email_img"
            height="40px"
            width="40px"
          /> 
          </div>

        </div>
        <div className="socialMedia_imgs">
           <img
             src={Facebook}
             className="media_img"
             height="20px"
             width="20px"
             alt="facebook"
             
            /> 
            <img
              src={Instagram}
              className="media_img"
              height="20px"
              width="20px"
              alt="instagram"
            />
            <img
              src={LinkedIn}
              className="media_img"
              height="20px"
              width="20px"
              alt="linkedin"
            /> 
            <img
              src={Youtube}
              className="media_img"
              height="17px"
              width="25px"
              alt="youtube"
            />    
        </div>
       </div> 
       <h6 className="end_text">
          <span>Varaluae 2021 @ All Right Reserved</span>
       </h6> 
      </div>  
    );
}

export default Footer;