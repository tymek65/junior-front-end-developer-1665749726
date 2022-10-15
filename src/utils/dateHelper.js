export const countTimeBetweenDates = (firstDate, secondDate) => {
  const timeDiff = (secondDate.getTime() - firstDate.getTime()) / 1000;
  const rtf = new Intl.RelativeTimeFormat('pl');
  const timePassed = [
    parseInt(timeDiff / (60 * 60 * 24 * 365)),
    parseInt(timeDiff / (60 * 60 * 24 * 30)),
    parseInt(timeDiff / (60 * 60 * 24 * 7)),
    parseInt(timeDiff / (60 * 60 * 24)),
    parseInt(timeDiff / (60 * 60)),
    parseInt(timeDiff / 60),
    parseInt(timeDiff),
  ];
  const time = ['year', 'month', 'weeks', 'days', 'hours', 'minutes', 'seconds'];
  for (let i = 0; i < timePassed.length; i++) {
    if (timePassed[i] > 0) return rtf.format(-timePassed[i], time[i]);
  }
};
