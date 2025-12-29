export default function (num: any) {
  if (num == null) {
    return;
  }
  var str = num.toLocaleString("EN-US");
  str = str.replace(/\./, ",");
  str = str.replace(/,/g, ".");
  return "Rp. " + str;
}
