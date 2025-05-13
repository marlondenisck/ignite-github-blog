import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { Header } from './components/Header'
import { GithubProvider } from './context/githubContext'
export function App() {
  return (
    <main className="bg-background min-h-screen text-white antialiased">
      <GithubProvider>
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </GithubProvider>
    </main>
  )
}
