import { HiMenuAlt3, HiX } from 'react-icons/hi';

function MenuToggle ({ isOpen, toggle }) {
  return (
    <button className="menu-toggle" onClick={toggle} aria-label="Toggle Menu">
      {isOpen ? <HiX /> : <HiMenuAlt3 />}
    </button>
  );
};

export default MenuToggle;