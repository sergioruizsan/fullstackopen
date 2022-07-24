# Countries

App that filters countries based on user input and shows country details such as the capital, flag, etc. It also shows the current weather.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Before starting up the App

This App works with two APIs: the [REST Countries](https://restcountries.com/) API and the [Open Weather Map](https://openweathermap.org/) API. For the latter you will to generate an API key.

Rename the `.env.sample` to `.env.local` and replace `YOUR_OPEN_WEATHER_API_KEY` with your OpenWeatherMap API key. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

If port 3000 is not available, a message will be prompt:

> ? Something is already running on port 3000. Probably:
  /usr/local/bin/node server.js (pid 12503)
  in /some/route

> Would you like to run the app on another port instead? › (Y/n)

Choose yes and the app will be open with the next available port, like in my case, which was 3001
