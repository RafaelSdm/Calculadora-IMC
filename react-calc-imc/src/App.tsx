import {useState} from 'react'
import styles from './App.module.css'
import logo from './assets/logo.png'
import {calculateImc, Level, levels} from './helpers/imc'
import {GridItem} from './components/GridItem'
import arrow from './assets/leftarrow.png'









const App = () =>{


  const[height, setHeight] = useState<number>(0)

  const[weight, setWeight] = useState<number>(0)

  const[showItem, setShowItem] = useState<Level | null>(null)


  const handleCalculate = () =>{
    if(height && weight){
      //window.alert("Aíi simmm bichao")

      setShowItem(calculateImc(height, weight))


    }else{
      window.alert("aí nao bichaooo")
    }
  }


  const handleBackButton = () =>{
    setShowItem(null)
    setHeight(0)
    setWeight(0)
  }


  return(
    <div className={styles.main} >
      <header>
        <div className={styles.headerContainer}>
          <img src={logo} alt=""/>
        </div>
      </header>

      <div className={styles.container}>

        <div className={styles.left}>

          <h1>Calcule o seu IMC</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quibusdam doloremque, inventore culpa officiis quod officia adipisci aperiam obcaecati placeat, perferendis quaerat eius veritatis enim ratione ad. Ea, aut ratione.</p>

          <input type="number" placeholder='Informe sua altura. Ex: 1.5 (em metros)' value={height > 0 ?  height: ''} onChange={e => setHeight(parseFloat(e.target.value))} disabled={showItem ? true : false} />


          <input type="number" placeholder='Informe seu peso. Ex 40.5 (em KG)' value={weight > 0 ? weight: ''} onChange={e => setWeight(parseFloat(e.target.value))}  disabled={showItem ? true : false} />

          <button onClick={handleCalculate} disabled={showItem ? true : false} >Calcular</button>

        </div>

        <div className={styles.right}>

          {!showItem &&
          
            <div className={styles.grid}>
              {levels.map((item, key) =>(
                <GridItem key={key} item={item} />
              ))}

            </div>
          
          }

          {showItem &&

            <div className={styles.rightBig} >
              <div className={styles.rightArrow} onClick={handleBackButton} >

                <img src={arrow} alt=""/>
                
              </div>
              <GridItem item={showItem}/>
            </div>
          
          }

          

        </div>

      </div>

      


      
    </div>
  )
}

export default App;
