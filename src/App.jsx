import { useState } from 'react'
import Header from './components/Header'
import TerminalBar from './components/TerminalBar'
import Hero from './components/Hero'
import ChatForm from './components/ChatForm'
import { content } from './data/content'

function App() {
  const [mode, setMode] = useState('candidate')
  const currentContent = content[mode]
  
  // Color del degradado según el modo (50% de opacidad)
  const gradientColor = mode === 'candidate' 
    ? 'rgba(102, 255, 0, 0.5)' // #66ff00 al 50%
    : 'rgba(243, 64, 109, 0.5)'  // #f3406d al 50%

  return (
    <div 
      className="min-h-screen"
      style={{
        background: `linear-gradient(to bottom, #d9dce6 0%, #d9dce6 50%, ${gradientColor} 100%)`
      }}
    >
      <Header mode={mode} setMode={setMode} />
      <TerminalBar text={currentContent.terminalText} mode={mode} />
      <Hero title={currentContent.title} mode={mode} />
      <ChatForm content={currentContent} mode={mode} />
    </div>
  )
}

export default App

