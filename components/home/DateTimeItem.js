import { CalendarIcon } from "@heroicons/react/20/solid";
import format from "date-fns/format";

// This component will be used to display the date a post was created
export default function DateTimeItem({ datetime }) {
  return (
    <div className="dark:text-gray-400 text-gray-500 flex items-center justify-start space-x-2 font-medium">
      <CalendarIcon className="w-4 h-4" />
      <span className="text-sm whitespace-nowrap">
        {format(new Date(datetime), "MMMM dd, yyyy")}
      </span>
    </div>
  );
}
