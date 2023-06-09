interface SpacerProps {
  size: "large" | "medium" | "small";
}

export const Spacer = ({ size }: SpacerProps) => {
  return (
    <>
      {size === "small" && <div className="h-3" />}
      {size === "medium" && <div className="h-6" />}
      {size === "large" && <div className="h-10" />}
    </>
  );
};
