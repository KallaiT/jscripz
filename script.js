// //console.log("Hello World!")
// //let vezetekNev = "0"
// let keresztNev = "Gábor"
// let szamlalo = 0
// console.log(vezetekNev + " " + keresztNev, szamlalo)

// if (vezetekNev == szamlalo) {
//   console.log("a vezeteknev egyenlőn a számlálóval")
// } else {
//   console.log("a vezeteknev nem egyenlőn a számlálóval")
// }
function login() {
  console.log("KATT")
  let passwordField = document.querySelector("#pass")
  console.log(passwordField.value)
}
if (passwordField.value == "nagytitok") {
  document.location = "titokoldal.html"
}
