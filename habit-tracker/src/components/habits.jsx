import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
	handleIncrement = (habit) => {
		this.props.onIncrement(habit);
	}

	handleDecrement = (habit) => {
		this.props.onDecrement(habit);

	}

	handleDelete = (habit) => {
		this.props.onDelete(habit);

	}

	handleAdd = (name) => {
		this.props.onAdd(name);
	}

	render() {
		return (
			<div>
				<HabitAddForm onAdd={this.handleAdd}></HabitAddForm>
				<ul>
					{this.props.habits.map(habit => {
						return <Habit
									key={habit.id}
									habit={habit}
									onIncrement={this.handleIncrement}
									onDecrement={this.handleDecrement}
									onDelete={this.handleDelete}>
								</Habit>;
					})}
				</ul>
			</div>
		);
	}
}

export default Habits;