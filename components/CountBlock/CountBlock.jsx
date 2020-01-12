import React from 'react';
import Button from './../button/Button';
import classes from './CountBlock.module.css'

class CountBlock extends React.Component {
	countValue = React.createRef();

	incrementValue = () => {
		this.props.incrementValue();
	}

	handleReset = () => {
		this.props.resetIncrement();
	}

	render(){
		let classForValue;
		let value;// Проверка рендера текста или числа 
		if(this.props.state.pressedSet){

			if(this.props.state.currentValue < this.props.state.maxValue){
				value = this.props.state.currentValue;
				this.props.disabledBtn({"disabledInc" : false})
			} else {
				value = this.props.state.currentValue;
				this.props.disabledBtn({"disabledInc" : true})
			}

		}
		else {

			if (this.props.state.disabled){
				value = "Incorrect value!";
				classForValue = classes.errorValue;
			} else {
				value = "enter values and press 'set'";
				classForValue = null
			}

		}

		return (
			<div className={classes.buttonsBlock}>
				<div className={`${classes.buttonsValues} ${classForValue}` }>
					{value}
				</div>
				<div>
					<Button title={"inc"} handleFunction={this.incrementValue} isDisabled={this.props.state.disabledInc}/>
					<Button title={"reset"} handleFunction={this.handleReset} isDisabled={this.props.state.disabledReset}/>
				</div>
			</div>
		);
	}

}

export default CountBlock;