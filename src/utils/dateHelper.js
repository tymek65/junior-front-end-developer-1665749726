export const coundTimeBetweenDates = (firstDate, secondDate) => {
  const timeDiff = (secondDate.getTime() - firstDate.getTime()) / 100;
  const rtf = new Intl.RelativeTimeFormat('pl');
  const minutes = parseInt(timeDiff / 60);
  const hours = parseInt(timeDiff / (60 * 60));
  const days = parseInt(timeDiff / (60 * 60 * 24));
  const weeks = parseInt(timeDiff / (60 * 60 * 24 * 7));
  const months = parseInt(timeDiff / (60 * 60 * 24 * 30));
  const years = parseInt(timeDiff / (60 * 60 * 24 * 365));
  console.log(years || months || weeks || days || hours || minutes || timeDiff);
  //   console.log(rtf.format(-12, 'day'));
};
