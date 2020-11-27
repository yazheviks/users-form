import React from 'react';

export const Wave = () => (
  <div className="wave">
    <div className="wave__wrapper wave__animation">
      <div className="wave__wrapperInner bgTop">
        <div className="wave__item wave__top" />
      </div>
      <div className="wave__wrapperInner bgMiddle">
        <div className="wave__item wave__middle" />
      </div>
      <div className="wave__wrapperInner bgBottom">
        <div className="wave__item wave__bottom" />
      </div>
    </div>
  </div>
);
