import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default async function TicketCard() {
  const supabase = createClient();

  // 🔥 Fetch the event by ID from Supabase
  const { data: event, error } = await supabase
    .from("events")
    .select("*")
    .single();
  console.log("Event data:", event);

  if (error || !event) {
    return (
      <div className="p-8 text-center text-red-500">
        Event not found or an error occurred.
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="relative">
            <Image
              src={event.image_url}
              alt="an image"
              width="300"
              height="200"
              className="w-full h-48 object-cover rounded"
            ></Image>
            <Badge className="absolute top-3 right-3 bg-white text-gray-900">
              Music
            </Badge>
          </div>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold line-clamp-1">
              {event.title}
            </CardTitle>
            <CardDescription className="line-clamp-2">
              {event.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-w-sm">
              <div className="flex items-center gap-2 text-primary">
                <CalendarDays className="w-5 h-5 text-indigo-500" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>{event.location}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex justify-between items-center w-full pt-2">
              <span className="text-2xl font-bold text-indigo-600">
                &#8358; {event.price}
              </span>
              <Link href={`/event/${event.id}`}>
                <Button
                  variant="outline"
                  className="bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  View Details
                </Button>
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
