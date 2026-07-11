const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.urlencoded({extended:true}))

const payment = require("./routes/productRoutes");







app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use("/api/v1", payment);





 



    

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})