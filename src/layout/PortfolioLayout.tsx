import type { ReactNode } from "react";
import Navbar from "../components/navbar/navbar";
import Titlecard from "../components/titlecard/titlecard";

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-mainbackground flex flex-col text-lightshade">
      <Navbar />

      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        <div className="md:w-[35vw] md:sticky top-[10vh] md:self-start md:max-h-[20vh] px-4 md:p-4">
          <Titlecard />
        </div>

        <div className="flex flex-col md:w-[60vw] p-4">
          {children}
        </div>
      </div>
    </div>
  );
}