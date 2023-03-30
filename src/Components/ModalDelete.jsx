import { useContext } from 'react';
import { Global } from './GlobalContext';

function ModalDelete() {

    const { deleteModal, setDeleteModal, setDelete } = useContext(Global);

    const del = _ => {
        setDelete(deleteModal);
        setDeleteModal(null);
    }

    if (null === deleteModal) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75">
            <div className="fixed flex flex-col items-center justify-center inset-1/4 bg-white bg-opacity-75 text-center text-gray-500 text-xl rounded-lg shadow-xl p-6 md:inset-1/3">
                <p className="text-md p-2 text-gray-500">Do you really want to delete this account?</p>
                <div className="flex justify-center items-center gap-x-3">
                    <button type="button" className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50" onClick={() => setDeleteModal(null)}>CANCEL</button>
                    <button type="button" className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500" onClick={del}>DELETE</button>
                </div>
            </div>
        </div >
    );
}

export default ModalDelete;