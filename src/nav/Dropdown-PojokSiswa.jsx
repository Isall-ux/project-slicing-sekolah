    import React, { useState } from 'react';

const DropdownSiswa = () => {
  const options = [
    { value: 'PPLG', label: 'PPLG', link: 'https://smkyadikasoreang.sch.id/Jurusan/pplg' },
    { value: 'AKUNTANSI', label: 'AKUNTANSI', link: 'https://smkyadikasoreang.sch.id/Jurusan/akuntansi' },
    { value: 'PERHOTELAN', label: 'PERHOTELAN', link: 'https://smkyadikasoreang.sch.id/Jurusan/perhotelan' },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen((open) => !open)}
      className="px-5 py-2 bg-white flex items-center justify-between"
      >
        {selected || 'Jurusan'} <img src="./arrowDown.svg" alt="arrow" />
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

export default DropdownSiswa;