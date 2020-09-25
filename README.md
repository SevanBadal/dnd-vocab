## DnD 词表卡

## Getting Started

1. Clone repo
2. Install packages
```
npm install
```
3. Start a dev environment
```
npm run dev
```

## Data Overview
Data is loaded from a CSV (`clean_data.csv`) as an array of objects located in `src/`.  

The objects have the following structure:
``` javascript
const fooWord = {
  id: '2',
  其他译词: '',
  原词: 'Anubis',
  子类: '埃及神祇',
  源书: '玩家手册',
  词类: '背景词汇',
  译本译词: '阿努比斯',
  译注: '公正和死亡之神judment & death'
}
```

## Todo
- [ ] port CSV data to MongoDB
- [ ] express API design (user modal, word model, CRUD functionality, etc)
- [ ] overall design rehaul
- [ ] debounce on input field onChange callback

### Done ✓
- [x] filter English -> Chinese
- [x] filter Chinese -> English
- [x] load detail modal (display other attrs from word object) on click

<!-- CONTRIBUTING -->
## Contributing

Any contributions are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
