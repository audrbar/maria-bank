import { useContext, useState } from 'react';
import { Global } from './GlobalContext';
import Footer from './Footer';
import Totals from './Totals';



const List = () => {

    const { list, setDeleteModal, setAddModal, setRemModal, blockAccount } = useContext(Global);
    const [selectedCategory, setSelectedCategory] = useState('');

    function handleCategoryChange(e) {
        setSelectedCategory(e.target.value);
    }

    return (
        <div className="container mx-auto flex flex-col items-center justify-between p-4 rounded-xl shadow-md" >
            <Totals />
            <div className="flex flex-row w-full items-center justify-between">
                <div>
                    <p className="text-xl">Accounts List</p>
                </div>
                <div>
                    <select
                        className="px-6 py-2 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-md"
                        name="category list"
                        type="radio"
                        id="category list"
                        onChange={handleCategoryChange}
                    >
                        <option value="">All</option>
                        <option value="Active">Active</option>
                        <option value="Empty">Empty</option>
                    </select>
                </div>
            </div>
            {
                list?.filter(acc => {
                    if (selectedCategory === 'Active') {
                        return acc.amount > 0
                    }
                    if (selectedCategory === 'Empty') {
                        return acc.amount <= 0
                    }
                    return true;
                }).map(n => (<div key={n.id} className="flex flex-col items-center justify-between w-full shadow-md rounded-x md:flex-row">
                    <ul className="flex flex-row items-center justify-between w-full p-1">
                        <li className="p-2">
                            <h2><span className="text-slate-400">Surname: </span>{n.surname}</h2>
                        </li>
                        <li className="p-2">
                            <h2><span className="text-slate-400">Name: </span>{n.firstname}</h2>
                        </li>
                        <li className="p-2">
                            <h2><span className="text-slate-400">Balance: </span>{n.amount}<span className="text-slate-400"> $</span></h2>
                        </li>
                    </ul>
                    <div className="flex flex-row justify-between p-1">
                        <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 m-1 rounded" onClick={blockAccount}>BLOCK</button>
                        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-1 rounded" onClick={() => setAddModal(n)}>ADD</button>
                        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-1 rounded" onClick={() => setRemModal(n)}>REMOVE</button>
                        <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 m-1 rounded" onClick={() => setDeleteModal(n)}>DELETE</button>

                    </div>
                </div>))
            }
            <Footer />
        </div >
    )
}

export default List;
