$(function() {
    $.get('/ci_db.json', function(data) {

        for (app_id in data) {
            var config = data[app_id];

            $("#" + app_id + "_dev").text(config["dev"]["build"]);
            $("#" + app_id + "_test").text(config["test"]["build"]);

            for (version_idx in config["pub"]) {
                var version = config["pub"][version_idx];
                var sortname = version.replace(".", "v");
               // var li_html = "<li class='list-group-item'><a href='https://fir.im/51offeri" + sortname + "'>" + version + "</a></li>"
               var li_html = "<li class='list-group-item'><a href='https://fir.im/51offeripub" + "'>" + version + "</a></li>"
                $("#" + app_id + "_pub").append(li_html);
            }
        };
    });
});
