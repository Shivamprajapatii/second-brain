import { Button } from "../components/Button"
import ShareIcon from "../icons/ShareIcon"
import PlusIcon from "../icons/PlusIcon"
import { Card } from "../components/Card"
import { CreateContentModel } from "../components/CreateContentModel"
import { useEffect, useState } from "react"
import { SideBar } from "../components/SideBar"
import { useContent } from "../hooks/useContent"
import axios from "axios"
import { BACKEND_URL } from "../config"
import AuthButton from "../auth/AuthButtun"

export function Dashboard() {
  const [modelOpen, setOpenModel] = useState(false);
  const { contents, refresh } = useContent();
  const [filterType, setFilterType] = useState<string | null>(null);

  useEffect(() => {
    refresh();
  }, [modelOpen]);

  const filteredContents = filterType
    ? contents.filter((content) => content.type === filterType)
    : contents;


  return (
    <div>
      < SideBar onSelect={setFilterType} />

      <div className="p-4 ml-64 min-h-screen bg-gray-100 border-1">
        <CreateContentModel open={modelOpen} onClose={() => {
          setOpenModel(false);
        }} />

        <div className="flex justify-between">
          {<Button variant="primary" title="Add content" onClick={() => {
            setOpenModel(true);
          }} startIcon={<PlusIcon />} />}

          {<Button variant="primary" title="Share brain" startIcon={<ShareIcon />} onClick={async () => {
            const responce = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
              share: true,
            }, {
              headers: {
                Authorization: localStorage.getItem("token")
              }
            });

            const ShareUrl = `${BACKEND_URL}/api/v1/brain/${responce.data.hash}`
            alert(ShareUrl);

          }} />}

          <AuthButton />

        </div>

        <div className="bg-red-400 w-full h-1"></div>

        <div className="flex flex-wrap gap-5 mt-3">

          {filteredContents.map(({ type, title, link }, index) => < Card
            key={index}
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

