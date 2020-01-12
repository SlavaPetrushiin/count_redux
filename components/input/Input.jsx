import React from 'react';

let Input = (props) => {
	return (
		<div>
			<label htmlFor="max">
				{props.titleInput}
				<input
					id={props.id}
					className={props.errorClass}
					onChange={props.handleChange}
					type = "number"
					value={props.value}/>
			</label>			
		</div>
	)
};

export default Input;