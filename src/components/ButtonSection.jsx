import '../index.css';
import { differences } from '../data';
import { useState } from 'react';
import Button from './Button/Button';

function ButtonSection() {
  const [contentType, setContentType] = useState(null);
  function handlerClick(type) {
    setContentType(type);
  }
  return (
    <section>
      <h3>Чем мы отличаемся от других</h3>
      <Button isActive={contentType === 'way'} onClick={() => handlerClick('way')}>
        Подход
      </Button>
      <Button isActive={contentType === 'easy'} onClick={() => handlerClick('easy')}>
        Доступность
      </Button>
      <Button isActive={contentType === 'program'} onClick={() => handlerClick('program')}>
        Концентрация
      </Button>
      {contentType ? <p>{differences[contentType]}</p> : <div>Нажми на кнопку</div>}
    </section>
  );
}

export default ButtonSection;
