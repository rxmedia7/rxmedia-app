import React from 'react';
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <div className="statistics">
                <div className="student_nm">
                    <div className="count_info">
                        <p>Jami o'quvchilar soni</p>
                    </div>
                    <div className="st_details">
                        <img src="/assets/media/students.svg" alt="students" />
                        <p id='count'>0</p>
                    </div>
                </div>

                <div className="group_nm">
                    <div className="count_info">
                        <p>Guruhlar soni</p>
                    </div>
                    <div className="group_details">
                        <img src="/assets/media/group.svg" alt="group" />
                        <p id='count'>0</p>
                    </div>
                </div>

                <div className="teacher_nm">
                    <div className="count_info">
                        <p>O'qituvchilar soni</p>
                    </div>
                    <div className="stat_details">
                        <img src="/assets/media/teacher.svg" alt="teacher" />
                        <p id='count'>0</p>
                    </div>
                </div>

                <div className="debtor_nm">
                    <div className='count_info'>
                        <p>Qarzdorlar soni</p>
                    </div>
                    <div className="stat_details">
                        <img src="/assets/media/debtor.svg" alt="debtor" />
                        <p id='count'>0</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;