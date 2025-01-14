import { Button } from "./components/Button"
import ShareIcon  from "./icons/ShareIcon"
import  PlusIcon  from "./icons/PlusIcon"

function App() {
  return (
    <div className="flex">
      <Button variant="secondary" title="Add content" startIcon={<PlusIcon />} />
      <Button variant="primary" title="Share brain" startIcon={<ShareIcon />}  />
    </div>
  )
}

export default App
