    var provice_arr = ['请选择省份','山东省','陕西省','湖南省'];
    var arr_city=[
        ["请选择城市/地区"],
        ["中关村","海淀区","朝阳区","昌平区","丰台区","大兴区"],
        ["宝坻区","浦东新区","长宁区","徐汇区","虹口区","宝山区"],
        ["和平区","河东区","河西区","塘沽区","大港区","北辰区"],
        ["郑州市","洛阳市","商丘市","开封市","安阳市","濮阳市"],
        ["济南市","青岛市","烟台市","德州市"],
        ["石家庄","菏泽市","唐山市"],
    ];
    function init() {
    var provice  = document.form1.province;
    provice.style.width = 150 +"px";
    var city = document.form1.city;
    city.style.width = 150 +"px";
        provice.length = provice_arr.length;
    for(var i = 0;i<=provice_arr.length;i++){
        provice.options[i].text = provice_arr[i];
        provice.options[i].value = provice_arr[i];
    }
    var index = 0;
    provice.selectedIndex = index;
        city.length = arr_city[index].length;
    for(var j = 0; j <= arr_city[index].length;j++){
        city.options[j] .text = arr_city[index][j];
        city.options[j].text = arr_city[index][j];
    }
    }
    function change(num) {
        var city = document.form1.city;
        city.length = 0;
        city.length = arr_city[num].length;
        for(var i = 0; i<arr_city[num].length;i++){
            city.options[i].text = arr_city[num][i];
            city.options[i].value = arr_city[num][i];
        }
    }