// ===== TAJIKEXPLORER - MAIN APP =====

const OPENROUTER_KEY = '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';
const GMAPS_KEY = 'AIzaSyDx3R6YwYrdCP-KDIUFUcsC1vb7FhqBzQQ';

// ===== TRANSLATIONS =====
const TRANSLATIONS = {
  ru: {
    nav_map: 'Карта', nav_ai: 'AI Гид', nav_route: 'Маршрут', nav_search: 'Поиск',
    settings_title: '⚙️ Настройки', settings_lang: '🌐 Язык', settings_filter: '🏷️ Фильтр мест',
    settings_geo: 'Определить мою геолокацию', settings_nearby: 'Ближайшие места',
    map_title: 'Добро пожаловать в Таджикистан', map_subtitle: 'Нажмите на любое место на карте',
    cat_restaurant: 'Рестораны', cat_hotel: 'Отели', cat_shop: 'Магазины',
    cat_park: 'Парки', cat_school: 'Школы', cat_hospital: 'Больницы',
    cat_supermarket: 'Супермаркеты', cat_attraction: 'Достопримечательности',
    all: 'Всё', ai_title: 'AI Гид по Таджикистану', ai_status: 'Онлайн — готов помочь',
    ai_greeting: 'Салом! Я ваш AI гид по Таджикистану. Могу посоветовать рестораны, отели, достопримечательности и помочь спланировать ваш визит. О чём хотите узнать?',
    route_title: 'Построить маршрут', route_from: '📍 Откуда', route_to: '🏁 Куда',
    route_my_loc: 'Моя позиция', mode_walk: 'Пешком', mode_car: 'Машина',
    mode_bike: 'Велосипед', mode_transit: 'Транспорт', route_build: 'Построить маршрут',
    search_title: 'Поиск мест', modal_prices: '💰 Цены', modal_reviews: '⭐ Отзывы',
    modal_route: 'Маршрут', modal_share: 'Поделиться', nearby_title: '📍 Ближайшие места',
  },
  tg: {
    nav_map: 'Харита', nav_ai: 'AI Роҳнамо', nav_route: 'Маршрут', nav_search: 'Ҷустуҷӯ',
    settings_title: '⚙️ Танзимот', settings_lang: '🌐 Забон', settings_filter: '🏷️ Филтр',
    settings_geo: 'Мавқеи маро муайян кун', settings_nearby: 'Ҷойҳои наздик',
    map_title: 'Хуш омадед ба Тоҷикистон', map_subtitle: 'Ба ягон ҷой дар харита пахш кунед',
    cat_restaurant: 'Тарабхонаҳо', cat_hotel: 'Меҳмонхонаҳо', cat_shop: 'Дӯконҳо',
    cat_park: 'Боғҳо', cat_school: 'Мактабҳо', cat_hospital: 'Беморхонаҳо',
    cat_supermarket: 'Супермаркетҳо', cat_attraction: 'Ҷойҳои ҷолиб',
    all: 'Ҳама', ai_title: 'AI Роҳнамо оид ба Тоҷикистон', ai_status: 'Онлайн',
    ai_greeting: 'Салом! Ман роҳнамои AI-и Шумо оид ба Тоҷикистон ҳастам. Чӣ мехоҳед донед?',
    route_title: 'Сохтани маршрут', route_from: '📍 Аз куҷо', route_to: '🏁 Ба куҷо',
    route_my_loc: 'Мавқеи ман', mode_walk: 'Пиёда', mode_car: 'Мошин',
    mode_bike: 'Велосипед', mode_transit: 'Нақлиёт', route_build: 'Маршрутро созед',
    search_title: 'Ҷустуҷӯи ҷойҳо', modal_prices: '💰 Нархҳо', modal_reviews: '⭐ Шарҳҳо',
    modal_route: 'Маршрут', modal_share: 'Мубодила', nearby_title: '📍 Ҷойҳои наздик',
  },
  en: {
    nav_map: 'Map', nav_ai: 'AI Guide', nav_route: 'Route', nav_search: 'Search',
    settings_title: '⚙️ Settings', settings_lang: '🌐 Language', settings_filter: '🏷️ Filter places',
    settings_geo: 'Find my location', settings_nearby: 'Nearby places',
    map_title: 'Welcome to Tajikistan', map_subtitle: 'Click on any place on the map',
    cat_restaurant: 'Restaurants', cat_hotel: 'Hotels', cat_shop: 'Shops',
    cat_park: 'Parks', cat_school: 'Schools', cat_hospital: 'Hospitals',
    cat_supermarket: 'Supermarkets', cat_attraction: 'Attractions',
    all: 'All', ai_title: 'AI Guide to Tajikistan', ai_status: 'Online — ready to help',
    ai_greeting: 'Hello! I\'m your AI guide to Tajikistan. I can recommend restaurants, hotels, attractions and help plan your visit. What would you like to know?',
    route_title: 'Build Route', route_from: '📍 From', route_to: '🏁 To',
    route_my_loc: 'My location', mode_walk: 'Walking', mode_car: 'Car',
    mode_bike: 'Bicycle', mode_transit: 'Transit', route_build: 'Build Route',
    search_title: 'Search Places', modal_prices: '💰 Prices', modal_reviews: '⭐ Reviews',
    modal_route: 'Route', modal_share: 'Share', nearby_title: '📍 Nearby Places',
  },
  zh: {
    nav_map: '地图', nav_ai: 'AI导游', nav_route: '路线', nav_search: '搜索',
    settings_title: '⚙️ 设置', settings_lang: '🌐 语言', settings_filter: '🏷️ 筛选地点',
    settings_geo: '定位我的位置', settings_nearby: '附近地点',
    map_title: '欢迎来到塔吉克斯坦', map_subtitle: '点击地图上的任何地方',
    cat_restaurant: '餐厅', cat_hotel: '酒店', cat_shop: '商店',
    cat_park: '公园', cat_school: '学校', cat_hospital: '医院',
    cat_supermarket: '超市', cat_attraction: '景点',
    all: '全部', ai_title: '塔吉克斯坦AI导游', ai_status: '在线 — 准备就绪',
    ai_greeting: '你好！我是您的塔吉克斯坦AI导游。我可以推荐餐厅、酒店、景点，帮助您规划旅行。您想了解什么？',
    route_title: '规划路线', route_from: '📍 出发地', route_to: '🏁 目的地',
    route_my_loc: '我的位置', mode_walk: '步行', mode_car: '驾车',
    mode_bike: '骑行', mode_transit: '公共交通', route_build: '规划路线',
    search_title: '搜索地点', modal_prices: '💰 价格', modal_reviews: '⭐ 评价',
    modal_route: '路线', modal_share: '分享', nearby_title: '📍 附近地点',
  },
  ar: {
    nav_map: 'الخريطة', nav_ai: 'دليل AI', nav_route: 'المسار', nav_search: 'بحث',
    settings_title: '⚙️ الإعدادات', settings_lang: '🌐 اللغة', settings_filter: '🏷️ تصفية الأماكن',
    settings_geo: 'تحديد موقعي', settings_nearby: 'الأماكن القريبة',
    map_title: 'مرحباً بكم في طاجيكستان', map_subtitle: 'انقر على أي مكان في الخريطة',
    cat_restaurant: 'مطاعم', cat_hotel: 'فنادق', cat_shop: 'محلات',
    cat_park: 'حدائق', cat_school: 'مدارس', cat_hospital: 'مستشفيات',
    cat_supermarket: 'سوبرماركت', cat_attraction: 'معالم سياحية',
    all: 'الكل', ai_title: 'دليل AI لطاجيكستان', ai_status: 'متصل — جاهز للمساعدة',
    ai_greeting: 'مرحباً! أنا دليلك الذكي إلى طاجيكستان. يمكنني توصية بمطاعم وفنادق ومعالم سياحية. ماذا تريد أن تعرف؟',
    route_title: 'بناء مسار', route_from: '📍 من', route_to: '🏁 إلى',
    route_my_loc: 'موقعي', mode_walk: 'مشياً', mode_car: 'سيارة',
    mode_bike: 'دراجة', mode_transit: 'مواصلات', route_build: 'بناء مسار',
    search_title: 'البحث عن أماكن', modal_prices: '💰 الأسعار', modal_reviews: '⭐ التقييمات',
    modal_route: 'مسار', modal_share: 'مشاركة', nearby_title: '📍 الأماكن القريبة',
  },
  de: {
    nav_map: 'Karte', nav_ai: 'KI-Guide', nav_route: 'Route', nav_search: 'Suche',
    settings_title: '⚙️ Einstellungen', settings_lang: '🌐 Sprache', settings_filter: '🏷️ Orte filtern',
    settings_geo: 'Meinen Standort finden', settings_nearby: 'Nahe gelegene Orte',
    map_title: 'Willkommen in Tadschikistan', map_subtitle: 'Klicken Sie auf einen Ort auf der Karte',
    cat_restaurant: 'Restaurants', cat_hotel: 'Hotels', cat_shop: 'Geschäfte',
    cat_park: 'Parks', cat_school: 'Schulen', cat_hospital: 'Krankenhäuser',
    cat_supermarket: 'Supermärkte', cat_attraction: 'Sehenswürdigkeiten',
    all: 'Alle', ai_title: 'KI-Reiseführer Tadschikistan', ai_status: 'Online — bereit',
    ai_greeting: 'Hallo! Ich bin Ihr KI-Reiseführer für Tadschikistan. Was möchten Sie wissen?',
    route_title: 'Route erstellen', route_from: '📍 Von', route_to: '🏁 Nach',
    route_my_loc: 'Mein Standort', mode_walk: 'Zu Fuß', mode_car: 'Auto',
    mode_bike: 'Fahrrad', mode_transit: 'Verkehrsmittel', route_build: 'Route erstellen',
    search_title: 'Orte suchen', modal_prices: '💰 Preise', modal_reviews: '⭐ Bewertungen',
    modal_route: 'Route', modal_share: 'Teilen', nearby_title: '📍 Nahe gelegene Orte',
  },
  fr: {
    nav_map: 'Carte', nav_ai: 'Guide IA', nav_route: 'Itinéraire', nav_search: 'Recherche',
    settings_title: '⚙️ Paramètres', settings_lang: '🌐 Langue', settings_filter: '🏷️ Filtrer',
    settings_geo: 'Trouver ma position', settings_nearby: 'Lieux à proximité',
    map_title: 'Bienvenue au Tadjikistan', map_subtitle: 'Cliquez sur un lieu de la carte',
    cat_restaurant: 'Restaurants', cat_hotel: 'Hôtels', cat_shop: 'Boutiques',
    cat_park: 'Parcs', cat_school: 'Écoles', cat_hospital: 'Hôpitaux',
    cat_supermarket: 'Supermarchés', cat_attraction: 'Attractions',
    all: 'Tout', ai_title: 'Guide IA du Tadjikistan', ai_status: 'En ligne',
    ai_greeting: 'Bonjour! Je suis votre guide IA du Tadjikistan. Que voulez-vous savoir?',
    route_title: 'Créer un itinéraire', route_from: '📍 De', route_to: '🏁 À',
    route_my_loc: 'Ma position', mode_walk: 'À pied', mode_car: 'Voiture',
    mode_bike: 'Vélo', mode_transit: 'Transport', route_build: 'Créer l\'itinéraire',
    search_title: 'Rechercher des lieux', modal_prices: '💰 Prix', modal_reviews: '⭐ Avis',
    modal_route: 'Itinéraire', modal_share: 'Partager', nearby_title: '📍 Lieux à proximité',
  },
  tr: {
    nav_map: 'Harita', nav_ai: 'AI Rehber', nav_route: 'Rota', nav_search: 'Arama',
    settings_title: '⚙️ Ayarlar', settings_lang: '🌐 Dil', settings_filter: '🏷️ Yer filtrele',
    settings_geo: 'Konumumu bul', settings_nearby: 'Yakın yerler',
    map_title: 'Tacikistan\'a Hoş Geldiniz', map_subtitle: 'Haritadaki herhangi bir yere tıklayın',
    cat_restaurant: 'Restoranlar', cat_hotel: 'Oteller', cat_shop: 'Mağazalar',
    cat_park: 'Parklar', cat_school: 'Okullar', cat_hospital: 'Hastaneler',
    cat_supermarket: 'Süpermarketler', cat_attraction: 'Turistik Yerler',
    all: 'Hepsi', ai_title: 'Tacikistan AI Rehberi', ai_status: 'Çevrimiçi',
    ai_greeting: 'Merhaba! Tacikistan AI rehberinizim. Ne öğrenmek istersiniz?',
    route_title: 'Rota Oluştur', route_from: '📍 Nereden', route_to: '🏁 Nereye',
    route_my_loc: 'Konumum', mode_walk: 'Yürüyerek', mode_car: 'Araç',
    mode_bike: 'Bisiklet', mode_transit: 'Toplu Taşıma', route_build: 'Rota Oluştur',
    search_title: 'Yer Ara', modal_prices: '💰 Fiyatlar', modal_reviews: '⭐ Yorumlar',
    modal_route: 'Rota', modal_share: 'Paylaş', nearby_title: '📍 Yakın Yerler',
  }
};

// ===== PLACES DATA =====
const PLACES = [
  // RESTAURANTS
  { id: 1, name: 'Ресторан Лаззат', category: 'restaurant', lat: 38.5598, lng: 68.7736, emoji: '🍽️',
    address: 'ул. Рудаки 22, Душанбе', hours: '10:00 – 23:00', phone: '+992 37 221-11-11',
    rating: 4.7, reviews_count: 234, priceRange: '$$',
    prices: [
      { name: 'Плов', price: '25 сомони' }, { name: 'Шашлык (порция)', price: '40 сомони' },
      { name: 'Лагман', price: '22 сомони' }, { name: 'Чай зелёный', price: '5 сомони' },
      { name: 'Манты', price: '30 сомони' }, { name: 'Салат Ташкент', price: '18 сомони' }
    ],
    reviews: [
      { name: 'Анна Соколова', rating: 5, date: '15 мая 2025', text: 'Великолепный плов! Лучший в Душанбе. Персонал очень вежливый.' },
      { name: 'Камол Рашидов', rating: 4, date: '2 мая 2025', text: 'Хорошая кухня, уютная атмосфера. Цены приемлемые.' },
      { name: 'Thomas Müller', rating: 5, date: '28 апр 2025', text: 'Amazing authentic food! Must try the plov.' }
    ],
    photo: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
    photos: ['https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
              'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80']
  },
  { id: 2, name: 'Кафе Восток', category: 'restaurant', lat: 38.5620, lng: 68.7770, emoji: '🍽️',
    address: 'пр. Саади Шерози 5, Душанбе', hours: '09:00 – 22:00', phone: '+992 37 222-33-44',
    rating: 4.3, reviews_count: 156, priceRange: '$',
    prices: [
      { name: 'Самса', price: '5 сомони' }, { name: 'Кабоб', price: '35 сомони' },
      { name: 'Чай по-таджикски', price: '4 сомони' }, { name: 'Курутоб', price: '20 сомони' }
    ],
    reviews: [
      { name: 'Фотима Назарова', rating: 4, date: '10 мая 2025', text: 'Вкусная национальная кухня, быстрое обслуживание.' },
      { name: 'David Lee', rating: 5, date: '5 мая 2025', text: 'Authentic Tajik food at very affordable prices!' }
    ],
    photo: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80',
    photos: ['https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80']
  },
  { id: 3, name: 'Ресторан Дориюшон', category: 'restaurant', lat: 38.5580, lng: 68.7710, emoji: '🍽️',
    address: 'ул. Айни 15, Душанбе', hours: '11:00 – 24:00', phone: '+992 37 233-44-55',
    rating: 4.8, reviews_count: 312, priceRange: '$$$',
    prices: [
      { name: 'Шашлык из баранины', price: '60 сомони' }, { name: 'Таджикский плов', price: '35 сомони' },
      { name: 'Кебаб Дориюшон', price: '75 сомони' }, { name: 'Салаты', price: '20-45 сомони' }
    ],
    reviews: [
      { name: 'Николай Петров', rating: 5, date: '18 мая 2025', text: 'Лучший ресторан в городе! Отличная атмосфера и прекрасная еда.' }
    ],
    photo: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    photos: ['https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80']
  },

  // HOTELS
  { id: 4, name: 'Отель Хайятт Душанбе', category: 'hotel', lat: 38.5615, lng: 68.7748, emoji: '🏨',
    address: 'ул. Рудаки 107A, Душанбе', hours: '24/7', phone: '+992 37 290-12-34',
    rating: 4.9, reviews_count: 521, priceRange: '$$$$',
    prices: [
      { name: 'Стандартный номер', price: '600 сомони/ночь' }, { name: 'Делюкс номер', price: '900 сомони/ночь' },
      { name: 'Люкс', price: '1800 сомони/ночь' }, { name: 'Завтрак', price: '120 сомони' }
    ],
    reviews: [
      { name: 'Sarah Johnson', rating: 5, date: '16 мая 2025', text: 'Excellent hotel! Great view of the mountains, amazing breakfast.' },
      { name: 'Акбар Холиков', rating: 5, date: '12 мая 2025', text: 'Профессиональный персонал, чистые номера, отличный бассейн.' }
    ],
    photo: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
    photos: ['https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
              'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80']
  },
  { id: 5, name: 'Гостиница Душанбе', category: 'hotel', lat: 38.5640, lng: 68.7730, emoji: '🏨',
    address: 'ул. Рудаки 22, Душанбе', hours: '24/7', phone: '+992 37 221-55-66',
    rating: 3.9, reviews_count: 178, priceRange: '$$',
    prices: [
      { name: 'Одноместный номер', price: '200 сомони/ночь' }, { name: 'Двухместный номер', price: '320 сомони/ночь' },
      { name: 'Парковка', price: '30 сомони/день' }
    ],
    reviews: [
      { name: 'Marco Rossi', rating: 4, date: '8 мая 2025', text: 'Good location, friendly staff. Clean rooms.' }
    ],
    photo: 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?w=600&q=80',
    photos: ['https://images.unsplash.com/photo-1541971875076-8f970d573be6?w=600&q=80']
  },

  // SHOPS
  { id: 6, name: 'ТЦ Душанбе Сити', category: 'shop', lat: 38.5555, lng: 68.7760, emoji: '🛍️',
    address: 'пр. Ахмади Дониш 3, Душанбе', hours: '10:00 – 22:00', phone: '+992 37 244-66-77',
    rating: 4.4, reviews_count: 892, priceRange: '$$',
    prices: [
      { name: 'Джинсы (бренд)', price: '150-500 сомони' }, { name: 'Футболка', price: '50-200 сомони' },
      { name: 'Кроссовки', price: '300-1200 сомони' }, { name: 'Платье', price: '100-600 сомони' }
    ],
    reviews: [
      { name: 'Зарина Давлатова', rating: 5, date: '17 мая 2025', text: 'Большой выбор одежды, хорошие цены. Есть фудкорт.' },
      { name: 'Emma Wilson', rating: 4, date: '14 мая 2025', text: 'Nice modern mall with good variety of shops.' }
    ],
    photo: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80',
    photos: ['https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80']
  },
  { id: 7, name: 'Рынок Баракат', category: 'shop', lat: 38.5570, lng: 68.7695, emoji: '🛍️',
    address: 'ул. Лахути 10, Душанбе', hours: '07:00 – 19:00', phone: '+992 37 255-77-88',
    rating: 4.2, reviews_count: 445, priceRange: '$',
    prices: [
      { name: 'Национальная одежда', price: '80-400 сомони' }, { name: 'Сувениры', price: '20-150 сомони' },
      { name: 'Специи (100г)', price: '5-25 сомони' }, { name: 'Сухофрукты (1кг)', price: '40-120 сомони' }
    ],
    reviews: [
      { name: 'Баходур Юсупов', rating: 4, date: '11 мая 2025', text: 'Хороший традиционный рынок, свежие продукты.' }
    ],
    photo: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=600&q=80',
    photos: ['https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=600&q=80']
  },

  // SUPERMARKETS
  { id: 8, name: 'Супермаркет Корвон', category: 'supermarket', lat: 38.5605, lng: 68.7780, emoji: '🛒',
    address: 'ул. Борбада 28, Душанбе', hours: '08:00 – 22:00', phone: '+992 37 266-88-99',
    rating: 4.1, reviews_count: 324, priceRange: '$',
    prices: [
      { name: 'Хлеб (лепёшка)', price: '3 сомони' }, { name: 'Молоко 1л', price: '12 сомони' },
      { name: 'Курица 1кг', price: '38 сомони' }, { name: 'Рис 1кг', price: '8 сомони' }
    ],
    reviews: [
      { name: 'Гулнора Асланова', rating: 4, date: '13 мая 2025', text: 'Хороший супермаркет, много товаров, приемлемые цены.' }
    ],
    photo: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80',
    photos: ['https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80']
  },

  // PARKS & ATTRACTIONS
  { id: 9, name: 'Парк Рудаки', category: 'park', lat: 38.5593, lng: 68.7742, emoji: '🌿',
    address: 'пр. Рудаки, Душанбе', hours: '06:00 – 23:00', phone: '',
    rating: 4.6, reviews_count: 1204, priceRange: 'free',
    prices: [{ name: 'Вход', price: 'Бесплатно' }],
    reviews: [
      { name: 'Лейла Каримова', rating: 5, date: '19 мая 2025', text: 'Прекрасный парк для прогулок, много зелени и красивые фонтаны.' },
      { name: 'James Park', rating: 5, date: '10 мая 2025', text: 'Beautiful park in the city center. Great for relaxing.' }
    ],
    photo: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600&q=80',
    photos: ['https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600&q=80']
  },
  { id: 10, name: 'Национальный музей Таджикистана', category: 'attraction', lat: 38.5562, lng: 68.7720, emoji: '🏛️',
    address: 'пр. Рудаки 31, Душанбе', hours: '09:00 – 17:00 (вт-вс)', phone: '+992 37 221-00-11',
    rating: 4.8, reviews_count: 678, priceRange: '$',
    prices: [
      { name: 'Взрослый билет', price: '20 сомони' }, { name: 'Детский билет', price: '5 сомони' },
      { name: 'Экскурсия с гидом', price: '50 сомони' }
    ],
    reviews: [
      { name: 'Профессор Назаров', rating: 5, date: '7 мая 2025', text: 'Великолепная экспозиция по истории Таджикистана. Обязательно к посещению!' },
      { name: 'Yuki Tanaka', rating: 5, date: '3 мая 2025', text: 'Incredible museum! Learn so much about Tajik culture and history.' }
    ],
    photo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    photos: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80']
  },
  { id: 11, name: 'Флагшток (самый высокий в мире)', category: 'attraction', lat: 38.5630, lng: 68.7725, emoji: '🏛️',
    address: 'пр. Дусти, Душанбе', hours: '24/7', phone: '',
    rating: 4.7, reviews_count: 956, priceRange: 'free',
    prices: [{ name: 'Вход', price: 'Бесплатно' }],
    reviews: [
      { name: 'Алексей Громов', rating: 5, date: '15 мая 2025', text: 'Впечатляет! 165 метров — один из самых высоких флагштоков в мире.' }
    ],
    photo: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80',
    photos: ['https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80']
  },
  { id: 12, name: 'Медицинский центр Авиценна', category: 'hospital', lat: 38.5575, lng: 68.7755, emoji: '🏥',
    address: 'ул. Назаршоева 4, Душанбе', hours: '08:00 – 20:00', phone: '+992 37 234-56-78',
    rating: 4.3, reviews_count: 234, priceRange: '$$',
    prices: [
      { name: 'Консультация врача', price: '70-150 сомони' }, { name: 'Анализы крови', price: '50-200 сомони' }
    ],
    reviews: [
      { name: 'Манон Рустамова', rating: 4, date: '9 мая 2025', text: 'Хорошие специалисты, современное оборудование.' }
    ],
    photo: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
    photos: ['https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80']
  },
  { id: 13, name: 'Таджикский государственный университет', category: 'school', lat: 38.5588, lng: 68.7790, emoji: '🏫',
    address: 'пр. Рудаки 17, Душанбе', hours: '08:00 – 18:00', phone: '+992 37 221-30-01',
    rating: 4.5, reviews_count: 445, priceRange: '$$',
    prices: [
      { name: 'Осмотр кампуса', price: 'Бесплатно' }
    ],
    reviews: [
      { name: 'Шерали Мирзоев', rating: 5, date: '6 мая 2025', text: 'Красивый исторический кампус, богатая библиотека.' }
    ],
    photo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80',
    photos: ['https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80']
  }
];

// ===== STATE =====
let map = null, routeMap = null;
let markers = [];
let currentLang = 'ru';
let travelMode = 'WALKING';
let userLocation = null;
let selectedPlace = null;
let directionsService = null, directionsRenderer = null;
let routeDirectionsRenderer = null;
let activeCategories = new Set(['restaurant','hotel','shop','park','school','hospital','supermarket','attraction']);

// ===== INIT MAP =====
function initMap() {
  // Hide loader
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 2800);

  const tajikistan = { lat: 38.5598, lng: 68.7736 };

  map = new google.maps.Map(document.getElementById('map'), {
    center: tajikistan, zoom: 13,
    styles: DARK_MAP_STYLE,
    disableDefaultUI: true,
    zoomControl: true,
    zoomControlOptions: { position: google.maps.ControlPosition.RIGHT_CENTER },
    gestureHandling: 'greedy'
  });

  routeMap = new google.maps.Map(document.getElementById('route-map'), {
    center: tajikistan, zoom: 12,
    styles: DARK_MAP_STYLE,
    disableDefaultUI: true,
    zoomControl: true,
    gestureHandling: 'greedy'
  });

  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer({ map: routeMap, suppressMarkers: false });
  routeDirectionsRenderer = directionsRenderer;

  // Map click → nearby search
  map.addListener('click', (e) => {
    searchNearClick(e.latLng);
  });

  addAllMarkers();
}

// ===== MARKER ICONS =====
const CAT_COLORS = {
  restaurant: '#FF6B6B', hotel: '#4ECDC4', shop: '#FFE66D',
  park: '#51CF66', school: '#74C0FC', hospital: '#F06595',
  supermarket: '#CC5DE8', attraction: '#FFA94D'
};
const CAT_EMOJIS = {
  restaurant: '🍽️', hotel: '🏨', shop: '🛍️',
  park: '🌿', school: '🏫', hospital: '🏥',
  supermarket: '🛒', attraction: '🏛️'
};

function addAllMarkers() {
  markers.forEach(m => m.setMap(null));
  markers = [];
  PLACES.forEach(place => {
    if (!activeCategories.has(place.category)) return;
    const marker = new google.maps.Marker({
      position: { lat: place.lat, lng: place.lng },
      map: map,
      title: place.name,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 14,
        fillColor: CAT_COLORS[place.category] || '#fff',
        fillOpacity: 1,
        strokeColor: '#fff',
        strokeWeight: 2.5,
      },
      label: { text: CAT_EMOJIS[place.category] || '📍', fontSize: '14px' }
    });
    marker.addListener('click', () => openPlaceModal(place));
    markers.push(marker);
  });
}

// Map click → search nearby using Places API
function searchNearClick(latLng) {
  const service = new google.maps.places.PlacesService(map);
  const request = {
    location: latLng,
    radius: 500,
    type: ['establishment']
  };
  service.nearbySearch(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results.length > 0) {
      const place = results[0];
      service.getDetails({ placeId: place.place_id }, (details, detailStatus) => {
        if (detailStatus === google.maps.places.PlacesServiceStatus.OK) {
          openGooglePlaceModal(details);
        }
      });
    }
  });
}

// ===== OPEN GOOGLE PLACE MODAL =====
function openGooglePlaceModal(place) {
  selectedPlace = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng(), name: place.name };

  document.getElementById('modal-name').textContent = place.name || 'Место';
  const r = place.rating || 0;
  document.getElementById('modal-rating').innerHTML = `<span class="stars">${'★'.repeat(Math.round(r))}${'☆'.repeat(5-Math.round(r))}</span> <span class="rating-num">${r} (${place.user_ratings_total || 0})</span>`;
  document.getElementById('modal-category').textContent = (place.types?.[0] || '').replace(/_/g,' ');
  document.getElementById('modal-address').innerHTML = `<span class="label">📍</span>${place.formatted_address || ''}`;
  document.getElementById('modal-hours').innerHTML = `<span class="label">🕐</span>${place.opening_hours?.weekday_text?.[0] || 'Уточните часы работы'}`;
  document.getElementById('modal-phone').innerHTML = `<span class="label">📞</span>${place.formatted_phone_number || 'Нет данных'}`;
  document.getElementById('modal-price').innerHTML = `<span class="label">💰</span>${['Бесплатно','Дёшево','Средне','Дорого','Очень дорого'][place.price_level||0] || 'Нет данных'}`;

  const mainPhoto = document.getElementById('modal-photo-main');
  const thumbsEl = document.getElementById('modal-photo-thumbs');
  mainPhoto.innerHTML = '';
  thumbsEl.innerHTML = '';

  if (place.photos && place.photos.length > 0) {
    const img = document.createElement('img');
    img.src = place.photos[0].getUrl({ maxWidth: 600 });
    mainPhoto.appendChild(img);
    place.photos.slice(0, 4).forEach((ph, i) => {
      const thumb = document.createElement('img');
      thumb.src = ph.getUrl({ maxWidth: 120 });
      if (i === 0) thumb.classList.add('active');
      thumb.onclick = () => {
        mainPhoto.innerHTML = '';
        const bigImg = document.createElement('img');
        bigImg.src = ph.getUrl({ maxWidth: 600 });
        mainPhoto.appendChild(bigImg);
        thumbsEl.querySelectorAll('img').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      };
      thumbsEl.appendChild(thumb);
    });
  } else {
    mainPhoto.innerHTML = `<div class="no-photo">📍</div>`;
  }

  document.getElementById('modal-prices-section').style.display = 'none';

  const revList = document.getElementById('modal-reviews-list');
  if (place.reviews && place.reviews.length > 0) {
    revList.innerHTML = place.reviews.map(r => `
      <div class="review-card">
        <div class="review-header">
          <span class="reviewer">${r.author_name}</span>
          <span class="review-date">${new Date(r.time*1000).toLocaleDateString()}</span>
        </div>
        <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
        <div class="review-text">${r.text}</div>
      </div>`).join('');
  } else {
    revList.innerHTML = '<p style="color:var(--text2)">Нет отзывов</p>';
  }

  document.getElementById('place-modal').classList.remove('hidden');
}

// ===== OPEN LOCAL PLACE MODAL =====
function openPlaceModal(place) {
  selectedPlace = place;
  document.getElementById('modal-name').textContent = place.name;
  const stars = '★'.repeat(Math.floor(place.rating)) + (place.rating % 1 >= 0.5 ? '½' : '') + '☆'.repeat(5 - Math.ceil(place.rating));
  document.getElementById('modal-rating').innerHTML = `<span class="stars">${stars}</span> <span class="rating-num">${place.rating} (${place.reviews_count})</span>`;
  document.getElementById('modal-category').textContent = place.category;
  document.getElementById('modal-address').innerHTML = `<span class="label">📍</span>${place.address}`;
  document.getElementById('modal-hours').innerHTML = `<span class="label">🕐</span>${place.hours}`;
  document.getElementById('modal-phone').innerHTML = `<span class="label">📞</span>${place.phone || 'Нет данных'}`;
  document.getElementById('modal-price').innerHTML = `<span class="label">💰</span>${place.priceRange === 'free' ? 'Бесплатно' : place.priceRange}`;

  const mainPhoto = document.getElementById('modal-photo-main');
  const thumbsEl = document.getElementById('modal-photo-thumbs');
  mainPhoto.innerHTML = '';
  thumbsEl.innerHTML = '';

  if (place.photo) {
    const img = document.createElement('img');
    img.src = place.photo;
    img.onerror = () => { mainPhoto.innerHTML = `<div class="no-photo">${place.emoji}</div>`; };
    mainPhoto.appendChild(img);
    (place.photos || []).forEach((ph, i) => {
      const thumb = document.createElement('img');
      thumb.src = ph;
      if (i === 0) thumb.classList.add('active');
      thumb.onclick = () => {
        mainPhoto.innerHTML = '';
        const bigImg = document.createElement('img');
        bigImg.src = ph;
        mainPhoto.appendChild(bigImg);
        thumbsEl.querySelectorAll('img').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      };
      thumbsEl.appendChild(thumb);
    });
  } else {
    mainPhoto.innerHTML = `<div class="no-photo">${place.emoji}</div>`;
  }

  const pricesSection = document.getElementById('modal-prices-section');
  const pricesList = document.getElementById('modal-prices-list');
  if (place.prices && place.prices.length > 0) {
    pricesSection.style.display = 'block';
    pricesList.innerHTML = place.prices.map(p => `
      <div class="price-item">
        <span class="item-name">${p.name}</span>
        <span class="item-price">${p.price}</span>
      </div>`).join('');
  } else {
    pricesSection.style.display = 'none';
  }

  const revList = document.getElementById('modal-reviews-list');
  revList.innerHTML = (place.reviews || []).map(r => `
    <div class="review-card">
      <div class="review-header">
        <span class="reviewer">${r.name}</span>
        <span class="review-date">${r.date}</span>
      </div>
      <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div>
      <div class="review-text">${r.text}</div>
    </div>`).join('');

  document.getElementById('place-modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('place-modal').classList.add('hidden');
  selectedPlace = null;
}

function routeToPlace() {
  if (!selectedPlace) return;
  closeModal();
  showSection('route');
  const name = selectedPlace.name || 'Выбранное место';
  document.getElementById('route-to').value = name;
  if (userLocation) {
    document.getElementById('route-from').value = 'Моё местоположение';
  }
}

function sharePlace() {
  if (!selectedPlace) return;
  const text = `${selectedPlace.name} — TajikExplorer\nhttps://maps.google.com/?q=${selectedPlace.lat},${selectedPlace.lng}`;
  if (navigator.share) {
    navigator.share({ title: selectedPlace.name, text });
  } else {
    navigator.clipboard?.writeText(text);
    showNotification('📋 Ссылка скопирована!');
  }
}

// ===== NAVIGATION =====
function showSection(name) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('section-' + name).classList.add('active');
  document.querySelector(`[data-section="${name}"]`)?.classList.add('active');
  if (name === 'map') {
    setTimeout(() => google.maps.event.trigger(map, 'resize'), 100);
  }
  if (name === 'route') {
    setTimeout(() => google.maps.event.trigger(routeMap, 'resize'), 100);
  }
}

// ===== SETTINGS =====
function toggleSettings() {
  document.getElementById('settings-panel').classList.toggle('hidden');
}

function changeLanguage(lang) {
  currentLang = lang;
  const t = TRANSLATIONS[lang] || TRANSLATIONS['ru'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  // Reload map with new language
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${GMAPS_KEY}&libraries=places,geometry&language=${lang}`;
  // Can't reload easily; just show notification
  showNotification(`🌐 Язык изменён на: ${lang.toUpperCase()}`);
}

function toggleCategory(cat) {
  if (activeCategories.has(cat)) activeCategories.delete(cat);
  else activeCategories.add(cat);
  addAllMarkers();
}

function filterMap(cat) {
  document.querySelectorAll('.cat-chip').forEach(c => c.classList.remove('active'));
  event.target.closest('.cat-chip').classList.add('active');
  if (cat === 'all') {
    activeCategories = new Set(['restaurant','hotel','shop','park','school','hospital','supermarket','attraction']);
  } else {
    activeCategories = new Set([cat]);
  }
  addAllMarkers();
  if (map) {
    const filtered = PLACES.filter(p => cat === 'all' || p.category === cat);
    if (filtered.length > 0) {
      const bounds = new google.maps.LatLngBounds();
      filtered.forEach(p => bounds.extend({ lat: p.lat, lng: p.lng }));
      map.fitBounds(bounds);
    }
  }
}

// ===== GEOLOCATION =====
function getUserLocation() {
  if (!navigator.geolocation) { showNotification('❌ Геолокация недоступна'); return; }
  showNotification('📍 Определяю геолокацию...');
  navigator.geolocation.getCurrentPosition(pos => {
    userLocation = { lat: pos.coords.latitude, lng: pos.coords.longitude };
    map.setCenter(userLocation);
    map.setZoom(15);
    new google.maps.Marker({
      position: userLocation, map: map,
      icon: { path: google.maps.SymbolPath.CIRCLE, scale: 12, fillColor: '#4285F4', fillOpacity: 1, strokeColor: '#fff', strokeWeight: 3 },
      title: 'Вы здесь'
    });
    showSection('map');
    toggleSettings();
    showNotification('✅ Геолокация определена!');
  }, () => {
    showNotification('❌ Не удалось определить геолокацию. Разрешите доступ к геолокации в браузере.');
  });
}

function showNearby() {
  const loc = userLocation || { lat: 38.5598, lng: 68.7736 };
  const panel = document.getElementById('nearby-panel');
  const list = document.getElementById('nearby-list');

  const sorted = [...PLACES].sort((a, b) => {
    const da = Math.hypot(a.lat - loc.lat, a.lng - loc.lng);
    const db = Math.hypot(b.lat - loc.lat, b.lng - loc.lng);
    return da - db;
  }).slice(0, 10);

  list.innerHTML = sorted.map(p => {
    const d = Math.round(Math.hypot(p.lat - loc.lat, p.lng - loc.lng) * 111000);
    return `
      <div class="nearby-item" onclick="openPlaceModal(${p.id > 0 ? `PLACES.find(x=>x.id===${p.id})` : 'null'})">
        <div class="nearby-icon">${CAT_EMOJIS[p.category]}</div>
        <div>
          <div class="nearby-name">${p.name}</div>
          <div class="nearby-dist">📏 ${d < 1000 ? d + 'м' : (d/1000).toFixed(1) + 'км'}</div>
        </div>
      </div>`;
  }).join('');
  panel.classList.remove('hidden');
  toggleSettings();
}

function useMyLocation() {
  if (userLocation) {
    document.getElementById('route-from').value = `${userLocation.lat.toFixed(5)},${userLocation.lng.toFixed(5)}`;
  } else {
    getUserLocation();
  }
}

// ===== ROUTE =====
function setMode(mode) {
  travelMode = mode;
  document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
  const modeMap = { WALKING:'walking', DRIVING:'driving', BICYCLING:'bicycling', TRANSIT:'transit' };
  document.getElementById('mode-' + modeMap[mode]).classList.add('active');
}

function buildRoute() {
  const from = document.getElementById('route-from').value.trim();
  const to = document.getElementById('route-to').value.trim();
  if (!from || !to) { showNotification('⚠️ Укажите начальную и конечную точку'); return; }

  showNotification('🗺️ Строю маршрут...');

  let origin, destination;
  if (userLocation && (from.includes('Моё') || from.includes('позиц') || from.match(/^\d+\.\d+,\s*\d+/))) {
    origin = new google.maps.LatLng(userLocation.lat, userLocation.lng);
  } else {
    origin = from + ', Таджикистан';
  }

  const matchedPlace = PLACES.find(p => to.toLowerCase().includes(p.name.toLowerCase().slice(0,8)));
  if (matchedPlace) {
    destination = new google.maps.LatLng(matchedPlace.lat, matchedPlace.lng);
  } else {
    destination = to + ', Таджикистан';
  }

  directionsService.route({
    origin, destination, travelMode: google.maps.TravelMode[travelMode]
  }, (result, status) => {
    if (status === 'OK') {
      routeDirectionsRenderer.setDirections(result);
      const leg = result.routes[0].legs[0];
      const infoEl = document.getElementById('route-info');
      infoEl.classList.remove('hidden');
      infoEl.innerHTML = `
        <div class="route-stat"><span>📍 Откуда</span><strong>${leg.start_address}</strong></div>
        <div class="route-stat"><span>🏁 Куда</span><strong>${leg.end_address}</strong></div>
        <div class="route-stat"><span>📏 Расстояние</span><strong>${leg.distance.text}</strong></div>
        <div class="route-stat"><span>⏱️ Время</span><strong>${leg.duration.text}</strong></div>
        <div class="route-stat"><span>🚶 Режим</span><strong>${{WALKING:'Пешком',DRIVING:'Машина',BICYCLING:'Велосипед',TRANSIT:'Транспорт'}[travelMode]}</strong></div>`;
      showNotification('✅ Маршрут построен!');
    } else {
      showNotification('❌ Не удалось построить маршрут. Проверьте точки.');
    }
  });
}

// ===== SEARCH =====
function liveSearch(q) {
  if (q.length < 2) { document.getElementById('search-results').innerHTML = ''; return; }
  const results = PLACES.filter(p =>
    p.name.toLowerCase().includes(q.toLowerCase()) ||
    p.category.toLowerCase().includes(q.toLowerCase()) ||
    p.address.toLowerCase().includes(q.toLowerCase())
  );
  renderSearchResults(results);
}

function doSearch() {
  liveSearch(document.getElementById('search-input').value);
}

function searchByCategory(cat) {
  document.getElementById('search-input').value = cat;
  const results = PLACES.filter(p =>
    p.category.toLowerCase().includes(cat.toLowerCase()) ||
    p.name.toLowerCase().includes(cat.toLowerCase())
  );
  renderSearchResults(results);
}

function renderSearchResults(results) {
  const el = document.getElementById('search-results');
  if (results.length === 0) {
    el.innerHTML = '<p style="color:var(--text2);text-align:center;padding:40px">Ничего не найдено. Попробуйте поиск на карте.</p>';
    return;
  }
  el.innerHTML = results.map(p => `
    <div class="result-card" onclick="showOnMap(${p.id})">
      <div class="result-card-img">
        ${p.photo ? `<img src="${p.photo}" alt="${p.name}" onerror="this.parentElement.innerHTML='<span style=font-size:50px>${p.emoji}</span>'" />` : `<span style="font-size:50px">${p.emoji}</span>`}
      </div>
      <div class="result-card-body">
        <div class="result-card-name">${p.name}</div>
        <div class="result-card-cat">${CAT_EMOJIS[p.category]} ${p.category}</div>
        <div class="result-card-rating">${'★'.repeat(Math.round(p.rating))} ${p.rating}</div>
        <div class="result-card-addr">${p.address}</div>
      </div>
    </div>`).join('');
}

function showOnMap(id) {
  const place = PLACES.find(p => p.id === id);
  if (!place) return;
  showSection('map');
  setTimeout(() => {
    map.setCenter({ lat: place.lat, lng: place.lng });
    map.setZoom(16);
    setTimeout(() => openPlaceModal(place), 300);
  }, 200);
}

// ===== AI CHAT =====
async function sendMessage() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  addMsg(text, 'user');
  removeQuickReplies();
  await getAIResponse(text);
}

function sendQuick(text) {
  document.getElementById('chat-input').value = text;
  sendMessage();
}

function removeQuickReplies() {
  const qr = document.getElementById('quick-replies');
  if (qr) qr.remove();
}

function addMsg(text, type) {
  const msgs = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = `msg ${type}`;
  div.innerHTML = `
    <div class="msg-avatar">${type === 'bot' ? '🏔️' : '👤'}</div>
    <div class="msg-bubble">${text}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return div;
}

function addTyping() {
  const msgs = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = 'msg bot'; div.id = 'typing-indicator';
  div.innerHTML = '<div class="msg-avatar">🏔️</div><div class="msg-bubble typing"><span></span><span></span><span></span></div>';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function removeTyping() {
  document.getElementById('typing-indicator')?.remove();
}

async function getAIResponse(userMsg) {
  addTyping();
  const systemPrompt = `Ты — дружелюбный и знающий AI-гид по Таджикистану. Ты помогаешь туристам найти лучшие рестораны, отели, достопримечательности, магазины в Душанбе и по всему Таджикистану. 

Вот данные о местах в нашей системе:
${JSON.stringify(PLACES.map(p => ({ name: p.name, category: p.category, address: p.address, rating: p.rating, priceRange: p.priceRange })))}

Давай конкретные советы, цены, рекомендации. Будь кратким и полезным. Если спрашивают о конкретном месте из нашей базы — дай подробный ответ. Отвечай на языке пользователя. Используй эмодзи.`;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': window.location.href,
        'X-Title': 'TajikExplorer'
      },
      body: JSON.stringify({
        model: 'openai/gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userMsg }
        ],
        max_tokens: 600
      })
    });
    const data = await response.json();
    removeTyping();
    const reply = data.choices?.[0]?.message?.content || 'Извините, не удалось получить ответ. Попробуйте ещё раз.';
    addMsg(reply, 'bot');
  } catch (err) {
    removeTyping();
    addMsg('Извините, произошла ошибка сети. Пожалуйста, проверьте подключение к интернету и попробуйте снова. 🙏', 'bot');
  }
}

// ===== UTILS =====
function showNotification(msg) {
  const el = document.createElement('div');
  el.className = 'notification'; el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 3500);
}

// ===== DARK MAP STYLE =====
const DARK_MAP_STYLE = [
  { elementType: 'geometry', stylers: [{ color: '#1d2c4d' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#8ec3b9' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#1a3646' }] },
  { featureType: 'administrative.country', elementType: 'geometry.stroke', stylers: [{ color: '#4b6878' }] },
  { featureType: 'administrative.land_parcel', elementType: 'labels.text.fill', stylers: [{ color: '#64779e' }] },
  { featureType: 'administrative.province', elementType: 'geometry.stroke', stylers: [{ color: '#4b6878' }] },
  { featureType: 'landscape.man_made', elementType: 'geometry.stroke', stylers: [{ color: '#334e87' }] },
  { featureType: 'landscape.natural', elementType: 'geometry', stylers: [{ color: '#023e58' }] },
  { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#283d6a' }] },
  { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#6f9ba5' }] },
  { featureType: 'poi', elementType: 'labels.text.stroke', stylers: [{ color: '#1d2c4d' }] },
  { featureType: 'poi.park', elementType: 'geometry.fill', stylers: [{ color: '#023e58' }] },
  { featureType: 'poi.park', elementType: 'labels.text.fill', stylers: [{ color: '#3C7680' }] },
  { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#304a7d' }] },
  { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ color: '#98a5be' }] },
  { featureType: 'road', elementType: 'labels.text.stroke', stylers: [{ color: '#1d2c4d' }] },
  { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#2c6675' }] },
  { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#255763' }] },
  { featureType: 'road.highway', elementType: 'labels.text.fill', stylers: [{ color: '#b0d5ce' }] },
  { featureType: 'road.highway', elementType: 'labels.text.stroke', stylers: [{ color: '#023747' }] },
  { featureType: 'transit', elementType: 'labels.text.fill', stylers: [{ color: '#98a5be' }] },
  { featureType: 'transit', elementType: 'labels.text.stroke', stylers: [{ color: '#1d2c4d' }] },
  { featureType: 'transit.line', elementType: 'geometry.fill', stylers: [{ color: '#283d6a' }] },
  { featureType: 'transit.station', elementType: 'geometry', stylers: [{ color: '#3a4762' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#0e1626' }] },
  { featureType: 'water', elementType: 'labels.text.fill', stylers: [{ color: '#4e6d70' }] }
];
