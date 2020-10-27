
// GESTION DU POPUP RGPD
//CREATION VARIABLES
 var popupRgpd = $('#popup');
 var btnsRgpd = $('.btnRgpdOpen');
 var btnClose = popupRgpd.children('.popupClose');
 var rgpdCheck = $("#rgpdCheck");

 //AU CLIC OUVRIR LA POP UP
 btnsRgpd.on('click',function(event){
   event.preventDefault();
   popupRgpd.css({display:"block"});

 })
 //FERMER LA POP UP
 btnClose.on('click',function(event){
   event.preventDefault();
   popupRgpd.css({display:"none"});

 })




// GESTION DU POPUP MENTIONS LEGALES
//CREATION VARIABLES
var popupMentions = $('#popup2')
var btnsMentions = $('.btnMentionsOpen');
var btnClose = popupMentions.children('.popupClose');
var MentionsCheck = $("#mentionsCheck");

// AU CLIC OUVRIR LA POP UP
btnsMentions.on('click',function(event){
  event.preventDefault();
  popupMentions.css({display:"block"});

})
//FERMER LA POP UP
btnClose.on('click',function(event){
  event.preventDefault();
  popupMentions.css({display:"none"});

})
;






 // VALIDATION DU FORMULAIRE
  // MISE EN PLACE DU DOM
  $(function() {
    // INITIALISATION DU FORMULAIRE DE VALIDATION
    $("form[name='form-contact']").validate({
      // REGLES DE VALIDATION
      rules: {
        nom: "required",
        prenom: "required",
        email: {
          required: true,
          // OBLIGATION DE VALIDER L'ADRESSE MAIL
          email: true
        },
        votreMessage: "required",
      },
      // LES MESSAGES D'ERREUR SI FORMULAIRE PAS CORRECTEMENT COMPLETE
      messages: {
        nom: "Merci d'entrer votre nom",
        prenom: "Merci d'entrer votre prénom",
        votreMessage: "Merci d'entrer votre message",
        email: "l'adresse email est invalide",
      },
      // FORMULAIRE DOIT ETRE SOUMIS
      // AU MOMENT DE LA VALIDATION
      submitHandler: function(form) {
        form.submit();
      }
    });
  });






// GESTION DU RECHARGEMENT
$(".nolink").on("click", function(event){
  event.preventDefault()
})
;







//




