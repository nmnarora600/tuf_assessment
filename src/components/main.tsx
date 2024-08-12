

import SheetRight from "./UpdateSheet";
import Loader from "./loader";



export default function Main({ data, loading, skip}:{skip:number,data:{title:string,description:string,bludesc:string, showBanner:boolean, closetime:number, weblink:string},loading:boolean}) {
  

 

  if(loading){
    return (<Loader/>);
  }
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
<div className="absolute z-30 md:right-5 gradient-text md:top-5 opacity-75 hover:opacity-100 font-semibold  md:text-2xl  right-3 top-3">Auto Skip in {skip} sec</div>

{/* //content */}
        <div className="py-12 sm:py-20 lg:pb-40 flex h-full">
          <div className="mx-auto max-w-7xl flex items-center px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                {data.title || "TakeUForward"}
              </h1>
              <div className="pt-6 flex md:flex-row flex-col space-y-3 md:space-y-0 justify-center items-center">
                <div>
                {  data.description || "Focus on time complexity"}{",   "} &nbsp;
                </div>
                <div className="text-indigo-600 dark:text-indigo-500">
                  {data.bludesc || "let AI handle the intricacy."}
                </div>
              </div>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href={data.weblink || "https://www.namanarora.in"}
                  target="_blank"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  About the Dev
                </a>

                <SheetRight openHeading="Change the data" btnVariant="ghost" title={data.title} description={data.description} bludesc={data.bludesc} show={data.showBanner} close={data.closetime} webLink={data.weblink}/>
                  
                
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
