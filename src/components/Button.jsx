import React from 'react'

const Button = ({label, iconURL, backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none  rounded-full whitespace-nowrap ${fullWidth && 'w-full'}  ${backgroundColor? `${backgroundColor} ${textColor} ${borderColor}`:"bg-coral-red border-coral-red text-white"}`}>
        {label}
        {iconURL && <img src={iconURL} alt='arrowRightIcon'
        className='ml-2 rounded-full w-5 h-5'/>}
    </button>
  )
}

export default Button