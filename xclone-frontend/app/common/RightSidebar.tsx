import { Search } from 'lucide-react'
import RightbarBoxesProps from '../common/RightbarBoxesProps'

const RightSidebar = () => {
  return (
    <div className='w-full flex flex-col items-center justify-start h-full'>
      <div className='sticky bg-black/95 top-2 w-[90%] gap-2 flex items-center border-2 border-gray-900 py-2 rounded-full'>
        <Search className='ml-4'/>
        <input type="text" className='outline-0' placeholder='Search'/>
      </div>

      <div className='my-5 w-[90%]'>
        <div className='my-4'>
      <RightbarBoxesProps HeadText='Subscribe to Premium' subText='Get rid of ads, see your analytics, boost your replies and unlock 20+ features.' button='Subscribe' classname='py-2 px-2' classnames='px-4'/>

        </div>
              <div className='my-4'>
      <RightbarBoxesProps HeadText='Subscribe to Premium' subText='Get rid of ads, see your analytics, boost your replies and unlock 20+ features.' button='Subscribe' classname='py-2 px-2' classnames='px-4'/>

        </div>
                <div className='my-4'>
      <RightbarBoxesProps HeadText='Subscribe to Premium' subText='Get rid of ads, see your analytics, boost your replies and unlock 20+ features.' button='Subscribe' classname='py-2 px-2' classnames='px-4'/>

        </div>
            <div className='my-4'>
      <RightbarBoxesProps HeadText='Subscribe to Premium' subText='Get rid of ads, see your analytics, boost your replies and unlock 20+ features.' button='Subscribe' classname='py-2 px-2' classnames='px-4'/>

        </div>
            <div className=''>
      <RightbarBoxesProps HeadText='Subscribe to Premium' subText='Get rid of ads, see your analytics, boost your replies and unlock 20+ features.' button='Subscribe' classname='py-2 px-2' classnames='px-4'/>

        </div>

      </div>
     <hr className='w-[90%] mb-4 text-gray-700'/>
      {/* <div className="w-[90%]" mt-2/> */}
      <div className='w-[90%]'>
        <nav className='w-full mb-20'>
          <a href="" className='text-gray-500 text-[14px] px-2'>
            Terms .
          </a>
             <a href="" className='text-gray-500 text-[14px] px-2'>
            Privacy .
          </a>
             <a href="" className='text-gray-500 text-[14px] px-2'>
            Cookies .
          </a>
             <a href="" className='text-gray-500 text-[14px] px-2'>
            Accessibility .
          </a>
          <br />
           <a href="" className='text-gray-500 text-[14px] px-2'>
            Add info .
          </a>
           <a href="" className='text-gray-500 text-[14px] px-2'>
            More ...
          </a>
           <a href="" className='text-gray-500 text-[14px] px-2'>
             2026 X Corp.
          </a>
        </nav>
      </div>

  
</div>

  
  )
}

export default RightSidebar