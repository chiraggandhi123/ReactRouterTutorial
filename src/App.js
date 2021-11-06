import Nav from './components/navbar'
import About from './components/about'
import Shop from './components/shop'
import Product from './components/Product/Product'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' exact element={<Shop/>}/>
          <Route path='/products/:id' element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}
function Home() {
  return (
    <h1>HOME</h1>
  )
}
export default App;
