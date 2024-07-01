import { Button } from "@/components/ui/button"
import { AlignJustify } from 'lucide-react';
import { Input } from "@/components/ui/input"

export default function NavItems() {
  return (
    <div className="w-full flex flex-col m-4">
        <div className="w-full flex flex-row gap-4 h-full">
            <Button variant="outline">
                <span className="mr-2"><AlignJustify size="15"/></span>    
                Categories
            </Button>
            <Input className="w-full" type="text" placeholder="DJI phantom"/>
        </div>
        <div className="mb-0 flex flex-row font-bold m-2 text-sm justify-center gap-x-4">
            {["Live Shows", "Streams", "Movies", "Plays", "Events", "Sports", "Activities"].map(component => {
                return(
                    <div className="flex flex-row text-fontColorSubtitle hover:cursor-pointer ml-2 mr-2">
                        <span>{component}</span>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
