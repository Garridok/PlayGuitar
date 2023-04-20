import Layout from "../components/layout"
import Userlogin from "../components/userlogin"
import Login from "../components/login"

export default function user() {
  return (
    <Layout
    title={'Cuenta'}
    description={'Ventas de guitarras, y blog de musica'}
    >
        {/* Si el usuario no esta logeado */}
        <Login />

        {/* Si el usurio esta logeado */}
        {/* <Userlogin /> */}




        
    </Layout>
  )
}

// pedir por props datos de usuarios