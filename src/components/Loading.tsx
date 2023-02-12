import Image from "next/image";
import Logo from "../assets/logo.jpg";

export function Loading() {
  return (
    <div
      className="
        flex 
        h-screen 
        w-full 
        flex-1 
        items-center 
        justify-center 
        bg-slate-800 
        bg-hero-pattern 
        bg-cover 
        bg-[0%_25%] 
        bg-no-repeat 
        bg-blend-overlay
      "
    >
      <Image
        src={Logo}
        alt="carregando"
        width={200}
        height={200}
        className="animate-pulse rounded-full"
      />
    </div>
  );
}
