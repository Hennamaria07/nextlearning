'use client'
import { redirect } from 'next/navigation'
import React from 'react'

const Id = ({params}) => {
    if(params.id === '4') {
        redirect('/contact')
    }
    console.log(params)
  return (
    <div>ID {params.id}</div>
  )
}

export default Id