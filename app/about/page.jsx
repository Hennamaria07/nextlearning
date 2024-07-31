'use client';
import { useRouter } from "next/navigation";

const About = () => {
  const route = useRouter();
  return (
    <section className='grid place-items-center gap-5'>
      <div>About</div>
      <button 
      onClick={route.push('contact')}
      >Go back to the contact</button>
    </section>
  )
}

export default About