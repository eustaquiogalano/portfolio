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
    <section className="flex flex-col items-center justify-center p-[1rem] ">
      <Carousel className="w-full max-w-[12rem] sm:max-w-xs">
        <CarouselContent>
          {projects.map((project) => {
            return (
              <CarouselItem>
                <div className="p-1">
                  <Card className="relative mx-auto w-full max-w-sm pt-0">
                    <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                    <img
                      src="https://avatar.vercel.sh/shadcn1"
                      alt="Event cover"
                      className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                    />
                    <CardHeader className="flex flex-col gap-[1rem]">
                      <CardTitle>{project.title}</CardTitle>
                      <CardAction>
                        <Badge variant="secondary">React</Badge>
                        <Badge variant="secondary">Tailwind CSS</Badge>
                      </CardAction>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex flex-col gap-[.5rem] ">
                      <Button className="w-full">Live Demo</Button>
                      <Button className="w-full">Github</Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

export default Projects;
