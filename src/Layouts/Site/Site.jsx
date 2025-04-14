import React, { useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../../Components/Macro/Header/Header';
import Sidebar from '../../Components/Macro/Header/Sidebar/Sidebar';
import Home from '../../Pages/Site/Home/Home';
import Teachers from '../../Pages/Site/Teachers/Teachers';
import Students from '../../Pages/Site/Students/Students';
import Groups from '../../Pages/Site/Groups/Groups';
import Debtors from '../../Pages/Site/Debtors/Debtors';

function Site() {
  const sidebarRef = useRef(null);
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    const toggleBtn = toggleBtnRef.current;

    const toggleSidebar = (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('open');
    };

    const closeSidebar = (e) => {
      if (
        window.innerWidth < 768 &&
        sidebar.classList.contains('open') &&
        !sidebar.contains(e.target) &&
        !toggleBtn.contains(e.target)
      ) {
        sidebar.classList.remove('open');
      }
    };

    toggleBtn?.addEventListener('click', toggleSidebar);
    document.addEventListener('click', closeSidebar);

    return () => {
      toggleBtn?.removeEventListener('click', toggleSidebar);
      document.removeEventListener('click', closeSidebar);
    };
  }, []);

  return (
    <div className='container'>
      <Header toggleBtnRef={toggleBtnRef} />
      <Sidebar ref={sidebarRef} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/students" element={<Students />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/debtors" element={<Debtors />} />
        </Routes>
      </main>
    </div>
  );
}

export default Site;
