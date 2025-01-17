import { Button } from "../components/Button"
import ShareIcon from "../icons/ShareIcon"
import PlusIcon from "../icons/PlusIcon"
import { Card } from "../components/Card"
import { CreateContentModel } from "../components/CreateContentModel"
import { useEffect, useState } from "react"
import { SideBar } from "../components/SideBar"
import { useContent } from "../hooks/useContent"

export function Dashboard() {
  const [modelOpen, setOpenModel] = useState(false);
  const {contents,refresh} = useContent();

  useEffect(()=> {
    refresh();
  }, [modelOpen]);

  return (
    <div>
      < SideBar />

      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-1">
        <CreateContentModel open={modelOpen} onClose={() => {
          setOpenModel(false);
        }} />

        <div className="flex justify-end gap-4">
          {<Button variant="secondary" title="Add content" onClick={() => {
            setOpenModel(true);
          }} startIcon={<PlusIcon />} />}

          {<Button variant="primary" title="Share brain" startIcon={<ShareIcon />} />}
        </div>

        <div className="flex flex-wrap gap-5 mt-3">
         
          { contents.map(({type,title, link}) => < Card 
              title={title} 
              type={type} 
              link={link} 
            />
          )}
         
        </div>
      </div>

    </div>
  )
};

