
import styles from './App.module.css'
import logo from './assets/logo.png'

const App = () =>{
  return(
    <div className={styles.main} >
      <header>
        <div className={styles.headerContainer}>
          <img src={logo} alt=""/>
        </div>
      </header>

      <div className={styles.container}>

        <div className={styles.left}>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam mollitia reiciendis, maiores nam id animi qui suscipit quae dolores ab cum fugit velit at quidem accusantium! Veritatis accusantium similique illum?

        </div>

        <div className={styles.right}>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur unde deleniti reiciendis magni, officia repudiandae nam qui quo? Sapiente pariatur reprehenderit natus consectetur placeat earum harum praesentium inventore est accusantium.

        </div>

      </div>
    </div>
  )
}

export default App;
