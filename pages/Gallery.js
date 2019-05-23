
import Head from "next/head";
import NavBar from '../components/NavBar';
import Photo from "../components/Photo"
import { PhotosList } from "../components/PhotosList";

const Gallery = () => (
  <div id="wrapper">
    <Head>
      <title>Our Gallery</title>
      <link href="/static/assets/css/main.css" rel="stylesheet" />
    </Head>
    <NavBar/>
    <Photo PhotosList={PhotosList}/>
  </div>
);

export default Gallery;

