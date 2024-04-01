"use client";

import { useDialog } from "react-aria";
import { useRef, ReactNode } from "react";

interface ICalendarDialog {
  id?: string;
  ariaLabelledby?: string;
  title: string;
  children: ReactNode;
}

export const CalendarDialog = ({
  title,
  children,
  ...props
}: ICalendarDialog) => {
  let ref = useRef<HTMLDivElement>(null);
  let { dialogProps } = useDialog(props, ref);

  return (
    <div {...dialogProps} ref={ref}>
      {children}
    </div>
  );
};
