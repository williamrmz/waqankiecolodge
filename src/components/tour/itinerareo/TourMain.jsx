import React from "react";
import Day from "./Day";
import { useTranslation } from "gatsby-plugin-react-i18next";

const TourMain = () => {
    const { t } = useTranslation();
    return (
        <div className="w-100 d-flex justify-content-center align-items-center flex-column">
            <h1 className="mt-5 mb-3">Itinerario</h1>
            <ul className="timeline w-65">
                <Day day={"DAY 0"} paragraph={t(`main-day0`)} site={"Hotel Rio Cumbaza-Tarapoto."} />
                <Day day={"DAY 1"} paragraph={t(`main-day1`)} site={"Waqanki ecolodge-Moyobamba."} />
                <Day day={"DAY 2"} paragraph={t(`main-day2`)} site={"Waqanki ecolodge-Moyobamba."} />
                <Day day={"DAY 3"} paragraph={t(`main-day3`)} site={"Waqanki ecolodge-Moyobamba."} />
                <Day day={"DAY 4"} paragraph={t(`main-day4`)} site={"Waqanki ecolodge-Moyobamba."} />
                <Day day={"DAY 5"} paragraph={t(`main-day5`)} site={"Fundo Alto Nieva lodge."} />
                <Day day={"DAY 6"} paragraph={t(`main-day6`)} site={"Fundo Alto Nieva lodge."} />
                <Day day={"DAY 7"} paragraph={t(`main-day7`)} site={"Owlet Lodge-Abra Patricia."} />
                <Day day={"DAY 8"} paragraph={t(`main-day8`)} site={"Owlet Lodge-Abra Patricia."} />
                <Day day={"DAY 9"} paragraph={t(`main-day9`)} site={"Hotel Las Brisas-Pomacochas."} />
                <Day day={"DAY 10"} paragraph={t(`main-day10`)} site={"Hotel Las Brisas-Pomacochas."} />
                <Day day={"DAY 11"} paragraph={t(`main-day11`)} site={"Hotel Prim´s-Jaen."} />
                <Day day={"DAY 12"} paragraph={t(`main-day12`)} site={"Hotel Inti-chiclayo."} />
                <Day day={"DAY 13"} paragraph={t(`main-day13`)} site={"Chaparri lodge-lambayeque."} />
                <Day day={"DAY 14"} paragraph={t(`main-day14`)} site={"Chaparri lodge-lambayeque."} />
                <Day day={"DAY 15"} paragraph={t(`main-day15`)} site={"Transfer to the Airport in Chiclayo."} />
            </ul>
        </div>
    );
};

export default TourMain;
