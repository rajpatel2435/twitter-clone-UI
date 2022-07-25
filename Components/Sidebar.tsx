import React from 'react'
import {
    BellIcon,
    HomeIcon,
    HashtagIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    BookmarkIcon
} from '@heroicons/react/outline';
import Sidebarrows from './Sidebarrows';

function Sidebar() {
  return (
      <>
      <div className='flex flex-col col-span-2 items-center px-4 md:items-start'>
    <Sidebarrows Icon={HomeIcon} Title="Home"/>
    <Sidebarrows Icon={HashtagIcon} Title="Explore"/>
    <Sidebarrows Icon={BellIcon} Title="Notification"/>
    <Sidebarrows Icon={MailIcon} Title="Message"/>
    <Sidebarrows Icon={BookmarkIcon} Title="Bookmark"/>
    <Sidebarrows Icon={CollectionIcon} Title="List"/>
     
    <Sidebarrows Icon={UserIcon} Title="Account"/>
    <Sidebarrows Icon={DotsCircleHorizontalIcon} Title="More"/>
</div>


    
    
    
    </>

  )
}

export default Sidebar