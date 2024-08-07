import Header from './components/sections/header'
import Footer from './components/sections/footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './components/pages/main'
import About from './components/pages/about'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/aboutus" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
