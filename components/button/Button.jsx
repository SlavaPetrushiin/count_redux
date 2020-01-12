import React from 'react';

let Button = (props) => {
	return (
		<button
			disabled={props.isDisabled}
			onClick={props.handleFunction}
		>
			{props.title}
		</button>
	)
};

export default Button;