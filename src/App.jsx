import './App.css'
import Introduction from './components/introduction.jsx'
import About from './components/about.jsx'
import Interests from './components/interests.jsx'
import Footer from './components/Footer.jsx'

function App() {
    return (
        <div className="App">
            <Introduction />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

export default App
