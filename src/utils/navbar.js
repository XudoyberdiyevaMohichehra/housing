import useId from "../hooks/useID"
import { HomePage } from '../pages/home/index'
import PropertyPage from '../pages/properties/index'

export const navbar = [
    { id: useId, element: <HomePage />, title: 'Home', path: '/home', private: false, hidden: false },
    { id: useId, element: <PropertyPage />, title: 'Properties', path: '/properties', private: false, hidden: false },
    { id: useId, element: <PropertyPage />, title: 'Contacts', path: '/contacts', private: false, hidden: false },
]