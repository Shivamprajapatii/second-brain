import { Button } from "./components/Button"
import ShareIcon from "./icons/ShareIcon"
import PlusIcon from "./icons/PlusIcon"
import { Card } from "./components/Card"

function App() {
  return (
    <div className="p-4">

      <div className="flex justify-end gap-4">
        {<Button variant="secondary" title="Add content" startIcon={<PlusIcon />} />}
        {<Button variant="primary" title="Share brain" startIcon={<ShareIcon />} />}
      </div>

      <div className="flex gap-6">
        < Card title="Twiter Post" type="twitter" link="https://twitter.com/username/status/807811447862468608" />
        < Card title="Youtube Post" type="youtube" link="https://www.youtube.com/watch?v=OYkmIIKfWq4&t=2792s" />
      </div>
      
    </div>
  )
}

export default App
