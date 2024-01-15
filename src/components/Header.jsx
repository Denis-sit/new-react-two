import '../index.css';
import logo from '../image/logo-name.svg';
import { useState } from 'react';

function Header() {
  const [now, setNow] = useState(new Date());

  setInterval(() => setNow(new Date()), 1000);

  return (
    <header>
      <img src={logo} alt="logo" />
      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </header>
  );
}

export default Header;
