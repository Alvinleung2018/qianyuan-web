import Home from './pages/home'
import About from './pages/about'
import Product from './pages/product'


const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/product',
        component: Product
    }
]


export default routes;