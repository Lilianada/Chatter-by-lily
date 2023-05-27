import React from 'react';
import './style.scss';

export default function CallToAction() {
  return (
    <section className="cta__component">
        <div className="cta__description">
            Reading is essential for those who seek to{" "}<br/><span className='primary__text'> rise above the ordinary</span>.
        </div>
        <button className="cta__button">
            Get started now
        </button>
    </section>
  )
}
