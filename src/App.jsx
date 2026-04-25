import { AppSidebar } from "./components/AppSidebar";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import { SidebarInset } from "./components/ui/sidebar";

function App() {
  return (
    <>
      <div className="md:hidden">
        <AppSidebar />
      </div>
      <SidebarInset>
        <div className=" flex flex-col">
          <Nav />
          <main className="h-[calc(100dvh-4rem)] overflow-y-scroll snap-y snap-mandatory">
            <Hero />
            <Projects />
            <Contact />
          </main>
        </div>
      </SidebarInset>
    </>
  );
}

export default App;
