import React from 'react'
import Hero from './components/hero'
import Section from './components/section'

function App() {
  return (
    <div>
      <Hero/>
      <section aria-label="Advertisement" className="bg-[#040616] px-6 py-8">
        <div id="frame" style={{ width: '100%', margin: 'auto', position: 'relative', zIndex: 99998 }}>
          <iframe
            data-aa="2462321"
            src="https://acceptable.a-ads.com/2462321/?size=Adaptive"
            title="Advertisement"
            style={{ border: 0, padding: 0, width: '70%', height: 'auto', overflow: 'hidden', display: 'block', margin: 'auto' }}
          />
        </div>
      </section>
    </div>
  )
}

export default App