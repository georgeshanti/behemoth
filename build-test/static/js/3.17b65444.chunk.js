webpackJsonp([3],{124:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(0),d=a.n(o),A=a(170),l=a.n(A),m=a(172),s=a(33),g=(a.n(s),a(178)),c=a.n(g),p=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),h=function(e){function t(e){n(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={cardInfo:c.a},a}return r(t,e),p(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.state.cardInfo.length;t++){var a=d.a.createElement(m.a,{key:t,details:this.state.cardInfo[t]});e.push(a)}return d.a.createElement("div",{style:{height:"100vh",overflow:"auto"}},d.a.createElement("header",null,d.a.createElement("h1",{className:l.a.title},"GET IN TOUCH")),d.a.createElement("div",{className:l.a.container},e))}}]),t}(o.Component);t.default=h},170:function(e,t,a){var n=a(171);"string"===typeof n&&(n=[[e.i,n,""]]);var i={hmr:!1};i.transform=void 0;a(120)(n,i);n.locals&&(e.exports=n.locals)},171:function(e,t,a){t=e.exports=a(119)(!0),t.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Raleway);",""]),t.push([e.i,"body{overflow-x:hidden}header{text-align:center;font-family:Raleway,sans-serif;font-size:1.75em}.white-bg___16GGP{position:fixed;top:-10vh;z-index:0;bottom:0;width:100%;background-color:#f8f8ff}h1{position:relative}.container___1RfMf{margin:0 7.5vw;display:grid;grid-template-columns:auto auto auto;grid-gap:5vw;z-index:2}.title___2q755{color:#000;font-family:Montserrat;text-align:center;font-size:40px}@media screen and (max-width:1300px){.container___1RfMf{grid-template-columns:auto auto;margin:0 7.5vw}}@media screen and (max-width:450px){.container___1RfMf{grid-template-columns:auto;margin:0 10vw}.title___2q755{font-size:25px}}","",{version:3,sources:["/home/poopi/stuffs/excel/excelbuild/src/pages/contacts/style.module.css"],names:[],mappings:"AAEA,KACC,iBAAmB,CACnB,AAED,OACC,kBAAmB,AACnB,+BAAmC,AACnC,gBAAkB,CAClB,AAED,kBACC,eAAgB,AAChB,UAAW,AACX,UAAW,AACX,SAAU,AACV,WAAY,AACZ,wBAA6B,CAC7B,AAED,GACC,iBAAmB,CACnB,AACD,mBACC,eAAkB,AAElB,aAAa,AACb,qCAAuC,AACvC,aAAc,AACd,SAAW,CACX,AAED,eACC,WAAY,AAEZ,uBAA0B,AAC1B,kBAAmB,AACnB,cAAgB,CAChB,AAED,qCACC,mBACC,gCAAiC,AACjC,cAAkB,CAClB,CACD,AAGD,oCACC,mBACC,2BAA4B,AAC5B,aAAiB,CACjB,AAED,eACC,cAAgB,CAChB,CACD",file:"style.module.css",sourcesContent:["@import url('https://fonts.googleapis.com/css?family=Raleway');\n\nbody{\n\toverflow-x: hidden;\n}\n\nheader{\n\ttext-align: center;\n\tfont-family: 'Raleway', sans-serif;\n\tfont-size: 1.75em;\n}\n\n.white-bg {\n\tposition: fixed;\n\ttop: -10vh;\n\tz-index: 0;\n\tbottom: 0;\n\twidth: 100%;\n\tbackground-color: ghostwhite;\n}\n\nh1{\n\tposition: relative;\n}\n.container{\n\tmargin: 0vh 7.5vw;\n\t/* position: absolute; */\n\tdisplay:grid;\n\tgrid-template-columns: auto auto auto ;\n\tgrid-gap: 5vw;\n\tz-index: 2;\n}\n\n.title{\n\tcolor:black;\n\t/* color: white; */\n\tfont-family: 'Montserrat';\n\ttext-align: center;\n\tfont-size: 40px;\n}\n\n@media screen and (max-width:1300px){\n\t.container{\n\t\tgrid-template-columns: auto auto;\n\t\tmargin: 0vh 7.5vw;\n\t}\n}\n\n\n@media screen and (max-width:450px){\n\t.container{\n\t\tgrid-template-columns: auto;\n\t\tmargin: 0vh 10vw;\n\t}\n\n\t.title{\n\t\tfont-size: 25px;\n\t}\n}"],sourceRoot:""}]),t.locals={"white-bg":"white-bg___16GGP",container:"container___1RfMf",title:"title___2q755"}},172:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=a(0),d=a.n(o),A=a(173),l=a.n(A),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=function(e){function t(){return n(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),m(t,[{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement("div",{className:l.a.card},d.a.createElement("img",{alt:this.props.details.name,src:this.props.details.img}),d.a.createElement("div",{className:l.a["card-info"]},d.a.createElement("div",{className:l.a.descp},this.props.details.designation," ",d.a.createElement("br",null)),this.props.details.name,"  ",d.a.createElement("br",null),d.a.createElement("div",{className:l.a["contact-info"]},d.a.createElement("img",{alt:"email",src:a(175)})," ",d.a.createElement("a",{href:"mailto:"+this.props.details.email},this.props.details.email)," ",d.a.createElement("br",null),d.a.createElement("img",{alt:"phone",src:a(176)})," ",d.a.createElement("a",{href:"tel:"+this.props.details.phone},this.props.details.phone),d.a.createElement("br",null))),d.a.createElement("div",{className:l.a["top-right"]},d.a.createElement("a",{href:this.props.details.linkedin,target:"_black"},d.a.createElement("img",{alt:"linkedin",src:a(177)}))),d.a.createElement("div",{className:l.a["gradient-overlay"]})))}}]),t}(o.Component);t.a=s},173:function(e,t,a){var n=a(174);"string"===typeof n&&(n=[[e.i,n,""]]);var i={hmr:!1};i.transform=void 0;a(120)(n,i);n.locals&&(e.exports=n.locals)},174:function(e,t,a){t=e.exports=a(119)(!0),t.push([e.i,"@import url(https://fonts.googleapis.com/css?family=Raleway);",""]),t.push([e.i,".card___2jg7C{background-color:#daa520;z-index:0;-webkit-transform:scale(.95);-ms-transform:scale(.95);transform:scale(.95);-webkit-transition:-webkit-box-shadow .5s,-webkit-transform .5s;transition:-webkit-box-shadow .5s,-webkit-transform .5s;-o-transition:box-shadow .5s,transform .5s;transition:box-shadow .5s,transform .5s;transition:box-shadow .5s,transform .5s,-webkit-box-shadow .5s,-webkit-transform .5s}.card___2jg7C,.card___2jg7C img{position:relative;height:25vw;width:25vw;border-radius:10px}.card___2jg7C img{background-size:cover;background-repeat:no-repeat;background-position:50% 50%}.top-right___3JKfB{position:absolute;top:20px;right:20px;z-index:1;color:#fff}.top-right___3JKfB img{height:32px;width:auto;border-radius:initial}.card___2jg7C:hover{background:#000;opacity:.9;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-box-shadow rgba(0,0,0,.2) 5px 20px 30px;transition:-webkit-box-shadow rgba(0,0,0,.2) 5px 20px 30px;-o-transition:box-shadow 5px 20px 30px rgba(0,0,0,.2);transition:box-shadow rgba(0,0,0,.2) 5px 20px 30px;transition:box-shadow rgba(0,0,0,.2) 5px 20px 30px,-webkit-box-shadow rgba(0,0,0,.2) 5px 20px 30px}.card-info___2Sr_a{position:absolute;left:0;margin:0 auto;padding:0 20px;bottom:20px;color:#fff;font-style:16px;line-height:24px;z-index:1;opacity:1;font-family:Montserrat,sans-serif}.card-info___2Sr_a .descp___GaBkL{font-size:1.5em;font-weight:bolder}.card-info___2Sr_a .contact-info___2bkzP{font-size:.9em;font-weight:700}a{text-decoration:none;color:#fff}.card-info___2Sr_a .contact-info___2bkzP img{height:14px;width:auto;border-radius:initial}.gradient-overlay___3lqB9{background-image:-webkit-linear-gradient(transparent,rgba(0,0,0,.6) 85%);background-image:-o-linear-gradient(transparent 0,rgba(0,0,0,.6) 85%);background-image:-webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(85%,rgba(0,0,0,.6)));background-image:linear-gradient(transparent,rgba(0,0,0,.6) 85%);width:100%;height:100%;position:absolute;top:0;left:0;z-index:0;border-radius:10px}@media screen and (max-width:1300px){.card___2jg7C{height:40vw;width:40vw}.card-info___2Sr_a{font-size:15px}.card___2jg7C img{height:40vw;width:40vw}.top-right___3JKfB{top:5.5vh;right:3vw}.top-right___3JKfB img{height:32px;width:auto}}@media screen and (max-width:450px){.card___2jg7C,.card___2jg7C img{height:80vw;width:80vw}.top-right___3JKfB{top:3vw;right:3vw}.top-right___3JKfB img{height:25px;width:auto}}","",{version:3,sources:["/home/poopi/stuffs/excel/excelbuild/src/components/contact-card/style.module.css"],names:[],mappings:"AAGA,cAIQ,yBAA4B,AAE5B,UAAW,AACX,6BAA+B,AAC3B,yBAA2B,AACvB,qBAAuB,AAC/B,gEAAoE,AACpE,wDAA4D,AAC5D,2CAA+C,AAC/C,wCAA4C,AAC5C,oFAA6F,CACpG,AAED,gCAhBQ,kBAAmB,AACnB,YAAY,AACZ,WAAY,AAEZ,kBAAoB,CAoB3B,AARD,kBAKQ,sBAAuB,AACvB,4BAA6B,AAC7B,2BAA6B,CACpC,AAED,mBACQ,kBAAmB,AACnB,SAAS,AACT,WAAY,AACZ,UAAW,AACX,UAAa,CAChB,AAED,uBACQ,YAAa,AACb,WAAY,AACZ,qBAAuB,CAC9B,AAED,oBACG,gBAAkB,AAClB,WAAW,AACX,2BAA4B,AACxB,uBAAwB,AACpB,mBAAoB,AAC5B,mEAAqE,AACrE,2DAA6D,AAC7D,sDAAwD,AACxD,mDAAqD,AACrD,kGAAsG,CACrG,AAGJ,mBACI,kBAAmB,AACnB,OAAQ,AACR,cAAe,AACf,eAAgB,AAChB,YAAa,AACb,WAAY,AACZ,gBAAiB,AACjB,iBAAkB,AAClB,UAAW,AACX,UAAU,AACV,iCAAsC,CACvC,AAED,kCACQ,gBAAiB,AACjB,kBAAoB,CAC3B,AACD,yCACE,eAAiB,AACjB,eAAkB,CACzB,AACO,EACK,qBAAsB,AACtB,UAAY,CACjB,AACA,6CACQ,YAAa,AACb,WAAY,AACZ,qBAAuB,CAC9B,AAEH,0BAEE,yEAAmF,AACnF,sEAA8E,AAC9E,gHAA2H,AAC3H,iEAA2E,AAC3E,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,MAAM,AACN,OAAO,AACP,UAAW,AACX,kBAAoB,CACrB,AAED,qCACE,cACQ,YAAa,AACb,UAAY,CACnB,AACD,mBACQ,cAAgB,CACvB,AACD,kBACE,YAAa,AACb,UAAY,CACb,AACD,mBACQ,UAAU,AACV,SAAW,CACd,AACL,uBACQ,YAAa,AACb,UAAY,CACnB,CACR,AAEK,oCAKQ,gCACE,YAAa,AACb,UAAY,CACb,AACD,mBACE,QAAS,AACT,SAAW,CACd,AACC,uBACE,YAAa,AACb,UAAY,CACnB,CACR",file:"style.module.css",sourcesContent:["@import url('https://fonts.googleapis.com/css?family=Raleway');\n\n\n.card{\n        position: relative;\n        height:25vw;\n        width: 25vw;\n        background-color: goldenrod;\n        border-radius: 10px;\n        z-index: 0;\n        -webkit-transform: scale(0.95);\n            -ms-transform: scale(0.95);\n                transform: scale(0.95);\n        -webkit-transition: -webkit-box-shadow 0.5s, -webkit-transform 0.5s;\n        transition: -webkit-box-shadow 0.5s, -webkit-transform 0.5s;\n        -o-transition: box-shadow 0.5s, transform 0.5s;\n        transition: box-shadow 0.5s, transform 0.5s;\n        transition: box-shadow 0.5s, transform 0.5s, -webkit-box-shadow 0.5s, -webkit-transform 0.5s;\n}\n\n.card img{\n        position: relative;\n        height: 25vw;\n        width: 25vw;\n        border-radius: 10px;\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: 50% 50%;\n}\n\n.top-right {\n        position: absolute;\n        top:20px;\n        right: 20px;\n        z-index: 1;\n        color: white;\n    }\n\n    .top-right img{\n            height: 32px;\n            width: auto;\n            border-radius: initial;\n    }\n\n    .card:hover{\n       background: black;\n       opacity:.9;\n       -webkit-transform: scale(1);\n           -ms-transform: scale(1);\n               transform: scale(1);\n       -webkit-transition: -webkit-box-shadow 5px 20px 30px rgba(0,0,0,0.2);\n       transition: -webkit-box-shadow 5px 20px 30px rgba(0,0,0,0.2);\n       -o-transition: box-shadow 5px 20px 30px rgba(0,0,0,0.2);\n       transition: box-shadow 5px 20px 30px rgba(0,0,0,0.2);\n       transition: box-shadow 5px 20px 30px rgba(0,0,0,0.2), -webkit-box-shadow 5px 20px 30px rgba(0,0,0,0.2)\n       }\n\n\n    .card-info{\n        position: absolute;\n        left: 0;\n        margin: 0 auto;\n        padding: 0 20px;\n        bottom: 20px;\n        color:white;\n        font-style: 16px;\n        line-height: 24px;\n        z-index: 1;\n        opacity:1;\n        font-family: 'Montserrat', sans-serif;\n      }\n\n      .card-info .descp{\n              font-size: 1.5em;\n              font-weight: bolder;\n      }\n      .card-info .contact-info{\n        font-size: 0.9em;\n        font-weight: bold;\n}\n        a{\n             text-decoration: none;\n             color:white;\n       }\n        .card-info .contact-info img{\n                height: 14px;\n                width: auto;\n                border-radius: initial;\n        }\n\n      .gradient-overlay{\n        /* bg-gradient: */\n        background-image: -webkit-linear-gradient(rgba(0,0,0,0.00) 0%, rgba(0,0,0,.6) 85%);\n        background-image: -o-linear-gradient(rgba(0,0,0,0.00) 0%, rgba(0,0,0,.6) 85%);\n        background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0.00)), color-stop(85%, rgba(0,0,0,.6)));\n        background-image: linear-gradient(rgba(0,0,0,0.00) 0%, rgba(0,0,0,.6) 85%);\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top:0;\n        left:0;\n        z-index: 0;\n        border-radius: 10px;\n      }\n\n      @media screen and (max-width:1300px){\n        .card{\n                height: 40vw;\n                width: 40vw;\n        }\n        .card-info{\n                font-size: 15px;\n        }\n        .card img{\n          height: 40vw;\n          width: 40vw;\n        }\n        .top-right {\n                top:5.5vh;\n                right: 3vw;\n            }\n        .top-right img{\n                height: 32px;\n                width: auto;\n        }\n}\n\n      @media screen and (max-width:450px){\n              .card{\n                      height: 80vw;\n                      width: 80vw;\n              }\n              .card img{\n                height: 80vw;\n                width: 80vw;\n              }\n              .top-right {\n                top: 3vw;\n                right: 3vw;\n            }\n              .top-right img{\n                height: 25px;\n                width: auto;\n        }\n}\n\n"],sourceRoot:""}]),t.locals={card:"card___2jg7C","top-right":"top-right___3JKfB","card-info":"card-info___2Sr_a",descp:"descp___GaBkL","contact-info":"contact-info___2bkzP","gradient-overlay":"gradient-overlay___3lqB9"}},175:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCgcTDwjXHLnlAAABB0lEQVQ4y7WToWqCYRhGzzc0WBUZ3oDZtrTw34DY1szmBS9AsC5ZvYBh2Q0IwqL1T1bLNkEQlKGgZ2HT6fyVX4ZP/J5z4AvPC9dOADDHbQr2PXwCFuw4M01mdixgKxW8TSv4QRGAJ17PfOeeRwAm7Nyl9VO0dZdb7Fvou1K1bTiCg21VV/Z/hYaRU1V75g7wnD1Vp0Y29gSw7EjVoaUdXnKo6sgy/BHAvANVx1YArDhWdWAeEgQwa1fVuVWrzlXtmv1pjwUAm27UtWt1Y3OvSRbAmgtVF9YO3huqmYR5vXjHA/Ac4uM2QYAQE3MiNylW+j8hw4QikW8p2AiYXDzviw/o8hO9er4AH8uoVxvo1qAAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMTAtMDdUMTk6MTU6MDgrMDI6MDD/f8MKAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTEwLTA3VDE5OjE1OjA4KzAyOjAwjiJ7tgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="},176:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCgcTECO2+k47AAABCUlEQVQ4y5WSMUtCYRSGj5eGgoQILJsFudQktPoTnCMiGhxEcBTcBOlHiL9AaHN3dQgjkIbAaBK5i5ModM3L0+BFvu+q99ze7Tu8D+e83zkiIiKCy4geKUkmXDwA7v9nhy+OdHt+aweo6MAAU1NONOAXW/V4vyPzSKWoAe/WO5CONlLDGuhBD33FamsPyGp+J+XJizFgTe0gwrXRw8dNgjwbKcZkdOCYsYEMSevILUsDeeNSR0qsDeSbm7B+xwd9CvuQqrWRH5qc8UgQfnib812kGbkr+85mVHCiyBM+cerudikyiwFe92XJ8XnA7h1YK6e0WCS2h1CWthXaS3A0XFCmxwSfAflN7Q+xVI61IBK34QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0xMC0wN1QxOToxNjozNSswMjowMPsQHioAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTAtMDdUMTk6MTY6MzUrMDI6MDCKTaaWAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="},177:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCgcTIAdVv5wZAAABO0lEQVRIx+WVoUsEQRSHv90TdMFm8LQod7h4ySJiNdr8EwRBLBYFi6CCZrNdw8GimATBoMVqssoFzysXroinLv4ss7N7eIKzaxB8Zd7v8d7HvDezOyhUXa/KY13VFaIoV3Fikad3BshvsScVKAf8YuW9gC4R29w5EjIDqZnIocsUU8C1RVZcAGkLZeuN521hVSVQWZcuO+g9xhb3LFBy2UDhe5DewjbrxptlEzjixuh9hjjgiicmmGGXWv8ZNGxkSZK0bPWpJjP5gY77n8L3tuI1UuG9sEYz1T8AeB3QmEasfmbHCaBAFzzS1pYN3ToB2GMRH9iwkQc+XABzZh3VlGnijZYLILBexXqxCyAzz6+hX/2h/FdA+jUOat54IQBVq4dtzrQ6SXYS+gvvQlyoPvY5LwQ4o9DzfqLqJ2Ulu9Am7tARAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTEwLTA3VDE5OjMyOjA3KzAyOjAws4cRWwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0xMC0wN1QxOTozMjowNyswMjowMMLaqecAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"},178:function(e,t){e.exports=[{contributors:[{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"}],createdBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},updatedBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},name:"V. Pranav",designation:"Chairman",img:"https://avatars0.githubusercontent.com/u/33261474?s=400&v=4",email:"vpranav.mec@gmail.com",phone:"8137816854",github:"https://github.com/pranavvalson",id:3,createdAt:"2018-10-15T09:17:59.352Z",updatedAt:"2018-10-15T11:39:47.044Z"},{contributors:[{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"}],createdBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},updatedBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},name:"Mohammed Fabin",designation:"General Secretary",img:"https://avatars3.githubusercontent.com/u/44129975?s=460&v=4",email:"mohammedfabin.mec@gmail.com",phone:"8848054308",linkedin:"https://www.linkedin.com/in/mohammed-fabin-572aab160",github:"https://github.com/MohammedFabin",id:4,createdAt:"2018-10-15T11:36:39.045Z",updatedAt:"2018-10-15T17:29:22.143Z"},{contributors:[{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"}],createdBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},updatedBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},name:"Rakesh Krishnan R.",designation:"Joint Secretary",img:"https://avatars1.githubusercontent.com/u/43996665?s=460&v=4",email:"rakeshkr.mec@gmail.com",phone:"8281825893",linkedin:"https://www.linkedin.com/in/rakeshkrishnanr/",github:"https://github.com/rakeshkr97",id:5,createdAt:"2018-10-15T11:39:51.605Z",updatedAt:"2018-10-15T11:56:30.812Z"},{contributors:[{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"}],createdBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},updatedBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},name:"Rohith Pradeep",designation:"General Tech Manager",img:"https://avatars2.githubusercontent.com/u/34057071?s=460&v=4",email:"rohithpradeep.mec@gmail.com",phone:"9447812363",linkedin:"https://www.linkedin.com/in/rohith-pradeep-65295515a",github:"https://github.com/RohithPradeep",id:6,createdAt:"2018-10-15T11:56:34.334Z",updatedAt:"2018-10-15T12:28:08.909Z"},{contributors:[{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"}],createdBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},updatedBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},name:"Prince Mathew",designation:"CS Tech Head",img:"https://avatars0.githubusercontent.com/u/1927507?s=460&v=4",email:"princemathew.mec@gmail.com",phone:"9497247908",linkedin:"https://www.linkedin.com/in/prince-mathew-83158266",github:"github.com/thezillion",id:7,createdAt:"2018-10-15T11:59:12.867Z",updatedAt:"2018-10-15T12:38:59.554Z"},{contributors:[{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"}],createdBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},updatedBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},name:"Amrin Kareem",designation:"Talks Manager",img:"https://avatars3.githubusercontent.com/u/43820644?s=460&v=4",email:"amrinkareem.mec@gmail.com",phone:"8891888969",linkedin:"https://in.linkedin.com/in/amrin-kareem-329530149",github:"https://github.com/AmrinKareem",id:8,createdAt:"2018-10-15T12:02:30.707Z",updatedAt:"2018-10-15T12:04:07.771Z"},{contributors:[{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"}],createdBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},updatedBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},name:"Nikita Mallya",designation:"Content Manager",img:"https://avatars3.githubusercontent.com/u/24869543?s=460&v=4",email:"nikitam.mec@gmail.com",phone:"8547450733",linkedin:"https://www.linkedin.com/in/nikita-mallya/",github:"https://github.com/meyuphoric",id:9,createdAt:"2018-10-15T12:04:13.239Z",updatedAt:"2018-10-15T12:05:32.317Z"},{contributors:[{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"}],createdBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},updatedBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},name:"Haritha Paul",designation:"Social Initiatives Manager",img:"https://avatars0.githubusercontent.com/u/16860818?s=460&v=4",email:"harithapaul.mec@gmail.com",phone:"9846948875",linkedin:"https://www.linkedin.com/in/haritha-paul/",github:"https://github.com/haritha1997",id:10,createdAt:"2018-10-15T12:05:35.562Z",updatedAt:"2018-10-15T12:08:43.336Z"},{contributors:[{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"}],createdBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},updatedBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},name:"Nithul Krishna",designation:"Media Relations Manager",img:"https://avatars3.githubusercontent.com/u/44137572?s=460&v=4",email:"nithulkrishna.mec@gmail.com",phone:"9633997239",linkedin:"https://www.linkedin.com/in/nithul-krishna-34201915b",github:"https://github.com/NithulKrishna",id:11,createdAt:"2018-10-15T12:08:47.486Z",updatedAt:"2018-10-15T12:12:33.396Z"},{contributors:[{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"}],createdBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},updatedBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},name:"Navaneeth K. Parameswaran",designation:"Design Manager",img:"https://avatars3.githubusercontent.com/u/41304839?s=460&v=4",email:"navneeth.mec@gmail.com",phone:"9061004068",github:"https://github.com/navparam",id:12,createdAt:"2018-10-15T12:12:40.311Z",updatedAt:"2018-10-15T12:14:22.861Z"},{contributors:[{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"}],createdBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},updatedBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},name:"M.G. Krishnan",designation:"Online Media Relations Manager",img:"https://avatars2.githubusercontent.com/u/43315026?s=460&v=4",email:"mgkrishnan.mec@gmail.com",phone:"9400815088",linkedin:"https://www.linkedin.com/in/krishnan-mg/",github:"https://github.com/KrishnanMG",id:13,createdAt:"2018-10-15T12:14:53.877Z",updatedAt:"2018-10-15T12:15:53.865Z"},{contributors:[{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"}],createdBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},updatedBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},name:"Joe Varghese Kurian",designation:"Marketing Manager",img:"https://avatars1.githubusercontent.com/u/44173119?s=460&v=4",email:"joe.varghese.mec@gmail.com",phone:"9995294391",id:14,createdAt:"2018-10-15T12:19:43.364Z",updatedAt:"2018-10-16T06:01:10.546Z"},{contributors:[{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"}],createdBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},updatedBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},name:"Mohamed Dhanish",designation:"Finance Manager",img:"https://avatars2.githubusercontent.com/u/44130691?s=460&v=4",email:"mohameddhanish.mec@gmail.com",phone:"9961339112",linkedin:"https://www.linkedin.com/in/mohamed-dhanish-152ab2160/",github:"https://github.com/dhanish112",id:15,createdAt:"2018-10-15T12:20:02.106Z",updatedAt:"2018-10-15T12:23:28.890Z"},{contributors:[{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"}],createdBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},updatedBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},name:"Aseef Mohammed K. S.",designation:"Non Tech Manager",img:"https://avatars3.githubusercontent.com/u/44128105?s=460&v=4",email:"aseefmohammed.mec@gmail.com",phone:"7736702735",github:"https://github.com/AseefM",id:16,createdAt:"2018-10-15T12:23:39.351Z",updatedAt:"2018-10-15T12:25:38.714Z"},{contributors:[{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"}],createdBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},updatedBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},name:"Rohan Roy",designation:"Conferences and Workshops Manager",img:"https://avatars1.githubusercontent.com/u/19791735?s=460&v=4",email:"rohanroy.mec@gmail.com",phone:"9037212700",linkedin:"https://www.linkedin.com/in/rohanarrancherry",github:"https://github.com/NithulKrishna",id:17,createdAt:"2018-10-15T12:25:42.540Z",updatedAt:"2018-10-15T17:31:08.770Z"},{contributors:[{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"}],createdBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},updatedBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},name:"Saud Mohammed Hyder",designation:"Event Manager",img:"https://avatars1.githubusercontent.com/u/44096837?s=460&v=4",email:"saud.mec@gmail.com",phone:"8156890942",linkedin:"https://www.linkedin.com/in/saud-mohammed-hyder-773a7915a",github:"https://github.com/Saudhyder",id:18,createdAt:"2018-10-15T12:42:40.749Z",updatedAt:"2018-10-15T12:43:49.636Z"},{contributors:[{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"}],createdBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},updatedBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},name:"Ahmed Shamil",designation:"Event Manager",img:"https://avatars1.githubusercontent.com/u/44129452?s=460&v=4",email:"shamilahmed.mec@gmail.com",phone:"9745163569",linkedin:"https://www.linkedin.com/in/shamil-ahmed-10b45357",github:"https://github.com/Shamil-Ahmed",id:19,createdAt:"2018-10-15T12:43:57.075Z",updatedAt:"2018-10-15T12:45:04.381Z"},{contributors:[{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"}],createdBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},updatedBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},name:"Kevin M. Varghese",designation:"Publicity Manager",img:"https://avatars2.githubusercontent.com/u/39963087?s=460&v=4",email:"kevinmvarghese.mec@gmail.com",phone:"8301059699",id:20,createdAt:"2018-10-15T12:46:23.929Z",updatedAt:"2018-10-15T17:58:30.763Z"},{contributors:[{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"}],createdBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},updatedBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},name:"Navin Mohan",designation:"Web Manager",img:"https://avatars3.githubusercontent.com/u/11776036?s=460&v=4",email:"navinmohan.mec@gmail.com",phone:"7012096204",linkedin:"https://www.linkedin.com/in/nvnmo/",github:"https://github.com/nvnmo",id:21,createdAt:"2018-10-15T12:53:54.224Z",updatedAt:"2018-10-15T12:55:33.382Z"},{contributors:[{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"}],createdBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},updatedBy:{username:"georgeshanti",email:"georgeshanti@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:1,createdAt:"2018-10-02T10:11:56.737Z",updatedAt:"2018-10-16T14:17:31.252Z"},name:"Juliana Biju",designation:"Conference and Workshops Manager",img:"https://avatars3.githubusercontent.com/u/38324174?s=460&v=4",email:"julianabiju.mec@gmail.com",phone:"8289914837",id:22,createdAt:"2018-10-15T18:13:54.170Z",updatedAt:"2018-10-15T19:56:19.669Z"},{contributors:[{username:"navinmohan",email:"navinmohan.mec@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:2,createdAt:"2018-10-16T03:20:47.193Z",updatedAt:"2018-10-16T14:31:17.389Z"}],createdBy:{username:"navinmohan",email:"navinmohan.mec@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:2,createdAt:"2018-10-16T03:20:47.193Z",updatedAt:"2018-10-16T14:31:17.389Z"},updatedBy:{username:"navinmohan",email:"navinmohan.mec@gmail.com",lang:"en_US",template:"default",id_ref:"1",provider:"local",id:2,createdAt:"2018-10-16T03:20:47.193Z",updatedAt:"2018-10-16T14:31:17.389Z"},name:"Ronit Joseph",designation:"Marketing Manager",img:"https://avatars0.githubusercontent.com/u/44196797?s=460&v=4",email:"ronit.mec@gmail.com",phone:"9656205401",id:23,createdAt:"2018-10-17T12:34:53.590Z",updatedAt:"2018-10-17T12:35:52.809Z"}]}});
//# sourceMappingURL=3.17b65444.chunk.js.map