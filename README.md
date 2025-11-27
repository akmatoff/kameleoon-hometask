# Test Assignment: Interactive Line Chart

## Features

- Select variations
- Select view mode/period
- Dark mode toggle
- Zoom in and zoom out
- Export PNG

## Libraries/Technologies

- Recharts (for charts)
- SASS (for styling)
- Motion (for animations)
- date-fns (for dates)
- React Tooltip (for tooltips)
- React Icons (for icons)
- html2canvas (for converting elements to images)

## Setup instructions

### With docker

```bash
docker build -t kameleoon-hometask . && docker run -d -p 3000:3000 --name kameleoon kameleoon
```

### Without docker

```bash
npm install
```

```bash
npm run build
```

```bash
npm start
```
