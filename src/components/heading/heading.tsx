import { HeadingProps } from "./types";

export const Heading = ({ type, text }: HeadingProps) => {
  return (
    <>
      {type === "h1" && <h1 className="font-black text-4xl">{text}</h1>}
      {type === "h2" && <h2 className="font-black text-3xl">{text}</h2>}
      {type === "h3" && <h3 className="font-black text-2xl">{text}</h3>}
      {type === "h4" && <h4 className="font-black text-xl">{text}</h4>}
      {type === "h5" && <h5 className="font-black text-base">{text}</h5>}
      {type === "h6" && <h6 className="font-black text-sm">{text}</h6>}
    </>
  );
};
