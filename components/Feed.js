import React from 'react';
import { SparklesIcon } from "@heroicons/react/outline";
import { Input, Post } from '.';

const Feed = () => {
  const posts = [
    {
      id: "1",
      name: "Anshen Kondjah",
      username: "codewithanshen",
      userImg: "https://pbs.twimg.com/profile_images/1467172481094066185/9wD2Vxgi_400x400.png",
      img: "https://images.unsplash.com/photo-1511185307590-3c29c11275ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2667&q=80",
      text: "Nice view in Africa land!",
      timestamp: "2 hours ago"
    },
     {
      id: "2",
      name: "Anshen Kondjah",
      username: "codewithanshen",
      userImg: "https://pbs.twimg.com/profile_images/1467172481094066185/9wD2Vxgi_400x400.png",
      img: "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      text: "Woww",
      timestamp: "2 days ago"
    }
  ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-semibold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5"  />
        </div>
      </div>
      <Input />
      {
        posts.map((post) => (
          <Post key={post.id} post={post}/>
        ))
      }
    </div>
  )
}

export default Feed;
