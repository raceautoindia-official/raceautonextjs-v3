import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import BreakingNews from "@/components/BreakingNews/BreakingNews";
import GreenBar from "@/components/GreenBar/MagazineBar";

export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BreakingNews />
      <Navbar />
      {children}
      <Footer />
      <GreenBar />
    </>
  );
}
