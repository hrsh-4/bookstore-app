import React from "react";

const style ={
    padding : "5px",
    width : "40%",
    border : "1px solid grey",
    borderRadius : "20px"
}

const editStyle = {
    padding : "5px",
    margin : "5px",
    border  :"0px",
    borderRadius : "5px",
    background : "#32a89e",
    color  :" beige",
    width : "70px",
    height : "30px",
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


export default class Book extends React.Component {
  render() {
    return (
      <>

        <div align="center"  >

                  <div style={style} >
          <span>
            <strong>Title: </strong>
            {this.props.title}
          </span>

          

        <p >{this.props.description}</p>

        <p>
          <strong>Author:</strong> {this.props.author}
        </p>
        <div>
            <button  style={editStyle} onClick={this.props.onEditClick} >
              Edit
            </button>
            {"  "}

            <button style={deleteStyle} onClick={this.props.onDeleteClick}>Delete</button>
            <br/><br/>
          </div>
        </div>

        </div>


        <br/>
      
      </>
    );
  }
}
