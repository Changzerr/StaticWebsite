var box = document.getElementById("box");
      var spans = box.getElementsByTagName("span");
      var lis = box.getElementsByTagName("li");
      for (var i = 0; i < spans.length; i++) {
        spans[i].aaa = i;
        spans[i].onmouseover = function () {
          for (var i = 0; i < spans.length; i++) {
            spans[i].className = "";
            lis[i].className = "";
          }
          this.className = "current";
          lis[this.aaa].className = "current";
        }
      }