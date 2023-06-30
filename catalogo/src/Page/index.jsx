import '../styles/global.css'
import sofa from '../assets/sofa.png'
import './style.css'
import Vector from '../assets/Vector.png'
import sofagif from '../assets/sofa.gif'
import { useState } from 'react'


export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const addToCart = () => {
    // Adicionar lógica para adicionar o item ao carrinho aqui
    setShowPopup(true);

    // Após um determinado tempo, ocultar o pop-up
    setTimeout(() => {
      setShowPopup(false);
    }, 3000); // Exibe o pop-up por 3 segundos
  };
  const [showGif, setImageGif] = useState(false)

  const ChangeImage = () => {
    setImageGif(!showGif)
  }


  return (
    <>
      <div className='product'>

        <div className='productSofa' >

          <img className='vector' src={Vector} onClick={ChangeImage} />
          {showGif ? (
            <img className='sofaGif' src={sofagif} />
          ) : (
            <img
              src={sofa} />
          )}
        </div>
        <div className='info'>
          <div className='codigo'>CÓDIGO: 42404</div>
          <div className='title'>

            <h1>Sofá Margot II - Rosé</h1>
          </div>
          <div className='price'>R$ 4.000 </div>

          <div className='buttonAdd'>
            <button onClick={addToCart}>ADICIONAR À CESTA</button>
            {showPopup && (
              <div className="popup">
                <p>Item adicionado ao carrinho com sucesso!</p>
              </div>
            )}
          </div>
        </div>
      </div>

    </>
  )


}


