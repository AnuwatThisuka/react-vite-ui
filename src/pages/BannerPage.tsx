import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/common/icons";
const Banner = () => {
  return (
    <>
      <section
        id="hero"
        className="container flex h-full flex-col items-center gap-6 md:py-10"
      >
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-2 text-center">
            <h1 className="text-6xl font-extrabold">
              An example app built using React,Shadcn/ui ,TailwindCSS
              ,TypeScript. 🚀
            </h1>
            <p className="text-lg text-muted-foreground">
              Meet the new standard for modern software development. Streamline
              issues, sprints, and product roadmaps.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/login"
              rel="noreferrer"
              className={buttonVariants({ variant: "default" })}
            >
              Get Started
            </Link>
            <Link
              target="_blank"
              to="/login"
              rel="noreferrer"
              className={buttonVariants({ variant: "outline" })}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="container flex h-full flex-col items-center gap-6 md:py-10"
      >
        <div className="flex max-w-xl flex-col items-center gap-2 text-center">
          <h2 className="text-6xl font-extrabold">Features</h2>
          <p className="text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            eos facilis ducimus modi animi ab quo eligendi rem similique non.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {new Array(6).fill("").map((_, i) => (
            <Card key={i} className="w-[300px]">
              <CardHeader>
                <CardTitle>
                  <Icons.logo className="my-3 h-10 w-10" />
                  Next.js 13
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Banner;
