import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import { useParams } from "react-router-dom";
import { BOOKS_URL } from './constants';
import { useNavigate } from 'react-router-dom'

export default function EditBook() {
    let { bookId } = useParams();
    const [book, setBook] = useState({ title: "", author: "", price: "" })
    let navigate = useNavigate()

    useEffect(() => {
        $.get(`${BOOKS_URL}/${bookId}`,
            (book) => {
                setBook(book)
            }
        ) // get
    }, [bookId])


    function changeValue(event) {
        var name = event.target.name;
        var value = event.target.value;
        setBook({ ...book, [name]: value })
    }

    function cancelUpdate(e) {
        e.preventDefault()
        navigate("/list")  // Programmatic Navigation
    }

    function updateBook(event) {
        event.preventDefault()

        // make ajax request for post 
        $.ajax(
            {
                url: `${BOOKS_URL}/${bookId}`,
                method: 'put',
                data: JSON.stringify(book),
                contentType: 'application/json; charset=utf-8',
                success: function () {
                    alert("Book updated successfully!")
                },
                error: function (error) {
                    console.log(error)
                    alert("Sorry! Could not update book! Please try again!")
                }
            }
        )
    }


    return (
        <>
            <h2>Edit Book</h2>
            <form onSubmit={updateBook}>
                <div className="form-group">
                    <label for="txtTitle">Title </label>
                    <input className="form-control" type="text" value={book.title} id="txtTitle" required onChange={changeValue} name="title" />
                </div>

                <div className="form-group">
                    <label for="txtAuthor">Author</label>
                    <input id="txtAuthor" className="form-control" type="text" value={book.author} required onChange={changeValue} name="author" />
                </div>

                <div className="form-group">
                    <label for="txtPrice">Price</label>
                    <input id="txtPrice" className="form-control" type="number" value={book.price} onChange={changeValue} name="price" />
                </div>
                <p></p>
                <button>Update Book</button>
                &nbsp;
                <button onClick={cancelUpdate}>Cancel</button>
            </form>
        </>
    )
}
