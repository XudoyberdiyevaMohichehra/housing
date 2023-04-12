import React from "react"
import useId from "../hooks/useID"
// import { HomePage } from '../pages/home/index'
// import {PropertyPage} from '../pages/properties/index'
const HomePage = React.lazy(() => import('../pages/home/index'));
const PropertyPage = React.lazy(() => import('../pages/properties/index'));

export const navbar = [
     {

        id: useId,
        element: <React.Suspense fallback={
            <React.Fragment>Loading....</React.Fragment>
        }

        ><HomePage /></React.Suspense>,
        title: 'Home',
        path: '/home',
        private: false,
        hidden: false
    }

    ,
    {

        id: useId,
        element: <React.Suspense fallback={
            <React.Fragment>Loading....</React.Fragment>
        }

        ><PropertyPage /></React.Suspense>,
        title: 'Properties',
        path: '/properties',
        private: false,
        hidden: false
    }

    ,
    { id: useId, element: <h1>Contacts</h1>, title: 'Contacts', path: '/contacts', private: false, hidden: false },
    { id: useId, element: <h1>Generic sign in</h1>, title: 'Sign In', path: '/signin', private: false, hidden: true },
]