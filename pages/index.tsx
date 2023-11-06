import Users from "@/components/Home/Users";
import Layout from "@/components/Layout/Layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Users />
    </Layout>
  );
}
