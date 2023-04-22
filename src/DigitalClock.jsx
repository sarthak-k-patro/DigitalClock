import React, { useState }  from "react";

let DigitalClock=()=>{
    let ctime=new Date().toLocaleTimeString()
let[ct,setCt]=useState(ctime)

let inc=()=>{
    setCt(new Date().toLocaleTimeString())
}

setInterval(inc,1000)
return(<><h1 className="sarthak" >{ct}</h1></>);
}
export default DigitalClock;