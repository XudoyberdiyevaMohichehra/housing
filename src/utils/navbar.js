import React from "react"
import useId from "../hooks/useID"
import Signin from '../pages/SignIn'
const HomePage = React.lazy(() => import('../pages/home/index'));
const PropertyPage = React.lazy(() => import('../pages/properties/index'));
const HouseItem = React.lazy(() => import('../pages/HouseItem/index'));

export const navbar = [
    {
        id: useId,
        element: (
            <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
                <HomePage />{" "}
            </React.Suspense>
        ),
        title: "Home",
        path: "/home",
        private: false,
        hidden: false,
    },
    {
        id: useId,
        element: (
            <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
                <PropertyPage />
            </React.Suspense>
        ),
        title: "Properties",
        path: "/properties",
        private: false,
        hidden: false,
    },
    {
        id: useId,
        element: (
            <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
                <HouseItem />
            </React.Suspense>
        ),
        title: "Single House",
        path: "/properties/:id",
        private: false,
        hidden: true,
    },
    { id: useId, element: <h1>Contacts</h1>, title: 'Contacts', path: '/contacts', private: false, hidden: false },
    { id: useId, element: <Signin/>, title: 'Sign In', path: '/signin', private: false, hidden: true },
]