// ─── Store Info ───
export const storeProfile = {
  name: 'Jeeh Games',
  tagline: 'La tienda de videojuegos mas completa',
  phone1: '809-545-2745',
  phone2: '849-265-9001',
  address: 'C/Altagracia #27, Pueblo Nuevo, Los Alcarrizos',
  instagramUrl: 'https://www.instagram.com/jeehgamesstore/',
  whatsappUrl: 'https://wa.me/18095452745',
  profilePic: '/images/ig/profile-pic.jpg',
}

// ─── Navigation Categories ───
export const categories = [
  { label: 'PlayStation 5', href: '#ps5' },
  { label: 'Nintendo Switch 2', href: '#switch' },
  { label: 'Xbox Series', href: '#xbox' },
  { label: 'Juegos', href: '#juegos' },
  { label: 'Accesorios', href: '#accesorios' },
  { label: 'Pre-Ordenes', href: '#preorden' },
  { label: 'Ofertas', href: '#ofertas' },
]

// ─── Hero Banners (carousel) ───
export const heroBanners = [
  {
    id: 1,
    image: '/images/ig/001-2026-03-02-a.jpg',
    title: 'Resident Evil Requiem',
    subtitle: 'Disponible en Switch 2 y PS5',
    badge: 'Nuevo',
    badgeColor: 'bg-red-500',
    cta: 'Ver Detalles',
    href: 'https://www.instagram.com/p/DVZYdG4DqJV/',
  },
  {
    id: 2,
    image: '/images/ig/005-2026-02-05-a.jpg',
    title: 'Nintendo Switch 2',
    subtitle: 'Ofertas de Aniversario desde RD$29,450',
    badge: 'Oferta',
    badgeColor: 'bg-neon-green',
    cta: 'Comprar Ahora',
    href: 'https://www.instagram.com/p/DUY6ZupFPjY/',
  },
  {
    id: 3,
    image: '/images/ig/004-2026-02-05-a.jpg',
    title: 'PS5 Slim',
    subtitle: 'Todas las ediciones desde RD$31,950',
    badge: 'Popular',
    badgeColor: 'bg-blue-500',
    cta: 'Ver Consolas',
    href: 'https://www.instagram.com/p/DUY615plLQa/',
  },
]

// ─── Trust / Info Banners ───
export const trustBadges = [
  { icon: 'truck', text: 'Delivery a todo RD' },
  { icon: 'shield', text: 'Garantia en todo' },
  { icon: 'credit-card', text: 'Pagos flexibles' },
  { icon: 'headphones', text: 'Soporte 24/7' },
]

// ─── Products ───
export const newReleases = [
  { id: 1, name: 'Resident Evil Requiem', platform: 'PS5', price: 3800, image: '/images/products/games/re-requiem-ps5.png', badge: 'Nuevo', href: 'https://www.instagram.com/p/DVZYdG4DqJV/' },
  { id: 2, name: 'Resident Evil Requiem', platform: 'Switch 2', price: 3800, image: '/images/products/games/re-requiem-nsw2.png', badge: 'Nuevo', href: 'https://www.instagram.com/p/DVZYdG4DqJV/' },
  { id: 3, name: 'Pragmata', platform: 'PS5', price: 3800, salePrice: 3600, image: '/images/products/games/pragmata-ps5.png', badge: 'Pre-Orden', href: 'https://www.instagram.com/p/DVV6c1Ljvc6/' },
  { id: 4, name: 'Pragmata', platform: 'Switch 2', price: 3800, salePrice: 3600, image: '/images/products/games/pragmata-nsw2.png', badge: 'Pre-Orden', href: 'https://www.instagram.com/p/DVV6c1Ljvc6/' },
  { id: 5, name: 'Pokemon Pokopia', platform: 'Switch 2', price: 5150, salePrice: 4950, image: '/images/products/games/pokemon-pokopia-nsw2.png', badge: 'Pre-Orden', href: 'https://www.instagram.com/p/DVTPO8wjqBv/' },
]

export const consoles = [
  { id: 10, name: 'PS5 Slim Disco Ghost of Yotei', platform: 'PS5', price: 44350, salePrice: 38450, image: '/images/products/consoles/ps5-ghost-yotei-bundle.png', badge: 'Oferta', href: 'https://www.instagram.com/p/DUY615plLQa/' },
  { id: 11, name: 'PS5 Slim Disco Fortnite', platform: 'PS5', price: 34450, salePrice: 32950, image: '/images/products/consoles/ps5-slim-disco-fortnite.png', badge: 'Oferta', href: 'https://www.instagram.com/p/DUY615plLQa/' },
  { id: 12, name: 'PS5 Slim Digital Fortnite', platform: 'PS5', price: 30450, salePrice: 28950, image: '/images/products/consoles/ps5-slim-digital-fortnite.png', badge: 'Oferta', href: 'https://www.instagram.com/p/DUY615plLQa/' },
  { id: 13, name: 'PS5 Slim Disco', platform: 'PS5', price: 34500, salePrice: 31950, image: '/images/products/consoles/ps5-slim-disco-box.png', badge: 'Oferta', href: 'https://www.instagram.com/p/DUY615plLQa/' },
  { id: 14, name: 'Nintendo Switch 2', platform: 'Switch 2', price: 33500, salePrice: 29450, image: '/images/products/consoles/nsw2-box.png', badge: 'Oferta', href: 'https://www.instagram.com/p/DUY6ZupFPjY/' },
  { id: 15, name: 'NSW2 Bundles', platform: 'Switch 2', price: 35950, salePrice: 31450, image: '/images/products/consoles/nsw2-bundle-box.png', badge: 'Bundle', href: 'https://www.instagram.com/p/DUY6ZupFPjY/' },
  { id: 16, name: 'Xbox Series X 1TB Digital', platform: 'Xbox', price: 38950, salePrice: 36950, image: '/images/products/consoles/xbox-series-x-digital-white.png', badge: 'Oferta', href: 'https://www.instagram.com/p/DUY5_UqFNRV/' },
  { id: 17, name: 'Xbox Series S 512GB', platform: 'Xbox', price: null, salePrice: 24950, image: '/images/products/consoles/xbox-series-s.png', badge: null, href: 'https://www.instagram.com/p/DUY5_UqFNRV/' },
  { id: 18, name: 'Xbox Series X 1TB SSD', platform: 'Xbox', price: 39450, salePrice: 37450, image: '/images/products/consoles/xbox-series-x.png', badge: 'Oferta', href: 'https://www.instagram.com/p/DUY5_UqFNRV/' },
]

export const deals = [
  { id: 20, name: 'T-Shirt Gratis', description: 'Con compra de consola', image: '/images/ig/004-2026-02-05-e.jpg', href: 'https://www.instagram.com/p/DUY615plLQa/' },
  { id: 21, name: 'Poster Gratis', description: 'Con pre-orden de juegos', image: '/images/ig/005-2026-02-05-c.jpg', href: 'https://www.instagram.com/p/DUY6ZupFPjY/' },
  { id: 22, name: 'Ofertas Aniversario', description: 'Precios especiales en consolas', image: '/images/ig/005-2026-02-05-d.jpg', href: 'https://www.instagram.com/p/DUY6ZupFPjY/' },
]

// ─── Gallery / Instagram Feed ───
export const galleryImages = [
  { src: '/images/ig/001-2026-03-02-a.jpg', caption: 'Resident Evil Requiem - PS5', postUrl: 'https://www.instagram.com/p/DVZYdG4DqJV/', span: 'sm:col-span-2 sm:row-span-2' },
  { src: '/images/ig/002-2026-03-01-a.jpg', caption: 'Pragmata - Pre-Orden', postUrl: 'https://www.instagram.com/p/DVV6c1Ljvc6/', span: '' },
  { src: '/images/ig/003-2026-02-28.jpg', caption: 'Pokemon Pokopia - Pre-Orden', postUrl: 'https://www.instagram.com/p/DVTPO8wjqBv/', span: '' },
  { src: '/images/ig/004-2026-02-05-a.jpg', caption: 'PS5 Slim - Ofertas', postUrl: 'https://www.instagram.com/p/DUY615plLQa/', span: '' },
  { src: '/images/ig/005-2026-02-05-a.jpg', caption: 'Nintendo Switch 2', postUrl: 'https://www.instagram.com/p/DUY6ZupFPjY/', span: 'sm:col-span-2 sm:row-span-2' },
  { src: '/images/ig/006-2026-02-05-a.jpg', caption: 'Xbox Series - Ofertas', postUrl: 'https://www.instagram.com/p/DUY5_UqFNRV/', span: '' },
  { src: '/images/ig/004-2026-02-05-f.jpg', caption: 'Accesorios PS5', postUrl: 'https://www.instagram.com/p/DUY615plLQa/', span: '' },
  { src: '/images/ig/005-2026-02-05-e.jpg', caption: 'Juegos Switch 2', postUrl: 'https://www.instagram.com/p/DUY6ZupFPjY/', span: '' },
]

// ─── Ticker Messages ───
export const tickerMessages = [
  'DELIVERY A TODO RD',
  'NUEVOS TITULOS CADA SEMANA',
  '231K+ SEGUIDORES EN INSTAGRAM',
  'OFERTAS DE ANIVERSARIO',
  'PRE-ORDENA Y RECIBE POSTER GRATIS',
  'JEEH GAMES STORE — LOS ALCARRIZOS',
]

// ─── Platform badge colors ───
export const platformColors = {
  'PS5': { bg: 'bg-blue-600', text: 'text-white' },
  'Switch 2': { bg: 'bg-red-600', text: 'text-white' },
  'Xbox': { bg: 'bg-green-600', text: 'text-white' },
}
