import { FC } from "react";
import { buttonVariants } from "../ui/button";
import { Icons } from "./icons";
import MainNav from "./main-nav";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Button } from "../ui/button";
import ThemeToggle from "./theme-toggle";
import { useToast } from "../ui/use-toast";

const SiteHeader: FC = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();
  return (
    <header className=" w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </a>
            <a href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </a>
            <Button
              size="sm"
              variant="default"
              onClick={() => {
                setIsSubscribed(!isSubscribed);
                toast({
                  title: isSubscribed ? "Unsubscribed" : "Subscribed",
                  description: isSubscribed
                    ? "You are now unsubscribed"
                    : "You are now subscribed",
                });
              }}
            >
              {isSubscribed ? "Subscribed" : "Subscribe"}
            </Button>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
