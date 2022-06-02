import React from 'react';

export default function EndPart() {
  return(
    <div className='endpart d-flex flex-column align-items-center'>
      <div className='mb-5'>
        <button className='endpart__btn'>Get unlimited access</button>
        <div className='endpart__searchbox'>
          <i className='bx bx-search endpart__sicon'></i>
          <input placeholder='Search' className='endpart__search' type="text" />
        </div>
      </div>
      <div className='endpart__adv d-flex flex-column justify-content-center'>
        <p className='endpart__text'>
          Bu joyda sizni reklamangiz bo'lishi mumkin edi!!!
        </p>
      </div>
    </div>
  );
}
