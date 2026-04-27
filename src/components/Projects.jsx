import React from "react";
import { projects } from "../data/projects";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center p-[1rem] h-full snap-start"
    >
      <Carousel className="w-full max-w-[20rem] sm:max-w-[50rem] pb-10  ">
        <CarouselContent className="items-stretch">
          {projects.map((project) => {
            return (
              <CarouselItem className="sm:basis-1/2 h-full">
                <Card className="relative mx-auto w-full h-full max-w-sm pt-0 p-1 bg-secondary text-secondary-foreground flex flex-col h-[500px]">
                  {/* <div className="absolute inset-0 z-30 aspect-video bg-black/35" /> */}
                  <img
                    src={project.img}
                    alt="Event cover"
                    className="relative aspect-video w-full object-cover "
                  />
                  <CardHeader className="flex flex-col gap-[1rem]">
                    <CardTitle>{project.title}</CardTitle>
                    <CardAction className="flex gap-[.25rem]">
                      <Badge variant="accent">React</Badge>
                      <Badge variant="accent">Tailwind CSS</Badge>
                    </CardAction>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex flex-col gap-[.5rem] mt-auto">
                    <Button asChild variant="accent" className="w-full">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="left-1/2 -translate-x-16 -bottom-12 top-auto sm:hidden" />
        <CarouselNext className="left-1/2 translate-x-4 -bottom-12 top-auto sm:hidden" />
      </Carousel>
    </section>
  );
}

export default Projects;
