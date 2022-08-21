import React from 'react'

export default function AuthLayout(props) {
  const link = '/img/background.jpg'
  const background = {
    backgroundImage: 'url(' + link + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  const bgColor = {
    minHeight: '100vh',
  }

  return (
    <div style={background}>
      <div style={bgColor}>
        {props.children}
      </div>
    </div>
  )
}
