(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"MS-06R Psycho Zaku",image:"https://www.mahq.net/mecha/gundam/thunderbolt-ova/ms-06r.jpg",isClicked:!1},{id:2,name:"MS-06S Zaku II Commander Type Char Aznable Custom",image:"https://www.mahq.net/mecha/gundam/origin-ova/ms-06s.jpg",isClicked:!1},{id:3,name:"MS-05 Zaku I",image:"https://www.mahq.net/mecha/gundam/origin-ova/ms-05-kycilia.jpg",isClicked:!1},{id:4,name:"MS-06F2 Zaku II Late War F2 Variant",image:"https://www.mahq.net/mecha/gundam/0083/ms-06f2-neuen.jpg",isClicked:!1},{id:5,name:"MS-06 Zaku II Thunderbolt Sector Variant",image:"https://www.mahq.net/mecha/gundam/thunderbolt-ova/ms-06.jpg",isClicked:!1},{id:6,name:"MS-06C R6 Zaku II",image:"https://www.mahq.net/mecha/gundam/origin-ova/ms-06c-6r6.jpg",isClicked:!1},{id:7,name:"MS-06JC Ground Combat Zaku",image:"https://www.mahq.net/mecha/gundam/08thmsteam/ms-06jc-ash.jpg",isClicked:!1},{id:8,name:"MS-06K Zaku II Cannon",image:"https://www.mahq.net/mecha/gundam/unicorn-ova/ms-06k.jpg",isClicked:!1},{id:9,name:"MS-06R-1A Zaku II Black Tri-Stars custom",image:"https://www.mahq.net/mecha/gundam/origin-ova/ms-06r-1a-gaia.jpg",isClicked:!1},{id:10,name:"MS-06D Zaku II Desert",image:"https://www.mahq.net/mecha/gundam/unicorn-ova/ms-06d.jpg",isClicked:!1},{id:11,name:"MS-05S Zaku I Commander Type Char Aznable Custom",image:"https://www.mahq.net/mecha/gundam/origin-ova/ms-05s.jpg",isClicked:!1},{id:12,name:"MS-05L Zaku I Sniper Type",image:"https://www.mahq.net/mecha/gundam/unicorn-ova/ms-05l.jpg",isClicked:!1}]},,,,,,,,function(e,a,n){e.exports=n(19)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),c=n(3),o=n.n(c),m=n(4),r=n(5),l=n(7),s=n(6),u=n(8);n(14);var d=function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{onClick:function(){return e.handleClick(e.id,e.name)},className:"img-container"},i.a.createElement("img",{id:e.id,src:e.image,alt:e.name,isclicked:e.isClicked})))};n(15);var h=function(){return i.a.createElement("div",{className:"header"},i.a.createElement("h1",null,'"Mobile Suit Gundam - Zaku identification game!"'),i.a.createElement("h3",null,'"Amuro! Click on the all the different Zakus!'),i.a.createElement("h3",null,'"If you click on the same Zaku twice, the battle is lost!'))};n(16);var g=function(e){return i.a.createElement("div",{className:"navbar"},i.a.createElement("h5",null,'"Gundam: Zaku identification clicky game!"'),i.a.createElement("span",{className:"counter"},"Correct: ",e.count,"/12"))};n(17);var k=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)},w=n(1),p=(n(18),function(e){function a(){var e,n;Object(m.a)(this,a);for(var t=arguments.length,i=new Array(t),c=0;c<t;c++)i[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(i)))).state={chars:w,isClicked:!1,count:0},n.shuffle=function(e){for(var a,n,t=e.length;t;)n=Math.floor(Math.random()*t--),a=e[t],e[t]=e[n],e[n]=a;return e},n.handleClick=function(e,a){console.log("Stop wasting your time sucker, the MS id is ".concat(e));for(var t,i=n.state.chars,c=0;c<i.length;c++){i[c].id===e&&(t=c)}i[t].isClicked?(console.log("You already clicked on that MS!"),alert("Amuro, you already clicked on the ".concat(a,"!\n        Your final score is ").concat(n.state.count,".\n        Press 'OK' to play again, Feddy punk!")),window.location.reload()):(i[t].isClicked=!0,n.shuffle(i),n.setState({chars:i,count:n.state.count+1}),11===n.state.count&&alert("You win! You must be a newtype...Play again?")),console.log(i)},n}return Object(u.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement(g,{count:this.state.count}),i.a.createElement(h,null),i.a.createElement(k,null,w.map(function(a){return i.a.createElement(d,{key:a.id,id:a.id,image:a.image,name:a.name,isclicked:a.isClicked,handleClick:e.handleClick})})))}}]),a}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.bcece510.chunk.js.map