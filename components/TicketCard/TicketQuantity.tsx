"use client";

import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const TicketQuantitySelector = ({ value, onChange }: Props) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select tickets" />
      </SelectTrigger>
      <SelectContent>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <SelectItem key={num} value={num.toString()}>
            {num} Ticket{num > 1 ? "s" : ""}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default TicketQuantitySelector;
