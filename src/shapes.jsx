const formatPoints = (points) => new Intl.NumberFormat("de-DE").format(points)

export const shapes = Object.freeze([
  {
    name: "seven",
    pointsTwo: 0,
    pointsThree: 0,
    shape: <img src="https://i.postimg.cc/YC75k66n/seven.png" className="shape" alt="seven shape" />
  },
  {
    name: "bar",
    pointsTwo: 20,
    pointsThree: 30,
    shape: <img src="https://i.postimg.cc/sXLmXrtf/bar.png" className="shape" alt="bar shape" />,
  },
  {
    name: "bell",
    pointsTwo: 0,
    pointsThree: formatPoints(50000),
    shape: <img src="https://i.postimg.cc/5yF3QrVB/bell.png" className="shape" alt="bell shape" />,
  },
  {
    name: "cherry",
    pointsTwo: formatPoints(5000),
    pointsThree: formatPoints(20000),
    shape: <img src="https://i.postimg.cc/vBTXbB2S/cherry.png" className="shape" alt="cherry shape" />,
  },
  {
    name: "grapes",
    pointsTwo: formatPoints(5000),
    pointsThree: formatPoints(20000),
    shape: <img src="https://i.postimg.cc/G9wjFjLZ/grapes.png" className="shape" alt="grapes shape" />
  },
  {
    name: "lemon",
    pointsTwo: formatPoints(1000),
    pointsThree: formatPoints(1500),
    shape: <img src="https://i.postimg.cc/wxy8kTxV/lemon.png" className="shape" alt="lemon shape" />,
  },
  {
    name: "watermenlon",
    pointsTwo: formatPoints(2000),
    pointsThree: formatPoints(3000),
    shape: <img src="https://i.postimg.cc/sfkFHdvR/watermelon.png" className="shape" alt=" watermelon shape" />,
  },
])
