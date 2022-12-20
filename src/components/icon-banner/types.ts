export interface LogoBannerProps {
  heading: string;
  description: string;
  items: {
    id: string;
    name: string;
    colour: string;
    icon: {
      alt: string;
      url: string;
    };
  }[];
}
