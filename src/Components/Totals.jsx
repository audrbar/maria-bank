import { useContext } from 'react';
import { Global } from './GlobalContext';

const Totals = () => {

    const { list } = useContext(Global);


    return (
        <nav className="container mx-auto flex flex-col gap-y-12 items-center justify-between p-6 rounded-xl shadow-md mb-2">
            <h1 className="text-3xl text-center p-4 md:mt-8">We are number ONE!</h1>
            <h1 className="text-4xl text-center p-4 cursor-pointer hover:text-darkGrayishBlue">Our clients trust us:</h1>
            <div className="flex flex-col items-center justify-between gap-y-2 md:flex-row md:gap-x-4">
                <p className="pt-2 text-xl text-red-600">Cash Total: {" "}
                    {list?.map((item) => item.amount).reduce((acc, curr) => acc + curr, 0)}{" $"}
                </p>
                <p className="pt-2 text-xl text-red-600">Clients Total: {list === null ? null : list.length}</p>
            </div>
        </nav>
    )
}

export default Totals;
