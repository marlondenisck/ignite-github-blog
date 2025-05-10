import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { Issues } from './pages/issues'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/issues/:number" element={<Issues />} />
    </Routes>
  )
}
