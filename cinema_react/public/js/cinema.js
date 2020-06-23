// * available ID array
let arrIdBrand = {
    bhd: 'bhdBrand',
    cgv: 'cgvBrand',
    cinestar: 'cinestarBrand',
    galaxy: 'galaxyBrand',
    lotte: 'lotteBrand',
    megaGS: 'megaGSBrand',
};

let arrIdCinema = {
    bhd: 'bhdCinema',
    cgv: 'cgvCinema',
    cinestar: 'cinestarCinema',
    galaxy: 'galaxyCinema',
    lotte: 'lotteCinema',
    megaGS: 'megaGSCinema',
};

let arrIdListMovie = {
    bhd: 'bhdListMovie',
    cgv: 'cgvListMovie',
    cinestar: 'cinestarListMovie',
    galaxy: 'galaxyListMovie',
    lotte: 'lotteListMovie',
    megaGS: 'megaGSListMovie',
}

// * getIndexActiveBrand
let getIndexActiveBrand = () => {
    let headerBrand = document.getElementById("brandsCinema");
    let btnsBrand = headerBrand.getElementsByClassName("brands__item");

    let arrBrand = [];
    for (let i = 0; i < btnsBrand.length; i++) {
        arrBrand[i] = btnsBrand[i].id;
    };

    let indexCurrenBrand;
    for (let j = 0; j < arrBrand.length; j++) {
        let ele = document.getElementById(arrBrand[j]);
        if (ele.classList.contains('activeLM')) {
            indexCurrenBrand = j;
            break;
        };
    };
    return indexCurrenBrand;
}

// * Click brand
let clickBrand = index => {
    // open list cinema
    let indexBrand = document.getElementById("listsCinema").getElementsByClassName("cinema__item")[index];
    try {
        openListCinema(event, indexBrand.id);
        // open list movie
        let indexCinemaBrand = document.getElementById("listsMovie").getElementsByClassName("listMovie__brand")[index];
        let indexCinemaBranch = indexCinemaBrand.getElementsByClassName("listMovie__item")[0];
        openListMovie(event, indexCinemaBrand.id, indexCinemaBranch.id);
    } catch (err) {
        // hide cinemas of all of brands and show "unavailable ..."  
        let tabcontentBrandCi = document.getElementsByClassName("cinema__item");
        for (let i = 0; i < tabcontentBrandCi.length; i++) {
            tabcontentBrandCi[i].style.display = "none";
        }
        tabcontentBrandCi[tabcontentBrandCi.length-1].style.display = "block";        
    }
}

// * Click cinema    
let clickCinema = index => {
    // open list movie branch
    let indexCinemaBrand = document.getElementById("listsMovie");
    let indexCinemaCurrenBrand = indexCinemaBrand.getElementsByClassName("listMovie__brand")[getIndexActiveBrand()]
    let indexCinemaBranch = indexCinemaCurrenBrand.getElementsByClassName("listMovie__item")[index];
    try {
        openListMovie(event, indexCinemaCurrenBrand.id, indexCinemaBranch.id);
    } catch (err) {
        // hide movies of all of brands  
        let tabcontentBrand = document.getElementsByClassName("listMovie__brand");
        for (let i = 0; i < tabcontentBrand.length; i++) {
            tabcontentBrand[i].style.display = "none";
        }
        tabcontentBrand[tabcontentBrand.length-1].style.display = "block";
    }
}

// * openListCinema 
let openListCinema = (e, cinemaBrand) => {
    // hide cinemas of all of brands      
    let tabcontentBrand = document.getElementsByClassName("cinema__item");
    for (let i = 0; i < tabcontentBrand.length; i++) {
        tabcontentBrand[i].style.display = "none";
    }

    // unhide list of cinema of current brand 
    document.getElementById(cinemaBrand).style.display = "block";
}

// openListMovie 
let openListMovie = function (e, cinemaMovieBrand, cinemaMovieBranch) {
    // hide movies of all of brands      
    let tabcontentBrand = document.getElementsByClassName("listMovie__brand");
    for (let i = 0; i < tabcontentBrand.length; i++) {
        tabcontentBrand[i].style.display = "none";
    }

    // unhide movies of current brand
    document.getElementById(cinemaMovieBrand).style.display = "block";

    // hide movies of branchs of brand
    let tabcontentBranch = document.getElementsByClassName("listMovie__item");
    for (let i = 0; i < tabcontentBranch.length; i++) {
        tabcontentBranch[i].style.display = "none";
    }

    // unhide movies of current branch of brand
    document.getElementById(cinemaMovieBranch).style.display = "block";
}

// ! Let started
// * enlighten First Brand
let parentBrand_active = document.getElementById("brandsCinema");
let childFirstBrand_active = parentBrand_active.getElementsByClassName('brands__item')[0];
childFirstBrand_active.className += " activeLM";

// * List of cinema of first brand
let parentBrandCinema = document.getElementById("listsCinema");
let childFirstBrandCinema = parentBrandCinema.getElementsByClassName('cinema__item')[0];
let childFirstBrandCinemaId = childFirstBrandCinema.id;

// * enlighten the First Cinema of the First Brand
childFirstBrandCinema.getElementsByClassName('cinemaInfo')[0].className += " activeLM";

// * First movie of first branch of first cinema of first brand
let parentBrandCinemaLM = document.getElementById("listsMovie");
let childFirstBrandCinemaLM = parentBrandCinemaLM.getElementsByClassName("listMovie__brand")[0];
let childFirstBrandCinemaLMId = childFirstBrandCinemaLM.id;
let childFirstBrandCinemaFirstBranch = childFirstBrandCinemaLM.getElementsByClassName("listMovie__item")[0];
let childFirstBrandCinemaFirstBranchId = childFirstBrandCinemaFirstBranch.id;

openListCinema(event, childFirstBrandCinemaId);
openListMovie(event, childFirstBrandCinemaLMId, childFirstBrandCinemaFirstBranchId);

// * Serve for clickBrand
let headerBrand = document.getElementById("brandsCinema");
let btnsBrand = headerBrand.getElementsByClassName("brands__item");

// * clickBrand
for (let i = 0; i < btnsBrand.length; i++) {
    btnsBrand[i].addEventListener('click', () => {
        // unenlighten all of brands
        for (let j = 0; j < btnsBrand.length; j++) {
            btnsBrand[j].className = btnsBrand[j].className.replace(" activeLM", "");
        }
        // enlighten current brand
        btnsBrand[i].className += " activeLM";

        try {
            clickBrand(i);

            // Serve for clickCinema
            let headerCinema = document.getElementById("listsCinema");
            let cinemaBrand = headerCinema.getElementsByClassName("cinema__item")[getIndexActiveBrand()];
            let cinemaBranch = cinemaBrand.getElementsByClassName('cinemaInfo');
            // unenlighten all cinema of branches
            for (let i = 0; i < cinemaBranch.length; i++) {
                cinemaBranch[i].className = cinemaBranch[i].className.replace(" activeLM", "");
            }
            // enlighten the First Cinema of the current Brand
            cinemaBranch[0].className += " activeLM";
            // clickCinema
            for (let i = 0; i < cinemaBranch.length; i++) {
                cinemaBranch[i].addEventListener('click', () => {
                    // unenlighten all cinema of branches
                    for (let j = 0; j < cinemaBranch.length; j++) {
                        cinemaBranch[j].className = cinemaBranch[j].className.replace(" activeLM", "");
                    }
                    // enlighten current cinema of branch
                    cinemaBranch[i].className += " activeLM";
                    clickCinema(i);
                })
            }
        } catch (err) {
            // hide list MOVIE of all of brands and show "unavailable ..." 
            let tabcontentLM = document.getElementsByClassName("listMovie__brand");
            for (let i = 0; i < tabcontentLM.length; i++) {
                tabcontentLM[i].style.display = "none";
            }
            tabcontentLM[tabcontentLM.length-1].style.display = "block";
        }
    })
}

// * Serve for clickCinema
let headerCinema = document.getElementById("listsCinema");
let cinemaBrand = headerCinema.getElementsByClassName("cinema__item")[getIndexActiveBrand()];
let cinemaBranch = cinemaBrand.getElementsByClassName('cinemaInfo');

// clickCinema
for (let i = 0; i < cinemaBranch.length; i++) {
    cinemaBranch[i].addEventListener('click', () => {
        // unenlighten all cinema of branches
        for (let j = 0; j < cinemaBranch.length; j++) {
            cinemaBranch[j].className = cinemaBranch[j].className.replace(" activeLM", "");
        }
        // enlighten current cinema of branch
        cinemaBranch[i].className += " activeLM";
        clickCinema(i);
    })
}
