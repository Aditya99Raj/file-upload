const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const uploadRoutes = require("./src/routes/uploadRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get('/',(req, res)=>{
  return res.send("api is working fine")
});

app.use("/uploads", express.static("uploads"));
app.use("/api/upload",uploadRoutes);


app.listen(PORT,()=>{
    console.log(`Server is running at PORT ${PORT}`);
});