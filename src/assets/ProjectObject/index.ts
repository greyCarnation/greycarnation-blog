export interface ProjectObject {
  name: string
  description: string
  trackList: string[]
  imageURL: string | string[]
  releaseDate: string | string[]
  link: StreamingLink
}
export interface StreamingLink {
  audiomack: string
  bandcamp: string
  soundcloud: string
  youtube: string
}
export const Projects: ProjectObject[] = [
  {
    name: 'softly',
    description: '',
    trackList: ['', ''],
    imageURL: '',
    releaseDate: '05.05.2022',
    link: {
      audiomack: '',
      bandcamp: 'https://greycarnation.bandcamp.com/album/softly',
      soundcloud: 'https://soundcloud.com/greycarnation/sets/softly',
      youtube: '',
    },
  },
  {
    name: 'no2',
    description: '',
    trackList: ['', ''],
    imageURL: '',
    releaseDate: '?',
    link: {
      audiomack: '',
      bandcamp: 'https://greycarnation.bandcamp.com/album/???',
      soundcloud: 'https://soundcloud.com/greycarnation/sets/???',
      youtube: '',
    },
  },
]
