import useId from "../hooks/useID"
import { HomePage } from '../pages/home/index'
import PropertyPage from '../pages/properties/index'

export const navbar = [
    { id: useId, element: <HomePage />, title: 'Home', path: '/home', private: false, hidden: false },
    { id: useId, element: <PropertyPage />, title: 'Properties', path: '/properties', private: false, hidden: false },
    { id: useId, element: <h1>Contacts</h1>, title: 'Contacts', path: '/contacts', private: false, hidden: false },
    { id: useId, element: <h1>Generic sign in</h1>, title: 'Sign In', path: '/signin', private: false, hidden: true },
]