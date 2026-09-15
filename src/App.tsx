interface PhotoItem {
  id: number;
  title: string;
  category: string;
  url: string;
  objectPosition?: string;
}

const photos: PhotoItem[] = [
  // Row 1
  {
    id: 1,
    title: 'Player Photo',
    category: 'Athlete',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsKgvjomKY-cSFUXbL-aOwvKM9vdIyup3UU7jR1hY-zQ&s=10',
    objectPosition: '65% center',
  },
  {
    id: 2,
    title: 'Brian Rodríguez',
    category: 'Athlete',
    url: 'https://www.shutterstock.com/editorial/image-editorial/MaTfccz1M0DeY322MjQ2OTI=/brian-rodriguez-7-america-celebrates-after-scoring-440nw-17128228s.jpg',
  },
  {
    id: 3,
    title: 'French Bulldog',
    category: 'Pets',
    url: 'https://fsn1.your-objectstorage.com/ssmmedia/breeds/mtb-2026/french-bulldog-card-daafc1a7.jpg',
  },
  // Row 2
  {
    id: 4,
    title: 'LA Lakers',
    category: 'Sports',
    url: '/images/lakers.jpg',
  },
  {
    id: 5,
    title: 'Las Vegas Raiders',
    category: 'Sports',
    url: 'https://images.footballfanatics.com/las-vegas-raiders/las-vegas-raiders-23-led-retro-logo-round-wall-sign_ss5_p-200032570+pv-3+u-41u3yzzdt9bra1iglzt8+v-tohfsux7fn50npetvzoz.jpg?_hv=2&w=1018',
  },
  {
    id: 6,
    title: 'San Francisco',
    category: 'Travel',
    url: '/images/alcatraz.jpg',
  },
  // Row 3
  {
    id: 7,
    title: 'Hawaii',
    category: 'Travel',
    url: '/images/hawaii.jpg',
  },
  {
    id: 8,
    title: 'Rio de Janeiro',
    category: 'Travel',
    url: '/images/rio.jpg',
    objectPosition: 'right center',
  },
  {
    id: 9,
    title: 'Coastal Cliffs',
    category: 'Travel',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&h=600&q=80',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Photo Gallery
          </h1>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            A 3-row grid featuring high-resolution placeholder images with uniform dimensions.
          </p>
        </header>

        {/* 3-Row Photo Grid (3 items per row on desktop/tablet) */}
        <div
          id="photo-grid"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              id={`photo-card-${photo.id}`}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition duration-200 flex flex-col"
            >
              {/* Uniform Dimension Image Container */}
              <div className="relative aspect-square w-full bg-slate-100 overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.title}
                  style={{ objectPosition: photo.objectPosition || 'center' }}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium rounded-lg">
                  Row {Math.floor(index / 3) + 1}
                </span>
              </div>

              {/* Title & Caption */}
              <div className="p-4 flex flex-col flex-1 justify-between gap-1">
                <h2 className="text-sm font-semibold text-slate-800 truncate group-hover:text-blue-600 transition">
                  {photo.title}
                </h2>
                <span className="text-xs text-slate-400">
                  {photo.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
