export interface PersonalWorkBannerProps {
  heading: string;
  description: string;
  projects: {
    node: {
      id: string;
      name?: string;
      description?: string;
      url?: string;
      image?: {
        title?: string;
        file?: {
          url?: string;
        };
      };
    };
  }[];
}
