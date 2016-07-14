module.exports = {
    months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
    monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
    weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
    weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
    weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
    longDateFormat: {
        LT: "HH.mm",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY [pukul] LT",
        LLLL: "dddd, D MMMM YYYY [pukul] LT"
    },
    meridiem: function(hours) {
        return 11 > hours ? "pagi" : 15 > hours ? "tengahari" : 19 > hours ? "petang" : "malam";
    },
    calendar: {
        sameDay: "[Hari ini pukul] LT",
        nextDay: "[Esok pukul] LT",
        nextWeek: "dddd [pukul] LT",
        lastDay: "[Kelmarin pukul] LT",
        lastWeek: "dddd [lepas pukul] LT",
        sameElse: "L"
    },
    relativeTime: {
        future: "dalam %s",
        past: "%s yang lepas",
        s: "beberapa saat",
        m: "seminit",
        mm: "%d minit",
        h: "sejam",
        hh: "%d jam",
        d: "sehari",
        dd: "%d hari",
        M: "sebulan",
        MM: "%d bulan",
        y: "setahun",
        yy: "%d tahun"
    },
    week: {
        dow: 1,
        doy: 7
    }
};