import { PropsWithChildren } from 'react'

import './app-footer.scss'

interface AppFooter {}

function AppFooter({ children }: PropsWithChildren<AppFooter>) {
  return <div className="app-layout__footer app-footer">{children}</div>
}

export default AppFooter
