import system_satelitarny from "./Interface/system_satelitarny.interface";
import identyfikator_naglowka from "./Interface/indetyfikator_naglowka";

export const zestaw1: string = 
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

export const zestaw2: string = 
`$GPRMC,002454,A,3553.5295,N,13938.6570,E,0.0,43.1,180700,7.1,W,A*3F
$GPRMB,A,,,,,,,,,,,,A,A*0B
$GPGGA,002454,3553.5295,N,13938.6570,E,1,05,2.2,18.3,M,39.0,M,,*7F
$GPGSA,A,3,01,04,07,16,20,,,,,,,,3.6,2.2,2.7*35
$GPGSV,3,1,09,01,38,103,37,02,23,215,00,04,38,297,37,05,00,328,00*70
$GPGSV,3,2,09,07,77,299,47,11,07,087,00,16,74,041,47,20,38,044,43*73
$GPGSV,3,3,09,24,12,282,00*4D
$GPGLL,3553.5295,N,13938.6570,E,002454,A,A*4F
$GPBOD,,T,,M,,*47
$PGRME,8.6,M,9.6,M,12.9,M*15
$PGRMZ,51,f*30
$HCHDG,101.1,,,7.1,W*3C
$GPRTE,1,1,c,*37
$GPRMC,002456,A,3553.5295,N,13938.6570,E,0.0,43.1,180700,7.1,W,A*3D`;

export const daneWejsciowe2: string = 
`$GPGGA,123519,4807.038,N,01131.000,E,1,08,0.9,545.4,M,46.9,M,,*47
$GPGSA,A,3,04,05,,09,12,,,24,,,,,2.5,1.3,2.1*39
$GPGSV,2,1,08,01,40,083,46,02,17,308,41,12,07,344,39,14,22,228,45*75
$GPRMC,123519,A,4807.038,N,01131.000,E,022.4,084.4,230394,003.1,W*6A
$GPGLL,4916.45,N,12311.12,W,225444,A,*31
$GPVTG,054.7,T,034.4,M,005.5,N,010.2,K*33`;

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

