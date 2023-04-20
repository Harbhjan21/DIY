import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getPageFromTemplate } from "../../../redux/actions/pageActions";
import NavbarDiy from "./components/DoItYourSelf/Commons/Navbar";
// import Navbar from "../../commonComponents/Navbar/Navbar";
 import Home from "./components/DoItYourSelf/Home";
// import Main from "./components/searchfilter/Main";
import CreateNew from "./components/searchfilter/CreateNew";
function AppDiy({ setIsAdmin }) {
  const dispatch = useDispatch();
  const [diypage, loadPage] = useState(true);
  const [show,setShow]=useState(true);
  const [hideNavbar,setHideNavbar]=useState(false);
  function HideNavbar(){
    setHideNavbar(!hideNavbar)
  }
 
  function loadPageData(templateId) {
    dispatch(getPageFromTemplate({ templateId: templateId }));
    loadPage(true);
    if(templateId)setShow(false);
  }
  return (
    <div className="App">
   
        
        {/* <CreateNew show={show}/> */}
         {!hideNavbar && <NavbarDiy />}
         <Home HideNavbar={HideNavbar} />
     
    </div>
  );
}

export default AppDiy;
