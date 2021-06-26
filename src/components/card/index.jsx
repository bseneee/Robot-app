import React from 'react'
import './index.style.css'

export const Card=props=>(
    <div className="card_contents" >
        <img src={`https://robohash.org/${props.robot.id}?set=set2&size=180x180`} alt=""></img>
        <h2>{props.robot.name}</h2>
        <p>Утас: {props.robot.phone}</p>
        <p>Email: {props.robot.email}</p>

    </div>
);