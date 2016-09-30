import React from 'react';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<TaskList />
			</div>
		);
	}
}

class TaskList extends React.Component {
	render() {
		return (
			<div className="task-list">
				<h2 className="complete-task-header">Complete tasks</h2>
				<h1 className="task-header">Task</h1>
				<h1  className="date-header">Date</h1>
				<div className="clear"></div>
				<TaskLine date="Today" task="Do washing"/>
			</div>
		);
	}
}

class TaskLine extends React.Component {
	render() {
		return (
			<div >
				<div className="task">
					<button className="btn complete-task-btn btn-success">Completed</button>
					<p className="task-text">{this.props.task}</p>
					<p className="task-date"><strong>{this.props.date}</strong></p>
				</div>
				<div className="clear"></div>
			</div>
		);
	}
}

class Content extends React.Component {
	render() {
		return (
			<div>
				Content will go here!
			</div>
		);
	}
}

export default App;

