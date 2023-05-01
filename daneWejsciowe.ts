import system_satelitarny from "./Interface/system_satelitarny.interface";
import identyfikator_naglowka from "./Interface/indetyfikator_naglowka.interface";

export const systemy_satelitarne: system_satelitarny[] = [
    {
        skrot: "GP",
        pelna_nazwa: "GPS"
    },
    {
        skrot: "GL",
        pelna_nazwa: "GLONGLASS"
    },
    {
        skrot: "GB",
        pelna_nazwa: "Beidou"
    },
    {
        skrot: "GA",
        pelna_nazwa: "Galileo"
    },
];

export const identyfikatory_naglowka: identyfikator_naglowka[] = [
    {
        skrot: "AAM",
        pelna_nazwa: "Waypoint Arrival Alarm"
      },
      {
        skrot: "ALM",
        pelna_nazwa: "Almanac data"
      },
      {
        skrot: "APA",
        pelna_nazwa: "Auto Pilot A sentence"
      },
      {
        skrot: "APB",
        pelna_nazwa: "Auto Pilot B sentence"
      },
      {
        skrot: "BOD",
        pelna_nazwa: "Bearing Origin to Destination"
      },
      {
        skrot: "BWC",
        pelna_nazwa: "Bearing using Great Circle route"
      },
      {
        skrot: "DTM",
        pelna_nazwa: "Datum being used"
      },
      {
        skrot: "GGA",
        pelna_nazwa: "Fix information"
      },
      {
        skrot: "GLL",
        pelna_nazwa: "Lat/Lon data"
      },
      {
        skrot: "GSA",
        pelna_nazwa: "Overall Satellite data"
      },
      {
        skrot: "GSV",
        pelna_nazwa: "Detailed Satellite data"
      },
      {
        skrot: "MSK",
        pelna_nazwa: "Send control for a beacon receiver"
      },
      {
        skrot: "MSS",
        pelna_nazwa: "Beacon receiver status information"
      },
      {
        skrot: "RMA",
        pelna_nazwa: "Recommended Loran data"
      },
      {
        skrot: "RMB",
        pelna_nazwa: "Recommended navigation data for gps"
      },
      {
        skrot: "RMC",
        pelna_nazwa: "Recommended minimum data for gps"
      },
      {
        skrot: "RTE",
        pelna_nazwa: "Route message"
      },
      {
        skrot: "VTG",
        pelna_nazwa: "Vector track an Speed over the Ground"
      },
      {
        skrot: "WCV",
        pelna_nazwa: "Waypoint closure velocity (Velocity Made Good)"
      },
      {
        skrot: "WPL",
        pelna_nazwa: "Waypoint information"
      },
      {
        skrot: "XTC",
        pelna_nazwa: "Cross track error"
      },
      {
        skrot: "XTE",
        pelna_nazwa: "Measured cross track error"
      },
      {
        skrot: "ZTG",
        pelna_nazwa: "Zulu (UTC) time and time to go (to destination)"
      },
      {
        skrot: "ZDA",
        pelna_nazwa: "Date and Time"
      }
];

