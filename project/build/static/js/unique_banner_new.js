$(".tab1").prop("checked", true);

for (let i = 2; i < 4; i++) {
    var tab = ".tab" + i;
    $(tab).prop("checked", false);
}

function setfalse(count) {
    for (let j = count + 1; j < 4; j++) {
        let tab = ".tab" + j;
        $(tab).prop("checked", false);
    }
}

for (let i = 1; i < 7; i++) {
    var step = ".st" + i;
    $(step).click(function () {
        $(".step" + i).prop("checked", true);
        for (let j = i + 1; j < 7; j++) {
            let nextstep = step.slice(0, -1) + j;
            $(nextstep).prop("checked", false);
        }
        setfalse(i);
    })
}
