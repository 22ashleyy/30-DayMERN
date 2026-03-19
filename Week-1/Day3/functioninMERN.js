//STARTING THE SERVER
const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('server running on port 3000')
});

//ROUTE HANDLERS
app.get('/', async(req, res) => {
  const products = await product.find();
  res.status(202);
  res.send(products);
})

//CONTROLERS
function getProducts(req, res) {
  res.send("All products")
}

app.get("/products", getProducts)

//MIDDLEWARE
function logger(req, res, next){
  res.send('request received');
  next()
};
app.use(logger);

/* FRONT END */
//COMPONETS
function card(){
  <>
   <h1>This is a card</h1>
   <div>Div Inside the card</div>
  </>
}

//USESTATE
const [count, setCount] = useState(0);

function increase() {
  setCount(count + 1);
}

//FETCH DATA
await function fetchdata(){
  const res = ('/products');
  const data = res.json();
  console.log(data);
}