// import {domains} from "./domains";
    var userLang = navigator.language || navigator.userLanguage; 
    var path = window.location.pathname;
    // alert('language : ' + userLang)
    if ((userLang === 'fr' || userLang === 'fr-FR' || userLang === 'fr-fr') && path === '/') {
      window.location.href='/fr/index.html';
    }
    var acc = document.getElementsByClassName("accordion");
    var i;



    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
    }

    $(document).ready ( function () {
      $(document).on ("click", "#contact", function () {
        window.location.href='contacts.html';
      });
      $(document).on ("click", "#faq", function () {
        window.location.href='faq.html';
      });
      $(document).on ("click", "#features", function () {
        window.location.href='features.html';
      });
      $(document).on ("click", "#signin", function () {
        window.location.href='signin.html';
      });
      $(document).on ("click", "#signup", function () {
        window.location.href='signup.html';
      });
  });

    // $(window).on("scroll", function () {
    //     if ($(this).scrollTop() > 80) {
    //         $("nav").addClass("smallHeader");
    //         $("nav a").addClass("smallLinks");
    //         $("nav li").addClass("smallLinksLi");
    //         $(".actions button").addClass("smallButtons");
    //     }
    //     else {
    //         $("nav").removeClass("smallHeader");
    //         $("nav a").removeClass("smallLinks");
    //         $("nav li").removeClass("smallLinksLi");
    //         $(".actions button").removeClass("smallButtons");
    //     }
    // });

    /** include header and footer */

    function includeHTML() {
        var z, i, elmnt, file, xhttp;
        /*loop through a collection of all HTML elements:*/
        z = document.getElementsByTagName("*");
        for (i = 0; i < z.length; i++) {
          elmnt = z[i];
          /*search for elements with a certain atrribute:*/
          file = elmnt.getAttribute("w3-include-html");
          if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4) {
                if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                /*remove the attribute, and call this function once more:*/
                elmnt.removeAttribute("w3-include-html");
                includeHTML();
              }
            }      
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
          }
        }

        var current = location.pathname.replace(/\/$/, "");
        $('.topnav').find('a').each(function() {
            var parts = current.split('/');
            var lastSegment = parts.pop() || parts.pop();
            var url = $(this).attr('href').split('/');
            var lasturlSegment = url.pop() || url.pop();
            $(this).toggleClass('open', lasturlSegment === lastSegment);
        });
      };

      includeHTML();





      // function validateForm()                                    
      // { 
      //     var firstName = document.forms["contactForm"]["firstName"];
      //     var lastName = document.forms["contactForm"]["lastName"];
      //     var email = document.forms["contactForm"]["email"];
      //     var number = document.forms["contactForm"]["number"];
      //     var message = document.forms["contactForm"]["message"];
         
      //     var data = {
      //       firstName: firstName,
      //       lastName: lastName,
      //       email: email,
      //       number: number,
      //       message: message,
      //     }
      //     if (firstName.value == "")                                  
      //     { 
      //         document.getElementById('errorfirstName').innerHTML="Please provide a first name";  
      //         firstName.focus(); 
      //         return false; 
      //     }else{
      //         document.getElementById('errorfirstName').innerHTML="";  
      //     }

      //     if (lastName.value == "")                                  
      //     { 
      //         document.getElementById('errorlastName').innerHTML="Please provide a last name";  
      //         lastName.focus(); 
      //         return false; 
      //     }else{
      //         document.getElementById('errorlastName').innerHTML="";  
      //     }
             
      //     if (email.value == "")                                   
      //     { 
      //         document.getElementById('erroremail').innerHTML="Please provide a valid email address"; 
      //         email.focus(); 
      //         return false; 
      //     }else{
      //         document.getElementById('erroremail').innerHTML="";  
      //     }
         
      //     if (email.value.indexOf("@", 0) < 0)                 
      //     { 
      //         document.getElementById('erroremail').innerHTML="Please provide a valid email address"; 
      //         email.focus(); 
      //         return false; 
      //     } 
         
      //     if (email.value.indexOf(".", 0) < 0)                 
      //     { 
      //         document.getElementById('erroremail').innerHTML="Please provide a valid email address"; 
      //         email.focus(); 
      //         return false; 
      //     } 

      //     if (number.value == "")                                  
      //     { 
      //         document.getElementById('errornumber').innerHTML="Please provide a phone number";  
      //         number.focus(); 
      //         return false; 
      //     }else{
      //         document.getElementById('errornumber').innerHTML="";  
      //     }
         
      //     if (message.value == "")                           
      //     {
      //         document.getElementById('errormsg').innerHTML="Veuillez entrez un message valide"; 
      //         message.focus(); 
      //         return false; 
      //     }else{
      //         document.getElementById('errormsg').innerHTML="";  
      //     }
      //     // $.post( "../php/mail.php", data)
      //     // .done(function( response ) {
      //     //   alert( "ok" );
      //     // });
      //     $.ajax({
      //         url: '../php/mail.php',
      //         type: 'post',
      //         dataType: 'json',
      //         contentType: 'application/json',
      //         error: function (response) {
      //           alert( "error: " + JSON.stringify(response) );
      //         },
      //         success: function (response) {
      //           alert( "OK" );
      //         },
      //         data: JSON.stringify(data)
      //     });
      // }


      function validateSignup()                                    
      { 
          var domains = Domains;
          var firstName = $("#signupForm input[name=firstName]").val();
          var lastName = $("#signupForm input[name=lastName]").val();
          var company = $("#signupForm input[name=company]").val();
          var email = $("#signupForm input[name=email]").val();
          var password = $("#signupForm input[name=password]").val();
          var userLang = navigator.language || navigator.userLanguage; 
          var language = 'en';
          if ((userLang === 'fr' || userLang === 'fr-FR' || userLang === 'fr-fr')) {
            language = 'fr';
          }
          var data = {
            company: company,
            language: language,
            country: "",
            firstname: firstName,
            lastname: lastName,
            email: email,
            password: password,
            address_one: "",
            address_two: "",
            phone: "",
            state: "",
            post_code: "",
            vat_number: "",
            registration_number: ""
          }
          var companyError1 = "";
          var firstNameError = "";
          var lastNameError = "";
          var emailError1 = "";
          var passwordError1 = "";
          var passwordError2 = "";
          var emailError2 = "";
          var companyError2 = "";
          var unknownError = "";
          var emailError3 = "";
          if(language === 'fr') {
            companyError1 = "Veuillez indiquer un nom d'entreprise.";
            firstNameError = "Veuillez indiquer votre prénom.";
            lastNameError = "Veuillez indiquer votre nom.";
            emailError1 = "Veuillez indiquer votre email.";
            passwordError1 = "Veuillez indiquer votre mot de passe.";
            passwordError2 = "Le mot de passe doit contenir entre 8 et 15 caractères avec au moins une lettre minuscule, une lettre majuscule, un chiffre numérique et un caractère spécial.";
            emailError2 = "Cet e-mail est déjà lié à un compte.";
            companyError2 = "Ce nom d'entreprise est déjà lié à un autre compte. Vous devez vous connecter à votre compte existant pour continuer.";
            unknownError = "Une erreur inconnue s'est produite, veuillez contacter notre service client ou notre équipe d'assistance.";
            emailError3 = "Veuillez utiliser une adresse email professionnelle, nous n'acceptons pas les domaines de type : gmail, hotmail..."
          } else {
            companyError1 = "Please provide a company name.";
            firstNameError = "Please provide a first name.";
            lastNameError = "Please provide a last name.";
            emailError1 = "Please provide a valid email address.";
            passwordError1 = "Please provide a password.";
            passwordError2 = "Password must contain between 8 to 15 characters with at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.";
            emailError2 = "This email is already linked to an account.";
            companyError2 = "This company name is already linked to another account. You must sign in to your existing account to continue.";
            unknownError = "An unknown error has occurred, please contact our customer service or support team.";
            emailError3 = "Please use a professional email address, we do not accept domains such as: gmail, hotmail ..."
          }
          var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
          var domain = email.substring(email.lastIndexOf("@") +1);
          if (firstName == "") { 
              document.getElementById('errorfirstName').innerHTML=firstNameError;  
              // firstName.focus(); 
              return false; 
          } else {
              document.getElementById('errorfirstName').innerHTML="";  
          }
          if (lastName == "") { 
              document.getElementById('errorlastName').innerHTML=lastNameError;  
              // lastName.focus(); 
              return false; 
          } else {
              document.getElementById('errorlastName').innerHTML="";  
          }
          if (company == "") { 
              document.getElementById('errorcompany').innerHTML=companyError1;  
              return false; 
          } else {
              document.getElementById('errorcompany').innerHTML="";  
          }  
          if (!isEmail(email)) { 
              document.getElementById('erroremail').innerHTML=emailError1; 
              return false; 
          } else if (contains(domains, domain)) {
            document.getElementById('erroremail').innerHTML=emailError3; 
            return false; 
          } else {
              document.getElementById('erroremail').innerHTML="";  
          }

          if (password == "") { 
              document.getElementById('errorPassword').innerHTML=passwordError1;  
              // password.focus(); 
              return false; 
          } else if (!password.match(decimal)) {
              document.getElementById('errorPassword').innerHTML=passwordError2;  
              return false;
          } else {
            document.getElementById('errorPassword').innerHTML="";  
          }
          $.ajax({
              url: 'https://api.quonference.com:443/company',
              type: 'PUT',
              dataType: 'json',
              contentType: 'application/json',
              error: function (response) {
                if(response.responseText === 'email') {
                  document.getElementById('erroremail').innerHTML=emailError2; 
                } else if(response.responseText === 'company') {
                  document.getElementById('errorcompany').innerHTML=companyError2; 
                } else {
                  document.getElementById('errorcompany').innerHTML=unknownError;
                }
              },
              success: function (response) {
                window.location.href = "success.html";
              },
              data: JSON.stringify(data)
          });



          // $.post( "https://api.quonference.com:443/company", JSON.stringify(data))
          // .done(function( response ) {
          //   alert( "Data Loaded: " + response );
          // }).fail(function() {
          //   alert( "error" );
          // })

            // window.location.href='signupSuccess.html';
          // });
      }

      function contains(a, obj) {
        var i = a.length;
        while (i--) {
           if (a[i] === obj) {
               return true;
           }
        }
        return false;
    }

      function isEmail(email) {
        console.log('email' + email)
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
      }

      function validateSignin()                                    
      { 
          var email = $("#signinForm input[name=email]").val();
          var password = $("#signinForm input[name=password]").val();
          var data = {
            username: email,
            password: password
          }
          if (!isEmail(email))                                    
          { 
              document.getElementById('erroremail').innerHTML="Please provide a valid email address"; 
              // email.focus(); 
              return false; 
          }else{
              document.getElementById('erroremail').innerHTML="";  
          }

          if (password == "")                                  
          { 
              document.getElementById('errorPassword').innerHTML="Please provide a password";  
              // password.focus(); 
              return false; 
          }else{
              document.getElementById('errorPassword').innerHTML="";  
          }

          console.log('data' + JSON.stringify(data))



          $.ajax({
            url: 'https://api.quonference.com:443/authenticate',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            error: function (response) {
              alert( "error: " + JSON.stringify(response) );
            },
            success: function (response) {
              // window.open('https://portal.quonference.com/login?jwt=' + response.token, "_blank")
              window.location.href = 'https://portal.quonference.com/login?jwt=' + response.token;
            },
            data: JSON.stringify(data)
        });
      }


      function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }

      // cookie consent
      // $(function() {
      //   $.cookieCuttr({
      //     cookieDeclineButton: true,
      //     cookiePolicyPage: true,
      //     cookieDiscreetLink: true,
      //     cookieDiscreetReset: true,
      //     cookieAnalyticsMessage: "We use cookies, just to track visits to our website, we store no personal details."
      //     });
      // });

      var userLang = navigator.language || navigator.userLanguage; 
      if (userLang === 'fr' || userLang === 'fr-FR' || userLang === 'fr-fr') {
        glowCookies.start('fr', { 
          analytics: 'UA-166014109-1',
          policyLink: 'politique_de_confidentialite.html',
          bannerColor: '#428FF8',
          acceptBtnColor: '#fff',
          acceptBtnBackground: '#428FF8',
          rejectBtnBackground: '#af3b3b',
          rejectBtnColor: '#fff',
          manageColor: 'white',
          manageBackground: '#428FF8',
        });
      } else {
        glowCookies.start('en', { 
          analytics: 'UA-166014109-1',
          policyLink: 'privacy_policy.html',
          bannerColor: '#428FF8',
          acceptBtnColor: '#fff',
          acceptBtnBackground: '#428FF8',
          rejectBtnBackground: '#af3b3b',
          rejectBtnColor: '#fff',
          manageColor: 'white',
          manageBackground: '#428FF8',
        });
      }
      

      // if (jQuery.cookie('cc_cookie_accept') == "cc_cookie_accept") {
      //   var _gaq = _gaq || [];
      //   _gaq.push(['_setAccount', 'UA-166014109-1']);
      //   _gaq.push(['_trackPageview']);
      
      //   (function() {
      //     var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      //     ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      //     var s = document. getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      //   })();
      // }

// // Login and Register forms
// $(document).ready(function() {
// 	var loginUsername;
// 	var loginPassword;
// 	var account = [loginUsername, loginPassword];
  
// 	$('#login-button').on('click', function() {
// 		var loginUsernameEntry = $("#login-username").val();
// 		var loginPasswordEntry = $("#login-password").val();
// 		if (loginUsernameEntry == account[0] && loginPasswordEntry == account[1]) {
// 			console.log("Current Username " + account[0]);
// 			console.log("Current Password " + account[1]);
// 			console.log("Logged In");
// 		} else {
// 			console.log("Attempted Username " + loginUsernameEntry);
// 			console.log("Attempted Password " + loginPasswordEntry);
// 			console.log("Login Falied");
// 		};
// 	});
  
// 	$('#create-button').on('click', function() {
// 		var createUsernameEntry = $("#create-username").val();
// 		var createPasswordEntry = $("#create-password").val();
// 		var createEmailEntry = $("#create-email").val();
//     var createUsernameValid = false;
//     var createPasswordValid = false;
//     var createEmailValid = false;
//     var createUsernameObject = $("#create-username");
//     var createPasswordObject = $("#create-password");
//     var createEmailObject = $("#create-email");
//     var validate = /^\s*[a-zA-Z0-9,\s]+\s*$/;
//     var validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
//     if(!validate.test(createUsernameEntry) || (createUsernameEntry).length == 0) {
//       $(createUsernameObject).addClass("error")
//       $(createUsernameObject).val("No special characters or spaces.")
//     } else {
//       createUsernameValid = true;
//       var createUsername = $(createUsernameObject).val();
//     }
    
//     if(!validate.test(createPasswordEntry) || (createPasswordEntry).length == 0) {
//       $(createPasswordObject).addClass("error");
//       $(createPasswordObject).val("No special characters or spaces.");
//     } else {
//       createPasswordValid = true;
//       var createPassword = $(createPasswordObject).val();
//     }
    
//     if(!validateEmail.test(createEmailEntry)) {
//       $(createEmailObject).addClass("error");
//       $(createEmailObject).val("Enter a valid email");
//     } else {
//       createEmailValid = true;
//       console.log("Account Email " + createEmailObject.val())
//     }
      
//     $(createUsernameObject).on('click', function () {
//       $(this).val("");  
//       $(this).removeClass("error");
//     });
    
//     $(createPasswordObject).on('click', function () {
//       $(this).val("");  
//       $(this).removeClass("error");
//     });
    
//     $(createEmailObject).on('click', function () {
//       $(this).val("");
//       $(this).removeClass("error");
//     });
    
// 		account = [createUsername, createPassword];
// 		console.log("Account Username " + account[0]);
// 		console.log("Account Password " + account[1]);
    
// 		if(createUsernameValid == true && createPasswordValid == true && createEmailValid == true) {
//       $('form').animate({
// 			height: "toggle",
// 			opacity: "toggle"
// 		}, "fast");
//     }
// 	});
  
// 	$('.message a').on('click', function() {
// 		$('form').animate({
// 			height: "toggle",
// 			opacity: "toggle"
// 		}, "fast");
// 	});
// });