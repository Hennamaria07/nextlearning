'use client';
import { useRouter } from "next/navigation";
import { Monomaniac_One } from "next/font/google";

const monomaniac = Monomaniac_One({subsets: ["latin-ext"], weight: "400"});
const About = () => {
  const route = useRouter();
  return (
    <section className='grid place-items-center gap-5'>
      <div>About</div>
      <button 
      className={`text-${monomaniac.className}`}  // Using the font class obtained from Monomaniac_One
      // onClick={route.push('contact')}
      >Go back to the contact</button>
    </section>
  )
}

export default About