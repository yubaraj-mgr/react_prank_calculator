import React from 'react'

export const Button = ({clsNm, lable, handleOnClick}) => {
 
  return (
    <div className={clsNm}
    onClick = { ()=> handleOnClick(lable)} >{lable}</div>
  )
}


