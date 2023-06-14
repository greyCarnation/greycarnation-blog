export interface ProjectObject {
  title: string
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
    title: 'softly',
    description: '',
    trackList: ['', ''],
    imageURL: 'https://imagedelivery.net/mKjOxek3QZwwBWUu82qeLg/d0fc2ab9-05e5-4470-d050-3fb871e06900/public',
    releaseDate: '05.05.2023',
    link: {
      audiomack: 'https://audiomack.com/greycarnation/album/softly',
      bandcamp: 'https://greycarnation.bandcamp.com/album/softly',
      soundcloud: 'https://soundcloud.com/greycarnation/sets/softly',
      youtube: 'https://youtu.be/3iorO6sb7Iw',
    },
  },
  {
    title: 'Figmentum',
    description: '',
    trackList: ['', ''],
    imageURL: 'https://imagedelivery.net/mKjOxek3QZwwBWUu82qeLg/5f20fea0-d87d-4cca-8ea9-f8307ad32d00/public',
    releaseDate: '06.16.2023',
    link: {
      audiomack: 'https://audiomack.com/greycarnation/album/figmentum',
      bandcamp: 'https://greycarnation.bandcamp.com/album/figmentum',
      soundcloud: 'https://soundcloud.com/greycarnation/sets/figmentum',
      youtube: '',
    },
  },
]
