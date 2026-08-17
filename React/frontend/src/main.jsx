import { createRoot } from 'react-dom/client'
import './index.css'
import Button from './Components/Button.jsx';

createRoot(document.getElementById('root')).render(
  <>
  <Button text="Click Me" type="button" disabled={false} />
  <Button text="Delete" type="danger" disabled={false} />
<Button text="Submit" type="success" disabled={true} />

  </>
)