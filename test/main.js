$(document).ready(function () {
  $("#myCarousel").on("slide.bs.carousel", function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item")
            .eq(i)
            .appendTo(".carousel-inner");
        } else {
          $(".carousel-item")
            .eq(0)
            .appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
});

function affich() {
  var tableau = [
    tab1 = {
      URL: "./image/164946.jpg",
      name: "baby",
      lastname: "boss",
      adresse: "boss@gmail.com"
    },
    tab2 = {
      URL: "./image/aac7c425f1437c53842e7f5fc1e6c272.jpg",
      name: "baby",
      lastname: "black",
      adresse: "black@gmail.com"
    },
    tab3 = {
      URL: "./image/categ_haire_style_home@2x.png",
      name: "siwar",
      lastname: "belhadi",
      adresse: "belhadi@gmail.com"
    },
    tab4 = {
      URL: "./image/categ_lashes_home@1x.png",
      name: "ismahen",
      lastname: "belhadi",
      adresse: "ismahen@gmail.com"
    }
  ]

  var html = '<div class="carousel-item col-md-4 active">';
  for (var i = 0; i < tableau.length; i++) {
    html += ' <div class="card">'
    html += '<img class="card-img-top img-fluid" src='+tableau[i].URL+' alt="Card image cap">'
    html += '<div class="card-body">'
    html += '<h4 class="card-title">'+tableau[i].name+'</h4>'
    html += '<p class="card-text">'+tableau[i].lastname+'</p>'
    html += '<p class="card-text">'+tableau[i].adresse+'</p>'
    html += '</div>'
    html += '</div>'
    html += '</div>'
    document.getElementById("categ").innerHTML+=html;
    html = '<div class="carousel-item col-md-4 ">'
  }


}


