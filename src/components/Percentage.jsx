import React from "react";

const Percentage = () => {
  const Percentage = [
    {
      ratings: "100%",
      dsc: "average list growth forall paid plans in the first 30 days",
    },
    {
      ratings: "10%",
      dsc: "average list growth forall paid plans in the first 30 days",
    },
    {
      ratings: "40%",
      dsc: "average list growth forall paid plans in the first 30 days",
    },
    {
      ratings: "50%",
      dsc: "average list growth forall paid plans in the first 30 days",
    },
  ];
  return (
    <section>
      {Percentage.map((p) => (
        <div>
          <p>{p.ratings}</p>
          <p>{p.dsc}</p>
        </div>
      ))}
    </section>
  );
};

export default Percentage;
