import React from 'react'

function ColoredValue({ children, value }) {
  const color =
    value > 0
      ? 'text-green-500 font-semibold'
      : value < 0
      ? 'text-red-500 font-semibold'
      : ''

  return <span className={color}>{children}</span>
}

export { ColoredValue }
