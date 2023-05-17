import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar/NavBar'
import ItemListContainer from './components/Sections/ItemListContainer/ItemListContainer'
import './components/Sections/ItemListContainer/ItemListContainer.css'

function App() {
  return (
    <>
      <NavBar />
      <section className="ItemListContainerWrapper ItemListContainerfont">
        <ItemListContainer greetings="Hola usuario"/>
      </section>
    </>
  )
}

export default App
