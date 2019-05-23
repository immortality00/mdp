import Link from 'next/link'
import Head from "next/head";
import Header from '../components/About/Header';
import AboutUs from '../components/About/AboutUs';
import Philosophy from '../components/About/Philosophy';
import Footer from '../components/Projects/Footer';

const About = () => (
  <div>
    <Head>
      <title>About Magic Point Decoration</title>
    </Head>
    <Header/>
    <AboutUs/>
    <Philosophy/>
    <Footer/>
    <style jsx global>{`
      body {
        background: #222629;
        font-family: "Times New Roman";
      }
    `}</style>
  </div>
);

export default About;
