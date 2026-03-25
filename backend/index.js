import express from 'express'
import bodyParser from 'body-parser'
import router from './routers/route.js'
import cors from 'cors'
import 'dotenv/config'


const app = express()
const port = process.env.PORT || 9300

app.use(express.json());
app.use(cors());


// Middleware
app.use(bodyParser.json());

// Use the router for API endpoints
app.use("/api", router);

app.get('/', (req, res) => {
  res.send('Welcome to Myportfolio Server side!!!')
})


app.head('/', (req, res) => {
   // End the response without sending a body
  res.status(200).end();
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
}) 