var i, j;

for(i = 1; i < 10; i++) {
  if(i % 2 === 1) continue;
  
  document.write("<div>");
  document.write("<h2>" + i + "단</h2>");

  for(j = 1; j < 10; j++) {
    document.write(i + " X " + j + " = " + (i * j) + "<br>");
  }
  document.write("</div>");
}