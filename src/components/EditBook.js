import React from "react";
import Book from "./Book";
import BookForm from "./BookForm";
export default class EditBook extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inEditMode: false,
		};

	this.enterEditMode = this.enterEditMode.bind(this)
	this.leaveEditMode = this.leaveEditMode.bind(this)
	this.handleDelete = this.handleDelete.bind(this)
	this.handleUpdate = this.handleUpdate.bind(this)

	}

	enterEditMode = () => {
		this.setState({ inEditMode: true });
	};

	leaveEditMode = () => {
		this.setState({ inEditMode: false });
	};

	handleDelete = () => {
		this.props.onDeleteClick(this.props.id);
	};

	handleUpdate = (book) => {
		this.leaveEditMode();

		book.id = this.props.id;

		this.props.onUpdateClick(book);
	};

	render() {

			if (this.state.inEditMode) {
				return (
					<BookForm
						id={this.props.id}
						title={this.props.title}
						description={this.props.description}
						author={this.props.author}
						onCancelClick={this.leaveEditMode}
						onFormSubmit={this.handleUpdate}
					/>
				);
			}
		

		return (
			<Book
				id={this.props.id}
				title={this.props.title}
				description={this.props.description}
				author={this.props.author}
				onEditClick={this.enterEditMode}
				onDeleteClick={this.handleDelete}
			/>
		);

		


			}
}
