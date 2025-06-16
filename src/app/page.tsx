import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import TicketCard from "@/components/TicketCard/TicketCard";
import { Button } from "@/components/ui/button";
import { Settings, Ticket } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <header className="bg-white shadow-sm border-b dark:bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <Ticket className="h-8 w-8 text-indigo-600" />
                <h1 className="text-2xl font-bold text-gray-900">Ticketr</h1>
              </div>
              <ThemeSwitcher />
              <Link href="/admin">
                <Button
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <Settings className="h-4 w-4 text-black dark:text-white" />
                  <span className="text-black dark:text-white">
                    Admin Panel
                  </span>
                </Button>
              </Link>
              <AuthButton />
            </div>
          </div>
        </header>
        <section className="h-min-screen py-20 px-4 text-center bg-gradient-to-br from-blue-50 to-indigo-100 ">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Discover Amazing Events
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Find and book tickets for the best events in your city
            </p>
            <Button>
              <Link href="/auth/sign-up">Get Started</Link>
            </Button>
          </div>
        </section>
        <section className="py-20 px-4 text-center bg-white dark:bg-black">
          <div className="flex justify-between">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                🎟️ New Tickets Available
              </h1>
              <p className="text-muted-foreground">
                Fresh events just added to our platform
              </p>
            </div>
            <Button>View all new Events</Button>
          </div>
          <div className=" mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <TicketCard key={i} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
