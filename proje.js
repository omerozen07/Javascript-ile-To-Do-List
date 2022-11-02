// HTML SAYFASINDAKİ ELEMENTLERİN SEÇİLMESİ

let btnDOM = document.querySelector('#liveToastBtn')  /// EKLE BUTONUNUN ID SINI ATADIK
let listDOM = document.querySelector('#list') /// ul nin ID SINI ATADIK
let taskDOM = document.querySelector("#task") /// İNPUTUN İD SİNİ ATADIK
let ullength = document.getElementsByTagName("li")  ///burda var olan bütün li elementlerini alıp ullength'e atadık böylece elimizde kaç madde yani li olduğunu öğrendik.


// MEVCUT LİSTEYİ SİLMEK İÇİN CARPI BUTONUNUN OLUSTURULMASI
for (let i = 0; i < ullength.length; i++) {
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7"; // listede carpı ısaretını olusturabilmek için "\u00D7" kodunu kullandık
    closeButton.classList.add("close");   ///  butona close clasını ekledik
    closeButton.onclick = removeButton;  // carpı isaretine basınca removeButton fonksiyonu calısacak
    ullength[i].append(closeButton);
    ullength[i].onclick = check; // üzerine tıklayınca check fonksiyonu calısacak 
}


// Butonlara dinleyici tanımlanması

btnDOM.addEventListener('click', elemanEkle)


// FONKSİYONLAR

function check() {
    this.classList.toggle("checked")  ///toggle switch genelde iki şıklı (evet, hayır veya aktif pasif) gibi durumları belirtmek için kullanılır. burda toggle("checked")'i kullanarak tıklanan maddenin üstünü çiz ve yanına tik işareti koy demiş olduk.
}

function removeButton() {
    this.parentElement.remove();  ///  carpının bulundugu elementi silmek için parentElement.remove classını kullandık
}



/// ELEMAN EKLEMEK İCİN GEREKENLER

function elemanEkle() {

    if (taskDOM.value == "") {
        $(".error").toast("show");
    } else {
        $(".success").toast("show");

        let liDOM = document.createElement('li');  //yeni bir li elementi yaratacagımızı ilan edip yaratacagımız li elementini liDOM değişkenine atayacağımızı söyledik.
        liDOM.innerHTML = task.value; //  Burda ise inputID.değer diyerek inputa girilen değerlerin liDOM'a atanması gerektiğini belirttik.
        listDOM.append(liDOM); // Yaratacağımız liDOM değişkeninin her seferinde mevcut listenin en sonuna eklenmesi gerektiğini tanımladık.
        taskDOM.value = "";

        //SONRADAN EKLENEN MADDELERİ SİLMEK İÇİN AYNI İŞLEMLERİN TEKRARI
        liDOM.onclick = check;

        let closeButton = document.createElement('span');
        closeButton.textContent = "\u00D7";
        closeButton.classList.add('close');
        closeButton.onclick = removeButton;

        liDOM.append(closeButton);
        listDOM.append(liDOM);
        inputElement.value = "";
    }
}