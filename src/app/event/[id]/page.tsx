import { createClient } from "@/lib/supabase/client";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TicketPurchaseCard from "@/components/TicketCard/TicketPurchaseCard";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const supabase = createClient();
  const { id } = await params;

  // 🔥 Fetch the event by ID from Supabase
  const { data: event, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", id)
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link
              href="/"
              className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Events</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-hidden">
              <Image
                src={event.image_url}
                alt={event.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-3xl font-bold">
                  {event.title}
                </CardTitle>
                <CardDescription className="text-lg">
                  {event.description}
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Event Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-indigo-600" />
                  <div>
                    <p className="font-medium">Date & Time</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {event.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-indigo-600" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {event.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <TicketPurchaseCard event={event} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;