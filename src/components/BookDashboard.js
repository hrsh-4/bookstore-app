import React from "react";
import BookList from "./BookList";
import AddBook from "./AddBook";
export default class BookDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			books: [],
		};

		this.createNewBook = this.createNewBook.bind(this);
		this.deleteBook = this.deleteBook.bind(this);
		this.updateBook = this.updateBook.bind(this);
	}

	componentDidMount() {
		fetch("http://localhost:8000/api/books/")
			.then((response) => response.json())
			.then((data) => this.setState({ books: data }));
	}

	createNewBook = (book) => {
		fetch("http://localhost:8000/api/books/",{
			method : "POST",
			headers : {
				'Content-Type' : 'application/json'
			},
			body : JSON.stringify(book)
		})
		.then(response => response.json())
		.then(book => {
			this.setState({
				books : this.state.books.concat([book])
			})
		})
	};

	deleteBook = (id) => {
		
		fetch(`http://localhost:8000/api/books/${id}/`,{
			method : 'DELETE',
			headers : {
				'Content-Type' : 'application/json'
			},
		})
		.then(() => {
			this.setState({
				books : this.state.books.filter(book => book.id !== id)
			})
		})
	};

	updateBook = (newBook) => {

		fetch(`http://localhost:8000/api/books/${newBook.id}/`,{
			method : 'PUT',
			headers : {
				'Content-Type' : 'application/json'
			},
			body : JSON.stringify(newBook),
		})
		.then(response => response.json())
		.then(newBook => {
			const newBooks = this.state.books.map( book => {
				if(book.id === newBook.id){
					return Object.assign({}, newBook)
				}
				else{
					return book
				}
			})

			 this.setState({
			 	books : newBooks
			 })
			
		});

	}
	
	render() {
		return (
			<main className="d-flex justify-content-center my-4">
				<div className="col-5">
					<BookList
						books={this.state.books}
						onDelete={this.deleteBook}
						onUpdate={this.updateBook}
					/>

					<AddBook addBook={this.createNewBook} />
				</div>
			</main>
		);
	}
}
