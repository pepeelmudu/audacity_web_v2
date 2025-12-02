import logoText from '../assets/vectors/logo_lucas_text_2.svg'

export default function Logo() {
  return (
    <div className="flex items-center">
      <img 
        src={logoText} 
        alt="Audacity" 
        className="h-[2.2rem] md:h-[2.8rem] w-auto"
        style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
      />
    </div>
  )
}

