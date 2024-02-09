function newsList(t, year, num, target) {
    //CSVファイルの読み込み
    var csv = "";
    if (t == "release") {
        csv = "/news/release.csv";
    } else {
        csv = "/news/update.csv";
    }
    var csvList = [];
    $.ajax({
        type: "GET",
        url: csv,
        cashe: false,
        dataType: "text",
        async: false,
        success: function(data) {
            var tempArray1 = data.split("\n");
            $.each(tempArray1, function(i, value) {
                if (value != "") {
                    csvList.push(value.split(","));
                }
            });
            $.each(csvList, function(i, v) {
                var d = toDate(v[0], "/");
                csvList[i].push(d);
            });
            dispalyNews(csvList, year, num);
        }
    });
    //日付フォーマットを整える
    function toDate(str, delim) {
        var arr = str.split(delim);
        var d = new Date(arr[0], arr[1] - 1, arr[2]);
        return formatDate(d, "yyyy/MM/dd");
    }
    function formatDate(date, format) {
        format = format.replace(/yyyy/g, date.getFullYear());
        format = format.replace(/MM/g, ("0" + (date.getMonth() + 1)).slice(-2));
        format = format.replace(/dd/g, ("0" + date.getDate()).slice(-2));
        format = format.replace(/HH/g, ("0" + date.getHours()).slice(-2));
        format = format.replace(/mm/g, ("0" + date.getMinutes()).slice(-2));
        format = format.replace(/ss/g, ("0" + date.getSeconds()).slice(-2));
        format = format.replace(/SSS/g, ("00" + date.getMilliseconds()).slice(-3));
        return format;
    }
    //ニュースの表示
    function dispalyNews(csvList, year) {
        var html = "";
        var htmln = "";
        var strCombRegex = year;
        var regexp = new RegExp(strCombRegex);
        if (year == void 0) {
            $.each(csvList, function (i, v) {
                if (num == void 0) {
                    num = 9999;
                }
                if (i < num) {
                    html += makeNewsHtml(v);
                }
            });
        } else {
            $.each(csvList, function (i, v) {
                if (v[0].match(regexp)) {
                    //var a = v[2].toString();
                    if (num == void 0) {
                        num = 9999;
                    }
                    if (i < num) {
                        html += makeNewsHtml(v);
                    }
                }
            });
        }


        htmln = '<ul class="p-news-list">' + html + "</ul>";
        if (target == void 0) {
            $(".l-maincts-news").append(htmln);
        } else {
            $(target).append(htmln);
        }
    }

    function makeNewsHtml(v) {
        return '<li class="p-news-list__itm"><div class="p-news-list__itm__hdg u-flex--vcenter"><p class="c-info__date">' +
            v[0] +
            '</p><!-- <ul class="c-txticonlist"><li class="c-txticonlist__item" ><span class="c-txt-icon__var r-txticon-blue u-roboto">IR</span></li ></ul > --></div><a class="p-news-list__link" href="' +
            v[2] +
            '" ' +
            (v[2].match(/^http/) !== null ? 'target="_blank"': '') +
            '>' +
            v[1] +
            '</a></li>';
    }

}