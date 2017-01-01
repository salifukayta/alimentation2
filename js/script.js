$(document).ready(function () {


    $('ul.menu').superfish({
        delay: 700, // one second delay on mouseout
        animation: {opacity: 'show', height: 'show'}, // fade-in and slide-down animation
        speed: 'normal', // faster animation speed
        autoArrows: true, // disable generation of arrow mark-up
        dropShadows: false                            // disable drop shadows
    });
    $(".list-services .tooltips").easyTooltip();

    $('#apropoLink').click(function () {
        $('.menuLink').removeClass("active");
        $('.menuLink').addClass("");
        $('#apropoLink').addClass("active");
        $("#mylocaldiv").load("php/testApropos.php #mainApropoDiv");
    });

    $('#secrets').click(function () {
        $('.menuLink').removeClass("active");
        $('.menuLink').addClass("");
        $('#secrets').addClass("active");

        $("#mylocaldiv").load("php/secret.php #mainApropoDiv");
    });

    $('#erreur').click(function () {
        $('.menuLink').removeClass("active");
        $('.menuLink').addClass("");
        $('#erreur').addClass("active");

        $("#mylocaldiv").load("php/erreur.php #mainApropoDiv");
    });

    $('#avis').click(function () {
        $('.menuLink').removeClass("active");
        $('.menuLink').addClass("");
        $('#avis').addClass("active");

        $("#mylocaldiv").load("php/avis.php #mainApropoDiv", function () {

            $('#vider').click(function () {
                nom = $('#nom').val("");
                email = $('#email').val("");
                commentaire = $('#commentaire').val("");             
            });

            function invalideNom() {
                nom = $('#nom').val();
                if (nom === "") {
                    //$('#invalidenom').text("*Invalide nom");
                    return true;
                } else {
                    //$('#invalidenom').text("");
                    return false;
                }
            }

            function invalideEmail() {
                email = $('#email').val();
                if (email === "" || !isValidEmailAddress(email)) {
                    //  $('#invalidemail').text("*Invalide email");
                    return true;
                } else {
                    //$('#invalidemail').text("");
                    return false;
                }
            }

            function invalideCommentaire() {
                commentaire = $('#commentaire').val();
                if (commentaire === "") {
                    // $('#invalidecomm').text("*Invalide commentaire");
                    return true;
                } else {
                    //  $('#invalidecomm').text("");
                    return false;
                }
            }

                
              function verifier_disabled(){
                  if (invalideNom() === true || invalideEmail() === true || invalideCommentaire() === true) {
                    $( "#envoyer_commentaire" ).prop( "disabled", true );
                } else {
                    $( "#envoyer_commentaire" ).prop( "disabled", false );
                }
              }  

            $('#nom').keyup(function () {
                if (invalideNom() === true) {
                    $('#invalidenom').text("*Invalide nom");
                } else {
                    $('#invalidenom').text("");
                }
                verifier_disabled();
                
            });

            $('#email').keyup(function () {
                if (invalideEmail() === true) {
                    $('#invalidemail').text("*Invalide email");

                } else {
                    $('#invalidemail').text("");
                }
                verifier_disabled();
            });

            $('#commentaire').keyup(function () {
                if (invalideCommentaire() === true) {
                    $('#invalidecomm').text("*Invalide commentaire");
                } else {
                    $('#invalidecomm').text("");
                }
                verifier_disabled();
            });



            $('#envoyer_commentaire').click(function () {

                nom = $('#nom').val();
                email = $('#email').val();
                commentaire = $('#commentaire').val();

 
                if (invalideNom() === true) {
                    $('#invalidenom').text("*Invalide nom");
                } else {
                    $('#invalidenom').text("");
                }
                
               /////// 
             if (invalideEmail() === true) {
                    $('#invalidemail').text("*Invalide email");

                } else {
                    $('#invalidemail').text("");
                }
               
                /////////////
                 if (invalideCommentaire() === true) {
                    $('#invalidecomm').text("*Invalide commentaire");
                } else {
                    $('#invalidecomm').text("");
                }
                verifier_disabled();
                
                if(invalideNom()===true||invalideEmail()===true||invalideCommentaire()===true){
                       // alert("erreur");

                }else{
                      $.post("php/commentaire.php", {
                    nom: nom,
                    email: email,
                    commentaire: commentaire
                }, function (data) {
                         //alert("Bien enregistrer");
                        $('#bien_enreg').text("Bien enregistrer  :) ");
                          setTimeout(function () {
                              //alert('Boom!')
                               $('#bien_enreg').text("");
                          }, 3000);

                          $('#commentaire').val("");
                          
                    /////////////////////////////////////////////////////////

                }); 
                }
                
                

             
            });
        });
    });


    $('#read_m1').click(function () {
        $('.menuLink').removeClass("active");
        $('.menuLink').addClass("");
        $('#apropoLink').addClass("active");

        $("#mylocaldiv").load("php/testApropos.php #mainApropoDiv");
    });

});

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    // alert( pattern.test(emailAddress) );
    return pattern.test(emailAddress);
}
;