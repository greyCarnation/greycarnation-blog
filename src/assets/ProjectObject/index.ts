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
export const project: ProjectObject[] = [
  {
    name: 'testProject01',
    description: 'testDescription01',
    trackList: ['', ''],
    imageURL: '',
    releaseDate: '',
    link: {
      audiomack: '',
      bandcamp: '',
      soundcloud: '',
      youtube: '',
    },
  },
]
