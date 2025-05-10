import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
export function App() {
  return (
    <main className="bg-background min-h-screen text-white antialiased">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </main>
  )
}
