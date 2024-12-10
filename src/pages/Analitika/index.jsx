import React from "react";
import StatistikBox from "../../components/StatistikBox";
import AdminImg from "../../assets/icons/icons8-police-100.png";
import Bachalor from "../../assets/icons/icons8-bachelor-64.png"
import Team from "../../assets/icons/icons8-users-100.png"

const Analitika = () => {
    const dataStat = [
        {
            id: 1,
            name: "Adminlar",
            numbers: 7,
            color: "#80808080",
            icon: AdminImg,
            unit: "ta",
        },
        {
            id: 2,
            name: "Tyutorlar",
            numbers: 29,
            color: "#80808080",
            icon: Bachalor,
            unit: "ta",
        },
        {
            id: 3,
            name: "Top 6 talik",
            numbers: 18,
            color: "#00FF0080",
            icon: Team,
            unit: "%",
        },
        {
          id: 4,
          name: "O'rta",
          numbers: 68,
          color: "#ffad3180",
          icon: Team,
          unit: "%",
      },
      {
        id: 5,
        name: "Eng pas 6 talik",
        numbers: 24,
        color: "#FF000080",
        icon: Team,
        unit: "%",
    },
    ];
    return (
        <div className="p-2">
            <div className="flex flex-wrap justify-center items-center gap-3 my-12">
                {dataStat.map((data) => (
                    <StatistikBox key={data.id} data={data} />
                ))}
            </div>
        </div>
    );
};

export default Analitika;
