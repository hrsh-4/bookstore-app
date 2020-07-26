import React from "react";
import BookForm from "./BookForm";

const editStyle = {
    padding : "5px",
    margin : "5px",
    border  :"0px",
    borderRadius : "5px",
    background : "#32a89e",
    color  :" beige",
    width : "70px",
    height : "50px",
    fontSize : "15px"
}


export default class AddBook extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inAddBookMode: false,
		};

		this.handleAddBook = this.handleAddBook.bind(this);
		this.leaveAddBookMode = this.leaveAddBookMode.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleCancelClick = this.handleCancelClick.bind(this);
	}

	handleAddBook() {
		this.setState({ inAddBookMode: true });
	}

	leaveAddBookMode() {
		this.setState({ inAddBookMode: false });
	}

	handleFormSubmit = (book) => {
		this.leaveAddBookMode();
		this.props.addBook(book);
	};

	handleCancelClick() {
		this.leaveAddBookMode();
	}

	render() {
		if (this.state.inAddBookMode) {
			return (
				<BookForm
					onFormSubmit={this.handleFormSubmit}
					onCancelClick={this.handleCancelClick}
				/>
			);
		}

		return <button style={editStyle} onClick={this.handleAddBook}>Add Book</button>;
	}
}