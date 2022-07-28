import Image from 'next/image';
import { SidebarMenuItem } from '../components';
import { HomeIcon } from "@heroicons/react/solid";
import { BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, InboxIcon, UserIcon } from "@heroicons/react/outline";


const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
      {/* Twitter Logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
          width="50"
          height="50"
          alt="Logo"
        />
      </div>

      {/* Menu Icons */}
      <div className="mt-4 mb:2.5 xl:items-start">
        <SidebarMenuItem text="home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notification" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
      </div>

      {/* Sign In Button */}
      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:block">Tweet</button>


      {/* Mini Profile */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <picture>
          <source srcSet="https://pbs.twimg.com/profile_images/1467172481094066185/9wD2Vxgi_400x400.png" type="image/webp" />
          <img
            src="https://pbs.twimg.com/profile_images/1467172481094066185/9wD2Vxgi_400x400.png"
            alt="user-img"
            className="h-10 w-10 rounded-full xl:mr-2"
          />
        </picture>

        <div className="leading-5 hidden xl:inline">
          <h4 className="font-semibold">Anshen Kondjah</h4>
          <p className="text-gray-500">@AnshenLouisin</p>
        </div>
        <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:block" />
      </div>

    </div>
  )
}

export default Sidebar;
