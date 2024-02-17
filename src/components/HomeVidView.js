import React from 'react'

export default function HomeVidView(props) {
  return (
    <div>
        {/* <!-- one video card --> */}
      <div class="flex flex-col space-y-3 cursor-pointer">
                {/* <!-- thumbnail --> */}
                <a href={props.vidUrl}>
                    <div class="relative h-52 sm:h-36 w-full">
                    <img class="relative h-full w-full object-cover" src={props.thumbnail} alt="" />
                    <span class="absolute right-1 bottom-1 p-0.5 px-1 rounded-sm bg-black text-white text-xs bg-opacity-70">{props.length}</span>
                    </div>
                </a>
                {/* <!-- video details --> */}
                <div class="flex flex-col flex-auto space-y-1.5 mb-3">

                <div class="flex items-center space-x-3">
                    {/* <!-- channel logo --> */}
                    <img class="w-12 h-12 rounded-full object-cover cursor-pointer" src="./images/hero.png" alt="" />
                    <div class="flex items-start">
                    <a href="#" class="text-sm text-bold text-white pr-1">{props.vidTitle}</a>
                    <i class="material-icons text-white md-21">more_vert</i>
                    </div>
                </div>

                {/* <!-- channel link and meta data --> */}
                <div class="flex flex-col pl-1 sm:pl-0 ml-14">
                    <a href="" class="text-gray-400 text-sm hover:text-white">{props.channelName}</a>
                    <div class="flex space-x-1">
                        <span class="text-sm text-gray-400">{props.views} views</span>
                        <span class="text-sm text-gray-400">• {props.time}</span>
                    </div>
                </div>
                </div>
            </div>
    </div>
  )
}
