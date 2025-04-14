import React, { useState } from 'react';
import GroupModal from './GroupModal';
import './Groups.css';

const Groups = () => {
    const [selectedGroup, setSelectedGroup] = useState(null);

    const openGroup = (groupName) => {
        setSelectedGroup(groupName);
    };

    const closeGroup = () => {
        setSelectedGroup(null);
    };

    const groups = Array.from({ length: 21 }, (_, i) => `${i + 1}-guruh`);

    return (
        <div className='group_cont'>
            {groups.map((group, index) => (
                <button key={index} onClick={() => openGroup(group)}>{group}</button>
            ))}
            {selectedGroup && <GroupModal group={selectedGroup} onClose={closeGroup} />}
        </div>
    );
};

export default Groups;
