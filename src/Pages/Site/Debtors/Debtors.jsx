import React, { useState } from 'react';
import './Debtors.css';

const Debtors = () => {
    const [students, setStudents] = useState([
        { id: 1, name: 'Ali', surname: 'Valiyev', group: '1-guruh', tuition: '500000 UZS', debt: 200000 },
        { id: 2, name: 'Laylo', surname: 'Karimova', group: '2-guruh', tuition: '600000 UZS', debt: 0 },
        { id: 3, name: 'Zafar', surname: 'Qodirov', group: '3-guruh', tuition: '550000 UZS', debt: 0 },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ name: '', surname: '', group: '', tuition: '', debt: 0 });
    const [editingId, setEditingId] = useState(null);

    const handleEdit = (id) => {
        const studentToEdit = students.find((s) => s.id === id);
        if (studentToEdit) {
            setFormData({ ...studentToEdit });
            setEditingId(id);
            setShowModal(true);
        }
    };

    const handleDelete = (id) => {
        setStudents(students.filter((student) => student.id !== id));
    };

    const handleSave = () => {
        if (!formData.name || !formData.surname || !formData.group || !formData.tuition) return;

        setStudents(
            students.map((student) =>
                student.id === editingId ? { ...formData } : student
            )
        );
        setEditingId(null);
        setShowModal(false);
    };

    const debtors = students.filter((student) => student.debt > 0);

    return (
        <div className="container">
            <div className="debtor_main">
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th className="first-head">№</th>
                                <th>Ism / Familiya</th>
                                <th>O‘qiydigan guruhi</th>
                                <th>To‘lov miqdori</th>
                                <th>Qarzdorlik</th>
                                <th className="last-head">Tahrirlash</th>
                            </tr>
                        </thead>
                        <tbody>
                            {debtors.map((student, index) => (
                                <tr key={student.id}>
                                    <td>{String(index + 1).padStart(2, "0")}</td>
                                    <td>{student.name} {student.surname}</td>
                                    <td>{student.group}</td>
                                    <td>{student.tuition}</td>
                                    <td>{student.debt > 0 ? `${student.debt} UZS` : 'Yo‘q'}</td>
                                    <td>
                                        <img
                                            src="/assets/icons/edit.svg"
                                            alt="edit icon"
                                            className="edit-btn"
                                            onClick={() => handleEdit(student.id)}
                                        />
                                        <img
                                            className="delete-btn"
                                            src="/assets/icons/delete.svg"
                                            onClick={() => handleDelete(student.id)}
                                            alt="delete icon"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {showModal && (
                <div
                    className="modal"
                    onClick={(e) => {
                        if (e.target.className === "modal") setShowModal(false);
                    }}
                >
                    <div className="modal-content">
                        <input
                            type="text"
                            placeholder="Ismi"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                        />
                        <input
                            type="text"
                            placeholder="Familiyasi"
                            value={formData.surname}
                            onChange={(e) =>
                                setFormData({ ...formData, surname: e.target.value })
                            }
                        />
                        <input
                            type="text"
                            placeholder="O‘qiydigan guruhi"
                            value={formData.group}
                            onChange={(e) =>
                                setFormData({ ...formData, group: e.target.value })
                            }
                        />
                        <input
                            type="text"
                            placeholder="To‘lov miqdori (masalan, 500000 UZS)"
                            value={formData.tuition}
                            onChange={(e) =>
                                setFormData({ ...formData, tuition: e.target.value })
                            }
                        />
                        <input
                            type="number"
                            placeholder="Qarzdorlik miqdori"
                            value={formData.debt}
                            onChange={(e) =>
                                setFormData({ ...formData, debt: e.target.value })
                            }
                        />
                        <button className="add-btn" onClick={handleSave}>
                            Saqlash
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Debtors;
