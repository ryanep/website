export interface PersonalWorkBannerProps {
  description: string;
  heading: string;
  projects: {
    description: string;
    id: string;
    image: {
      alt: string;
      url: string;
    };
    name: string;
    url: string;
  }[];
}
