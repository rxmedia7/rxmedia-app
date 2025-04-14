import React, { useState } from 'react';
import AddStudentModal from './AddStudentModal';
import './Groups.css';

const GroupModal = ({ group, onClose }) => {
    const [students, setStudents] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);

    const addStudent = (student) => {
        setStudents([...students, student]);
        setShowAddModal(false);
    };

    return (
        <div className="modal-backdrop">
            <div className="group-modal">
                <div className="header">
                    <h3>{group}</h3>
                    <img src="/assets/icons/close.svg" onClick={onClose} className="close-btn"></img>
                </div>
                <table className="students-table">
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Ism / Familiya</th>
                            <th>Guruhi</th>
                            <th>Oylik to‘lovi</th>
                            <th>Tahrirlash</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((s, idx) => (
                            <tr key={idx}>
                                <td>{String(idx + 1).padStart(2, '0')}</td>
                                <td>{s.name}</td>
                                <td>{group}</td>
                                <td>{s.payment}</td>
                                <td>
                                    <img src="/assets/icons/edit.svg" alt="edit" />
                                    <img src="/assets/icons/delete.svg" alt="delete" />
                                </td>
                            </tr>
                        ))}
                        {[...Array(11 - students.length)].map((_, i) => (
                            <tr key={`empty-${i}`}>
                                <td>{String(students.length + i + 1).padStart(2, '0')}</td>
                                <td colSpan="4"></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="add-btn" onClick={() => setShowAddModal(true)}>
                    Guruhga yangi o‘quvchi qo‘shish
                </button>
                {showAddModal && <AddStudentModal onClose={() => setShowAddModal(false)} onAdd={addStudent} />}
            </div>
        </div>
    );
};

export default GroupModal;
