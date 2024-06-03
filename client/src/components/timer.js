var startTime, endTime;

const Start = () => {
  startTime = new Date();
};

const Stop = () => {
  endTime = new Date();
  var timeDiff = endTime - startTime;
  return (timeDiff /= 1000);
};

export { Start, Stop };
