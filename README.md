# Developer Work Task

Map and Venue Profile

## Prerequisites

- Node.js >= 20.0
- npm >= 9.8
- Expo CLI
- Android or iOS device/emulator for testing

## Dependencies

- `react-native-maps`
- `rn-sliding-up-panel`
- `expo`
- `react-redux`

## Setup

### Clone the repository

```bash
git clone https://github.com/xMonty/sociabilitydemo
```

### Navigate to the project directory

```bash
cd sociabilitydemo
```

### Install dependencies

Run the following command to install the required npm packages.

```bash
npm install
```

Or, if you are using yarn:

```bash
yarn install
```

### Run the application

To start the Expo development server:

```bash
expo start
```

This will open a new window in your web browser with a QR code. Scan this QR code using the Expo Go app on your Android or iOS device.

## Features

- Display Google Maps with a markers loaded from https://my-json-server.typicode.com/xmonty/sociabilitydemo/markers
- A Sliding Up Panel that shows more information about a selected marker
- Accessibility features

## Usage

1. Open the app and you'll see a map focused on London.
2. Tap on the marker to bring up the Sliding Up Panel from the bottom.
3. The panel contains more information about the marker.


## Google Maps Key
Add your google maps keys to 
app.json under -> googleMapsApiKey