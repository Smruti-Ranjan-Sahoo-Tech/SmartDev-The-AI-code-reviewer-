import React from 'react'
import Left from '../components/code-review/Left'
import Right from '../components/code-review/Right'

const CodeReview = () => {
    
  return (
    <div className='bg-gray-600 h-screen flex  flex-col md:flex-row items-stretch p-5 gap-4'>
       <Left />
       <Right/>
    </div>
  )
}

export default CodeReview