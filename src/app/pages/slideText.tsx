// components/SlideInRightText.js
import React from 'react';

const text = 'Jeetendra Kumar Barman';

const SlideInRightText = () => {
  return (
    <p className="flex justify-center items-center md:text-6xl text-2xl lg:text-6xl font-bold">
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`inline-block animate-slideInRight ${char === '' ? 'w-4' : ''}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {char.trim() || '\u00A0'}
        </span>
      ))}
    </p>
  );
};

export default SlideInRightText;
