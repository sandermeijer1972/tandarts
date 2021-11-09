import React from "react";
import "./Day.css";
import AppointmentInDay from "./AppointmentInDay";

export default ({ appointments }) => {
  console.log("afspraken op een dag: ", appointments);
  const appointmentsSorted = appointments.sort(function (a, b) {
    return a.time - b.time;
  });
  console.log("afspraken op een dag gesorteerd: ", appointmentsSorted);
  const appointmentsJSX = appointmentsSorted.map(
    ({ time, patient, dentist, assistant }, index) => (
      <AppointmentInDay
        time={time}
        patient={patient}
        dentist={dentist}
        assistant={assistant}
        key={index}
      />
    )
  );
  return <ul className="dayview">{appointmentsJSX}</ul>;
};
