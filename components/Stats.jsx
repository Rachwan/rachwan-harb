"use client";
import CountUp from "react-countup";

const stats = [
  { num: 1, text: "Year Of Experience" },
  { num: 10, text: "Projects Completed" },
  { num: 6, text: "Technologies Mastered" },
  { num: 368, text: "Git Commits" },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="justify-center sm: flex flex-wrap gap-6">
          {stats.map((item, index) => {
            return (
              <div
                className="sm:flex-1 flex gap-4 items-center justify-center xl:justify-start w-1/2 xl:w-1/4"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
