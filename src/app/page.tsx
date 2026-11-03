import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import Services from "@/components/sections/Services";
import ContactHub from "@/components/sections/ContactHub";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProjectsGrid />
        <Services />
        <ContactHub />
      </main>
    </div>
  );
}
