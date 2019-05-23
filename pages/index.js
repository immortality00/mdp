import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Index = () => (
  
  <div id="wrapper">
    <Head>
      <title>Magic Point Decoration LLC</title>
      <link href="/static/css/main.css" rel="stylesheet" />
      <link href="/static/css/noscript.css" rel="stylesheet" />
    </Head>
    <Header />
    <Footer />
    <video loop  autoPlay preload="none" className="video" ><source src="./static/MyMovie.mov" type="video/mp4" /></video>

  </div>
   
);

export default Index;
