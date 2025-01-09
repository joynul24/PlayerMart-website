import { useState } from "react"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Players from "./components/players/players"
import { ToastContainer, toast } from 'react-toastify';
import Selected from "./components/Selected/Selected";



function App() {
  const [coin, setCoin] = useState(0);
  const [playerData, setPlayerData] = useState([]);

  const [isActive, setIsActive] = useState({
    available: true,
    status: 'available',
  })

  // console.log(playerData);


  const handleIsActiveStatus = (status) => {
    if(status == 'available'){
      setIsActive({
        available: true,
        status: 'available',
      })
    }
    else{
      setIsActive({
        available: false,
        status: 'selected'
      })
    }
  }




  const handleAddToCoin = () => {
     const newCoin = coin + 150000;
     setCoin(newCoin);
     toast.success("Credit Added to your Account");
  }

  
  const handleChoosePlayer = (player) => {
    const {price} = player;

    if(coin > price){
      const remainingCoin = coin - price;
      setCoin(remainingCoin)
      const newPlayerData = [...playerData, player];
      if(newPlayerData.length > 6) {
        toast.error("Already 6 player selected");
      }
      else{
        setPlayerData(newPlayerData);
        toast.success("Congrates !! Marnus Labuschagne is now in your squad");
      }
      
    }
    else{
      toast.error("Not enough money to buy this player Claim some Credit");
    }
   
  }


  const handleDeleteDetails = (id) => {
    // console.log("added deatals delete", id);
    const remainingPlayers = playerData.filter(player => player.id !== id);
    toast.warning("Player removed");
    setPlayerData(remainingPlayers);
  }


  return (

    <main>
       <div className="container mx-auto">
          <ToastContainer></ToastContainer>
          <Header handleAddToCoin={handleAddToCoin} setCoin={setCoin} coin={coin}></Header>
       </div>

          <div className="container mx-auto mt-7">

          {isActive.available? <Players coin={coin} handleChoosePlayer={handleChoosePlayer} handleIsActiveStatus={handleIsActiveStatus} isActive={isActive} playerData={playerData}></Players> : <Selected handleIsActiveStatus={handleIsActiveStatus} isActive={isActive} playerData={playerData}
          handleDeleteDetails={handleDeleteDetails}
          ></Selected>}
          
          </div>

       <Footer></Footer>
    </main>
  )

}

export default App
