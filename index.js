const express = require('express')
const cors = require('cors');
const notesRoutes = require('./routes/notesRouter')

const app = express()
app.use(express.json())
app.use(cors());
app.use( notesRoutes )

// app.use((req,res,next)=>{
//   res.header("Access-Control-Allow-Origin","*");
//   res.header("Access-Control-Allow-Methods","GET, PUT, POST, DELETE");
//   app.use(cors());
//   next();
// })

app.listen(3333,console.log("Server ON!"))