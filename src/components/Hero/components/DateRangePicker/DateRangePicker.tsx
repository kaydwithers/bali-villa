"use client";

import { useDatePicker } from "react-aria";
import { useDateRangePicker } from "react-aria";
import { useDatePickerState } from "react-stately";
import { useRef, useState } from "react";
import { Calendar } from "./components/Calendar/Calendar";
import { DatePickerDateField } from "./components/DatePickerDateField/DatePickerDateField";
import { CalendarDialog } from "./components/CalendarDialog/CalendarDialog";
import { CalendarPopover } from "./components/CalendarPopover/CalendarPopover";
import { DatePickerFieldButton } from "./components/DatePickerButton/DatePickerButton";
import { CalendarIcon, ExclamationCircleIcon } from "@heroicons/react/24/solid";

interface IDateRangePicker {
  label: string;
  minValue: Date;
}

export const DateRangePicker = ({ label, minValue }: IDateRangePicker) => {
  let state = useDatePickerState(props);
  let ref = useRef<HTMLDivElement>(null);
  let {
    groupProps,
    labelProps,
    startFieldProps,
    endFieldProps,
    buttonProps,
    dialogProps,
    calendarProps,
  } = useDateRangePicker(props, state, ref);

  // console.log("buttonProps: ", buttonProps);
  // console.log("dialogProps: ", dialogProps);
  // console.log("calendarProps: ", calendarProps);
  // console.log("fieldProps: ", fieldProps);
  // console.log("labelProps: ", labelProps);
  // console.log("groupProps: ", groupProps);

  return (
    <div className="relative inline-flex flex-col text-left">
      <span {...labelProps} className="text-sm text-gray-800">
        {label}
      </span>

      <div {...groupProps} ref={ref} className="flex group">
        <div className="flex bg-white border border-gray-300 group-hover:border-gray-400 transition-colors rounded-l-md pr-10 group-focus-within:border-violet-600 group-focus-within:group-hover:border-violet-600 p-1 relative">
          <DatePickerDateField {...startFieldProps} />

          <span aria-hidden="true" className="px-2">
            –
          </span>

          <DatePickerDateField {...endFieldProps} />
          {state.validationState === "invalid" && (
            <ExclamationCircleIcon className="w-6 h-6 text-red-500 absolute right-1" />
          )}
        </div>

        <DatePickerFieldButton {...buttonProps} isPressed={state.isOpen}>
          <CalendarIcon className="w-5 h-5 text-gray-700 group-focus-within:text-violet-700" />
        </DatePickerFieldButton>
      </div>

      {state.isOpen && (
        <CalendarPopover
          triggerRef={ref}
          state={state}
          placement="bottom start"
        >
          <CalendarDialog {...dialogProps}>
            <RangeCalendar {...calendarProps} />
          </CalendarDialog>
        </CalendarPopover>
      )}
    </div>
  );
};

// https://codesandbox.io/p/sandbox/reverent-faraday-5nwk87?file=%2Fsrc%2FCalendarCell.js%3A1%2C1-95%2C1
