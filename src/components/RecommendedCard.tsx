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
import { convertGoogleDriveLink } from "@/utils/directImageLink";

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
          <CarouselItem key={`event-${index}`} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="relative h-[400px]">
                  {isMounted && fetchedEvents[`${index+1}`] && (
                    <>
                      <div className="absolute inset-0">
                        <Image 
                          src={convertGoogleDriveLink(fetchedEvents[`${index+1}`].imgUrl)} 
                          alt="" 
                          fill
                          className="object-cover transform scale-125 transition-transform duration-500" 
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
                        <div className="flex flex-col gap-y-2">
                          <div className="font-bold">
                            <span className="text-sm">{fetchedEvents[`${index+1}`].eventName}</span>
                            <span className="text-sm gap-x-2 flex flex-row items-center">
                              <Icons.logo color="#FFFFFF" className="h-4 w-4"/>
                              {fetchedEvents[`${index+1}`].cityName}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm">{fetchedEvents[`${index+1}`].date}</span>
                            <span className="text-sm">{fetchedEvents[`${index+1}`].weather}</span>
                          </div>
                        </div>
                      </div>
                    </>
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
