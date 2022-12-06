
import axios from'react-axios';
import React, { useState, useEffect } from 'react'


import {Link} from 'react-router-dom';

 const Student= () => {
  const [post, getPost] = useState([])
  const API = "http://127.0.0.1:8000/api/List";
  const fetchPost = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        getPost(res)
      })
  }
  // useEffect(() => {
  //   fetchPost()
  // }, [])
 
  return (
    <>
      <h2>Student List</h2>
      <button onClick={fetchPost}>Button</button>
      <ul>
        {post.map((item, i) => {
          return(
            // <li key={i}>{item.book_name}</li>
            <table border='1'>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>Email</th>
                </tr>
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                </tr>
            </table>
 
          )
        })}
      </ul>
    </>
  )
}

 export default Student;

 