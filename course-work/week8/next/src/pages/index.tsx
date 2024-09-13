import Image from "next/image";
import localFont from "next/font/local";
import { VideoCard } from "@/components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";
import { AppBar, SignIn } from "@/components/AppBar";
import { Inter } from 'next/font/google';
import { SearchBar } from "@/components/SearchBar";

const inter = Inter({subsets: ['latin']})
export default function Home() {
  return (  
    <div>
      <AppBar></AppBar>
      <VideoGrid></VideoGrid>
    </div>
    
  )
}
