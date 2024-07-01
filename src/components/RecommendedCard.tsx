'use client';

import * as React from "react";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import manipulatedEvents from './../utils/recommendFetch';
import Image from "next/image";
import { Icons } from "./Icons";

interface Event {
  eventName: string;
  cityName: string;
  date: string;
  weather: string;
  distanceKm: string;
  imgUrl: string;
}

type EventsData = Record<string, Event>;

export function CarouselSize() {
  const [fetchedEvents, setFetchedEvents] = useState<EventsData>({});
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsData = await manipulatedEvents();
        setFetchedEvents(eventsData);
        setIsMounted(true);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[70%] sm:max-w-[80%] md:max-w-[90%] mx-auto"
    >
      <CarouselContent>
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex relative aspect-square p-6">
                  {isMounted && fetchedEvents[`${index+1}`] && (
                    <div className="absolute bottom-1 flex flex-col gap-y-2 flex-wrap">
                      <div className="flex flex-col gap-y-1 font-bold">
                        <span className="text-sm text-strokeColor">{fetchedEvents[`${index+1}`].eventName}</span>
                        <span className="text-sm text-strokeColor gap-x-2 flex flex-row items-center">
                          <Icons.logo color="#989090" className="h-1 w-2"/>
                          {fetchedEvents[`${index+1}`].cityName}
                        </span>
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-sm text-strokeColor">{fetchedEvents[`${index+1}`].date}</span>
                        <span className="text-sm text-strokeColor">{fetchedEvents[`${index+1}`].weather}</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}