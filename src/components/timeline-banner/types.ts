export interface TimelineBannerProps {
  heading: string;
  description: string;
  items: {
    id: string;
    name: string;
    companyName: string;
    role: string;
    startDate: string;
    endDate: string;
    colour: string;
    icon: {
      alt: string;
      url: string;
    };
  }[];
}

export interface IconStyleProps {
  colour?: string;
}
