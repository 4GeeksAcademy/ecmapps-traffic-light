import React, { useEffect } from "react";
import { useState } from "react";
import '../../styles/index.css'

const lightStyle = {
    width: "200px",
    height: "510px",
    background: "black",
    borderRadius: "30px",
    margin: '10px',
    gap: "10px"
};

const buttonStyle = {
    width: "125px",
    height: "125px",
    background: 'grey',
    borderRadius: "50%",
    margin: "0px",
    border: "0px"
};

const TrafficLight = () => {
    const [color, setColor] = useState("red");
    const [colorsArr, setArr] = useState(["red","yellow","green"]);
    const [lightOn, switchLight] = useState(false);

    useEffect(()=>{
        if(lightOn){
            let interval = setInterval(()=>{
                let currentIndex = colorsArr.indexOf(color);
                if(currentIndex >= colorsArr.length-1 || currentIndex == -1) {currentIndex = -1}
                console.log(currentIndex+1);
                setColor(colorsArr[currentIndex+1]);
            },2000);
            return () =>{clearInterval(interval);}
        }
    });

    function addColor(){
        if(colorsArr.length > 3) return;
        else {
            let newArr = [...colorsArr, "purple"];
            setArr(newArr);
        }
    };
    
	return (
		<div className="text-center d-flex flex-column align-items-center justify-content-center">
			<div className="container-fluid d-flex flex-column align-items-center justify-content-around py-1" style={lightStyle}>
                {colorsArr.map((item,index)=><button className={((color == item)?item:"grey")} style={buttonStyle} key={index} onClick={()=>setColor(item)}></button>)}
            </div>
            <button className="btn btn-dark mb-2" onClick={()=>switchLight(!lightOn)}>Cycle through: {(lightOn?"On":"Off")}</button>
            <button className="btn btn-dark" onClick={addColor}>Add Purple!</button>
		</div>
	);
};

export default TrafficLight;
