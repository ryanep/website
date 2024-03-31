import NextImage from "next/image";

interface ImageProps {
  readonly alt: string;
  readonly className: string;
  readonly height?: number;
  readonly src: string;
  readonly width?: number;
}

export const Image = ({ alt, className, height, src, width }: ImageProps) => {
  return (
    <NextImage
      alt={alt}
      className={className}
      height={height}
      src={src}
      width={width}
    />
  );
};
