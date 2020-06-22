import Router from 'next/router'
import { useEffect } from 'react'

export default function Docs() {
  useEffect(() => {
    Router.push('/docs/getting-started')
  })
  return null
}
