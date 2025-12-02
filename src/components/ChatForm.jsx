import { useState } from 'react'

export default function ChatForm({ content, mode }) {
  const [formData, setFormData] = useState({
    description: '',
    field1: '',
    field2: '',
    field3: '',
    field4: ''
  })
  
  const [focusedField, setFocusedField] = useState(null)

  const primaryColor = mode === 'candidate' ? '#66ff00' : '#f3406d'
  const textColor = mode === 'candidate' ? '#222329' : '#ffffff'

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Form submitted:', formData)
    alert('ECHA EL FRENO MADALENO')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 md:py-12" style={{ marginTop: '-90px' }}>
      <div className="bg-white rounded-2xl border-2 p-6 md:p-8 shadow-xl" style={{ borderColor: '#222329' }}>
        <p className="mb-2 text-lg md:text-xl" style={{ fontFamily: 'BeltramMono', fontWeight: 400, color: '#222329' }}>
          {content.formPrompt}{' '}
          <span 
            className="px-2 py-1"
            style={{ 
              borderRadius: 0,
              backgroundColor: primaryColor,
              color: '#222329'
            }}
          >
            {content.formPromptHighlight}
          </span>:
        </p>
        <p className="text-sm md:text-base mb-6 opacity-70" style={{ fontFamily: 'BeltramMono', fontWeight: 300, color: '#222329' }}>{content.formDescription}</p>
        
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          onFocus={() => setFocusedField('description')}
          onBlur={() => !formData.description && setFocusedField(null)}
          placeholder={focusedField === 'description' ? '' : content.exampleText}
          className="w-full border border-gray-300 rounded-2xl p-4 mb-6 min-h-[120px] bg-gray-50 resize-y focus:outline-none focus:ring-2 focus:ring-purple-accent focus:border-transparent transition-all"
          style={{ 
            fontFamily: 'BeltramMono', 
            fontWeight: 300,
            color: formData.description ? '#222329' : '#222329',
            opacity: formData.description ? 1 : 0.7
          }}
        />
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <input 
              type="text" 
              name="field1"
              placeholder={focusedField === 'field1' ? '' : "Company name *"} 
              value={formData.field1}
              onChange={handleChange}
              onFocus={() => setFocusedField('field1')}
              onBlur={() => !formData.field1 && setFocusedField(null)}
              className="border border-gray-300 rounded-2xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-accent focus:border-transparent transition-all"
              style={{ fontFamily: 'BeltramMono', fontWeight: 400 }}
            />
            <input 
              type="email" 
              name="field2"
              placeholder={focusedField === 'field2' ? '' : "Contact Email *"} 
              value={formData.field2}
              onChange={handleChange}
              onFocus={() => setFocusedField('field2')}
              onBlur={() => !formData.field2 && setFocusedField(null)}
              className="border border-gray-300 rounded-2xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-accent focus:border-transparent transition-all"
              style={{ fontFamily: 'BeltramMono', fontWeight: 400 }}
            />
            <input 
              type="text" 
              name="field3"
              placeholder={focusedField === 'field3' ? '' : "Contact Linkedin"} 
              value={formData.field3}
              onChange={handleChange}
              onFocus={() => setFocusedField('field3')}
              onBlur={() => !formData.field3 && setFocusedField(null)}
              className="border border-gray-300 rounded-2xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-accent focus:border-transparent transition-all"
              style={{ fontFamily: 'BeltramMono', fontWeight: 400 }}
            />
            <input 
              type="text" 
              name="field4"
              placeholder={focusedField === 'field4' ? '' : "Contact Telegram"} 
              value={formData.field4}
              onChange={handleChange}
              onFocus={() => setFocusedField('field4')}
              onBlur={() => !formData.field4 && setFocusedField(null)}
              className="border border-gray-300 rounded-2xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-purple-accent focus:border-transparent transition-all"
              style={{ fontFamily: 'BeltramMono', fontWeight: 400 }}
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-3 px-6 rounded-2xl hover:opacity-90 transition-all transform hover:scale-[1.02] shadow-lg"
            style={{ 
              fontFamily: 'BeltramMono', 
              fontWeight: 700,
              backgroundColor: primaryColor,
              color: textColor
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

