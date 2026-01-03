import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import WhyUs from '@/components/WhyUs'
import Stats from '@/components/Stats'
import Contact from '@/components/Contact'
import JsonLd from '@/components/JsonLd'

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <Stats />
      <Contact />
    </>
  )
}
