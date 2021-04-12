import React from "react";
import Day from "./Day";
import { useTranslation } from "gatsby-plugin-react-i18next";

const TourMain = () => {
    const { t } = useTranslation();
    return (
        <div className="w-100 d-flex justify-content-center align-items-center flex-column">
            <h1 className="mt-5 mb-3">Itinerario</h1>
            <ul className="timeline w-65">
                <Day day={"DAY 1"} paragraph={t(`main-day1`)} />
                <Day day={"DAY 2"} paragraph={t(`main-day2`)} />
                <Day day={"DAY 3"} paragraph={t(`main-day3`)} />
                <Day day={"DAY 4"} paragraph={t(`main-day4`)} />
                <Day day={"DAY 5"} paragraph={t(`main-day5`)} />
                <Day day={"DAY 6"} paragraph={t(`main-day6`)} />
                <Day day={"DAY 7"} paragraph={t(`main-day7`)} />
                <Day day={"DAY 8"} paragraph={t(`main-day8`)} />
                <Day day={"DAY 9"} paragraph={t(`main-day9`)} />
                <Day day={"DAY 10"} paragraph={t(`main-day10`)} />
                <Day day={"DAY 11"} paragraph={t(`main-day11`)} />
                <Day day={"DAY 12"} paragraph={t(`main-day12`)} />
                <Day day={"DAY 13"} paragraph={t(`main-day13`)} />
                <Day day={"DAY 14"} paragraph={t(`main-day14`)} />
                <Day day={"DAY 15"} paragraph={t(`main-day15`)} />
            </ul>
        </div>
    );
};

export default TourMain;
