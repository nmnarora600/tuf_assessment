import { Skeleton } from "./ui/skeleton";




export default function Loader() {
 


  return (
    <main className="">
      <div className="relative isolate bottom-0 h-[calc(100vh-7.5rem)] dark:bg-gray-900">
        
        {/* //blue shape polygon */}
        <div
          className="absolute inset-x-0 -top-36 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] "
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        {/* //timer */}
<div className="absolute z-30 md:right-5 gradient-text md:top-5 opacity-50 hover:opacity-100 font-semibold  md:text-2xl  right-3 top-3"><Skeleton className="md:w-[200px] w-[150px] md:mt-2 h-[25px] rounded-full"/></div>

{/* //content */}
        <div className="py-12 sm:py-20 lg:pb-40 flex h-full">
          <div className="mx-auto max-w-7xl flex items-center px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center md:mt-12 -mt-3">
              <h1 className="text-4xl font-bold tracking-tight md:-mt-12 sm:text-6xl flex w-full justify-center">
                <Skeleton className="md:w-[400px] w-[250px] h-[40px] rounded-full mt-6"/>
              </h1>
              
              <div className="pt-6 flex md:flex-row md:w-full flex-col justify-center md:space-y-0 space-y-6 md:space-x-3 items-center">
                <div>
                <Skeleton className="md:w-[200px] w-[200px] h-[20px] rounded-full"/> 
                </div>
                <div className="text-indigo-600 dark:text-indigo-500">
                <Skeleton className="md:w-[200px] w-[200px] h-[20px] rounded-full"/>
                </div>
              </div>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Skeleton
                  className=" bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:w-[130px] w-32 h-10  rounded-md"
                />
              

                <Skeleton className="md:w-[130px] w-32 h-10 rounded-md "/>
                  
                
              </div>
            </div>

          
          </div>
        </div>

{/* //pink shape */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl "
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </main>
  );
}
