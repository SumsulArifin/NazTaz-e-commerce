
import { Outlet } from 'react-router-dom'
import { Footer } from '../Shared/Footer/Footer'
import Navbar from '../Shared/Navber/Navbar'

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>


        </div>
    )
}

export default Main