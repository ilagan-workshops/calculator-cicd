import React from 'react'
import ReactDOM from 'react-dom/client'

import AppRoot from '@/components/approot'

import './index.css'

// :: ---

const root = document.querySelector('#root')
if (!root) throw new Error('Application root node could not be established.')

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<AppRoot />
	</React.StrictMode>
)
