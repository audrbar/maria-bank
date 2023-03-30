import { useContext, useEffect, useState } from 'react';
import { Global } from './GlobalContext';

function ModalRemove() {

    const { remModal, setRemModal, setEdit } = useContext(Global);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        if (null === remModal) {
            return;
        }
        setAmount(0);
    }, [remModal]);

    const rem = _ => {
        setEdit({
            amount: parseInt(amount),
            id: remModal.id,
            action: 'rem'
        });
        setRemModal(null);
    }

    if (null === remModal) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75">
            <div className="fixed flex flex-col items-center justify-center inset-1/4 bg-white bg-opacity-75 text-center text-gray-500 text-xl rounded-lg shadow-xl p-6 md:inset-1/3">
                <p className="text-xl p-1 text-gray-500">Withdraw from account?</p>
                <p className="text-sm italic p-1 text-gray-500">Current balance - {remModal.amount} $</p>
                <div className="flex flex-col justify-center items-center gap-y-3">
                    <input className="bg-white border border-slate-300 rounded-md p-2 shadow-sm text-center focus:outline-none w-full focus:border-sky-500 focus:ring-sky-500" type="number" max={remModal.amount} name="amount" min="0" value={amount} onChange={e => setAmount(e.target.value)} />
                    <div className="flex justify-between items-center gap-x-1">
                        <button type="button" className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50" onClick={() => setRemModal(null)}>Cancel</button>
                        <button type="button" className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500" onClick={rem}>WITHDRAW</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalRemove;