const performances = [
  {
    id: 1,
    title: 'Гамлет',
    genre: 'Трагедія',
    time: '19:00',
    duration: 150,
    language: 'Українська',
    dates: ['2025-06-01', '2025-06-10', '2025-06-20'],
    description: 'Іконічна трагедія Вільяма Шекспіра про принца Данії.',
    image: '/images/hamlet.jpg'
  },
  {
    id: 2,
    title: 'Знедолені',
    genre: 'Мюзикл',
    time: '18:30',
    duration: 180,
    language: 'Французька',
    dates: ['2025-06-05', '2025-06-12', '2025-06-26'],
    description: 'Епічна музична адаптація роману Віктора Гюго.',
    image: '/images/les-miserables.jpg'
  },
  {
    id: 3,
    title: 'Привид опери',
    genre: 'Мюзикл',
    time: '20:00',
    duration: 160,
    language: 'Англійська',
    dates: ['2025-06-03', '2025-06-17', '2025-06-29'],
    description: 'Містична історія кохання в Паризькій опері.',
    image: '/images/phantom.jpg'
  },
  {
    id: 4,
    title: 'Смерть комівояжера',
    genre: 'Драма',
    time: '19:30',
    duration: 135,
    language: 'Англійська',
    dates: ['2025-06-06', '2025-06-13', '2025-06-20'],
    description: 'Трагічна історія американської мрії.',
    image: '/images/salesman.jpg'
  },
  {
    id: 5,
    title: 'Трамвай "Бажання"',
    genre: 'Драма',
    time: '19:00',
    duration: 140,
    language: 'Українська',
    dates: ['2025-06-08', '2025-06-15', '2025-06-22'],
    description: 'Психологічна драма про ілюзії, втрати та пристрасть.',
    image: '/images/streetcar.jpg'
  },
  {
    id: 6,
    title: 'Як важливо бути серйозним',
    genre: 'Комедія',
    time: '18:00',
    duration: 120,
    language: 'Англійська',
    dates: ['2025-06-07', '2025-06-14', '2025-06-21'],
    description: 'Дотепна сатира Оскара Вайлда.',
    image: '/images/earnest.jpg'
  },
  {
    id: 7,
    title: 'Король Лір',
    genre: 'Трагедія',
    time: '20:00',
    duration: 160,
    language: 'Українська',
    dates: ['2025-06-09', '2025-06-18', '2025-06-27'],
    description: 'Трагедія про владу, зраду і батьківську любов.',
    image: '/images/lear.jpg'
  },
  {
    id: 8,
    title: 'Чекаючи на Годо',
    genre: 'Театр абсурду',
    time: '17:30',
    duration: 110,
    language: 'Французька',
    dates: ['2025-06-11', '2025-06-16', '2025-06-23'],
    description: 'Філософська п’єса про сенс життя.',
    image: '/images/godot.jpg'
  },
  {
    id: 9,
    title: 'Отелло',
    genre: 'Трагедія',
    time: '19:45',
    duration: 155,
    language: 'Англійська',
    dates: ['2025-06-04', '2025-06-19', '2025-06-28'],
    description: 'Трагедія про ревнощі та маніпуляції.',
    image: '/images/othello.jpg'
  },
  {
    id: 10,
    title: 'Чайка',
    genre: 'Драма',
    time: '18:15',
    duration: 130,
    language: 'Російська',
    dates: ['2025-06-02', '2025-06-15', '2025-06-30'],
    description: 'П’єса про мистецтво та розчарування.',
    image: '/images/seagull.jpg'
  },
 {
  id: 11,
  title: 'Макбет',
  genre: 'Трагедія',
  time: '19:00',
  duration: 145,
  language: 'Англійська',
  dates: ['2025-06-03', '2025-06-12', '2025-06-24'],
  description: 'Темна історія амбіцій та зради у Шотландії.',
  image: '/images/macbeth.jpg'
},
{
  id: 12,
  title: 'Ромео і Джульєтта',
  genre: 'Трагедія',
  time: '17:45',
  duration: 140,
  language: 'Італійська',
  dates: ['2025-06-06', '2025-06-17', '2025-06-25'],
  description: 'Безсмертна історія кохання з трагічним фіналом.',
  image: '/images/romeo.jpg'
},
{
  id: 13,
  title: 'Фігаро',
  genre: 'Комедія',
  time: '18:30',
  duration: 125,
  language: 'Французька',
  dates: ['2025-06-05', '2025-06-14', '2025-06-26'],
  description: 'Весела історія про хитрого слугу, який переграє шляхту.',
  image: '/images/figaro.jpg'
},
{
  id: 14,
  title: 'Медея',
  genre: 'Трагедія',
  time: '20:15',
  duration: 135,
  language: 'Грецька',
  dates: ['2025-06-08', '2025-06-20', '2025-06-29'],
  description: 'Давньогрецька трагедія про кохання і помсту.',
  image: '/images/medea.jpg'
},
{
  id: 15,
  title: 'Котка на розпеченому даху',
  genre: 'Драма',
  time: '19:30',
  duration: 130,
  language: 'Англійська',
  dates: ['2025-06-07', '2025-06-16', '2025-06-30'],
  description: 'Напружена драма про родинні та особисті конфлікти.',
  image: '/images/cat.jpg'
},
{
  id: 16,
  title: 'Слуга двох панів',
  genre: 'Комедія',
  time: '17:00',
  duration: 115,
  language: 'Італійська',
  dates: ['2025-06-04', '2025-06-13', '2025-06-23'],
  description: 'Класична італійська комедія положень.',
  image: '/images/servant.jpg'
}

];


export default performances;
