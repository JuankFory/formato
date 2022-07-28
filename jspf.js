function pdf(){  
var doc = new jsPDF('p','mm','letter');
doc.setFontSize(12);
doc.setTextColor(0,85,136);
doc.setFont("calibri");
doc.setFontType("bold");
var cm = document.getElementById('campotexto').value;
data = Array();
doc.internal.write(0, "Tw");
 data =doc.text(cm,10, 20, {maxWidth: 20, align: "justify"});// los numeros son los de X y el  eje Y
 data =doc.text('Este es el segundo enunciado para validar que tal esta quedando',25, 25, {maxWidth: 20, align: "justify"});
//doc.output('save', 'file.pdf');
 let icon = document.getElementById('txtcedula').value;
document.write('Archivo Descargado satisfatoriamente');
console.log(data)
var ruta =doc.src= 'http://localhost/formato/folder';
//var ruta2 =location.href="folder/";
var guardar= doc.save(icon+'.pdf');
location.href='index.html';
//var logo = new Image();
//logo.src='fondo.jpeg';
//var img = 'Comul.png';
//doc.addImage(img, 'jpeg', 10, 10, 50, 70);

}
/*
API.addFont = function(postScriptName, fontName, fontStyle) {
    addFont(postScriptName, fontName, fontStyle, 'StandardEncoding');
  };

  doc.addFont('ComicSansMS', 'Comic Sans', 'normal');
  doc.setFont('Comic Sans');
  doc.text(50,50,'Hello World');  */