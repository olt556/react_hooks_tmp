import React, { useState } from 'react';
const getTodoList = (todoList) => {
	return todoList.map((todo, index) =>
		<p key={index}>{todo}</p>
	);
}
const getDate = () => {
	return Date();
}
const TodoList = () => {
	const [count, setCount] = useState(0);
	const [todoList, setTodos] = useState([]);

	return (
		<div>
			<p>Today's</p>
			<p>{ getDate() }</p>
			{ getTodoList(todoList) }
			<textarea className="todoTextArea" type="text"></textarea>
			<button onClick={() => {
				if (document.querySelector('.todoTextArea').value !== '') {
					todoList.push(document.querySelector('.todoTextArea').value);
					setTodos(todoList)
					console.log(todoList[count]);
				}
				setCount(count + 1);
				}}>
				Post To Do
			</button>
		</div>
	);
}

export default TodoList;