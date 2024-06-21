
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from '../pages/Home';
import Buy from '../pages/Buy';
import Rent from '../pages/Rent';
import ContactUs from '../pages/ContactUs';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Client from '../pages/Client';
import ProtectedRout from "./ProtectedRout";
import CardDetails from "../pages/CardDetails";
import ErrorPage from "../components/errorPage/ErrorPage";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/cardHouse/:id",
                element: <ProtectedRout><CardDetails></CardDetails></ProtectedRout>,
                loader: () => fetch('/data.json')
            },
            {
                path: "/buy",
                element: <Buy></Buy>,
            },
            {
                path: "/rent",
                element: <Rent></Rent>,
            },
            {
                path: "/client",
                element: <ProtectedRout><Client></Client></ProtectedRout>
            },
            {
                path: "/profile",
                element: <ProtectedRout><Profile></Profile></ProtectedRout>,
            },
            {
                path: "/contactUs",
                element: <ContactUs></ContactUs>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            }

        ]
    },
]);