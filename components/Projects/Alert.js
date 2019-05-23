import Head from "next/head";

const Alert = () => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
    </Head>
    <div className="alert">
      <div className="alert-heading">
        <p>Our Projects</p>
      </div>
      <p>
        These are few of our Projects, and we have many many more .. don't
        hesitate to check them all.
      </p>
    </div>
    <style jsx>{`
      .alert {
        margin-top: 5%;
      }
      p {
        text-align: center;
        color: white;
        font-family: "Times New Roman";
      }
    `}</style>
  </div>
);

export default Alert;
