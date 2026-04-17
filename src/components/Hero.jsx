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
        <Button className="" variant="secondary">
          Github →
        </Button>
        <Button className="" variant="secondary">
          Email me →
        </Button>
      </div>
    </section>
  );
}

export default Hero;
