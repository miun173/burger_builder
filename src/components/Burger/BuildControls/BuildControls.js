import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css'

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Chesse', type: 'chesse'},
  {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map( ctrl => <BuildControl 
      key={ctrl.label} 
      label={ctrl.label} 
      added={() => props.ingredientAdded(ctrl.type)}
      removed={() => props.ingredientDeduct(ctrl.type)}
      isdisabled={props.disabled[ctrl.type]}
      /> )}
  </div>
);

export default buildControls;