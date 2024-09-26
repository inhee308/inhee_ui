import React from 'react';
import "./Title.css";
import { GrApple } from "react-icons/gr";

const Title = ({ title }) => {
	return (
		<h2 className='h2'>
			<div className="list-txt-way"><span className="icon"><GrApple /></span> {title}</div>
		</h2>
	);
};

export default Title;