$(".step1").prop("checked", true);

for (let i = 2; i < 7; i++) {
    var step = ".step" + i;
    $(step).prop("checked", false);
}

function setfalse(count) {
    for (let j = count + 1; j < 7; j++) {
        let step = ".step" + j;
        $(step).prop("checked", false);
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


window.addEventListener('scroll', function() {
    var target = document.querySelector('#process_main');
    var targetPos = target.getBoundingClientRect().top + window.pageYOffset;
    var scrollPos = window.scrollY + window.innerHeight;
    if (scrollPos >= targetPos) {
      document.querySelector('.process_loading').classList.add('show');
    }
  });