import React from "react";
import { Badge } from "./ui/badge";
import { BadgeIcon } from "lucide-react";
import { Button } from "./ui/button";

function Hero() {
  return (
    <section className="overflow-hidden p-[1rem] flex flex-col items-center justify-center gap-[1rem] text-center">
      <Badge variant="outline">
        <BadgeIcon className="" />
        open to work
      </Badge>
      <h1 className="text-5xl font-bold mt-4">A Frontend Developer</h1>
      <p className="text-lg mt-2 text-muted-foreground">
        I build things for the web.
      </p>
      <div className="mt-4 flex gap-[.5rem]">
        <Button className="" variant="default">
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
