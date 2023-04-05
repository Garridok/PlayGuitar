import styles from '../styles/curso.module.css'

export default function Curso({curso}) {

    const { contenido, imagen, titulo } = curso

  return (
    <section className={`${styles.curso} curso`}>
        {/* Aqui vamos a aplicar css, por que vamos a usar variables dentro del codigo css */}
        <style jsx>{`
            .curso{
                background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb( 0 0 0 / .7)), url(${imagen.data.attributes.url});
            }
        `}</style>
        <div className={`${styles.grid} contenedor`}>
            <div className={styles.contenido}>
                <h2 className='heading'>{titulo}</h2>
                <p>{contenido}</p>
            </div>
        </div>
    </section>
  )
}
