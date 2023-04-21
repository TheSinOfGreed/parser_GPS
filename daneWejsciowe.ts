import system_satelitarny from "./Interface/system_satelitarny.interface";
import identyfikator_naglowka from "./Interface/indetyfikator_naglowka";

export const daneWejsciowe: string = 
`$GPRMC,183729,A,3907.356,N,12102.482,W,000.0,360.0,080301,015.5,E*6F
$GPRMB,A,,,,,,,,,,,,V*71
$GPGGA,183730,3907.356,N,12102.482,W,1,05,1.6,646.4,M,-24.1,M,,*75
$GPGSA,A,3,02,,,07,,09,24,26,,,,,1.6,1.6,1.0*3D
$GPGSV,2,1,08,02,43,088,38,04,42,145,00,05,11,291,00,07,60,043,35*71
$GPGSV,2,2,08,08,02,145,00,09,46,303,47,24,16,178,32,26,18,231,43*77
$PGRME,22.0,M,52.9,M,51.0,M*14
$GPGLL,3907.360,N,12102.481,W,183730,A*33
$PGRMZ,2062,f,3*2D
$PGRMM,WGS 84*06
$GPBOD,,T,,M,,*47
$GPRTE,1,1,c,0*07
$GPRMC,183731,A,3907.482,N,12102.436,W,000.0,360.0,080301,015.5,E*67
$GPRMB,A,,,,,,,,,,,,V*71`;

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

