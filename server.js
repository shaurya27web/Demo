import express from 'express';
import sum from './sum.js';
const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/home',async (req, res) => {
    res.json({message:"Daddy is home"});
}); 

app.get('/add/:a/:b',async (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const result = sum(a,b);
    res.json({result});
});