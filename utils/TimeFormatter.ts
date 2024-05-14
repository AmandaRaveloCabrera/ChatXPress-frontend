const formatTimeInMessage = (time: string) => {
  const fullTimeSplit = time.split(" ");
  const timeSplit = fullTimeSplit[1].split(":");
  const daySplit = fullTimeSplit[0].split("-");
  const newTime = `${daySplit[0]}/${daySplit[1]} - ${timeSplit[0]}:${timeSplit[1]}`;
  return newTime;
};

const formatTimeInChat = (time: string) => {
  const d = new Date();
  const currentDay = `${d.getDay()}-${d.getMonth()}-${d.getFullYear()}`;
  const fullTimeSplit = time.split(" ");
  const timeSplit = fullTimeSplit[1].split(":");
  const daySplit = fullTimeSplit[0].split("-");
  if (currentDay === fullTimeSplit[0]) {
    return `${timeSplit[0]}:${timeSplit[1]}`;
  }
  return `${daySplit[0]}/${daySplit[1]}`;
};

const TimeFormatter = {
  formatTimeInMessage,
  formatTimeInChat,
};

export default TimeFormatter;
