import logo from "./logo.svg";
import "./App.css";
import AppDiy from "./DIY/doityourself/src/AppDiy";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Restore } from "./redux/actions/pageActions";
// import Check from "./Check.js";

function App() {
  console.log("Hii from App.js...");
  const dispatch = useDispatch();
  useEffect(()=>{
    if(1){
      const data = JSON.parse(localStorage.getItem('myData'))
      console.log("checking data => ",data);
      dispatch(Restore({ Data: data }));
    }
  },[]);

  return (
    <div>
      <AppDiy />
    </div>
  );
}

export default App;
