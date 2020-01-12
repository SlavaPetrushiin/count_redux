import React from 'react';
import Button from './../button/Button';
import Input from './../input/Input';
import classes from './Settings.module.css'

function Settings(props) {
	debugger
	const {maxValue, startValue, disabled} = props.state;
	const classForMaxValue = (maxValue <= startValue) ? 'error' : null;
	const classStartValue = (startValue >= maxValue || startValue < 0) ? 'error' : null;

	if (classForMaxValue === 'error' || classStartValue === 'error'){
		props.disabledBtn({"disabled" : true});
	} else {
		props.disabledBtn({"disabled" : false});
	}
 
	let handleChange = (event) => {
		const {id, value} = event.target;
		const obj = {};
		obj[id] = value;
		if(id === "startValue") obj.currentValue = value // только по мин. полю сработает
		props.compareValues(obj);
		props.isPressedSet(false); //изменение нажатого состояния кнопки set
	};

	let handleClick = () => {
		props.isPressedSet(true); //изменение нажатого состояния кнопки set
	};

  return (
		<div className={classes.settings}>
			<p>{props.text}</p>
			<div className={classes.setValues}>
				<Input
					id="maxValue"
					errorClass={classForMaxValue}
					titleInput={"max value"}
					handleChange={handleChange}
					value={props.state.maxValue}/>
				<Input
					id="startValue"
					errorClass={classStartValue}
					titleInput={"min value"}
					handleChange={handleChange}
					value={props.state.startValue}/>
			</div>
			<div>
				<Button
					title={"set"}
					isDisabled={disabled}
					handleFunction={handleClick}/>
			</div>
		</div>
  );
}

export default Settings;