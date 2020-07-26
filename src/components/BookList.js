import React from "react";
import EditBook from "./EditBook"
export default class BookList extends React.Component {
	render() {
		const books = this.props.books.map((book) => (
		<EditBook
				key={book.id}
				id={book.id}
				title={book.title}
				description={book.description}
				author={book.author}
				onDeleteClick={this.props.onDelete}
				onUpdateClick={this.props.onUpdate}
			/> 
		));
 
		return(
			<div>
				{books}
			</div>
			)
		
		}
	}


