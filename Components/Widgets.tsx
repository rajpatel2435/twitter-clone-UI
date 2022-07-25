import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import { Z_FULL_FLUSH } from 'zlib'

function Widgets() {
  return (
    <div className=' hidden mt-2 px-2 col-span-2 lg:inline'>
        <div className='flex items-center space-x-2 bg-gray-200 bg p-3 rounded-full'>
        <SearchIcon className='h-6 w-6 text-gray-400' />
        <input type="text" placeholder='Search here' className='bg-transparent flex-1 outline-none ' />
        </div>
        <TwitterTimelineEmbed
  sourceType="profile"
  screenName="saurabhnemade"
  options={{height:700}}
/>
    </div>
  )
}

export default Widgets