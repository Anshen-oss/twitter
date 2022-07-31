import { ChartBarIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from "@heroicons/react/outline";

const Posts = ({ post }) => {

  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      {/* User image */}
      <img
        className="h-11 w-11 rounded-full mr-4"
        src={post.userImg}
        alt="user-img"
      />


      {/* Right Side */}
      <div className="flex-1">
        {/* Header */}

        <div className="flex items-center justify-between">
          {/* post user infos */}
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <h4 className="font-semibold text-[15px] sm:text-[16px] hover:underline">{post.name}</h4>
            <span className="text-sm sm:text-[15px]">@{post.username} - </span>
            <span className="text-sm sm:text-[15px] hover:underline">{post.timestamp}</span>
          </div>

          {/* Dot icon */}
          <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2 " />
        </div>

        {/* Post Text */}
        <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">{post.text}</p>

        {/* Post Image */}
        <picture>
          <source srcSet={post.img} type="image/webp" />
          <img
            src={post.img}
            alt="user-img"
            className="rounded-2xl mr-2"
          />
        </picture>

        {/* Icons */}
        <div className="flex items-center justify-between text-gray-500 p-2">
          <ChatIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500hover:bg-sky-100 hover:bg-sky-100" />
          <TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"  />
          <HeartIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />
          <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
        </div>

      </div>

    </div>
  )
}

export default Posts;
