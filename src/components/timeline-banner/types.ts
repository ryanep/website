export interface TimelineBannerProps {
  heading: string;
  description: string;
  items: {
    node: {
      id: string;
      name?: string;
      role?: string;
      startDate?: string;
      endDate?: string;
      icon?: {
        title?: string;
        file?: {
          url?: string;
        };
      };
    };
  }[];
}
