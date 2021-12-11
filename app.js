
    // event.preventDefault();
    function SubForm() {
      let span = document.querySelector('span');
      span.style.display = "block";
      span.style.color = "#0D6EFD";
      let dob = document.getElementById('dob');
      let name = document.getElementById('name');
      let phone = document.getElementById('phone');
      console.log(phone.value.length)


      $.ajax({
        url: "https://api.apispreadsheets.com/data/19298/",
        type: "post",
        data: $("#myForm").serializeArray(),
        success: function () {
          // alert("Your Form Data was Submitted")
          span.innerText = "Your data Submited"
          span.style.display = "block";
          span.style.color = "#0dfd55";
          setTimeout(() => {
            span.style.display = "none";
            phone.value = "";
            dob.value = "";
            name.value = "";
          }, 2000);
          
        },
        error: function () {
          // alert("There was an error")
          span.innerText = "We can't send your Data."
          span.style.color = "red";
        }
      });
    }
