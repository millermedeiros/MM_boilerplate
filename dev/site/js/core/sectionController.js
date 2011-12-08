// if you don't need Hasher integration swap "sectionController2" with
// "sectionController"
define(['mm/other/sectionController2'], function (sectionController) {

    //just to avoid referencing something that is outside the app "domain"
    //easier to replace the controller logic if needed...
    //a.k.a. "sandbox"
    return sectionController;

});
