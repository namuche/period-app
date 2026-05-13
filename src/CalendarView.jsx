import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarView = ({ session }) => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Bienvenida, {session.user.email}</h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Calendar />
      </div>
      <button 
        onClick={() => window.location.reload()} 
        style={{ marginTop: '20px', backgroundColor: '#ff85a2', color: 'white', padding: '10px 20px', borderRadius: '20px', border: 'none' }}
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

export default CalendarView;