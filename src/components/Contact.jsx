import React from "react";
import { Button } from "./ui/button";

function Contact() {
  return (
    <section
      id="contacts"
      className="flex flex-col justify-center items-center text-center gap-4 p-[1rem] h-full snap-start"
    >
      <h2 className="text-xl md:text-2xl lg:text-3xl">Let's work together</h2>
      <p className="text-sm md:text-base">
        Open to remote frontend roles. Feel free to reach out.{" "}
      </p>
      <div className="flex gap-[.5rem]">
        <Button asChild variant="outline">
          <a href="mailto:your-email@example.com">Email</a>
        </Button>
        <Button asChild variant="outline">
          <a href="mailto:your-email@example.com">LinkedIn</a>
        </Button>
        <Button asChild variant="outline">
          <a
            href="https://github.com/eustaquiogalano"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </Button>
      </div>
    </section>
  );
}

export default Contact;
