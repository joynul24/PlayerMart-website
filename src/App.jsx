import { useState } from "react"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Players from "./components/players/players"
import { ToastContainer, toast } from 'react-toastify';



function App() {
  const [coin, setCoin] = useState(0);
  const [playerData, setPlayerData] = useState([]);

// console.log(coin);

  const handleAddToCoin = () => {
     const newCoin = coin + 150000;
     setCoin(newCoin);
     toast.success("Credit Added to your Account");
  }

  
  const handleChoosePlayer = (player) => {
    const newPlayerData = [...playerData, player];
    setPlayerData(newPlayerData);
  }

  

  return (

    <main>
       <div className="container mx-auto">
          <ToastContainer></ToastContainer>
          <Header handleAddToCoin={handleAddToCoin} setCoin={setCoin} coin={coin}></Header>
       </div>

          <div className="container mx-auto">
          <Players coin={coin} handleChoosePlayer={handleChoosePlayer}></Players>
          </div>

       <Footer></Footer>
    </main>
  )

}

export default App
