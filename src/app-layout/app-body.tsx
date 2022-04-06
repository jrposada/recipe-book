import { PropsWithChildren } from 'react'

import './app-body.scss'

interface AppBodyProps {
  className?: string
}

function AppBody({ className, children }: PropsWithChildren<AppBodyProps>) {
  let cssClass = 'app-layout__body app-body'

  if (className) cssClass += ` ${className}`

  return <div className={cssClass}>{children}</div>
}

export default AppBody
