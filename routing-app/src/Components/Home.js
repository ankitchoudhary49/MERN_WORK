import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Home extends Component{
  state={
    posts: [ ]
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
     //console.log('Response from',res);
     this.setState({
       posts: res.data.slice(0,20)
     })
    })
  }

  render(){
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(posts =>{
        return(
          <div className='post card' key={posts.id}>
          <div className='card-content'>
          <Link to={'/'+posts.id}>
          <span className='card-title'>{posts.title}</span>
          </Link>
          <p>{posts.body}</p>
          </div>
          </div>
        )
      })
    ) : (
      <p className='center'>No posts yet.</p>
    )
    return(
      <div className='container center'>
        <h4> Homepage </h4>
        { postList }
        <p> This is our home page. </p>
      </div>
    )
  }

}

export default Home;
