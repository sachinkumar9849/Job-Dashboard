import React from 'react'

const JobInfo = ({ icon, text }) => {
  return (
    <div>
         <span className='icon'>{icon}</span>
      <span className='text-info'>{text}</span>
    </div>
  )
}

export default JobInfo