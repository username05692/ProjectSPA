
export interface Track {
  id: number;
  title: string;
  artist: string;
  genre: string;
  duration: number;
  releaseYear: number;
  albumArtUrl: string;
  isTop?: boolean;
}
