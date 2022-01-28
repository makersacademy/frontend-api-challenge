// replicates twitter date formatting
const timeSince = (dateObject) => {  
  const monthFormat = { month: 'short' };

  let yearStartDate = new Date(new Date().getFullYear(), 0, 1);
  let yearStart = yearStartDate.getTime() / 1000
  let time = Math.floor(dateObject.getTime() / 1000)
  if (time < yearStart) {
    return `${dateObject.getDate()} ${dateObject.toLocaleDateString("en-US", monthFormat)} ${dateObject.getFullYear()}`;
    /* e.g. 10 Sep 2018
    is there an easier way? */
  }

  let now = (new Date).getTime() / 1000
  let oneDayAgo = now - 86400
  if (time < oneDayAgo) {
    return `${dateObject.getDate()} ${dateObject.toLocaleDateString("en-US", monthFormat)}`;
    /* e.g. 18 Jul
    is there an easier way? */
  }
  
  let secondsAgo = Math.floor(now) - time
  if (secondsAgo > 3600) {
    // > 1 hour ago
    return `${Math.floor(secondsAgo/3600)}h`
  } else if (secondsAgo > 60) {
    // > 1 minute ago
    return `${Math.floor(secondsAgo/60)}m`
  } else {
    // < 1 minute ago
    return `${secondsAgo}s`
  };
};

module.exports = timeSince;
