$(function () {
    var $t_fixed;
    var positionFlag = false;
    function PatchHeaders(e) {
        var $header = e.element.find(".dx-datagrid-headers").detach();
        var $panel = e.element.find(".dx-datagrid-header-panel").detach();
        $t_fixed = $("<div>");
        $t_fixed.append($panel);
        $t_fixed.append($header);
        $t_fixed.addClass("fixed-headers").prependTo(e.element.find(".dx-datagrid")[0]);
        if (positionFlag)
            $t_fixed.css("position", "fixed");
        $t_fixed.width(e.element.width());
    }

    $("#gridContainer").dxDataGrid({
        dataSource: generateData(20),
        customizeColumns: function (columns) {
            columns[0].width = 70;
        },
        searchPanel: {
            visible: true
        },
        loadPanel: {
            enabled: false
        },
        paging: {
            enabled: false
        },
        onContentReady: function (e) {
            PatchHeaders(e);
        }
    });
    $(window).resize(function () {
        $t_fixed.width($('#gridContainer').width());
    });
    $(document).scroll(function () {
        var grid = $('#gridContainer');
        if (!$t_fixed)
            return;
        if ($(this).scrollTop() >= grid.position().top && $(this).scrollTop() <= (grid.position().top + grid.height() - grid.find(".dx-datagrid-headers").height())) {
            positionFlag = true;
            $t_fixed.css("position", "fixed");
        }
        else {
            $t_fixed.css("position", "static");
            positionFlag = false
        }
    })
})