import { useRef } from "react";
import { useCalendarState } from "react-stately";
import { useCalendar, useLocale } from "react-aria";
import { createCalendar } from "@internationalized/date";
import { CalendarButton } from "./components/CalendarButton/CalendarButton";
import { CalendarGrid } from "./components/CalendarGrid/CalendarGrid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export function Calendar(props) {
  let { locale } = useLocale();
  let state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  });

  let ref = useRef<HTMLDivElement>(null);
  let { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar(
    props,
    state,
    ref,
  );

  return (
    <div {...calendarProps} ref={ref} className="inline-block text-gray-800">
      <div className="flex items-center pb-4">
        <h2 className="flex-1 font-bold text-xl ml-2">{title}</h2>
        <CalendarButton {...prevButtonProps}>
          <ChevronLeftIcon className="h-6 w-6" />
        </CalendarButton>
        <CalendarButton {...nextButtonProps}>
          <ChevronRightIcon className="h-6 w-6" />
        </CalendarButton>
      </div>
      <CalendarGrid state={state} />
    </div>
  );
}
