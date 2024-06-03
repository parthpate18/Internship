import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Components/Card";
import Sdata from './Sdata'
import './index.css'
//using simple method and Array 
// ReactDOM.render(
// <>
//  <Card sname={Sdata[0].sname}
//         imgsrc={Sdata[0].imgsrc}
//         title={Sdata[0].title}
//         links={Sdata[0].links}/>

// <Card sname={Sdata[1].sname}
//         imgsrc={Sdata[1].imgsrc}
//         title={Sdata[1].title}
//         links={Sdata[1].links}/>

// <Card sname={Sdata[2].sname}
//         imgsrc={Sdata[2].imgsrc}
//         title={Sdata[2].title}
//         links={Sdata[2].links}/>
        
// </>,document.getElementById('root'))


//using map method
ReactDOM.render(
        <>
        <h1 className="heading_style">List of top 5 Netflix Series in 2024</h1>
        {Sdata.map((val)=>{
                return(
                        <Card sname={val.sname}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        links={val.links}/>
                );
        })}                
        </>,document.getElementById('root'))