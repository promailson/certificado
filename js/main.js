jQuery('#qrcode').qrcode({
		text: "http://www.promailson.com/141234123fasdfq4",
		height: 100,
		width: 100

});	


var cache_width = $('#renderPDF').width(); //Criado um cache do CSS
        var a4  =[1070,700]; // Widht e Height de uma folha a4

        function getPDF(){
        // Setar o width da div no formato a4
        $("#renderPDF").width(1070).css('max-width','none');

        // Aqui ele cria a imagem e cria o pdf
        html2canvas($('#renderPDF'), {
          onrendered: function(canvas) {
            var img = canvas.toDataURL("image/png",1.0);  
            var doc = new jsPDF({orientation: 'landscape',unit:'in', format:[11.693,8,267]});
            doc.addImage(img, 'JPEG', 0, 0);
            doc.save('Certificado');
            //Retorna ao CSS normal
            $('#renderPDF').width(cache_width);
          }
        });
        }

$('#cmd').click(function () {   
   getPDF();
});


