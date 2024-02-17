import React from "react";
import HomeVidView from "./HomeVidView";

export default function HomeContent() {
  return (
    <div>
      {/* <!-- main container --> */}
    <div class="flex flex-row">
        {/* <!-- left sidebar fixed --> */}
        <div class="sidebar" id="sideBar" >
            {/* <!-- main home explore btns --> */}
            <div class="flex flex-col w-full mb-2">
                <div class="flex items-center space-x-5 bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                    <i class="material-icons text-white md-21">home</i>
                    <h2 class="text-sm font-semibold text-white">Home</h2>
                </div>

                <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                    <i class="material-icons text-gray-400 md-21">explore</i>
                    <h2 class="text-sm text-white">Explore</h2>
                </div>

                <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                    <i class="material-icons text-gray-400 md-21">subscriptions</i>
                    <h2 class="text-sm text-white">Subscriptions</h2>
                </div>

            </div>


            {/* <!-- library history btns --> */}
            <div class="flex flex-col w-full mb-2 mt-3">

                <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                    <i class="material-icons text-gray-400 md-21">video_library</i>
                    <h2 class="text-sm text-white">Library</h2>
                </div>

                <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                    <i class="material-icons text-gray-400 md-21">history</i>
                    <h2 class="text-sm text-white">History</h2>
                </div>

                <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                    <i class="material-icons text-gray-400 md-21">slideshow</i>
                    <h2 class="text-sm text-white">Your videos</h2>
                </div>

                <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                    <i class="material-icons text-gray-400 md-21">watch_later</i>
                    <h2 class="text-sm text-white">Watch later</h2>
                </div>

                <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                    <i class="material-icons text-gray-400 md-21">thumb_up</i>
                    <h2 class="text-sm text-white">Liked videos</h2>
                </div>

            </div>

            <div class="border border-searchIconBg"></div>

            {/* <!-- library history btns --> */}
            <div class="flex flex-col w-full mb-2 mt-3">
                <h2 class="uppercase text-sm px-7 py-1.5 text-gray-400">more from youtube</h2>

                <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                    <i class="material-icons text-gray-400 md-21">smart_display</i>
                    <h2 class="text-sm text-white">YouTube Premium</h2>
                </div>

                <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                    <i class="material-icons text-gray-400 md-21">theaters</i>
                    <h2 class="text-sm text-white">Films</h2>
                </div>

                <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                    <i class="material-icons text-gray-400 md-21">sports_esports</i>
                    <h2 class="text-sm text-white">Gaming</h2>
                </div>

                <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                    <i class="material-icons text-gray-400 md-21">stream</i>
                    <h2 class="text-sm text-white">Live</h2>
                </div>

                <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                    <i class="material-icons text-gray-400 md-21">dry_cleaning</i>
                    <h2 class="text-sm text-white">Fashion & beauty</h2>
                </div>

                <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                    <i class="material-icons text-gray-400 md-21">lightbulb</i>
                    <h2 class="text-sm text-white">Learning</h2>
                </div>

                <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                    <i class="material-icons text-gray-400 md-21">emoji_events</i>
                    <h2 class="text-sm text-white">Sport</h2>
                </div>

            </div>

            <div class="border border-searchIconBg"></div>

            {/* <!-- settings support btns --> */}
            <div class="flex flex-col w-full mb-2 mt-3">

                <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                    <i class="material-icons text-gray-400 md-21">settings</i>
                    <h2 class="text-sm text-white">Settings</h2>
                </div>

                <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                    <i class="material-icons text-gray-400 md-21">flag</i>
                    <h2 class="text-sm text-white">Report history</h2>
                </div>

                <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                    <i class="material-icons text-gray-400 md-21">help</i>
                    <h2 class="text-sm text-white">Help</h2>
                </div>

                <div class="flex items-center space-x-5 hover:bg-sideBarHoverBg px-7 py-2.5 cursor-pointer">
                    <i class="material-icons text-gray-400 md-21">feedback</i>
                    <h2 class="text-sm text-white">Send feedback</h2>
                </div>
            </div>

            <div class="border border-searchIconBg"></div>

            {/* <!-- about press --> */}
            <div class="flex flex-col px-6 py-2">
                <div class="flex flex-wrap space-x-2">
                    <a class="text-xs text-gray-400" href="">About</a>
                    <a class="text-xs text-gray-400" href="">Press</a>
                    <a class="text-xs text-gray-400" href="">Copyright</a>
                    </div>
                    <div class="flex flex-wrap space-x-2">
                    <a class="text-xs text-gray-400" href="">Contact us</a>
                    <a class="text-xs text-gray-400" href="">Creator</a>
                    <a class="text-xs text-gray-400" href="">Advertise</a>
                    </div>
                    <a class="text-xs text-gray-400" href="">Developers</a>
            </div>

            {/* <!-- terms privacy --> */}
            <div class="flex flex-col px-6 py-2">
                <div class="flex flex-wrap space-x-2">
                    <a class="text-xs text-gray-400" href="">Terms</a>
                    <a class="text-xs text-gray-400" href="">Privacy</a>
                    <a class="text-xs text-gray-400" href="">Policy & Safety</a>
                    </div>
                    <a class="text-xs text-gray-400" href="">How YouTube works</a>
                    <a class="text-xs text-gray-400" href="">Test new features</a>
            </div>
            
            {/* <!-- copyright --> */}
            <span class="text-gray-500 text-xs px-6 py-2">&copy; 2021 Google LLC</span>

        </div>

        
        {/* <!-- main videos container --> */}
        <div class="flex flex-col lg:ml-60 w-full lg:w-4/5 xl:w-5/6">

        {/* <!-- tags pills fixed navbar --> */}
        <div class="tags-container">

            {/* <!-- one pill --> */}
            <a href="#" class="text-sm bg-white py-1.5 px-3 rounded-full text-black">All</a>
            <a href="#" class="text-sm bg-pillsBg hover:bg-gray-700 py-1 px-3 rounded-full text-white border border-gray-700 transition duration-150">CSS</a>
            <a href="#" class="text-sm bg-pillsBg hover:bg-gray-700 py-1 px-3 rounded-full text-white border border-gray-700 transition duration-150">Tailwind</a>
            <a href="#" class="text-sm bg-pillsBg hover:bg-gray-700 py-1 px-3 rounded-full text-white border border-gray-700 transition duration-150">HTML</a>
            <a href="#" class="text-sm bg-pillsBg hover:bg-gray-700 py-1 px-3 rounded-full text-white border border-gray-700 transition duration-150">Programs</a>
            <a href="#" class="text-sm bg-pillsBg hover:bg-gray-700 py-1 px-3 rounded-full text-white border border-gray-700 transition duration-150">Design</a>
            <a href="#" class="text-sm bg-pillsBg hover:bg-gray-700 py-1 px-3 rounded-full text-white border border-gray-700 transition duration-150">Website</a>
            <a href="#" class="text-sm bg-pillsBg hover:bg-gray-700 py-1 px-3 rounded-full text-white border border-gray-700 transition duration-150">ReactJS</a>
            <a href="#" class="text-sm bg-pillsBg hover:bg-gray-700 py-1 px-3 rounded-full text-white border border-gray-700 transition duration-150">UI</a>
            <a href="#" class="text-sm bg-pillsBg hover:bg-gray-700 py-1 px-3 rounded-full text-white border border-gray-700 transition duration-150">Android</a>
            <a href="#" class="text-sm bg-pillsBg hover:bg-gray-700 py-1 px-3 rounded-full text-white border border-gray-700 transition duration-150">Jetpack</a>
            <a href="#" class="text-sm bg-pillsBg hover:bg-gray-700 py-1 px-3 rounded-full text-white border border-gray-700 transition duration-150">Bootstrap</a>
            <a href="#" class="text-sm bg-pillsBg hover:bg-gray-700 py-1 px-3 rounded-full text-white border border-gray-700 transition duration-150">JavaScript</a>
            <a href="#" class="text-sm bg-pillsBg hover:bg-gray-700 py-1 px-3 rounded-full text-white border border-gray-700 transition duration-150">PHP</a>
            <a href="#" class="text-sm bg-pillsBg hover:bg-gray-700 py-1 px-3 rounded-full text-white border border-gray-700 transition duration-150">Git</a>
            <a href="#" class="text-sm bg-pillsBg hover:bg-gray-700 py-1.5 px-3 rounded-full text-white border border-gray-700 transition duration-150">SQL</a>
            <a href="#" class="text-sm bg-pillsBg hover:bg-gray-700 py-1.5 px-3 rounded-full text-white border border-gray-700 transition duration-150">React</a>
            <a href="#" class="text-sm bg-pillsBg hover:bg-gray-700 py-1.5 px-3 rounded-full text-white border border-gray-700 transition duration-150">Flutter</a>
            <a href="#" class="text-sm bg-pillsBg hover:bg-gray-700 py-1.5 px-3 rounded-full text-white border border-gray-700 transition duration-150">Tech</a>
            <a href="#" class="text-sm bg-pillsBg hover:bg-gray-700 py-1.5 px-3 rounded-full text-white border border-gray-700 transition duration-150">Java</a>
         </div>

        {/* <!-- videos container grid layout --> */}
        <div class="videos-container" id="videos-container">
            
            <HomeVidView vidUrl="/" thumbnail="" vidTitle="Lorem ipsum dolor sit amet consectetur adipisicing." channelName="Jhon Doe" views="74K" time="1 month ago" length="38:38"/>
            <HomeVidView vidUrl="#" thumbnail="" vidTitle="Lorem ipsum dolor sit amet consectetur adipisicing." channelName="Jhon Doe" views="100K" time="1 month ago" length="1:00:50" />
            
        </div>

        </div>
    </div>

    </div>
  );
}
