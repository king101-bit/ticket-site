"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import TicketQuantitySelector from "./TicketQuantity"; // separate component
import { TicketIcon } from "lucide-react";

const TicketPurchaseCard = ({ event }: { event: { price: number } }) => {
  const [quantity, setQuantity] = useState("1");

  const total = Number(quantity) * event.price;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <TicketIcon className="h-5 w-5" />
          Purchase Tickets
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <div className="flex flex-col items-center mb-4">
          <span className="text-3xl font-bold text-indigo-600">
            &#8358; {event.price}
          </span>
          <span className="text-sm text-muted-foreground">per ticket</span>
        </div>
        <div className="space-y-2 mb-4">
          <Label>Quantity</Label>
          <TicketQuantitySelector value={quantity} onChange={setQuantity} />
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="font-medium">Total:</span>
            <span className="text-2xl font-bold text-indigo-600">
              &#8358; {total.toFixed(2)}
            </span>
          </div>
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
            Buy Tickets
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TicketPurchaseCard;
