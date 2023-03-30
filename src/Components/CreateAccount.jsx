import { useContext, useState } from 'react';
import { Global } from './GlobalContext';

const CreateAccount = () => {

    const [surname, setSurname] = useState('');
    const [firstname, setFirstName] = useState('');
    const [amount, setAmount] = useState(0);
    const { setCreate } = useContext(Global);

    const create = e => {
        e.preventDefault();
        setCreate({
            surname,
            firstname,
            amount: parseInt(amount),
        });
        setSurname('');
        setFirstName('');
        setAmount(0);
    }

    return (
        <div className="container mx-auto flex flex-col items-center justify-between p-4 rounded-xl shadow-md mb-2 md:flex-row">
            <p className="text-xl mb-3 md:mb-0">Create an account</p>
            <form className='flex flex-col items-center justify-between gap-y-2 md:flex-row md:gap-x-4'>
                <label className="relative block">
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Your Name..." type="text" value={firstname} onChange={e => setFirstName(e.target.value)} />
                </label>
                <label className="relative block">
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-2 pr-3 max-w-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Your Surname..." type="text" value={surname} onChange={e => setSurname(e.target.value)} />
                </label>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={create}>Create</button>
            </form>
        </div>
    )
}

export default CreateAccount;
