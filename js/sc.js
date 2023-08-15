
$(document).ready(function () {
  

  $('#enter_reg').click(function (event) {
        event.preventDefault();
        var formData = new FormData();

        var a=$("#a").val();
        var b=$("#b").val();
        var c=$("#c").val();

        if(a=="")
        {
            $("#a").focus();
            toastr.error("ادخل الاسم");
            return false;
        }
         else if(b.trim().length == 0)
            {
                $("#b").focus();
                toastr.error("ادخل رقم الجوال");
                return false;
            }
            
            else if(c.trim().length == 0)
            {
                $("#c").focus();
                toastr.error("ادخل كلمة المرور");
                return false;
            }

        var pages="data_en";
        formData.append("a",a);
        formData.append("b",b);
        formData.append("c",c);
        formData.append("page", pages);

            var xhr = new XMLHttpRequest();
            xhr.open("POST", "acount.php", true);
            xhr.addEventListener("load", function (evt) { UploadComplete(evt); }, false);
            xhr.addEventListener("error", function (evt) { UploadFailed(evt); }, false);
            xhr.send(formData);

            function UploadComplete(evt) {

                $("#add_about").modal("hide");

                toastr.success("تمت الاضافة بنجاح");
                window.setTimeout(function () { location.reload() }, 700)

            }

            function UploadFailed(evt) {
                alert("There was an error attempting to upload the file.");

            }


        });
    });





    
         //  التسوق   -------------------------------------------------------------------------------------------
         $('#add_pr').click(function (event) {
            event.preventDefault();
            var formData = new FormData();
            var a=$("#a").val();
            var cc=$("#cc").val();
            var ccc=$("#ccc").val();
            var cccc=$("#ccccc").val();
            var ccccc=$("#ccccc").val();
    
            if(a.trim().length == 0)
            {
                toastr.error("من فضلك ادخل  العنوان");
                return false;
            }
        
            else if(cc =="")
            {
                toastr.error("من فضلك ادخل   البريد الالكتروني");
                $("#cc").focus();
                return false;
            }
            else if(ccc =="")
            {
                toastr.error("من فضلك ادخل  البريد الالكتروني");
                $("#ccc").focus();
                return false;
            }
            else if(cccc =="")
            {
                toastr.error("ادخل ارقامنا للتواصل");
                $("#cccc").focus();
                return false;
            }
            else if(ccccc =="")
            {
                toastr.error("ادخل ارقامنا للتواصل");
                $("#ccccc").focus();
                return false;
            }
           
          
             var pages="c_";
             formData.append("c", c);
             formData.append("cc", cc);
             formData.append("ccc", ccc);
             formData.append("cccc", cccc);
             formData.append("ccccc", ccccc);
             formData.append("page", pages);

             var xhr = new XMLHttpRequest();
             xhr.open("POST", "addfunction.php", true);
             xhr.addEventListener("load", function (evt) { UploadComplete(evt); }, false);
             xhr.addEventListener("error", function (evt) { UploadFailed(evt); }, false);
             xhr.send(formData);
        
             function UploadComplete(evt) {
             $("#add_co_").modal("hide");
             toastr.success("تمت الاضافة بنجاح");
             window.setTimeout(function () { location.reload() }, 3000)
              }
              function UploadFailed(evt) {
              alert("There was an error attempting to upload the file.");
          
              }
          
              });






              $(document).ready(function() {
                // استدعاء دالة التحقق من تسجيل الدخول عند النقر على الزر
                $('#loginButton').click(function() {
                  checkLoginStatus();
                });
              
                // دالة للتحقق من تسجيل الدخول باستخدام البيانات المرسلة إلى ملف PHP
                function checkLoginStatus() {
                  $.ajax({
                    url: './login_check.php', // استبدل "path/to/login_check.php" بمسار ملف PHP الذي سيتحقق من تسجيل الدخول
                    method: 'POST',
                    success: function(response) {
                      if (response == 'true') {
                        // تم تسجيل الدخول بنجاح
                      } else {
                        // المستخدم غير مسجل الدخول، توجيهه لتسجيل الدخول
                        window.location.href = './login.php'; // استبدل "path/to/login.php" بمسار صفحة تسجيل الدخول الخاصة بك
                      }
                    }
                  });
                }
              });



