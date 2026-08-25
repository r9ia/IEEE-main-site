import React from "react";
import styles from "./eventEvent.module.scss";

const EventContent = ({ name, date, image }) => {
    let imgSrc;
    try {
        imgSrc = require("./../../../../Assets/Images/events/" + image + ".jpg");
    } catch (err) {
        try {
            imgSrc = require("./../../../../Assets/Images/events/" + image + ".png");
        } catch (err2) {
            imgSrc = require("./../../../../Assets/Images/events/Workshops.jpg");
        }
}

    return (
        <>
            <div className={styles.eventCrop}>
                <div className={styles.darkGradient}></div>
                <img src={imgSrc} alt={name} className={styles.eventCropImg} />
            </div>

            <div className={styles.eventText}>
                <h3 className={styles.eventTextName}>{name}</h3>
                <p className={styles.eventTextDate}>{date}</p>
            </div>
        </>
    );
};

const EventEvent = ({ link, EventName, EventImage, EventDate, spread = false }) => (
    <>
        {link === undefined && (
            <div
                className={`${styles.event} ${spread && styles.spread}`}
                style={{ cursor: "default" }}
            >
                <EventContent name={EventName} image={EventImage} date={EventDate} />
            </div>
        )}

        {link && (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.event} ${styles.eventHover} ${
                    spread && styles.spread
                }`}
            >
                <EventContent name={EventName} image={EventImage} date={EventDate} />
            </a>
        )}
    </>
);

export default EventEvent;
