window.addEventListener("load",function(m){function z(){return l.database().ref("kku/review")}function I(){var a=l.auth().currentUser;if(!a)throw"\u0e01\u0e23\u0e38\u0e13\u0e32\u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a";if(!a.emailVerified)throw window.location.href="/dashboard.html","\u0e42\u0e1b\u0e23\u0e14\u0e22\u0e37\u0e19\u0e22\u0e31\u0e19\u0e1a\u0e31\u0e0d\u0e0a\u0e35\u0e2d\u0e35\u0e40\u0e21\u0e25\u0e01\u0e48\u0e2d\u0e19";return a}function ia(a){a.order&&(a.teacherId=
	(a.order-1).toString())}function J(a){var b=null;if(a){b={};a=a.replace("?","");a=a.split("&");for(var c=0;c<a.length;++c){var d=a[c].split("=");d[0]&&""!=d[0]&&(b[d[0]]=d[1])}}return b}function ja(a,b,c){var d=[],h=[];b=b.trim(" ");b=b.toLowerCase();for(var f=b.split(" "),g=f.indexOf("");-1<g;)f.splice(g,1),g=f.indexOf("");for(g=0;g<a.length;++g)if(a[g][c])if(-1<a[g][c].toLowerCase().search(b))d.push(a[g]);else for(var e=0;e<f.length;++e){if(-1<a[g][c].toLowerCase().search(f[e])){h.push(a[g]);break}}else break;
	0==d.length&&(d=h);return d}function ka(a){a=new Date(a);return a.getDate().toString()+"/"+(a.getMonth()+1).toString()+"/"+(a.getFullYear()+543).toString()}function K(a){var b="<div> N/A </div>";a=parseFloat(a);isNaN(a)||(0<a&&1>a?b='<div class="rating">\t\t\t\t\t\t\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star half"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t\t\t\t\t\t\t</div>':
	1==a?b='<div class="rating">\t\t\t\t\t\t\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t\t\t\t\t\t\t</div>':1<a&&2>a?b='<div class="rating">\t\t\t\t\t\t\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star half"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t\t\t\t\t\t\t</div>':
	2==a?b='<div class="rating">\t\t\t\t\t\t\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t\t\t\t\t\t\t</div>':2<a&&3>a?b='<div class="rating">\t\t\t\t\t\t\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star half"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t\t\t\t\t\t\t</div>':
	3==a?b='<div class="rating">\t\t\t\t\t\t\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t\t\t\t\t\t\t</div>':3<a&&4>a?b='<div class="rating">\t\t\t\t\t\t\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star half"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t\t\t\t\t\t\t</div>':
	4==a?b='<div class="rating">\t\t\t\t\t\t\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t\t\t\t\t\t\t</div>':4<a&&5>a?b='<div class="rating">\t\t\t\t\t\t\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star half"></i>\t\t\t\t\t\t\t</div>':
	5==a?b='<div class="rating">\t\t\t\t\t\t\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star"></i>\t\t\t\t\t\t\t</div>':0==a&&(b='<div class="rating">\t\t\t\t\t\t\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t \t\t\t\t\t\t\t<i class="glyphicon glyphicon-star-empty"></i>\t\t\t\t\t\t\t</div>'));
	return b}function la(a,b){l.database().ref("kku/comment").orderByChild("teacherId").equalTo(a).once("value").then(function(a){b&&b(a)})}function ma(a,b){z().orderByChild("teacherId").equalTo(a).once("value").then(function(a){b&&b(a)})["catch"](function(a){throw a;})}function na(a,b){var c=[];try{la(a,function(a){if(a.exists()){var d=Object.keys(a.val()).length,f=0;a.forEach(function(a){c.push(a);f++;f==d&&b&&b(c)})}else b&&b(c)})}catch(d){console.log(d),b&&b(c)}}function oa(a,b){var c=[];try{ma(a,
	function(a){if(a.exists()){var d=Object.keys(a.val()).length,f=0;a.forEach(function(a){c.push(a);f++;if(f==d&&b)return b(c),!0})}else b&&b(c)})}catch(d){console.log(d),b&&b(c)}}function L(a,b){pa(a,function(c){na(a,function(a){var d=null;0<a.length&&(d={rating:0,ratingSize:0,difficulty:0,difficultySize:0,retake:0,retakeSize:0,commentSize:0});for(var f=0;f<a.length;++f){var g=a[f].key;a[f].review=c[g]?c[g].review:M();g=a[f].val();"N/A"!=g.difficulty&&(d.difficulty+=parseInt(g.difficulty),d.difficultySize++);
	"N/A"!=g.retake&&(d.retake+="Yes"==g.retake?1:0,d.retakeSize++);"N/A"!=g.rating&&(d.rating+=parseInt(g.rating),d.ratingSize++)}d&&(d.difficulty/=d.difficultySize,d.retake=1-d.retake/d.retakeSize,d.commentSize=a.length,d.rating/=d.ratingSize);b&&b(a,d)})})}function M(a,b,c,d){return{useful:{userDict:a?a:{},count:b?b:0},notUseful:{userDict:c?c:{},count:d?d:0}}}function pa(a,b){var c={};oa(a,function(a){for(var d=0;d<a.length;++d){var f=a[d].val(),g=f.commentId,e=f.useful;c[g]||(c[g]={review:M()});e?
	(c[g].review.useful.userDict[f.uid]=!0,c[g].review.useful.count++):(c[g].review.notUseful.userDict[f.uid]=!0,c[g].review.notUseful.count++)}b&&b(c)})}function qa(a,b){for(var c=[],d={i:0};d.i<a.length;d={teacherId:d.teacherId,i:d.i},++d.i){d.teacherId=a[d.i].teacherId;var h=new Promise(function(b){return function(c,d){L(b.teacherId,function(d,f){a[b.i].overviewInfo=f;c(!0)})}}(d));c.push(h)}Promise.all(c).then(function(a){b(!0)})}function ra(a,b,c,d,h,f,g,e,n){a={uid:a,teacherId:b,courseId:c,difficulty:d,
	gradRecieved:h,rating:f,retake:g,text:e,timestamp:l.database.ServerValue.TIMESTAMP};l.database().ref("kku/comment").push(a).then(function(a){n&&n(!0)})["catch"](function(a){console.log(a);n&&n(!1)})}function sa(a,b,c,d,h){z().push({uid:c,commentId:a,teacherId:b,useful:d}).then(function(a){h&&h(!0)})["catch"](function(a){console.log(a);h&&h(!1)})}function ta(a,b,c){z().orderByChild("uid").equalTo(b).once("value").then(function(b){if(b.exists()){var d=Object.keys(b.val()).length,f=0;b.forEach(function(b){if(b.val().commentId==
	a)return c(b),!0;f++;f==d&&c&&c(null)})}else c&&c(null)})["catch"](function(a){console.log(a);c&&c(null)})}function ua(a,b){z().child(a).remove().then(function(a){b&&b(!0)})["catch"](function(a){b&&b(!1)})}function N(a){for(;1<a.rows.length;)a.deleteRow(1)}function A(a,b,c,d){var h=c.useful.count,f=c.notUseful.count,g=c.useful.userDict,e=c.notUseful.userDict,n=c=!1;b&&(c=g[b.uid]?!0:!1,n=e[b.uid]?!0:!1);b=d?h:f;a.style.color=(d?c:n)?d?"blue":"red":"black";a.innerHTML=d?'<span class="glyphicon glyphicon-thumbs-up"></span> '+
	b.toString()+" <b>\u0e21\u0e35\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e0a\u0e19\u0e4c</b>":'<span class="glyphicon glyphicon-thumbs-down"></span> '+b.toString()+" <b>\u0e44\u0e21\u0e48\u0e21\u0e35\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e0a\u0e19\u0e4c</b>"}function O(a,b,c,d){commentList=b;N(d);var h=commentList.length,f=0;c&&(f=c.startInd,h=c.count);c={};var g=0;for(c.commentInd=f;g<h&&c.commentInd<b.length;c={usefulBtn:c.usefulBtn,commentKey:c.commentKey,content:c.content,commentInd:c.commentInd,notUsefulBtn:c.notUsefulBtn},
	++g,++c.commentInd){c.content=commentList[c.commentInd].val();c.commentKey=commentList[c.commentInd].key;var e=d.insertRow(g+1);f=e.insertCell(0);var n=e.insertCell(1);e=e.insertCell(2);c.usefulBtn=document.createElement("button");c.notUsefulBtn=document.createElement("button");c.usefulBtn.className="btn";c.notUsefulBtn.className="btn";A(c.usefulBtn,a,commentList[c.commentInd].review,!0);A(c.notUsefulBtn,a,commentList[c.commentInd].review,!1);c.usefulBtn.addEventListener("click",function(a){return function(b){P(b,
	a.usefulBtn,a.commentKey,a.content.teacherId,!0,a.commentInd)}}(c));c.notUsefulBtn.addEventListener("click",function(a){return function(b){P(b,a.notUsefulBtn,a.commentKey,a.content.teacherId,!1,a.commentInd)}}(c));f.innerHTML="<div><b>"+ka(c.content.timestamp)+"</b></div>"+K(c.content.rating)+"<div>\u0e04\u0e30\u0e41\u0e19\u0e19\u0e02\u0e2d\u0e07\u0e04\u0e23\u0e39:<b>"+c.content.rating+"</b></div><div>\u0e04\u0e27\u0e32\u0e21\u0e22\u0e32\u0e01:<b>"+c.content.difficulty+"</b></div>";c.content.courseId||
	(c.content.courseId="N/A");n.innerHTML="<div>\u0e23\u0e2b\u0e31\u0e2a\u0e27\u0e34\u0e0a\u0e32:<b>"+c.content.courseId+"</b></div><div>\u0e40\u0e01\u0e23\u0e14\u0e17\u0e35\u0e48\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a:<b>"+c.content.gradRecieved+"</b></div><div>\u0e2d\u0e22\u0e32\u0e01\u0e01\u0e25\u0e31\u0e1a\u0e21\u0e32\u0e40\u0e23\u0e35\u0e22\u0e19\u0e2d\u0e35\u0e01:<b>"+c.content.retake+"</b></div>";e.innerHTML="<p>"+c.content.text+"</p>";e.appendChild(c.usefulBtn);e.appendChild(c.notUsefulBtn)}}function C(a,
	b){return a&&!isNaN(a)&&b?(Math.round(100*a)/100*b).toString():"N/A"}function Q(a){a=C(a,100);"N/A"!=a&&(a+="%");return a}function R(a){S.innerText="N/A";T.innerText="N/A";a.overviewInfo&&(S.innerText=C(a.overviewInfo.difficulty,1),T.innerText=Q(a.overviewInfo.retake));va.innerText=a.name;wa.innerText=a.department}function D(a,b,c,d){var e=ja(a,b,c);d=d?parseInt(d):0;var f=E(d,e.length,10);a=[];for(b=f.startInd;b<f.count;++b)e[b].overviewInfo||a.push(e[b]);qa(a,function(a){N(U);a=0;var b=e.length;
	f&&(a=f.startInd,b=f.count);for(var c=0;c<b&&a<e.length;c++,a++){var d=U.insertRow(c+1),g=d.insertCell(0),h=d.insertCell(1),l=d.insertCell(2),m=d.insertCell(3);d=d.insertCell(4);var k=e[a];g.innerHTML="<a href=teacher.html?id="+k.teacherId+"&page=0>"+k.name+"</a>";h.innerText=k.department;l.innerHTML="N/A";m.innerText="N/A";d.innerText="N/A";k.overviewInfo&&(l.innerHTML=K(k.overviewInfo.rating),m.innerText=C(k.overviewInfo.difficulty,1),d.innerText=Q(k.overviewInfo.retake))}xa.innerText=0<e.length?
	"\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07":"\u0e44\u0e21\u0e48\u0e1e\u0e1a\u0e1c\u0e25\u0e25\u0e31\u0e1e\u0e18\u0e4c\u0e17\u0e35\u0e48\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07!"})}function q(a,b){e.query||(e.query={});for(var c=Object.keys(e.query),d=e.path+"?",h=!1,f=0;f<c.length;f++)d=d+c[f]+"=",c[f]==a?(d+=b,h=!0):d+=e.query[c[f]],f!=c.length-1&&(d+="&");h||(d=d+"&"+a+"="+b);history.pushState(null,
	null,d);e.path=location.pathname;e.query=J(location.search)}function E(a,b,c){try{if(0<=b&&0<c&&-1<a){var d=0,e=c<b?c:b,f=0<c?Math.ceil(b/c):0;b=null;if(a>=f&&0<f)throw"Invalid Page";a<f&&0<a&&(d=c*a);return b={startInd:d?d:0,count:e?e:0}}throw"Invalid Parameter";}catch(g){console.log(g),alert("Page Not Found!"),window.location.href="/index.html"}return null}function F(a,b){if(a<k.length){var c=k[a],d=l.auth().currentUser,e=null;b=b?parseInt(b):0;p?(e=E(b,p.length,5),O(d,p,e,V),R(c)):L(a,function(f,
	g){p=f;k[a].overviewInfo=g;c=k[a];e=E(b,p.length,5);O(d,p,e,V);R(c)})}else alert("Teacher doesn't exists"),window.location.href="/index.html"}function W(a){a?(a.emailVerified?v&&(X.style.display="none",Y.style.display="block"):v&&(X.style.display="block",Y.style.display="none"),v&&(v.style.display="block",Z.innerText=a.email,aa.innerText=a.displayName),r&&(r.innerText="Logout ("+a.email+")")):(v&&(v.style.display="none",Z.innerText="",aa.innerText=""),r&&(r.innerText="Login/Signup"))}function P(a,
	b,c,d,e,f){try{var g=I(),h=p[f].review;ta(c,g.uid,function(a){a?a.val().useful===e?ua(a.key,function(a){a?(e?(h.useful.count--,delete h.useful.userDict[g.uid]):(h.notUseful.count--,delete h.notUseful.userDict[g.uid]),A(b,g,h,e)):(alert("Useful Remove Failed!"),window.location.reload(!1))}):alert("\u0e04\u0e38\u0e13\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e43\u0e2b\u0e49\u0e04\u0e30\u0e41\u0e19\u0e19\u0e40\u0e1b\u0e47\u0e19\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e0a\u0e19\u0e4c\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e1b\u0e23\u0e30\u0e42\u0e22\u0e0a\u0e19\u0e4c\u0e40\u0e17\u0e48\u0e32\u0e19\u0e31\u0e49\u0e19"):
	sa(c,d,g.uid,e,function(a){a?(e?(h.useful.count++,h.useful.userDict[g.uid]=!0):(h.notUseful.count++,h.notUseful.userDict[g.uid]=!0),A(b,g,h,e)):(alert("Useful Submit Failed!"),window.location.reload(!1))})})}catch(n){alert(n)}}function ba(a,b,c){try{if(p){var d=e.query.page?e.query.page:0;d=ca(d,p.length,5,a,b,c);q("page",d);F(e.query.id,d)}else throw"Comment not loaded!";}catch(h){alert(h),window.location.href="/index.html"}}function da(a,b,c){try{if(k){var d=e.query.page?parseInt(e.query.page):
	0;d=ca(d,k.length,10,a,b,c);q("page",d);D(k,e.query.search,e.query.searchBy,e.query.page)}else throw"Teacher List not loaded!";}catch(h){alert(h),window.location.href="/index.html"}}function ca(a,b,c,d,e,f){b=0<c?Math.ceil(b/c):0;a=a?parseInt(a):0;b=0==b?1:b;f?(a<b-1&&a++,a=a<b?a:b-1):(-1<a&&a--,a=-1<a?a:0);d.style.display=a==b-1?"none":"inline";e.style.display=0==a?"none":"inline";return a}var l=this.window.firebase,B=null,p=null,k=this.window.sTLs;if(k)for(m=0;m<k.length;++m)ia(k[m]);var e={path:location.pathname,
	query:J(location.search)};console.log(e);delete this.window.firebase;delete this.window.sTLs;m=null;m={apiKey:"AIzaSyAdzmyl1OEbZ7htTxfqgqVHhL6a0JkmKCI",authDomain:"kru-review-8e035.firebaseapp.com",databaseURL:"https://kru-review-8e035.firebaseio.com",projectId:"kru-review-8e035",storageBucket:"kru-review-8e035.appspot.com",messagingSenderId:"844407264902"};l.initializeApp(m);var G=document.getElementById("div-auth-container"),v=document.getElementById("section-auth"),Y=document.getElementById("section-verified-account"),
	Z=document.getElementById("h-email"),aa=document.getElementById("h-display-name"),r=document.getElementById("a-login-logout"),t=document.getElementById("btn-send-veri"),X=document.getElementById("div-auth-verification"),V=document.getElementById("tbl-comment"),va=document.getElementById("s-teacher-name"),S=document.getElementById("s-difficulty"),T=document.getElementById("s-retake"),wa=document.getElementById("s-department"),w=document.getElementById("div-recaptcha"),ya=document.getElementById("in-course-id"),
	za=document.getElementById("sel-difficulty"),Aa=document.getElementById("sel-rating"),Ba=document.getElementById("sel-retake"),Ca=document.getElementById("tb-comment-text"),Da=document.getElementById("sel-grade-recieved"),u=document.getElementById("btn-submit-comment"),ea=document.getElementById("in-search");m=document.getElementById("btn-search");var U=document.getElementById("tbl-search-result"),xa=document.getElementById("h-search-msg"),fa=document.getElementById("sel-search-by"),x=document.getElementById("btn-prev-page"),
	y=document.getElementById("btn-next-page");document.getElementById("tbl-recently-reviewed");G&&(new firebaseui.auth.AuthUI(l.auth())).start("#div-auth-container",{signInOptions:[l.auth.GoogleAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(a,b){var c=a.user,d=a.credential,e=a.additionalUserInfo.providerId,f=a.operationType;a.additionalUserInfo.isNewUser&&console.log("This is a new user");console.log(c);console.log(d);console.log(c);console.log(e);console.log(f);return!0},
	signInFailure:function(a){console.log(a)}},signInSuccessUrl:"dashboard.html"});r&&r.addEventListener("click",function(a){"Login/Signup"==r.innerText?window.location.href="login.html":l.auth().signOut().then(function(){})["catch"](function(a){console.log(a)})});y&&x&&(y.addEventListener("click",function(a){"/teacher.html"==e.path&&ba(y,x,!0);"/"!=e.path&&"/index.html"!=e.path||da(y,x,!0)}),x.addEventListener("click",function(a){"/teacher.html"==e.path&&ba(y,x,!1);"/"!=e.path&&"/index.html"!=e.path||
	da(y,x,!1)}));l.auth().onAuthStateChanged(function(a){W(a);"/teacher.html"==e.path&&F(e.query.id,e.query.page);B=null});G=l.auth().currentUser;W(G);var ha=0,H=[function(){for(var a=!1,b=[{c:"First & last name",n:"Display Name"},{c:"Choose password",n:"New Password"}],c=0,d=document.getElementsByTagName("label"),e=0;e<d.length;e++)for(var f=0;f<b.length;++f)d[e].innerText==b[f].c&&(d[e].innerText=b[f].n,c++);c==b.length&&(a=!0);return a}],Ea=setInterval(function(){for(var a=0;a<H.length;a++)H[a]()&&
	ha++;ha==H.length&&clearInterval(Ea)},100);"/dashboard.html"==e.path?t&&t.addEventListener("click",function(a){(a=l.auth().currentUser)&&a.sendEmailVerification().then(function(){})["catch"](function(a){console.log(a);alert(a)})}):"/"==e.path||"/index.html"==e.path?(u="",t="name",w=0,e.query&&(u=e.query.search?e.query.search:u,t=e.query.searchBy?e.query.searchBy:t,w=e.query.page?e.query.page:w),D(k,u,t,w),q("searchBy",t),q("search",u),q("page",w),m&&ea&&fa&&m.addEventListener("click",function(){if(k){var a=
	ea.value,b=fa.value;D(k,a,b,0);q("searchBy",b);q("search",a);q("page",0)}})):"/teacher.html"==e.path&&e.query&&e.query.id?(w&&(m=new l.auth.RecaptchaVerifier("div-recaptcha"),m.render(),m.verify().then(function(a){B=a})),u&&u.addEventListener("click",function(){try{if(B){var a=I();if(!e.query.id)throw"Something went wrong, please reload this page";ra(a.uid,e.query.id,ya.value,za.value,Da.value,Aa.value,Ba.value,Ca.value,function(a){a?window.location.reload(!1):alert("Add Comment Failed!")});B=null}else alert("\u0e42\u0e1b\u0e23\u0e14\u0e01\u0e23\u0e2d\u0e01 reCAPTCHA")}catch(b){console.log(b),
	alert(b),"Please first verify email account!"!=b&&window.location.reload(!1)}}),F(e.query.id,e.query.page)):"/login.html"!=e.path&&"/about.html"!=e.path&&alert("This path page exist!")});