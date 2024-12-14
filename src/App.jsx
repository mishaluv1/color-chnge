import React, { useState } from 'react';
function App() {
  // Initialize state for background color
  const [backgroundColor, setBackgroundColor] = useState('white');

  // Function to change background color based on button click
  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div  style={{ backgroundColor: backgroundColor, height: '100vh', transition: 'background-color 0.5s  ',textAlign:'center' }}>
      <h1 className='  p-5 d-flex align-items-center justify-content-between' style={{padding:'5', justifyContent:'space-between'}}>MISHAL UV</h1>
      <div className='d-flex  justify-content-between'>
        <button onClick={() => changeBackgroundColor('grey')}>GREY</button>
        <button onClick={() => changeBackgroundColor('navy')}>NAVY</button>
        <button onClick={() => changeBackgroundColor('lightblue')}>LIGHT BLUE</button>
      </div>
    </div>
  );
}

export default App;