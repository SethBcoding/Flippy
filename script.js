var pageLocation = [],
    lastPage = null;
$Zz = 0;

// GSAP initial setups
TweenLite.set(".centerClass", {xPercent: -50, yPercent: -50});
TweenLite.set(".pageWrapper", {left: "327px", perspective: 1000});
TweenLite.set(".page", {transformStyle: "preserve-3d"});
TweenLite.set(".back", {rotationY: -180});
TweenLite.set([".back", ".front"], {backfaceVisibility: "hidden"});

// Click handler for flipping pages
$(".page").click(function() {
    if (pageLocation[this.id] === undefined || pageLocation[this.id] === "right") {
        $Zz = $(".left").length + 1;
        TweenMax.to($(this), 1, {force3D: true, rotationY: -180, transformOrigin: "-1px top", className: '+=left', z: $Zz, zIndex: $Zz});
        TweenLite.set($(this), {className: '-=right'});
        pageLocation[this.id] = "left";
    } else {
        $Zz = $(".right").length + 1;
        TweenMax.to($(this), 1, {force3D: true, rotationY: 0, transformOrigin: "left top", className: '+=right', z: $Zz, zIndex: $Zz});
        TweenLite.set($(this), {className: '-=left'});
        pageLocation[this.id] = "right";
    }
});

// Hover effects for front and back covers
$(".front").hover(
    function() {
        TweenLite.to($(this).find(".pageFoldRight"), 0.3, {width: "50px", height: "50px", backgroundImage: "linear-gradient(45deg,  #fefefe 0%,#f2f2f2 49%,#ffffff 50%,#ffffff 100%)"});
    },
    function() {
        TweenLite.to($(this).find(".pageFoldRight"), 0.3, {width: "0px", height: "0px"});
    }
);

$(".back").hover(
    function() {
        TweenLite.to($(this).find(".pageFoldLeft"), 0.3, {width: "50px", height: "50px", backgroundImage: "linear-gradient(135deg,  #ffffff 0%,#ffffff 50%,#f2f2f2 51%,#fefefe 100%)"});
    },
    function() {
        TweenLite.to($(this).find(".pageFoldLeft"), 0.3, {width: "0px", height: "0px"});
    }
);

// Toggle menu function
function toggleMenu() {
    var x = document.getElementById("myLinks");
    if (x.className === "links") {
        x.className += " show";
    } else {
        x.className = "links";
    }
}

// Document ready function for gallery item flipping
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });
});
