import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { Visiblity } from "./Visiblity"

interface SheetRightProps {
    title: string,
    description: string,
    bludesc: string,
    openHeading:string,
    show:boolean,
    close:number,
    webLink:string,
    btnVariant?:"link" | "default" | "destructive" | "outline" | "secondary" | "ghost" |undefined| null
  }

const SheetRight:React.FC<SheetRightProps>=({title, description, bludesc, openHeading , btnVariant, show, close, webLink})=> {
    const[mainTitle, setmainTitle]=useState(title);
    const[mainDescription, setmainDescription]=useState(description);
    const[mainBludesc, setmainBludesc]=useState(bludesc);
    const[mainShowBanner, setmainShowBanner]=useState(show);
    const[mainCloseTime, setmainCloseTime]=useState(close);
    const[mainWebLink, setmainWebLink]=useState(webLink);
  



useEffect(()=>{
setmainDescription(description);
setmainBludesc(bludesc);
setmainTitle(title)
setmainWebLink(webLink)
setmainShowBanner(show)
setmainCloseTime(close)
},[description, title, bludesc, show, close,webLink])


   const submitData=async()=>{

    const r= await fetch('http://localhost:3003/api/update',{
      method:"POST",
      headers: {
        'Content-Type': 'application/json' // Set the content type to JSON
      },
      body:JSON.stringify({title:mainTitle,
        description:mainDescription,
        bludesc:mainBludesc, 
        showBanner:Number(mainShowBanner), 
        closetime:mainCloseTime,
        webLink:mainWebLink})
    })
    if(r.ok){
      toast("Content Updated Successfully",{
        description:"You will further see updated results in banner."
      })
    }
   }
    
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const { name, value } = e.target;

    // Conditional logic based on the name attribute
    if (name === "title") {
      setmainTitle(value);
    } else if (name === "description") {
      setmainDescription(value);
    } else if (name === "bluetext") {
      setmainBludesc(value);
    }
    else if (name === "webLink") {
      setmainWebLink(value);
    }
     else if (name === "closetime") {
      setmainCloseTime(Number(value));
    
    } else if (name === "showBanner" && typeof value!="string") {
      setmainShowBanner(value);
    }
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={btnVariant ||"outline"}>{openHeading || "Update Data"}</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          

          <SheetTitle>Edit Data</SheetTitle>
    
          <SheetDescription>
            Make changes to your data here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input id="title" value={mainTitle} name="title" className="col-span-3" onChange={handleChange} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input id="description" name="description" value={mainDescription} className="col-span-3" onChange={handleChange} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bluetext" className="text-right">
              Bluetext
            </Label>
            <Input id="bluetext" name="bluetext" value={mainBludesc} className="col-span-3" onChange={handleChange} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="closeTime" className="text-right">
              Autoclose
            </Label>
            <Input id="closetime" name="closetime" value={mainCloseTime} className="col-span-3" onChange={handleChange} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="webLink" className="text-right">
              Link
            </Label>
            <Input id="webLink" name="webLink" value={mainWebLink} className="col-span-3" onChange={handleChange} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4 ">
            <Label htmlFor="showBanner" className="text-right">
              Visible
            </Label> 
            
            <Visiblity defaultValue={show} setVisibility={setmainShowBanner}/>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" onClick={submitData}>Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
export default SheetRight