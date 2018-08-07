import React from 'react';
const Change = (title, callback) => {
  return (
      <button className="change" onClick={callback}>
        <i className="fas fa-adjust"></i>
        {title}
      </button>    
  )
}
export default Change;   