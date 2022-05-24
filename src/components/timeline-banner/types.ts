export interface TimelineBannerProps {
  heading: string;
  description: string;
  items: {
    node: {
      id: string;
      name?: string;
      companyName?: string;
      role?: string;
      startDate?: string;
      endDate?: string;
      colour?: string;
      icon?: {
        title?: string;
        file?: {
          url?: string;
        };
      };
    };
  }[];
}

export interface IconStyleProps {
  colour?: string;
}
