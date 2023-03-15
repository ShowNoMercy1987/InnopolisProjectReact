import { useCurrentDate } from "@kundinos/react-hooks";

function Time() {
  const currentDate = useCurrentDate();

  const fullYear = currentDate.getFullYear();

  return <>{fullYear}</>;
}

export default Time;
