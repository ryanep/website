import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { follow: false, index: false },
  title: "404 - Page not found",
};

export const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Page not found</h1>
    </div>
  );
};

export default NotFoundPage;
