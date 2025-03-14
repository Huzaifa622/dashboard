import React from 'react'

type Props = {
    title:string;
}

function Breadcrumb({title}: Props) {
  return (
    <div className="w-[100%] border-b border-b-[#27272A] border-dashed  " >
    <h1 className="font-bold text-xl py-2" >{title}</h1>
  </div>
  )
}

export default Breadcrumb