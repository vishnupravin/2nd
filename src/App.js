import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Card from './Card.js'
import Cart from './Cart.js'
import { useState } from 'react';
function App() {
  const [pets, setpets] = useState([
    {
      id: "01",
      name: "Kitty",
      img: "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_240/public/TurkishVan_body_7.jpg?itok=laUmF3Og",
      price: 8500
    },
    {
      id: "02",
      name: "Cleo",
      img: "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_240/public/Munchkin.jpg?itok=Ebp6te82",
      price: 32000
    },
    {
      id: "03",
      name: "Rosy",
      img: "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_240/public/Somali_body_7.jpg?itok=jHwEUG5G",
      price: 20000
    },
    {
      id: "04",
      name: "Lily",
      img: "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_240/public/Siberian_body_6.jpg?itok=A-sQ7jCz",
      price: 17500
    },
    {
      id: "05",
      name: "Nala",
      img: "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_240/public/Ragdoll_240x240%20%281%29.jpg?itok=WZWLRF05",
      price: 13500
    },
    {
      id: "06",
      name: "Chole",
      img: "https://www.purina.com/sites/g/files/auxxlc196/files/styles/kraken_generic_max_width_240/public/PersianSolid_body_6.jpg?itok=l0css2fz",
      price: 11900
    }

  ]);
  const [cardItems, setcardItems] = useState([])
  let addTocart = (pet) => {
    setcardItems([...cardItems, pet]);
  }
  let removeFromcart = (pet) => {
    const indexVal = cardItems.findIndex(obj => obj.id === pet.id);
    cardItems.splice(indexVal, 1);
    setcardItems ([...cardItems])
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {
              pets.map((pet) => {
                return <Cart pet={pet} addTocart={addTocart} cardItems={cardItems}></Cart>
              })
            }
          </div>
        </div>
        <div className="col-lg-4">
          <Card cardItems={cardItems} removeFromcart={removeFromcart}></Card>
        </div>
      </div>

    </div>
  );
}

export default App;
