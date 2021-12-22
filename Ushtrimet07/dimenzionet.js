function merrDimenzionet(gjeresia,lartesia,thellesia)
{
    var siperfaqja = gjeresia*lartesia;
    var vellimi = gjeresia*lartesia*thellesia;
    var dimenzionet = [siperfaqja,vellimi];
    return dimenzionet;
}
var gjeresia = prompt("Jep gjeresine");
var lartesia = prompt("Jep lartesine");
var thellesia = prompt("Jep thellesine");
var siperfaqjaKubit = merrDimenzionet(parseInt(gjeresia),parseInt(lartesia),parseInt(thellesia))[0];
var vellimiKubit = merrDimenzionet(parseInt(gjeresia),parseInt(lartesia),parseInt(thellesia))[1];

var pSiperfaqja = document.getElementById("siperfaqja");
pSiperfaqja.textContent+=siperfaqjaKubit + " cm2";
document.getElementById("vellimi").textContent += vellimiKubit + " cm3";

