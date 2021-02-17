import React, { useState, useEffect } from 'react';
import '../styles/index.scss';

function Clock() {
	const [ clock, setClock ] = useState(new Date());

	const updateClock = () => {
		setClock(new Date());
	};

	useEffect(() => {
		setTimeout(updateClock, 1000);
	});

	const formatClockNum = (clock_num) => {
		return clock_num.toString().padStart(2, '0');
	};
	return (
		<div className="clock">
			<div className="timer">
				{formatClockNum(clock.getHours())}:{formatClockNum(clock.getMinutes())}:{formatClockNum(clock.getSeconds())}
			</div>
		</div>
	);
}

export default Clock;
