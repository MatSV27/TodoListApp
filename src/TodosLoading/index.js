import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
  return (
    <div className="loader">
      <div className="loader__bar"></div>
      <div className="loader__bar"></div>
      <div className="loader__bar"></div>
      <div className="loader__bar"></div>
      <div className="loader__bar"></div>
      <div className="loader__ball"></div>
    </div>
  );
}

export {TodosLoading};