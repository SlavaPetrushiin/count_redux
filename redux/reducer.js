const CHANGESETTINGS = "CHANGE-SETTINGS";
const DISABLEDBTN = "DISABLED-BTN";
const ISPRESSEDSET = "IS-PRESSED-SET";
const INC = "INC";
const RESET = "RESET";

const initialState = {
	"maxValue" : 3,
	"startValue" : 0,
	"currentValue" : 0, 
	"disabled" : false,
	"pressedSet" : false,
	"disabledInc" : true,
	"disabledReset" : true
};

const reducer = (state = initialState, action) => {
	switch(action.type){
		case CHANGESETTINGS:
			return {
				...state,
				...action.obj
			}
		case DISABLEDBTN:
			debugger
			return {
				...state,
				...action.objDisabled				
			}
		case ISPRESSEDSET:
			return {
				...state,
				pressedSet : action.press,
				disabledInc : !action.press,
				disabledReset : !action.press,
			}
		case INC:
			return {
				...state,
				currentValue : state.currentValue + 1
			}
		case RESET:
			return {
				...state,
				currentValue : state.startValue
			}									
		default:
			return state;
	}
};

export const compareValues = (obj) => ({type : CHANGESETTINGS, obj});
export const disabledBtn = (objDisabled) => ({type : DISABLEDBTN, objDisabled});
export const isPressedSet = (press) => ({type : ISPRESSEDSET, press});
export const incrementValue = () => ({type : INC});
export const resetIncrement = () => ({type : RESET});

export default reducer;
