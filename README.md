# 🌤️ Weather App

A responsive weather application built with HTML, CSS, and JavaScript that displays current weather information for any searched city using the WeatherAPI service.

## ✨ Features

- 🔍 Search for weather by city name
- 🌡️ Display current temperature in Celsius
- 💧 Display humidity percentage
- 💨 Display wind speed
- 🌥️ Dynamic weather icons based on current conditions
- ⚠️ Error handling for invalid city names
- 📱 Responsive design for mobile screens
- ⌨️ Search using either the search button or the Enter key

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Fetch API
- WeatherAPI

## 📸 Preview



## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

Replace `(https://github.com/Rawan-Arafa-DE/WeatherApp)` with your GitHub repository URL.

### 2. Get an API key

Create a free account at [WeatherAPI.com](https://www.weatherapi.com/) and obtain your API key.

### 3. Configure your API key

Open `Weather App.js` and replace the placeholder with your API key:

```javascript
const apiKey = 'YOUR_API_KEY';
```

Replace `YOUR_API_KEY` with your actual key.

**Important:** Do not commit your real API key to a public repository. This project uses a frontend API request for learning purposes, so a real key included in client-side JavaScript is visible to visitors. A backend proxy is recommended for a publicly deployed application.

### 4. Run the application

Open `index.html` using a local development server, such as the Live Server extension in Visual Studio Code.

## 📂 Project Structure

```text
Weather-App/
├── index.html
├── Weather App.css
├── Weather App.js
├── images/
│   ├── search.png
│   ├── humidity.png
│   └── wind.png
└── README.md
```

## 📚 What I Learned

- Fetching data from a third-party API
- Using `async` and `await` for asynchronous JavaScript
- Processing JSON responses
- Manipulating the DOM to display dynamic data
- Handling unsuccessful HTTP responses
- Implementing responsive layouts with CSS media queries
- Using JavaScript event listeners to handle user interactions

## 👩‍💻 Author

Created as a project to practice HTML, CSS, and JavaScript while learning frontend web development.

## 🔗 API

Weather data provided by [WeatherAPI.com](https://www.weatherapi.com/).
