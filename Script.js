let sout;
sout = "<table border='3' width='1500' cellspacing='5' cellpadding='5' style='font-size:20px'>";
i = 0;
j = 2;
while (i < 10) {
    sout = sout + "<tr>";
    i++;
    while (j <= 9) {
        sout = sout + "<td>" + j + "x" + i + "=" + i * j + "</td>"
        j++;
    }
    j=2;
    sout = sout + "</tr>";
}
sout = sout + "</table>";
document.write(sout);