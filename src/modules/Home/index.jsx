import Banner from "./components/Banner"
import AboutSection from "./components/AboutSection"
import WhyChooseUs from "./components/WhyChooseUs"
import Products from "./Products"
import CallToAction from "./components/CallToAction"
import Testimonials from "./components/Testimonials"

export default function Home() {
  return (
    <>
      <Banner />
      <AboutSection />
      <Products />
      <WhyChooseUs />
      <CallToAction />
      <Testimonials />
    </>
  )
}
