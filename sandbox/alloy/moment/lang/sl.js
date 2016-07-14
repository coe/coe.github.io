function translate(number, withoutSuffix, key) {
    var result = number + " ";
    switch (key) {
      case "m":
        return withoutSuffix ? "ena minuta" : "eno minuto";

      case "mm":
        result += 1 === number ? "minuta" : 2 === number ? "minuti" : 3 === number || 4 === number ? "minute" : "minut";
        return result;

      case "h":
        return withoutSuffix ? "ena ura" : "eno uro";

      case "hh":
        result += 1 === number ? "ura" : 2 === number ? "uri" : 3 === number || 4 === number ? "ure" : "ur";
        return result;

      case "dd":
        result += 1 === number ? "dan" : "dni";
        return result;

      case "MM":
        result += 1 === number ? "mesec" : 2 === number ? "meseca" : 3 === number || 4 === number ? "mesece" : "mesecev";
        return result;

      case "yy":
        result += 1 === number ? "leto" : 2 === number ? "leti" : 3 === number || 4 === number ? "leta" : "let";
        return result;
    }
}

module.exports = {
    months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
    monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
    weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
    weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
    weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
    longDateFormat: {
        LT: "H:mm",
        L: "DD. MM. YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY LT",
        LLLL: "dddd, D. MMMM YYYY LT"
    },
    calendar: {
        sameDay: "[danes ob] LT",
        nextDay: "[jutri ob] LT",
        nextWeek: function() {
            switch (this.day()) {
              case 0:
                return "[v] [nedeljo] [ob] LT";

              case 3:
                return "[v] [sredo] [ob] LT";

              case 6:
                return "[v] [soboto] [ob] LT";

              case 1:
              case 2:
              case 4:
              case 5:
                return "[v] dddd [ob] LT";
            }
        },
        lastDay: "[včeraj ob] LT",
        lastWeek: function() {
            switch (this.day()) {
              case 0:
              case 3:
              case 6:
                return "[prejšnja] dddd [ob] LT";

              case 1:
              case 2:
              case 4:
              case 5:
                return "[prejšnji] dddd [ob] LT";
            }
        },
        sameElse: "L"
    },
    relativeTime: {
        future: "čez %s",
        past: "%s nazaj",
        s: "nekaj sekund",
        m: translate,
        mm: translate,
        h: translate,
        hh: translate,
        d: "en dan",
        dd: translate,
        M: "en mesec",
        MM: translate,
        y: "eno leto",
        yy: translate
    },
    ordinal: "%d.",
    week: {
        dow: 1,
        doy: 7
    }
};