import React from 'react'

type Props = { children: React.ReactNode }

const StyledButton = ({ children }: Props) => {
    return (
        <div className='text-grayish-voilet transition duration-500 hover:text-very-dark-blue hover:cursor-pointer text-[14px]'>{children}</div>
    )
}

export default StyledButton