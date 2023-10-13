
import React from 'react'
import Title from "../components/Title";
export default function Randomize_colors(){

  const handler = (e)=>{
    let body = document.querySelector("body");
    body.style.backgroundColor = getColor();
    e.target.style.backgroundColor = getColor()
  }
  const getColor = ()=>{
  let letter = "123456789ABCDFEGHI"
  let color = "#"
  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)]
  } 
  return color ;
  }

  return (
    <div className='container'>
    <Title text={"Random-colors"} classes={"mb-4"}/>
    <div className="" style={{ display:'flex',justifyContent:'space-between',flexDirection:'row'  }}>
    <button className='btn btn-danger' onClick={handler}>Danger</button>
    <button className='btn btn-secondary m-right-2 m-left-2' onClick={handler}>Info</button>
    <button className='btn btn-primary m-right-2 m-left-2' onClick={handler}>Primary</button>
    <button className='btn btn-success m-right-2 m-left-2' onClick={handler}>Success</button>
    <button className='btn btn-indigo' onClick={handler}>indigo</button>
    </div>
    </div>

  )
}



