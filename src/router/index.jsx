import {createBrowserRouter } from 'react-router-dom'
import Home from '../views/Home'
import DetailProduct from '../views/DetailProduct'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {Outlet} from 'react-router-dom'

const router = createBrowserRouter([
    // {
    //     path: '/',
    //     element: <Home/>
    // },
    // {
    //     path: '/:id',
    //     element: <DetailProduct/>
    // },
    {
        element:(
            <>
        <Navbar/>
        <Outlet />
        <Footer/>
            </>
        ),
        
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/:id',
                element: <DetailProduct/>
            },
        ],
        
        // element: <Footer/>
    }
])
 export default router
