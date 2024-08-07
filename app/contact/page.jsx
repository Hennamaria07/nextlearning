import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div>
      Contact
    <Image 
    src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9ab07d07-ce92-442c-a02d-aa74a2bf1af4/dg2tish-49d8cbe1-c1c9-4a73-ae7e-79e425b78a94.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzlhYjA3ZDA3LWNlOTItNDQyYy1hMDJkLWFhNzRhMmJmMWFmNFwvZGcydGlzaC00OWQ4Y2JlMS1jMWM5LTRhNzMtYWU3ZS03OWU0MjViNzhhOTQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9FirUnqDR2Px1Iy2mc47N7vPukLyUnDeHdXSVspq4yw'
    alt='one piece'
    width={2000}
    height={675}
    className='w-full h-auto'
    />
    </div>
  )
}

export const generateMetadata = () => {
  return {
    title: 'Contact Us',
    description: 'Contact our customer service team for any questions or concerns.',
  }
}
export default Contact