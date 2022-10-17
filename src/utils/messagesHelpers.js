const countTimeBetweenDates = (date) => {
  // there is a package called javascript-time-ago that does pretty much the same thing but I have decided to make it myself because I thought it might be seen as some kind of cheating
  const timeDiff = (new Date() - date.getTime()) / 1000;
  const rtf = new Intl.RelativeTimeFormat('en-US');
  const timePassed = [parseInt(timeDiff / (60 * 60 * 24 * 365)), parseInt(timeDiff / (60 * 60 * 24 * 30)), parseInt(timeDiff / (60 * 60 * 24 * 7)), parseInt(timeDiff / (60 * 60 * 24))];
  const time = ['year', 'month', 'weeks', 'days'];
  for (let i = 0; i < timePassed.length; i++) {
    if (timePassed[i] > 0) return rtf.format(-timePassed[i], time[i]);
  }
  return 'Today';
};

const convertToOrdinal = (number) => {
  const englishOrdinalRules = new Intl.PluralRules('en-US', { type: 'ordinal' });
  const suffixes = {
    one: 'st',
    two: 'nd',
    few: 'rd',
    other: 'th',
  };
  const category = englishOrdinalRules.select(number);
  const suffix = suffixes[category];
  return number + suffix;
};

export const truncateText = (text) => {
  const maxLength = 80;
  if (text.length > maxLength) return text.slice(0, maxLength) + '...';
  else return text;
};

export const getDateString = (dateString, style) => {
  const date = new Date(dateString);
  const timeAgo = countTimeBetweenDates(date);
  const day = style === 'short' ? date.getDate() : convertToOrdinal(date.getDate());
  const month = date.toLocaleString('en-US', { month: style });
  const time = date.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
  switch (style) {
    case 'long':
      return { date: `${timeAgo}, ${day} ${month}`, time };
    case 'short':
      return `${month} ${day}`;
    default:
      break;
  }
};
