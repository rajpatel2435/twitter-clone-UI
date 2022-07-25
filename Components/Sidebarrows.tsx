import React, { SVGProps } from 'react'

interface Props{
    Icon: (props: SVGProps<SVGSVGElement>)=>JSX.Element
    Title: string
}
function Sidebarrows({Icon,Title}:Props) {
    
    return (
        <div className='flex max-w-fit px-3 py-4 items-center rounded-full hover:bg-gray-200 cursor-pointer transition-all duration-100 translate-x-3 translate-y-8 group space-x-2'>
            <Icon className='h-6 w-6' />
            <p className='group-hover:text-blue-400 text-base fonr-light hidden md:inline lg:text-xl'>{Title}</p>
        </div>
  
  )
}

export default Sidebarrows