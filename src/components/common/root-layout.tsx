import { FC } from "react";
import SiteHeader from "./site-header";
import { Outlet } from "react-router-dom";
import { useWindowSize } from "@/hooks/use-window-size";

const RootLayout: FC = () => {
  const { height: windowHeight } = useWindowSize();
  return (
    <div
      className={`relative flex flex-col h-[${windowHeight}px]  overflow-hidden`}
    >
      <SiteHeader />
      <div
        className={`box-border h-[calc(${windowHeight}px-4rem-2rem-1px)] overflow-auto`}
      >
        <Outlet />
      </div>
      <div className="flex h-8 items-center justify-center border-t ">
        <span className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()}{" "}
          <a href="www.anuwat.io" target="_blank" rel="noopener noreferrer">
            Anuwat Thisuka
          </a>
        </span>
      </div>
    </div>
  );
};

export default RootLayout;
