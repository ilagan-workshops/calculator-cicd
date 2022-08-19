import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

// :: ---

const root = document.querySelector('#root')
if (!root) throw new Error('Application root node could not be established.')

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<>hello world.</>
	</React.StrictMode>
)
