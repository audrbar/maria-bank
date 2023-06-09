import { useEffect, useState } from 'react';
import axios from 'axios';
const URL = 'http://localhost:3003/accounts';


export const useWrite = _ => {

    const [response, setResponse] = useState(null);
    const [create, setCreate] = useState(null);
    const [destroy, setDelete] = useState(null);
    const [edit, setEdit] = useState(null);
    const [tax, setTax] = useState(null);
    const [block, setBlock] = useState(null);

    useEffect(() => {
        if (null === edit) {
            return;
        }
        axios.put(URL + '/' + edit.action + '/' + edit.id, { amount: edit.amount, blocked: edit.blocked })
            .then(res => setResponse(res.data));
    }, [edit]);

    useEffect(() => {
        if (null === tax) {
            return;
        }
        axios.put(URL + '/tax', { amount: tax.amount })
            .then(res => setResponse(res.data));
    }, [tax]);

    useEffect(() => {
        if (null === create) {
            return;
        }
        axios.post(URL, create, { withCredentials: true })
            .then(res => setResponse(res.data));

    }, [create]);

    useEffect(() => {
        if (null === destroy) {
            return;
        }
        axios.delete(URL + '/' + destroy.id, { withCredentials: true })
            .then(res => setResponse(res.data));

    }, [destroy]);

    useEffect(() => {
        if (null === block) {
            return;
        }
        axios.put(URL + '/block/' + block.id, { withCredentials: true })
            .then(res => setResponse(res.data));

    }, [block]);

    return [response, setCreate, setEdit, setDelete, setTax, setBlock];
}