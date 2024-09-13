import Image from "next/image";
import localFont from "next/font/local";
import { VideoCard } from "@/components/VideoCard";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (  
    <div>
      <VideoCard 
      image={"/photo.png"} 
      thumb={"logo.png"} 
      title={"Machine Learning"} 
      name={"Divya"} 
      views={"42M"} 
      days={"12 Days"}/>
    </div>
    
  );
}
