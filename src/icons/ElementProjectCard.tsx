import React from 'react'

const ElementProjectCard = props => {
  return (
    <svg
      {...props}
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        width='24.9999'
        height='5.46874'
        rx='1'
        transform='matrix(1 0 0 -1 0 24.9995)'
        fill='#2D76F9'
      />
      <rect
        width='14.0625'
        height='5.46874'
        rx='1'
        transform='matrix(1 0 0 -1 10.938 14.0625)'
        fill='#2D76F9'
      />
      <rect
        width='24.9999'
        height='5.46874'
        rx='1'
        transform='matrix(0 1 1 0 0 0.00012207)'
        fill='#2D76F9'
      />
      <rect
        width='14.0625'
        height='5.46874'
        rx='1'
        transform='matrix(0 1 1 0 10.938 0.00012207)'
        fill='#2D76F9'
      />
    </svg>
  )
}

export default ElementProjectCard