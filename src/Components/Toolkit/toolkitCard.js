import React from 'react'
import './toolkit.css'

export default function ToolkitCard(props)
{
    const path=props.item.path;
    const text=props.item.Text;
  return(
    <div className="toolkitCard">
        <img src={path} alt='react' style={{height:'90px',width:'auto',paddingLeft:'0px'}}/>
        <span>{text}</span>
    </div>
  )
}