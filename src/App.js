import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/CustomNavbar'
import Home from './components/Home'
import ReservationForm from './components/ReservationForm'

// il nome del componente (che sia classe o funzione) dovrebbe rispecchiare
// il nome del file
function App() {
  return (
    // JSX
    <div>
      <CustomNavbar brand="Aperti di domenica!" />
      <ReservationForm />
      <Home />
    </div>
  )
}

export default App
