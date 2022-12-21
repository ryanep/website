export interface LogoBannerProps {
  description: string;
  heading: string;
  items: {
    colour: string;
    icon: {
      alt: string;
      url: string;
    };
    id: string;
    name: string;
  }[];
}
