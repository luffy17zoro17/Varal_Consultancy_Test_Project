import './Navbar.css';

import Logo from "./Images/Group114.png";


const Navbar = () => {
    return (
      <div className="navbar_body">
         <div className="logo_class">
         <img
            className={"nav_logo"}
            src={Logo}
            height={"90px"}
            width={"90px"}
            alt={"Group"}
         />
         </div>
         <img
            className={"navbar_menu"}
            src={"https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png"}
            height={"50px"}
            width={"60px"}
            alt={"menu"}
         />   
         <ul className="horizontal_menu">
           <li>Home</li>
           <li>Services</li>
           <li>Pricing</li>
           <li>About Us</li>
           <li className="topBlue_button">Start a Company</li> 
         </ul>
      </div>  
    );
}

export default Navbar