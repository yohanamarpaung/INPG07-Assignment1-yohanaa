function updateDom(){
    let isiNama = window.localStorage.getItem("ganti-nama");
    let isiRole = window.localStorage.getItem("ganti-role");
    let isiAva = window.localStorage.getItem("ganti-avalibity");
    let isiUsia = window.localStorage.getItem("ganti-usia");
    let isiLokasi = window.localStorage.getItem("ganti-lokasi");
    let isiYe = window.localStorage.getItem("ganti-ye");
    let isiEmail = window.localStorage.getItem("ganti-email");

    document.getElementById("ganti-nama").innerHTML = isiNama;
    document.getElementById("ganti-role").innerHTML = isiRole;
    document.getElementById("ganti-avalibity").innerHTML = isiAva;
    document.getElementById("ganti-usia").innerHTML = isiUsia;
    document.getElementById("ganti-lokasi").innerHTML = isiLokasi;
    document.getElementById("ganti-ye").innerHTML = isiYe;
    document.getElementById("ganti-email").innerHTML = isiEmail;

    document.getElementById("nama").value =
  document.getElementById("ganti-nama").innerHTML;
document.getElementById("role").value =
  document.getElementById("ganti-role").innerHTML;
document.getElementById("ava").value =
  document.getElementById("ganti-avalibity").innerHTML;
document.getElementById("umr").value =
  document.getElementById("ganti-usia").innerHTML;
document.getElementById("lokasi").value =
  document.getElementById("ganti-lokasi").innerHTML;
document.getElementById("ye").value =
  document.getElementById("ganti-ye").innerHTML;
document.getElementById("email").value =
  document.getElementById("ganti-email").innerHTML;
  }
updateDom()



  

function reset() {
    localStorage.setItem("ganti-nama", "Yohana Br Marpaung");
    localStorage.setItem("ganti-role", "Front End Designer");
    localStorage.setItem(
      "ganti-avalibity","Availability"
    );
    localStorage.setItem("ganti-usia",20);
    localStorage.setItem(
      "ganti-lokasi",
      "Palangka Raya, Indonesia"
    );
    localStorage.setItem("ganti-ye", 2);
    localStorage.setItem("ganti-email", "Yohanavanesa7@gmail.com");

    
    updateDom()

}



function data() {
  let apakahIya = confirm("Are you sure to execute this action?");

  if (apakahIya) {
    localStorage.setItem("ganti-nama", document.getElementById("nama").value);
    localStorage.setItem("ganti-role", document.getElementById("role").value);
    localStorage.setItem(
      "ganti-avalibity",
      document.getElementById("ava").value
    );
    localStorage.setItem("ganti-usia", document.getElementById("umr").value);
    localStorage.setItem(
      "ganti-lokasi",
      document.getElementById("lokasi").value
    );
    localStorage.setItem("ganti-ye", document.getElementById("ye").value);
    localStorage.setItem("ganti-email", document.getElementById("email").value);

    updateDom()

    // document.getElementById("ganti-nama").innerHTML =document.getElementById("nama").value
    // document.getElementById("ganti-role").innerHTML = document.getElementById("role").value
    // document.getElementById("ganti-").innerHTML = document.getElementById("role").value

    alert("data berhasil diubah");
  } else {
    alert("data tidak diubah");
  }

  return false;

  // window.location.replace(window.location.href)
}
