import styles from '../styles/register.module.css'
import Register2 from './register2';

export default function Register1({nextRegister, nextReg}) {
    console.log(nextReg);
  
  return (

    
    <main className='contenedor'>

      <h1 className="heading">Registrarse</h1>

      {nextReg ? 

      <form className='center'>
        {/* Primera parte de info personal */}
        <div className={styles.part1}>
          <label>Nombre: </label>
          <input type="text" name="" id="" />
        </div>

        <div className={styles.part1}>
          <label>Apellido: </label>
          <input type="text" name="" id="" />
        </div>

        <div className={styles.part1}>
          <label>Email: </label>
          <input type="email" name="" id="" />
        </div>

        <div className={styles.part1}>
          <label>Contrasena: </label>
          <input type="text" name="" id="" />
        </div>

        <button type='button'
                onClick={() => nextRegister()}
        >Siguiente
        </button>
        


      </form>
      : <Register2 />}
    </main>
  )
}
