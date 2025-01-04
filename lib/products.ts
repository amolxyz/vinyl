export interface Product {
  id: string;
  artist: string;
  album: string;
  year: number;
  coverImage: string;
  description: string;
}

// Vinyl cover images are stored in a public Vercel Blob storage bucket
export const products: Product[] = [
  {
    id: 'vinyl-02',
    artist: 'Pink Floyd',
    album: 'The Dark Side',
    year: 1973,
    coverImage:
      'https://mssadlt8nkffobic.public.blob.vercel-storage.com/the-dark-side-uqA3Bh9XjAZ5QIfWGWvFVivNcUtXAR.jpg',
    description: 'A groundbreaking concept album exploring themes of conflict, greed, time, and mental health. One of the best-selling albums of all time.',
  },
  {
    id: 'vinyl-03',
    artist: 'Glass Animals',
    album: 'Dreamland',
    year: 2020,
    coverImage:
      'https://mssadlt8nkffobic.public.blob.vercel-storage.com/dreamland-KxcV2bKUWHVppSafKMnCcJ2Mk5dQWi.jpg',
    description: 'A nostalgic journey through memories and personal experiences, blending electronic pop with psychedelic elements.',
  },
  {
    id: 'vinyl-04',
    artist: 'Flume',
    album: 'Palaces',
    year: 2022,
    coverImage:
      'https://mssadlt8nkffobic.public.blob.vercel-storage.com/palaces-JpuVePhXXyrBFDNeySpUoC987zjinK.jpg',
    description: 'An experimental electronic album featuring nature recordings and collaborations with various artists, creating a unique sonic landscape.',
  },
  {
    id: 'vinyl-05',
    artist: 'Jamie xx',
    album: 'In Colour',
    year: 2015,
    coverImage:
      'https://mssadlt8nkffobic.public.blob.vercel-storage.com/in-colour-dO95XJyDuQ0Qq9hZ0nlhcytz3r5rRb.png',
    description: 'A vibrant solo debut mixing UK dance music styles with contemporary electronic production, featuring samples from rare vinyl records.',
  },
  {
    id: 'vinyl-06',
    artist: 'Fred again..',
    album: 'Actual Life 3',
    year: 2022,
    coverImage:
      'https://mssadlt8nkffobic.public.blob.vercel-storage.com/actual-life-nxjEpGP8rXTnMzg9M7SpyOmwyLuzcp.jpg',
    description: 'The third installment in the Actual Life series, documenting personal experiences through intimate electronic productions and vocal samples.',
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
