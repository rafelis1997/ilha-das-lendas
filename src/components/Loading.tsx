import Image from "next/image";
import Logo from '../assets/logo.jpg';


export function Loading() {
  return (
    <div className="flex flex-1 w-full h-screen justify-center items-center bg-hero-pattern bg-[0%_25%] bg-blend-overlay bg-slate-800 bg-no-repeat bg-cover">
      <Image 
        src={Logo} 
        alt="carregando" 
        width={200} 
        height={200}
        className="rounded-full animate-pulse"
      />
    </div>
  )
}