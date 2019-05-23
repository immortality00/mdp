'use strict';
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, {Component} from 'react';

class Index extends Component {
  constructor (props) {
    super(props);

    this.state = {
        videoURL: '/static/MyMovie.mov'
    }
}

render () {
    return (

  <div id="wrapper">
  <Head>
    <title>Magic Point Decoration LLC</title>
    <link href="/static/css/main.css" rel="stylesheet" />
  </Head>
  <video className="video" autoPlay loop muted>
            <source src={this.state.videoURL} type="video/mp4" />
            <source src={this.state.videoURL} type="video/ogg" />
            Your browser does not support the video tag.
        </video>
  <Header />
  <Footer />
</div>
        
    )
}
};

export default Index;
