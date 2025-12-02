import { useState, useEffect } from 'react'
import LogoCruz from './LogoCruz'

export default function Hero({ title, mode }) {
  const [scrollRotation, setScrollRotation] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // Rotación basada en el scroll (ajusta el multiplicador para cambiar la velocidad)
      setScrollRotation(scrollY * 0.5)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  // Dividir el título en dos partes: antes y después de "Engine"
  const titleParts = title.split(' Engine ')
  const firstLine = titleParts[0] + ' Engine'
  const secondLine = titleParts[1]
  
  // Palabras a resaltar según el modo
  const highlightWords = mode === 'candidate' 
    ? ['AI', 'Humans'] 
    : ['AI', 'Companies']
  
  const highlightColor = '#685eff' // Siempre morado
  
  // Palabra que se anima (Humans o Companies)
  const animatedWord = mode === 'candidate' ? 'Humans' : 'Companies'
  
  // Estado para la animación de escritura
  const [displayedAnimatedWord, setDisplayedAnimatedWord] = useState('')
  
  // Efecto para reiniciar la animación cuando cambia el modo
  useEffect(() => {
    setDisplayedAnimatedWord('')
    let currentIndex = 0
    
    const typeInterval = setInterval(() => {
      if (currentIndex < animatedWord.length) {
        setDisplayedAnimatedWord(animatedWord.substring(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typeInterval)
      }
    }, 35) // Velocidad de escritura (35ms por carácter - 30% más rápido)
    
    return () => clearInterval(typeInterval)
  }, [mode, animatedWord])
  
  // Función para renderizar palabras con resaltado
  const renderWords = (text) => {
    const words = text.split(' ')
    return words.map((word, i) => {
      const shouldHighlight = highlightWords.includes(word)
      const isAnimatedWord = word === animatedWord
      const isLastWord = i === words.length - 1
      
      return (
        <span key={i}>
          {shouldHighlight ? (
            <span 
              className="px-2 md:px-3 py-1 inline-block"
              style={{ 
                backgroundColor: highlightColor,
                borderRadius: 0,
                color: '#ffffff',
                minWidth: isAnimatedWord ? '140px' : 'auto',
                display: 'inline-block'
              }}
            >
              {isAnimatedWord ? displayedAnimatedWord : word}
            </span>
          ) : (
            <span>{word}</span>
          )}
          {!isLastWord && <span style={{ display: 'inline-block', width: '0.25ch' }}> </span>}
        </span>
      )
    })
  }
  
  return (
    <div className="text-center py-12 md:py-16 px-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 leading-tight min-h-[180px] md:min-h-[220px]" style={{ fontFamily: 'BeltramMono', fontWeight: 700, color: '#222329' }}>
        <div>{renderWords(firstLine)}</div>
        <div>{renderWords(secondLine)}</div>
      </h1>
      <div className="flex justify-center" style={{ marginTop: '-115px' }}>
        <div style={{ transform: `rotate(${scrollRotation}deg)`, transition: 'transform 0.1s ease-out' }}>
          <LogoCruz 
            color="#685eff" 
            className="w-[7.5rem] h-[7.5rem] md:w-[10rem] md:h-[10rem]"
          />
        </div>
      </div>
    </div>
  )
}
