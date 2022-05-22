import React from 'react';
import Navbarr from '../Navbarr';

const Posts = () => {
  return <><Navbarr /><div className='mycard1'>
    <div className='card post-card'>
      <h4>Name</h4>
      <textarea id="textarea1" className="materialize-textarea" placeholder="What's in your mind?" style={{ color: "white" }}></textarea>
      <button className="btn waves-effect waves-light">Post</button>
    </div>
    <div className='card post-card'>
      <h4>Name</h4>
      <textarea id="textarea1" className="materialize-textarea" placeholder="What's in your mind?" style={{ color: "white" }} readOnly>I want to die</textarea>
    </div>
    <div className='card post-card'>
      <h4>Name</h4>
      <textarea id="textarea1" className="materialize-textarea" placeholder="What's in your mind?" style={{ color: "white" }} readOnly>I want to die</textarea>
    </div>
    <div className='card post-card'>
      <h4>Name</h4>
      <textarea id="textarea1" className="materialize-textarea" placeholder="What's in your mind?" style={{ color: "white" }} readOnly>I want to die</textarea>
    </div>
    <div className='card post-card'>
      <h4>Name</h4>
      <textarea id="textarea1" className="materialize-textarea" placeholder="What's in your mind?" style={{ color: "white" }} readOnly>I want to die</textarea>
    </div>
    <div className='card post-card'>
      <h4>Name</h4>
      <textarea id="textarea1" className="materialize-textarea" placeholder="What's in your mind?" style={{ color: "white" }} readOnly>I want to die</textarea>
    </div>
  </div></>
};

export default Posts;
