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
        <div className=" flex flex-col gap-[2rem]">
          <Nav />
          <Hero />
          <Projects />
          <Contact />
        </div>
      </SidebarInset>
    </>
  );
}

export default App;
