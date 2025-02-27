export interface Product {
  id: string;
  artist: string;
  album: string;
  year: number;
  coverImage: string;
  description: string;
  sampleTrackUrl: string;
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
    sampleTrackUrl: 'https://open.spotify.com/embed/track/2TjdnqlpwOjhijHCwHCP2d',
  },
  {
    id: 'vinyl-03',
    artist: 'Glass Animals',
    album: 'Dreamland',
    year: 2020,
    coverImage:
      'https://mssadlt8nkffobic.public.blob.vercel-storage.com/dreamland-KxcV2bKUWHVppSafKMnCcJ2Mk5dQWi.jpg',
    description: 'A nostalgic journey through memories and personal experiences, blending electronic pop with psychedelic elements.',
    sampleTrackUrl: 'https://open.spotify.com/embed/track/2LiDZmGERLzjrtBTCofj2G',
  },
  {
    id: 'vinyl-04',
    artist: 'Flume',
    album: 'Palaces',
    year: 2022,
    coverImage:
      'https://mssadlt8nkffobic.public.blob.vercel-storage.com/palaces-JpuVePhXXyrBFDNeySpUoC987zjinK.jpg',
    description: 'An experimental electronic album featuring nature recordings and collaborations with various artists, creating a unique sonic landscape.',
    sampleTrackUrl: 'https://open.spotify.com/embed/track/6ew0ZB929NCf8zaA9SJmHb',
  },
  {
    id: 'vinyl-05',
    artist: 'Jamie xx',
    album: 'In Colour',
    year: 2015,
    coverImage:
      'https://mssadlt8nkffobic.public.blob.vercel-storage.com/in-colour-dO95XJyDuQ0Qq9hZ0nlhcytz3r5rRb.png',
    description: 'A vibrant solo debut mixing UK dance music styles with contemporary electronic production, featuring samples from rare vinyl records.',
    sampleTrackUrl: 'https://open.spotify.com/embed/track/0vduvDIA5KjiidpVFRJfpG',
  },
  {
    id: 'vinyl-06',
    artist: 'Fred again..',
    album: 'Actual Life 3',
    year: 2022,
    coverImage:
      'https://mssadlt8nkffobic.public.blob.vercel-storage.com/actual-life-nxjEpGP8rXTnMzg9M7SpyOmwyLuzcp.jpg',
    description: 'The third installment in the Actual Life series, documenting personal experiences through intimate electronic productions and vocal samples.',
    sampleTrackUrl: 'https://open.spotify.com/embed/track/3XmJ4yghm34AEFQL8iyC4N',
  },
  {
    id: 'vinyl-07',
    artist: 'Fred again..',
    album: 'Actual Life 2',
    year: 2021,
    coverImage:
      'https://mssadlt8nkffobic.public.blob.vercel-storage.com/Actual%20Life%202%20Vinyl%20Art-C11oupyJ3idL1QiYuQPU8ETuJT4RHe.jpeg',
    description: 'The second installment in the Actual Life series, capturing moments and emotions through innovative electronic soundscapes.',
    sampleTrackUrl: 'https://open.spotify.com/embed/track/4k6Uh1HXdht4kqv8e0mJ2H',
  },
  {
    id: 'vinyl-13',
    artist: 'Fred again..',
    album: 'Actual Life',
    year: 2021,
    coverImage:
      'https://mssadlt8nkffobic.public.blob.vercel-storage.com/actual-life-1-Y4mPa9X5U6IeJP7PduLtQbdlzqpuN0.jpg',
    description: 'The first installment in the Actual Life series, capturing moments and emotions through innovative electronic soundscapes.',
    sampleTrackUrl: 'https://open.spotify.com/embed/track/4k6Uh1HXdht4kqv8e0mJ2H',
  },
  {
    id: 'vinyl-08',
    artist: 'Jamie xx',
    album: 'In Waves',
    year: 2015,
    coverImage:
      'https://mssadlt8nkffobic.public.blob.vercel-storage.com/in-waves-rtyHLMNqzlAsqaVjLwlb5u5niIbOWq.jpg',
    description: 'An exploration of rhythmic complexity and sonic depth, blending UK dance music with immersive electronic soundscapes.',
    sampleTrackUrl: 'https://open.spotify.com/embed/track/0vduvDIA5KjiidpVFRJfpG',
  },
  {
    id: 'vinyl-09',
    artist: 'Massane',
    album: 'Another Dawn',
    year: 2021,
    coverImage:
      'https://mssadlt8nkffobic.public.blob.vercel-storage.com/another-dawn-r59SQpCK9OIPN8qucaguxoXsMF7eMi.jpeg',
    description: 'A melodic journey through deep house and progressive sounds, capturing the essence of dawn with emotive melodies.',
    sampleTrackUrl: 'https://open.spotify.com/embed/track/5k6Uh1HXdht4kqv8e0mJ2H',
  },
  {
    id: 'vinyl-10',
    artist: 'Ben Böhmer',
    album: 'Bloom',
    year: 2019,
    coverImage:
      'https://mssadlt8nkffobic.public.blob.vercel-storage.com/Ben%20Bohmer%20Bloom%20Album%20Cover-O0D0o7lLsF9JQz54fvs3rmqqaBsIQ6.jpeg',
    description: 'A lush and atmospheric album blending progressive house with ambient textures, creating a serene listening experience.',
    sampleTrackUrl: 'https://open.spotify.com/embed/track/1k6Uh1HXdht4kqv8e0mJ2H',
  },
  {
    id: 'vinyl-11',
    artist: 'Ben Böhmer',
    album: 'Begin Again',
    year: 2021,
    coverImage:
      'https://mssadlt8nkffobic.public.blob.vercel-storage.com/begin-again-Lln1dw4tNVCmDF2SNlhcA7nfS3uJHg.jpg',
    description: 'An introspective album exploring themes of renewal and hope, with a blend of electronic and acoustic elements.',
    sampleTrackUrl: 'https://open.spotify.com/embed/track/2k6Uh1HXdht4kqv8e0mJ2H',
  },
  {
    id: 'vinyl-12',
    artist: "Barry Can't Swim",
    album: 'When Will We Land?',
    year: 2023,
    coverImage:
      'https://mssadlt8nkffobic.public.blob.vercel-storage.com/When%20Will%20We%20Land%20Album%20Cover-HW43iHzJAKNuzAIbb5bLzXpLJjSSm8.jpg',
    description: 'A captivating album blending electronic and acoustic elements, exploring themes of uncertainty and hope.',
    sampleTrackUrl: 'https://open.spotify.com/embed/track/3k6Uh1HXdht4kqv8e0mJ2H',
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
