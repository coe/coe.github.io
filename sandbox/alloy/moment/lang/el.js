module.exports = {
    monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
    monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
    months: function(momentToFormat, format) {
        return /D/.test(format.substring(0, format.indexOf("MMMM"))) ? this._monthsGenitiveEl[momentToFormat.month()] : this._monthsNominativeEl[momentToFormat.month()];
    },
    monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
    weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
    weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
    weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
    meridiem: function(hours, minutes, isLower) {
        return hours > 11 ? isLower ? "μμ" : "ΜΜ" : isLower ? "πμ" : "ΠΜ";
    },
    longDateFormat: {
        LT: "h:mm A",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY LT",
        LLLL: "dddd, D MMMM YYYY LT"
    },
    calendarEl: {
        sameDay: "[Σήμερα {}] LT",
        nextDay: "[Αύριο {}] LT",
        nextWeek: "dddd [{}] LT",
        lastDay: "[Χθες {}] LT",
        lastWeek: "[την προηγούμενη] dddd [{}] LT",
        sameElse: "L"
    },
    calendar: function(key, mom) {
        var output = this._calendarEl[key], hours = mom && mom.hours();
        return output.replace("{}", 1 === hours % 12 ? "στη" : "στις");
    },
    relativeTime: {
        future: "σε %s",
        past: "%s πριν",
        s: "δευτερόλεπτα",
        m: "ένα λεπτό",
        mm: "%d λεπτά",
        h: "μία ώρα",
        hh: "%d ώρες",
        d: "μία μέρα",
        dd: "%d μέρες",
        M: "ένας μήνας",
        MM: "%d μήνες",
        y: "ένας χρόνος",
        yy: "%d χρόνια"
    },
    ordinal: function(number) {
        return number + "η";
    },
    week: {
        dow: 1,
        doy: 4
    }
};