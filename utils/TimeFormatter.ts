/**
 * This function is responsible for formatting the time
 * of messages within the current chat.
 * @param time -> The time we want to format.
 * @returns The formatted time.
 */

const formatTimeInMessage = (time: string) => {
  const fullTimeSplit = time.split(" ");
  const timeSplit = fullTimeSplit[1].split(":");
  const daySplit = fullTimeSplit[0].split("/");
  const newTime = `${daySplit[0]}/${daySplit[1]} - ${timeSplit[0]}:${timeSplit[1]}`;
  return newTime;
};

/**
 * This function is responsible for formatting the time
 * of the last messages in all chats.
 * @param time -> The time we want to format.
 * @returns The formatted time.
 */

const formatTimeInChat = (time: string) => {
  const currentDay = new Date().toLocaleDateString("en-GB");
  const fullTimeSplit = time.split(" ");
  const timeSplit = fullTimeSplit[1].split(":");
  const daySplit = fullTimeSplit[0].split("/");
  if (currentDay === fullTimeSplit[0]) {
    return `${timeSplit[0]}:${timeSplit[1]}`;
  }
  return `${daySplit[0]}/${daySplit[1]}`;
};

/**
 * The object to be exported with the above-mentioned functions.
 */

const TimeFormatter = {
  formatTimeInMessage,
  formatTimeInChat,
};

export default TimeFormatter;
