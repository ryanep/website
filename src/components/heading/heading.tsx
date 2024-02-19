interface HeadingProps {
  readonly text: string;
  readonly type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Heading = ({ text, type }: HeadingProps) => {
  return (
    <>
      {type === "h1" && <h1 className="text-4xl font-black">{text}</h1>}
      {type === "h2" && <h2 className="text-3xl font-black">{text}</h2>}
      {type === "h3" && <h3 className="text-2xl font-black">{text}</h3>}
      {type === "h4" && <h4 className="text-xl font-black">{text}</h4>}
      {type === "h5" && <h5 className="text-base font-black">{text}</h5>}
      {type === "h6" && <h6 className="text-sm font-black">{text}</h6>}
    </>
  );
};
