export default function TerminalBar({ text, mode }) {
  const backgroundColor = mode === 'candidate' ? '#66ff00' : '#f3406d'
  const marqueeClass = mode === 'candidate' ? 'marquee' : 'marquee-reverse'
  
  // Duplicamos el texto para crear el efecto de loop infinito
  const repeatedText = Array(10).fill(text).join(' ')
  
  return (
    <div className="overflow-hidden" style={{ 
      paddingTop: '0.225rem', 
      paddingBottom: '0.225rem',
      backgroundColor: backgroundColor
    }}>
      <div className="marquee-container">
        <div 
          className={`${marqueeClass} whitespace-nowrap text-xs md:text-sm`} 
          style={{ 
            fontFamily: 'BeltramMono', 
            fontWeight: 400,
            color: '#222329'
          }}
        >
          {repeatedText} {repeatedText}
        </div>
      </div>
    </div>
  )
}

