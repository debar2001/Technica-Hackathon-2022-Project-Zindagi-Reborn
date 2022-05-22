import React from 'react';
import Navbar  from '../Navbar';

const Home = () => {
  return <>
  <Navbar />
  <div className='mycard'>
  <div className='card auth-card'><h1>About Zindagi Reborn</h1>
  <p>We have deployed a Natural Language Processing Model that would detect any suicidal thoughts in a person by analysis of their social media feeds.</p><p> For the purpose of demonstration we would use this model in a self-built social media platform. The same model can be used in other major Social Media Platforms like Twitter and Facebook where it could analyse the tweets or posts of individuals to detect any suicidal thoughts.</p>
<p>After in-place detection, the system will automatically raise an alert to the close aids of the person or police or counselling team depending on the level of risk. </p></div></div>
  </>;
};

export default Home;
