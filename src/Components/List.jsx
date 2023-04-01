import { useContext, useState } from 'react';
import { Global } from './GlobalContext';
import Footer from './Footer';
import Totals from './Totals';



const List = () => {

    const { list, setDeleteModal, setAddModal, setRemModal, setEdit } = useContext(Global);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSort, setSelectedSort] = useState('');

    function handleCategoryChange(e) {
        setSelectedCategory(e.target.value);
    }

    function handleSortChange(sortOption) {
        setSelectedSort(sortOption);
    }

    const block = (id) => {
        setEdit({
            id: id,
            blocked: 1,
            action: 'block'
        });
    }

    const activate = (id) => {
        setEdit({
            id,
            blocked: 0,
            action: 'block'
        });
    }

    const filteredList = list?.filter(acc => {
        if (selectedCategory === 'Debited') {
            return acc.amount > 0
        }
        if (selectedCategory === 'Empty') {
            return acc.amount === 0
        }
        if (selectedCategory === 'Credited') {
            return acc.amount < 0
        }
        if (selectedCategory === 'Blocked') {
            return acc.blocked === 1
        }
        if (selectedCategory === 'Active') {
            return acc.blocked === 0
        }
        return true;
    }).sort((a, b) => {
        if (selectedSort === 'surname') {
            return a.surname.localeCompare(b.surname)
        }
        if (selectedSort === 'amount') {
            return a.amount - b.amount
        }
        return 0;
    })

    return (
        <div className="container mx-auto flex flex-col items-center justify-between p-4 rounded-xl shadow-md" >
            <Totals />
            <div className="flex flex-col w-full items-center justify-between md:flex-row">
                <div>
                    <p className="text-xl">Accounts List</p>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <p className="text-xl inline-block">Sort by:</p>
                    <button type="button" className="bg-gray-500 hover:bg-gray-700 text-white px-2 m-2 rounded-full" value="surname" onClick={() => handleSortChange('surname')}>surname</button>
                    <button type="button" className="bg-gray-500 hover:bg-gray-700 text-white px-2 m-2 rounded-full" value="amount" onClick={() => handleSortChange('amount')}>amount</button>
                    <button type="button" className="bg-gray-500 hover:bg-gray-700 text-white px-2 m-2 rounded-full" value="original" onClick={() => handleSortChange('original')}>original</button>
                </div>
                <div className="flex flex-row items-center">
                    <p className="text-xl inline-block m-2">Filter:</p>
                    <select
                        className="px-4 py-2 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-md"
                        name="category list"
                        type="radio"
                        id="category list"
                        onChange={handleCategoryChange}
                    >
                        <option value="">All</option>
                        <option value="Debited">Debited</option>
                        <option value="Empty">Empty</option>
                        <option value="Credited">Credited</option>
                        <option value="Blocked">Blocked</option>
                        <option value="Active">Active</option>
                    </select>
                </div>
            </div>
            {
                filteredList?.length ?
                    filteredList?.map(account => (<div key={account.id} className="flex flex-col items-center justify-between w-full shadow-md rounded-x md:flex-row">
                        <ul className="flex flex-row items-center justify-between w-full p-1">
                            <li className="p-2">
                                <h2><span className="text-slate-400">Surname: </span>{account.surname}</h2>
                            </li>
                            <li className="p-2">
                                <h2><span className="text-slate-400">Name: </span>{account.firstname}</h2>
                            </li>
                            <li className="p-2">
                                <h2><span className="text-slate-400">Balance: </span>{account.amount}<span className="text-slate-400"> $</span></h2>
                            </li>
                        </ul>
                        <div className="flex flex-row justify-between p-1">
                            {
                                !account.blocked ?
                                    <>
                                        <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 m-1 rounded" onClick={() => block(account.id)}>BLOCK</button>
                                        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-1 rounded" onClick={() => setAddModal(account)}>ADD</button>
                                        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-1 rounded" onClick={() => setRemModal(account)}>REMOVE</button>
                                        <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 m-1 rounded" onClick={() => setDeleteModal(account)}>DELETE</button>
                                    </>
                                    :
                                    <>
                                        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-1 rounded" onClick={() => activate(account.id)}>UNBLK</button>
                                        <button type="button" className="bg-gray-500 hover:bg-gray-700 text-white font-bold p-2 m-1 rounded" onClick={() => setAddModal(account)}>ADD</button>
                                        <button type="button" className="bg-gray-500 hover:bg-gray-700 text-white font-bold p-2 m-1 rounded" onClick={() => setRemModal(account)}>REMOVE</button>
                                        <button type="button" className="bg-gray-500 hover:bg-gray-700 text-white font-bold p-2 m-1 rounded" onClick={() => setDeleteModal(account)}>DELETE</button>
                                    </>
                            }
                        </div>
                    </div>))
                    :
                    <p className="pt-2 text-xl text-red-600">Nothing to show!</p>
            }
            <Footer />
        </div >
    )
}

export default List;
