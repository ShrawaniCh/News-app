
import './App.css'
import Headlines from './components/Headlines/Headlines'
import Home from './components/Home/Home'

function App() {
  

  return (
    <div className='header'>
      <h1 style={{backgroundColor:'red'}}>News Website</h1>
      <section><Headlines/></section>
      <section><Home/></section>
    </div>
  )
}

export default App
