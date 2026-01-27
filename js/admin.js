// Initialize Firebase
// var config = {
//   apiKey: "AIzaSyDCK22nihlvs6y71d8k630oxN19CYW2pm0",
//   authDomain: "vanipucollege-ba0a0.firebaseapp.com",
//   databaseURL: "https://vanipucollege-ba0a0.firebaseio.com",
//   projectId: "vanipucollege-ba0a0",
//   storageBucket: "vanipucollege-ba0a0.appspot.com",
//   messagingSenderId: "145964441543"
// };
// firebase.initializeApp(config);
// // Initialize Cloud Firestore through Firebase
// var db = firebase.firestore();
// // Disable deprecated features
// db.settings({
//   timestampsInSnapshots: true
// });

(function ($) {
  "use strict";
  $(document).on("ready", function () {
    console.log("Admin >> ", "Admin Js Ready ");

    $(".slider-active").owlCarousel({
      autoplay: true,
      autoplayTimeout: 3500,
      autoplayHoverPause: true,
      items: 1,
      smartSpeed: 600,
      loop: true,
      merge: true,
      nav: true,
      dots: false,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
      ],
      responsive: {
        300: {
          nav: false
        },
        768: {
          nav: false
        },
        1170: {
          nav: true
        }
      }
    });

    // db.collection("slider")
    //   .get()
    //   .then(querySnapshot => {
    //     $("#slider-container").empty();
    //     querySnapshot.forEach(doc => {
    //       console.log(doc.data().image_url);
    //       var sliderRow =
    //         '<div class="single-slider" style="background-image:url(' +
    //         doc.data().image_url +
    //         ')"><div class="container"><div class="row"><div class="col-lg-8 offset-lg-4 col-md-8 offset-md-4 col-12"></div></div></div>';
    //       $("#slider-container").append(sliderRow);
    //     });


    //   });

    // db.collection("news")
    //   .get()
    //   .then(querySnapshot => {
    //     $('#news-container').empty()
    //     querySnapshot.forEach(doc => {
    //       console.log(doc.data());
    //       var newsRow = '<div class="single-blog"><div class="blog-head overlay"><div class="date"><h4>' + doc.data().news_custom_date + '</h4></div><img src="' + doc.data().news_image_url + '" alt="#"></div>' +
    //         '<div class="blog-content"><h4 class="blog-title"><a href="javascript:void(0);">' + doc.data().news_title + '</a></h4>' +
    //         '<div class="blog-info"><a href="#"><i class="fa fa-user"></i>By: Admin</a><a href="#"><i class="fa fa-list"></i>' + doc.data().news_type + '</a></div>' +
    //         '<p>' + doc.data().news_details + '</p></div></div>';
    //       $('#news-container').append(newsRow);
    //     });


    //   });

    $(".blog-slider").owlCarousel({
      items: 2,
      autoplay: false,
      autoplayTimeout: 3500,
      smartSpeed: 600,
      autoplayHoverPause: true,
      margin: 15,
      loop: true,
      merge: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
      ],
      dots: true,
      responsive: {
        300: {
          items: 1,
          nav: false
        },
        480: {
          items: 2,
          nav: false
        },
        768: {
          items: 2,
          nav: false
        },
        1170: {
          items: 3
        }
      }
    });

    // db.collection("events")
    //   .orderBy("created_at", "desc")
    //   .get()
    //   .then(querySnapshot => {
    //     $('#events-container').empty()
    //     querySnapshot.forEach(doc => {
    //       console.log(doc.data());
    //       var eventRow = '<div class="single-event"><div class="head overlay"><img src="' + doc.data().event_image_url + '" alt="#"><a href="' + doc.data().event_image_url + '" data-fancybox="photo" class="btn"><i class="fa fa-search"></i></a></div>'
    //         + '<div class="event-content"><div class="meta"><span><i class="fa fa-calendar"></i>' + doc.data().event_custom_date + '</span><span><i class="fa fa-clock-o"></i>' + doc.data().event_time + '</span></div>'
    //         + '<h4>' + doc.data().event_title + '</h4><p>' + doc.data().event_details + '</p></div></div>';
    //       $('#events-container').append(eventRow);
    //     });


    //   });

    $(".event-slider").owlCarousel({
      autoplay: true,
      autoplayTimeout: 3500,
      smartSpeed: 600,
      autoplayHoverPause: true,
      margin: 25,
      loop: true,
      merge: true,
      nav: true,
      dots: false,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
      ],
      responsive: {
        300: {
          items: 1,
          nav: false
        },
        480: {
          items: 2,
          nav: false
        },
        768: {
          items: 2,
          nav: false
        },
        1170: {
          items: 3
        }
      }
    });

    const flashNewsSlider = new SnackMarquee({
      selector: '#flash-slider',
      // or 'left'
      mode: 'right',
      // animation speed
      speed: 100,
      // space between text
      space: 20,
      // font family
      font: 'Arial, Helvetica, sans-serif',
      // font size
      size: 24,
      // text color
      color: 'white',
      // background color
      background: 'black',
      // width/height
      width: 0, height: 0
    });

    $('#flash-slider').hide();

    const admissionSlider = new SnackMarquee({
      selector: '#flash-slider-admission',
      // or 'left'
      mode: 'right',
      // animation speed
      speed: 100,
      // space between text
      space: 20,
      // font family
      font: 'Arial, Helvetica, sans-serif',
      // font size
      size: 24,
      // text color
      color: 'white',
      // background color
      background: '#137abdc2',
      // width/height
      width: 0, height: 0
    });

    // flashNewsSlider.insert(1, "ನಾಳೆ 09/08/2019 ಶಾಲಾ ಕಾಲೇಜುಗಳಿಗೆ ಜಿಲ್ಲಾಧಿಕಾರಿ ಸಸಿಕಾಂತ್ ಸೆಂಥಿಲ್ ರಜೆ ಘೋಷಣೆ");
    // flashNewsSlider.insert(2, "Tomorrow, i.e 09/08/2019 Friday will be holiday due to rain as per the order of DC D K District");

    // db.collection("flash-news")
    //   .get()
    //   .then(querySnapshot => {
    //     var fnCnt = 1;
    //     querySnapshot.forEach(doc => {
    //       flashNewsSlider.insert(fnCnt, doc.data().news_title);
    //       fnCnt++;
    //     });
    //     if (fnCnt > 1) {
    //       $('#flash-slider').show();
    //       flashNewsSlider.start();
    //     } else {
    //       $('#flash-slider').hide();
    //     }
    //   });


    $('#flash-slider-admission').show();
    admissionSlider.insert(1, "Registration Open for <b>First PUC 2021</b>, <a href='https://forms.gle/Neopj3gb6WmtG6u58' target='_blank'>Click here to fill online enquiry form</a>");
    admissionSlider.insert(2, "<b> ಪ್ರಥಮ ಪಿಯುಸಿಗೆ 2021</b> ನೋಂದಣಿ ತೆರೆದಿರುತ್ತದೆ, <a href='https://forms.gle/Neopj3gb6WmtG6u58' target='_blank'>ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ನೋಂದಾಯಿಸಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ</a>");
    admissionSlider.start();

  });
})(jQuery);
