import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { Header } from './components/Header'
export function App() {
  return (
    <main className="bg-background min-h-screen text-white antialiased">
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </main>
  )
}
