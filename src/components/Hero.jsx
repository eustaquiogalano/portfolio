import React from "react";
import { Badge } from "./ui/badge";
import { BadgeIcon } from "lucide-react";
import { Button } from "./ui/button";

function Hero() {
  return (
    <section className="overflow-hidden p-[1rem] flex flex-col items-center justify-center gap-[1rem] text-center text-primary-foreground">
      <Badge className="" variant="accent">
        <BadgeIcon />
        open to work
      </Badge>
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mt-4">
        A Frontend Developer
      </h1>
      <p className="text-sm md:text-base mt-2 text-muted-foreground">
        I build things for the web.
      </p>
      <div className="mt-4 flex gap-[.5rem]">
        <Button variant="accent" className="">
          View Projects
        </Button>
        <Button asChild className="" variant="outline">
          <a
            href="https://github.com/eustaquiogalano"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github →
          </a>
        </Button>
        <Button className="" variant="outline">
          Email me →
        </Button>
      </div>
    </section>
  );
}

export default Hero;
