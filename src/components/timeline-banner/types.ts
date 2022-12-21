export interface TimelineBannerProps {
  description: string;
  heading: string;
  items: {
    colour: string;
    companyName: string;
    endDate: string;
    icon: {
      alt: string;
      url: string;
    };
    id: string;
    name: string;
    role: string;
    startDate: string;
  }[];
}

export interface IconStyleProps {
  colour?: string;
}
