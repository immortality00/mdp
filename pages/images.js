import { withRouter } from "next/router";
import Head from "next/head";
import ImagesProjects from "../components/Projects/ImagesProject";
import Header from "../components/Projects/Header";
import Footer from "../components/Projects/Footer";
import Container from "react-bootstrap/Container";
import { PhotosList } from "../components/PhotosList";

const Content = withRouter(props => (
  <div>
  <div>
    <Head>
      <title>Our Projects</title>
     
    </Head>
    <Container>
      <Header/>
      <ImagesProjects PhotosList={PhotosList.filter(PhotosList => PhotosList.Project.toLowerCase() === props.router.query.title.toLowerCase())}/><br/><br/>
      <Footer />
    </Container>
  </div>
  <style jsx global>{`
    body {
      background: #222629;
    }
  `}</style>
</div>
  ));
  
  const Page = props => <Content />;
  
  export default Page;
  