import React, { useState } from 'react';
import './Groups.css';

const AddStudentModal = ({ onClose, onAdd }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [payment, setPayment] = useState('');

    const handleSubmit = () => {
        onAdd({ name: `${name} ${surname}`, payment });
    };

    return (
        <div className="add-modal-backdrop">
            <div className="add-modal">
                <input placeholder="O‘quvchining ismi" onChange={(e) => setName(e.target.value)} />
                <input placeholder="O‘quvchining familiyasi" onChange={(e) => setSurname(e.target.value)} />
                <input placeholder="Oylik to‘lovi" onChange={(e) => setPayment(e.target.value)} />
                <button onClick={handleSubmit}>Qo‘shish</button>
                <img className="close-img" src="/assets/icons/close.svg" alt="close" onClick={onClose} />
            </div>
        </div>
    );
};

export default AddStudentModal;
