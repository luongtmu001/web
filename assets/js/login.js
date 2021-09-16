function check(){
    let pass = document.loginForm.password.value,
         mail = document.loginForm.email.value,
         atpos = mail.indexOf("@"),
         dotpos = mail.lastIndexOf("."); 
         console.log(mail,pass,atpos);
     if (mail == '') {
         alert('Vui lòng nhập email');
         return false;
     } else if (atpos < 1 || (dotpos - atpos < 2)) 
         {
             alert('Địa chỉ email không hợp lệ');
             return false;
         } else if (pass == '') 
                 {
                     alert('Vui lòng nhập mật khẩu!');
                     return false;
                 } else if (pass.length < 6 ) 
                         {
                             alert('Mật khẩu phải lớn hơn 6 kí tự');
                             return false;
                         } else {
                             return true;
                         }
     
 }