import AddToy from "../../pages/AddToy/AddToy";
import AllToy from "../../pages/AllToy/AllToy";
import Blog from "../../pages/Blog/Blog";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Login/Signup";
import MyToys from "../../pages/MyToys/MyToys";
import NotFound from "../../pages/NotFound/NotFound";
import ViewDetailsCar from "../../pages/ViewDetailsCar/ViewDetailsCar";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../pages/Home/Home/Home");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/signin',
                element: <Login></Login>
            },
            {
                path: '/alltoy',
                element: <AllToy></AllToy>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: '/addtoy',
                element: <PrivateRoute><AddToy></AddToy> </PrivateRoute>
            },
            {
                path: '/mytoy',
                element: <PrivateRoute><MyToys></MyToys> </PrivateRoute>
            },
            {
                path: '/alltoy/:id',
                element: <PrivateRoute><ViewDetailsCar></ViewDetailsCar></PrivateRoute>,
                loader: ({ params }) => fetch(`https://toy-town-server-one.vercel.app/cars/${params.id}`)
            }

        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);
export default router;