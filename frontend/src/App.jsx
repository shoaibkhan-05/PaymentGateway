import Products from "./assets/components/Products"
import data from "./assets/components/data"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import PaymentStatus from "./assets/components/PaymentStatus"




function App() {
 



  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Products data={data}/>}/>
        <Route path="/paymentStatus"  element={<PaymentStatus/>}/>
        
      </Routes>
    </Router>
   
   
  )
}


export default App
