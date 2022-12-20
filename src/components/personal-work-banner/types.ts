export interface PersonalWorkBannerProps {
  heading: string;
  description: string;
  projects: {
    id: string;
    name: string;
    description: string;
    url: string;
    image: {
      url: string;
      alt: string;
    };
  }[];
}
