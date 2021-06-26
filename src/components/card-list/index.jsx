import React from 'react';
import { Card } from '../card';
import {indexStyle} from './index.style.css'

export const CardList = props => (
    <div className="card-list">
      {props.robots.map(robot => (
        <Card key={robot.id} robot={robot}/>
      ))}
    </div>
  );