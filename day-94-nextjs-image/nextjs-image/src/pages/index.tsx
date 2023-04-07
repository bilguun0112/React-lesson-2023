import FancyButton from "@/components/FancyButton";
import Button from "@/components/button";
import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div style={{ margin: "auto" }}>
      <Image
        src="https://images.unsplash.com/photo-1605460375648-278bcbd579a6"
        width={500}
        height={500}
        style={{ objectFit: "cover" }}
        alt="netx js"
      />
      <Button> Click me </Button>
      <FancyButton> Click me </FancyButton>
    </div>
  );
}
