import Nav from "./Components/Nav"
import { Footer, Hero, Products, Services } from "./Sections"

export default function App() {
  return (
   <main className="relative " >
    <Nav/>
    <section id="home" className="max-container">
      <Hero/>
    </section>
    <section  id="products" className="padding">
      <Products/>
    </section>
    <section id='services' className="padding  padding-x py-10">
        <Services/>
</section>
<section id="contact" className="padding bg-black padding-x pb-8">
<Footer/>
</section>
   </main>
  )
}