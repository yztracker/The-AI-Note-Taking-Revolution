import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './component/header'
import Hero from './component/hero'
import Transcription from './component/transcription'
import TranscriptionText from './component/TranscriptionText'
function App() {

  return (
    <div className="App">
      <Header />
      <Hero />
      <Transcription />
      <TranscriptionText />
    </div>
  )
}

export default App
