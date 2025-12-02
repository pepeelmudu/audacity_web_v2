import { useState, useEffect, useRef } from 'react'
import Logo from './Logo'
import ojoV1 from '../assets/vectors/ojo/ojo_v1.svg'
import pupilaV2 from '../assets/vectors/ojo/pupila_v2.svg'
import brilloV1 from '../assets/vectors/ojo/brillo_v1.svg'

export default function Header({ mode, setMode }) {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const ojoRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calcular la posición relativa del mouse respecto al centro de la pantalla
      const centerX = window.innerWidth / 2
      const relativeX = e.clientX - centerX
      
      // Normalizar: -1 (izquierda) a +1 (derecha)
      const normalizedX = relativeX / centerX
      
      // Limitar el movimiento X a la mitad del ancho del ojo
      const maxMovementX = 30
      const movementX = normalizedX * maxMovementX
      
      // Obtener la posición Y del vector ojo
      let movementY = 0
      if (ojoRef.current) {
        const ojoRect = ojoRef.current.getBoundingClientRect()
        const ojoCenterY = ojoRect.top + ojoRect.height / 2
        const ojoHeight = ojoRect.height
        
        // Solo mover hacia abajo si el cursor está por debajo del centro del ojo
        if (e.clientY > ojoCenterY) {
          const distanceBelow = e.clientY - ojoCenterY
          // Limitar el movimiento al 20% del tamaño del vector ojo (mitad del 40%)
          const maxMovementY = ojoHeight * 0.2 // 20% de la altura del ojo
          const normalizedDistance = Math.min(distanceBelow / (window.innerHeight / 2), 1)
          movementY = normalizedDistance * maxMovementY
        }
      }
      
      setMouseX(movementX)
      setMouseY(movementY)
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  return (
    <header className="flex justify-center items-center p-4.5 md:p-6">
      <div 
        className="relative flex justify-between items-center rounded-md px-4 py-3 md:px-6 md:py-4"
        style={{ 
          width: '85%',
          backgroundColor: '#222329',
          minWidth: '400px',
          maxWidth: '1200px'
        }}
      >
        {/* Logo text_v2 a la izquierda */}
        <Logo />
        
        {/* Logo ojo_v1 centrado en el medio */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img 
            ref={ojoRef}
            src={ojoV1} 
            alt="Ojo" 
            className="h-[3.3rem] md:h-[4.2rem] w-auto"
            style={{ 
              filter: 'brightness(0) saturate(100%) invert(100%)',
              position: 'relative',
              zIndex: 1,
              display: 'block'
            }}
          />
          <img 
            src={pupilaV2} 
            alt="Pupila" 
            className="h-[3.3rem] md:h-[4.2rem] w-auto"
            style={{ 
              filter: 'brightness(0) saturate(100%) invert(100%)',
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: `translate(calc(-50% + ${mouseX}px), ${mouseY * 0.5}px)`,
              zIndex: 2,
              display: 'block',
              transition: 'transform 0.1s ease-out'
            }}
          />
          <img 
            src={brilloV1} 
            alt="Brillo" 
            className="h-[3.3rem] md:h-[4.2rem] w-auto"
            style={{ 
              filter: 'brightness(0) saturate(100%) invert(8%) sepia(4%) saturate(200%) hue-rotate(200deg) brightness(95%) contrast(95%)',
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: `translate(calc(-50% + ${mouseX * 1.1}px), ${mouseY}px)`,
              zIndex: 3,
              display: 'block',
              transition: 'transform 0.1s ease-out'
            }}
          />
        </div>
        
        {/* Botones a la derecha */}
        <div className="flex gap-3 md:gap-4">
          <button
            onClick={() => setMode('candidate')}
            className={`px-5 py-2 md:px-6 md:py-2.5 ${
              mode === 'candidate'
                ? 'shadow-lg transform scale-105 rounded-full'
                : 'hover:opacity-80'
            }`}
            style={{ 
              fontFamily: 'BeltramMono', 
              fontWeight: 400,
              backgroundColor: mode === 'candidate' ? '#66ff00' : '#474956',
              color: mode === 'candidate' ? '#222329' : '#ffffff',
              border: 'none',
              borderRadius: mode === 'candidate' ? '9999px' : '3px',
              transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease'
            }}
          >
            Candidate
          </button>
          <button
            onClick={() => setMode('company')}
            className={`px-5 py-2 md:px-6 md:py-2.5 ${
              mode === 'company'
                ? 'shadow-lg transform scale-105 rounded-full'
                : 'hover:opacity-80'
            }`}
            style={{ 
              fontFamily: 'BeltramMono', 
              fontWeight: 400,
              backgroundColor: mode === 'company' ? '#f3406d' : '#474956',
              color: mode === 'company' ? '#222329' : '#ffffff',
              border: 'none',
              borderRadius: mode === 'company' ? '9999px' : '5px',
              transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease'
            }}
          >
            Company
          </button>
        </div>
      </div>
    </header>
  )
}
