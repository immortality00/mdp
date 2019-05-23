import Head from "next/head";
import Header from "../components/Projects/Header";
import Footer from "../components/Projects/Footer";
import Project from "../components/Projects/Project";
import Container from 'react-bootstrap/Container'

const Projects = () => (
  <div>
    <div>
      <Head>
        <title>Our Projects</title>
       
      </Head>
      <Container>
        <Header />
        <Project/><br/><br/>
        <Footer />
      </Container>
    </div>
    <style jsx global>{`
      body {
        background: #222629;
      }
    `}</style>
  </div>
);

export default Projects;
