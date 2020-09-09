export class ArtworkData {
  accession_number: string;
  artworkid: string;
  createrid: string;
  departmentid: string;
  description: string;
  name: string;
  role: string;
  title: string;
  tombstone: string;
}

export class Artwork {
  artwork: ArtworkData[];
}
