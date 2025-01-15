import { Button } from "../components/Button"
import ShareIcon from "../icons/ShareIcon"
import PlusIcon from "../icons/PlusIcon"
import { Card } from "../components/Card"
import { CreateContentModel } from "../components/CreateContentModel"
import { useState } from "react"
import { SideBar } from "../components/SideBar"

export function Dashboard() {
  const [modelOpen, setOpenModel] = useState(false);
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
          < Card title="Twiter Post" type="twitter" link="https://twitter.com/username/status/807811447862468608" />
          < Card title="Youtube Post" type="youtube" link="https://www.youtube.com/watch?v=OYkmIIKfWq4&t=2792s" />
        </div>
      </div>

    </div>
  )
}

