
<div class="min-w-screen">
    <div class="py-1 px-5 bg-gray-800 text-gray-200 border-b w-full py-2 shadow-xl">
        <div class="-mx-1 flex flex-wrap justify-between w-full">
           <div class="flex justify-between md:w-auto mx-8 w-full px-2 items-center">
                <a href="/" class="font-semibold text-xl text-indigo-600">
                    <x-application-logo />
                </a>
            </div>
            <ul class="hidden md:flex flex-col navbar-collapse md:flex-row mt-3 justify-between md:mt-0">
                <div class="py-3 px-14  text-gray-200 w-full">
                    <div class="-mx-1 flex flex-wrap justify-between">
                        <ul class="flex  flex-wrap items-center h-10">
                            <li class="block relative">
                                <a href="{{route('dashboard')}}" class="flex items-center h-10 leading-10 px-4 rounded cursor-pointer no-underline hover:no-underline transition-colors duration-100 mx-1 hover:bg-kh-blue hover:text-white font-inter font-normal text-gray-200" @click.prevent="showChildren=!showChildren">
                                    <span class="mr-3 text-xl hover:text-white text-kh-blue"> <i class="mdi mdi-gauge"></i> </span>
                                    <span>Dashboard</span>
                                </a>
                            </li>

                    <li class="block relative" x-data="{showChildren:false}" @click.away="showChildren=false">
                        <a href="#" class="flex font-inter font-normal text-gray-200 items-center h-10 leading-10 px-4 rounded cursor-pointer no-underline hover:no-underline transition-colors duration-100 mx-1 hover:bg-kh-blue hover:text-white" @click.prevent="showChildren=!showChildren">
                            <span class="mr-3 text-xl hover:text-white text-kh-blue"> 
                                <i class="mdi mdi-layers-outline"></i> </span>
                            <span>Contents</span>
                        </a>
                        <div class="bg-gray-800 shadow-md rounded border border-gray-300 text-sm absolute top-auto left-0 min-w-full w-56 z-30 mt-1" x-show="showChildren" x-transition:enter="transition ease duration-300 transform" x-transition:enter-start="opacity-0 translate-y-2" x-transition:enter-end="opacity-100 translate-y-0" x-transition:leave="transition ease duration-300 transform" x-transition:leave-start="opacity-100 translate-y-0" x-transition:leave-end="opacity-0 translate-y-4" style="display: none;">
                            <span class="absolute top-0 left-0 w-3 h-3 bg-gray-200 border transform rotate-45 -mt-1 ml-6"></span>
                            <div class="bg-gray-800 text-gray-200 rounded w-full relative z-10 py-1">
                                <ul class="list-reset">
                                    <li class="relative" x-data="{showChildren:false}" @mouseleave="showChildren=false" @mouseenter="showChildren=true">
                                        <a href="{{route('admin.post.create')}}" class="px-4 text-base font-inter py-2 flex w-full items-start hover:bg-kh-blue hover:text-white no-underline hover:no-underline transition-colors duration-100 cursor-pointer">
                                            <span class="flex-1">Add Contents</span></a>
                                    </li>
                                    <li class="relative" x-data="{showChildren:false}" @mouseleave="showChildren=false" @mouseenter="showChildren=true">
                                        <a href="{{route('admin.contacts')}}" class="px-4 py-2 text-base font-inter flex w-full items-start hover:bg-kh-blue hover:text-white no-underline hover:no-underline transition-colors duration-100 cursor-pointer"> <span class="flex-1">Contacts</span> </a>
                                    </li>
                                    <li class="relative" x-data="{showChildren:false}" @mouseleave="showChildren=false" @mouseenter="showChildren=true">
                                        <a href="{{route('admin.contents')}}" class="px-4 py-2 text-base font-inter flex w-full items-start hover:bg-kh-blue hover:text-white no-underline hover:no-underline transition-colors duration-100 cursor-pointer"> <span class="flex-1">All Posts</span> </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="block relative">
                        <a href="{{route('admin.people')}}" class="flex font-inter font-normal text-gray-200 items-center h-10 leading-10 px-4 rounded cursor-pointer no-underline hover:no-underline transition-colors duration-100 mx-1 hover:bg-kh-blue hover:text-white" @click.prevent="showChildren=!showChildren">
                            <span class="mr-3 text-xl hover:text-white text-kh-blue"> <i class="mdi mdi-account-multiple"></i> </span>
                            <span>People</span>
                        </a>
                    </li>
                </ul>
                    </div>
                </div>
            </ul>

            <div class="hidden md:flex items-center block justify-between navbar-collapse navbar-collapse md:my-2 my-4">
                  <span class="mr-3 text-xl">
                        <img src="{{Auth::user()->profileImage}}" class="w-10 rounded-full">
                  </span>
                <span class="font-inter font-semibold">{{ Auth::user()->name }}</span>
                <li class="block relative">
                    <a  href="{{ route('logout') }}" class="flex bg-kh-blue hover:bg-blue-900 text-white hover:text-gray-200 mx-4 items-center h-10 leading-10 px-4 rounded cursor-pointer no-underline hover:no-underline transition-colors duration-100 mx-1"
                       onclick="event.preventDefault();
                               document.getElementById('logout-form').submit();">
                        <span class="text-xl text-white"> <i class="mdi mdi-logout"></i></span>
                        <span class="font-inter text-white">{{ __('Logout') }}</span>
                    </a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                        @csrf
                    </form>
                </li>
            </div>
        </div>
    </div>
</div>


<script>
    document.getElementById("navbar-toggle").onclick = function toggleMenu() {
        const navToggle = document.getElementsByClassName("navbar-collapse");
        for (let i = 0; i < navToggle.length; i++) {
            navToggle.item(i).classList.toggle("hidden");
        }
    };
</script>

