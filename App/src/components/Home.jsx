// Home.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');

  // updating search value 
  const handleSearch = (e) => {
    setSearch(e);
    console.log(e);
  };

// fetching data from api 
  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", { headers: { 'Authorization': 'whatever-you-want' } })
      .then((res) => {
        setBooks(res.data.books);
        console.log("data:", books);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // filtering the books on searching 
  const searchBooks =books.filter(book=>{
    return book.title.toLowerCase().startsWith(search.toLowerCase())
  })

  // html 
  return (
    <>
      <Navbar searchText={handleSearch} />
      <div className='grid' >
        {searchBooks.map((book) => (
          <div id="searchBookDiv">
            <div>
              <div key={book.id}>
                <img className='book-image' src={book.imageLinks.thumbnail} alt="" />
                <h4 className='book-title'>{book.title}</h4>
                <div className='flex' style={{ justifyContent: "center", color: "grey" }}>
                  <h5 style={{ padding: "0 5px" }}>{book.averageRating ? book.averageRating+"⭐": "--⭐"}</h5>
                  <h5>Free</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
