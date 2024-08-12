import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format, setHours, setMinutes, setSeconds } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "./ui/calendar";

interface DatePickerWithPresetsProps {
  setChangeTime: (timeDifference: number) => void;
  initialTimeDifference?: number; // Optional prop for initial time difference
}

export default function DatePickerWithPresets({
  setChangeTime,
  initialTimeDifference,
}: DatePickerWithPresetsProps) {
  const [date, setDate] = React.useState<Date>();
  const [hours, setHoursState] = React.useState<number>(12); // Default to 12
  const [amPm, setAmPm] = React.useState<"AM" | "PM">("AM");
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  // Set initial values based on initialTimeDifference
  React.useEffect(() => {
    if (initialTimeDifference !== undefined) {
      const initialDate = new Date(Date.now() + initialTimeDifference);
      setDate(initialDate);
      setHoursState(initialDate.getHours() % 12 || 12); // Handle 12-hour format
      setAmPm(initialDate.getHours() >= 12 ? "PM" : "AM");
    }
  }, [initialTimeDifference]);

  React.useEffect(() => {
    if (date) {
      let adjustedHours = hours;
      if (amPm === "PM" && hours !== 12) {
        adjustedHours += 12;
      } else if (amPm === "AM" && hours === 12) {
        adjustedHours = 0; // Handle 12 AM as 00:00
      }

      const finalDate = setHours(setMinutes(setSeconds(date, 0), 0), adjustedHours);
      setChangeTime(finalDate.getTime() - Date.now());
    }
  }, [date, hours, amPm]);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate !== undefined) {
      let adjustedHours = hours;
      if (amPm === "PM" && hours !== 12) {
        adjustedHours += 12;
      } else if (amPm === "AM" && hours === 12) {
        adjustedHours = 0; // Handle 12 AM as 00:00
      }

      const updatedDate = setHours(setMinutes(setSeconds(selectedDate, 0), 0), adjustedHours);
      setDate(updatedDate);
      setIsOpen(false); // Auto-close on date select
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "col-span-3  text-left font-normal overflow-hidden ",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP p") : <span>Pick a date and time</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="flex w-auto flex-col space-y-2 p-2"
      >
        <div className="flex space-x-2">
          <Select
            value={hours.toString()}
            onValueChange={(value) => setHoursState(parseInt(value))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select hour" />
            </SelectTrigger>
            <SelectContent position="popper">
              {Array.from({ length: 12 }, (_, i) => (
                <SelectItem key={i} value={(i === 0 ? 12 : i).toString()}>
                  {i === 0 ? "12" : i.toString().padStart(2, "0")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={amPm} onValueChange={(value) => setAmPm(value as "AM" | "PM")}>
            <SelectTrigger>
              <SelectValue placeholder="AM/PM" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="AM">AM</SelectItem>
              <SelectItem value="PM">PM</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="rounded-md border">
          <Calendar mode="single" selected={date} onSelect={handleDateSelect} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
