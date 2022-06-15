import React from 'react'
import {Button} from "./Button"

export const ButtonArea = ( {handleOnClick}) => {
  
 const buttons =[
  {
  lable: "AC",
  clsNm: "box box-AC"
  },
  { 
          lable: "C",
        clsNm: "box pdm"
 },
    {
        lable: "%",
      clsNm: "box box-percent"
    },
    {
        lable: "/",
              clsNm: "box box-divide"
    },
    {
        lable: "7",
              clsNm: "box box-7"
    },
   {
                lable: "8",
                      clsNm: "box box-8"
    },
   {
                        lable: "9",
                              clsNm: "box box-9"
    },
    {
                                lable: "*",
                                      clsNm: "box box-x"
   },
    {
                                        lable: "4",
                                              clsNm: "box box-4"
    },
    {
                                                lable: "5",
                                                      clsNm: "box box-5"
    },
    {
                                                        lable: "6",
                                                              clsNm: "box box-6"
    } ,  
    {
                                                                lable: "-",
                                                                      clsNm: "box box-minus"
   },   
   {
                                                                        lable: "1",
                                                                              clsNm: "box box-1"
    }  ,
    {
                                                                                lable: "2",
                                                                                      clsNm: "box box-2"
    }  ,
    {
                                                                                        lable: "3",
                                                                                              clsNm: "box box-3"
    } ,    
   {
   lable: "+",
  clsNm:"box box-plus"
  } ,
    {
                                                                                                        lable: "0",
                                                                                                              clsNm: "box box-zero"
    }   ,
   {
                                                                                                                lable: ".",
                                                                                                                      clsNm: "box box-dot"
    }  ,
    {
                                                                                                                        lable: "=",
                                                                                                                              clsNm: "box box-equals"
 }                  
 ]
      return (    <> 
      {
          buttons.map((item, i) => { 
            //   return <Button key={i} clsNm= {item.clsNm} lable={item.lable}/>
              return <Button handleOnClick={handleOnClick} {...item} /> 

          })
      }
   
      </>
  
  )
}


