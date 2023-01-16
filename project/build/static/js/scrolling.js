document.querySelectorAll('a[href-"a"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntroView({
            behavior: "smooth"
        })
    })
})