export function convertDate(inputDate) {
  const input = inputDate;
  const date = new Date(input);

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formattedDate;
}

export function convertTo12HourFormat(timeRange) {
  const [startTime, endTime] = timeRange.split(" - ");

  const formatTime = (timeStr) => {
    const [hour, minute] = timeStr.split(":");
    const date = new Date();
    date.setHours(hour, minute);

    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return `${formatTime(startTime)} - ${formatTime(endTime)}`;
}

export function getDurationFromRange(timeRange) {
  if (typeof timeRange !== "string" || !timeRange.includes("-")) {
    return { hours: 0, minutes: 0 };
  }

  const [startTime, endTime] = timeRange.split(" - ").map((str) => str.trim());

  const parseTimeToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(":").map(Number);
    return hours * 60 + (minutes || 0);
  };

  const startMinutes = parseTimeToMinutes(startTime);
  const endMinutes = parseTimeToMinutes(endTime);

  const totalMinutes = endMinutes - startMinutes;

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return { hours, minutes };
}
