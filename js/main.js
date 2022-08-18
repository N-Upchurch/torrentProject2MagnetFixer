let magLink = document.querySelector(".usite>a");
let magLinkURI = decodeURIComponent(magLink.href).match(/magnet:.*/)[0];
magLink.href = magLinkURI;
magLink.innerHTML = "Download Torrent with (Ad-Free) Magnet Link";