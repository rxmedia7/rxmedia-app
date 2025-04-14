import React, { useState, useRef, useEffect } from "react";
import "./Teachers.css";

const TeacherTable = () => {
    const [teachers, setTeachers] = useState([
        { id: 1, name: "John", surname: "Doe", group: "1-guruh" },
        { id: 2, name: "John", surname: "Doe", group: "2-guruh" },
        { id: 3, name: "John", surname: "Doe", group: "3-guruh" },
        { id: 4, name: "John", surname: "Doe", group: "4-guruh" },
        { id: 5, name: "John", surname: "Doe", group: "5-guruh" },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({ name: "", surname: "", group: "" });
    const [editingId, setEditingId] = useState(null);
    const [expandedGroupId, setExpandedGroupId] = useState(null);

    const groupNameRefs = useRef({});

    useEffect(() => {
        const refs = {};
        teachers.forEach((teacher) => {
            refs[teacher.id] = refs[teacher.id] || React.createRef();
        });
        groupNameRefs.current = refs;
    }, [teachers]);

    const handleAdd = () => {
        if (!formData.name || !formData.surname || !formData.group) return;

        if (editingId) {
            setTeachers(
                teachers.map((teacher) =>
                    teacher.id === editingId
                        ? { ...teacher, ...formData }
                        : teacher
                )
            );
            setEditingId(null);
        } else {
            const newTeacher = {
                id: Math.max(...teachers.map((t) => t.id), 0) + 1,
                ...formData,
            };
            setTeachers([...teachers, newTeacher]);
        }

        setFormData({ name: "", surname: "", group: "" });
        setShowModal(false);
    };

    const handleDelete = (id) => {
        setTeachers(teachers.filter((teacher) => teacher.id !== id));
    };

    const handleEdit = (id) => {
        const teacherToEdit = teachers.find((teacher) => teacher.id === id);
        if (teacherToEdit) {
            setFormData({
                name: teacherToEdit.name,
                surname: teacherToEdit.surname,
                group: teacherToEdit.group,
            });
            setEditingId(id);
            setShowModal(true);
        }
    };

    const getDisplayGroupName = (groupName, id) => {
        if (expandedGroupId === id) return groupName;
        return groupName.length > 12 ? `${groupName.substring(0, 12)}...` : groupName;
    };

    const toggleGroupNameExpansion = (id) => {
        setExpandedGroupId((prevId) => (prevId === id ? null : id));
    };

    return (
        <div className="container">
            <div className="teacher_main">
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th className="first-head">№</th>
                                <th>Ism / Familiya</th>
                                <th>Dars beradigan guruhi</th>
                                <th className="last-head">Tahrirlash</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teachers.map((teacher, index) => (
                                <tr key={teacher.id}>
                                    <td>{String(index + 1).padStart(2, "0")}</td>
                                    <td>
                                        {teacher.name} {teacher.surname}
                                    </td>
                                    <td
                                        className="group-name-cell"
                                        onClick={() => toggleGroupNameExpansion(teacher.id)}
                                        title={teacher.group}
                                        style={{
                                            cursor: teacher.group.length > 12 ? "pointer" : "default",
                                        }}
                                        ref={groupNameRefs.current[teacher.id]}
                                    >
                                        {getDisplayGroupName(teacher.group, teacher.id)}
                                    </td>
                                    <td>
                                        <img
                                            src="/assets/icons/edit.svg"
                                            alt="edit icon"
                                            className="edit-btn"
                                            onClick={() => handleEdit(teacher.id)}
                                        />
                                        <img
                                            className="delete-btn"
                                            src="/assets/icons/delete.svg"
                                            onClick={() => handleDelete(teacher.id)}
                                            alt="delete icon"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <button
                    className="add-teacher-btn"
                    onClick={() => {
                        setFormData({ name: "", surname: "", group: "" });
                        setEditingId(null);
                        setShowModal(true);
                    }}
                >
                    Yangi o‘qituvchi qo‘shish
                </button>
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
                            placeholder="O‘qituvchining ismi"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                        />
                        <input
                            type="text"
                            placeholder="O‘qituvchining familiyasi"
                            value={formData.surname}
                            onChange={(e) =>
                                setFormData({ ...formData, surname: e.target.value })
                            }
                        />
                        <input
                            type="text"
                            placeholder="Dars beradigan guruhi"
                            value={formData.group}
                            onChange={(e) =>
                                setFormData({ ...formData, group: e.target.value })
                            }
                        />
                        <button className="add-btn" onClick={handleAdd}>
                            {editingId ? "Saqlash" : "Qo‘shish"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TeacherTable;
