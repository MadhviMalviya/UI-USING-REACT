import React, { useState } from 'react'



function Button() {
  const [img, setImg] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFgXzzowab8scwfSl-FK9X5F56Xes0wGnHLQ&usqp=CAU')

  function changeImg() {
    setImg('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgBwqy-CsXpBHVmVAqumra_XbWcLmaPE-tBw&usqp=CAU')
  }


  return (
    <>
      <div className="row">
        <div className="col1"><img src={img} alt="image"  ></img></div>
        <div className="col2"><button onClick={changeImg}>change img</button></div>
      </div>
    </>
  )
}



export default Button

