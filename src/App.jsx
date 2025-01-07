import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Players from "./components/players/players"

function App() {

  return (

    <main>
       <div className="container mx-auto pt-5">
          <Header></Header>
          <Players></Players>
       </div>
       <Footer></Footer>
    </main>
  )

}

export default App
