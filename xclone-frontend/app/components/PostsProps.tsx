import { Bookmark, ChartBar, Heart, MessageCircle, Recycle } from 'lucide-react'
import React from 'react'
import { LiaVoteYeaSolid } from 'react-icons/lia'

interface PostsProps{
    Profileimage?: string,
    Name: string,
    UserName: string,
    TextContent: string,
    ImageContent?: string,
    time: string,
    Icons: React.ReactNode
    comment: string,
    tweet: string,
    likes: string,
    Views: string
}

const PostsProps: React.FC<PostsProps> = ({comment, Views, tweet, likes, Profileimage, Name, UserName, time, TextContent, ImageContent, Icons}) => {
  return (
    <>
    <div className='w-full my-5 border-b-2 border-b-gray-900 flex flex-col items-center justify-center'>
      <div className='w-[95%] flex items-center justify-between'>
       <div className='flex gap-2'>
         <div className="w-[50px] h-[50px] bg-gray-500 rounded-full">
          <img src={Profileimage} alt="" />         
        </div>
        <div className='flex gap-2 items-center'>
        <h1 className="font-bold text-[16px] text-white">{Name}</h1>
        <p className="text-[14px] text-gray-500">@{UserName}</p>
        <p className='text-[14px] text-gray-500'>{time}</p>
        </div>
       </div>



       <div className="flex gap-2">
        <button>{Icons}</button>
        <button>{Icons}</button>

       </div>
      </div>

      <div className='w-[95%] flex my-8 flex-col items-start justify-start gap-2 mt-2'>
        <p className='text-[16px] text-white'>{TextContent}</p>
        <div className="w-full h-[400px] bg-gray-500">
          <img src={ImageContent} alt="" />
        </div>
      </div>

      <div className='flex w-[95%] items-center justify-between my-3'>
        <div className='flex gap-20 items-center '>
          <div className='flex items-center gap-1'>
              <MessageCircle className='h-5 w-5 text-gray-500'/>
              <p className='text-gray-500 text-[13px]'>{comment}</p>
          </div>
          <div className='flex items-center gap-1'>
              <Recycle className='h-5 w-5 text-gray-500'/>
              <p className='text-gray-500 text-[13px]'>{tweet}</p>
          </div>
          <div className='flex items-center gap-1'>
              <Heart className='h-5 w-5 text-gray-500'/>
              <p className='text-gray-500 text-[13px]'>{likes}</p>
          </div>
          <div className='flex items-center gap-1'>
              <ChartBar className='h-5 w-5 text-gray-500'/>
              <p className='text-gray-500 text-[13px]'>{Views}</p>
          </div>
         
        </div>
        <div className='flex items-center gap-3'>
          <Bookmark className='h-5 w-5 text-gray-500'/>
          <LiaVoteYeaSolid className='h-5 w-5 text-gray-500'/>
        </div>
      </div>

    </div>
    </>
  )
}

export default PostsProps