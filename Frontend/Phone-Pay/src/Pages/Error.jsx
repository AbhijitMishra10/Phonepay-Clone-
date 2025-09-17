import React from 'react'
import { useRouteError } from 'react-router-dom'
function Error() {
  const error = useRouteError()
    return (
    <div>
        <h1>Error Status: {error.status} || 404</h1>
        <h1>Error Text: {error.text} || Server Error</h1>
    </div>
  )
}

export default Error