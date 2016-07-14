function plural(word, num) {
    var forms = word.split("_");
    return 1 === num % 10 && 11 !== num % 100 ? forms[0] : num % 10 >= 2 && 4 >= num % 10 && (10 > num % 100 || num % 100 >= 20) ? forms[1] : forms[2];
}

function relativeTimeWithPlural(number, withoutSuffix, key) {
    var format = {
        mm: "хвилина_хвилини_хвилин",
        hh: "година_години_годин",
        dd: "день_дні_днів",
        MM: "місяць_місяці_місяців",
        yy: "рік_роки_років"
    };
    return "m" === key ? withoutSuffix ? "хвилина" : "хвилину" : "h" === key ? withoutSuffix ? "година" : "годину" : number + " " + plural(format[key], +number);
}

function monthsCaseReplace(m, format) {
    var months = {
        nominative: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),
        accusative: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_")
    }, nounCase = /D[oD]? *MMMM?/.test(format) ? "accusative" : "nominative";
    return months[nounCase][m.month()];
}

function weekdaysCaseReplace(m, format) {
    var weekdays = {
        nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
        accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
        genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
    }, nounCase = /(\[[ВвУу]\]) ?dddd/.test(format) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(format) ? "genitive" : "nominative";
    return weekdays[nounCase][m.day()];
}

function processHoursFunction(str) {
    return function() {
        return str + "о" + (11 === this.hours() ? "б" : "") + "] LT";
    };
}

module.exports = {
    months: monthsCaseReplace,
    monthsShort: "січ_лют_бер_кві_тра_чер_лип_сер_вер_жов_лис_гру".split("_"),
    weekdays: weekdaysCaseReplace,
    weekdaysShort: "нед_пон_вів_срд_чет_птн_суб".split("_"),
    weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
    longDateFormat: {
        LT: "HH:mm",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY р.",
        LLL: "D MMMM YYYY р., LT",
        LLLL: "dddd, D MMMM YYYY р., LT"
    },
    calendar: {
        sameDay: processHoursFunction("[Сьогодні "),
        nextDay: processHoursFunction("[Завтра "),
        lastDay: processHoursFunction("[Вчора "),
        nextWeek: processHoursFunction("[У] dddd ["),
        lastWeek: function() {
            switch (this.day()) {
              case 0:
              case 3:
              case 5:
              case 6:
                return processHoursFunction("[Минулої] dddd [").call(this);

              case 1:
              case 2:
              case 4:
                return processHoursFunction("[Минулого] dddd [").call(this);
            }
        },
        sameElse: "L"
    },
    relativeTime: {
        future: "за %s",
        past: "%s тому",
        s: "декілька секунд",
        m: relativeTimeWithPlural,
        mm: relativeTimeWithPlural,
        h: "годину",
        hh: relativeTimeWithPlural,
        d: "день",
        dd: relativeTimeWithPlural,
        M: "місяць",
        MM: relativeTimeWithPlural,
        y: "рік",
        yy: relativeTimeWithPlural
    },
    ordinal: function(number, period) {
        switch (period) {
          case "M":
          case "d":
          case "DDD":
          case "w":
          case "W":
            return number + "-й";

          case "D":
            return number + "-го";

          default:
            return number;
        }
    },
    week: {
        dow: 1,
        doy: 7
    }
};