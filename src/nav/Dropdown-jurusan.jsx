    import React, { useState } from 'react';

const Dropdown = () => {
  const options = [
    { 
      value: 'EKSTRAKURIKULER', 
      label: 'EKSTRAKURIKULER', 
      link: 'https://smkyadikasoreang.sch.id/Pojoksiswa/Ekstrakurikuler' 
    },
    { 
      value: 'PENGHARGAAN', 
      label: 'PENGHARGAAN', 
      link: 'https://smkyadikasoreang.sch.id/Pojoksiswa/Penghargaan' 
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <button onClick={() => setIsOpen((open) => !open)}
      className="px-5 py-2 bg-white flex items-center justify-between "
      >
        {selected || 'Pojok Siswa'} <img src="./arrowDown.svg" alt="arrow" />
      </button>
      {isOpen && (
        <ul className="shadow-lg bg-white rounded-md flex flex-col absolute mt-2">
          {options.map((opt) => (
            <li
              key={opt.value}
              onClick={() => {
                setIsOpen(false);
              }}
              className="px-5 py-2 hover:bg-gray-200 active:bg-blue-500 active:text-white"
            >
              <a href={opt.link}>
              {opt.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;