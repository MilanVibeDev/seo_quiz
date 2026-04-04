import { Link } from "react-router-dom";
import './App.css'

function App() {
  

  return (
    <main className='home_container'>
      <h1 className='heading1'>SEO Quiz</h1>
      <p className='subheading1'>Take a quiz on basics of SEO</p>
      <Link to="/quiz"><button className='startBtn' >Start Now</button></Link>
      <h2 className='heading2'>2:00 min</h2>
      <h2 className='heading2'>10 questions</h2>
    </main>


  )
}

export default App
