
; /* Start:"a:4:{s:4:"full";s:84:"/bitrix/components/sprint.editor/blocks/templates/.default/_script.js?16919915241048";s:6:"source";s:69:"/bitrix/components/sprint.editor/blocks/templates/.default/_script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* Общие скрипты для блоков */

/*accordion*/
document.addEventListener("DOMContentLoaded", function (e) {
    var acc = document.getElementsByClassName("sp-accordion");
    for (var accIndex = 0; accIndex < acc.length; accIndex++) {
        if (!acc[accIndex].classList.contains('sp-accordion__initialized')) {
            acc[accIndex].classList.add('sp-accordion__initialized');
            var titles = acc[accIndex].getElementsByClassName("sp-accordion-title");
            for (var titleIndex = 0; titleIndex < titles.length; titleIndex++) {
                titles[titleIndex].addEventListener("click", function () {
                    this.classList.toggle("sp-accordion-title__active");
                    var panel = this.nextElementSibling;
                    if (panel.style.display === "block") {
                        panel.style.display = "none";
                    } else {
                        panel.style.display = "block";
                    }
                });
            }
        }
    }
});


/* End */
;; /* /bitrix/components/sprint.editor/blocks/templates/.default/_script.js?16919915241048*/
