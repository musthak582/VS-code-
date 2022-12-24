let toggler = document.querySelector(".toggler");
let navItemUl = document.querySelector(".navItem ul");
let dropDownContent1 = document.querySelector(".dropDown-Content1");
let dropDown1 = document.querySelector("#dropDown1");
let dropDownContent2 = document.querySelector(".dropDown-Content2");
let dropDown2 = document.querySelector("#dropDown2");
let dropDownContent3 = document.querySelector(".dropDown-Content3");
let dropDown3 = document.querySelector("#dropDown3");
let dropDownContent4 = document.querySelector(".dropDown-Content4");
let dropDown4 = document.querySelector("#dropDown4");
let dropDownContent5 = document.querySelector(".dropDown-Content5");
let dropDown5 = document.querySelector("#dropDown5");
let dropDownContent6 = document.querySelector(".dropDown-Content6");
let dropDown6 = document.querySelector("#dropDown6");
let dropDownContent7 = document.querySelector(".dropDown-Content7");
let dropDown7 = document.querySelector("#dropDown7");
let dropDownContent8 = document.querySelector(".dropDown-Content8");
let dropDown8 = document.querySelector("#dropDown8");

let DrobDownContentBx1 = document.querySelector(".DrobDown-ContentBx1");
let DrobDownBx1 = document.querySelector("#DrobDownBx1");
let DrobdownCss = document.querySelector(".bx3 ul li:nth-child(1)");
let CssDropDownContent = document.querySelector(".Css-DropDownContent");

const body = document.body;


const divhover = document.querySelector(".content .numbar");
const ihide = document.querySelectorAll("#ihide");

const fileName = document.getElementById("fileName");
const htmlbtn = document.querySelector(".html");
const htmlpage = document.querySelector(".htmlpage");

const cssbtn = document.querySelector(".css");
const csspage = document.querySelector(".csspage");

const jsbtn = document.querySelector(".javascript");
const jspage = document.querySelector(".javascriptpage");

const explorerpage = document.querySelector(".explorer");
const expbtn = document.getElementById("expbtn");
const searchPage = document.querySelector(".search");
const srchbtn = document.getElementById("srchbtn");
const sourcePage = document.querySelector(".source");
const sorcbtn = document.getElementById("sorcbtn");
const runDebugbtn = document.getElementById("rundebugbtn");
const runPage = document.querySelector(".run");
const extenbtn = document.getElementById("extenbtn");
const extensionsPage = document.querySelector(".extensions");

toggler.addEventListener("click", () => {
    navItemUl.classList.toggle("active");
})

dropDown1.addEventListener("mouseenter", () => {
    dropDownContent1.style.display = "block";
    dropDownContent2.style.display = "none";
    dropDownContent3.style.display = "none";
    dropDownContent4.style.display = "none";
    dropDownContent5.style.display = "none";
    dropDownContent6.style.display = "none";
    dropDownContent7.style.display = "none";
    dropDownContent8.style.display = "none";

});

dropDown2.addEventListener("mouseenter", () => {
    dropDownContent2.style.display = "block";
    dropDownContent1.style.display = "none";
    dropDownContent3.style.display = "none";
    dropDownContent4.style.display = "none";
    dropDownContent5.style.display = "none";
    dropDownContent6.style.display = "none";
    dropDownContent7.style.display = "none";
    dropDownContent8.style.display = "none";

})

dropDown3.addEventListener("mouseenter", () => {
    dropDownContent3.style.display = "block";
    dropDownContent1.style.display = "none";
    dropDownContent2.style.display = "none";
    dropDownContent4.style.display = "none";
    dropDownContent5.style.display = "none";
    dropDownContent6.style.display = "none";
    dropDownContent7.style.display = "none";
    dropDownContent8.style.display = "none";

})
dropDown4.addEventListener("mouseenter", () => {
    dropDownContent4.style.display = "block";
    dropDownContent1.style.display = "none";
    dropDownContent3.style.display = "none";
    dropDownContent2.style.display = "none";
    dropDownContent5.style.display = "none";
    dropDownContent6.style.display = "none";
    dropDownContent7.style.display = "none";
    dropDownContent8.style.display = "none";


})

dropDown5.addEventListener("mouseenter", () => {
    dropDownContent5.style.display = "block";
    dropDownContent1.style.display = "none";
    dropDownContent3.style.display = "none";
    dropDownContent4.style.display = "none";
    dropDownContent2.style.display = "none";
    dropDownContent6.style.display = "none";
    dropDownContent7.style.display = "none";
    dropDownContent8.style.display = "none";


})

dropDown6.addEventListener("mouseenter", () => {
    dropDownContent6.style.display = "block";
    dropDownContent1.style.display = "none";
    dropDownContent3.style.display = "none";
    dropDownContent4.style.display = "none";
    dropDownContent5.style.display = "none";
    dropDownContent2.style.display = "none";
    dropDownContent7.style.display = "none";
    dropDownContent8.style.display = "none";


})

dropDown7.addEventListener("mouseenter", () => {
    dropDownContent7.style.display = "block";
    dropDownContent1.style.display = "none";
    dropDownContent3.style.display = "none";
    dropDownContent4.style.display = "none";
    dropDownContent5.style.display = "none";
    dropDownContent6.style.display = "none";
    dropDownContent2.style.display = "none";
    dropDownContent8.style.display = "none";


})

dropDown8.addEventListener("mouseenter", () => {
    dropDownContent8.style.display = "block";
    dropDownContent1.style.display = "none";
    dropDownContent3.style.display = "none";
    dropDownContent4.style.display = "none";
    dropDownContent5.style.display = "none";
    dropDownContent6.style.display = "none";
    dropDownContent7.style.display = "none";
    dropDownContent2.style.display = "none";

});

body.addEventListener("click", () => {
    dropDownContent8.style.display = "none";
    dropDownContent1.style.display = "none";
    dropDownContent3.style.display = "none";
    dropDownContent4.style.display = "none";
    dropDownContent5.style.display = "none";
    dropDownContent6.style.display = "none";
    dropDownContent7.style.display = "none";
    dropDownContent2.style.display = "none";
    CssDropDownContent.style.display = "none";
})


DrobDownBx1.addEventListener("mouseenter", () => {
    DrobDownContentBx1.style.display = "block";
})
DrobDownBx1.addEventListener("mouseleave", () => {
    DrobDownContentBx1.style.display = "none";
})

DrobdownCss.addEventListener("mouseenter", () => {
    CssDropDownContent.style.display = "block";
});


divhover.addEventListener("mouseenter", () => {
    for (var i = 0; i < 5; i++) {
        ihide[i].style.visibility = "visible";

    }

})
divhover.addEventListener("mouseleave", () => {
    for (var i = 0; i < 5; i++) {
        ihide[i].style.visibility = "hidden";

    }
});

htmlbtn.addEventListener("click", () => {
    htmlpage.style.display = "block";
    csspage.style.display = "none";
    jspage.style.display = "none";
    htmlbtn.style.backgroundColor = "black";
    cssbtn.style.backgroundColor = "";
    jsbtn.style.backgroundColor = "";
    fileName.innerText = "HTML";
});
cssbtn.addEventListener("click", () => {
    csspage.style.display = "block";
    htmlpage.style.display = "none";
    jspage.style.display = "none";
    cssbtn.style.backgroundColor = "black";
    htmlbtn.style.backgroundColor = "";
    jsbtn.style.backgroundColor = "";
    fileName.innerText = "CSS";
});
jsbtn.addEventListener("click", () => {
    jspage.style.display = "block";
    csspage.style.display = "none";
    htmlpage.style.display = "none";
    jsbtn.style.backgroundColor = "black";
    cssbtn.style.backgroundColor = "";
    htmlbtn.style.backgroundColor = "";
    fileName.innerText = "javaScript";
});

expbtn.addEventListener("click", () => {
    explorerpage.classList.toggle("show1");
});
srchbtn.addEventListener("click", () => {
    searchPage.classList.toggle("show2");
});
sorcbtn.addEventListener("click", () => {
    sourcePage.classList.toggle("show3");
});
runDebugbtn.addEventListener("click", () => {
    runPage.classList.toggle("show4");
});
extenbtn.addEventListener("click", () => {
    extensionsPage.classList.toggle("show5");
});

