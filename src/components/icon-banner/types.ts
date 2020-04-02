export interface LogoBannerProps {
  heading: string;
  description: string;
  items: {
    node: {
      id: string;
      name?: string;
      colour?: string;
      icon?: {
        title?: string;
        file?: {
          url?: string;
        }
      }
    }
  }[]
}

export interface IconStyleProps {
  colour: string;
  name: string;
}
