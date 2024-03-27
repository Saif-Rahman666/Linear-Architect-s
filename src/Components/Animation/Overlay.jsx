import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-yellow-300 rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div class="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Hello, We are Linear Architects
          </h1>
          <p className="text-gray-500">Welcome to our website</p>
          <p className="mt-3">We know:</p>
          <ul className="leading-9">
            <li>🧑‍💻 How to Design</li>
            <li>🧑‍🏫 How to Implement</li>
            <li>📦 How to Deliver</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Here are our skillsets 🔥
          </h1>
          <p className="text-gray-500">PS: We never miss our target</p>
          <p className="mt-3">
            <b>Interior Design 🚀</b>
          </p>
          <ul className="leading-9">
            <li>Exterior Design</li>
            <li>Consultancy</li>
            <li>Architectural Plan</li>
            <li>Structural Design</li>
          </ul>
          <p className="mt-3">
            <b>landscape Design 🔬</b>
          </p>
          <ul className="leading-9">
            <li>Soil Test</li>
            <li>Estimation"</li>
            <li>Digital Survey</li>
            <li>Supervision</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">
            🤙 Call us maybe?
          </h1>
          <p className="text-gray-500">
            We are very expensive but you won't regret it
          </p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            📞 <a href="tel:(+88) 013-0137-0905">(+88) 013-0137-0905</a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
