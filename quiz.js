var pertanyaan1 = prompt('Manusia biasa, Jenius, kaya raya, ahli 127 macam seni bela diri, doyan keluyuran malem - malem. Siapakah Dia?');
var pertanyaan2 = prompt('Orangpun datang, dan akan kembali, kehidupan kan jadi satuuu~ adalah Potongan lirik dari lagu anime?');
var pertanyaan3 = prompt('Game online legendaris di Indonesia, ceritanya berasal dari Mitologi Yunani, pencetus kata "Hode" ');
var pertanyaan4 = prompt('Besar, Mirip Hulk cuman kagak sixpack, asli dari dongeng Indonesia. Siapakah dia?');
var pertanyaan5 = prompt('Siapakah yang di takutin para suami hehehe');

var score = 0;
var benar = 0;
var salah = 0;

if (pertanyaan1 === 'batman') {
  score++;
  benar++;
} else {
   salah++;
}

if (pertanyaan2 === 'dragon ball') {
  score++;
  benar++;
}
else {
   salah++;
}

if (pertanyaan3 === 'ragnarok') {
  score++;
  benar++;
}
else {
    salah++;
}

if (pertanyaan4 === 'buto ijo') {
  score++;
  benar++;
}
else {
   salah++;
}

if (pertanyaan5 === 'istri') {
  score++;
  benar++;
}
else {
   salah++;
}


alert('Bosku mendapat ' + benar + ' jawaban yang benar dan '
      + salah + ' jawab salah. Bosku dapat skor ' + score + '.');

function rank(nilai) {
  var A = 'Bosku Pintar!';
  var B = 'lumayan lah ya SNI!';
  var C = 'hmm yaudalah gpp';
  var D = 'kurang terdydyk';
if( score === 5 ) {
  nilai = alert(A);
} else if (score === 4 || score === 3) {
    nilai = alert(B);
}
  else if (score === 2 || score === 1) {
    nilai = alert(C);
}
  else {
    nilai = alert(D);
}
}
rank();
