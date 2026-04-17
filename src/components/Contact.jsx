import React from "react";
import { Button } from "./ui/button";

function Contact() {
  return (
    <section className="flex flex-col justify-center items-center text-center gap-4 p-[1rem]">
      <h2>Let's work together</h2>
      <p>Open to remote frontend roles. Feel free to reach out. </p>
      <div>
        <Button asChild>
          <a href="mailto:your-email@example.com">Email</a>
        </Button>
        <Button asChild>
          <a href="mailto:your-email@example.com">LinkedIn</a>
        </Button>
        <Button asChild>
          <a href="mailto:your-email@example.com">GitHub</a>
        </Button>
      </div>
    </section>
  );
}

export default Contact;
