
import './App.css'
import Delete from './components/Delete'
import Register from './components/Register'
import Updata from './components/Update'
import View from './components/View'


function App() {
  

  return (
   <div style={{border:'5px solid red', padding:'20px',backgroundColor:'pink' }}>
    <h1  style={{backgroundColor:'black' ,color:'white', width:'100%'}}>CRUD FUNCTION APP</h1>
    <Register/><br/>
   <Updata/><br/>
   <Delete/><br/>
    <View/>
   
  

   </div>
  )
}

export default App