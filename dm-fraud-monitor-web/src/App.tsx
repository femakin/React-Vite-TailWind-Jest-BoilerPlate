import ThemeProvider from '@/contexts/ThemeContext'
import "./App.css"
import { AuthProvider } from '@/contexts/AuthContext'
import { Routing } from './routing'

const App = () => {

  return (
    <>
      <ThemeProvider >
        <AuthProvider>
          <Routing />
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default App
