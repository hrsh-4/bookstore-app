import React from "react";

const inputStyle = {
	width : "50%",
	border : "0.5px solid gray",
	borderRadius : "20px",
	height : "30px",
	margin : "5px",
	padding : "5px",
	outline : "none"
}

const labelStyle = {
	fontWeight : "600"
}

const formStyle = {
	width : "40%",
	padding : "10px",
	margin : "5px",
	border : "0.5px solid gray",
	borderRadius : "20px",

}

const textareaStyle = {

	width : "50%",
	border : "0.5px solid gray",
	borderRadius : "20px",
	height : "150px",
	margin : "5px",
	padding : "5px",
	outline : "none"

}

const editStyle = {
    padding : "5px",
    margin : "5px",
    border  :"0px",
    borderRadius : "5px",
    background : "#32a89e",
    color  :" beige",
    width : "70px",
    height : "45px",
    fontSize : "15px"
}

const deleteStyle = {

    padding : "5px",
    margin : "5px",
    border  :"0px",
    borderRadius : "5px",
    background : "#f01120",
    color  :" beige",
    width : "70px",
    height : "30px",
    fontSize : "15px"
}


export default class BookForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: this.props.title || " ",
			description: this.props.description || " ",
			author: this.props.author || " ",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	handleFormSubmit(event){
		event.preventDefault();
		this.props.onFormSubmit({...this.state})
	}

	render() {

		const buttonText = this.props.id ? "Update Book" : "Add Book"

		return (
			<div align ="center">

			<form  style={formStyle} onSubmit = {this.handleFormSubmit} >
			<br/>
				<label style = {labelStyle} > 
					Title :
					<input style = {inputStyle}
						type="text"
						name="title"
						onChange={this.handleChange}
						value={this.state.title}
					/>
				</label> 
				<br/><br/>
				<label style = {labelStyle} >
					Desciption :
					<textarea 
						style ={textareaStyle}
						name="description"
						onChange={this.handleChange}
						value={this.state.description}
						rows="6"
					/>
				</label>
				<br/><br/>

				<label style = {labelStyle} >
					Author :
					<input style = {inputStyle}
						type="text"
						name="author"
						onChange={this.handleChange}
						value={this.state.author}
					/>
				</label>
				<br/><br/>

				<button style ={editStyle} type="submit">
					{buttonText}
				</button>
				{ "  "}
				<button style = {deleteStyle} onClick ={this.props.onCancelClick}>
					Cancel
				</button>				


			</form>


			</div>

		);
	}
}