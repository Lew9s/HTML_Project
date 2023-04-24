window.onload = function () {
    function selectNumber(n) {
        var list = [];
        for (var i = 1; i <= n; i++) {
            var numbers = [];
            for (var j = 0; j < 8; j++) {
                var randomNum = Math.floor(Math.random() * 31);
                numbers.push(randomNum);
            }
            var numberString = numbers.join("-");
            list.push(numberString);
        }
        return list;
    }

    var result = document.querySelector('#lottery')
    var sel_one = document.querySelector('#select-one');
    var sel_five = document.querySelector('#select-five');
    var sel_ten = document.querySelector('#select-ten');

    sel_one.onclick = function () {
        var list = selectNumber(1);
        for (var i = 0; i < list.length; i++) {
            var option = document.createElement("option");
            option.text = list[i];
            result.add(option)
        }
        if (result.options.length > 0) {
            var selectedIndex = result.options.length - list.length;
            result.selectedIndex = selectedIndex;
        }
    }

    sel_five.onclick = function () {
        var list = selectNumber(5);
        for (var i = 0; i < list.length; i++) {
            var option = document.createElement("option");
            option.text = list[i];
            result.add(option)
        }
        if (result.options.length > 0) {
            var selectedIndex = result.options.length - list.length;
            result.selectedIndex = selectedIndex;
        }
    }

    sel_ten.onclick = function () {
        var list = selectNumber(10);
        for (var i = 0; i < list.length; i++) {
            var option = document.createElement("option");
            option.text = list[i];
            result.add(option)
        }
        if (result.options.length > 0) {
            var selectedIndex = result.options.length - list.length;
            result.selectedIndex = selectedIndex;
        }
    }

    var del = document.querySelector('#del')
    del.onclick = function () {
        var selectedOption = result.options[result.selectedIndex]
        if (selectedOption) {
            result.removeChild(selectedOption)
        } else {
            alert('请先选择列表项再删除')
        }
    }

    var del_all = document.querySelector('#del-all');
    del_all.onclick = function () {
        if (result.options.length > 0) {
            result.options.length = 0;
        } else {
            alert('请先选择列表项再删除')
        }
    }
}