const express = require("express");
const next = require("next");
const bodyparser = require("body-parser");
const nodemiler =require("nodemailer"); 
const cors = require('cors');
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.get("/gallery/:id", (req, res) => {
      const actualPage = "/post";
      const queryParams = { title: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });
    server.get("/projects/:id", (req, res) => {
      const actualPage = "/images";
      const queryParams = { title: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });
    server.use(bodyparser.json())
    server.use(bodyparser.urlencoded({extended: true}))
    server.use(cors());
    server.post('api/form', (req,res) => {
      var data = req.body;
              
      let smtpTransport = nodemiler.createTransport({
          host: 'smtp-relay.sendinblue.com',
          port: '587',
          auth: {
            user: process.env.CONTACT_NAME,
            pass: process.env.CONTACT_PASSWORD
          },
          tls: {
            rejectUnauthorized: false
          }
        });
  
        let mailOptions = {
          from: data.email,
          to: process.env.CONTACT_NAME,
          replyTo: process.env.CONTACT_NAME,
          subject: 'New Message',
          html: `<p>${data.firstName}</p>
          <p>${data.lastName}</p>
          <p>${data.phoneNumber}</p>
          <p>${data.email}</p>
          <p>${data.message}</p>`
        };
  
        smtpTransport.sendMail(mailOptions,
          (error, response) => {
            if(error) {
              res.send(error)
            }else {
              res.send('Success')
            }
            smtpTransport.close();
          });    
    })
    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
  
  