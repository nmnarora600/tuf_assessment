
import { DarkModeToggle } from "./DarkModeToggle";
import SheetRight from "./UpdateSheet";
import UpgradeBanner from "./UpgradeBanner";
import { Skeleton } from "./ui/skeleton";

interface Data {
  title: string;
  description: string;
  bludesc: string;
  showBanner: boolean;
  closetime: number;
  weblink: string;
}

interface MainProps {
  data: Data;
  setBanner: React.Dispatch<React.SetStateAction<boolean>>;
  setSkip: React.Dispatch<React.SetStateAction<number>>;
}
export default function Header({data, setBanner, setSkip}:MainProps) {



 
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
        <nav 
            className="flex flex-col sm:flex-row items-center p-5 px-1 bg-white dark:bg-gray-900 max-w-7xl mx-auto"
        >
            
            <div className='flex-1 flex items-center   md:justify-end md:space-x-4 space-x-2'>
              Assessment by <a href="https://www.namanarora.in" target="_blank" className="font-semibold hover:bg-gradient-to-r hover:to-[#7775D6] hover:from-[#E935C1] hover:opacity-85 hover:scale-105 transition-all  gradient-text"> &nbsp;
  
       
                Naman Arora 
  
      
                </a>
                &nbsp;
                {
data?
<SheetRight openHeading="Update Info" title={data.title} description={data.description} bludesc={data.bludesc} show={data.showBanner} close={data.closetime} webLink={data.weblink} setBanner={setBanner} setSkip={setSkip}/> :<Skeleton className="w-20 h-9"/>}
              <DarkModeToggle />
      
            </div>

        </nav>
        <UpgradeBanner />
    </header>
  )
}

