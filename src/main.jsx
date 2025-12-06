import { createRoot } from 'react-dom/client'
import './global.scss'
import Routing from './routing'

createRoot(document.getElementById('root')).render(
	<Routing />
)
