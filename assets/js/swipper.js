var url = "https://sheets.googleapis.com/v4/spreadsheets/" + "1bEdzX_kOyGrnbLskQtjvzVN-UtdEgMmetY4wIRnYU5M" + "/values/" + "Sheet1!A2:Z986" + "?alt=json&key=" + "AIzaSyDxwJEyQxr0yZRLnjJ01tSydNU7Bl_wF74";

$.getJSON(url, "callback=?").success(function (result) {
  let value = result.values;

  $.each(value, function (i, data) {
    $("#swiper-data").append(
      `
         <div class='swiper-slide'>
            <div style="width:100%;font-size:14px;text-align:center;margin-left:10%;margin-right:10%;">
                <h3 class="har" style="text-transform:capitalize;">` +
        data[1] +
        `</h3>
                <p style="font-size:14px; margin-top:15px;">` +
        data[4] +
        `</p>
                <p style="font-size:11px; margin-top:15px;color: #aaaaaa;">` +
        data[0] +
        `</p>
        </div>
        </div>       
        `
    );
    console.log(data);
  });
});
