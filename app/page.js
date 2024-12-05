import DownloadButton from "@/components/DownloadButton";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";

export const metadata = {
  title: "Home - Rachwan Harb | Front-End Software Engineer",
  description:
    "Welcome to the portfolio of Rachwan Harb, a Front-End Software Engineer specializing in creating dynamic and responsive web applications.",
};

const Home = () => {
  const iconStyles =
    "w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500";

  return (
    <main className="h-full">
      <section className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-40 lg:pb-40 xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center lg:text-left order-2">
            <span className="text-xl">Front-End Software Engineer</span>
            <h1 className="h1 mb-6">
              Hello, I'm <br />{" "}
              <span className="text-accent">Rachwan Harb</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and am proficient
              in various front-end technologies such as React.js, Next.js, Redux
              and more. With a solid understanding of back-end development using
              Node.js.
            </p>
            {/* button and social */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <DownloadButton />
              <div className="mb-8 lg:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles={iconStyles} />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 mt-16 mb-12 lg:mt-0 lg:mb-0 lg:order-none">
            <Photo />
          </div>
        </div>
        <Stats />
      </section>
    </main>
  );
};

export default Home;
