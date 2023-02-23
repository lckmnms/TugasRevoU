
function validasiForm() {
    var nama = document.forms["form"]["nama"].value;
    var tglLahir = document.forms["form"]["tanggal-lahir"].value;
    var jk = document.forms["form"]["gender"].value;
    var pesan = document.forms["form"]["pesan"].value;
    
    if (nama == "" || tglLahir == "" || jk == "" || pesan == "") {
        alert('input tidak boleh kosong');
        return false;
    }
    
    document.getElementById("out-nama").innerText = nama;
    document.getElementById("out-tgllahir").innerText = tglLahir;
    document.getElementById("out-gender").innerHTML = jk;
    document.getElementById("out-pesan").innerText = pesan;
    
    return false;
}

