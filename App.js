import React from 'react';
import './App.css';
import Settings from './components/Settings/Settings';
import CountBlock from './components/CountBlock/CountBlock';
import { connect } from 'react-redux';
import { compareValues, disabledBtn, isPressedSet, incrementValue, resetIncrement } from './redux/reducer';

class App extends React.Component {
	render(){
		return (
			<div className="App">
				<div className="wrapperSettings">
					<Settings
						state={this.props}
						compareValues={this.props.compareValues}
						disabledBtn={this.props.disabledBtn}
						isPressedSet={this.props.isPressedSet}/>
				</div>
				<div className="wrapperSettings">
					<CountBlock 
						state={this.props}
						pressedSet = {this.pressedSet}
						incrementValue={this.props.incrementValue}
						resetIncrement={this.props.resetIncrement}
						disabledBtn={this.props.disabledBtn}	
						/>
				</div>			
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		"maxValue" : state.maxValue,
		"startValue" : state.startValue,
		"currentValue" : state.currentValue, 
		"disabled" : state.disabled,
		"pressedSet" : state.pressedSet,
		"disabledInc" : state.disabledInc,
		"disabledReset" : state.disabledReset,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		compareValues : (obj) => dispatch(compareValues(obj)),
		disabledBtn : (objDisabled) => dispatch(disabledBtn(objDisabled)),
		isPressedSet : (press) => dispatch(isPressedSet(press)), 
		incrementValue : () => dispatch(incrementValue()),  
		resetIncrement : () => dispatch(resetIncrement())
	} 
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
