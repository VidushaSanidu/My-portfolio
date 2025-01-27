"use client";

import React, { useEffect, useRef } from "react";
import { animate } from "framer-motion";

const achievementsList = [
  {
    metric: "Projects",
    value: 6,
    postfix: "+",
  },
  {
    metric: "Users",
    value: 100,
    postfix: "+",
  },
  {
    metric: "Achievments",
    value: 7,
  },
  {
    metric: "Years",
    value: 3,
    postfix: "+",
  },
];

function Counter({ from, to }) {
  const ref = useRef();

  useEffect(() => {
    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        ref.current.textContent = value.toFixed(0);
      },
    });
    return () => controls.stop();
  }, [from, to]);

  return <p ref={ref} />;
}

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-12 xl:px-12">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <Counter from={0} to={achievement.value} />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
