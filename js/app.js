window.addEventListener("load",function(m){function J(a){ka&&(new firebaseui.auth.AuthUI(l.auth())).start("#div-auth-container",{signInOptions:[l.auth.GoogleAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(a,c){var b=a.user,h=a.credential,f=a.additionalUserInfo.providerId,g=a.operationType;a.additionalUserInfo.isNewUser&&console.log("This is a new user");console.log(b);console.log(h);console.log(b);console.log(f);console.log(g);return!0},signInFailure:function(a){console.log(a)}},
signInSuccessUrl:a})}function z(){return l.database().ref("kku/review")}function K(){var a=l.auth().currentUser;if(!a)throw"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a";if(!a.emailVerified)throw window.location.href="/dashboard.html","\u0e42\u0e1b\u0e23\u0e14\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e1a\u0e31\u0e0d\u0e0a\u0e35\u0e2d\u0e35\u0e40\u0e21\u0e25\u0e01\u0e48\u0e2d\u0e19";return a}function la(a){a.order&&(a.teacherId=(a.order-1).toString())}
function L(a){var b=null;if(a){b={};a=a.replace("?","");a=a.split("&");for(var c=0;c<a.length;++c){var d=a[c].split("=");d[0]&&""!=d[0]&&(b[d[0]]=d[1])}}return b}function ma(a,b,c){var d=[],h=[];b=b.trim(" ");b=b.toLowerCase();for(var f=b.split(" "),g=f.indexOf("");-1<g;)f.splice(g,1),g=f.indexOf("");for(g=0;g<a.length;++g)if(a[g][c])if(-1<a[g][c].toLowerCase().search(b))d.push(a[g]);else for(var e=0;e<f.length;++e){if(-1<a[g][c].toLowerCase().search(f[e])){h.push(a[g]);break}}else break;0==d.length&&
(d=h);return d}function na(a){a=new Date(a);return a.getDate().toString()+"/"+(a.getMonth()+1).toString()+"/"+(a.getFullYear()+543).toString()}function M(a){var b="<div> N/A </div>";a=parseFloat(a);isNaN(a)||(0<a&&1>a?b='<div class="rating">\t\t\t\t\t\t\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star half"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t\t\t\t\t\t\t</div>':
1==a?b='<div class="rating">\t\t\t\t\t\t\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t\t\t\t\t\t\t</div>':1<a&&2>a?b='<div class="rating">\t\t\t\t\t\t\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star half"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t\t\t\t\t\t\t</div>':
2==a?b='<div class="rating">\t\t\t\t\t\t\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t\t\t\t\t\t\t</div>':2<a&&3>a?b='<div class="rating">\t\t\t\t\t\t\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star half"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t\t\t\t\t\t\t</div>':
3==a?b='<div class="rating">\t\t\t\t\t\t\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t\t\t\t\t\t\t</div>':3<a&&4>a?b='<div class="rating">\t\t\t\t\t\t\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star half"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t\t\t\t\t\t\t</div>':
4==a?b='<div class="rating">\t\t\t\t\t\t\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t\t\t\t\t\t\t</div>':4<a&&5>a?b='<div class="rating">\t\t\t\t\t\t\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star half"></i>\t\t\t\t\t\t\t</div>':
5==a?b='<div class="rating">\t\t\t\t\t\t\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t\t\t\t\t\t\t</div>':0==a&&(b='<div class="rating">\t\t\t\t\t\t\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t\t\t\t\t\t\t</div>'));
return b}function oa(a,b){l.database().ref("kku/comment").orderByChild("teacherId").equalTo(a).once("value").then(function(a){b&&b(a)})}function pa(a,b){z().orderByChild("teacherId").equalTo(a).once("value").then(function(a){b&&b(a)})["catch"](function(a){throw a;})}function qa(a,b){var c=[];try{oa(a,function(a){if(a.exists()){var d=Object.keys(a.val()).length,f=0;a.forEach(function(a){c.push(a);f++;f==d&&b&&b(c)})}else b&&b(c)})}catch(d){console.log(d),b&&b(c)}}function ra(a,b){var c=[];try{pa(a,
function(a){if(a.exists()){var d=Object.keys(a.val()).length,f=0;a.forEach(function(a){c.push(a);f++;if(f==d&&b)return b(c),!0})}else b&&b(c)})}catch(d){console.log(d),b&&b(c)}}function N(a,b){sa(a,function(c){qa(a,function(a){var d=null;0<a.length&&(d={rating:0,ratingSize:0,difficulty:0,difficultySize:0,retake:0,retakeSize:0,commentSize:0});for(var f=0;f<a.length;++f){var g=a[f].key;a[f].review=c[g]?c[g].review:O();g=a[f].val();"N/A"!=g.difficulty&&(d.difficulty+=parseInt(g.difficulty),d.difficultySize++);
"N/A"!=g.retake&&(d.retake+="Yes"==g.retake?1:0,d.retakeSize++);"N/A"!=g.rating&&(d.rating+=parseInt(g.rating),d.ratingSize++)}d&&(d.difficulty/=d.difficultySize,d.retake=d.retake?1-d.retake/d.retakeSize:0,d.commentSize=a.length,d.rating/=d.ratingSize);b&&b(a,d)})})}function O(a,b,c,d){return{useful:{userDict:a?a:{},count:b?b:0},notUseful:{userDict:c?c:{},count:d?d:0}}}function sa(a,b){var c={};ra(a,function(a){for(var d=0;d<a.length;++d){var f=a[d].val(),g=f.commentId,e=f.useful;c[g]||(c[g]={review:O()});
e?(c[g].review.useful.userDict[f.uid]=!0,c[g].review.useful.count++):(c[g].review.notUseful.userDict[f.uid]=!0,c[g].review.notUseful.count++)}b&&b(c)})}function ta(a,b){for(var c=[],d={i:0};d.i<a.length;d={teacherId:d.teacherId,i:d.i},++d.i){d.teacherId=a[d.i].teacherId;var h=new Promise(function(b){return function(c,d){N(b.teacherId,function(d,f){a[b.i].overviewInfo=f;c(!0)})}}(d));c.push(h)}Promise.all(c).then(function(a){b(!0)})}function ua(a,b,c,d,h,f,g,e,n){a={uid:a,teacherId:b,courseId:c,difficulty:d,
gradRecieved:h,rating:f,retake:g,text:e,timestamp:l.database.ServerValue.TIMESTAMP};l.database().ref("kku/comment").push(a).then(function(a){n&&n(!0)})["catch"](function(a){console.log(a);n&&n(!1)})}function va(a,b,c,d,h){z().push({uid:c,commentId:a,teacherId:b,useful:d}).then(function(a){h&&h(!0)})["catch"](function(a){console.log(a);h&&h(!1)})}function wa(a,b,c){z().orderByChild("uid").equalTo(b).once("value").then(function(b){if(b.exists()){var d=Object.keys(b.val()).length,f=0;b.forEach(function(b){if(b.val().commentId==
a)return c(b),!0;f++;f==d&&c&&c(null)})}else c&&c(null)})["catch"](function(a){console.log(a);c&&c(null)})}function xa(a,b){z().child(a).remove().then(function(a){b&&b(!0)})["catch"](function(a){b&&b(!1)})}function P(a){for(;1<a.rows.length;)a.deleteRow(1)}function A(a,b,c,d){var h=c.useful.count,f=c.notUseful.count,g=c.useful.userDict,e=c.notUseful.userDict,n=c=!1;b&&(c=g[b.uid]?!0:!1,n=e[b.uid]?!0:!1);b=d?h:f;a.style.color=(d?c:n)?d?"blue":"red":"black";a.innerHTML=d?'<span class="glyphicon glyphicon-thumbs-up"></span> '+
b.toString()+" <b>\u0e21\u0e35\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e0a\u0e19\u0e4c</b>":'<span class="glyphicon glyphicon-thumbs-down"></span> '+b.toString()+" <b>\u0e44\u0e21\u0e48\u0e21\u0e35\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e0a\u0e19\u0e4c</b>"}function Q(a,b,c,d){commentList=b;P(d);var h=commentList.length,f=0;c&&(f=c.startInd,h=c.count);c={};var g=0;for(c.commentInd=f;g<h&&c.commentInd<b.length;c={usefulBtn:c.usefulBtn,commentKey:c.commentKey,content:c.content,commentInd:c.commentInd,notUsefulBtn:c.notUsefulBtn},
++g,++c.commentInd){c.content=commentList[c.commentInd].val();c.commentKey=commentList[c.commentInd].key;var e=d.insertRow(g+1);f=e.insertCell(0);var n=e.insertCell(1);e=e.insertCell(2);c.usefulBtn=document.createElement("button");c.notUsefulBtn=document.createElement("button");c.usefulBtn.className="btn";c.notUsefulBtn.className="btn";A(c.usefulBtn,a,commentList[c.commentInd].review,!0);A(c.notUsefulBtn,a,commentList[c.commentInd].review,!1);c.usefulBtn.addEventListener("click",function(a){return function(b){R(b,
a.usefulBtn,a.commentKey,a.content.teacherId,!0,a.commentInd)}}(c));c.notUsefulBtn.addEventListener("click",function(a){return function(b){R(b,a.notUsefulBtn,a.commentKey,a.content.teacherId,!1,a.commentInd)}}(c));f.innerHTML="<div><b>"+na(c.content.timestamp)+"</b></div>"+M(c.content.rating)+"<div>\u0e04\u0e30\u0e41\u0e19\u0e19\u0e02\u0e2d\u0e07\u0e04\u0e23\u0e39:<b>"+c.content.rating+"</b></div><div>\u0e04\u0e27\u0e32\u0e21\u0e22\u0e32\u0e01:<b>"+c.content.difficulty+"</b></div>";c.content.courseId||
(c.content.courseId="N/A");n.innerHTML="<div>\u0e23\u0e2b\u0e31\u0e2a\u0e27\u0e34\u0e0a\u0e32:<b>"+c.content.courseId+"</b></div><div>\u0e40\u0e01\u0e23\u0e14\u0e17\u0e35\u0e48\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a:<b>"+c.content.gradRecieved+"</b></div><div>\u0e2d\u0e22\u0e32\u0e01\u0e01\u0e25\u0e31\u0e1a\u0e21\u0e32\u0e40\u0e23\u0e35\u0e22\u0e19\u0e2d\u0e35\u0e01:<b>"+c.content.retake+"</b></div>";e.innerHTML="<p>"+c.content.text+"</p>";e.appendChild(c.usefulBtn);e.appendChild(c.notUsefulBtn)}}function E(a,
b){return a&&!isNaN(a)&&b?(Math.round(100*a)/100*b).toString():"N/A"}function S(a){a=E(a,100);"N/A"!=a&&(a+="%");return a}function T(a){U.innerText="N/A";V.innerText="N/A";a.overviewInfo&&(U.innerText=E(a.overviewInfo.difficulty,1),V.innerText=S(a.overviewInfo.retake));ya.innerText=a.name;za.innerText=a.department}function F(a,b,c,d){var e=ma(a,b,c);d=d?parseInt(d):0;var f=G(d,e.length,10);a=[];for(b=f.startInd;b<f.count;++b)e[b].overviewInfo||a.push(e[b]);ta(a,function(a){P(W);a=0;var b=e.length;
f&&(a=f.startInd,b=f.count);for(var c=0;c<b&&a<e.length;c++,a++){var d=W.insertRow(c+1),g=d.insertCell(0),h=d.insertCell(1),l=d.insertCell(2),m=d.insertCell(3);d=d.insertCell(4);var k=e[a];g.innerHTML="<a href=teacher.html?id="+k.teacherId+"&page=0>"+k.name+"</a>";h.innerText=k.department;l.innerHTML="N/A";m.innerText="N/A";d.innerText="N/A";k.overviewInfo&&(l.innerHTML=M(k.overviewInfo.rating),m.innerText=E(k.overviewInfo.difficulty,1),d.innerText=S(k.overviewInfo.retake))}Aa.innerText=0<e.length?
"\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07":"\u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07!"})}function q(a,b){e.query||(e.query={});for(var c=Object.keys(e.query),d=e.path+"?",h=!1,f=0;f<c.length;f++)d=d+c[f]+"=",c[f]==a?(d+=b,h=!0):d+=e.query[c[f]],f!=c.length-1&&(d+="&");h||(d=d+"&"+a+"="+b);history.pushState(null,
null,d);e.path=location.pathname;e.query=L(location.search)}function G(a,b,c){try{if(0<=b&&0<c&&-1<a){var d=0,e=c<b?c:b,f=0<c?Math.ceil(b/c):0;b=null;if(a>=f&&0<f)throw"Invalid Page";a<f&&0<a&&(d=c*a);return b={startInd:d?d:0,count:e?e:0}}throw"Invalid Parameter";}catch(g){console.log(g),alert("Page Not Found!"),window.location.href="/index.html"}return null}function H(a,b){if(a<k.length){var c=k[a],d=l.auth().currentUser,e=null;b=b?parseInt(b):0;p?(e=G(b,p.length,5),Q(d,p,e,X),T(c)):N(a,function(f,
g){p=f;k[a].overviewInfo=g;c=k[a];e=G(b,p.length,5);Q(d,p,e,X);T(c)})}else alert("Teacher doesn't exists"),window.location.href="/index.html"}function Y(a){a?(a.emailVerified?v&&(Z.style.display="none",aa.style.display="block"):v&&(Z.style.display="block",aa.style.display="none"),v&&(v.style.display="block",ba.innerText=a.email,ca.innerText=a.displayName),r&&(r.innerText="Logout ("+a.email+")"),B&&(B.style.display="block"),C&&(C.style.display="none")):(v&&(v.style.display="none",ba.innerText="",ca.innerText=
""),r&&(r.innerText="Login/Signup"),B&&(B.style.display="none"),C&&(C.style.display="block"))}function R(a,b,c,d,e,f){try{var g=K(),h=p[f].review;wa(c,g.uid,function(a){a?a.val().useful===e?xa(a.key,function(a){a?(e?(h.useful.count--,delete h.useful.userDict[g.uid]):(h.notUseful.count--,delete h.notUseful.userDict[g.uid]),A(b,g,h,e)):(alert("Useful Remove Failed!"),window.location.reload(!1))}):alert("\u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e43\u0e2b\u0e49\u0e04\u0e30\u0e41\u0e19\u0e19\u0e40\u0e1b\u0e47\u0e19\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e0a\u0e19\u0e4c\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e0a\u0e19\u0e4c\u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19"):
va(c,d,g.uid,e,function(a){a?(e?(h.useful.count++,h.useful.userDict[g.uid]=!0):(h.notUseful.count++,h.notUseful.userDict[g.uid]=!0),A(b,g,h,e)):(alert("Useful Submit Failed!"),window.location.reload(!1))})})}catch(n){alert(n)}}function da(a,b,c){try{if(p){var d=e.query.page?e.query.page:0;d=ea(d,p.length,5,a,b,c);q("page",d);H(e.query.id,d)}else throw"Comment not loaded!";}catch(h){alert(h),window.location.href="/index.html"}}function fa(a,b,c){try{if(k){var d=e.query.page?parseInt(e.query.page):
0;d=ea(d,k.length,10,a,b,c);q("page",d);F(k,e.query.search,e.query.searchBy,e.query.page)}else throw"Teacher List not loaded!";}catch(h){alert(h),window.location.href="/index.html"}}function ea(a,b,c,d,e,f){b=0<c?Math.ceil(b/c):0;a=a?parseInt(a):0;b=0==b?1:b;f?(a<b-1&&a++,a=a<b?a:b-1):(-1<a&&a--,a=-1<a?a:0);d.style.display=a==b-1?"none":"inline";e.style.display=0==a?"none":"inline";return a}var l=this.window.firebase,D=null,p=null,k=this.window.sTLs;if(k)for(m=0;m<k.length;++m)la(k[m]);var e={path:location.pathname,
query:L(location.search)};console.log(e);delete this.window.firebase;delete this.window.sTLs;m=null;m={apiKey:"AIzaSyAdzmyl1OEbZ7htTxfqgqVHhL6a0JkmKCI",authDomain:"kru-review-8e035.firebaseapp.com",databaseURL:"https://kru-review-8e035.firebaseio.com",projectId:"kru-review-8e035",storageBucket:"kru-review-8e035.appspot.com",messagingSenderId:"844407264902"};l.initializeApp(m);var ka=document.getElementById("div-auth-container"),v=document.getElementById("section-auth"),aa=document.getElementById("section-verified-account"),
ba=document.getElementById("h-email"),ca=document.getElementById("h-display-name"),r=document.getElementById("a-login-logout"),t=document.getElementById("btn-send-veri"),Z=document.getElementById("div-auth-verification"),X=document.getElementById("tbl-comment"),ya=document.getElementById("s-teacher-name"),U=document.getElementById("s-difficulty"),V=document.getElementById("s-retake"),za=document.getElementById("s-department"),w=document.getElementById("div-recaptcha"),Ba=document.getElementById("in-course-id"),
Ca=document.getElementById("sel-difficulty"),Da=document.getElementById("sel-rating"),Ea=document.getElementById("sel-retake"),Fa=document.getElementById("tb-comment-text"),Ga=document.getElementById("sel-grade-recieved"),u=document.getElementById("btn-submit-comment"),C=document.getElementById("div-please-sign"),B=document.getElementById("div-add-comment"),ha=document.getElementById("in-search");m=document.getElementById("btn-search");var W=document.getElementById("tbl-search-result"),Aa=document.getElementById("h-search-msg"),
ia=document.getElementById("sel-search-by"),x=document.getElementById("btn-prev-page"),y=document.getElementById("btn-next-page");document.getElementById("tbl-recently-reviewed");r&&r.addEventListener("click",function(a){"Login/Signup"==r.innerText?window.location.href="login.html":(a=!1,confirm("\u0e04\u0e38\u0e13\u0e41\u0e19\u0e48\u0e43\u0e08\u0e27\u0e48\u0e32\u0e04\u0e38\u0e13\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e17\u0e35\u0e48\u0e08\u0e30\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e23\u0e30\u0e1a\u0e1a")&&
(a=!0),a&&l.auth().signOut().then(function(){window.location.href="/index.html"})["catch"](function(a){console.log(a)}))});y&&x&&(y.addEventListener("click",function(a){"/teacher.html"==e.path&&da(y,x,!0);"/"!=e.path&&"/index.html"!=e.path||fa(y,x,!0)}),x.addEventListener("click",function(a){"/teacher.html"==e.path&&da(y,x,!1);"/"!=e.path&&"/index.html"!=e.path||fa(y,x,!1)}));l.auth().onAuthStateChanged(function(a){Y(a);"/teacher.html"==e.path&&H(e.query.id,e.query.page);D=null});var Ha=l.auth().currentUser;
Y(Ha);var ja=0,I=[function(){for(var a=!1,b=[{c:"First & last name",n:"Display Name"},{c:"Choose password",n:"New Password"}],c=0,d=document.getElementsByTagName("label"),e=0;e<d.length;e++)for(var f=0;f<b.length;++f)d[e].innerText==b[f].c&&(d[e].innerText=b[f].n,c++);c==b.length&&(a=!0);return a}],Ia=setInterval(function(){for(var a=0;a<I.length;a++)I[a]()&&ja++;ja==I.length&&clearInterval(Ia)},100);"/dashboard.html"==e.path?t&&t.addEventListener("click",function(a){(a=l.auth().currentUser)&&a.sendEmailVerification().then(function(){})["catch"](function(a){console.log(a);
alert(a)})}):"/"==e.path||"/index.html"==e.path?(u="",t="name",w=0,e.query&&(u=e.query.search?e.query.search:u,t=e.query.searchBy?e.query.searchBy:t,w=e.query.page?e.query.page:w),F(k,u,t,w),q("searchBy",t),q("search",u),q("page",w),m&&ha&&ia&&m.addEventListener("click",function(){if(k){var a=ha.value,b=ia.value;F(k,a,b,0);q("searchBy",b);q("search",a);q("page",0)}})):"/teacher.html"==e.path&&e.query&&e.query.id?(J(this.window.location.href),w&&(m=new l.auth.RecaptchaVerifier("div-recaptcha"),m.render(),
m.verify().then(function(a){D=a})),u&&u.addEventListener("click",function(){try{if(D){var a=K();if(!e.query.id)throw"Something went wrong, please reload this page";ua(a.uid,e.query.id,Ba.value,Ca.value,Ga.value,Da.value,Ea.value,Fa.value,function(a){a?window.location.reload(!1):alert("Add Comment Failed!")});D=null}else alert("\u0e42\u0e1b\u0e23\u0e14\u0e01\u0e23\u0e2d\u0e01 reCAPTCHA")}catch(b){console.log(b),alert(b),"Please first verify email account!"!=b&&window.location.reload(!1)}}),H(e.query.id,
e.query.page)):"/login.html"==e.path?J("/index.html"):"/about.html"!=e.path&&alert("This path page exist!")});