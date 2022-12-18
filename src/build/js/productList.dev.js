"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Content = {
  lion: {
    id: '001',
    slug: 'lion',
    name: 'Лев',
    imageSrc: 'lion.jpg',
    description: "",
    category: ['line']
  },
  wine_vs_problems: {
    id: '002',
    slug: 'wine_vs_problems',
    name: 'Wine vs Problems',
    imageSrc: 'wine_vs_problems.jpg',
    description: "Hello wine. Goodbye problems",
    category: ['text']
  },
  mumi_2: {
    id: '003',
    slug: 'mumi_2',
    name: 'Печальный мумитроль',
    imageSrc: 'mumi_2.jpg',
    description: "\u0418\u043D\u043E\u0433\u0434\u0430 \u0443\u0436\u0430\u0441\u043D\u043E \u0433\u0440\u0443\u0441\u0442\u043D\u043E \u0431\u044B\u0442\u044C \u0441\u0430\u043C\u0438\u043C \u0441\u043E\u0431\u043E\u0439",
    category: ['line', 'text', 'character']
  },
  esenin: {
    id: '004',
    slug: 'esenin',
    name: 'Есенин',
    imageSrc: 'esenin.jpg',
    description: "\u0415\u0441\u043B\u0438 \u0442\u044B \u043F\u044C\u0435\u0448\u044C \u043A\u0430\u043A \u0415\u0441\u0435\u043D\u0438\u043D, \u0442\u043E \u0433\u0434\u0435 \u0442\u0432\u043E\u0438 \u0441\u0442\u0438\u0445\u0438?",
    category: ['line', 'text', 'portrait']
  },
  hand_4: {
    id: '005',
    slug: 'hand_4',
    name: 'Рука',
    imageSrc: 'hand_4.jpg',
    description: "",
    category: ['line']
  },
  rabbit: {
    id: '006',
    slug: 'rabbit',
    name: 'Кролик',
    imageSrc: 'rabbit.jpg',
    description: "",
    category: ['line']
  },
  birthday: {
    id: '007',
    slug: 'birthday',
    name: 'С 26 днем рождения',
    imageSrc: 'birthday.jpg',
    description: "\u041F\u0440\u0438\u043C\u0438\u0442\u0435 \u043C\u043E\u0438 \u043F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F",
    category: ['line']
  },
  petitprince: {
    id: '008',
    slug: 'petitprince',
    name: 'Маленький приц',
    imageSrc: 'petitprince.jpg',
    description: "\u0412\u0441\u0435 \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u0435 \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u0431\u044B\u043B\u0438 \u0434\u0435\u0442\u044C\u043C\u0438. \u0422\u043E\u043B\u044C\u043A\u043E \u043C\u0430\u043B\u043E \u043A\u0442\u043E \u0438\u0437 \u043D\u0438\u0445 \u043E\u0431 \u044D\u0442\u043E\u043C \u043F\u043E\u043C\u043D\u0438\u0442",
    category: ['line', 'text']
  },
  fingerprint: {
    id: '009',
    slug: 'fingerprint',
    name: 'Пальчики',
    imageSrc: 'fingerprint.jpg',
    description: "",
    category: ['line']
  },
  matiss: {
    id: '010',
    slug: 'matiss',
    name: 'Танец',
    imageSrc: 'matiss.jpg',
    description: "",
    category: ['line']
  },
  bear: {
    id: '011',
    slug: 'bear',
    name: 'Медведь',
    imageSrc: 'bear.jpg',
    description: "",
    category: ['line']
  },
  heart_notes: {
    id: '012',
    slug: 'heart_notes',
    name: 'Ноты на сердце',
    imageSrc: 'heart_notes.jpg',
    description: "",
    category: ['line']
  },
  guitar_dark: {
    id: '013',
    slug: 'guitar_dark',
    name: 'Укулелист',
    imageSrc: 'guitar_dark.jpg',
    description: "",
    category: ['line']
  },
  guitar: {
    id: '014',
    slug: 'guitar',
    name: 'Моменты счастья',
    imageSrc: 'guitar.jpg',
    description: "",
    category: ['line']
  },
  paperplane: {
    id: '015',
    slug: 'paperplane',
    name: 'Самолетик',
    imageSrc: 'paperplane.jpg',
    description: "",
    category: ['line']
  },
  drama_queen: {
    id: '016',
    slug: 'drama_queen',
    name: 'Королева драмы',
    imageSrc: 'drama_queen.jpg',
    description: "\u043F\u0430\u0440\u043D\u0430\u044F \u0432\u044B\u0448\u0438\u0432\u043A\u0430",
    category: ['line']
  },
  mumi: {
    id: '017',
    slug: 'mumi',
    name: 'Мумитроль',
    imageSrc: 'mumi.jpg',
    description: "",
    category: ['line', 'character']
  },
  piper: {
    id: '018',
    slug: 'piper',
    name: 'Дудочник',
    imageSrc: 'piper.jpg',
    description: "",
    category: ['line']
  },
  hands_birds: {
    id: '019',
    slug: 'hands_birds',
    name: 'Пальцы-провода',
    imageSrc: 'hands_birds.jpg',
    description: "",
    category: ['line']
  },
  joy_division: {
    id: '020',
    slug: 'joy_division',
    name: 'Joy Division-провода',
    imageSrc: 'joy_division.jpg',
    description: "",
    category: ['line']
  },
  youth: {
    id: '021',
    slug: 'youth',
    name: 'Молодость жива',
    imageSrc: 'youth.jpg',
    description: "",
    category: ['line']
  },
  heart_glass: {
    id: '022',
    slug: 'heart_glass',
    name: 'Сердце и бокал',
    imageSrc: 'heart_glass.jpg',
    description: "",
    category: ['line']
  },
  brodskiy: {
    id: '023',
    slug: 'brodskiy',
    name: 'Бродский',
    imageSrc: 'brodskiy.jpg',
    description: "\u042F \u0441\u0438\u0436\u0443 \u0443 \u043E\u043A\u043D\u0430\n    \u0417\u0430 \u043E\u043A\u043D\u043E\u043C \u043E\u0441\u0438\u043D\u0430.\n    \u042F \u043B\u044E\u0431\u0438\u043B \u043D\u0435 \u043C\u043D\u043E\u0433\u0438\u0445,\n    \u041E\u0434\u043D\u0430\u043A\u043E - \u0441\u0438\u043B\u044C\u043D\u043E",
    category: ['line', 'text']
  },
  introvert: {
    id: '024',
    slug: 'introvert',
    name: 'Интроверсия',
    imageSrc: 'introvert.jpg',
    description: "\u041C\u043D\u0435 \u043D\u0435 \u0433\u0440\u0443\u0441\u0442\u043D\u043E. \u042F \u043F\u0440\u043E\u0441\u0442\u043E \u043D\u0435 \u043B\u044E\u0431\u043B\u044E \u0440\u0430\u0437\u0433\u043E\u0432\u0430\u0440\u0438\u0432\u0430\u0442\u044C. \u0421\u043F\u0430\u0441\u0438\u0431\u043E",
    category: ['line', 'text']
  },
  voice: {
    id: '025',
    slug: 'voice',
    name: 'Голосовое',
    imageSrc: 'voice.jpg',
    description: "",
    category: ['line']
  },
  whale: {
    id: '026',
    slug: 'whale',
    name: 'Кит',
    imageSrc: 'whale.jpg',
    description: "I love you thiiiiiiiiiis much",
    category: ['line', 'text']
  },
  not_an_art: {
    id: '027',
    slug: 'not_an_art',
    name: 'Само ты не искусство',
    imageSrc: 'not_an_art.jpg',
    description: "\uD83D\uDD95",
    category: ['line', 'text']
  },
  god_is_an_artist: {
    id: '028',
    slug: 'god_is_an_artist',
    name: 'Бог - художник',
    imageSrc: 'god_is_an_artist.jpg',
    description: "\u0411\u043E\u0433 - \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A, \u0411\u043E\u0433 - \u043F\u043E\u044D\u0442. \u042F - \u0435\u0433\u043E \u0430\u0432\u0442\u043E\u043F\u043E\u0440\u0442\u0440\u0435\u0442",
    category: ['line']
  },
  couple: {
    id: '029',
    slug: 'couple',
    name: 'Парочка',
    imageSrc: 'couple.jpg',
    description: "So cute",
    category: ['line']
  },
  thrasher: {
    id: '030',
    slug: 'thrasher',
    name: 'Thrasher',
    imageSrc: 'thrasher.jpg',
    description: "",
    category: ['text']
  },
  dog_man: {
    id: '031',
    slug: 'dog_man',
    name: 'Собакен',
    imageSrc: 'dog_man.jpg',
    description: "\u0412\u0435\u0441\u043D\u0430 \u043F\u0440\u0438\u0434\u0435\u0442 \u0441 \u0440\u0430\u0441\u0441\u0432\u0435\u0442\u043E\u043C, \u0438 \u0437\u0430\u0446\u0432\u0435\u0442\u0435\u0442 \u0432 \u0433\u0440\u0443\u0434\u0438. \u041C\u043E\u0439 \u043F\u0435\u0441 \u0441\u0442\u0430\u043B \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u043E\u043C. \u0410 \u044F \u0435\u0449\u0435 \u0432 \u043F\u0443\u0442\u0438",
    category: ['text']
  },
  white_dog: {
    id: '032',
    slug: 'white_dog',
    name: 'Белый собакен',
    imageSrc: 'white_dog.jpg',
    description: "",
    category: ['animals']
  },
  autist: {
    id: '033',
    slug: 'autist',
    name: 'Артист-аутист',
    imageSrc: 'autist.jpg',
    description: "",
    category: ['text']
  },
  lemon: {
    id: '034',
    slug: 'lemon',
    name: 'Лимон',
    imageSrc: 'lemon.jpg',
    description: "",
    category: ['text', 'character']
  },
  pole: {
    id: '035',
    slug: 'pole',
    name: 'Поле чудес',
    imageSrc: 'pole.jpg',
    description: "",
    category: ['text']
  },
  family: {
    id: '036',
    slug: 'family',
    name: 'Family',
    imageSrc: 'family.jpg',
    description: "",
    category: ['text', 'flowers']
  },
  listen: {
    id: '037',
    slug: 'listen',
    name: 'Listen to your heart',
    imageSrc: 'listen.jpg',
    description: "",
    category: ['text', 'flowers']
  },
  one_more_esenin: {
    id: '038',
    slug: 'one_more_esenin',
    name: 'Еще немного Есенина',
    imageSrc: 'one_more_esenin.jpg',
    description: "\u0415\u0441\u043B\u0438 \u0431 \u0437\u043D\u0430\u043B\u0430 \u0442\u044B \u0441\u0435\u0440\u0434\u0446\u0435\u043C \u0443\u043F\u043E\u0440\u043D\u044B\u043C, \u043A\u0430\u043A \u0443\u043C\u0435\u0435\u0442 \u043B\u044E\u0431\u0438\u0442\u044C \u0445\u0443\u043B\u0438\u0433\u0430\u043D, \u043A\u0430\u043A \u0443\u043C\u0435\u0435\u0442 \u043E\u043D \u0431\u044B\u0442\u044C \u043F\u043E\u043A\u043E\u0440\u043D\u044B\u043C",
    category: ['text']
  },
  young: {
    id: '039',
    slug: 'young',
    name: 'Forever Yoing ❤️',
    imageSrc: 'young.jpg',
    description: "",
    category: ['text']
  },
  friends: {
    id: '040',
    slug: 'friends',
    name: 'Friends',
    imageSrc: 'friends.jpg',
    description: "",
    category: ['text', 'flowers']
  },
  murmur: {
    id: '041',
    slug: 'murmur',
    name: 'Мур-Мур',
    imageSrc: 'murmur.jpg',
    description: "",
    category: ['text', 'flowers']
  },
  spring: {
    id: '042',
    slug: 'spring',
    name: 'Весна',
    imageSrc: 'spring.jpg',
    description: "",
    category: ['text']
  },
  kids_1: {
    id: '043',
    slug: 'kids_1',
    name: 'Детский рисунок',
    imageSrc: 'kids_1.jpg',
    description: "",
    category: ['kids']
  },
  kids_2: {
    id: '044',
    slug: 'kids_2',
    name: 'Детский рисунок',
    imageSrc: 'kids_2.jpg',
    description: "",
    category: ['kids']
  },
  kids_3: {
    id: '045',
    slug: 'kids_3',
    name: 'Детский рисунок',
    imageSrc: 'kids_3.jpg',
    description: "",
    category: ['kids']
  },
  kids_4: {
    id: '046',
    slug: 'kids_4',
    name: 'Детский рисунок',
    imageSrc: 'kids_4.jpg',
    description: "",
    category: ['kids']
  },
  kids_5: {
    id: '047',
    slug: 'kids_5',
    name: 'Детский рисунок',
    imageSrc: 'kids_5.jpg',
    description: "",
    category: ['kids']
  },
  kids_6: {
    id: '048',
    slug: 'kids_6',
    name: 'Детский рисунок',
    imageSrc: 'kids_6.jpg',
    description: "",
    category: ['kids']
  },
  kids_7: {
    id: '049',
    slug: 'kids_7',
    name: 'Детский рисунок',
    imageSrc: 'kids_7.jpg',
    description: "",
    category: ['kids']
  },
  kids_8: {
    id: '050',
    slug: 'kids_8',
    name: 'Детский рисунок',
    imageSrc: 'kids_8.jpg',
    description: "",
    category: ['kids']
  },
  kids_9: {
    id: '051',
    slug: 'kids_9',
    name: 'Детский рисунок',
    imageSrc: 'kids_9.jpg',
    description: "",
    category: ['kids']
  },
  kids_10: {
    id: '052',
    slug: 'kids_10',
    name: 'Детский рисунок',
    imageSrc: 'kids_10.jpg',
    description: "",
    category: ['kids']
  },
  flower_heart: {
    id: '053',
    slug: 'flower_heart',
    name: 'Сердце-цветочки',
    imageSrc: 'flower_heart.jpg',
    description: "",
    category: ['flowers']
  },
  kids_12: {
    id: '054',
    slug: 'kids_12',
    name: 'Детский рисунок',
    imageSrc: 'kids_12.jpg',
    description: "",
    category: ['kids']
  },
  vshvk: {
    id: '055',
    slug: 'vshvk',
    name: 'VSHVK',
    imageSrc: 'vshvk.jpg',
    description: "",
    category: ['flowers']
  },
  lil_flowers: {
    id: '056',
    slug: 'lil_flowers',
    name: 'Цветочки',
    imageSrc: 'lil_flowers.jpg',
    description: "",
    category: ['flowers']
  },
  infinity_heart: {
    id: '057',
    slug: 'infinity_heart',
    name: 'Сердце-бесконечность',
    imageSrc: 'infinity_heart.jpg',
    description: "",
    category: ['flowers']
  },
  kids_11: {
    id: '058',
    slug: 'kids_11',
    name: 'Детский рисунок',
    imageSrc: 'kids_11.jpg',
    description: "",
    category: ['kids']
  },
  lungs: {
    id: '059',
    slug: 'lungs',
    name: 'Легкие',
    imageSrc: 'lungs.jpg',
    description: "",
    category: ['flowers']
  },
  flower_heart_2: {
    id: '060',
    slug: 'flower_heart_2',
    name: 'Сердце-цветочки',
    imageSrc: 'flower_heart_2.jpg',
    description: "",
    category: ['flowers']
  },
  guinness_dog: {
    id: '061',
    slug: 'guinness_dog',
    name: 'Гиннесс',
    imageSrc: 'guinness_dog.jpg',
    description: "\u042D\u0442\u043E \u043C\u043E\u044F \u0441\u043E\u0431\u0430\u043A\u0430 \u2764\uFE0F",
    category: ['flowers']
  },
  arnold: {
    id: '062',
    slug: 'arnold',
    name: 'Эй, Арнольд!',
    imageSrc: 'arnold.jpg',
    description: "",
    category: ['character']
  },
  duduka: {
    id: '063',
    slug: 'duduka',
    name: 'Дюдюка',
    imageSrc: 'duduka.jpg',
    description: "",
    category: ['character']
  },
  gav: {
    id: '064',
    slug: 'gav',
    name: 'Гав',
    imageSrc: 'gav.jpg',
    description: "",
    category: ['character']
  },
  vader: {
    id: '065',
    slug: 'vader',
    name: 'Дарт Вейдер',
    imageSrc: 'vader.jpg',
    description: "\u041D\u0430 \u0443\u043D\u0438\u0442\u0430\u0437\u0435",
    category: ['character']
  },
  vader_2: {
    id: '066',
    slug: 'vader_2',
    name: 'Дарт Вейдер',
    imageSrc: 'vader_2.jpg',
    description: "",
    category: ['character']
  },
  arnold_2: {
    id: '067',
    slug: 'arnold_2',
    name: 'Арнольд с черепахой',
    imageSrc: 'arnold_2.jpg',
    description: "",
    category: ['character']
  },
  soyuz: {
    id: '068',
    slug: 'soyuz',
    name: 'Советские мультфильмы',
    imageSrc: 'soyuz.jpg',
    description: "",
    category: ['character']
  },
  lilo: {
    id: '069',
    slug: 'lilo',
    name: 'Лило',
    imageSrc: 'lilo.jpg',
    description: "",
    category: ['character']
  },
  princes: {
    id: '070',
    slug: 'princes',
    name: 'Принцесса',
    imageSrc: 'princes.jpg',
    description: "",
    category: ['character']
  },
  cookie: {
    id: '071',
    slug: 'cookie',
    name: 'Cookie Monster',
    imageSrc: 'cookie.jpg',
    description: "",
    category: ['character']
  },
  esenin_portrait: {
    id: '072',
    slug: 'esenin_portrait',
    name: 'Есенин',
    imageSrc: 'esenin_portrait.jpg',
    description: "",
    category: ['portrait']
  },
  eye: {
    id: '073',
    slug: 'eye',
    name: 'Глаз',
    imageSrc: 'eye.jpg',
    description: "",
    category: ['portrait']
  },
  mouth: {
    id: '074',
    slug: 'mouth',
    name: 'Рот',
    imageSrc: 'mouth.jpg',
    description: "",
    category: ['portrait']
  },
  michel: {
    id: '075',
    slug: 'michel',
    name: 'Майкл из Офиса',
    imageSrc: 'michel.jpg',
    description: "",
    category: ['portrait']
  },
  dwight: {
    id: '076',
    slug: 'dwight',
    name: 'Дуайт из Офиса',
    imageSrc: 'dwight.jpg',
    description: "",
    category: ['portrait']
  },
  visotskiy: {
    id: '077',
    slug: 'visotskiy',
    name: 'Высоцкий',
    imageSrc: 'visotskiy.jpg',
    description: "",
    category: ['portrait']
  },
  bagrov: {
    id: '078',
    slug: 'bagrov',
    name: 'Багров',
    imageSrc: 'bagrov.jpg',
    description: "",
    category: ['portrait']
  },
  marley: {
    id: '079',
    slug: 'marley',
    name: 'Боб Марли',
    imageSrc: 'marley.jpg',
    description: "",
    category: ['portrait']
  },
  tails: {
    id: '080',
    slug: 'tails',
    name: 'Мои хвосты',
    imageSrc: 'tails.jpg',
    description: "\u043B\u0443\u0447\u0448\u0435, \u0447\u0435\u043C \u0442\u044B",
    category: ['animals']
  },
  cats: {
    id: '081',
    slug: 'cats',
    name: 'Котики',
    imageSrc: 'cats.jpg',
    description: "",
    category: ['animals']
  },
  dog_sunglasses: {
    id: '082',
    slug: 'dog_sunglasses',
    name: 'Собака в очках',
    imageSrc: 'dog_sunglasses.jpg',
    description: "",
    category: ['animals']
  },
  panther: {
    id: '083',
    slug: 'panther',
    name: 'Пантера',
    imageSrc: 'panther.jpg',
    description: "",
    category: ['animals']
  },
  dog_balloon: {
    id: '084',
    slug: 'dog_balloon',
    name: 'Собачка с воздушным шаром',
    imageSrc: 'dog_balloon.jpg',
    description: "",
    category: ['animals']
  },
  biggle: {
    id: '085',
    slug: 'biggle',
    name: 'Бигль',
    imageSrc: 'biggle.jpg',
    description: "",
    category: ['animals']
  },
  dive: {
    id: '086',
    slug: 'dive',
    name: 'Тону',
    imageSrc: 'dive.jpg',
    description: "",
    category: ['line']
  }
};
var _default = Content;
exports["default"] = _default;