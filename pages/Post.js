import { withRouter } from "next/router";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Photo from "../components/Photo";
import { PhotosList } from "../components/PhotosList";

const Content = withRouter(props => (
  <div id="wrapper">
  <Head>
    <title>{props.router.query.title}</title>
    <link href="/static/assets/css/main.css" rel="stylesheet" />
  </Head>
  <NavBar/>
  <Photo PhotosList={PhotosList.filter(PhotosList => PhotosList.category.toLowerCase() === props.router.query.title.toLowerCase())}/>
</div>
))

const Page = props => (
  <Content />
)

export default Page;
