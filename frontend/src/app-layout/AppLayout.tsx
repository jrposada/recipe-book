import AppBody from './AppBody'
import AppHeader from './AppHeader'

import './AppLayout.scss'

function AppLayout() {
  return (
    <div className="app-layout">
      <div className="app-layout__header">
        <AppHeader />
      </div>
      <div className="app-layout__body">
        <AppBody />
      </div>
      <div className="app-layout__footer"></div>
    </div>
  )
}

export default AppLayout
