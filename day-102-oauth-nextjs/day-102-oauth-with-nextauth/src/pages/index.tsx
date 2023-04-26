import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function IndexPage() {
  return (
    <Layout>
      <h1>Next.js Example</h1>
      <p>Here is my NextJS NextAut application</p>
    </Layout>
  );
}
