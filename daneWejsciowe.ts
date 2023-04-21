import system_satelitarny from "./Interface/system_satelitarny.interface";

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

