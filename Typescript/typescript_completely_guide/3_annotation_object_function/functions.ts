const add = (a: number, b: number): number => a + b;

const subtract: (a: number, b: number) => number = (a, b) => a - b;

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// dont have a return value
const logger = (message: string): void => console.log(message);

// never get the end of the function
const throwError = (message: string): never => {
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(forecast);

// ES2015
const logWeatherES2015 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
