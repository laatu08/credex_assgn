import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import { Helmet } from "react-helmet";
import ChatWidget from "./components/ChatWidget";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Helmet>
        <title>SoftSell | Sell Unused Software Licenses</title>
        <meta
          name="description"
          content="Turn unused software licenses into cash instantly with SoftSell."
        />
        <meta
          name="keywords"
          content="license resale, sell software license, unused software, SoftSell"
        />
      </Helmet>

      <Navbar></Navbar>
      <Hero></Hero>
      <HowItWorks></HowItWorks>
      <WhyChooseUs></WhyChooseUs>
      <ChatWidget></ChatWidget>
      <Testimonials></Testimonials>
      <ContactForm></ContactForm>
    </>
  );
}

export default App;
