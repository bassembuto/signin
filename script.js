
let pro1 = prompt('من فضلك أكتب الأيميل');
let pro2 = prompt('من فضلك أكتب كلمة المرور');

let email = 'bassemshanlo@gmail.com';
let password = 12345;

console.log(pro1.toLowerCase().trim() == email && pro2 == password);


if (pro1.toLowerCase().trim() == email && pro2 == password) {
    document.write('<a href = "link.html">دخول</a>')
} else {
    document.write('<a href = "index.html">هناك خطأ في كلمة المرور أو الأيميل من فضلك أعد المحاولة.</a>')
}

