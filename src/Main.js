import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TodoList  from './components/TodoList'
const Main = () => {
	return (
		<div>
			<TodoList />
		</div>
	);
}

ReactDOM.render(
	<Main />,
	document.getElementById('root')
);

export default Main;