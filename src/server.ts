import express from "express";

const app = express();

app.get("/test", (req, res) => {
   return res.send("ola MUNDO")
});

app.post("/test-post", (req, res) =>{
    return res.send("Metodo POST")
});


app.listen(3000, () => console.log("Server is running"))