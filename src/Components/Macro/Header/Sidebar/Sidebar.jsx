import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = React.forwardRef((props, ref) => {
    return (
        <div className='sidebar' id='sidebar' ref={ref}>
            <ul>
                <li><NavLink to="/"><button>Bosh sahifa</button></NavLink></li>
                <li><NavLink to="/teachers"><button>O'qituvchilar</button></NavLink></li>
                <li><NavLink to="/students"><button>O'quvchilar</button></NavLink></li>
                <li><NavLink to="/groups"><button>Guruhlar</button></NavLink></li>
                <li><NavLink to="/debtors"><button>Qarzdorlar</button></NavLink></li>
            </ul>
        </div>
    );
});

export default Sidebar;
