$(document).ready(function(){
    $("#btn-search").click(function(){ // Ketika tombol simpan diklik
        // Ubah text tombol search menjadi SEARCHING...
        // Dan tambahkan atribut disable pada tombol nya agar tidakbisa diklik lagi
        $(this).html("SEARCHING...").attr("disabled", "disabled");

        $.ajax({
            url: baseurl + 'welcome/search', // File tujuan
            type: 'POST', // Tentukan type nya POST atau GET
            data: {keyword: $("#keyword").val()}, // Set data yang akandikirim
            dataType: "json",
            beforeSend: function(e) {
            if(e && e.overrideMimeType) {
                e.overrideMimeType("application/json;charset=UTF-8");
            }
            },

            success: function(response){ // Ketika proses pengirimanberhasil
            // Ubah kembali text button search menjadi SEARCH
            // Dan hapus atribut disabled untuk meng-enable kembalibutton search nya
                $("#btn-search").html("SEARCH").removeAttr("disabled");
                // console.log($("#keyword").val());
                // Ganti isi dari div view dengan view yang diambil dari controller function search
                $("#view").html(response.hasil);
                // $("#pagination").hide();
            },
            error: function (xhr, ajaxOptions, thrownError) { // Ketikaterjadi error
                alert(xhr.responseText); // munculkan alert
            }
        });
    });
});