import './App.css'
import { Button } from './components/ui/Buttun';
import { PlusIcon } from './icons/PlusIcon';
import { ShareInco } from './icons/ShareIcon';


function App() {

  return (
    <>
      < Button variant='primary' startIcon={<PlusIcon size={'lg'} />}
        size='lg'
        title={'Share'}
        endIcon={<ShareInco size='lg' />}
      ></Button>

      < Button variant='secondary' startIcon={<PlusIcon size={'md'} />}
        size='md'
        title={'Share'}
        endIcon={<ShareInco size='md' />}
      ></Button>

      < Button variant='primary' startIcon={<PlusIcon size={'sm'} />}
        size='sm'
        title={'Share'}
        endIcon={<ShareInco size='sm' />}
      ></Button>
    </>
  )
}

export default App;
