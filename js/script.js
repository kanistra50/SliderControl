var accord = document.querySelectorAll(".accord");
console.log(accord);

for (var i=0; i < accord.length; i++) {

    accord[i].onclick = function () {
        var ul = this.nextElementSibling; //After click <p> always the next Element will be appropriate element <li>..</li>
        console.log(ul);
        var img = this.childNodes[1];     //child tag of <p> on position 1 is <jpg> node.
        console.log(img);
        if (ul.classList.contains("show")) {
            img.classList.remove("rotate");
            ul.classList.remove("opacity");
            setTimeout(function () {
                ul.classList.remove("show");
                ul.classList.add("hide");
                } , 150)
            
        }
        else  {
            ul.classList.remove("hide");
            img.classList.add("rotate");
            ul.classList.add("show");
            setTimeout(function () {
            ul.classList.add("opacity")} , 150)
            };
    }

};
