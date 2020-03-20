import * as moment from 'moment';

moment.locale('es-my-settings', {
  relativeTime: {
    future: 'en %s',
    past: '%s',
    s: 'unos seg',
    ss: '%d seg',
    m: 'un min',
    mm: '%d min',
    h: 'una hr',
    hh: '%d hr',
    d: 'un día',
    dd: '%d días',
    M: 'un mes',
    MM: '%d meses',
    y: 'un año',
    yy: '%d años',
  },
});
