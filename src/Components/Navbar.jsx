import { useContext } from 'react';
import { Global } from './GlobalContext';

const Navbar = () => {

    const { route, setRoute, authName, logOut } = useContext(Global);

    <ul className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0'></ul>

    return (
        <nav className="container mx-auto pt-6 pb-6 flex flex-col gap-y-4 items-center md:justify-between md:flex-row">
            <p className="text-4xl text-center cursor-pointer hover:text-darkGrayishBlue">
                <span onClick={_ => setRoute('home')} className={
                    'nav-link' + (route === 'home' ? ' active' : '')
                }>Kija International</span></p>
            <div className="flex flex-col items-center md:flex-row md:space-x-6">
                <ul className="flex flex-row items-center space-x-6">
                    <li className="nav-item cursor-pointer">
                        <span onClick={_ => setRoute('home')} className={
                            'block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100' + (route === 'home' ? ' border-b rounded-none border-gray-700' : '')
                        }>Home</span>
                    </li>
                    {
                        authName ?
                            (
                                <li className="nav-item cursor-pointer">
                                    <span onClick={_ => setRoute('accounts')} className={
                                        'block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100' + (route === 'accounts' ? ' border-b rounded-none border-gray-700' : '')
                                    }>Accounts</span>
                                </li>
                            ) : null
                    }
                </ul>
            </div>
            {
                authName ?
                    (
                        <>
                            <ul className="flex flex-row items-center space-x-6">
                                <li className="nav-item">
                                    <span className="nav-link"><b>{authName}</b></span>
                                </li>
                                <li className="nav-item cursor-pointer">
                                    <span className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100" onClick={logOut}>Logout</span>
                                </li>
                            </ul>
                        </>
                    ) :
                    (
                        <div className="nav-item cursor-pointer">
                            <span onClick={_ => setRoute('login')} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100">Login</span>
                        </div>
                    )
            }
        </nav>
    )
}

export default Navbar;
