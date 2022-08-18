(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wl="143",ls={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},cs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bf=0,ec=1,wf=2,bh=1,Sf=2,fr=3,Er=0,gn=1,Us=2,Mf=1,_i=0,zs=1,nc=2,ic=3,sc=4,Ef=5,Cs=100,Tf=101,Cf=102,rc=103,oc=104,Af=200,Lf=201,Pf=202,Rf=203,wh=204,Sh=205,Df=206,If=207,Ff=208,zf=209,Nf=210,Of=0,Bf=1,kf=2,Wa=3,Uf=4,Vf=5,Gf=6,Hf=7,Mh=0,Wf=1,qf=2,Kn=0,Xf=1,jf=2,Yf=3,$f=4,Zf=5,Eh=300,Vs=301,Gs=302,qa=303,Xa=304,zo=306,ja=1e3,pn=1001,Ya=1002,Re=1003,ac=1004,lc=1005,en=1006,Kf=1007,No=1008,ji=1009,Jf=1010,Qf=1011,Th=1012,tp=1013,Bi=1014,ki=1015,Tr=1016,ep=1017,np=1018,Ns=1020,ip=1021,sp=1022,Ln=1023,rp=1024,op=1025,Gi=1026,Hs=1027,ap=1028,lp=1029,cp=1030,up=1031,hp=1033,jo=33776,Yo=33777,$o=33778,Zo=33779,cc=35840,uc=35841,hc=35842,dc=35843,dp=36196,fc=37492,pc=37496,mc=37808,gc=37809,_c=37810,vc=37811,xc=37812,yc=37813,bc=37814,wc=37815,Sc=37816,Mc=37817,Ec=37818,Tc=37819,Cc=37820,Ac=37821,Lc=36492,Yi=3e3,Kt=3001,fp=3200,pp=3201,Ch=0,mp=1,Xn="srgb",Ui="srgb-linear",Ko=7680,gp=519,Pc=35044,Rc="300 es",$a=1035;class ts{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jo=Math.PI/180,Za=180/Math.PI;function Fr(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[a&255]+be[a>>8&255]+be[a>>16&255]+be[a>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function De(a,t,e){return Math.max(t,Math.min(e,a))}function _p(a,t){return(a%t+t)%t}function Qo(a,t,e){return(1-e)*a+e*t}function Dc(a){return(a&a-1)===0&&a!==0}function Ka(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}class Et{constructor(t=0,e=0){Et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nn{constructor(){nn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,r,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],m=n[5],g=n[8],f=i[0],p=i[3],_=i[6],v=i[1],w=i[4],b=i[7],x=i[2],M=i[5],C=i[8];return s[0]=r*f+o*v+l*x,s[3]=r*p+o*w+l*M,s[6]=r*_+o*b+l*C,s[1]=c*f+u*v+d*x,s[4]=c*p+u*w+d*M,s[7]=c*_+u*b+d*C,s[2]=h*f+m*v+g*x,s[5]=h*p+m*w+g*M,s[8]=h*_+m*b+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*r*u-e*o*c-n*s*u+n*o*l+i*s*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*r-o*c,h=o*l-u*s,m=c*s-r*l,g=e*d+n*h+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/g;return t[0]=d*f,t[1]=(i*c-u*n)*f,t[2]=(o*n-i*r)*f,t[3]=h*f,t[4]=(u*e-i*l)*f,t[5]=(i*s-o*e)*f,t[6]=m*f,t[7]=(n*l-c*e)*f,t[8]=(r*e-n*s)*f,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+t,-i*c,i*l,-i*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,s=i[0],r=i[3],o=i[6],l=i[1],c=i[4],u=i[7];return i[0]=e*s+n*l,i[3]=e*r+n*c,i[6]=e*o+n*u,i[1]=-n*s+e*l,i[4]=-n*r+e*c,i[7]=-n*o+e*u,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function Ah(a){for(let t=a.length-1;t>=0;--t)if(a[t]>65535)return!0;return!1}function bo(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Hi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function go(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const ta={[Xn]:{[Ui]:Hi},[Ui]:{[Xn]:go}},cn={legacyMode:!0,get workingColorSpace(){return Ui},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,t,e){if(this.legacyMode||t===e||!t||!e)return a;if(ta[t]&&ta[t][e]!==void 0){const n=ta[t][e];return a.r=n(a.r),a.g=n(a.g),a.b=n(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,t){return this.convert(a,this.workingColorSpace,t)},toWorkingColorSpace:function(a,t){return this.convert(a,t,this.workingColorSpace)}},Lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},he={r:0,g:0,b:0},un={h:0,s:0,l:0},kr={h:0,s:0,l:0};function ea(a,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+(t-a)*6*e:e<1/2?t:e<2/3?a+(t-a)*6*(2/3-e):a}function Ur(a,t){return t.r=a.r,t.g=a.g,t.b=a.b,t}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,cn.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Ui){return this.r=t,this.g=e,this.b=n,cn.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Ui){if(t=_p(t,1),e=De(e,0,1),n=De(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=ea(r,s,t+1/3),this.g=ea(r,s,t),this.b=ea(r,s,t-1/3)}return cn.toWorkingColorSpace(this,i),this}setStyle(t,e=Xn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,cn.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,cn.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(l,c,u,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,cn.toWorkingColorSpace(this,e),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,cn.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=Xn){const n=Lh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}copyLinearToSRGB(t){return this.r=go(t.r),this.g=go(t.g),this.b=go(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xn){return cn.fromWorkingColorSpace(Ur(this,he),t),De(he.r*255,0,255)<<16^De(he.g*255,0,255)<<8^De(he.b*255,0,255)<<0}getHexString(t=Xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ui){cn.fromWorkingColorSpace(Ur(this,he),e);const n=he.r,i=he.g,s=he.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=u<=.5?d/(r+o):d/(2-r-o),r){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Ui){return cn.fromWorkingColorSpace(Ur(this,he),e),t.r=he.r,t.g=he.g,t.b=he.b,t}getStyle(t=Xn){return cn.fromWorkingColorSpace(Ur(this,he),t),t!==Xn?`color(${t} ${he.r} ${he.g} ${he.b})`:`rgb(${he.r*255|0},${he.g*255|0},${he.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(un),un.h+=t,un.s+=e,un.l+=n,this.setHSL(un.h,un.s,un.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(un),t.getHSL(kr);const n=Qo(un.h,kr.h,e),i=Qo(un.s,kr.s,e),s=Qo(un.l,kr.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Bt.NAMES=Lh;let us;class Ph{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{us===void 0&&(us=bo("canvas")),us.width=t.width,us.height=t.height;const n=us.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=us}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=bo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Hi(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hi(e[n]/255)*255):e[n]=Hi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Rh{constructor(t=null){this.isSource=!0,this.uuid=Fr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(na(i[r].image)):s.push(na(i[r]))}else s=na(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function na(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Ph.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vp=0;class xn extends ts{constructor(t=xn.DEFAULT_IMAGE,e=xn.DEFAULT_MAPPING,n=pn,i=pn,s=en,r=No,o=Ln,l=ji,c=1,u=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Fr(),this.name="",this.source=new Rh(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Eh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ja:t.x=t.x-Math.floor(t.x);break;case pn:t.x=t.x<0?0:1;break;case Ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ja:t.y=t.y-Math.floor(t.y);break;case pn:t.y=t.y<0?0:1;break;case Ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Eh;class pe{constructor(t=0,e=0,n=0,i=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],g=l[9],f=l[2],p=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-f)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+f)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,b=(m+1)/2,x=(_+1)/2,M=(u+h)/4,C=(d+f)/4,y=(g+p)/4;return w>b&&w>x?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=M/n,s=C/n):b>x?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=M/i,s=y/i):x<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(x),n=C/s,i=y/s),this.set(n,i,s,e),this}let v=Math.sqrt((p-g)*(p-g)+(d-f)*(d-f)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-f)/v,this.z=(h-u)/v,this.w=Math.acos((c+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $i extends ts{constructor(t,e,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new xn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:en,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Rh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dh extends xn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Re,this.minFilter=Re,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xp extends xn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Re,this.minFilter=Re,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=s[r+0],m=s[r+1],g=s[r+2],f=s[r+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=h,t[e+1]=m,t[e+2]=g,t[e+3]=f;return}if(d!==f||l!==h||c!==m||u!==g){let p=1-o;const _=l*h+c*m+u*g+d*f,v=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const x=Math.sqrt(w),M=Math.atan2(x,_*v);p=Math.sin(p*M)/x,o=Math.sin(o*M)/x}const b=o*v;if(l=l*p+h*b,c=c*p+m*b,u=u*p+g*b,d=d*p+f*b,p===1-o){const x=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=x,c*=x,u*=x,d*=x}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,r){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[r],h=s[r+1],m=s[r+2],g=s[r+3];return t[e]=o*g+u*d+l*m-c*h,t[e+1]=l*g+u*h+c*d-o*m,t[e+2]=c*g+u*m+o*h-l*d,t[e+3]=u*g-o*d-l*h-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=t._x,i=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),h=l(n/2),m=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"YZX":this._x=h*u*d+c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d-h*m*g;break;case"XZY":this._x=h*u*d-c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(r-i)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(i+r)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(s-c)/m,this._x=(i+r)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(r-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,r=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+r*o+i*c-s*l,this._y=i*u+r*l+s*o-n*c,this._z=s*u+r*c+n*l-i*o,this._w=r*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*r+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=r*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,n=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ic.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ic.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=l*e+r*i-o*n,u=l*n+o*e-s*i,d=l*i+s*n-r*e,h=-s*e-r*n-o*i;return this.x=c*l+h*-s+u*-o-d*-r,this.y=u*l+h*-r+d*-s-c*-o,this.z=d*l+h*-o+c*-r-u*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,r=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ia.copy(this).projectOnVector(t),this.sub(ia)}reflect(t){return this.sub(ia.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ia=new k,Ic=new Zi;class zr{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=t.length;l<c;l+=3){const u=t[l],d=t[l+1],h=t[l+2];u<e&&(e=u),d<n&&(n=d),h<i&&(i=h),u>s&&(s=u),d>r&&(r=d),h>o&&(o=h)}return this.min.set(e,n,i),this.max.set(s,r,o),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=t.count;l<c;l++){const u=t.getX(l),d=t.getY(l),h=t.getZ(l);u<e&&(e=u),d<n&&(n=d),h<i&&(i=h),u>s&&(s=u),d>r&&(r=d),h>o&&(o=h)}return this.min.set(e,n,i),this.max.set(s,r,o),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let r=0,o=s.count;r<o;r++)Ci.fromBufferAttribute(s,r).applyMatrix4(t.matrixWorld),this.expandByPoint(Ci)}else n.boundingBox===null&&n.computeBoundingBox(),sa.copy(n.boundingBox),sa.applyMatrix4(t.matrixWorld),this.union(sa);const i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ir),Vr.subVectors(this.max,ir),hs.subVectors(t.a,ir),ds.subVectors(t.b,ir),fs.subVectors(t.c,ir),oi.subVectors(ds,hs),ai.subVectors(fs,ds),Ai.subVectors(hs,fs);let e=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Ai.z,Ai.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Ai.z,0,-Ai.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Ai.y,Ai.x,0];return!ra(e,hs,ds,fs,Vr)||(e=[1,0,0,0,1,0,0,0,1],!ra(e,hs,ds,fs,Vr))?!1:(Gr.crossVectors(oi,ai),e=[Gr.x,Gr.y,Gr.z],ra(e,hs,ds,fs,Vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Ci.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Nn=[new k,new k,new k,new k,new k,new k,new k,new k],Ci=new k,sa=new zr,hs=new k,ds=new k,fs=new k,oi=new k,ai=new k,Ai=new k,ir=new k,Vr=new k,Gr=new k,Li=new k;function ra(a,t,e,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){Li.fromArray(a,s);const o=i.x*Math.abs(Li.x)+i.y*Math.abs(Li.y)+i.z*Math.abs(Li.z),l=t.dot(Li),c=e.dot(Li),u=n.dot(Li);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const yp=new zr,Fc=new k,Hr=new k,oa=new k;class Oo{constructor(t=new k,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):yp.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){oa.subVectors(t,this.center);const e=oa.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.add(oa.multiplyScalar(i/n)),this.radius+=i}return this}union(t){return this.center.equals(t.center)===!0?Hr.set(0,0,1).multiplyScalar(t.radius):Hr.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(Fc.copy(t.center).add(Hr)),this.expandByPoint(Fc.copy(t.center).sub(Hr)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new k,aa=new k,Wr=new k,li=new k,la=new k,qr=new k,ca=new k;class Sl{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.direction).multiplyScalar(e).add(this.origin),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){aa.copy(t).add(e).multiplyScalar(.5),Wr.copy(e).sub(t).normalize(),li.copy(this.origin).sub(aa);const s=t.distanceTo(e)*.5,r=-this.direction.dot(Wr),o=li.dot(this.direction),l=-li.dot(Wr),c=li.lengthSq(),u=Math.abs(1-r*r);let d,h,m,g;if(u>0)if(d=r*l-o,h=r*o-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const f=1/u;d*=f,h*=f,m=d*(d+r*h+2*o)+h*(r*d+h+2*l)+c}else h=s,d=Math.max(0,-(r*h+o)),m=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(r*h+o)),m=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-r*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(d=Math.max(0,-(r*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+h*(h+2*l)+c);else h=r>0?-s:s,d=Math.max(0,-(r*h+o)),m=-d*d+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(Wr).multiplyScalar(h).add(aa),m}intersectSphere(t,e){On.subVectors(t.center,this.origin);const n=On.dot(this.direction),i=On.dot(On)-n*n,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,l=n+r;return o<0&&l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,r=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,r=(t.min.y-h.y)*u),n>r||s>i||((s>n||n!==n)&&(n=s),(r<i||i!==i)&&(i=r),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,i,s){la.subVectors(e,t),qr.subVectors(n,t),ca.crossVectors(la,qr);let r=this.direction.dot(ca),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;li.subVectors(this.origin,t);const l=o*this.direction.dot(qr.crossVectors(li,qr));if(l<0)return null;const c=o*this.direction.dot(la.cross(li));if(c<0||l+c>r)return null;const u=-o*li.dot(ca);return u<0?null:this.at(u/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,r,o,l,c,u,d,h,m,g,f,p){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=s,_[5]=r,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=d,_[14]=h,_[3]=m,_[7]=g,_[11]=f,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ps.setFromMatrixColumn(t,0).length(),s=1/ps.setFromMatrixColumn(t,1).length(),r=1/ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=r*u,m=r*d,g=o*u,f=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=h-f*c,e[9]=-o*l,e[2]=f-h*c,e[6]=g+m*c,e[10]=r*l}else if(t.order==="YXZ"){const h=l*u,m=l*d,g=c*u,f=c*d;e[0]=h+f*o,e[4]=g*o-m,e[8]=r*c,e[1]=r*d,e[5]=r*u,e[9]=-o,e[2]=m*o-g,e[6]=f+h*o,e[10]=r*l}else if(t.order==="ZXY"){const h=l*u,m=l*d,g=c*u,f=c*d;e[0]=h-f*o,e[4]=-r*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=r*u,e[9]=f-h*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const h=r*u,m=r*d,g=o*u,f=o*d;e[0]=l*u,e[4]=g*c-m,e[8]=h*c+f,e[1]=l*d,e[5]=f*c+h,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const h=r*l,m=r*c,g=o*l,f=o*c;e[0]=l*u,e[4]=f-h*d,e[8]=g*d+m,e[1]=d,e[5]=r*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*d+g,e[10]=h-f*d}else if(t.order==="XZY"){const h=r*l,m=r*c,g=o*l,f=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+f,e[5]=r*u,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*u,e[10]=f*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bp,t,wp)}lookAt(t,e,n){const i=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),ci.crossVectors(n,Ue),ci.lengthSq()===0&&(Math.abs(n.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),ci.crossVectors(n,Ue)),ci.normalize(),Xr.crossVectors(Ue,ci),i[0]=ci.x,i[4]=Xr.x,i[8]=Ue.x,i[1]=ci.y,i[5]=Xr.y,i[9]=Ue.y,i[2]=ci.z,i[6]=Xr.z,i[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],m=n[13],g=n[2],f=n[6],p=n[10],_=n[14],v=n[3],w=n[7],b=n[11],x=n[15],M=i[0],C=i[4],y=i[8],E=i[12],I=i[1],z=i[5],j=i[9],F=i[13],R=i[2],N=i[6],D=i[10],V=i[14],U=i[3],B=i[7],X=i[11],tt=i[15];return s[0]=r*M+o*I+l*R+c*U,s[4]=r*C+o*z+l*N+c*B,s[8]=r*y+o*j+l*D+c*X,s[12]=r*E+o*F+l*V+c*tt,s[1]=u*M+d*I+h*R+m*U,s[5]=u*C+d*z+h*N+m*B,s[9]=u*y+d*j+h*D+m*X,s[13]=u*E+d*F+h*V+m*tt,s[2]=g*M+f*I+p*R+_*U,s[6]=g*C+f*z+p*N+_*B,s[10]=g*y+f*j+p*D+_*X,s[14]=g*E+f*F+p*V+_*tt,s[3]=v*M+w*I+b*R+x*U,s[7]=v*C+w*z+b*N+x*B,s[11]=v*y+w*j+b*D+x*X,s[15]=v*E+w*F+b*V+x*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],m=t[14],g=t[3],f=t[7],p=t[11],_=t[15];return g*(+s*l*d-i*c*d-s*o*h+n*c*h+i*o*m-n*l*m)+f*(+e*l*m-e*c*h+s*r*h-i*r*m+i*c*u-s*l*u)+p*(+e*c*d-e*o*m-s*r*d+n*r*m+s*o*u-n*c*u)+_*(-i*o*u-e*l*d+e*o*h+i*r*d-n*r*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],m=t[11],g=t[12],f=t[13],p=t[14],_=t[15],v=d*p*c-f*h*c+f*l*m-o*p*m-d*l*_+o*h*_,w=g*h*c-u*p*c-g*l*m+r*p*m+u*l*_-r*h*_,b=u*f*c-g*d*c+g*o*m-r*f*m-u*o*_+r*d*_,x=g*d*l-u*f*l-g*o*h+r*f*h+u*o*p-r*d*p,M=e*v+n*w+i*b+s*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/M;return t[0]=v*C,t[1]=(f*h*s-d*p*s-f*i*m+n*p*m+d*i*_-n*h*_)*C,t[2]=(o*p*s-f*l*s+f*i*c-n*p*c-o*i*_+n*l*_)*C,t[3]=(d*l*s-o*h*s-d*i*c+n*h*c+o*i*m-n*l*m)*C,t[4]=w*C,t[5]=(u*p*s-g*h*s+g*i*m-e*p*m-u*i*_+e*h*_)*C,t[6]=(g*l*s-r*p*s-g*i*c+e*p*c+r*i*_-e*l*_)*C,t[7]=(r*h*s-u*l*s+u*i*c-e*h*c-r*i*m+e*l*m)*C,t[8]=b*C,t[9]=(g*d*s-u*f*s-g*n*m+e*f*m+u*n*_-e*d*_)*C,t[10]=(r*f*s-g*o*s+g*n*c-e*f*c-r*n*_+e*o*_)*C,t[11]=(u*o*s-r*d*s-u*n*c+e*d*c+r*n*m-e*o*m)*C,t[12]=x*C,t[13]=(u*f*i-g*d*i+g*n*h-e*f*h-u*n*p+e*d*p)*C,t[14]=(g*o*i-r*f*i-g*n*l+e*f*l+r*n*p-e*o*p)*C,t[15]=(r*d*i-u*o*i+u*n*l-e*d*l-r*n*h+e*o*h)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,o=t.y,l=t.z,c=s*r,u=s*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*r,0,c*l-i*o,u*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,r=e._y,o=e._z,l=e._w,c=s+s,u=r+r,d=o+o,h=s*c,m=s*u,g=s*d,f=r*u,p=r*d,_=o*d,v=l*c,w=l*u,b=l*d,x=n.x,M=n.y,C=n.z;return i[0]=(1-(f+_))*x,i[1]=(m+b)*x,i[2]=(g-w)*x,i[3]=0,i[4]=(m-b)*M,i[5]=(1-(h+_))*M,i[6]=(p+v)*M,i[7]=0,i[8]=(g+w)*C,i[9]=(p-v)*C,i[10]=(1-(h+f))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ps.set(i[0],i[1],i[2]).length();const r=ps.set(i[4],i[5],i[6]).length(),o=ps.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],hn.copy(this);const c=1/s,u=1/r,d=1/o;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=d,hn.elements[9]*=d,hn.elements[10]*=d,e.setFromRotationMatrix(hn),n.x=s,n.y=r,n.z=o,this}makePerspective(t,e,n,i,s,r){const o=this.elements,l=2*s/(e-t),c=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),h=-(r+s)/(r-s),m=-2*r*s/(r-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,s,r){const o=this.elements,l=1/(e-t),c=1/(n-i),u=1/(r-s),d=(e+t)*l,h=(n+i)*c,m=(r+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ps=new k,hn=new le,bp=new k(0,0,0),wp=new k(1,1,1),ci=new k,Xr=new k,Ue=new k,zc=new le,Nc=new Zi;class Nr{constructor(t=0,e=0,n=0,i=Nr.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],r=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-De(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(De(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-De(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(De(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-De(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return zc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nc.setFromEuler(this),this.setFromQuaternion(Nc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Nr.DefaultOrder="XYZ";Nr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ml{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Sp=0;const Oc=new k,ms=new Zi,Bn=new le,jr=new k,sr=new k,Mp=new k,Ep=new Zi,Bc=new k(1,0,0),kc=new k(0,1,0),Uc=new k(0,0,1),Tp={type:"added"},Vc={type:"removed"};class Ce extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DefaultUp.clone();const t=new k,e=new Nr,n=new Zi,i=new k(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new le},normalMatrix:{value:new nn}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Ce.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(Bc,t)}rotateY(t){return this.rotateOnAxis(kc,t)}rotateZ(t){return this.rotateOnAxis(Uc,t)}translateOnAxis(t,e){return Oc.copy(t).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bc,t)}translateY(t){return this.translateOnAxis(kc,t)}translateZ(t){return this.translateOnAxis(Uc,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?jr.copy(t):jr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(sr,jr,this.up):Bn.lookAt(jr,sr,this.up),this.quaternion.setFromRotationMatrix(Bn),i&&(Bn.extractRotation(i.matrixWorld),ms.setFromRotationMatrix(Bn),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Tp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Vc)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,t,Mp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,Ep,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),d=r(t.shapes),h=r(t.skeletons),m=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ce.DefaultUp=new k(0,1,0);Ce.DefaultMatrixAutoUpdate=!0;const dn=new k,kn=new k,ua=new k,Un=new k,gs=new k,_s=new k,Gc=new k,ha=new k,da=new k,fa=new k;class $n{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),dn.subVectors(t,e),i.cross(dn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){dn.subVectors(i,e),kn.subVectors(n,e),ua.subVectors(t,e);const r=dn.dot(dn),o=dn.dot(kn),l=dn.dot(ua),c=kn.dot(kn),u=kn.dot(ua),d=r*c-o*o;if(d===0)return s.set(-2,-1,-1);const h=1/d,m=(c*l-o*u)*h,g=(r*u-o*l)*h;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Un),Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getUV(t,e,n,i,s,r,o,l){return this.getBarycoord(t,e,n,i,Un),l.set(0,0),l.addScaledVector(s,Un.x),l.addScaledVector(r,Un.y),l.addScaledVector(o,Un.z),l}static isFrontFacing(t,e,n,i){return dn.subVectors(n,e),kn.subVectors(t,e),dn.cross(kn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),dn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $n.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return $n.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return $n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let r,o;gs.subVectors(i,n),_s.subVectors(s,n),ha.subVectors(t,n);const l=gs.dot(ha),c=_s.dot(ha);if(l<=0&&c<=0)return e.copy(n);da.subVectors(t,i);const u=gs.dot(da),d=_s.dot(da);if(u>=0&&d<=u)return e.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return r=l/(l-u),e.copy(n).addScaledVector(gs,r);fa.subVectors(t,s);const m=gs.dot(fa),g=_s.dot(fa);if(g>=0&&m<=g)return e.copy(s);const f=m*c-l*g;if(f<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(_s,o);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return Gc.subVectors(s,i),o=(d-u)/(d-u+(m-g)),e.copy(i).addScaledVector(Gc,o);const _=1/(p+f+h);return r=f*_,o=h*_,e.copy(n).addScaledVector(gs,r).addScaledVector(_s,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Cp=0;class Js extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Fr(),this.name="",this.type="Material",this.blending=zs,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=wh,this.blendDst=Sh,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ko,this.stencilZFail=Ko,this.stencilZPass=Ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Mf;continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(n.blending=this.blending),this.side!==Er&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(e){const s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ih extends Js{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const se=new k,Yr=new Et;class Rn{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=Pc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}copyColorsArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let r=t[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),r=new Bt),e[n++]=r.r,e[n++]=r.g,e[n++]=r.b}return this}copyVector2sArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let r=t[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),r=new Et),e[n++]=r.x,e[n++]=r.y}return this}copyVector3sArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let r=t[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),r=new k),e[n++]=r.x,e[n++]=r.y,e[n++]=r.z}return this}copyVector4sArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let r=t[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),r=new pe),e[n++]=r.x,e[n++]=r.y,e[n++]=r.z,e[n++]=r.w}return this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yr.fromBufferAttribute(this,e),Yr.applyMatrix3(t),this.setXY(e,Yr.x,Yr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix3(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix4(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyNormalMatrix(t),this.setXYZ(e,se.x,se.y,se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.transformDirection(t),this.setXYZ(e,se.x,se.y,se.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){return this.array[t*this.itemSize]}setX(t,e){return this.array[t*this.itemSize]=e,this}getY(t){return this.array[t*this.itemSize+1]}setY(t,e){return this.array[t*this.itemSize+1]=e,this}getZ(t){return this.array[t*this.itemSize+2]}setZ(t,e){return this.array[t*this.itemSize+2]=e,this}getW(t){return this.array[t*this.itemSize+3]}setW(t,e){return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pc&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class Fh extends Rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class zh extends Rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class _n extends Rn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ap=0;const Je=new le,pa=new Ce,vs=new k,Ve=new zr,rr=new zr,ge=new k;class ni extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Fr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ah(t)?zh:Fh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new nn().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return pa.lookAt(t),pa.updateMatrix(),this.applyMatrix4(pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new _n(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ve.setFromBufferAttribute(s),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const o=e[s];rr.setFromBufferAttribute(o),this.morphTargetsRelative?(ge.addVectors(Ve.min,rr.min),Ve.expandByPoint(ge),ge.addVectors(Ve.max,rr.max),Ve.expandByPoint(ge)):(Ve.expandByPoint(rr.min),Ve.expandByPoint(rr.max))}Ve.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)ge.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ge));if(e)for(let s=0,r=e.length;s<r;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ge.fromBufferAttribute(o,c),l&&(vs.fromBufferAttribute(t,c),ge.add(vs)),i=Math.max(i,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,r=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let I=0;I<o;I++)c[I]=new k,u[I]=new k;const d=new k,h=new k,m=new k,g=new Et,f=new Et,p=new Et,_=new k,v=new k;function w(I,z,j){d.fromArray(i,I*3),h.fromArray(i,z*3),m.fromArray(i,j*3),g.fromArray(r,I*2),f.fromArray(r,z*2),p.fromArray(r,j*2),h.sub(d),m.sub(d),f.sub(g),p.sub(g);const F=1/(f.x*p.y-p.x*f.y);!isFinite(F)||(_.copy(h).multiplyScalar(p.y).addScaledVector(m,-f.y).multiplyScalar(F),v.copy(m).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(F),c[I].add(_),c[z].add(_),c[j].add(_),u[I].add(v),u[z].add(v),u[j].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let I=0,z=b.length;I<z;++I){const j=b[I],F=j.start,R=j.count;for(let N=F,D=F+R;N<D;N+=3)w(n[N+0],n[N+1],n[N+2])}const x=new k,M=new k,C=new k,y=new k;function E(I){C.fromArray(s,I*3),y.copy(C);const z=c[I];x.copy(z),x.sub(C.multiplyScalar(C.dot(z))).normalize(),M.crossVectors(y,z);const F=M.dot(u[I])<0?-1:1;l[I*4]=x.x,l[I*4+1]=x.y,l[I*4+2]=x.z,l[I*4+3]=F}for(let I=0,z=b.length;I<z;++I){const j=b[I],F=j.start,R=j.count;for(let N=F,D=F+R;N<D;N+=3)E(n[N+0]),E(n[N+1]),E(n[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new k,s=new k,r=new k,o=new k,l=new k,c=new k,u=new k,d=new k;if(t)for(let h=0,m=t.count;h<m;h+=3){const g=t.getX(h+0),f=t.getX(h+1),p=t.getX(h+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,f),r.fromBufferAttribute(e,p),u.subVectors(r,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,f),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(f,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=e.count;h<m;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),r.fromBufferAttribute(e,h+2),u.subVectors(r,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(t.attributes[i]===void 0)continue;const r=n[i].array,o=t.attributes[i],l=o.array,c=o.itemSize*e,u=Math.min(l.length,r.length-c);for(let d=0,h=c;d<u;d++,h++)r[h]=l[d]}return this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let f=0,p=l.length;f<p;f++){o.isInterleavedBufferAttribute?m=l[f]*o.data.stride+o.offset:m=l[f]*u;for(let _=0;_<u;_++)h[g++]=c[m++]}return new Rn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ni,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=t(h,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,u=r.length;c<u;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hc=new le,xs=new Sl,ma=new Oo,ui=new k,hi=new k,di=new k,ga=new k,_a=new k,va=new k,$r=new k,Zr=new k,Kr=new k,Jr=new Et,Qr=new Et,to=new Et,xa=new k,eo=new k;class Pn extends Ce{constructor(t=new ni,e=new Ih){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(s),t.ray.intersectsSphere(ma)===!1)||(Hc.copy(s).invert(),xs.copy(t.ray).applyMatrix4(Hc),n.boundingBox!==null&&xs.intersectsBox(n.boundingBox)===!1))return;let r;const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,d=n.attributes.uv,h=n.attributes.uv2,m=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let f=0,p=m.length;f<p;f++){const _=m[f],v=i[_.materialIndex],w=Math.max(_.start,g.start),b=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let x=w,M=b;x<M;x+=3){const C=o.getX(x),y=o.getX(x+1),E=o.getX(x+2);r=no(this,v,t,xs,l,c,u,d,h,C,y,E),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const f=Math.max(0,g.start),p=Math.min(o.count,g.start+g.count);for(let _=f,v=p;_<v;_+=3){const w=o.getX(_),b=o.getX(_+1),x=o.getX(_+2);r=no(this,i,t,xs,l,c,u,d,h,w,b,x),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(i))for(let f=0,p=m.length;f<p;f++){const _=m[f],v=i[_.materialIndex],w=Math.max(_.start,g.start),b=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let x=w,M=b;x<M;x+=3){const C=x,y=x+1,E=x+2;r=no(this,v,t,xs,l,c,u,d,h,C,y,E),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=_.materialIndex,e.push(r))}}else{const f=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let _=f,v=p;_<v;_+=3){const w=_,b=_+1,x=_+2;r=no(this,i,t,xs,l,c,u,d,h,w,b,x),r&&(r.faceIndex=Math.floor(_/3),e.push(r))}}}}function Lp(a,t,e,n,i,s,r,o){let l;if(t.side===gn?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,t.side!==Us,o),l===null)return null;eo.copy(o),eo.applyMatrix4(a.matrixWorld);const c=e.ray.origin.distanceTo(eo);return c<e.near||c>e.far?null:{distance:c,point:eo.clone(),object:a}}function no(a,t,e,n,i,s,r,o,l,c,u,d){ui.fromBufferAttribute(i,c),hi.fromBufferAttribute(i,u),di.fromBufferAttribute(i,d);const h=a.morphTargetInfluences;if(s&&h){$r.set(0,0,0),Zr.set(0,0,0),Kr.set(0,0,0);for(let g=0,f=s.length;g<f;g++){const p=h[g],_=s[g];p!==0&&(ga.fromBufferAttribute(_,c),_a.fromBufferAttribute(_,u),va.fromBufferAttribute(_,d),r?($r.addScaledVector(ga,p),Zr.addScaledVector(_a,p),Kr.addScaledVector(va,p)):($r.addScaledVector(ga.sub(ui),p),Zr.addScaledVector(_a.sub(hi),p),Kr.addScaledVector(va.sub(di),p)))}ui.add($r),hi.add(Zr),di.add(Kr)}a.isSkinnedMesh&&(a.boneTransform(c,ui),a.boneTransform(u,hi),a.boneTransform(d,di));const m=Lp(a,t,e,n,ui,hi,di,xa);if(m){o&&(Jr.fromBufferAttribute(o,c),Qr.fromBufferAttribute(o,u),to.fromBufferAttribute(o,d),m.uv=$n.getUV(xa,ui,hi,di,Jr,Qr,to,new Et)),l&&(Jr.fromBufferAttribute(l,c),Qr.fromBufferAttribute(l,u),to.fromBufferAttribute(l,d),m.uv2=$n.getUV(xa,ui,hi,di,Jr,Qr,to,new Et));const g={a:c,b:u,c:d,normal:new k,materialIndex:0};$n.getNormal(ui,hi,di,g.normal),m.face=g}return m}class es extends ni{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],u=[],d=[];let h=0,m=0;g("z","y","x",-1,-1,n,e,t,r,s,0),g("z","y","x",1,-1,n,e,-t,r,s,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new _n(c,3)),this.setAttribute("normal",new _n(u,3)),this.setAttribute("uv",new _n(d,2));function g(f,p,_,v,w,b,x,M,C,y,E){const I=b/C,z=x/y,j=b/2,F=x/2,R=M/2,N=C+1,D=y+1;let V=0,U=0;const B=new k;for(let X=0;X<D;X++){const tt=X*z-F;for(let W=0;W<N;W++){const nt=W*I-j;B[f]=nt*v,B[p]=tt*w,B[_]=R,c.push(B.x,B.y,B.z),B[f]=0,B[p]=0,B[_]=M>0?1:-1,u.push(B.x,B.y,B.z),d.push(W/C),d.push(1-X/y),V+=1}}for(let X=0;X<y;X++)for(let tt=0;tt<C;tt++){const W=h+tt+N*X,nt=h+tt+N*(X+1),ot=h+(tt+1)+N*(X+1),_t=h+(tt+1)+N*X;l.push(W,nt,_t),l.push(nt,ot,_t),U+=6}o.addGroup(m,U,E),m+=U,h+=V}}static fromJSON(t){return new es(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ws(a){const t={};for(const e in a){t[e]={};for(const n in a[e]){const i=a[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function we(a){const t={};for(let e=0;e<a.length;e++){const n=Ws(a[e]);for(const i in n)t[i]=n[i]}return t}function Pp(a){const t=[];for(let e=0;e<a.length;e++)t.push(a[e].clone());return t}const Rp={clone:Ws,merge:we};var Dp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends Js{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dp,this.fragmentShader=Ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ws(t.uniforms),this.uniformsGroups=Pp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Nh extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class He extends Nh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Za*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Jo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Za*2*Math.atan(Math.tan(Jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Jo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ys=90,bs=1;class Fp extends Ce{constructor(t,e,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new He(ys,bs,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new k(1,0,0)),this.add(i);const s=new He(ys,bs,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new k(-1,0,0)),this.add(s);const r=new He(ys,bs,t,e);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(new k(0,1,0)),this.add(r);const o=new He(ys,bs,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new k(0,-1,0)),this.add(o);const l=new He(ys,bs,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new k(0,0,1)),this.add(l);const c=new He(ys,bs,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new k(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,o,l,c]=this.children,u=t.getRenderTarget(),d=t.toneMapping,h=t.xr.enabled;t.toneMapping=Kn,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,r),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=d,t.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Oh extends xn{constructor(t,e,n,i,s,r,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Vs,super(t,e,n,i,s,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zp extends $i{constructor(t,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Oh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new es(5,5,5),s=new Ki({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:_i});s.uniforms.tEquirect.value=e;const r=new Pn(i,s),o=e.minFilter;return e.minFilter===No&&(e.minFilter=en),new Fp(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}const ya=new k,Np=new k,Op=new nn;class Ii{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ya.subVectors(n,e).cross(Np.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(ya),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(n).multiplyScalar(s).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Op.getNormalMatrix(t),i=this.coplanarPoint(ya).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new Oo,io=new k;class El{constructor(t=new Ii,e=new Ii,n=new Ii,i=new Ii,s=new Ii,r=new Ii){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],u=n[6],d=n[7],h=n[8],m=n[9],g=n[10],f=n[11],p=n[12],_=n[13],v=n[14],w=n[15];return e[0].setComponents(o-i,d-l,f-h,w-p).normalize(),e[1].setComponents(o+i,d+l,f+h,w+p).normalize(),e[2].setComponents(o+s,d+c,f+m,w+_).normalize(),e[3].setComponents(o-s,d-c,f-m,w-_).normalize(),e[4].setComponents(o-r,d-u,f-g,w-v).normalize(),e[5].setComponents(o+r,d+u,f+g,w+v).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(ws)}intersectsSprite(t){return ws.center.set(0,0,0),ws.radius=.7071067811865476,ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(io.x=i.normal.x>0?t.max.x:t.min.x,io.y=i.normal.y>0?t.max.y:t.min.y,io.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(io)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bh(){let a=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=a.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=a.requestAnimationFrame(i),t=!0)},stop:function(){a.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){a=s}}}function Bp(a,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const d=c.array,h=c.usage,m=a.createBuffer();a.bindBuffer(u,m),a.bufferData(u,d,h),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,d){const h=u.array,m=u.updateRange;a.bindBuffer(d,c),m.count===-1?a.bufferSubData(d,0,h):(e?a.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):a.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1)}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(a.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,u)):d.version<c.version&&(s(d.buffer,c,u),d.version=c.version)}return{get:r,remove:o,update:l}}class Tl extends ni{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,r=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=t/o,h=e/l,m=[],g=[],f=[],p=[];for(let _=0;_<u;_++){const v=_*h-r;for(let w=0;w<c;w++){const b=w*d-s;g.push(b,-v,0),f.push(0,0,1),p.push(w/o),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<o;v++){const w=v+c*_,b=v+c*(_+1),x=v+1+c*(_+1),M=v+1+c*_;m.push(w,b,M),m.push(b,x,M)}this.setIndex(m),this.setAttribute("position",new _n(g,3)),this.setAttribute("normal",new _n(f,3)),this.setAttribute("uv",new _n(p,2))}static fromJSON(t){return new Tl(t.width,t.height,t.widthSegments,t.heightSegments)}}var kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Gp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qp="vec3 transformed = vec3( position );",Xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Yp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$p=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,rm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,om=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,cm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,um=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hm="gl_FragColor = linearToOutputTexel( gl_FragColor );",dm=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_m=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Sm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Em=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Tm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cm=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Am=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Pm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Dm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Im=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Om=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,km=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Um=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,$m=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Zm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Km=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Jm=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ng=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,sg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,rg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,og=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ag=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,cg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ug=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,gg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_g=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,vg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,bg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Eg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cg=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Ag=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Lg=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Pg=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Rg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Dg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Ig=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Fg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ng=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Og=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kg=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ug=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Gg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yg=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$g=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zg=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kg=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,e_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,n_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,r_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,c_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,d_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Lt={alphamap_fragment:kp,alphamap_pars_fragment:Up,alphatest_fragment:Vp,alphatest_pars_fragment:Gp,aomap_fragment:Hp,aomap_pars_fragment:Wp,begin_vertex:qp,beginnormal_vertex:Xp,bsdfs:jp,iridescence_fragment:Yp,bumpmap_pars_fragment:$p,clipping_planes_fragment:Zp,clipping_planes_pars_fragment:Kp,clipping_planes_pars_vertex:Jp,clipping_planes_vertex:Qp,color_fragment:tm,color_pars_fragment:em,color_pars_vertex:nm,color_vertex:im,common:sm,cube_uv_reflection_fragment:rm,defaultnormal_vertex:om,displacementmap_pars_vertex:am,displacementmap_vertex:lm,emissivemap_fragment:cm,emissivemap_pars_fragment:um,encodings_fragment:hm,encodings_pars_fragment:dm,envmap_fragment:fm,envmap_common_pars_fragment:pm,envmap_pars_fragment:mm,envmap_pars_vertex:gm,envmap_physical_pars_fragment:Cm,envmap_vertex:_m,fog_vertex:vm,fog_pars_vertex:xm,fog_fragment:ym,fog_pars_fragment:bm,gradientmap_pars_fragment:wm,lightmap_fragment:Sm,lightmap_pars_fragment:Mm,lights_lambert_vertex:Em,lights_pars_begin:Tm,lights_toon_fragment:Am,lights_toon_pars_fragment:Lm,lights_phong_fragment:Pm,lights_phong_pars_fragment:Rm,lights_physical_fragment:Dm,lights_physical_pars_fragment:Im,lights_fragment_begin:Fm,lights_fragment_maps:zm,lights_fragment_end:Nm,logdepthbuf_fragment:Om,logdepthbuf_pars_fragment:Bm,logdepthbuf_pars_vertex:km,logdepthbuf_vertex:Um,map_fragment:Vm,map_pars_fragment:Gm,map_particle_fragment:Hm,map_particle_pars_fragment:Wm,metalnessmap_fragment:qm,metalnessmap_pars_fragment:Xm,morphcolor_vertex:jm,morphnormal_vertex:Ym,morphtarget_pars_vertex:$m,morphtarget_vertex:Zm,normal_fragment_begin:Km,normal_fragment_maps:Jm,normal_pars_fragment:Qm,normal_pars_vertex:tg,normal_vertex:eg,normalmap_pars_fragment:ng,clearcoat_normal_fragment_begin:ig,clearcoat_normal_fragment_maps:sg,clearcoat_pars_fragment:rg,iridescence_pars_fragment:og,output_fragment:ag,packing:lg,premultiplied_alpha_fragment:cg,project_vertex:ug,dithering_fragment:hg,dithering_pars_fragment:dg,roughnessmap_fragment:fg,roughnessmap_pars_fragment:pg,shadowmap_pars_fragment:mg,shadowmap_pars_vertex:gg,shadowmap_vertex:_g,shadowmask_pars_fragment:vg,skinbase_vertex:xg,skinning_pars_vertex:yg,skinning_vertex:bg,skinnormal_vertex:wg,specularmap_fragment:Sg,specularmap_pars_fragment:Mg,tonemapping_fragment:Eg,tonemapping_pars_fragment:Tg,transmission_fragment:Cg,transmission_pars_fragment:Ag,uv_pars_fragment:Lg,uv_pars_vertex:Pg,uv_vertex:Rg,uv2_pars_fragment:Dg,uv2_pars_vertex:Ig,uv2_vertex:Fg,worldpos_vertex:zg,background_vert:Ng,background_frag:Og,cube_vert:Bg,cube_frag:kg,depth_vert:Ug,depth_frag:Vg,distanceRGBA_vert:Gg,distanceRGBA_frag:Hg,equirect_vert:Wg,equirect_frag:qg,linedashed_vert:Xg,linedashed_frag:jg,meshbasic_vert:Yg,meshbasic_frag:$g,meshlambert_vert:Zg,meshlambert_frag:Kg,meshmatcap_vert:Jg,meshmatcap_frag:Qg,meshnormal_vert:t_,meshnormal_frag:e_,meshphong_vert:n_,meshphong_frag:i_,meshphysical_vert:s_,meshphysical_frag:r_,meshtoon_vert:o_,meshtoon_frag:a_,points_vert:l_,points_frag:c_,shadow_vert:u_,shadow_frag:h_,sprite_vert:d_,sprite_frag:f_},lt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new nn},uv2Transform:{value:new nn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new nn}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new nn}}},Cn={basic:{uniforms:we([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Lt.meshbasic_vert,fragmentShader:Lt.meshbasic_frag},lambert:{uniforms:we([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.fog,lt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Lt.meshlambert_vert,fragmentShader:Lt.meshlambert_frag},phong:{uniforms:we([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Lt.meshphong_vert,fragmentShader:Lt.meshphong_frag},standard:{uniforms:we([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag},toon:{uniforms:we([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Lt.meshtoon_vert,fragmentShader:Lt.meshtoon_frag},matcap:{uniforms:we([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Lt.meshmatcap_vert,fragmentShader:Lt.meshmatcap_frag},points:{uniforms:we([lt.points,lt.fog]),vertexShader:Lt.points_vert,fragmentShader:Lt.points_frag},dashed:{uniforms:we([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Lt.linedashed_vert,fragmentShader:Lt.linedashed_frag},depth:{uniforms:we([lt.common,lt.displacementmap]),vertexShader:Lt.depth_vert,fragmentShader:Lt.depth_frag},normal:{uniforms:we([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Lt.meshnormal_vert,fragmentShader:Lt.meshnormal_frag},sprite:{uniforms:we([lt.sprite,lt.fog]),vertexShader:Lt.sprite_vert,fragmentShader:Lt.sprite_frag},background:{uniforms:{uvTransform:{value:new nn},t2D:{value:null}},vertexShader:Lt.background_vert,fragmentShader:Lt.background_frag},cube:{uniforms:we([lt.envmap,{opacity:{value:1}}]),vertexShader:Lt.cube_vert,fragmentShader:Lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Lt.equirect_vert,fragmentShader:Lt.equirect_frag},distanceRGBA:{uniforms:we([lt.common,lt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Lt.distanceRGBA_vert,fragmentShader:Lt.distanceRGBA_frag},shadow:{uniforms:we([lt.lights,lt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Lt.shadow_vert,fragmentShader:Lt.shadow_frag}};Cn.physical={uniforms:we([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Et(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag};function p_(a,t,e,n,i,s){const r=new Bt(0);let o=i===!0?0:1,l,c,u=null,d=0,h=null;function m(f,p){let _=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=t.get(v));const w=a.xr,b=w.getSession&&w.getSession();b&&b.environmentBlendMode==="additive"&&(v=null),v===null?g(r,o):v&&v.isColor&&(g(v,1),_=!0),(a.autoClear||_)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),v&&(v.isCubeTexture||v.mapping===zo)?(c===void 0&&(c=new Pn(new es(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Ws(Cn.cube.uniforms),vertexShader:Cn.cube.vertexShader,fragmentShader:Cn.cube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,M,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(u!==v||d!==v.version||h!==a.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=a.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Pn(new Tl(2,2),new Ki({name:"BackgroundMaterial",uniforms:Ws(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==a.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=a.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function g(f,p){e.buffers.color.setClear(f.r,f.g,f.b,p,s)}return{getClearColor:function(){return r},setClearColor:function(f,p=1){r.set(f),o=p,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(f){o=f,g(r,o)},render:m}}function m_(a,t,e,n){const i=a.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function d(R,N,D,V,U){let B=!1;if(r){const X=f(V,D,N);c!==X&&(c=X,m(c.object)),B=_(R,V,D,U),B&&v(R,V,D,U)}else{const X=N.wireframe===!0;(c.geometry!==V.id||c.program!==D.id||c.wireframe!==X)&&(c.geometry=V.id,c.program=D.id,c.wireframe=X,B=!0)}U!==null&&e.update(U,34963),(B||u)&&(u=!1,y(R,N,D,V),U!==null&&a.bindBuffer(34963,e.get(U).buffer))}function h(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function m(R){return n.isWebGL2?a.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?a.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function f(R,N,D){const V=D.wireframe===!0;let U=o[R.id];U===void 0&&(U={},o[R.id]=U);let B=U[N.id];B===void 0&&(B={},U[N.id]=B);let X=B[V];return X===void 0&&(X=p(h()),B[V]=X),X}function p(R){const N=[],D=[],V=[];for(let U=0;U<i;U++)N[U]=0,D[U]=0,V[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:D,attributeDivisors:V,object:R,attributes:{},index:null}}function _(R,N,D,V){const U=c.attributes,B=N.attributes;let X=0;const tt=D.getAttributes();for(const W in tt)if(tt[W].location>=0){const ot=U[W];let _t=B[W];if(_t===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(_t=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(_t=R.instanceColor)),ot===void 0||ot.attribute!==_t||_t&&ot.data!==_t.data)return!0;X++}return c.attributesNum!==X||c.index!==V}function v(R,N,D,V){const U={},B=N.attributes;let X=0;const tt=D.getAttributes();for(const W in tt)if(tt[W].location>=0){let ot=B[W];ot===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(ot=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(ot=R.instanceColor));const _t={};_t.attribute=ot,ot&&ot.data&&(_t.data=ot.data),U[W]=_t,X++}c.attributes=U,c.attributesNum=X,c.index=V}function w(){const R=c.newAttributes;for(let N=0,D=R.length;N<D;N++)R[N]=0}function b(R){x(R,0)}function x(R,N){const D=c.newAttributes,V=c.enabledAttributes,U=c.attributeDivisors;D[R]=1,V[R]===0&&(a.enableVertexAttribArray(R),V[R]=1),U[R]!==N&&((n.isWebGL2?a:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,N),U[R]=N)}function M(){const R=c.newAttributes,N=c.enabledAttributes;for(let D=0,V=N.length;D<V;D++)N[D]!==R[D]&&(a.disableVertexAttribArray(D),N[D]=0)}function C(R,N,D,V,U,B){n.isWebGL2===!0&&(D===5124||D===5125)?a.vertexAttribIPointer(R,N,D,U,B):a.vertexAttribPointer(R,N,D,V,U,B)}function y(R,N,D,V){if(n.isWebGL2===!1&&(R.isInstancedMesh||V.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;w();const U=V.attributes,B=D.getAttributes(),X=N.defaultAttributeValues;for(const tt in B){const W=B[tt];if(W.location>=0){let nt=U[tt];if(nt===void 0&&(tt==="instanceMatrix"&&R.instanceMatrix&&(nt=R.instanceMatrix),tt==="instanceColor"&&R.instanceColor&&(nt=R.instanceColor)),nt!==void 0){const ot=nt.normalized,_t=nt.itemSize,K=e.get(nt);if(K===void 0)continue;const It=K.buffer,xt=K.type,wt=K.bytesPerElement;if(nt.isInterleavedBufferAttribute){const mt=nt.data,Ut=mt.stride,Tt=nt.offset;if(mt.isInstancedInterleavedBuffer){for(let vt=0;vt<W.locationSize;vt++)x(W.location+vt,mt.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let vt=0;vt<W.locationSize;vt++)b(W.location+vt);a.bindBuffer(34962,It);for(let vt=0;vt<W.locationSize;vt++)C(W.location+vt,_t/W.locationSize,xt,ot,Ut*wt,(Tt+_t/W.locationSize*vt)*wt)}else{if(nt.isInstancedBufferAttribute){for(let mt=0;mt<W.locationSize;mt++)x(W.location+mt,nt.meshPerAttribute);R.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let mt=0;mt<W.locationSize;mt++)b(W.location+mt);a.bindBuffer(34962,It);for(let mt=0;mt<W.locationSize;mt++)C(W.location+mt,_t/W.locationSize,xt,ot,_t*wt,_t/W.locationSize*mt*wt)}}else if(X!==void 0){const ot=X[tt];if(ot!==void 0)switch(ot.length){case 2:a.vertexAttrib2fv(W.location,ot);break;case 3:a.vertexAttrib3fv(W.location,ot);break;case 4:a.vertexAttrib4fv(W.location,ot);break;default:a.vertexAttrib1fv(W.location,ot)}}}}M()}function E(){j();for(const R in o){const N=o[R];for(const D in N){const V=N[D];for(const U in V)g(V[U].object),delete V[U];delete N[D]}delete o[R]}}function I(R){if(o[R.id]===void 0)return;const N=o[R.id];for(const D in N){const V=N[D];for(const U in V)g(V[U].object),delete V[U];delete N[D]}delete o[R.id]}function z(R){for(const N in o){const D=o[N];if(D[R.id]===void 0)continue;const V=D[R.id];for(const U in V)g(V[U].object),delete V[U];delete D[R.id]}}function j(){F(),u=!0,c!==l&&(c=l,m(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:F,dispose:E,releaseStatesOfGeometry:I,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:b,disableUnusedAttributes:M}}function g_(a,t,e,n){const i=n.isWebGL2;let s;function r(c){s=c}function o(c,u){a.drawArrays(s,c,u),e.update(u,s,1)}function l(c,u,d){if(d===0)return;let h,m;if(i)h=a,m="drawArraysInstanced";else if(h=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,d),e.update(u,s,d)}this.setMode=r,this.render=o,this.renderInstances=l}function __(a,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=a.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&a instanceof WebGL2ComputeRenderingContext;let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=r||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,d=a.getParameter(34930),h=a.getParameter(35660),m=a.getParameter(3379),g=a.getParameter(34076),f=a.getParameter(34921),p=a.getParameter(36347),_=a.getParameter(36348),v=a.getParameter(36349),w=h>0,b=r||t.has("OES_texture_float"),x=w&&b,M=r?a.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:w,floatFragmentTextures:b,floatVertexTextures:x,maxSamples:M}}function v_(a){const t=this;let e=null,n=0,i=!1,s=!1;const r=new Ii,o=new nn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h,m){const g=d.length!==0||h||n!==0||i;return i=h,e=u(d,m,0),n=d.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(d,h,m){const g=d.clippingPlanes,f=d.clipIntersection,p=d.clipShadows,_=a.get(d);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const v=s?0:n,w=v*4;let b=_.clippingState||null;l.value=b,b=u(g,h,w,m);for(let x=0;x!==w;++x)b[x]=e[x];_.clippingState=b,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,m,g){const f=d!==null?d.length:0;let p=null;if(f!==0){if(p=l.value,g!==!0||p===null){const _=m+f*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<_)&&(p=new Float32Array(_));for(let w=0,b=m;w!==f;++w,b+=4)r.copy(d[w]).applyMatrix4(v,o),r.normal.toArray(p,b),p[b+3]=r.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=f,t.numIntersection=0,p}}function x_(a){let t=new WeakMap;function e(r,o){return o===qa?r.mapping=Vs:o===Xa&&(r.mapping=Gs),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===qa||o===Xa)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new zp(l.height/2);return c.fromEquirectangularTexture(a,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class y_ extends Nh{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,r=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ps=4,Wc=[.125,.215,.35,.446,.526,.582],Ni=20,ba=new y_,qc=new Bt;let wa=null;const Fi=(1+Math.sqrt(5))/2,Ss=1/Fi,Xc=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Fi,Ss),new k(0,Fi,-Ss),new k(Ss,0,Fi),new k(-Ss,0,Fi),new k(Fi,Ss,0),new k(-Fi,Ss,0)];class jc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){wa=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wa),t.scissorTest=!1,so(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vs||t.mapping===Gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wa=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Tr,format:Ln,encoding:Yi,depthBuffer:!1},i=Yc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=b_(s)),this._blurMaterial=w_(s,t,e)}return i}_compileMaterial(t){const e=new Pn(this._lodPlanes[0],t);this._renderer.compile(e,ba)}_sceneToCubeUV(t,e,n,i){const o=new He(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(qc),u.toneMapping=Kn,u.autoClear=!1;const m=new Ih({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new Pn(new es,m);let f=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,f=!0):(m.color.copy(qc),f=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):v===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const w=this._cubeSize;so(i,v*w,_>2?w:0,w,w),u.setRenderTarget(i),f&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Vs||t.mapping===Gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$c());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new Pn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;so(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,ba)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Xc[(i-1)%Xc.length];this._blur(t,i-1,i,s,r)}e.autoClear=n}_blur(t,e,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Pn(this._lodPlanes[i],c),h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ni-1),f=s/g,p=isFinite(s)?1+Math.floor(u*f):Ni;p>Ni&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ni}`);const _=[];let v=0;for(let C=0;C<Ni;++C){const y=C/f,E=Math.exp(-y*y/2);_.push(E),C===0?v+=E:C<p&&(v+=2*E)}for(let C=0;C<_.length;C++)_[C]=_[C]/v;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=_,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:w}=this;h.dTheta.value=g,h.mipInt.value=w-n;const b=this._sizeLods[i],x=3*b*(i>w-Ps?i-w+Ps:0),M=4*(this._cubeSize-b);so(e,x,M,3*b,2*b),l.setRenderTarget(e),l.render(d,ba)}}function b_(a){const t=[],e=[],n=[];let i=a;const s=a-Ps+1+Wc.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);let l=1/o;r>a-Ps?l=Wc[r-a+Ps-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,f=3,p=2,_=1,v=new Float32Array(f*g*m),w=new Float32Array(p*g*m),b=new Float32Array(_*g*m);for(let M=0;M<m;M++){const C=M%3*2/3-1,y=M>2?0:-1,E=[C,y,0,C+2/3,y,0,C+2/3,y+1,0,C,y,0,C+2/3,y+1,0,C,y+1,0];v.set(E,f*g*M),w.set(h,p*g*M);const I=[M,M,M,M,M,M];b.set(I,_*g*M)}const x=new ni;x.setAttribute("position",new Rn(v,f)),x.setAttribute("uv",new Rn(w,p)),x.setAttribute("faceIndex",new Rn(b,_)),t.push(x),i>Ps&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Yc(a,t,e){const n=new $i(a,t,e);return n.texture.mapping=zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function so(a,t,e,n,i){a.viewport.set(t,e,n,i),a.scissor.set(t,e,n,i)}function w_(a,t,e){const n=new Float32Array(Ni),i=new k(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function $c(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Zc(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Cl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function S_(a){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===qa||l===Xa,u=l===Vs||l===Gs;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return e===null&&(e=new jc(a)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||u&&d&&i(d)){e===null&&(e=new jc(a));const h=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function M_(a){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function E_(a,t,e,n){const i={},s=new WeakMap;function r(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",r),delete i[h.id];const m=s.get(h);m&&(t.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",r),i[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)t.update(h[g],34962);const m=d.morphAttributes;for(const g in m){const f=m[g];for(let p=0,_=f.length;p<_;p++)t.update(f[p],34962)}}function c(d){const h=[],m=d.index,g=d.attributes.position;let f=0;if(m!==null){const v=m.array;f=m.version;for(let w=0,b=v.length;w<b;w+=3){const x=v[w+0],M=v[w+1],C=v[w+2];h.push(x,M,M,C,C,x)}}else{const v=g.array;f=g.version;for(let w=0,b=v.length/3-1;w<b;w+=3){const x=w+0,M=w+1,C=w+2;h.push(x,M,M,C,C,x)}}const p=new(Ah(h)?zh:Fh)(h,1);p.version=f;const _=s.get(d);_&&t.remove(_),s.set(d,p)}function u(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function T_(a,t,e,n){const i=n.isWebGL2;let s;function r(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,m){a.drawElements(s,m,o,h*l),e.update(m,s,1)}function d(h,m,g){if(g===0)return;let f,p;if(i)f=a,p="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,m,o,h*l,g),e.update(m,s,g)}this.setMode=r,this.setIndex=c,this.render=u,this.renderInstances=d}function C_(a){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(e.calls++,r){case 4:e.triangles+=o*(s/3);break;case 1:e.lines+=o*(s/2);break;case 3:e.lines+=o*(s-1);break;case 2:e.lines+=o*s;break;case 0:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function A_(a,t){return a[0]-t[0]}function L_(a,t){return Math.abs(t[1])-Math.abs(a[1])}function Sa(a,t){let e=1;const n=t.isInterleavedBufferAttribute?t.data.array:t.array;n instanceof Int8Array?e=127:n instanceof Uint8Array?e=255:n instanceof Uint16Array?e=65535:n instanceof Int16Array?e=32767:n instanceof Int32Array?e=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),a.divideScalar(e)}function P_(a,t,e){const n={},i=new Float32Array(8),s=new WeakMap,r=new pe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d,h){const m=c.morphTargetInfluences;if(t.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=f!==void 0?f.length:0;let _=s.get(u);if(_===void 0||_.count!==p){let D=function(){R.dispose(),s.delete(u),u.removeEventListener("dispose",D)};var g=D;_!==void 0&&_.texture.dispose();const b=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],y=u.morphAttributes.normal||[],E=u.morphAttributes.color||[];let I=0;b===!0&&(I=1),x===!0&&(I=2),M===!0&&(I=3);let z=u.attributes.position.count*I,j=1;z>t.maxTextureSize&&(j=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const F=new Float32Array(z*j*4*p),R=new Dh(F,z,j,p);R.type=ki,R.needsUpdate=!0;const N=I*4;for(let V=0;V<p;V++){const U=C[V],B=y[V],X=E[V],tt=z*j*4*V;for(let W=0;W<U.count;W++){const nt=W*N;b===!0&&(r.fromBufferAttribute(U,W),U.normalized===!0&&Sa(r,U),F[tt+nt+0]=r.x,F[tt+nt+1]=r.y,F[tt+nt+2]=r.z,F[tt+nt+3]=0),x===!0&&(r.fromBufferAttribute(B,W),B.normalized===!0&&Sa(r,B),F[tt+nt+4]=r.x,F[tt+nt+5]=r.y,F[tt+nt+6]=r.z,F[tt+nt+7]=0),M===!0&&(r.fromBufferAttribute(X,W),X.normalized===!0&&Sa(r,X),F[tt+nt+8]=r.x,F[tt+nt+9]=r.y,F[tt+nt+10]=r.z,F[tt+nt+11]=X.itemSize===4?r.w:1)}}_={count:p,texture:R,size:new Et(z,j)},s.set(u,_),u.addEventListener("dispose",D)}let v=0;for(let b=0;b<m.length;b++)v+=m[b];const w=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(a,"morphTargetBaseInfluence",w),h.getUniforms().setValue(a,"morphTargetInfluences",m),h.getUniforms().setValue(a,"morphTargetsTexture",_.texture,e),h.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}else{const f=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==f){p=[];for(let x=0;x<f;x++)p[x]=[x,0];n[u.id]=p}for(let x=0;x<f;x++){const M=p[x];M[0]=x,M[1]=m[x]}p.sort(L_);for(let x=0;x<8;x++)x<f&&p[x][1]?(o[x][0]=p[x][0],o[x][1]=p[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(A_);const _=u.morphAttributes.position,v=u.morphAttributes.normal;let w=0;for(let x=0;x<8;x++){const M=o[x],C=M[0],y=M[1];C!==Number.MAX_SAFE_INTEGER&&y?(_&&u.getAttribute("morphTarget"+x)!==_[C]&&u.setAttribute("morphTarget"+x,_[C]),v&&u.getAttribute("morphNormal"+x)!==v[C]&&u.setAttribute("morphNormal"+x,v[C]),i[x]=y,w+=y):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),v&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const b=u.morphTargetsRelative?1:1-w;h.getUniforms().setValue(a,"morphTargetBaseInfluence",b),h.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function R_(a,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);return i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),d}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:r}}const kh=new xn,Uh=new Dh,Vh=new xp,Gh=new Oh,Kc=[],Jc=[],Qc=new Float32Array(16),tu=new Float32Array(9),eu=new Float32Array(4);function Qs(a,t,e){const n=a[0];if(n<=0||n>0)return a;const i=t*e;let s=Kc[i];if(s===void 0&&(s=new Float32Array(i),Kc[i]=s),t!==0){n.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=e,a[r].toArray(s,o)}return s}function Ae(a,t){if(a.length!==t.length)return!1;for(let e=0,n=a.length;e<n;e++)if(a[e]!==t[e])return!1;return!0}function Le(a,t){for(let e=0,n=t.length;e<n;e++)a[e]=t[e]}function Bo(a,t){let e=Jc[t];e===void 0&&(e=new Int32Array(t),Jc[t]=e);for(let n=0;n!==t;++n)e[n]=a.allocateTextureUnit();return e}function D_(a,t){const e=this.cache;e[0]!==t&&(a.uniform1f(this.addr,t),e[0]=t)}function I_(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;a.uniform2fv(this.addr,t),Le(e,t)}}function F_(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;a.uniform3fv(this.addr,t),Le(e,t)}}function z_(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;a.uniform4fv(this.addr,t),Le(e,t)}}function N_(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;a.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Ae(e,n))return;eu.set(n),a.uniformMatrix2fv(this.addr,!1,eu),Le(e,n)}}function O_(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;a.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Ae(e,n))return;tu.set(n),a.uniformMatrix3fv(this.addr,!1,tu),Le(e,n)}}function B_(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;a.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Ae(e,n))return;Qc.set(n),a.uniformMatrix4fv(this.addr,!1,Qc),Le(e,n)}}function k_(a,t){const e=this.cache;e[0]!==t&&(a.uniform1i(this.addr,t),e[0]=t)}function U_(a,t){const e=this.cache;Ae(e,t)||(a.uniform2iv(this.addr,t),Le(e,t))}function V_(a,t){const e=this.cache;Ae(e,t)||(a.uniform3iv(this.addr,t),Le(e,t))}function G_(a,t){const e=this.cache;Ae(e,t)||(a.uniform4iv(this.addr,t),Le(e,t))}function H_(a,t){const e=this.cache;e[0]!==t&&(a.uniform1ui(this.addr,t),e[0]=t)}function W_(a,t){const e=this.cache;Ae(e,t)||(a.uniform2uiv(this.addr,t),Le(e,t))}function q_(a,t){const e=this.cache;Ae(e,t)||(a.uniform3uiv(this.addr,t),Le(e,t))}function X_(a,t){const e=this.cache;Ae(e,t)||(a.uniform4uiv(this.addr,t),Le(e,t))}function j_(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||kh,i)}function Y_(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Vh,i)}function $_(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Gh,i)}function Z_(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Uh,i)}function K_(a){switch(a){case 5126:return D_;case 35664:return I_;case 35665:return F_;case 35666:return z_;case 35674:return N_;case 35675:return O_;case 35676:return B_;case 5124:case 35670:return k_;case 35667:case 35671:return U_;case 35668:case 35672:return V_;case 35669:case 35673:return G_;case 5125:return H_;case 36294:return W_;case 36295:return q_;case 36296:return X_;case 35678:case 36198:case 36298:case 36306:case 35682:return j_;case 35679:case 36299:case 36307:return Y_;case 35680:case 36300:case 36308:case 36293:return $_;case 36289:case 36303:case 36311:case 36292:return Z_}}function J_(a,t){a.uniform1fv(this.addr,t)}function Q_(a,t){const e=Qs(t,this.size,2);a.uniform2fv(this.addr,e)}function t0(a,t){const e=Qs(t,this.size,3);a.uniform3fv(this.addr,e)}function e0(a,t){const e=Qs(t,this.size,4);a.uniform4fv(this.addr,e)}function n0(a,t){const e=Qs(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,e)}function i0(a,t){const e=Qs(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,e)}function s0(a,t){const e=Qs(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,e)}function r0(a,t){a.uniform1iv(this.addr,t)}function o0(a,t){a.uniform2iv(this.addr,t)}function a0(a,t){a.uniform3iv(this.addr,t)}function l0(a,t){a.uniform4iv(this.addr,t)}function c0(a,t){a.uniform1uiv(this.addr,t)}function u0(a,t){a.uniform2uiv(this.addr,t)}function h0(a,t){a.uniform3uiv(this.addr,t)}function d0(a,t){a.uniform4uiv(this.addr,t)}function f0(a,t,e){const n=t.length,i=Bo(e,n);a.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture2D(t[s]||kh,i[s])}function p0(a,t,e){const n=t.length,i=Bo(e,n);a.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture3D(t[s]||Vh,i[s])}function m0(a,t,e){const n=t.length,i=Bo(e,n);a.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTextureCube(t[s]||Gh,i[s])}function g0(a,t,e){const n=t.length,i=Bo(e,n);a.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture2DArray(t[s]||Uh,i[s])}function _0(a){switch(a){case 5126:return J_;case 35664:return Q_;case 35665:return t0;case 35666:return e0;case 35674:return n0;case 35675:return i0;case 35676:return s0;case 5124:case 35670:return r0;case 35667:case 35671:return o0;case 35668:case 35672:return a0;case 35669:case 35673:return l0;case 5125:return c0;case 36294:return u0;case 36295:return h0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return g0}}class v0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=K_(e.type)}}class x0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=_0(e.type)}}class y0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Ma=/(\w+)(\])?(\[|\.)?/g;function nu(a,t){a.seq.push(t),a.map[t.id]=t}function b0(a,t,e){const n=a.name,i=n.length;for(Ma.lastIndex=0;;){const s=Ma.exec(n),r=Ma.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){nu(e,c===void 0?new v0(o,a,t):new x0(o,a,t));break}else{let d=e.map[o];d===void 0&&(d=new y0(o),nu(e,d)),e=d}}}class _o{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);b0(s,r,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function iu(a,t,e){const n=a.createShader(t);return a.shaderSource(n,e),a.compileShader(n),n}let w0=0;function S0(a,t){const e=a.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}function M0(a){switch(a){case Yi:return["Linear","( value )"];case Kt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function su(a,t,e){const n=a.getShaderParameter(t,35713),i=a.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+S0(a.getShaderSource(t),r)}else return i}function E0(a,t){const e=M0(t);return"vec4 "+a+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function T0(a,t){let e;switch(t){case Xf:e="Linear";break;case jf:e="Reinhard";break;case Yf:e="OptimizedCineon";break;case $f:e="ACESFilmic";break;case Zf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+a+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function C0(a){return[a.extensionDerivatives||!!a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(pr).join(`
`)}function A0(a){const t=[];for(const e in a){const n=a[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function L0(a,t){const e={},n=a.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=a.getActiveAttrib(t,i),r=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),e[r]={type:s.type,location:a.getAttribLocation(t,r),locationSize:o}}return e}function pr(a){return a!==""}function ru(a,t){return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ou(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const P0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(a){return a.replace(P0,R0)}function R0(a,t){const e=Lt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Ja(e)}const D0=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,I0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function au(a){return a.replace(I0,Hh).replace(D0,F0)}function F0(a,t,e,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Hh(a,t,e,n)}function Hh(a,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function lu(a){let t="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function z0(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===bh?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===Sf?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===fr&&(t="SHADOWMAP_TYPE_VSM"),t}function N0(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Vs:case Gs:t="ENVMAP_TYPE_CUBE";break;case zo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function O0(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Gs:t="ENVMAP_MODE_REFRACTION";break}return t}function B0(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Mh:t="ENVMAP_BLENDING_MULTIPLY";break;case Wf:t="ENVMAP_BLENDING_MIX";break;case qf:t="ENVMAP_BLENDING_ADD";break}return t}function k0(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function U0(a,t,e,n){const i=a.getContext(),s=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=z0(e),c=N0(e),u=O0(e),d=B0(e),h=k0(e),m=e.isWebGL2?"":C0(e),g=A0(s),f=i.createProgram();let p,_,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(pr).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(pr).join(`
`),_.length>0&&(_+=`
`)):(p=[lu(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),_=[m,lu(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?Lt.tonemapping_pars_fragment:"",e.toneMapping!==Kn?T0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Lt.encodings_pars_fragment,E0("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),r=Ja(r),r=ru(r,e),r=ou(r,e),o=Ja(o),o=ru(o,e),o=ou(o,e),r=au(r),o=au(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",e.glslVersion===Rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=v+p+r,b=v+_+o,x=iu(i,35633,w),M=iu(i,35632,b);if(i.attachShader(f,x),i.attachShader(f,M),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),a.debug.checkShaderErrors){const E=i.getProgramInfoLog(f).trim(),I=i.getShaderInfoLog(x).trim(),z=i.getShaderInfoLog(M).trim();let j=!0,F=!0;if(i.getProgramParameter(f,35714)===!1){j=!1;const R=su(i,x,"vertex"),N=su(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+E+`
`+R+`
`+N)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(I===""||z==="")&&(F=!1);F&&(this.diagnostics={runnable:j,programLog:E,vertexShader:{log:I,prefix:p},fragmentShader:{log:z,prefix:_}})}i.deleteShader(x),i.deleteShader(M);let C;this.getUniforms=function(){return C===void 0&&(C=new _o(i,f)),C};let y;return this.getAttributes=function(){return y===void 0&&(y=L0(i,f)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=e.shaderName,this.id=w0++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=x,this.fragmentShader=M,this}let V0=0;class G0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;return e.has(t)===!1&&e.set(t,new Set),e.get(t)}_getShaderStage(t){const e=this.shaderCache;if(e.has(t)===!1){const n=new H0(t);e.set(t,n)}return e.get(t)}}class H0{constructor(t){this.id=V0++,this.code=t,this.usedTimes=0}}function W0(a,t,e,n,i,s,r){const o=new Ml,l=new G0,c=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y,E,I,z,j){const F=z.fog,R=j.geometry,N=y.isMeshStandardMaterial?z.environment:null,D=(y.isMeshStandardMaterial?e:t).get(y.envMap||N),V=!!D&&D.mapping===zo?D.image.height:null,U=g[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const B=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,X=B!==void 0?B.length:0;let tt=0;R.morphAttributes.position!==void 0&&(tt=1),R.morphAttributes.normal!==void 0&&(tt=2),R.morphAttributes.color!==void 0&&(tt=3);let W,nt,ot,_t;if(U){const Ut=Cn[U];W=Ut.vertexShader,nt=Ut.fragmentShader}else W=y.vertexShader,nt=y.fragmentShader,l.update(y),ot=l.getVertexShaderID(y),_t=l.getFragmentShaderID(y);const K=a.getRenderTarget(),It=y.alphaTest>0,xt=y.clearcoat>0,wt=y.iridescence>0;return{isWebGL2:u,shaderID:U,shaderName:y.type,vertexShader:W,fragmentShader:nt,defines:y.defines,customVertexShaderID:ot,customFragmentShaderID:_t,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:j.isInstancedMesh===!0,instancingColor:j.isInstancedMesh===!0&&j.instanceColor!==null,supportsVertexTextures:h,outputEncoding:K===null?a.outputEncoding:K.isXRRenderTarget===!0?K.texture.encoding:Yi,map:!!y.map,matcap:!!y.matcap,envMap:!!D,envMapMode:D&&D.mapping,envMapCubeUVHeight:V,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===mp,tangentSpaceNormalMap:y.normalMapType===Ch,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Kt,clearcoat:xt,clearcoatMap:xt&&!!y.clearcoatMap,clearcoatRoughnessMap:xt&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:xt&&!!y.clearcoatNormalMap,iridescence:wt,iridescenceMap:wt&&!!y.iridescenceMap,iridescenceThicknessMap:wt&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===zs,alphaMap:!!y.alphaMap,alphaTest:It,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!R.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!F,useFog:y.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:d,skinning:j.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:tt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:a.shadowMap.enabled&&I.length>0,shadowMapType:a.shadowMap.type,toneMapping:y.toneMapped?a.toneMapping:Kn,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Us,flipSided:y.side===gn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)E.push(I),E.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(_(E,y),v(E,y),E.push(a.outputEncoding)),E.push(y.customProgramCacheKey),E.join()}function _(y,E){y.push(E.precision),y.push(E.outputEncoding),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.combine),y.push(E.vertexUvs),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function v(y,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.map&&o.enable(4),E.matcap&&o.enable(5),E.envMap&&o.enable(6),E.lightMap&&o.enable(7),E.aoMap&&o.enable(8),E.emissiveMap&&o.enable(9),E.bumpMap&&o.enable(10),E.normalMap&&o.enable(11),E.objectSpaceNormalMap&&o.enable(12),E.tangentSpaceNormalMap&&o.enable(13),E.clearcoat&&o.enable(14),E.clearcoatMap&&o.enable(15),E.clearcoatRoughnessMap&&o.enable(16),E.clearcoatNormalMap&&o.enable(17),E.iridescence&&o.enable(18),E.iridescenceMap&&o.enable(19),E.iridescenceThicknessMap&&o.enable(20),E.displacementMap&&o.enable(21),E.specularMap&&o.enable(22),E.roughnessMap&&o.enable(23),E.metalnessMap&&o.enable(24),E.gradientMap&&o.enable(25),E.alphaMap&&o.enable(26),E.alphaTest&&o.enable(27),E.vertexColors&&o.enable(28),E.vertexAlphas&&o.enable(29),E.vertexUvs&&o.enable(30),E.vertexTangents&&o.enable(31),E.uvsVertexOnly&&o.enable(32),E.fog&&o.enable(33),y.push(o.mask),o.disableAll(),E.useFog&&o.enable(0),E.flatShading&&o.enable(1),E.logarithmicDepthBuffer&&o.enable(2),E.skinning&&o.enable(3),E.morphTargets&&o.enable(4),E.morphNormals&&o.enable(5),E.morphColors&&o.enable(6),E.premultipliedAlpha&&o.enable(7),E.shadowMapEnabled&&o.enable(8),E.physicallyCorrectLights&&o.enable(9),E.doubleSided&&o.enable(10),E.flipSided&&o.enable(11),E.useDepthPacking&&o.enable(12),E.dithering&&o.enable(13),E.specularIntensityMap&&o.enable(14),E.specularColorMap&&o.enable(15),E.transmission&&o.enable(16),E.transmissionMap&&o.enable(17),E.thicknessMap&&o.enable(18),E.sheen&&o.enable(19),E.sheenColorMap&&o.enable(20),E.sheenRoughnessMap&&o.enable(21),E.decodeVideoTexture&&o.enable(22),E.opaque&&o.enable(23),y.push(o.mask)}function w(y){const E=g[y.type];let I;if(E){const z=Cn[E];I=Rp.clone(z.uniforms)}else I=y.uniforms;return I}function b(y,E){let I;for(let z=0,j=c.length;z<j;z++){const F=c[z];if(F.cacheKey===E){I=F,++I.usedTimes;break}}return I===void 0&&(I=new U0(a,E,y,s),c.push(I)),I}function x(y){if(--y.usedTimes===0){const E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),y.destroy()}}function M(y){l.remove(y)}function C(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:w,acquireProgram:b,releaseProgram:x,releaseShaderCache:M,programs:c,dispose:C}}function q0(){let a=new WeakMap;function t(s){let r=a.get(s);return r===void 0&&(r={},a.set(s,r)),r}function e(s){a.delete(s)}function n(s,r,o){a.get(s)[r]=o}function i(){a=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function X0(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function cu(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function uu(){const a=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(d,h,m,g,f,p){let _=a[t];return _===void 0?(_={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:f,group:p},a[t]=_):(_.id=d.id,_.object=d,_.geometry=h,_.material=m,_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=f,_.group=p),t++,_}function o(d,h,m,g,f,p){const _=r(d,h,m,g,f,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):e.push(_)}function l(d,h,m,g,f,p){const _=r(d,h,m,g,f,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):e.unshift(_)}function c(d,h){e.length>1&&e.sort(d||X0),n.length>1&&n.sort(h||cu),i.length>1&&i.sort(h||cu)}function u(){for(let d=t,h=a.length;d<h;d++){const m=a[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function j0(){let a=new WeakMap;function t(n,i){let s;return a.has(n)===!1?(s=new uu,a.set(n,[s])):i>=a.get(n).length?(s=new uu,a.get(n).push(s)):s=a.get(n)[i],s}function e(){a=new WeakMap}return{get:t,dispose:e}}function Y0(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Bt};break;case"SpotLight":e={position:new k,direction:new k,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new k,halfWidth:new k,halfHeight:new k};break}return a[t.id]=e,e}}}function $0(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=e,e}}}let Z0=0;function K0(a,t){return(t.castShadow?1:0)-(a.castShadow?1:0)}function J0(a,t){const e=new Y0,n=$0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new k);const s=new k,r=new le,o=new le;function l(u,d){let h=0,m=0,g=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,p=0,_=0,v=0,w=0,b=0,x=0,M=0;u.sort(K0);const C=d!==!0?Math.PI:1;for(let E=0,I=u.length;E<I;E++){const z=u[E],j=z.color,F=z.intensity,R=z.distance,N=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=j.r*F*C,m+=j.g*F*C,g+=j.b*F*C;else if(z.isLightProbe)for(let D=0;D<9;D++)i.probe[D].addScaledVector(z.sh.coefficients[D],F);else if(z.isDirectionalLight){const D=e.get(z);if(D.color.copy(z.color).multiplyScalar(z.intensity*C),z.castShadow){const V=z.shadow,U=n.get(z);U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,i.directionalShadow[f]=U,i.directionalShadowMap[f]=N,i.directionalShadowMatrix[f]=z.shadow.matrix,b++}i.directional[f]=D,f++}else if(z.isSpotLight){const D=e.get(z);if(D.position.setFromMatrixPosition(z.matrixWorld),D.color.copy(j).multiplyScalar(F*C),D.distance=R,D.coneCos=Math.cos(z.angle),D.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),D.decay=z.decay,z.castShadow){const V=z.shadow,U=n.get(z);U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,i.spotShadow[_]=U,i.spotShadowMap[_]=N,i.spotShadowMatrix[_]=z.shadow.matrix,M++}i.spot[_]=D,_++}else if(z.isRectAreaLight){const D=e.get(z);D.color.copy(j).multiplyScalar(F),D.halfWidth.set(z.width*.5,0,0),D.halfHeight.set(0,z.height*.5,0),i.rectArea[v]=D,v++}else if(z.isPointLight){const D=e.get(z);if(D.color.copy(z.color).multiplyScalar(z.intensity*C),D.distance=z.distance,D.decay=z.decay,z.castShadow){const V=z.shadow,U=n.get(z);U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,U.shadowCameraNear=V.camera.near,U.shadowCameraFar=V.camera.far,i.pointShadow[p]=U,i.pointShadowMap[p]=N,i.pointShadowMatrix[p]=z.shadow.matrix,x++}i.point[p]=D,p++}else if(z.isHemisphereLight){const D=e.get(z);D.skyColor.copy(z.color).multiplyScalar(F*C),D.groundColor.copy(z.groundColor).multiplyScalar(F*C),i.hemi[w]=D,w++}}v>0&&(t.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=g;const y=i.hash;(y.directionalLength!==f||y.pointLength!==p||y.spotLength!==_||y.rectAreaLength!==v||y.hemiLength!==w||y.numDirectionalShadows!==b||y.numPointShadows!==x||y.numSpotShadows!==M)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=v,i.point.length=p,i.hemi.length=w,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=x,i.spotShadowMatrix.length=M,y.directionalLength=f,y.pointLength=p,y.spotLength=_,y.rectAreaLength=v,y.hemiLength=w,y.numDirectionalShadows=b,y.numPointShadows=x,y.numSpotShadows=M,i.version=Z0++)}function c(u,d){let h=0,m=0,g=0,f=0,p=0;const _=d.matrixWorldInverse;for(let v=0,w=u.length;v<w;v++){const b=u[v];if(b.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(_),h++}else if(b.isSpotLight){const x=i.spot[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const x=i.rectArea[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(_),o.identity(),r.copy(b.matrixWorld),r.premultiply(_),o.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),f++}else if(b.isPointLight){const x=i.point[m];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(_),m++}else if(b.isHemisphereLight){const x=i.hemi[p];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function hu(a,t){const e=new J0(a,t),n=[],i=[];function s(){n.length=0,i.length=0}function r(d){n.push(d)}function o(d){i.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function Q0(a,t){let e=new WeakMap;function n(s,r=0){let o;return e.has(s)===!1?(o=new hu(a,t),e.set(s,[o])):r>=e.get(s).length?(o=new hu(a,t),e.get(s).push(o)):o=e.get(s)[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class tv extends Js{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ev extends Js{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new k,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const nv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sv(a,t,e){let n=new El;const i=new Et,s=new Et,r=new pe,o=new tv({depthPacking:pp}),l=new ev,c={},u=e.maxTextureSize,d={0:gn,1:Er,2:Us},h=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:nv,fragmentShader:iv}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new ni;g.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new Pn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bh,this.render=function(b,x,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const C=a.getRenderTarget(),y=a.getActiveCubeFace(),E=a.getActiveMipmapLevel(),I=a.state;I.setBlending(_i),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let z=0,j=b.length;z<j;z++){const F=b[z],R=F.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const N=R.getFrameExtents();if(i.multiply(N),s.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/N.x),i.x=s.x*N.x,R.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/N.y),i.y=s.y*N.y,R.mapSize.y=s.y)),R.map===null){const V=this.type!==fr?{minFilter:Re,magFilter:Re}:{};R.map=new $i(i.x,i.y,V),R.map.texture.name=F.name+".shadowMap",R.camera.updateProjectionMatrix()}a.setRenderTarget(R.map),a.clear();const D=R.getViewportCount();for(let V=0;V<D;V++){const U=R.getViewport(V);r.set(s.x*U.x,s.y*U.y,s.x*U.z,s.y*U.w),I.viewport(r),R.updateMatrices(F,V),n=R.getFrustum(),w(x,M,R.camera,F,this.type)}R.isPointLightShadow!==!0&&this.type===fr&&_(R,M),R.needsUpdate=!1}p.needsUpdate=!1,a.setRenderTarget(C,y,E)};function _(b,x){const M=t.update(f);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new $i(i.x,i.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,a.setRenderTarget(b.mapPass),a.clear(),a.renderBufferDirect(x,null,M,h,f,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,a.setRenderTarget(b.map),a.clear(),a.renderBufferDirect(x,null,M,m,f,null)}function v(b,x,M,C,y,E){let I=null;const z=M.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(z!==void 0?I=z:I=M.isPointLight===!0?l:o,a.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0){const j=I.uuid,F=x.uuid;let R=c[j];R===void 0&&(R={},c[j]=R);let N=R[F];N===void 0&&(N=I.clone(),R[F]=N),I=N}return I.visible=x.visible,I.wireframe=x.wireframe,E===fr?I.side=x.shadowSide!==null?x.shadowSide:x.side:I.side=x.shadowSide!==null?x.shadowSide:d[x.side],I.alphaMap=x.alphaMap,I.alphaTest=x.alphaTest,I.clipShadows=x.clipShadows,I.clippingPlanes=x.clippingPlanes,I.clipIntersection=x.clipIntersection,I.displacementMap=x.displacementMap,I.displacementScale=x.displacementScale,I.displacementBias=x.displacementBias,I.wireframeLinewidth=x.wireframeLinewidth,I.linewidth=x.linewidth,M.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(M.matrixWorld),I.nearDistance=C,I.farDistance=y),I}function w(b,x,M,C,y){if(b.visible===!1)return;if(b.layers.test(x.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===fr)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,b.matrixWorld);const z=t.update(b),j=b.material;if(Array.isArray(j)){const F=z.groups;for(let R=0,N=F.length;R<N;R++){const D=F[R],V=j[D.materialIndex];if(V&&V.visible){const U=v(b,V,C,M.near,M.far,y);a.renderBufferDirect(M,null,z,U,b,D)}}}else if(j.visible){const F=v(b,j,C,M.near,M.far,y);a.renderBufferDirect(M,null,z,F,b,null)}}const I=b.children;for(let z=0,j=I.length;z<j;z++)w(I[z],x,M,C,y)}}function rv(a,t,e){const n=e.isWebGL2;function i(){let O=!1;const at=new pe;let $=null;const ft=new pe(0,0,0,0);return{setMask:function(dt){$!==dt&&!O&&(a.colorMask(dt,dt,dt,dt),$=dt)},setLocked:function(dt){O=dt},setClear:function(dt,zt,me,te,si){si===!0&&(dt*=te,zt*=te,me*=te),at.set(dt,zt,me,te),ft.equals(at)===!1&&(a.clearColor(dt,zt,me,te),ft.copy(at))},reset:function(){O=!1,$=null,ft.set(-1,0,0,0)}}}function s(){let O=!1,at=null,$=null,ft=null;return{setTest:function(dt){dt?It(2929):xt(2929)},setMask:function(dt){at!==dt&&!O&&(a.depthMask(dt),at=dt)},setFunc:function(dt){if($!==dt){if(dt)switch(dt){case Of:a.depthFunc(512);break;case Bf:a.depthFunc(519);break;case kf:a.depthFunc(513);break;case Wa:a.depthFunc(515);break;case Uf:a.depthFunc(514);break;case Vf:a.depthFunc(518);break;case Gf:a.depthFunc(516);break;case Hf:a.depthFunc(517);break;default:a.depthFunc(515)}else a.depthFunc(515);$=dt}},setLocked:function(dt){O=dt},setClear:function(dt){ft!==dt&&(a.clearDepth(dt),ft=dt)},reset:function(){O=!1,at=null,$=null,ft=null}}}function r(){let O=!1,at=null,$=null,ft=null,dt=null,zt=null,me=null,te=null,si=null;return{setTest:function($t){O||($t?It(2960):xt(2960))},setMask:function($t){at!==$t&&!O&&(a.stencilMask($t),at=$t)},setFunc:function($t,zn,Ze){($!==$t||ft!==zn||dt!==Ze)&&(a.stencilFunc($t,zn,Ze),$=$t,ft=zn,dt=Ze)},setOp:function($t,zn,Ze){(zt!==$t||me!==zn||te!==Ze)&&(a.stencilOp($t,zn,Ze),zt=$t,me=zn,te=Ze)},setLocked:function($t){O=$t},setClear:function($t){si!==$t&&(a.clearStencil($t),si=$t)},reset:function(){O=!1,at=null,$=null,ft=null,dt=null,zt=null,me=null,te=null,si=null}}}const o=new i,l=new s,c=new r,u=new WeakMap,d=new WeakMap;let h={},m={},g=new WeakMap,f=[],p=null,_=!1,v=null,w=null,b=null,x=null,M=null,C=null,y=null,E=!1,I=null,z=null,j=null,F=null,R=null;const N=a.getParameter(35661);let D=!1,V=0;const U=a.getParameter(7938);U.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(U)[1]),D=V>=1):U.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),D=V>=2);let B=null,X={};const tt=a.getParameter(3088),W=a.getParameter(2978),nt=new pe().fromArray(tt),ot=new pe().fromArray(W);function _t(O,at,$){const ft=new Uint8Array(4),dt=a.createTexture();a.bindTexture(O,dt),a.texParameteri(O,10241,9728),a.texParameteri(O,10240,9728);for(let zt=0;zt<$;zt++)a.texImage2D(at+zt,0,6408,1,1,0,6408,5121,ft);return dt}const K={};K[3553]=_t(3553,3553,1),K[34067]=_t(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),It(2929),l.setFunc(Wa),ce(!1),Oe(ec),It(2884),ne(_i);function It(O){h[O]!==!0&&(a.enable(O),h[O]=!0)}function xt(O){h[O]!==!1&&(a.disable(O),h[O]=!1)}function wt(O,at){return m[O]!==at?(a.bindFramebuffer(O,at),m[O]=at,n&&(O===36009&&(m[36160]=at),O===36160&&(m[36009]=at)),!0):!1}function mt(O,at){let $=f,ft=!1;if(O)if($=g.get(at),$===void 0&&($=[],g.set(at,$)),O.isWebGLMultipleRenderTargets){const dt=O.texture;if($.length!==dt.length||$[0]!==36064){for(let zt=0,me=dt.length;zt<me;zt++)$[zt]=36064+zt;$.length=dt.length,ft=!0}}else $[0]!==36064&&($[0]=36064,ft=!0);else $[0]!==1029&&($[0]=1029,ft=!0);ft&&(e.isWebGL2?a.drawBuffers($):t.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function Ut(O){return p!==O?(a.useProgram(O),p=O,!0):!1}const Tt={[Cs]:32774,[Tf]:32778,[Cf]:32779};if(n)Tt[rc]=32775,Tt[oc]=32776;else{const O=t.get("EXT_blend_minmax");O!==null&&(Tt[rc]=O.MIN_EXT,Tt[oc]=O.MAX_EXT)}const vt={[Af]:0,[Lf]:1,[Pf]:768,[wh]:770,[Nf]:776,[Ff]:774,[Df]:772,[Rf]:769,[Sh]:771,[zf]:775,[If]:773};function ne(O,at,$,ft,dt,zt,me,te){if(O===_i){_===!0&&(xt(3042),_=!1);return}if(_===!1&&(It(3042),_=!0),O!==Ef){if(O!==v||te!==E){if((w!==Cs||M!==Cs)&&(a.blendEquation(32774),w=Cs,M=Cs),te)switch(O){case zs:a.blendFuncSeparate(1,771,1,771);break;case nc:a.blendFunc(1,1);break;case ic:a.blendFuncSeparate(0,769,0,1);break;case sc:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case zs:a.blendFuncSeparate(770,771,1,771);break;case nc:a.blendFunc(770,1);break;case ic:a.blendFuncSeparate(0,769,0,1);break;case sc:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,x=null,C=null,y=null,v=O,E=te}return}dt=dt||at,zt=zt||$,me=me||ft,(at!==w||dt!==M)&&(a.blendEquationSeparate(Tt[at],Tt[dt]),w=at,M=dt),($!==b||ft!==x||zt!==C||me!==y)&&(a.blendFuncSeparate(vt[$],vt[ft],vt[zt],vt[me]),b=$,x=ft,C=zt,y=me),v=O,E=null}function xe(O,at){O.side===Us?xt(2884):It(2884);let $=O.side===gn;at&&($=!$),ce($),O.blending===zs&&O.transparent===!1?ne(_i):ne(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),o.setMask(O.colorWrite);const ft=O.stencilWrite;c.setTest(ft),ft&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Vt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?It(32926):xt(32926)}function ce(O){I!==O&&(O?a.frontFace(2304):a.frontFace(2305),I=O)}function Oe(O){O!==bf?(It(2884),O!==z&&(O===ec?a.cullFace(1029):O===wf?a.cullFace(1028):a.cullFace(1032))):xt(2884),z=O}function ue(O){O!==j&&(D&&a.lineWidth(O),j=O)}function Vt(O,at,$){O?(It(32823),(F!==at||R!==$)&&(a.polygonOffset(at,$),F=at,R=$)):xt(32823)}function $e(O){O?It(3089):xt(3089)}function Be(O){O===void 0&&(O=33984+N-1),B!==O&&(a.activeTexture(O),B=O)}function P(O,at){B===null&&Be();let $=X[B];$===void 0&&($={type:void 0,texture:void 0},X[B]=$),($.type!==O||$.texture!==at)&&(a.bindTexture(O,at||K[O]),$.type=O,$.texture=at)}function T(){const O=X[B];O!==void 0&&O.type!==void 0&&(a.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Z(){try{a.compressedTexImage2D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{a.texSubImage2D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{a.texSubImage3D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ut(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function yt(){try{a.texStorage2D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function A(){try{a.texStorage3D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{a.texImage2D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{a.texImage3D.apply(a,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ht(O){nt.equals(O)===!1&&(a.scissor(O.x,O.y,O.z,O.w),nt.copy(O))}function ct(O){ot.equals(O)===!1&&(a.viewport(O.x,O.y,O.z,O.w),ot.copy(O))}function bt(O,at){let $=d.get(at);$===void 0&&($=new WeakMap,d.set(at,$));let ft=$.get(O);ft===void 0&&(ft=a.getUniformBlockIndex(at,O.name),$.set(O,ft))}function Pt(O,at){const ft=d.get(at).get(O);u.get(O)!==ft&&(a.uniformBlockBinding(at,ft,O.__bindingPointIndex),u.set(O,ft))}function jt(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),h={},B=null,X={},m={},g=new WeakMap,f=[],p=null,_=!1,v=null,w=null,b=null,x=null,M=null,C=null,y=null,E=!1,I=null,z=null,j=null,F=null,R=null,nt.set(0,0,a.canvas.width,a.canvas.height),ot.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:It,disable:xt,bindFramebuffer:wt,drawBuffers:mt,useProgram:Ut,setBlending:ne,setMaterial:xe,setFlipSided:ce,setCullFace:Oe,setLineWidth:ue,setPolygonOffset:Vt,setScissorTest:$e,activeTexture:Be,bindTexture:P,unbindTexture:T,compressedTexImage2D:Z,texImage2D:et,texImage3D:rt,updateUBOMapping:bt,uniformBlockBinding:Pt,texStorage2D:yt,texStorage3D:A,texSubImage2D:it,texSubImage3D:st,compressedTexSubImage2D:ut,scissor:ht,viewport:ct,reset:jt}}function ov(a,t,e,n,i,s,r){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let f;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,T){return _?new OffscreenCanvas(P,T):bo("canvas")}function w(P,T,Z,it){let st=1;if((P.width>it||P.height>it)&&(st=it/Math.max(P.width,P.height)),st<1||T===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const ut=T?Ka:Math.floor,yt=ut(st*P.width),A=ut(st*P.height);f===void 0&&(f=v(yt,A));const et=Z?v(yt,A):f;return et.width=yt,et.height=A,et.getContext("2d").drawImage(P,0,0,yt,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+yt+"x"+A+")."),et}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function b(P){return Dc(P.width)&&Dc(P.height)}function x(P){return o?!1:P.wrapS!==pn||P.wrapT!==pn||P.minFilter!==Re&&P.minFilter!==en}function M(P,T){return P.generateMipmaps&&T&&P.minFilter!==Re&&P.minFilter!==en}function C(P){a.generateMipmap(P)}function y(P,T,Z,it,st=!1){if(o===!1)return T;if(P!==null){if(a[P]!==void 0)return a[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ut=T;return T===6403&&(Z===5126&&(ut=33326),Z===5131&&(ut=33325),Z===5121&&(ut=33321)),T===33319&&(Z===5126&&(ut=33328),Z===5131&&(ut=33327),Z===5121&&(ut=33323)),T===6408&&(Z===5126&&(ut=34836),Z===5131&&(ut=34842),Z===5121&&(ut=it===Kt&&st===!1?35907:32856),Z===32819&&(ut=32854),Z===32820&&(ut=32855)),(ut===33325||ut===33326||ut===33327||ut===33328||ut===34842||ut===34836)&&t.get("EXT_color_buffer_float"),ut}function E(P,T,Z){return M(P,Z)===!0||P.isFramebufferTexture&&P.minFilter!==Re&&P.minFilter!==en?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function I(P){return P===Re||P===ac||P===lc?9728:9729}function z(P){const T=P.target;T.removeEventListener("dispose",z),F(T),T.isVideoTexture&&g.delete(T)}function j(P){const T=P.target;T.removeEventListener("dispose",j),N(T)}function F(P){const T=n.get(P);if(T.__webglInit===void 0)return;const Z=P.source,it=p.get(Z);if(it){const st=it[T.__cacheKey];st.usedTimes--,st.usedTimes===0&&R(P),Object.keys(it).length===0&&p.delete(Z)}n.remove(P)}function R(P){const T=n.get(P);a.deleteTexture(T.__webglTexture);const Z=P.source,it=p.get(Z);delete it[T.__cacheKey],r.memory.textures--}function N(P){const T=P.texture,Z=n.get(P),it=n.get(T);if(it.__webglTexture!==void 0&&(a.deleteTexture(it.__webglTexture),r.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let st=0;st<6;st++)a.deleteFramebuffer(Z.__webglFramebuffer[st]),Z.__webglDepthbuffer&&a.deleteRenderbuffer(Z.__webglDepthbuffer[st]);else{if(a.deleteFramebuffer(Z.__webglFramebuffer),Z.__webglDepthbuffer&&a.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&a.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let st=0;st<Z.__webglColorRenderbuffer.length;st++)Z.__webglColorRenderbuffer[st]&&a.deleteRenderbuffer(Z.__webglColorRenderbuffer[st]);Z.__webglDepthRenderbuffer&&a.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let st=0,ut=T.length;st<ut;st++){const yt=n.get(T[st]);yt.__webglTexture&&(a.deleteTexture(yt.__webglTexture),r.memory.textures--),n.remove(T[st])}n.remove(T),n.remove(P)}let D=0;function V(){D=0}function U(){const P=D;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),D+=1,P}function B(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.encoding),T.join()}function X(P,T){const Z=n.get(P);if(P.isVideoTexture&&$e(P),P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){const it=P.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xt(Z,P,T);return}}e.activeTexture(33984+T),e.bindTexture(3553,Z.__webglTexture)}function tt(P,T){const Z=n.get(P);if(P.version>0&&Z.__version!==P.version){xt(Z,P,T);return}e.activeTexture(33984+T),e.bindTexture(35866,Z.__webglTexture)}function W(P,T){const Z=n.get(P);if(P.version>0&&Z.__version!==P.version){xt(Z,P,T);return}e.activeTexture(33984+T),e.bindTexture(32879,Z.__webglTexture)}function nt(P,T){const Z=n.get(P);if(P.version>0&&Z.__version!==P.version){wt(Z,P,T);return}e.activeTexture(33984+T),e.bindTexture(34067,Z.__webglTexture)}const ot={[ja]:10497,[pn]:33071,[Ya]:33648},_t={[Re]:9728,[ac]:9984,[lc]:9986,[en]:9729,[Kf]:9985,[No]:9987};function K(P,T,Z){if(Z?(a.texParameteri(P,10242,ot[T.wrapS]),a.texParameteri(P,10243,ot[T.wrapT]),(P===32879||P===35866)&&a.texParameteri(P,32882,ot[T.wrapR]),a.texParameteri(P,10240,_t[T.magFilter]),a.texParameteri(P,10241,_t[T.minFilter])):(a.texParameteri(P,10242,33071),a.texParameteri(P,10243,33071),(P===32879||P===35866)&&a.texParameteri(P,32882,33071),(T.wrapS!==pn||T.wrapT!==pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(P,10240,I(T.magFilter)),a.texParameteri(P,10241,I(T.minFilter)),T.minFilter!==Re&&T.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const it=t.get("EXT_texture_filter_anisotropic");if(T.type===ki&&t.has("OES_texture_float_linear")===!1||o===!1&&T.type===Tr&&t.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(a.texParameterf(P,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function It(P,T){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",z));const it=T.source;let st=p.get(it);st===void 0&&(st={},p.set(it,st));const ut=B(T);if(ut!==P.__cacheKey){st[ut]===void 0&&(st[ut]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,Z=!0),st[ut].usedTimes++;const yt=st[P.__cacheKey];yt!==void 0&&(st[P.__cacheKey].usedTimes--,yt.usedTimes===0&&R(T)),P.__cacheKey=ut,P.__webglTexture=st[ut].texture}return Z}function xt(P,T,Z){let it=3553;T.isDataArrayTexture&&(it=35866),T.isData3DTexture&&(it=32879);const st=It(P,T),ut=T.source;if(e.activeTexture(33984+Z),e.bindTexture(it,P.__webglTexture),ut.version!==ut.__currentVersion||st===!0){a.pixelStorei(37440,T.flipY),a.pixelStorei(37441,T.premultiplyAlpha),a.pixelStorei(3317,T.unpackAlignment),a.pixelStorei(37443,0);const yt=x(T)&&b(T.image)===!1;let A=w(T.image,yt,!1,u);A=Be(T,A);const et=b(A)||o,rt=s.convert(T.format,T.encoding);let ht=s.convert(T.type),ct=y(T.internalFormat,rt,ht,T.encoding,T.isVideoTexture);K(it,T,et);let bt;const Pt=T.mipmaps,jt=o&&T.isVideoTexture!==!0,O=ut.__currentVersion===void 0||st===!0,at=E(T,A,et);if(T.isDepthTexture)ct=6402,o?T.type===ki?ct=36012:T.type===Bi?ct=33190:T.type===Ns?ct=35056:ct=33189:T.type===ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Gi&&ct===6402&&T.type!==Th&&T.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Bi,ht=s.convert(T.type)),T.format===Hs&&ct===6402&&(ct=34041,T.type!==Ns&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Ns,ht=s.convert(T.type))),O&&(jt?e.texStorage2D(3553,1,ct,A.width,A.height):e.texImage2D(3553,0,ct,A.width,A.height,0,rt,ht,null));else if(T.isDataTexture)if(Pt.length>0&&et){jt&&O&&e.texStorage2D(3553,at,ct,Pt[0].width,Pt[0].height);for(let $=0,ft=Pt.length;$<ft;$++)bt=Pt[$],jt?e.texSubImage2D(3553,$,0,0,bt.width,bt.height,rt,ht,bt.data):e.texImage2D(3553,$,ct,bt.width,bt.height,0,rt,ht,bt.data);T.generateMipmaps=!1}else jt?(O&&e.texStorage2D(3553,at,ct,A.width,A.height),e.texSubImage2D(3553,0,0,0,A.width,A.height,rt,ht,A.data)):e.texImage2D(3553,0,ct,A.width,A.height,0,rt,ht,A.data);else if(T.isCompressedTexture){jt&&O&&e.texStorage2D(3553,at,ct,Pt[0].width,Pt[0].height);for(let $=0,ft=Pt.length;$<ft;$++)bt=Pt[$],T.format!==Ln?rt!==null?jt?e.compressedTexSubImage2D(3553,$,0,0,bt.width,bt.height,rt,bt.data):e.compressedTexImage2D(3553,$,ct,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?e.texSubImage2D(3553,$,0,0,bt.width,bt.height,rt,ht,bt.data):e.texImage2D(3553,$,ct,bt.width,bt.height,0,rt,ht,bt.data)}else if(T.isDataArrayTexture)jt?(O&&e.texStorage3D(35866,at,ct,A.width,A.height,A.depth),e.texSubImage3D(35866,0,0,0,0,A.width,A.height,A.depth,rt,ht,A.data)):e.texImage3D(35866,0,ct,A.width,A.height,A.depth,0,rt,ht,A.data);else if(T.isData3DTexture)jt?(O&&e.texStorage3D(32879,at,ct,A.width,A.height,A.depth),e.texSubImage3D(32879,0,0,0,0,A.width,A.height,A.depth,rt,ht,A.data)):e.texImage3D(32879,0,ct,A.width,A.height,A.depth,0,rt,ht,A.data);else if(T.isFramebufferTexture){if(O)if(jt)e.texStorage2D(3553,at,ct,A.width,A.height);else{let $=A.width,ft=A.height;for(let dt=0;dt<at;dt++)e.texImage2D(3553,dt,ct,$,ft,0,rt,ht,null),$>>=1,ft>>=1}}else if(Pt.length>0&&et){jt&&O&&e.texStorage2D(3553,at,ct,Pt[0].width,Pt[0].height);for(let $=0,ft=Pt.length;$<ft;$++)bt=Pt[$],jt?e.texSubImage2D(3553,$,0,0,rt,ht,bt):e.texImage2D(3553,$,ct,rt,ht,bt);T.generateMipmaps=!1}else jt?(O&&e.texStorage2D(3553,at,ct,A.width,A.height),e.texSubImage2D(3553,0,0,0,rt,ht,A)):e.texImage2D(3553,0,ct,rt,ht,A);M(T,et)&&C(it),ut.__currentVersion=ut.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function wt(P,T,Z){if(T.image.length!==6)return;const it=It(P,T),st=T.source;if(e.activeTexture(33984+Z),e.bindTexture(34067,P.__webglTexture),st.version!==st.__currentVersion||it===!0){a.pixelStorei(37440,T.flipY),a.pixelStorei(37441,T.premultiplyAlpha),a.pixelStorei(3317,T.unpackAlignment),a.pixelStorei(37443,0);const ut=T.isCompressedTexture||T.image[0].isCompressedTexture,yt=T.image[0]&&T.image[0].isDataTexture,A=[];for(let $=0;$<6;$++)!ut&&!yt?A[$]=w(T.image[$],!1,!0,c):A[$]=yt?T.image[$].image:T.image[$],A[$]=Be(T,A[$]);const et=A[0],rt=b(et)||o,ht=s.convert(T.format,T.encoding),ct=s.convert(T.type),bt=y(T.internalFormat,ht,ct,T.encoding),Pt=o&&T.isVideoTexture!==!0,jt=st.__currentVersion===void 0||it===!0;let O=E(T,et,rt);K(34067,T,rt);let at;if(ut){Pt&&jt&&e.texStorage2D(34067,O,bt,et.width,et.height);for(let $=0;$<6;$++){at=A[$].mipmaps;for(let ft=0;ft<at.length;ft++){const dt=at[ft];T.format!==Ln?ht!==null?Pt?e.compressedTexSubImage2D(34069+$,ft,0,0,dt.width,dt.height,ht,dt.data):e.compressedTexImage2D(34069+$,ft,bt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?e.texSubImage2D(34069+$,ft,0,0,dt.width,dt.height,ht,ct,dt.data):e.texImage2D(34069+$,ft,bt,dt.width,dt.height,0,ht,ct,dt.data)}}}else{at=T.mipmaps,Pt&&jt&&(at.length>0&&O++,e.texStorage2D(34067,O,bt,A[0].width,A[0].height));for(let $=0;$<6;$++)if(yt){Pt?e.texSubImage2D(34069+$,0,0,0,A[$].width,A[$].height,ht,ct,A[$].data):e.texImage2D(34069+$,0,bt,A[$].width,A[$].height,0,ht,ct,A[$].data);for(let ft=0;ft<at.length;ft++){const zt=at[ft].image[$].image;Pt?e.texSubImage2D(34069+$,ft+1,0,0,zt.width,zt.height,ht,ct,zt.data):e.texImage2D(34069+$,ft+1,bt,zt.width,zt.height,0,ht,ct,zt.data)}}else{Pt?e.texSubImage2D(34069+$,0,0,0,ht,ct,A[$]):e.texImage2D(34069+$,0,bt,ht,ct,A[$]);for(let ft=0;ft<at.length;ft++){const dt=at[ft];Pt?e.texSubImage2D(34069+$,ft+1,0,0,ht,ct,dt.image[$]):e.texImage2D(34069+$,ft+1,bt,ht,ct,dt.image[$])}}}M(T,rt)&&C(34067),st.__currentVersion=st.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function mt(P,T,Z,it,st){const ut=s.convert(Z.format,Z.encoding),yt=s.convert(Z.type),A=y(Z.internalFormat,ut,yt,Z.encoding);n.get(T).__hasExternalTextures||(st===32879||st===35866?e.texImage3D(st,0,A,T.width,T.height,T.depth,0,ut,yt,null):e.texImage2D(st,0,A,T.width,T.height,0,ut,yt,null)),e.bindFramebuffer(36160,P),Vt(T)?h.framebufferTexture2DMultisampleEXT(36160,it,st,n.get(Z).__webglTexture,0,ue(T)):a.framebufferTexture2D(36160,it,st,n.get(Z).__webglTexture,0),e.bindFramebuffer(36160,null)}function Ut(P,T,Z){if(a.bindRenderbuffer(36161,P),T.depthBuffer&&!T.stencilBuffer){let it=33189;if(Z||Vt(T)){const st=T.depthTexture;st&&st.isDepthTexture&&(st.type===ki?it=36012:st.type===Bi&&(it=33190));const ut=ue(T);Vt(T)?h.renderbufferStorageMultisampleEXT(36161,ut,it,T.width,T.height):a.renderbufferStorageMultisample(36161,ut,it,T.width,T.height)}else a.renderbufferStorage(36161,it,T.width,T.height);a.framebufferRenderbuffer(36160,36096,36161,P)}else if(T.depthBuffer&&T.stencilBuffer){const it=ue(T);Z&&Vt(T)===!1?a.renderbufferStorageMultisample(36161,it,35056,T.width,T.height):Vt(T)?h.renderbufferStorageMultisampleEXT(36161,it,35056,T.width,T.height):a.renderbufferStorage(36161,34041,T.width,T.height),a.framebufferRenderbuffer(36160,33306,36161,P)}else{const it=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let st=0;st<it.length;st++){const ut=it[st],yt=s.convert(ut.format,ut.encoding),A=s.convert(ut.type),et=y(ut.internalFormat,yt,A,ut.encoding),rt=ue(T);Z&&Vt(T)===!1?a.renderbufferStorageMultisample(36161,rt,et,T.width,T.height):Vt(T)?h.renderbufferStorageMultisampleEXT(36161,rt,et,T.width,T.height):a.renderbufferStorage(36161,et,T.width,T.height)}}a.bindRenderbuffer(36161,null)}function Tt(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),X(T.depthTexture,0);const it=n.get(T.depthTexture).__webglTexture,st=ue(T);if(T.depthTexture.format===Gi)Vt(T)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,it,0,st):a.framebufferTexture2D(36160,36096,3553,it,0);else if(T.depthTexture.format===Hs)Vt(T)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,it,0,st):a.framebufferTexture2D(36160,33306,3553,it,0);else throw new Error("Unknown depthTexture format")}function vt(P){const T=n.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Tt(T.__webglFramebuffer,P)}else if(Z){T.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(36160,T.__webglFramebuffer[it]),T.__webglDepthbuffer[it]=a.createRenderbuffer(),Ut(T.__webglDepthbuffer[it],P,!1)}else e.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=a.createRenderbuffer(),Ut(T.__webglDepthbuffer,P,!1);e.bindFramebuffer(36160,null)}function ne(P,T,Z){const it=n.get(P);T!==void 0&&mt(it.__webglFramebuffer,P,P.texture,36064,3553),Z!==void 0&&vt(P)}function xe(P){const T=P.texture,Z=n.get(P),it=n.get(T);P.addEventListener("dispose",j),P.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=a.createTexture()),it.__version=T.version,r.memory.textures++);const st=P.isWebGLCubeRenderTarget===!0,ut=P.isWebGLMultipleRenderTargets===!0,yt=b(P)||o;if(st){Z.__webglFramebuffer=[];for(let A=0;A<6;A++)Z.__webglFramebuffer[A]=a.createFramebuffer()}else{if(Z.__webglFramebuffer=a.createFramebuffer(),ut)if(i.drawBuffers){const A=P.texture;for(let et=0,rt=A.length;et<rt;et++){const ht=n.get(A[et]);ht.__webglTexture===void 0&&(ht.__webglTexture=a.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&Vt(P)===!1){const A=ut?T:[T];Z.__webglMultisampledFramebuffer=a.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,Z.__webglMultisampledFramebuffer);for(let et=0;et<A.length;et++){const rt=A[et];Z.__webglColorRenderbuffer[et]=a.createRenderbuffer(),a.bindRenderbuffer(36161,Z.__webglColorRenderbuffer[et]);const ht=s.convert(rt.format,rt.encoding),ct=s.convert(rt.type),bt=y(rt.internalFormat,ht,ct,rt.encoding),Pt=ue(P);a.renderbufferStorageMultisample(36161,Pt,bt,P.width,P.height),a.framebufferRenderbuffer(36160,36064+et,36161,Z.__webglColorRenderbuffer[et])}a.bindRenderbuffer(36161,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=a.createRenderbuffer(),Ut(Z.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(36160,null)}}if(st){e.bindTexture(34067,it.__webglTexture),K(34067,T,yt);for(let A=0;A<6;A++)mt(Z.__webglFramebuffer[A],P,T,36064,34069+A);M(T,yt)&&C(34067),e.unbindTexture()}else if(ut){const A=P.texture;for(let et=0,rt=A.length;et<rt;et++){const ht=A[et],ct=n.get(ht);e.bindTexture(3553,ct.__webglTexture),K(3553,ht,yt),mt(Z.__webglFramebuffer,P,ht,36064+et,3553),M(ht,yt)&&C(3553)}e.unbindTexture()}else{let A=3553;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?A=P.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(A,it.__webglTexture),K(A,T,yt),mt(Z.__webglFramebuffer,P,T,36064,A),M(T,yt)&&C(A),e.unbindTexture()}P.depthBuffer&&vt(P)}function ce(P){const T=b(P)||o,Z=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let it=0,st=Z.length;it<st;it++){const ut=Z[it];if(M(ut,T)){const yt=P.isWebGLCubeRenderTarget?34067:3553,A=n.get(ut).__webglTexture;e.bindTexture(yt,A),C(yt),e.unbindTexture()}}}function Oe(P){if(o&&P.samples>0&&Vt(P)===!1){const T=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],Z=P.width,it=P.height;let st=16384;const ut=[],yt=P.stencilBuffer?33306:36096,A=n.get(P),et=P.isWebGLMultipleRenderTargets===!0;if(et)for(let rt=0;rt<T.length;rt++)e.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+rt,36161,null),e.bindFramebuffer(36160,A.__webglFramebuffer),a.framebufferTexture2D(36009,36064+rt,3553,null,0);e.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,A.__webglFramebuffer);for(let rt=0;rt<T.length;rt++){ut.push(36064+rt),P.depthBuffer&&ut.push(yt);const ht=A.__ignoreDepthValues!==void 0?A.__ignoreDepthValues:!1;if(ht===!1&&(P.depthBuffer&&(st|=256),P.stencilBuffer&&(st|=1024)),et&&a.framebufferRenderbuffer(36008,36064,36161,A.__webglColorRenderbuffer[rt]),ht===!0&&(a.invalidateFramebuffer(36008,[yt]),a.invalidateFramebuffer(36009,[yt])),et){const ct=n.get(T[rt]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,ct,0)}a.blitFramebuffer(0,0,Z,it,0,0,Z,it,st,9728),m&&a.invalidateFramebuffer(36008,ut)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),et)for(let rt=0;rt<T.length;rt++){e.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+rt,36161,A.__webglColorRenderbuffer[rt]);const ht=n.get(T[rt]).__webglTexture;e.bindFramebuffer(36160,A.__webglFramebuffer),a.framebufferTexture2D(36009,36064+rt,3553,ht,0)}e.bindFramebuffer(36009,A.__webglMultisampledFramebuffer)}}function ue(P){return Math.min(d,P.samples)}function Vt(P){const T=n.get(P);return o&&P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function $e(P){const T=r.render.frame;g.get(P)!==T&&(g.set(P,T),P.update())}function Be(P,T){const Z=P.encoding,it=P.format,st=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===$a||Z!==Yi&&(Z===Kt?o===!1?t.has("EXT_sRGB")===!0&&it===Ln?(P.format=$a,P.minFilter=en,P.generateMipmaps=!1):T=Ph.sRGBToLinear(T):(it!==Ln||st!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Z)),T}this.allocateTextureUnit=U,this.resetTextureUnits=V,this.setTexture2D=X,this.setTexture2DArray=tt,this.setTexture3D=W,this.setTextureCube=nt,this.rebindTextures=ne,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Vt}function av(a,t,e){const n=e.isWebGL2;function i(s,r=null){let o;if(s===ji)return 5121;if(s===ep)return 32819;if(s===np)return 32820;if(s===Jf)return 5120;if(s===Qf)return 5122;if(s===Th)return 5123;if(s===tp)return 5124;if(s===Bi)return 5125;if(s===ki)return 5126;if(s===Tr)return n?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===ip)return 6406;if(s===Ln)return 6408;if(s===rp)return 6409;if(s===op)return 6410;if(s===Gi)return 6402;if(s===Hs)return 34041;if(s===ap)return 6403;if(s===sp)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===$a)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===lp)return 36244;if(s===cp)return 33319;if(s===up)return 33320;if(s===hp)return 36249;if(s===jo||s===Yo||s===$o||s===Zo)if(r===Kt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===jo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===$o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===jo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Yo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===$o)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===cc||s===uc||s===hc||s===dc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===cc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===uc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===hc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===dc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dp)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===fc||s===pc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===fc)return r===Kt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===pc)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===mc||s===gc||s===_c||s===vc||s===xc||s===yc||s===bc||s===wc||s===Sc||s===Mc||s===Ec||s===Tc||s===Cc||s===Ac)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===mc)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gc)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_c)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===vc)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xc)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yc)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===bc)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===wc)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Sc)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Mc)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ec)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Tc)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Cc)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ac)return r===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Lc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Lc)return r===Kt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Ns?n?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:i}}class lv extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ro extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cv={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ro,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ro,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ro,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const f of t.hand.values()){const p=e.getJointPose(f,n);if(c.joints[f.jointName]===void 0){const v=new ro;v.matrixAutoUpdate=!1,v.visible=!1,c.joints[f.jointName]=v,c.add(v)}const _=c.joints[f.jointName];p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}}class uv extends xn{constructor(t,e,n,i,s,r,o,l,c,u){if(u=u!==void 0?u:Gi,u!==Gi&&u!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Gi&&(n=Bi),n===void 0&&u===Hs&&(n=Ns),super(null,i,s,r,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Re,this.minFilter=l!==void 0?l:Re,this.flipY=!1,this.generateMipmaps=!1}}class hv extends ts{constructor(t,e){super();const n=this;let i=null,s=1,r=null,o="local-floor",l=null,c=null,u=null,d=null,h=null,m=null;const g=e.getContextAttributes();let f=null,p=null;const _=[],v=[],w=new He;w.layers.enable(1),w.viewport=new pe;const b=new He;b.layers.enable(2),b.viewport=new pe;const x=[w,b],M=new lv;M.layers.enable(1),M.layers.enable(2);let C=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let X=_[B];return X===void 0&&(X=new Ea,_[B]=X),X.getTargetRaySpace()},this.getControllerGrip=function(B){let X=_[B];return X===void 0&&(X=new Ea,_[B]=X),X.getGripSpace()},this.getHand=function(B){let X=_[B];return X===void 0&&(X=new Ea,_[B]=X),X.getHandSpace()};function E(B){const X=v.indexOf(B.inputSource);if(X===-1)return;const tt=_[X];tt!==void 0&&tt.dispatchEvent({type:B.type,data:B.inputSource})}function I(){i.removeEventListener("select",E),i.removeEventListener("selectstart",E),i.removeEventListener("selectend",E),i.removeEventListener("squeeze",E),i.removeEventListener("squeezestart",E),i.removeEventListener("squeezeend",E),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",z);for(let B=0;B<_.length;B++){const X=v[B];X!==null&&(v[B]=null,_[B].disconnect(X))}C=null,y=null,t.setRenderTarget(f),h=null,d=null,u=null,i=null,p=null,U.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",E),i.addEventListener("selectstart",E),i.addEventListener("selectend",E),i.addEventListener("squeeze",E),i.addEventListener("squeezestart",E),i.addEventListener("squeezeend",E),i.addEventListener("end",I),i.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const X={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,e,X),i.updateRenderState({baseLayer:h}),p=new $i(h.framebufferWidth,h.framebufferHeight,{format:Ln,type:ji,encoding:t.outputEncoding})}else{let X=null,tt=null,W=null;g.depth&&(W=g.stencil?35056:33190,X=g.stencil?Hs:Gi,tt=g.stencil?Ns:Bi);const nt={colorFormat:32856,depthFormat:W,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(nt),i.updateRenderState({layers:[d]}),p=new $i(d.textureWidth,d.textureHeight,{format:Ln,type:ji,depthTexture:new uv(d.textureWidth,d.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const ot=t.properties.get(p);ot.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,r=await i.requestReferenceSpace(o),U.setContext(i),U.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(B){for(let X=0;X<B.removed.length;X++){const tt=B.removed[X],W=v.indexOf(tt);W>=0&&(v[W]=null,_[W].dispatchEvent({type:"disconnected",data:tt}))}for(let X=0;X<B.added.length;X++){const tt=B.added[X];let W=v.indexOf(tt);if(W===-1){for(let ot=0;ot<_.length;ot++)if(ot>=v.length){v.push(tt),W=ot;break}else if(v[ot]===null){v[ot]=tt,W=ot;break}if(W===-1)break}const nt=_[W];nt&&nt.dispatchEvent({type:"connected",data:tt})}}const j=new k,F=new k;function R(B,X,tt){j.setFromMatrixPosition(X.matrixWorld),F.setFromMatrixPosition(tt.matrixWorld);const W=j.distanceTo(F),nt=X.projectionMatrix.elements,ot=tt.projectionMatrix.elements,_t=nt[14]/(nt[10]-1),K=nt[14]/(nt[10]+1),It=(nt[9]+1)/nt[5],xt=(nt[9]-1)/nt[5],wt=(nt[8]-1)/nt[0],mt=(ot[8]+1)/ot[0],Ut=_t*wt,Tt=_t*mt,vt=W/(-wt+mt),ne=vt*-wt;X.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(ne),B.translateZ(vt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const xe=_t+vt,ce=K+vt,Oe=Ut-ne,ue=Tt+(W-ne),Vt=It*K/ce*xe,$e=xt*K/ce*xe;B.projectionMatrix.makePerspective(Oe,ue,Vt,$e,xe,ce)}function N(B,X){X===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(X.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;M.near=b.near=w.near=B.near,M.far=b.far=w.far=B.far,(C!==M.near||y!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,y=M.far);const X=B.parent,tt=M.cameras;N(M,X);for(let nt=0;nt<tt.length;nt++)N(tt[nt],X);M.matrixWorld.decompose(M.position,M.quaternion,M.scale),B.position.copy(M.position),B.quaternion.copy(M.quaternion),B.scale.copy(M.scale),B.matrix.copy(M.matrix),B.matrixWorld.copy(M.matrixWorld);const W=B.children;for(let nt=0,ot=W.length;nt<ot;nt++)W[nt].updateMatrixWorld(!0);tt.length===2?R(M,w,b):M.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return M},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(B){d!==null&&(d.fixedFoveation=B),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=B)};let D=null;function V(B,X){if(c=X.getViewerPose(l||r),m=X,c!==null){const tt=c.views;h!==null&&(t.setRenderTargetFramebuffer(p,h.framebuffer),t.setRenderTarget(p));let W=!1;tt.length!==M.cameras.length&&(M.cameras.length=0,W=!0);for(let nt=0;nt<tt.length;nt++){const ot=tt[nt];let _t=null;if(h!==null)_t=h.getViewport(ot);else{const It=u.getViewSubImage(d,ot);_t=It.viewport,nt===0&&(t.setRenderTargetTextures(p,It.colorTexture,d.ignoreDepthValues?void 0:It.depthStencilTexture),t.setRenderTarget(p))}let K=x[nt];K===void 0&&(K=new He,K.layers.enable(nt),K.viewport=new pe,x[nt]=K),K.matrix.fromArray(ot.transform.matrix),K.projectionMatrix.fromArray(ot.projectionMatrix),K.viewport.set(_t.x,_t.y,_t.width,_t.height),nt===0&&M.matrix.copy(K.matrix),W===!0&&M.cameras.push(K)}}for(let tt=0;tt<_.length;tt++){const W=v[tt],nt=_[tt];W!==null&&nt!==void 0&&nt.update(W,X,l||r)}D&&D(B,X),m=null}const U=new Bh;U.setAnimationLoop(V),this.setAnimationLoop=function(B){D=B},this.dispose=function(){}}}function dv(a,t){function e(f,p){f.fogColor.value.copy(p.color),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function n(f,p,_,v,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(f,p):p.isMeshToonMaterial?(i(f,p),u(f,p)):p.isMeshPhongMaterial?(i(f,p),c(f,p)):p.isMeshStandardMaterial?(i(f,p),d(f,p),p.isMeshPhysicalMaterial&&h(f,p,w)):p.isMeshMatcapMaterial?(i(f,p),m(f,p)):p.isMeshDepthMaterial?i(f,p):p.isMeshDistanceMaterial?(i(f,p),g(f,p)):p.isMeshNormalMaterial?i(f,p):p.isLineBasicMaterial?(s(f,p),p.isLineDashedMaterial&&r(f,p)):p.isPointsMaterial?o(f,p,_,v):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.bumpMap&&(f.bumpMap.value=p.bumpMap,f.bumpScale.value=p.bumpScale,p.side===gn&&(f.bumpScale.value*=-1)),p.displacementMap&&(f.displacementMap.value=p.displacementMap,f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap),p.normalMap&&(f.normalMap.value=p.normalMap,f.normalScale.value.copy(p.normalScale),p.side===gn&&f.normalScale.value.negate()),p.specularMap&&(f.specularMap.value=p.specularMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const _=t.get(p).envMap;if(_&&(f.envMap.value=_,f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const b=a.physicallyCorrectLights!==!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*b}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),f.uvTransform.value.copy(v.matrix));let w;p.aoMap?w=p.aoMap:p.lightMap&&(w=p.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),f.uv2Transform.value.copy(w.matrix))}function s(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity}function r(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function o(f,p,_,v){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*_,f.scale.value=v*.5,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let w;p.map?w=p.map:p.alphaMap&&(w=p.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),f.uvTransform.value.copy(w.matrix))}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map),p.alphaMap&&(f.alphaMap.value=p.alphaMap),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uvTransform.value.copy(_.matrix))}function c(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.roughness.value=p.roughness,f.metalness.value=p.metalness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function h(f,p,_){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),f.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===gn&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=_.texture,f.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap)}function m(f,p){p.matcap&&(f.matcap.value=p.matcap)}function g(f,p){f.referencePosition.value.copy(p.referencePosition),f.nearDistance.value=p.nearDistance,f.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function fv(a,t,e,n){let i={},s={},r=[];const o=e.isWebGL2?a.getParameter(35375):0;function l(v,w){const b=w.program;n.uniformBlockBinding(v,b)}function c(v,w){let b=i[v.id];b===void 0&&(g(v),b=u(v),i[v.id]=b,v.addEventListener("dispose",p));const x=w.program;n.updateUBOMapping(v,x);const M=t.render.frame;s[v.id]!==M&&(h(v),s[v.id]=M)}function u(v){const w=d();v.__bindingPointIndex=w;const b=a.createBuffer(),x=v.__size,M=v.usage;return a.bindBuffer(35345,b),a.bufferData(35345,x,M),a.bindBuffer(35345,null),a.bindBufferBase(35345,w,b),b}function d(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const w=i[v.id],b=v.uniforms,x=v.__cache;a.bindBuffer(35345,w);for(let M=0,C=b.length;M<C;M++){const y=b[M];if(m(y,M,x)===!0){const E=y.value,I=y.__offset;typeof E=="number"?(y.__data[0]=E,a.bufferSubData(35345,I,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):E.toArray(y.__data),a.bufferSubData(35345,I,y.__data))}}a.bindBuffer(35345,null)}function m(v,w,b){const x=v.value;if(b[w]===void 0)return typeof x=="number"?b[w]=x:b[w]=x.clone(),!0;if(typeof x=="number"){if(b[w]!==x)return b[w]=x,!0}else{const M=b[w];if(M.equals(x)===!1)return M.copy(x),!0}return!1}function g(v){const w=v.uniforms;let b=0;const x=16;let M=0;for(let C=0,y=w.length;C<y;C++){const E=w[C],I=f(E);if(E.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=b,C>0){M=b%x;const z=x-M;M!==0&&z-I.boundary<0&&(b+=x-M,E.__offset=b)}b+=I.storage}return M=b%x,M>0&&(b+=x-M),v.__size=b,v.__cache={},this}function f(v){const w=v.value,b={boundary:0,storage:0};return typeof w=="number"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function p(v){const w=v.target;w.removeEventListener("dispose",p);const b=r.indexOf(w.__bindingPointIndex);r.splice(b,1),a.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function _(){for(const v in i)a.deleteBuffer(i[v]);r=[],i={},s={}}return{bind:l,update:c,dispose:_}}function pv(){const a=bo("canvas");return a.style.display="block",a}function Wh(a={}){this.isWebGLRenderer=!0;const t=a.canvas!==void 0?a.canvas:pv(),e=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,r=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,o=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",c=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=a.alpha!==void 0?a.alpha:!1;let d=null,h=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Yi,this.physicallyCorrectLights=!1,this.toneMapping=Kn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const f=this;let p=!1,_=0,v=0,w=null,b=-1,x=null;const M=new pe,C=new pe;let y=null,E=t.width,I=t.height,z=1,j=null,F=null;const R=new pe(0,0,E,I),N=new pe(0,0,E,I);let D=!1;const V=new El;let U=!1,B=!1,X=null;const tt=new le,W=new Et,nt=new k,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _t(){return w===null?z:1}let K=e;function It(L,G){for(let Y=0;Y<L.length;Y++){const q=L[Y],Q=t.getContext(q,G);if(Q!==null)return Q}return null}try{const L={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wl}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",Pt,!1),t.addEventListener("webglcontextcreationerror",jt,!1),K===null){const G=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&G.shift(),K=It(G,L),K===null)throw It(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let xt,wt,mt,Ut,Tt,vt,ne,xe,ce,Oe,ue,Vt,$e,Be,P,T,Z,it,st,ut,yt,A,et,rt;function ht(){xt=new M_(K),wt=new __(K,xt,a),xt.init(wt),A=new av(K,xt,wt),mt=new rv(K,xt,wt),Ut=new C_,Tt=new q0,vt=new ov(K,xt,mt,Tt,wt,A,Ut),ne=new x_(f),xe=new S_(f),ce=new Bp(K,wt),et=new m_(K,xt,ce,wt),Oe=new E_(K,ce,Ut,et),ue=new R_(K,Oe,ce,Ut),st=new P_(K,wt,vt),T=new v_(Tt),Vt=new W0(f,ne,xe,xt,wt,et,T),$e=new dv(f,Tt),Be=new j0,P=new Q0(xt,wt),it=new p_(f,ne,mt,ue,u,r),Z=new sv(f,ue,wt),rt=new fv(K,Ut,wt,mt),ut=new g_(K,xt,Ut,wt),yt=new T_(K,xt,Ut,wt),Ut.programs=Vt.programs,f.capabilities=wt,f.extensions=xt,f.properties=Tt,f.renderLists=Be,f.shadowMap=Z,f.state=mt,f.info=Ut}ht();const ct=new hv(f,K);this.xr=ct,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const L=xt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=xt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(L){L!==void 0&&(z=L,this.setSize(E,I,!1))},this.getSize=function(L){return L.set(E,I)},this.setSize=function(L,G,Y){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=L,I=G,t.width=Math.floor(L*z),t.height=Math.floor(G*z),Y!==!1&&(t.style.width=L+"px",t.style.height=G+"px"),this.setViewport(0,0,L,G)},this.getDrawingBufferSize=function(L){return L.set(E*z,I*z).floor()},this.setDrawingBufferSize=function(L,G,Y){E=L,I=G,z=Y,t.width=Math.floor(L*Y),t.height=Math.floor(G*Y),this.setViewport(0,0,L,G)},this.getCurrentViewport=function(L){return L.copy(M)},this.getViewport=function(L){return L.copy(R)},this.setViewport=function(L,G,Y,q){L.isVector4?R.set(L.x,L.y,L.z,L.w):R.set(L,G,Y,q),mt.viewport(M.copy(R).multiplyScalar(z).floor())},this.getScissor=function(L){return L.copy(N)},this.setScissor=function(L,G,Y,q){L.isVector4?N.set(L.x,L.y,L.z,L.w):N.set(L,G,Y,q),mt.scissor(C.copy(N).multiplyScalar(z).floor())},this.getScissorTest=function(){return D},this.setScissorTest=function(L){mt.setScissorTest(D=L)},this.setOpaqueSort=function(L){j=L},this.setTransparentSort=function(L){F=L},this.getClearColor=function(L){return L.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(L=!0,G=!0,Y=!0){let q=0;L&&(q|=16384),G&&(q|=256),Y&&(q|=1024),K.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",Pt,!1),t.removeEventListener("webglcontextcreationerror",jt,!1),Be.dispose(),P.dispose(),Tt.dispose(),ne.dispose(),xe.dispose(),ue.dispose(),et.dispose(),rt.dispose(),Vt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",zt),ct.removeEventListener("sessionend",me),X&&(X.dispose(),X=null),te.stop()};function bt(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const L=Ut.autoReset,G=Z.enabled,Y=Z.autoUpdate,q=Z.needsUpdate,Q=Z.type;ht(),Ut.autoReset=L,Z.enabled=G,Z.autoUpdate=Y,Z.needsUpdate=q,Z.type=Q}function jt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function O(L){const G=L.target;G.removeEventListener("dispose",O),at(G)}function at(L){$(L),Tt.remove(L)}function $(L){const G=Tt.get(L).programs;G!==void 0&&(G.forEach(function(Y){Vt.releaseProgram(Y)}),L.isShaderMaterial&&Vt.releaseShaderCache(L))}this.renderBufferDirect=function(L,G,Y,q,Q,St){G===null&&(G=ot);const Mt=Q.isMesh&&Q.matrixWorld.determinant()<0,At=_f(L,G,Y,q,Q);mt.setMaterial(q,Mt);let Ct=Y.index;const Gt=Y.attributes.position;if(Ct===null){if(Gt===void 0||Gt.count===0)return}else if(Ct.count===0)return;let Ft=1;q.wireframe===!0&&(Ct=Oe.getWireframeAttribute(Y),Ft=2),et.setup(Q,q,At,Y,Ct);let Nt,Zt=ut;Ct!==null&&(Nt=ce.get(Ct),Zt=yt,Zt.setIndex(Nt));const Ti=Ct!==null?Ct.count:Gt.count,rs=Y.drawRange.start*Ft,os=Y.drawRange.count*Ft,wn=St!==null?St.start*Ft:0,kt=St!==null?St.count*Ft:1/0,as=Math.max(rs,wn),ie=Math.min(Ti,rs+os,wn+kt)-1,Ke=Math.max(0,ie-as+1);if(Ke!==0){if(Q.isMesh)q.wireframe===!0?(mt.setLineWidth(q.wireframeLinewidth*_t()),Zt.setMode(1)):Zt.setMode(4);else if(Q.isLine){let ri=q.linewidth;ri===void 0&&(ri=1),mt.setLineWidth(ri*_t()),Q.isLineSegments?Zt.setMode(1):Q.isLineLoop?Zt.setMode(2):Zt.setMode(3)}else Q.isPoints?Zt.setMode(0):Q.isSprite&&Zt.setMode(4);if(Q.isInstancedMesh)Zt.renderInstances(as,Ke,Q.count);else if(Y.isInstancedBufferGeometry){const ri=Math.min(Y.instanceCount,Y._maxInstanceCount);Zt.renderInstances(as,Ke,ri)}else Zt.render(as,Ke)}},this.compile=function(L,G){h=P.get(L),h.init(),g.push(h),L.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(h.pushLight(Y),Y.castShadow&&h.pushShadow(Y))}),h.setupLights(f.physicallyCorrectLights),L.traverse(function(Y){const q=Y.material;if(q)if(Array.isArray(q))for(let Q=0;Q<q.length;Q++){const St=q[Q];Ho(St,L,Y)}else Ho(q,L,Y)}),g.pop(),h=null};let ft=null;function dt(L){ft&&ft(L)}function zt(){te.stop()}function me(){te.start()}const te=new Bh;te.setAnimationLoop(dt),typeof self<"u"&&te.setContext(self),this.setAnimationLoop=function(L){ft=L,ct.setAnimationLoop(L),L===null?te.stop():te.start()},ct.addEventListener("sessionstart",zt),ct.addEventListener("sessionend",me),this.render=function(L,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;L.autoUpdate===!0&&L.updateMatrixWorld(),G.parent===null&&G.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(G),G=ct.getCamera()),L.isScene===!0&&L.onBeforeRender(f,L,G,w),h=P.get(L,g.length),h.init(),g.push(h),tt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),V.setFromProjectionMatrix(tt),B=this.localClippingEnabled,U=T.init(this.clippingPlanes,B,G),d=Be.get(L,m.length),d.init(),m.push(d),si(L,G,0,f.sortObjects),d.finish(),f.sortObjects===!0&&d.sort(j,F),U===!0&&T.beginShadows();const Y=h.state.shadowsArray;if(Z.render(Y,L,G),U===!0&&T.endShadows(),this.info.autoReset===!0&&this.info.reset(),it.render(d,L),h.setupLights(f.physicallyCorrectLights),G.isArrayCamera){const q=G.cameras;for(let Q=0,St=q.length;Q<St;Q++){const Mt=q[Q];$t(d,L,Mt,Mt.viewport)}}else $t(d,L,G);w!==null&&(vt.updateMultisampleRenderTarget(w),vt.updateRenderTargetMipmap(w)),L.isScene===!0&&L.onAfterRender(f,L,G),et.resetDefaultState(),b=-1,x=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function si(L,G,Y,q){if(L.visible===!1)return;if(L.layers.test(G.layers)){if(L.isGroup)Y=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(G);else if(L.isLight)h.pushLight(L),L.castShadow&&h.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||V.intersectsSprite(L)){q&&nt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(tt);const Mt=ue.update(L),At=L.material;At.visible&&d.push(L,Mt,At,Y,nt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(L.isSkinnedMesh&&L.skeleton.frame!==Ut.render.frame&&(L.skeleton.update(),L.skeleton.frame=Ut.render.frame),!L.frustumCulled||V.intersectsObject(L))){q&&nt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(tt);const Mt=ue.update(L),At=L.material;if(Array.isArray(At)){const Ct=Mt.groups;for(let Gt=0,Ft=Ct.length;Gt<Ft;Gt++){const Nt=Ct[Gt],Zt=At[Nt.materialIndex];Zt&&Zt.visible&&d.push(L,Mt,Zt,Y,nt.z,Nt)}}else At.visible&&d.push(L,Mt,At,Y,nt.z,null)}}const St=L.children;for(let Mt=0,At=St.length;Mt<At;Mt++)si(St[Mt],G,Y,q)}function $t(L,G,Y,q){const Q=L.opaque,St=L.transmissive,Mt=L.transparent;h.setupLightsView(Y),St.length>0&&zn(Q,G,Y),q&&mt.viewport(M.copy(q)),Q.length>0&&Ze(Q,G,Y),St.length>0&&Ze(St,G,Y),Mt.length>0&&Ze(Mt,G,Y),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function zn(L,G,Y){const q=wt.isWebGL2;X===null&&(X=new $i(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")?Tr:ji,minFilter:No,samples:q&&s===!0?4:0})),f.getDrawingBufferSize(W),q?X.setSize(W.x,W.y):X.setSize(Ka(W.x),Ka(W.y));const Q=f.getRenderTarget();f.setRenderTarget(X),f.clear();const St=f.toneMapping;f.toneMapping=Kn,Ze(L,G,Y),f.toneMapping=St,vt.updateMultisampleRenderTarget(X),vt.updateRenderTargetMipmap(X),f.setRenderTarget(Q)}function Ze(L,G,Y){const q=G.isScene===!0?G.overrideMaterial:null;for(let Q=0,St=L.length;Q<St;Q++){const Mt=L[Q],At=Mt.object,Ct=Mt.geometry,Gt=q===null?Mt.material:q,Ft=Mt.group;At.layers.test(Y.layers)&&gf(At,G,Y,Ct,Gt,Ft)}}function gf(L,G,Y,q,Q,St){L.onBeforeRender(f,G,Y,q,Q,St),L.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),Q.onBeforeRender(f,G,Y,q,L,St),Q.transparent===!0&&Q.side===Us?(Q.side=gn,Q.needsUpdate=!0,f.renderBufferDirect(Y,G,q,Q,L,St),Q.side=Er,Q.needsUpdate=!0,f.renderBufferDirect(Y,G,q,Q,L,St),Q.side=Us):f.renderBufferDirect(Y,G,q,Q,L,St),L.onAfterRender(f,G,Y,q,Q,St)}function Ho(L,G,Y){G.isScene!==!0&&(G=ot);const q=Tt.get(L),Q=h.state.lights,St=h.state.shadowsArray,Mt=Q.state.version,At=Vt.getParameters(L,Q.state,St,G,Y),Ct=Vt.getProgramCacheKey(At);let Gt=q.programs;q.environment=L.isMeshStandardMaterial?G.environment:null,q.fog=G.fog,q.envMap=(L.isMeshStandardMaterial?xe:ne).get(L.envMap||q.environment),Gt===void 0&&(L.addEventListener("dispose",O),Gt=new Map,q.programs=Gt);let Ft=Gt.get(Ct);if(Ft!==void 0){if(q.currentProgram===Ft&&q.lightsStateVersion===Mt)return Ql(L,At),Ft}else At.uniforms=Vt.getUniforms(L),L.onBuild(Y,At,f),L.onBeforeCompile(At,f),Ft=Vt.acquireProgram(At,Ct),Gt.set(Ct,Ft),q.uniforms=At.uniforms;const Nt=q.uniforms;(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Nt.clippingPlanes=T.uniform),Ql(L,At),q.needsLights=xf(L),q.lightsStateVersion=Mt,q.needsLights&&(Nt.ambientLightColor.value=Q.state.ambient,Nt.lightProbe.value=Q.state.probe,Nt.directionalLights.value=Q.state.directional,Nt.directionalLightShadows.value=Q.state.directionalShadow,Nt.spotLights.value=Q.state.spot,Nt.spotLightShadows.value=Q.state.spotShadow,Nt.rectAreaLights.value=Q.state.rectArea,Nt.ltc_1.value=Q.state.rectAreaLTC1,Nt.ltc_2.value=Q.state.rectAreaLTC2,Nt.pointLights.value=Q.state.point,Nt.pointLightShadows.value=Q.state.pointShadow,Nt.hemisphereLights.value=Q.state.hemi,Nt.directionalShadowMap.value=Q.state.directionalShadowMap,Nt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Nt.spotShadowMap.value=Q.state.spotShadowMap,Nt.spotShadowMatrix.value=Q.state.spotShadowMatrix,Nt.pointShadowMap.value=Q.state.pointShadowMap,Nt.pointShadowMatrix.value=Q.state.pointShadowMatrix);const Zt=Ft.getUniforms(),Ti=_o.seqWithValue(Zt.seq,Nt);return q.currentProgram=Ft,q.uniformsList=Ti,Ft}function Ql(L,G){const Y=Tt.get(L);Y.outputEncoding=G.outputEncoding,Y.instancing=G.instancing,Y.skinning=G.skinning,Y.morphTargets=G.morphTargets,Y.morphNormals=G.morphNormals,Y.morphColors=G.morphColors,Y.morphTargetsCount=G.morphTargetsCount,Y.numClippingPlanes=G.numClippingPlanes,Y.numIntersection=G.numClipIntersection,Y.vertexAlphas=G.vertexAlphas,Y.vertexTangents=G.vertexTangents,Y.toneMapping=G.toneMapping}function _f(L,G,Y,q,Q){G.isScene!==!0&&(G=ot),vt.resetTextureUnits();const St=G.fog,Mt=q.isMeshStandardMaterial?G.environment:null,At=w===null?f.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:Yi,Ct=(q.isMeshStandardMaterial?xe:ne).get(q.envMap||Mt),Gt=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ft=!!q.normalMap&&!!Y.attributes.tangent,Nt=!!Y.morphAttributes.position,Zt=!!Y.morphAttributes.normal,Ti=!!Y.morphAttributes.color,rs=q.toneMapped?f.toneMapping:Kn,os=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,wn=os!==void 0?os.length:0,kt=Tt.get(q),as=h.state.lights;if(U===!0&&(B===!0||L!==x)){const ke=L===x&&q.id===b;T.setState(q,L,ke)}let ie=!1;q.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==as.state.version||kt.outputEncoding!==At||Q.isInstancedMesh&&kt.instancing===!1||!Q.isInstancedMesh&&kt.instancing===!0||Q.isSkinnedMesh&&kt.skinning===!1||!Q.isSkinnedMesh&&kt.skinning===!0||kt.envMap!==Ct||q.fog===!0&&kt.fog!==St||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==T.numPlanes||kt.numIntersection!==T.numIntersection)||kt.vertexAlphas!==Gt||kt.vertexTangents!==Ft||kt.morphTargets!==Nt||kt.morphNormals!==Zt||kt.morphColors!==Ti||kt.toneMapping!==rs||wt.isWebGL2===!0&&kt.morphTargetsCount!==wn)&&(ie=!0):(ie=!0,kt.__version=q.version);let Ke=kt.currentProgram;ie===!0&&(Ke=Ho(q,G,Q));let ri=!1,er=!1,Wo=!1;const Ee=Ke.getUniforms(),nr=kt.uniforms;if(mt.useProgram(Ke.program)&&(ri=!0,er=!0,Wo=!0),q.id!==b&&(b=q.id,er=!0),ri||x!==L){if(Ee.setValue(K,"projectionMatrix",L.projectionMatrix),wt.logarithmicDepthBuffer&&Ee.setValue(K,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),x!==L&&(x=L,er=!0,Wo=!0),q.isShaderMaterial||q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshStandardMaterial||q.envMap){const ke=Ee.map.cameraPosition;ke!==void 0&&ke.setValue(K,nt.setFromMatrixPosition(L.matrixWorld))}(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ee.setValue(K,"isOrthographic",L.isOrthographicCamera===!0),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial||q.isShadowMaterial||Q.isSkinnedMesh)&&Ee.setValue(K,"viewMatrix",L.matrixWorldInverse)}if(Q.isSkinnedMesh){Ee.setOptional(K,Q,"bindMatrix"),Ee.setOptional(K,Q,"bindMatrixInverse");const ke=Q.skeleton;ke&&(wt.floatVertexTextures?(ke.boneTexture===null&&ke.computeBoneTexture(),Ee.setValue(K,"boneTexture",ke.boneTexture,vt),Ee.setValue(K,"boneTextureSize",ke.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const qo=Y.morphAttributes;if((qo.position!==void 0||qo.normal!==void 0||qo.color!==void 0&&wt.isWebGL2===!0)&&st.update(Q,Y,q,Ke),(er||kt.receiveShadow!==Q.receiveShadow)&&(kt.receiveShadow=Q.receiveShadow,Ee.setValue(K,"receiveShadow",Q.receiveShadow)),er&&(Ee.setValue(K,"toneMappingExposure",f.toneMappingExposure),kt.needsLights&&vf(nr,Wo),St&&q.fog===!0&&$e.refreshFogUniforms(nr,St),$e.refreshMaterialUniforms(nr,q,z,I,X),_o.upload(K,kt.uniformsList,nr,vt)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(_o.upload(K,kt.uniformsList,nr,vt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ee.setValue(K,"center",Q.center),Ee.setValue(K,"modelViewMatrix",Q.modelViewMatrix),Ee.setValue(K,"normalMatrix",Q.normalMatrix),Ee.setValue(K,"modelMatrix",Q.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const ke=q.uniformsGroups;for(let Xo=0,yf=ke.length;Xo<yf;Xo++)if(wt.isWebGL2){const tc=ke[Xo];rt.update(tc,Ke),rt.bind(tc,Ke)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ke}function vf(L,G){L.ambientLightColor.needsUpdate=G,L.lightProbe.needsUpdate=G,L.directionalLights.needsUpdate=G,L.directionalLightShadows.needsUpdate=G,L.pointLights.needsUpdate=G,L.pointLightShadows.needsUpdate=G,L.spotLights.needsUpdate=G,L.spotLightShadows.needsUpdate=G,L.rectAreaLights.needsUpdate=G,L.hemisphereLights.needsUpdate=G}function xf(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(L,G,Y){Tt.get(L.texture).__webglTexture=G,Tt.get(L.depthTexture).__webglTexture=Y;const q=Tt.get(L);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=Y===void 0,q.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,G){const Y=Tt.get(L);Y.__webglFramebuffer=G,Y.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(L,G=0,Y=0){w=L,_=G,v=Y;let q=!0;if(L){const Ct=Tt.get(L);Ct.__useDefaultFramebuffer!==void 0?(mt.bindFramebuffer(36160,null),q=!1):Ct.__webglFramebuffer===void 0?vt.setupRenderTarget(L):Ct.__hasExternalTextures&&vt.rebindTextures(L,Tt.get(L.texture).__webglTexture,Tt.get(L.depthTexture).__webglTexture)}let Q=null,St=!1,Mt=!1;if(L){const Ct=L.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture)&&(Mt=!0);const Gt=Tt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Q=Gt[G],St=!0):wt.isWebGL2&&L.samples>0&&vt.useMultisampledRTT(L)===!1?Q=Tt.get(L).__webglMultisampledFramebuffer:Q=Gt,M.copy(L.viewport),C.copy(L.scissor),y=L.scissorTest}else M.copy(R).multiplyScalar(z).floor(),C.copy(N).multiplyScalar(z).floor(),y=D;if(mt.bindFramebuffer(36160,Q)&&wt.drawBuffers&&q&&mt.drawBuffers(L,Q),mt.viewport(M),mt.scissor(C),mt.setScissorTest(y),St){const Ct=Tt.get(L.texture);K.framebufferTexture2D(36160,36064,34069+G,Ct.__webglTexture,Y)}else if(Mt){const Ct=Tt.get(L.texture),Gt=G||0;K.framebufferTextureLayer(36160,36064,Ct.__webglTexture,Y||0,Gt)}b=-1},this.readRenderTargetPixels=function(L,G,Y,q,Q,St,Mt){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Tt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Mt!==void 0&&(At=At[Mt]),At){mt.bindFramebuffer(36160,At);try{const Ct=L.texture,Gt=Ct.format,Ft=Ct.type;if(Gt!==Ln&&A.convert(Gt)!==K.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Nt=Ft===Tr&&(xt.has("EXT_color_buffer_half_float")||wt.isWebGL2&&xt.has("EXT_color_buffer_float"));if(Ft!==ji&&A.convert(Ft)!==K.getParameter(35738)&&!(Ft===ki&&(wt.isWebGL2||xt.has("OES_texture_float")||xt.has("WEBGL_color_buffer_float")))&&!Nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=L.width-q&&Y>=0&&Y<=L.height-Q&&K.readPixels(G,Y,q,Q,A.convert(Gt),A.convert(Ft),St)}finally{const Ct=w!==null?Tt.get(w).__webglFramebuffer:null;mt.bindFramebuffer(36160,Ct)}}},this.copyFramebufferToTexture=function(L,G,Y=0){const q=Math.pow(2,-Y),Q=Math.floor(G.image.width*q),St=Math.floor(G.image.height*q);vt.setTexture2D(G,0),K.copyTexSubImage2D(3553,Y,0,0,L.x,L.y,Q,St),mt.unbindTexture()},this.copyTextureToTexture=function(L,G,Y,q=0){const Q=G.image.width,St=G.image.height,Mt=A.convert(Y.format),At=A.convert(Y.type);vt.setTexture2D(Y,0),K.pixelStorei(37440,Y.flipY),K.pixelStorei(37441,Y.premultiplyAlpha),K.pixelStorei(3317,Y.unpackAlignment),G.isDataTexture?K.texSubImage2D(3553,q,L.x,L.y,Q,St,Mt,At,G.image.data):G.isCompressedTexture?K.compressedTexSubImage2D(3553,q,L.x,L.y,G.mipmaps[0].width,G.mipmaps[0].height,Mt,G.mipmaps[0].data):K.texSubImage2D(3553,q,L.x,L.y,Mt,At,G.image),q===0&&Y.generateMipmaps&&K.generateMipmap(3553),mt.unbindTexture()},this.copyTextureToTexture3D=function(L,G,Y,q,Q=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const St=L.max.x-L.min.x+1,Mt=L.max.y-L.min.y+1,At=L.max.z-L.min.z+1,Ct=A.convert(q.format),Gt=A.convert(q.type);let Ft;if(q.isData3DTexture)vt.setTexture3D(q,0),Ft=32879;else if(q.isDataArrayTexture)vt.setTexture2DArray(q,0),Ft=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(37440,q.flipY),K.pixelStorei(37441,q.premultiplyAlpha),K.pixelStorei(3317,q.unpackAlignment);const Nt=K.getParameter(3314),Zt=K.getParameter(32878),Ti=K.getParameter(3316),rs=K.getParameter(3315),os=K.getParameter(32877),wn=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;K.pixelStorei(3314,wn.width),K.pixelStorei(32878,wn.height),K.pixelStorei(3316,L.min.x),K.pixelStorei(3315,L.min.y),K.pixelStorei(32877,L.min.z),Y.isDataTexture||Y.isData3DTexture?K.texSubImage3D(Ft,Q,G.x,G.y,G.z,St,Mt,At,Ct,Gt,wn.data):Y.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),K.compressedTexSubImage3D(Ft,Q,G.x,G.y,G.z,St,Mt,At,Ct,wn.data)):K.texSubImage3D(Ft,Q,G.x,G.y,G.z,St,Mt,At,Ct,Gt,wn),K.pixelStorei(3314,Nt),K.pixelStorei(32878,Zt),K.pixelStorei(3316,Ti),K.pixelStorei(3315,rs),K.pixelStorei(32877,os),Q===0&&q.generateMipmaps&&K.generateMipmap(Ft),mt.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?vt.setTextureCube(L,0):L.isData3DTexture?vt.setTexture3D(L,0):L.isDataArrayTexture?vt.setTexture2DArray(L,0):vt.setTexture2D(L,0),mt.unbindTexture()},this.resetState=function(){_=0,v=0,w=null,mt.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class mv extends Wh{}mv.prototype.isWebGL1Renderer=!0;class gv extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}}class qh extends Js{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const du=new k,fu=new k,pu=new le,Ta=new Sl,oo=new Oo;class _v extends Ce{constructor(t=new ni,e=new qh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)du.fromBufferAttribute(e,i-1),fu.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=du.distanceTo(fu);t.setAttribute("lineDistance",new _n(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(i),oo.radius+=s,t.ray.intersectsSphere(oo)===!1)return;pu.copy(i).invert(),Ta.copy(t.ray).applyMatrix4(pu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new k,u=new k,d=new k,h=new k,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const _=Math.max(0,r.start),v=Math.min(g.count,r.start+r.count);for(let w=_,b=v-1;w<b;w+=m){const x=g.getX(w),M=g.getX(w+1);if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,M),Ta.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const y=t.ray.origin.distanceTo(h);y<t.near||y>t.far||e.push({distance:y,point:d.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,r.start),v=Math.min(p.count,r.start+r.count);for(let w=_,b=v-1;w<b;w+=m){if(c.fromBufferAttribute(p,w),u.fromBufferAttribute(p,w+1),Ta.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const M=t.ray.origin.distanceTo(h);M<t.near||M>t.far||e.push({distance:M,point:d.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const mu=new k,gu=new k;class vv extends _v{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)mu.fromBufferAttribute(e,i),gu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+mu.distanceTo(gu);t.setAttribute("lineDistance",new _n(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Al extends Js{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ch,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class xv extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const _u=new le,vu=new k,xu=new k;class yv{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new El,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;vu.setFromMatrixPosition(t.matrixWorld),e.position.copy(vu),xu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xu),e.updateMatrixWorld(),_u.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_u),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class bv extends yv{constructor(){super(new He(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Za*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class wv extends xv{constructor(t,e,n=0,i=Math.PI/3,s=0,r=1){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ce.DefaultUp),this.updateMatrix(),this.target=new Ce,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.shadow=new bv}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Sv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=yu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function yu(){return(typeof performance>"u"?Date:performance).now()}class Mv{constructor(t,e,n=0,i=1/0){this.ray=new Sl(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ml,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Qa(t,this,n,e),n.sort(bu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Qa(t[i],this,n,e);return n.sort(bu),n}}function bu(a,t){return a.distance-t.distance}function Qa(a,t,e,n){if(a.layers.test(t.layers)&&a.raycast(t,e),n===!0){const i=a.children;for(let s=0,r=i.length;s<r;s++)Qa(i[s],t,e,!0)}}class wu{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(De(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ev extends vv{constructor(t=10,e=10,n=4473924,i=8947848){n=new Bt(n),i=new Bt(i);const s=e/2,r=t/e,o=t/2,l=[],c=[];for(let h=0,m=0,g=-o;h<=e;h++,g+=r){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const f=h===s?n:i;f.toArray(c,m),m+=3,f.toArray(c,m),m+=3,f.toArray(c,m),m+=3,f.toArray(c,m),m+=3}const u=new ni;u.setAttribute("position",new _n(l,3)),u.setAttribute("color",new _n(c,3));const d=new qh({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wl);class mn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new S);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new S);const n=this.elements,i=t.x,s=t.y,r=t.z;return e.x=n[0]*i+n[1]*s+n[2]*r,e.y=n[3]*i+n[4]*s+n[5]*r,e.z=n[6]*i+n[7]*s+n[8]*r,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new mn);const n=this.elements,i=t.elements,s=e.elements,r=n[0],o=n[1],l=n[2],c=n[3],u=n[4],d=n[5],h=n[6],m=n[7],g=n[8],f=i[0],p=i[1],_=i[2],v=i[3],w=i[4],b=i[5],x=i[6],M=i[7],C=i[8];return s[0]=r*f+o*v+l*x,s[1]=r*p+o*w+l*M,s[2]=r*_+o*b+l*C,s[3]=c*f+u*v+d*x,s[4]=c*p+u*w+d*M,s[5]=c*_+u*b+d*C,s[6]=h*f+m*v+g*x,s[7]=h*p+m*w+g*M,s[8]=h*_+m*b+g*C,e}scale(t,e){e===void 0&&(e=new mn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new S);const n=3,i=4,s=[];let r,o;for(r=0;r<n*i;r++)s.push(0);for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+i*o]=this.elements[r+3*o];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let l=3;const c=l;let u;const d=4;let h;do{if(r=c-l,s[r+i*r]===0){for(o=r+1;o<c;o++)if(s[r+i*o]!==0){u=d;do h=d-u,s[h+i*r]+=s[h+i*o];while(--u);break}}if(s[r+i*r]!==0)for(o=r+1;o<c;o++){const m=s[r+i*o]/s[r+i*r];u=d;do h=d-u,s[h+i*o]=h<=r?0:s[h+i*o]-s[h+i*r]*m;while(--u)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new mn);const e=3,n=6,i=Tv;let s,r;for(s=0;s<3;s++)for(r=0;r<3;r++)i[s+n*r]=this.elements[s+3*r];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let o=3;const l=o;let c;const u=n;let d;do{if(s=l-o,i[s+n*s]===0){for(r=s+1;r<l;r++)if(i[s+n*r]!==0){c=u;do d=u-c,i[d+n*s]+=i[d+n*r];while(--c);break}}if(i[s+n*s]!==0)for(r=s+1;r<l;r++){const h=i[s+n*r]/i[s+n*s];c=u;do d=u-c,i[d+n*r]=d<=s?0:i[d+n*r]-i[d+n*s]*h;while(--c)}}while(--o);s=2;do{r=s-1;do{const h=i[s+n*r]/i[s+n*s];c=n;do d=n-c,i[d+n*r]=i[d+n*r]-i[d+n*s]*h;while(--c)}while(r--)}while(--s);s=2;do{const h=1/i[s+n*s];c=n;do d=n-c,i[d+n*s]=i[d+n*s]*h;while(--c)}while(s--);s=2;do{r=2;do{if(d=i[e+r+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,r,d)}while(r--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,r=e+e,o=n+n,l=i+i,c=e*r,u=e*o,d=e*l,h=n*o,m=n*l,g=i*l,f=s*r,p=s*o,_=s*l,v=this.elements;return v[3*0+0]=1-(h+g),v[3*0+1]=u-_,v[3*0+2]=d+p,v[3*1+0]=u+_,v[3*1+1]=1-(c+g),v[3*1+2]=m-f,v[3*2+0]=d-p,v[3*2+1]=m+f,v[3*2+2]=1-(c+h),this}transpose(t){t===void 0&&(t=new mn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const Tv=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class S{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new S);const n=t.x,i=t.y,s=t.z,r=this.x,o=this.y,l=this.z;return e.x=o*s-l*i,e.y=l*n-r*s,e.z=r*i-o*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new S(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new S(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new mn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new S);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z;return Math.sqrt((s-e)*(s-e)+(r-n)*(r-n)+(o-i)*(o-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z;return(s-e)*(s-e)+(r-n)*(r-n)+(o-i)*(o-i)}scale(t,e){e===void 0&&(e=new S);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new S),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new S),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new S),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=Cv,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const r=Av;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,t)):(r.set(0,1,0),i.cross(r,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,r=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=r+(t.z-r)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Su),Su.almostEquals(t,e)}clone(){return new S(this.x,this.y,this.z)}}S.ZERO=new S(0,0,0);S.UNIT_X=new S(1,0,0);S.UNIT_Y=new S(0,1,0);S.UNIT_Z=new S(0,0,1);const Cv=new S,Av=new S,Su=new S;class Ye{constructor(t){t===void 0&&(t={}),this.lowerBound=new S,this.upperBound=new S,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,r=this.upperBound,o=n;s.copy(t[0]),o&&o.vmult(s,s),r.copy(s);for(let l=1;l<t.length;l++){let c=t[l];o&&(o.vmult(c,Mu),c=Mu),c.x>r.x&&(r.x=c.x),c.x<s.x&&(s.x=c.x),c.y>r.y&&(r.y=c.y),c.y<s.y&&(s.y=c.y),c.z>r.z&&(r.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(r,r)),i&&(s.x-=i,s.y-=i,s.z-=i,r.x+=i,r.y+=i,r.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Ye().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,r=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,o=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return r&&o&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,r,o,l){const c=this.lowerBound,u=this.upperBound;t.copy(c),e.set(u.x,c.y,c.z),n.set(u.x,u.y,c.z),i.set(c.x,u.y,u.z),s.set(u.x,c.y,u.z),r.set(c.x,u.y,c.z),o.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(t,e){const n=Eu,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],u=n[6],d=n[7];this.getCorners(i,s,r,o,l,c,u,d);for(let h=0;h!==8;h++){const m=n[h];t.pointToLocal(m,m)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Eu,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],u=n[6],d=n[7];this.getCorners(i,s,r,o,l,c,u,d);for(let h=0;h!==8;h++){const m=n[h];t.pointToWorld(m,m)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,r=1/e.z,o=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,u=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*r,h=(this.upperBound.z-n.z)*r,m=Math.max(Math.max(Math.min(o,l),Math.min(c,u)),Math.min(d,h)),g=Math.min(Math.min(Math.max(o,l),Math.max(c,u)),Math.max(d,h));return!(g<0||m>g)}}const Mu=new S,Eu=[new S,new S,new S,new S,new S,new S,new S,new S];class Tu{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const r=s;s=i,i=r}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Xh{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class oe{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new S),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=Lv,i=Pv;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new oe);const n=this.x,i=this.y,s=this.z,r=this.w,o=t.x,l=t.y,c=t.z,u=t.w;return e.x=n*u+r*o+i*c-s*l,e.y=i*u+r*l+s*o-n*c,e.z=s*u+r*c+n*l-i*o,e.w=r*u-n*o-i*l-s*c,e}inverse(t){t===void 0&&(t=new oe);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const r=1/(e*e+n*n+i*i+s*s);return t.x*=r,t.y*=r,t.z*=r,t.w*=r,t}conjugate(t){return t===void 0&&(t=new oe),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new S);const n=t.x,i=t.y,s=t.z,r=this.x,o=this.y,l=this.z,c=this.w,u=c*n+o*s-l*i,d=c*i+l*n-r*s,h=c*s+r*i-o*n,m=-r*n-o*i-l*s;return e.x=u*c+m*-r+d*-l-h*-o,e.y=d*c+m*-o+h*-r-u*-l,e.z=h*c+m*-l+u*-o-d*-r,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const r=this.x,o=this.y,l=this.z,c=this.w;switch(e){case"YZX":const u=r*o+l*c;if(u>.499&&(n=2*Math.atan2(r,c),i=Math.PI/2,s=0),u<-.499&&(n=-2*Math.atan2(r,c),i=-Math.PI/2,s=0),n===void 0){const d=r*r,h=o*o,m=l*l;n=Math.atan2(2*o*c-2*r*l,1-2*h-2*m),i=Math.asin(2*u),s=Math.atan2(2*r*c-2*o*l,1-2*d-2*m)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),r=Math.cos(e/2),o=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),u=Math.sin(n/2);return i==="XYZ"?(this.x=l*r*o+s*c*u,this.y=s*c*o-l*r*u,this.z=s*r*u+l*c*o,this.w=s*r*o-l*c*u):i==="YXZ"?(this.x=l*r*o+s*c*u,this.y=s*c*o-l*r*u,this.z=s*r*u-l*c*o,this.w=s*r*o+l*c*u):i==="ZXY"?(this.x=l*r*o-s*c*u,this.y=s*c*o+l*r*u,this.z=s*r*u+l*c*o,this.w=s*r*o-l*c*u):i==="ZYX"?(this.x=l*r*o-s*c*u,this.y=s*c*o+l*r*u,this.z=s*r*u-l*c*o,this.w=s*r*o+l*c*u):i==="YZX"?(this.x=l*r*o+s*c*u,this.y=s*c*o+l*r*u,this.z=s*r*u-l*c*o,this.w=s*r*o-l*c*u):i==="XZY"&&(this.x=l*r*o-s*c*u,this.y=s*c*o-l*r*u,this.z=s*r*u+l*c*o,this.w=s*r*o+l*c*u),this}clone(){return new oe(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new oe);const i=this.x,s=this.y,r=this.z,o=this.w;let l=t.x,c=t.y,u=t.z,d=t.w,h,m,g,f,p;return m=i*l+s*c+r*u+o*d,m<0&&(m=-m,l=-l,c=-c,u=-u,d=-d),1-m>1e-6?(h=Math.acos(m),g=Math.sin(h),f=Math.sin((1-e)*h)/g,p=Math.sin(e*h)/g):(f=1-e,p=e),n.x=f*i+p*l,n.y=f*s+p*c,n.z=f*r+p*u,n.w=f*o+p*d,n}integrate(t,e,n,i){i===void 0&&(i=new oe);const s=t.x*n.x,r=t.y*n.y,o=t.z*n.z,l=this.x,c=this.y,u=this.z,d=this.w,h=e*.5;return i.x+=h*(s*d+r*u-o*c),i.y+=h*(r*d+o*l-s*u),i.z+=h*(o*d+s*c-r*l),i.w+=h*(-s*l-r*c-o*u),i}}const Lv=new S,Pv=new S,Rv={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class gt{constructor(t){t===void 0&&(t={}),this.id=gt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}gt.idCounter=0;gt.types=Rv;class Ot{constructor(t){t===void 0&&(t={}),this.position=new S,this.quaternion=new oe,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Ot.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Ot.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new S),n.vsub(t,i),e.conjugate(Cu),Cu.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new S),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new S),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new S),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const Cu=new oe;class vr extends gt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:r}=t;super({type:gt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new S;for(let s=0;s!==t.length;s++){const r=t[s],o=r.length;for(let l=0;l!==o;l++){const c=(l+1)%o;e[r[l]].vsub(e[r[c]],i),i.normalize();let u=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){u=!0;break}u||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new S;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],r=this.vertices[n[2]];vr.computeNormal(i,s,r,e)}static computeNormal(t,e,n,i){const s=new S,r=new S;e.vsub(t,r),n.vsub(e,s),s.cross(r,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,r,o,l,c){const u=new S;let d=-1,h=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){u.copy(n.faceNormals[g]),s.vmult(u,u);const f=u.dot(r);f>h&&(h=f,d=g)}const m=[];for(let g=0;g<n.faces[d].length;g++){const f=n.vertices[n.faces[d][g]],p=new S;p.copy(f),s.vmult(p,p),i.vadd(p,p),m.push(p)}d>=0&&this.clipFaceAgainstHull(r,t,e,m,o,l,c)}findSeparatingAxis(t,e,n,i,s,r,o,l){const c=new S,u=new S,d=new S,h=new S,m=new S,g=new S;let f=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let _=0;_!==p.uniqueAxes.length;_++){n.vmult(p.uniqueAxes[_],c);const v=p.testSepAxis(c,t,e,n,i,s);if(v===!1)return!1;v<f&&(f=v,r.copy(c))}else{const _=o?o.length:p.faces.length;for(let v=0;v<_;v++){const w=o?o[v]:v;c.copy(p.faceNormals[w]),n.vmult(c,c);const b=p.testSepAxis(c,t,e,n,i,s);if(b===!1)return!1;b<f&&(f=b,r.copy(c))}}if(t.uniqueAxes)for(let _=0;_!==t.uniqueAxes.length;_++){s.vmult(t.uniqueAxes[_],u);const v=p.testSepAxis(u,t,e,n,i,s);if(v===!1)return!1;v<f&&(f=v,r.copy(u))}else{const _=l?l.length:t.faces.length;for(let v=0;v<_;v++){const w=l?l[v]:v;u.copy(t.faceNormals[w]),s.vmult(u,u);const b=p.testSepAxis(u,t,e,n,i,s);if(b===!1)return!1;b<f&&(f=b,r.copy(u))}}for(let _=0;_!==p.uniqueEdges.length;_++){n.vmult(p.uniqueEdges[_],h);for(let v=0;v!==t.uniqueEdges.length;v++)if(s.vmult(t.uniqueEdges[v],m),h.cross(m,g),!g.almostZero()){g.normalize();const w=p.testSepAxis(g,t,e,n,i,s);if(w===!1)return!1;w<f&&(f=w,r.copy(g))}}return i.vsub(e,d),d.dot(r)>0&&r.negate(r),!0}testSepAxis(t,e,n,i,s,r){const o=this;vr.project(o,t,n,i,Ca),vr.project(e,t,s,r,Aa);const l=Ca[0],c=Ca[1],u=Aa[0],d=Aa[1];if(l<d||u<c)return!1;const h=l-d,m=u-c;return h<m?h:m}calculateLocalInertia(t,e){const n=new S,i=new S;this.computeLocalAABB(i,n);const s=n.x-i.x,r=n.y-i.y,o=n.z-i.z;e.x=1/12*t*(2*r*2*r+2*o*2*o),e.y=1/12*t*(2*s*2*s+2*o*2*o),e.z=1/12*t*(2*r*2*r+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,r,o){const l=new S,c=new S,u=new S,d=new S,h=new S,m=new S,g=new S,f=new S,p=this,_=[],v=i,w=_;let b=-1,x=Number.MAX_VALUE;for(let I=0;I<p.faces.length;I++){l.copy(p.faceNormals[I]),n.vmult(l,l);const z=l.dot(t);z<x&&(x=z,b=I)}if(b<0)return;const M=p.faces[b];M.connectedFaces=[];for(let I=0;I<p.faces.length;I++)for(let z=0;z<p.faces[I].length;z++)M.indexOf(p.faces[I][z])!==-1&&I!==b&&M.connectedFaces.indexOf(I)===-1&&M.connectedFaces.push(I);const C=M.length;for(let I=0;I<C;I++){const z=p.vertices[M[I]],j=p.vertices[M[(I+1)%C]];z.vsub(j,c),u.copy(c),n.vmult(u,u),e.vadd(u,u),d.copy(this.faceNormals[b]),n.vmult(d,d),e.vadd(d,d),u.cross(d,h),h.negate(h),m.copy(z),n.vmult(m,m),e.vadd(m,m);const F=M.connectedFaces[I];g.copy(this.faceNormals[F]);const R=this.getPlaneConstantOfFace(F);f.copy(g),n.vmult(f,f);const N=R-f.dot(e);for(this.clipFaceAgainstPlane(v,w,f,N);v.length;)v.shift();for(;w.length;)v.push(w.shift())}g.copy(this.faceNormals[b]);const y=this.getPlaneConstantOfFace(b);f.copy(g),n.vmult(f,f);const E=y-f.dot(e);for(let I=0;I<v.length;I++){let z=f.dot(v[I])+E;if(z<=s&&(console.log(`clamped: depth=${z} to minDist=${s}`),z=s),z<=r){const j=v[I];if(z<=1e-6){const F={point:j,normal:f,depth:z};o.push(F)}}}}clipFaceAgainstPlane(t,e,n,i){let s,r;const o=t.length;if(o<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let u=0;u<o;u++){if(c=t[u],r=n.dot(c)+i,s<0)if(r<0){const d=new S;d.copy(c),e.push(d)}else{const d=new S;l.lerp(c,s/(s-r),d),e.push(d)}else if(r<0){const d=new S;l.lerp(c,s/(s-r),d),e.push(d),e.push(c)}l=c,s=r}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new S);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new S);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let r,o,l,c,u,d,h=new S;for(let m=0;m<s.length;m++){h.copy(s[m]),e.vmult(h,h),t.vadd(h,h);const g=h;(r===void 0||g.x<r)&&(r=g.x),(c===void 0||g.x>c)&&(c=g.x),(o===void 0||g.y<o)&&(o=g.y),(u===void 0||g.y>u)&&(u=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(r,o,l),i.set(c,u,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new S);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const r=i[s];e.vmult(r,r)}for(let s=0;s<this.faceNormals.length;s++){const r=this.faceNormals[s];e.vmult(r,r)}}if(t)for(let s=0;s<n;s++){const r=i[s];r.vadd(t,r)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=null,r=new S;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let l=i[o];const c=e[n[o][0]],u=new S;t.vsub(c,u);const d=l.dot(u),h=new S;r.vsub(c,h);const m=l.dot(h);if(d<0&&m>0||d>0&&m<0)return!1}return s?1:-1}static project(t,e,n,i,s){const r=t.vertices.length,o=Dv;let l=0,c=0;const u=Iv,d=t.vertices;u.setZero(),Ot.vectorToLocalFrame(n,i,e,o),Ot.pointToLocalFrame(n,i,u,u);const h=u.dot(o);c=l=d[0].dot(o);for(let m=1;m<r;m++){const g=d[m].dot(o);g>l&&(l=g),g<c&&(c=g)}if(c-=h,l-=h,c>l){const m=c;c=l,l=m}s[0]=l,s[1]=c}}const Ca=[],Aa=[];new S;const Dv=new S,Iv=new S;class ko extends gt{constructor(t){super({type:gt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=S,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],o=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new vr({vertices:s,faces:r,axes:o});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new S),ko.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let r=0;r<s.length;r++)fi.set(s[r][0],s[r][1],s[r][2]),e.vmult(fi,fi),t.vadd(fi,fi),n(fi.x,fi.y,fi.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;Sn[0].set(s.x,s.y,s.z),Sn[1].set(-s.x,s.y,s.z),Sn[2].set(-s.x,-s.y,s.z),Sn[3].set(-s.x,-s.y,-s.z),Sn[4].set(s.x,-s.y,-s.z),Sn[5].set(s.x,s.y,-s.z),Sn[6].set(-s.x,s.y,-s.z),Sn[7].set(s.x,-s.y,s.z);const r=Sn[0];e.vmult(r,r),t.vadd(r,r),i.copy(r),n.copy(r);for(let o=1;o<8;o++){const l=Sn[o];e.vmult(l,l),t.vadd(l,l);const c=l.x,u=l.y,d=l.z;c>i.x&&(i.x=c),u>i.y&&(i.y=u),d>i.z&&(i.z=d),c<n.x&&(n.x=c),u<n.y&&(n.y=u),d<n.z&&(n.z=d)}}}const fi=new S,Sn=[new S,new S,new S,new S,new S,new S,new S,new S],Ll={DYNAMIC:1,STATIC:2,KINEMATIC:4},Pl={AWAKE:0,SLEEPY:1,SLEEPING:2};class pt extends Xh{constructor(t){t===void 0&&(t={}),super(),this.id=pt.idCounter++,this.index=-1,this.world=null,this.vlambda=new S,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new S,this.previousPosition=new S,this.interpolatedPosition=new S,this.initPosition=new S,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new S,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new S,this.force=new S;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?pt.STATIC:pt.DYNAMIC,typeof t.type==typeof pt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=pt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new S,this.quaternion=new oe,this.initQuaternion=new oe,this.previousQuaternion=new oe,this.interpolatedQuaternion=new oe,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new S,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new S,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new S,this.invInertia=new S,this.invInertiaWorld=new mn,this.invMassSolve=0,this.invInertiaSolve=new S,this.invInertiaWorldSolve=new mn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new S(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new S(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Ye,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new S,this.isTrigger=Boolean(t.isTrigger),t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=pt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===pt.SLEEPING&&this.dispatchEvent(pt.wakeupEvent)}sleep(){this.sleepState=pt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===pt.AWAKE&&n<i?(this.sleepState=pt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(pt.sleepyEvent)):e===pt.SLEEPY&&n>i?this.wakeUp():e===pt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(pt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===pt.SLEEPING||this.type===pt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new S),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new S),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new S,s=new oe;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const r=t[s];r.updateBoundingSphereRadius();const o=e[s].length(),l=r.boundingSphereRadius;o+l>i&&(i=o+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=Fv,r=zv,o=this.quaternion,l=this.aabb,c=Nv;for(let u=0;u!==i;u++){const d=t[u];o.vmult(e[u],s),s.vadd(this.position,s),o.mult(n[u],r),d.calculateWorldAABB(s,r,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=Ov,i=Bv;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new S),this.type!==pt.DYNAMIC)return;this.sleepState===pt.SLEEPING&&this.wakeUp();const n=Uv;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new S),this.type!==pt.DYNAMIC)return;const n=Vv,i=Gv;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===pt.DYNAMIC&&(this.sleepState===pt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new S),this.type!==pt.DYNAMIC)return;this.sleepState===pt.SLEEPING&&this.wakeUp();const n=e,i=Hv;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Wv;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new S),this.type!==pt.DYNAMIC)return;const n=qv,i=Xv;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=jv;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),ko.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new S;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===pt.DYNAMIC||this.type===pt.KINEMATIC)||this.sleepState===pt.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,r=this.position,o=this.force,l=this.torque,c=this.quaternion,u=this.invMass,d=this.invInertiaWorld,h=this.linearFactor,m=u*t;i.x+=o.x*m*h.x,i.y+=o.y*m*h.y,i.z+=o.z*m*h.z;const g=d.elements,f=this.angularFactor,p=l.x*f.x,_=l.y*f.y,v=l.z*f.z;s.x+=t*(g[0]*p+g[1]*_+g[2]*v),s.y+=t*(g[3]*p+g[4]*_+g[5]*v),s.z+=t*(g[6]*p+g[7]*_+g[8]*v),r.x+=i.x*t,r.y+=i.y*t,r.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}pt.idCounter=0;pt.COLLIDE_EVENT_NAME="collide";pt.DYNAMIC=Ll.DYNAMIC;pt.STATIC=Ll.STATIC;pt.KINEMATIC=Ll.KINEMATIC;pt.AWAKE=Pl.AWAKE;pt.SLEEPY=Pl.SLEEPY;pt.SLEEPING=Pl.SLEEPING;pt.wakeupEvent={type:"wakeup"};pt.sleepyEvent={type:"sleepy"};pt.sleepEvent={type:"sleep"};const Fv=new S,zv=new oe,Nv=new Ye,Ov=new mn,Bv=new mn,kv=new mn,Uv=new S,Vv=new S,Gv=new S,Hv=new S,Wv=new S,qv=new S,Xv=new S,jv=new S;class jh{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&pt.STATIC)!==0||t.sleepState===pt.SLEEPING)&&((e.type&pt.STATIC)!==0||e.sleepState===pt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=Yv;e.position.vsub(t.position,s);const r=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<r&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=$v,i=Zv,s=Kv,r=t.length;for(let o=0;o!==r;o++)i[o]=t[o],s[o]=e[o];t.length=0,e.length=0;for(let o=0;o!==r;o++){const l=i[o].id,c=s[o].id,u=l<c?`${l},${c}`:`${c},${l}`;n[u]=o,n.keys.push(u)}for(let o=0;o!==n.keys.length;o++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new S;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Yv=new S;new S;new oe;new S;const $v={keys:[]},Zv=[],Kv=[];new S;new S;new S;class Jv extends jh{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let r,o;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)r=i[l],o=i[c],this.needBroadphaseCollision(r,o)&&this.intersectionTest(r,o,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class wo{constructor(){this.rayFromWorld=new S,this.rayToWorld=new S,this.hitNormalWorld=new S,this.hitPointWorld=new S,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,r,o){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=r,this.distance=o}}let Yh,$h,Zh,Kh,Jh,Qh,td;const Rl={CLOSEST:1,ANY:2,ALL:4};Yh=gt.types.SPHERE;$h=gt.types.PLANE;Zh=gt.types.BOX;Kh=gt.types.CYLINDER;Jh=gt.types.CONVEXPOLYHEDRON;Qh=gt.types.HEIGHTFIELD;td=gt.types.TRIMESH;class re{get[Yh](){return this._intersectSphere}get[$h](){return this._intersectPlane}get[Zh](){return this._intersectBox}get[Kh](){return this._intersectConvex}get[Jh](){return this._intersectConvex}get[Qh](){return this._intersectHeightfield}get[td](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new S),e===void 0&&(e=new S),this.from=t.clone(),this.to=e.clone(),this.direction=new S,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=re.ANY,this.result=new wo,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||re.ANY,this.result=e.result||new wo,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Au),La.length=0,t.broadphase.aabbQuery(t,Au,La),this.intersectBodies(La),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=Qv,s=tx;for(let r=0,o=t.shapes.length;r<o;r++){const l=t.shapes[r];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[r],s),t.quaternion.vmult(t.shapeOffsets[r],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(px(s,this.direction,n)>t.boundingSphereRadius)return;const o=this[t.type];o&&o.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const r=this.from,o=this.to,l=this.direction,c=new S(0,0,1);e.vmult(c,c);const u=new S;r.vsub(n,u);const d=u.dot(c);o.vsub(n,u);const h=u.dot(c);if(d*h>0||r.distanceTo(o)<d)return;const m=c.dot(l);if(Math.abs(m)<this.precision)return;const g=new S,f=new S,p=new S;r.vsub(n,g);const _=-c.dot(g)/m;l.scale(_,f),r.vadd(f,p),this.reportIntersection(c,p,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const r=ex;r.from.copy(this.from),r.to.copy(this.to),Ot.pointToLocalFrame(n,e,r.from,r.from),Ot.pointToLocalFrame(n,e,r.to,r.to),r.updateDirection();const o=nx;let l,c,u,d;l=c=0,u=d=t.data.length-1;const h=new Ye;r.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,o,!0),l=Math.max(l,o[0]),c=Math.max(c,o[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,o,!0),u=Math.min(u,o[0]+1),d=Math.min(d,o[1]+1);for(let m=l;m<u;m++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(m,g,h),!!h.overlapsRay(r)){if(t.getConvexTrianglePillar(m,g,!1),Ot.pointToWorldFrame(n,e,t.pillarOffset,ao),this._intersectConvex(t.pillarConvex,e,ao,i,s,Lu),this.result.shouldStop)return;t.getConvexTrianglePillar(m,g,!0),Ot.pointToWorldFrame(n,e,t.pillarOffset,ao),this._intersectConvex(t.pillarConvex,e,ao,i,s,Lu)}}}_intersectSphere(t,e,n,i,s){const r=this.from,o=this.to,l=t.radius,c=(o.x-r.x)**2+(o.y-r.y)**2+(o.z-r.z)**2,u=2*((o.x-r.x)*(r.x-n.x)+(o.y-r.y)*(r.y-n.y)+(o.z-r.z)*(r.z-n.z)),d=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-l**2,h=u**2-4*c*d,m=ix,g=sx;if(!(h<0))if(h===0)r.lerp(o,h,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1);else{const f=(-u-Math.sqrt(h))/(2*c),p=(-u+Math.sqrt(h))/(2*c);if(f>=0&&f<=1&&(r.lerp(o,f,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(r.lerp(o,p,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1))}}_intersectConvex(t,e,n,i,s,r){const o=rx,l=Pu,c=r&&r.faceList||null,u=t.faces,d=t.vertices,h=t.faceNormals,m=this.direction,g=this.from,f=this.to,p=g.distanceTo(f),_=c?c.length:u.length,v=this.result;for(let w=0;!v.shouldStop&&w<_;w++){const b=c?c[w]:w,x=u[b],M=h[b],C=e,y=n;l.copy(d[x[0]]),C.vmult(l,l),l.vadd(y,l),l.vsub(g,l),C.vmult(M,o);const E=m.dot(o);if(Math.abs(E)<this.precision)continue;const I=o.dot(l)/E;if(!(I<0)){m.scale(I,Pe),Pe.vadd(g,Pe),fn.copy(d[x[0]]),C.vmult(fn,fn),y.vadd(fn,fn);for(let z=1;!v.shouldStop&&z<x.length-1;z++){Mn.copy(d[x[z]]),En.copy(d[x[z+1]]),C.vmult(Mn,Mn),C.vmult(En,En),y.vadd(Mn,Mn),y.vadd(En,En);const j=Pe.distanceTo(g);!(re.pointInTriangle(Pe,fn,Mn,En)||re.pointInTriangle(Pe,Mn,fn,En))||j>p||this.reportIntersection(o,Pe,s,i,b)}}}}_intersectTrimesh(t,e,n,i,s,r){const o=ox,l=dx,c=fx,u=Pu,d=ax,h=lx,m=cx,g=hx,f=ux,p=t.indices;t.vertices;const _=this.from,v=this.to,w=this.direction;c.position.copy(n),c.quaternion.copy(e),Ot.vectorToLocalFrame(n,e,w,d),Ot.pointToLocalFrame(n,e,_,h),Ot.pointToLocalFrame(n,e,v,m),m.x*=t.scale.x,m.y*=t.scale.y,m.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,m.vsub(h,d),d.normalize();const b=h.distanceSquared(m);t.tree.rayQuery(this,c,l);for(let x=0,M=l.length;!this.result.shouldStop&&x!==M;x++){const C=l[x];t.getNormal(C,o),t.getVertex(p[C*3],fn),fn.vsub(h,u);const y=d.dot(o),E=o.dot(u)/y;if(E<0)continue;d.scale(E,Pe),Pe.vadd(h,Pe),t.getVertex(p[C*3+1],Mn),t.getVertex(p[C*3+2],En);const I=Pe.distanceSquared(h);!(re.pointInTriangle(Pe,Mn,fn,En)||re.pointInTriangle(Pe,fn,Mn,En))||I>b||(Ot.vectorToWorldFrame(e,o,f),Ot.pointToWorldFrame(n,e,Pe,g),this.reportIntersection(f,g,s,i,C))}l.length=0}reportIntersection(t,e,n,i,s){const r=this.from,o=this.to,l=r.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case re.ALL:this.hasHit=!0,c.set(r,o,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case re.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(r,o,t,e,n,i,l));break;case re.ANY:this.hasHit=!0,c.hasHit=!0,c.set(r,o,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Oi),n.vsub(e,or),t.vsub(e,Pa);const s=Oi.dot(Oi),r=Oi.dot(or),o=Oi.dot(Pa),l=or.dot(or),c=or.dot(Pa);let u,d;return(u=l*o-r*c)>=0&&(d=s*c-r*o)>=0&&u+d<s*l-r*r}}re.CLOSEST=Rl.CLOSEST;re.ANY=Rl.ANY;re.ALL=Rl.ALL;const Au=new Ye,La=[],or=new S,Pa=new S,Qv=new S,tx=new oe,Pe=new S,fn=new S,Mn=new S,En=new S;new S;new wo;const Lu={faceList:[0]},ao=new S,ex=new re,nx=[],ix=new S,sx=new S,rx=new S;new S;new S;const Pu=new S,ox=new S,ax=new S,lx=new S,cx=new S,ux=new S,hx=new S;new Ye;const dx=[],fx=new Ot,Oi=new S,lo=new S;function px(a,t,e){e.vsub(a,Oi);const n=Oi.dot(t);return t.scale(n,lo),lo.vadd(a,lo),e.distanceTo(lo)}class Rs extends jh{static checkBounds(t,e,n){let i,s;n===0?(i=t.position.x,s=e.position.x):n===1?(i=t.position.y,s=e.position.y):n===2&&(i=t.position.z,s=e.position.z);const r=t.boundingRadius,o=e.boundingRadius,l=i+r;return s-o<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)t[s+1]=t[s];t[s+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const i=this.axisList,s=i.length,r=this.axisIndex;let o,l;for(this.dirty&&(this.sortList(),this.dirty=!1),o=0;o!==s;o++){const c=i[o];for(l=o+1;l<s;l++){const u=i[l];if(!!this.needBroadphaseCollision(c,u)){if(!Rs.checkBounds(c,u,r))break;this.intersectionTest(c,u,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){const s=t[i];s.aabbNeedsUpdate&&s.updateAABB()}e===0?Rs.insertionSortX(t):e===1?Rs.insertionSortY(t):e===2&&Rs.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,s=0,r=0;const o=this.axisList,l=o.length,c=1/l;for(let m=0;m!==l;m++){const g=o[m],f=g.position.x;t+=f,e+=f*f;const p=g.position.y;n+=p,i+=p*p;const _=g.position.z;s+=_,r+=_*_}const u=e-t*t*c,d=i-n*n*c,h=r-s*s*c;u>d?u>h?this.axisIndex=0:this.axisIndex=2:d>h?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const r=this.axisList;e.lowerBound[s],e.upperBound[s];for(let o=0;o<r.length;o++){const l=r[o];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}}class mx{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Ru{constructor(){this.spatial=new S,this.rotational=new S}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Or{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Or.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Ru,this.jacobianElementB=new Ru,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,r=n;this.a=4/(r*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(r*r*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),r=this.computeGiMf();return-s*t-i*e-r*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,r=i.position;return t.spatial.dot(s)+e.spatial.dot(r)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,r=i.velocity,o=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,o)+e.multiplyVectors(r,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,r=i.vlambda,o=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,o)+e.multiplyVectors(r,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,r=n.torque,o=i.force,l=i.torque,c=n.invMassSolve,u=i.invMassSolve;return s.scale(c,Du),o.scale(u,Iu),n.invInertiaWorldSolve.vmult(r,Fu),i.invInertiaWorldSolve.vmult(l,zu),t.multiplyVectors(Du,Fu)+e.multiplyVectors(Iu,zu)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,r=i.invMassSolve,o=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+r;return o.vmult(t.rotational,co),c+=co.dot(t.rotational),l.vmult(e.rotational,co),c+=co.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,r=gx;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,r),i.wlambda.addScaledVector(t,r,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,r),s.wlambda.addScaledVector(t,r,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Or.idCounter=0;const Du=new S,Iu=new S,Fu=new S,zu=new S,co=new S,gx=new S;class _x extends Or{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new S,this.rj=new S,this.ni=new S}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,r=this.ri,o=this.rj,l=vx,c=xx,u=i.velocity,d=i.angularVelocity;i.force,i.torque;const h=s.velocity,m=s.angularVelocity;s.force,s.torque;const g=yx,f=this.jacobianElementA,p=this.jacobianElementB,_=this.ni;r.cross(_,l),o.cross(_,c),_.negate(f.spatial),l.negate(f.rotational),p.spatial.copy(_),p.rotational.copy(c),g.copy(s.position),g.vadd(o,g),g.vsub(i.position,g),g.vsub(r,g);const v=_.dot(g),w=this.restitution+1,b=w*h.dot(_)-w*u.dot(_)+m.dot(c)-d.dot(l),x=this.computeGiMf();return-v*e-b*n-t*x}getImpactVelocityAlongNormal(){const t=bx,e=wx,n=Sx,i=Mx,s=Ex;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const vx=new S,xx=new S,yx=new S,bx=new S,wx=new S,Sx=new S,Mx=new S,Ex=new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class Nu extends Or{constructor(t,e,n){super(t,e,-n,n),this.ri=new S,this.rj=new S,this.t=new S}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=Tx,r=Cx,o=this.t;n.cross(o,s),i.cross(o,r);const l=this.jacobianElementA,c=this.jacobianElementB;o.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(o),c.rotational.copy(r);const u=this.computeGW(),d=this.computeGiMf();return-u*e-t*d}}const Tx=new S,Cx=new S;class ns{constructor(t,e,n){n=mx.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=ns.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}ns.idCounter=0;class tr{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=tr.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}tr.idCounter=0;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new re;new S;new S;new S;new S(1,0,0),new S(0,1,0),new S(0,0,1);new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class Ax extends gt{constructor(){super({type:gt.types.PLANE}),this.worldNormal=new S,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new S),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){Vn.set(0,0,1),e.vmult(Vn,Vn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),Vn.x===1?i.x=t.x:Vn.x===-1&&(n.x=t.x),Vn.y===1?i.y=t.y:Vn.y===-1&&(n.y=t.y),Vn.z===1?i.z=t.z:Vn.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Vn=new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new Ye;new S;new Ye;new S;new S;new S;new S;new S;new S;new S;new Ye;new S;new Ot;new Ye;class Lx{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class Px extends Lx{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,r=this.equations,o=r.length,l=e.bodies,c=l.length,u=t;let d,h,m,g,f,p;if(o!==0)for(let b=0;b!==c;b++)l[b].updateSolveMassProperties();const _=Dx,v=Ix,w=Rx;_.length=o,v.length=o,w.length=o;for(let b=0;b!==o;b++){const x=r[b];w[b]=0,v[b]=x.computeB(u),_[b]=1/x.computeC()}if(o!==0){for(let M=0;M!==c;M++){const C=l[M],y=C.vlambda,E=C.wlambda;y.set(0,0,0),E.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let M=0;M!==o;M++){const C=r[M];d=v[M],h=_[M],p=w[M],f=C.computeGWlambda(),m=h*(d-f-C.eps*p),p+m<C.minForce?m=C.minForce-p:p+m>C.maxForce&&(m=C.maxForce-p),w[M]+=m,g+=m>0?m:-m,C.addToWlambda(m)}if(g*g<s)break}for(let M=0;M!==c;M++){const C=l[M],y=C.velocity,E=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),y.vadd(C.vlambda,y),C.wlambda.vmul(C.angularFactor,C.wlambda),E.vadd(C.wlambda,E)}let b=r.length;const x=1/u;for(;b--;)r[b].multiplier=w[b]*x}return n}}const Rx=[],Dx=[],Ix=[];pt.STATIC;class Fx{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class zx extends Fx{constructor(){super(...arguments),this.type=S}constructObject(){return new S}}const qt={sphereSphere:gt.types.SPHERE,spherePlane:gt.types.SPHERE|gt.types.PLANE,boxBox:gt.types.BOX|gt.types.BOX,sphereBox:gt.types.SPHERE|gt.types.BOX,planeBox:gt.types.PLANE|gt.types.BOX,convexConvex:gt.types.CONVEXPOLYHEDRON,sphereConvex:gt.types.SPHERE|gt.types.CONVEXPOLYHEDRON,planeConvex:gt.types.PLANE|gt.types.CONVEXPOLYHEDRON,boxConvex:gt.types.BOX|gt.types.CONVEXPOLYHEDRON,sphereHeightfield:gt.types.SPHERE|gt.types.HEIGHTFIELD,boxHeightfield:gt.types.BOX|gt.types.HEIGHTFIELD,convexHeightfield:gt.types.CONVEXPOLYHEDRON|gt.types.HEIGHTFIELD,sphereParticle:gt.types.PARTICLE|gt.types.SPHERE,planeParticle:gt.types.PLANE|gt.types.PARTICLE,boxParticle:gt.types.BOX|gt.types.PARTICLE,convexParticle:gt.types.PARTICLE|gt.types.CONVEXPOLYHEDRON,cylinderCylinder:gt.types.CYLINDER,sphereCylinder:gt.types.SPHERE|gt.types.CYLINDER,planeCylinder:gt.types.PLANE|gt.types.CYLINDER,boxCylinder:gt.types.BOX|gt.types.CYLINDER,convexCylinder:gt.types.CONVEXPOLYHEDRON|gt.types.CYLINDER,heightfieldCylinder:gt.types.HEIGHTFIELD|gt.types.CYLINDER,particleCylinder:gt.types.PARTICLE|gt.types.CYLINDER,sphereTrimesh:gt.types.SPHERE|gt.types.TRIMESH,planeTrimesh:gt.types.PLANE|gt.types.TRIMESH};class Nx{get[qt.sphereSphere](){return this.sphereSphere}get[qt.spherePlane](){return this.spherePlane}get[qt.boxBox](){return this.boxBox}get[qt.sphereBox](){return this.sphereBox}get[qt.planeBox](){return this.planeBox}get[qt.convexConvex](){return this.convexConvex}get[qt.sphereConvex](){return this.sphereConvex}get[qt.planeConvex](){return this.planeConvex}get[qt.boxConvex](){return this.boxConvex}get[qt.sphereHeightfield](){return this.sphereHeightfield}get[qt.boxHeightfield](){return this.boxHeightfield}get[qt.convexHeightfield](){return this.convexHeightfield}get[qt.sphereParticle](){return this.sphereParticle}get[qt.planeParticle](){return this.planeParticle}get[qt.boxParticle](){return this.boxParticle}get[qt.convexParticle](){return this.convexParticle}get[qt.cylinderCylinder](){return this.convexConvex}get[qt.sphereCylinder](){return this.sphereConvex}get[qt.planeCylinder](){return this.planeConvex}get[qt.boxCylinder](){return this.boxConvex}get[qt.convexCylinder](){return this.convexConvex}get[qt.heightfieldCylinder](){return this.heightfieldCylinder}get[qt.particleCylinder](){return this.particleCylinder}get[qt.sphereTrimesh](){return this.sphereTrimesh}get[qt.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new zx,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,r){let o;this.contactPointPool.length?(o=this.contactPointPool.pop(),o.bi=t,o.bj=e):o=new _x(t,e),o.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;o.restitution=l.restitution,o.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,u=i.material||e.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(o.restitution=c.restitution*u.restitution),o.si=s||n,o.sj=r||i,o}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,r=t.sj,o=this.world,l=this.currentContactMaterial;let c=l.friction;const u=s.material||n.material,d=r.material||i.material;if(u&&d&&u.friction>=0&&d.friction>=0&&(c=u.friction*d.friction),c>0){const h=c*(o.frictionGravity||o.gravity).length();let m=n.invMass+i.invMass;m>0&&(m=1/m);const g=this.frictionEquationPool,f=g.length?g.pop():new Nu(n,i,h*m),p=g.length?g.pop():new Nu(n,i,h*m);return f.bi=p.bi=n,f.bj=p.bj=i,f.minForce=p.minForce=-h*m,f.maxForce=p.maxForce=h*m,f.ri.copy(t.ri),f.rj.copy(t.rj),p.ri.copy(t.ri),p.rj.copy(t.rj),t.ni.tangents(f.t,p.t),f.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),f.enabled=p.enabled=t.enabled,e.push(f,p),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Pi.setZero(),Ms.setZero(),Es.setZero();const s=e.bi;e.bj;for(let o=0;o!==t;o++)e=this.result[this.result.length-1-o],e.bi!==s?(Pi.vadd(e.ni,Pi),Ms.vadd(e.ri,Ms),Es.vadd(e.rj,Es)):(Pi.vsub(e.ni,Pi),Ms.vadd(e.rj,Ms),Es.vadd(e.ri,Es));const r=1/t;Ms.scale(r,n.ri),Es.scale(r,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Pi.normalize(),Pi.tangents(n.t,i.t)}getContacts(t,e,n,i,s,r,o){this.contactPointPool=s,this.frictionEquationPool=o,this.result=i,this.frictionResult=r;const l=kx,c=Ux,u=Ox,d=Bx;for(let h=0,m=t.length;h!==m;h++){const g=t[h],f=e[h];let p=null;g.material&&f.material&&(p=n.getContactMaterial(g.material,f.material)||null);const _=g.type&pt.KINEMATIC&&f.type&pt.STATIC||g.type&pt.STATIC&&f.type&pt.KINEMATIC||g.type&pt.KINEMATIC&&f.type&pt.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],u),u.vadd(g.position,u);const w=g.shapes[v];for(let b=0;b<f.shapes.length;b++){f.quaternion.mult(f.shapeOrientations[b],c),f.quaternion.vmult(f.shapeOffsets[b],d),d.vadd(f.position,d);const x=f.shapes[b];if(!(w.collisionFilterMask&x.collisionFilterGroup&&x.collisionFilterMask&w.collisionFilterGroup)||u.distanceTo(d)>w.boundingSphereRadius+x.boundingSphereRadius)continue;let M=null;w.material&&x.material&&(M=n.getContactMaterial(w.material,x.material)||null),this.currentContactMaterial=M||p||n.defaultContactMaterial;const C=w.type|x.type,y=this[C];if(y){let E=!1;w.type<x.type?E=y.call(this,w,x,u,d,l,c,g,f,w,x,_):E=y.call(this,x,w,d,u,c,l,f,g,w,x,_),E&&_&&(n.shapeOverlapKeeper.set(w.id,x.id),n.bodyOverlapKeeper.set(g.id,f.id))}}}}}sphereSphere(t,e,n,i,s,r,o,l,c,u,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;const h=this.createContactEquation(o,l,t,e,c,u);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(o.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,n,i,s,r,o,l,c,u,d){const h=this.createContactEquation(o,l,t,e,c,u);if(h.ni.set(0,0,1),r.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),n.vsub(i,uo),h.ni.scale(h.ni.dot(uo),Ou),uo.vsub(Ou,h.rj),-uo.dot(h.ni)<=t.radius){if(d)return!0;const m=h.ri,g=h.rj;m.vadd(n,m),m.vsub(o.position,m),g.vadd(i,g),g.vsub(l.position,g),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,n,i,s,r,o,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,r,o,l,t,e,d)}sphereBox(t,e,n,i,s,r,o,l,c,u,d){const h=this.v3pool,m=dy;n.vsub(i,ho),e.getSideNormals(m,r);const g=t.radius;let f=!1;const p=py,_=my,v=gy;let w=null,b=0,x=0,M=0,C=null;for(let D=0,V=m.length;D!==V&&f===!1;D++){const U=cy;U.copy(m[D]);const B=U.length();U.normalize();const X=ho.dot(U);if(X<B+g&&X>0){const tt=uy,W=hy;tt.copy(m[(D+1)%3]),W.copy(m[(D+2)%3]);const nt=tt.length(),ot=W.length();tt.normalize(),W.normalize();const _t=ho.dot(tt),K=ho.dot(W);if(_t<nt&&_t>-nt&&K<ot&&K>-ot){const It=Math.abs(X-B-g);if((C===null||It<C)&&(C=It,x=_t,M=K,w=B,p.copy(U),_.copy(tt),v.copy(W),b++,d))return!0}}}if(b){f=!0;const D=this.createContactEquation(o,l,t,e,c,u);p.scale(-g,D.ri),D.ni.copy(p),D.ni.negate(D.ni),p.scale(w,p),_.scale(x,_),p.vadd(_,p),v.scale(M,v),p.vadd(v,D.rj),D.ri.vadd(n,D.ri),D.ri.vsub(o.position,D.ri),D.rj.vadd(i,D.rj),D.rj.vsub(l.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}let y=h.get();const E=fy;for(let D=0;D!==2&&!f;D++)for(let V=0;V!==2&&!f;V++)for(let U=0;U!==2&&!f;U++)if(y.set(0,0,0),D?y.vadd(m[0],y):y.vsub(m[0],y),V?y.vadd(m[1],y):y.vsub(m[1],y),U?y.vadd(m[2],y):y.vsub(m[2],y),i.vadd(y,E),E.vsub(n,E),E.lengthSquared()<g*g){if(d)return!0;f=!0;const B=this.createContactEquation(o,l,t,e,c,u);B.ri.copy(E),B.ri.normalize(),B.ni.copy(B.ri),B.ri.scale(g,B.ri),B.rj.copy(y),B.ri.vadd(n,B.ri),B.ri.vsub(o.position,B.ri),B.rj.vadd(i,B.rj),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}h.release(y),y=null;const I=h.get(),z=h.get(),j=h.get(),F=h.get(),R=h.get(),N=m.length;for(let D=0;D!==N&&!f;D++)for(let V=0;V!==N&&!f;V++)if(D%3!==V%3){m[V].cross(m[D],I),I.normalize(),m[D].vadd(m[V],z),j.copy(n),j.vsub(z,j),j.vsub(i,j);const U=j.dot(I);I.scale(U,F);let B=0;for(;B===D%3||B===V%3;)B++;R.copy(n),R.vsub(F,R),R.vsub(z,R),R.vsub(i,R);const X=Math.abs(U),tt=R.length();if(X<m[B].length()&&tt<g){if(d)return!0;f=!0;const W=this.createContactEquation(o,l,t,e,c,u);z.vadd(F,W.rj),W.rj.copy(W.rj),R.negate(W.ni),W.ni.normalize(),W.ri.copy(W.rj),W.ri.vadd(i,W.ri),W.ri.vsub(n,W.ri),W.ri.normalize(),W.ri.scale(g,W.ri),W.ri.vadd(n,W.ri),W.ri.vsub(o.position,W.ri),W.rj.vadd(i,W.rj),W.rj.vsub(l.position,W.rj),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}}h.release(I,z,j,F,R)}planeBox(t,e,n,i,s,r,o,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,r,o,l,t,e,d)}convexConvex(t,e,n,i,s,r,o,l,c,u,d,h,m){const g=Ry;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,r,g,h,m)){const f=[],p=Dy;t.clipAgainstHull(n,s,e,i,r,g,-100,100,f);let _=0;for(let v=0;v!==f.length;v++){if(d)return!0;const w=this.createContactEquation(o,l,t,e,c,u),b=w.ri,x=w.rj;g.negate(w.ni),f[v].normal.negate(p),p.scale(f[v].depth,p),f[v].point.vadd(p,b),x.copy(f[v].point),b.vsub(n,b),x.vsub(i,x),b.vadd(n,b),b.vsub(o.position,b),x.vadd(i,x),x.vsub(l.position,x),this.result.push(w),_++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(w,this.frictionResult)}this.enableFrictionReduction&&_&&this.createFrictionFromAverage(_)}}sphereConvex(t,e,n,i,s,r,o,l,c,u,d){const h=this.v3pool;n.vsub(i,_y);const m=e.faceNormals,g=e.faces,f=e.vertices,p=t.radius;let _=!1;for(let v=0;v!==f.length;v++){const w=f[v],b=by;r.vmult(w,b),i.vadd(b,b);const x=yy;if(b.vsub(n,x),x.lengthSquared()<p*p){if(d)return!0;_=!0;const M=this.createContactEquation(o,l,t,e,c,u);M.ri.copy(x),M.ri.normalize(),M.ni.copy(M.ri),M.ri.scale(p,M.ri),b.vsub(i,M.rj),M.ri.vadd(n,M.ri),M.ri.vsub(o.position,M.ri),M.rj.vadd(i,M.rj),M.rj.vsub(l.position,M.rj),this.result.push(M),this.createFrictionEquationsFromContact(M,this.frictionResult);return}}for(let v=0,w=g.length;v!==w&&_===!1;v++){const b=m[v],x=g[v],M=wy;r.vmult(b,M);const C=Sy;r.vmult(f[x[0]],C),C.vadd(i,C);const y=My;M.scale(-p,y),n.vadd(y,y);const E=Ey;y.vsub(C,E);const I=E.dot(M),z=Ty;if(n.vsub(C,z),I<0&&z.dot(M)>0){const j=[];for(let F=0,R=x.length;F!==R;F++){const N=h.get();r.vmult(f[x[F]],N),i.vadd(N,N),j.push(N)}if(ly(j,M,n)){if(d)return!0;_=!0;const F=this.createContactEquation(o,l,t,e,c,u);M.scale(-p,F.ri),M.negate(F.ni);const R=h.get();M.scale(-I,R);const N=h.get();M.scale(-p,N),n.vsub(i,F.rj),F.rj.vadd(N,F.rj),F.rj.vadd(R,F.rj),F.rj.vadd(i,F.rj),F.rj.vsub(l.position,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(o.position,F.ri),h.release(R),h.release(N),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult);for(let D=0,V=j.length;D!==V;D++)h.release(j[D]);return}else for(let F=0;F!==x.length;F++){const R=h.get(),N=h.get();r.vmult(f[x[(F+1)%x.length]],R),r.vmult(f[x[(F+2)%x.length]],N),i.vadd(R,R),i.vadd(N,N);const D=vy;N.vsub(R,D);const V=xy;D.unit(V);const U=h.get(),B=h.get();n.vsub(R,B);const X=B.dot(V);V.scale(X,U),U.vadd(R,U);const tt=h.get();if(U.vsub(n,tt),X>0&&X*X<D.lengthSquared()&&tt.lengthSquared()<p*p){if(d)return!0;const W=this.createContactEquation(o,l,t,e,c,u);U.vsub(i,W.rj),U.vsub(n,W.ni),W.ni.normalize(),W.ni.scale(p,W.ri),W.rj.vadd(i,W.rj),W.rj.vsub(l.position,W.rj),W.ri.vadd(n,W.ri),W.ri.vsub(o.position,W.ri),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult);for(let nt=0,ot=j.length;nt!==ot;nt++)h.release(j[nt]);h.release(R),h.release(N),h.release(U),h.release(tt),h.release(B);return}h.release(R),h.release(N),h.release(U),h.release(tt),h.release(B)}for(let F=0,R=j.length;F!==R;F++)h.release(j[F])}}}planeConvex(t,e,n,i,s,r,o,l,c,u,d){const h=Cy,m=Ay;m.set(0,0,1),s.vmult(m,m);let g=0;const f=Ly;for(let p=0;p!==e.vertices.length;p++)if(h.copy(e.vertices[p]),r.vmult(h,h),i.vadd(h,h),h.vsub(n,f),m.dot(f)<=0){if(d)return!0;const v=this.createContactEquation(o,l,t,e,c,u),w=Py;m.scale(m.dot(f),w),h.vsub(w,w),w.vsub(n,v.ri),v.ni.copy(m),h.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(o.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,r,o,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,r,o,l,t,e,d)}sphereHeightfield(t,e,n,i,s,r,o,l,c,u,d){const h=e.data,m=t.radius,g=e.elementSize,f=Wy,p=Hy;Ot.pointToLocalFrame(i,r,n,p);let _=Math.floor((p.x-m)/g)-1,v=Math.ceil((p.x+m)/g)+1,w=Math.floor((p.y-m)/g)-1,b=Math.ceil((p.y+m)/g)+1;if(v<0||b<0||_>h.length||w>h[0].length)return;_<0&&(_=0),v<0&&(v=0),w<0&&(w=0),b<0&&(b=0),_>=h.length&&(_=h.length-1),v>=h.length&&(v=h.length-1),b>=h[0].length&&(b=h[0].length-1),w>=h[0].length&&(w=h[0].length-1);const x=[];e.getRectMinMax(_,w,v,b,x);const M=x[0],C=x[1];if(p.z-m>C||p.z+m<M)return;const y=this.result;for(let E=_;E<v;E++)for(let I=w;I<b;I++){const z=y.length;let j=!1;if(e.getConvexTrianglePillar(E,I,!1),Ot.pointToWorldFrame(i,r,e.pillarOffset,f),n.distanceTo(f)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(j=this.sphereConvex(t,e.pillarConvex,n,f,s,r,o,l,t,e,d)),d&&j||(e.getConvexTrianglePillar(E,I,!0),Ot.pointToWorldFrame(i,r,e.pillarOffset,f),n.distanceTo(f)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(j=this.sphereConvex(t,e.pillarConvex,n,f,s,r,o,l,t,e,d)),d&&j))return!0;if(y.length-z>2)return}}boxHeightfield(t,e,n,i,s,r,o,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,r,o,l,t,e,d)}convexHeightfield(t,e,n,i,s,r,o,l,c,u,d){const h=e.data,m=e.elementSize,g=t.boundingSphereRadius,f=Vy,p=Gy,_=Uy;Ot.pointToLocalFrame(i,r,n,_);let v=Math.floor((_.x-g)/m)-1,w=Math.ceil((_.x+g)/m)+1,b=Math.floor((_.y-g)/m)-1,x=Math.ceil((_.y+g)/m)+1;if(w<0||x<0||v>h.length||b>h[0].length)return;v<0&&(v=0),w<0&&(w=0),b<0&&(b=0),x<0&&(x=0),v>=h.length&&(v=h.length-1),w>=h.length&&(w=h.length-1),x>=h[0].length&&(x=h[0].length-1),b>=h[0].length&&(b=h[0].length-1);const M=[];e.getRectMinMax(v,b,w,x,M);const C=M[0],y=M[1];if(!(_.z-g>y||_.z+g<C))for(let E=v;E<w;E++)for(let I=b;I<x;I++){let z=!1;if(e.getConvexTrianglePillar(E,I,!1),Ot.pointToWorldFrame(i,r,e.pillarOffset,f),n.distanceTo(f)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(z=this.convexConvex(t,e.pillarConvex,n,f,s,r,o,l,null,null,d,p,null)),d&&z||(e.getConvexTrianglePillar(E,I,!0),Ot.pointToWorldFrame(i,r,e.pillarOffset,f),n.distanceTo(f)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(z=this.convexConvex(t,e.pillarConvex,n,f,s,r,o,l,null,null,d,p,null)),d&&z))return!0}}sphereParticle(t,e,n,i,s,r,o,l,c,u,d){const h=Ny;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=t.radius*t.radius){if(d)return!0;const g=this.createContactEquation(l,o,e,t,c,u);h.normalize(),g.rj.copy(h),g.rj.scale(t.radius,g.rj),g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,r,o,l,c,u,d){const h=Iy;h.set(0,0,1),o.quaternion.vmult(h,h);const m=Fy;if(i.vsub(o.position,m),h.dot(m)<=0){if(d)return!0;const f=this.createContactEquation(l,o,e,t,c,u);f.ni.copy(h),f.ni.negate(f.ni),f.ri.set(0,0,0);const p=zy;h.scale(h.dot(i),p),i.vsub(p,p),f.rj.copy(p),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}}boxParticle(t,e,n,i,s,r,o,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,r,o,l,t,e,d)}convexParticle(t,e,n,i,s,r,o,l,c,u,d){let h=-1;const m=By,g=ky;let f=null;const p=Oy;if(p.copy(i),p.vsub(n,p),s.conjugate(Bu),Bu.vmult(p,p),t.pointIsInside(p)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let _=0,v=t.faces.length;_!==v;_++){const w=[t.worldVertices[t.faces[_][0]]],b=t.worldFaceNormals[_];i.vsub(w[0],ku);const x=-b.dot(ku);if(f===null||Math.abs(x)<Math.abs(f)){if(d)return!0;f=x,h=_,m.copy(b)}}if(h!==-1){const _=this.createContactEquation(l,o,e,t,c,u);m.scale(f,g),g.vadd(i,g),g.vsub(n,g),_.rj.copy(g),m.negate(_.ni),_.ri.set(0,0,0);const v=_.ri,w=_.rj;v.vadd(i,v),v.vsub(l.position,v),w.vadd(n,w),w.vsub(o.position,w),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,r,o,l,c,u,d){return this.convexHeightfield(e,t,i,n,r,s,l,o,c,u,d)}particleCylinder(t,e,n,i,s,r,o,l,c,u,d){return this.convexParticle(e,t,i,n,r,s,l,o,c,u,d)}sphereTrimesh(t,e,n,i,s,r,o,l,c,u,d){const h=Yx,m=$x,g=Zx,f=Kx,p=Jx,_=Qx,v=iy,w=jx,b=qx,x=sy;Ot.pointToLocalFrame(i,r,n,p);const M=t.radius;v.lowerBound.set(p.x-M,p.y-M,p.z-M),v.upperBound.set(p.x+M,p.y+M,p.z+M),e.getTrianglesInAABB(v,x);const C=Xx,y=t.radius*t.radius;for(let F=0;F<x.length;F++)for(let R=0;R<3;R++)if(e.getVertex(e.indices[x[F]*3+R],C),C.vsub(p,b),b.lengthSquared()<=y){if(w.copy(C),Ot.pointToWorldFrame(i,r,w,C),C.vsub(n,b),d)return!0;let N=this.createContactEquation(o,l,t,e,c,u);N.ni.copy(b),N.ni.normalize(),N.ri.copy(N.ni),N.ri.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(o.position,N.ri),N.rj.copy(C),N.rj.vsub(l.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}for(let F=0;F<x.length;F++)for(let R=0;R<3;R++){e.getVertex(e.indices[x[F]*3+R],h),e.getVertex(e.indices[x[F]*3+(R+1)%3],m),m.vsub(h,g),p.vsub(m,_);const N=_.dot(g);p.vsub(h,_);let D=_.dot(g);if(D>0&&N<0&&(p.vsub(h,_),f.copy(g),f.normalize(),D=_.dot(f),f.scale(D,_),_.vadd(h,_),_.distanceTo(p)<t.radius)){if(d)return!0;const U=this.createContactEquation(o,l,t,e,c,u);_.vsub(p,U.ni),U.ni.normalize(),U.ni.scale(t.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(o.position,U.ri),Ot.pointToWorldFrame(i,r,_,_),_.vsub(l.position,U.rj),Ot.vectorToWorldFrame(r,U.ni,U.ni),Ot.vectorToWorldFrame(r,U.ri,U.ri),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}}const E=ty,I=ey,z=ny,j=Wx;for(let F=0,R=x.length;F!==R;F++){e.getTriangleVertices(x[F],E,I,z),e.getNormal(x[F],j),p.vsub(E,_);let N=_.dot(j);if(j.scale(N,_),p.vsub(_,_),N=_.distanceTo(p),re.pointInTriangle(_,E,I,z)&&N<t.radius){if(d)return!0;let D=this.createContactEquation(o,l,t,e,c,u);_.vsub(p,D.ni),D.ni.normalize(),D.ni.scale(t.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(o.position,D.ri),Ot.pointToWorldFrame(i,r,_,_),_.vsub(l.position,D.rj),Ot.vectorToWorldFrame(r,D.ni,D.ni),Ot.vectorToWorldFrame(r,D.ri,D.ri),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}}x.length=0}planeTrimesh(t,e,n,i,s,r,o,l,c,u,d){const h=new S,m=Vx;m.set(0,0,1),s.vmult(m,m);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,h);const f=new S;f.copy(h),Ot.pointToWorldFrame(i,r,f,h);const p=Gx;if(h.vsub(n,p),m.dot(p)<=0){if(d)return!0;const v=this.createContactEquation(o,l,t,e,c,u);v.ni.copy(m);const w=Hx;m.scale(p.dot(m),w),h.vsub(w,w),v.ri.copy(w),v.ri.vsub(o.position,v.ri),v.rj.copy(h),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const Pi=new S,Ms=new S,Es=new S,Ox=new S,Bx=new S,kx=new oe,Ux=new oe,Vx=new S,Gx=new S,Hx=new S,Wx=new S,qx=new S;new S;const Xx=new S,jx=new S,Yx=new S,$x=new S,Zx=new S,Kx=new S,Jx=new S,Qx=new S,ty=new S,ey=new S,ny=new S,iy=new Ye,sy=[],uo=new S,Ou=new S,ry=new S,oy=new S,ay=new S;function ly(a,t,e){let n=null;const i=a.length;for(let s=0;s!==i;s++){const r=a[s],o=ry;a[(s+1)%i].vsub(r,o);const l=oy;o.cross(t,l);const c=ay;e.vsub(r,c);const u=l.dot(c);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}const ho=new S,cy=new S,uy=new S,hy=new S,dy=[new S,new S,new S,new S,new S,new S],fy=new S,py=new S,my=new S,gy=new S,_y=new S,vy=new S,xy=new S,yy=new S,by=new S,wy=new S,Sy=new S,My=new S,Ey=new S,Ty=new S;new S;new S;const Cy=new S,Ay=new S,Ly=new S,Py=new S,Ry=new S,Dy=new S,Iy=new S,Fy=new S,zy=new S,Ny=new S,Bu=new oe,Oy=new S;new S;const By=new S,ku=new S,ky=new S,Uy=new S,Vy=new S,Gy=[0],Hy=new S,Wy=new S;class Uu{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let r=i.length-1;r>=s;r--)i[r+1]=i[r];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,r=i.length;let o=0;for(let l=0;l<s;l++){let c=!1;const u=n[l];for(;u>i[o];)o++;c=u===i[o],c||Vu(t,u)}o=0;for(let l=0;l<r;l++){let c=!1;const u=i[l];for(;u>n[o];)o++;c=n[o]===u,c||Vu(e,u)}}}function Vu(a,t){a.push((t&4294901760)>>16,t&65535)}const Ra=(a,t)=>a<t?`${a}-${t}`:`${t}-${a}`;class qy{constructor(){this.data={keys:[]}}get(t,e){const n=Ra(t,e);return this.data[n]}set(t,e,n){const i=Ra(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=Ra(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class Xy extends Xh{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new S,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new S,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Jv,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new Px,this.constraints=[],this.narrowphase=new Nx(this),this.collisionMatrix=new Tu,this.collisionMatrixPrevious=new Tu,this.bodyOverlapKeeper=new Uu,this.shapeOverlapKeeper=new Uu,this.contactmaterials=[],this.contactMaterialTable=new qy,this.defaultMaterial=new tr("default"),this.defaultContactMaterial=new ns(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof wo?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=re.ALL,n.from=t,n.to=e,n.callback=i,Da.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=re.ANY,n.from=t,n.to=e,n.result=i,Da.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=re.CLOSEST,n.from=t,n.to=e,n.result=i,Da.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof pt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const r=i[s];if(r.id===t)return r}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=de.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=de.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(de.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const r=this.accumulator/t;for(let o=0;o!==this.bodies.length;o++){const l=this.bodies[o];l.previousPosition.lerp(l.position,r,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,r,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=Ky,i=Jy,s=this.bodies.length,r=this.bodies,o=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,d=pt.DYNAMIC;let h=-1/0;const m=this.constraints,g=Zy;l.length();const f=l.x,p=l.y,_=l.z;let v=0;for(c&&(h=de.now()),v=0;v!==s;v++){const F=r[v];if(F.type===d){const R=F.force,N=F.mass;R.x+=N*f,R.y+=N*p,R.z+=N*_}}for(let F=0,R=this.subsystems.length;F!==R;F++)this.subsystems[F].update();c&&(h=de.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(u.broadphase=de.now()-h);let w=m.length;for(v=0;v!==w;v++){const F=m[v];if(!F.collideConnected)for(let R=n.length-1;R>=0;R-=1)(F.bodyA===n[R]&&F.bodyB===i[R]||F.bodyB===n[R]&&F.bodyA===i[R])&&(n.splice(R,1),i.splice(R,1))}this.collisionMatrixTick(),c&&(h=de.now());const b=$y,x=e.length;for(v=0;v!==x;v++)b.push(e[v]);e.length=0;const M=this.frictionEquations.length;for(v=0;v!==M;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,b,this.frictionEquations,g),c&&(u.narrowphase=de.now()-h),c&&(h=de.now()),v=0;v<this.frictionEquations.length;v++)o.addEquation(this.frictionEquations[v]);const C=e.length;for(let F=0;F!==C;F++){const R=e[F],N=R.bi,D=R.bj,V=R.si,U=R.sj;let B;if(N.material&&D.material?B=this.getContactMaterial(N.material,D.material)||this.defaultContactMaterial:B=this.defaultContactMaterial,B.friction,N.material&&D.material&&(N.material.friction>=0&&D.material.friction>=0&&N.material.friction*D.material.friction,N.material.restitution>=0&&D.material.restitution>=0&&(R.restitution=N.material.restitution*D.material.restitution)),o.addEquation(R),N.allowSleep&&N.type===pt.DYNAMIC&&N.sleepState===pt.SLEEPING&&D.sleepState===pt.AWAKE&&D.type!==pt.STATIC){const X=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),tt=D.sleepSpeedLimit**2;X>=tt*2&&(N.wakeUpAfterNarrowphase=!0)}if(D.allowSleep&&D.type===pt.DYNAMIC&&D.sleepState===pt.SLEEPING&&N.sleepState===pt.AWAKE&&N.type!==pt.STATIC){const X=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),tt=N.sleepSpeedLimit**2;X>=tt*2&&(D.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(N,D,!0),this.collisionMatrixPrevious.get(N,D)||(ar.body=D,ar.contact=R,N.dispatchEvent(ar),ar.body=N,D.dispatchEvent(ar)),this.bodyOverlapKeeper.set(N.id,D.id),this.shapeOverlapKeeper.set(V.id,U.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=de.now()-h,h=de.now()),v=0;v!==s;v++){const F=r[v];F.wakeUpAfterNarrowphase&&(F.wakeUp(),F.wakeUpAfterNarrowphase=!1)}for(w=m.length,v=0;v!==w;v++){const F=m[v];F.update();for(let R=0,N=F.equations.length;R!==N;R++){const D=F.equations[R];o.addEquation(D)}}o.solve(t,this),c&&(u.solve=de.now()-h),o.removeAllEquations();const y=Math.pow;for(v=0;v!==s;v++){const F=r[v];if(F.type&d){const R=y(1-F.linearDamping,t),N=F.velocity;N.scale(R,N);const D=F.angularVelocity;if(D){const V=y(1-F.angularDamping,t);D.scale(V,D)}}}this.dispatchEvent(Yy),c&&(h=de.now());const I=this.stepnumber%(this.quatNormalizeSkip+1)===0,z=this.quatNormalizeFast;for(v=0;v!==s;v++)r[v].integrate(t,I,z);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=de.now()-h),this.stepnumber+=1,this.dispatchEvent(jy);let j=!0;if(this.allowSleep)for(j=!1,v=0;v!==s;v++){const F=r[v];F.sleepTick(this.time),F.sleepState!==pt.SLEEPING&&(j=!0)}this.hasActiveBodies=j}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Gn,Hn),t){for(let s=0,r=Gn.length;s<r;s+=2)lr.bodyA=this.getBodyById(Gn[s]),lr.bodyB=this.getBodyById(Gn[s+1]),this.dispatchEvent(lr);lr.bodyA=lr.bodyB=null}if(e){for(let s=0,r=Hn.length;s<r;s+=2)cr.bodyA=this.getBodyById(Hn[s]),cr.bodyB=this.getBodyById(Hn[s+1]),this.dispatchEvent(cr);cr.bodyA=cr.bodyB=null}Gn.length=Hn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Gn,Hn),n){for(let s=0,r=Gn.length;s<r;s+=2){const o=this.getShapeById(Gn[s]),l=this.getShapeById(Gn[s+1]);Wn.shapeA=o,Wn.shapeB=l,o&&(Wn.bodyA=o.body),l&&(Wn.bodyB=l.body),this.dispatchEvent(Wn)}Wn.bodyA=Wn.bodyB=Wn.shapeA=Wn.shapeB=null}if(i){for(let s=0,r=Hn.length;s<r;s+=2){const o=this.getShapeById(Hn[s]),l=this.getShapeById(Hn[s+1]);qn.shapeA=o,qn.shapeB=l,o&&(qn.bodyA=o.body),l&&(qn.bodyB=l.body),this.dispatchEvent(qn)}qn.bodyA=qn.bodyB=qn.shapeA=qn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Ye;const Da=new re,de=globalThis.performance||{};if(!de.now){let a=Date.now();de.timing&&de.timing.navigationStart&&(a=de.timing.navigationStart),de.now=()=>Date.now()-a}new S;const jy={type:"postStep"},Yy={type:"preStep"},ar={type:pt.COLLIDE_EVENT_NAME,body:null,contact:null},$y=[],Zy=[],Ky=[],Jy=[],Gn=[],Hn=[],lr={type:"beginContact",bodyA:null,bodyB:null},cr={type:"endContact",bodyA:null,bodyB:null},Wn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},qn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Gu={type:"change"},Ia={type:"start"},Hu={type:"end"};class Qy extends ts{constructor(t,e){super(),e===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),e===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ls.ROTATE,MIDDLE:ls.DOLLY,RIGHT:ls.PAN},this.touches={ONE:cs.ROTATE,TWO:cs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",Be),this._domElementKeyEvents=A},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Gu),n.update(),s=i.NONE},this.update=function(){const A=new k,et=new Zi().setFromUnitVectors(t.up,new k(0,1,0)),rt=et.clone().invert(),ht=new k,ct=new Zi,bt=2*Math.PI;return function(){const jt=n.object.position;A.copy(jt).sub(n.target),A.applyQuaternion(et),o.setFromVector3(A),n.autoRotate&&s===i.NONE&&E(C()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let O=n.minAzimuthAngle,at=n.maxAzimuthAngle;return isFinite(O)&&isFinite(at)&&(O<-Math.PI?O+=bt:O>Math.PI&&(O-=bt),at<-Math.PI?at+=bt:at>Math.PI&&(at-=bt),O<=at?o.theta=Math.max(O,Math.min(at,o.theta)):o.theta=o.theta>(O+at)/2?Math.max(O,o.theta):Math.min(at,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),A.setFromSpherical(o),A.applyQuaternion(rt),jt.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,d||ht.distanceToSquared(n.object.position)>r||8*(1-ct.dot(n.object.quaternion))>r?(n.dispatchEvent(Gu),ht.copy(n.object.position),ct.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Z),n.domElement.removeEventListener("pointerdown",ne),n.domElement.removeEventListener("pointercancel",Oe),n.domElement.removeEventListener("wheel",$e),n.domElement.removeEventListener("pointermove",xe),n.domElement.removeEventListener("pointerup",ce),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Be)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const r=1e-6,o=new wu,l=new wu;let c=1;const u=new k;let d=!1;const h=new Et,m=new Et,g=new Et,f=new Et,p=new Et,_=new Et,v=new Et,w=new Et,b=new Et,x=[],M={};function C(){return 2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function E(A){l.theta-=A}function I(A){l.phi-=A}const z=function(){const A=new k;return function(rt,ht){A.setFromMatrixColumn(ht,0),A.multiplyScalar(-rt),u.add(A)}}(),j=function(){const A=new k;return function(rt,ht){n.screenSpacePanning===!0?A.setFromMatrixColumn(ht,1):(A.setFromMatrixColumn(ht,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(rt),u.add(A)}}(),F=function(){const A=new k;return function(rt,ht){const ct=n.domElement;if(n.object.isPerspectiveCamera){const bt=n.object.position;A.copy(bt).sub(n.target);let Pt=A.length();Pt*=Math.tan(n.object.fov/2*Math.PI/180),z(2*rt*Pt/ct.clientHeight,n.object.matrix),j(2*ht*Pt/ct.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z(rt*(n.object.right-n.object.left)/n.object.zoom/ct.clientWidth,n.object.matrix),j(ht*(n.object.top-n.object.bottom)/n.object.zoom/ct.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(A){n.object.isPerspectiveCamera?c/=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*A)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(A){n.object.isPerspectiveCamera?c*=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/A)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function D(A){h.set(A.clientX,A.clientY)}function V(A){v.set(A.clientX,A.clientY)}function U(A){f.set(A.clientX,A.clientY)}function B(A){m.set(A.clientX,A.clientY),g.subVectors(m,h).multiplyScalar(n.rotateSpeed);const et=n.domElement;E(2*Math.PI*g.x/et.clientHeight),I(2*Math.PI*g.y/et.clientHeight),h.copy(m),n.update()}function X(A){w.set(A.clientX,A.clientY),b.subVectors(w,v),b.y>0?R(y()):b.y<0&&N(y()),v.copy(w),n.update()}function tt(A){p.set(A.clientX,A.clientY),_.subVectors(p,f).multiplyScalar(n.panSpeed),F(_.x,_.y),f.copy(p),n.update()}function W(A){A.deltaY<0?N(y()):A.deltaY>0&&R(y()),n.update()}function nt(A){let et=!1;switch(A.code){case n.keys.UP:F(0,n.keyPanSpeed),et=!0;break;case n.keys.BOTTOM:F(0,-n.keyPanSpeed),et=!0;break;case n.keys.LEFT:F(n.keyPanSpeed,0),et=!0;break;case n.keys.RIGHT:F(-n.keyPanSpeed,0),et=!0;break}et&&(A.preventDefault(),n.update())}function ot(){if(x.length===1)h.set(x[0].pageX,x[0].pageY);else{const A=.5*(x[0].pageX+x[1].pageX),et=.5*(x[0].pageY+x[1].pageY);h.set(A,et)}}function _t(){if(x.length===1)f.set(x[0].pageX,x[0].pageY);else{const A=.5*(x[0].pageX+x[1].pageX),et=.5*(x[0].pageY+x[1].pageY);f.set(A,et)}}function K(){const A=x[0].pageX-x[1].pageX,et=x[0].pageY-x[1].pageY,rt=Math.sqrt(A*A+et*et);v.set(0,rt)}function It(){n.enableZoom&&K(),n.enablePan&&_t()}function xt(){n.enableZoom&&K(),n.enableRotate&&ot()}function wt(A){if(x.length==1)m.set(A.pageX,A.pageY);else{const rt=yt(A),ht=.5*(A.pageX+rt.x),ct=.5*(A.pageY+rt.y);m.set(ht,ct)}g.subVectors(m,h).multiplyScalar(n.rotateSpeed);const et=n.domElement;E(2*Math.PI*g.x/et.clientHeight),I(2*Math.PI*g.y/et.clientHeight),h.copy(m)}function mt(A){if(x.length===1)p.set(A.pageX,A.pageY);else{const et=yt(A),rt=.5*(A.pageX+et.x),ht=.5*(A.pageY+et.y);p.set(rt,ht)}_.subVectors(p,f).multiplyScalar(n.panSpeed),F(_.x,_.y),f.copy(p)}function Ut(A){const et=yt(A),rt=A.pageX-et.x,ht=A.pageY-et.y,ct=Math.sqrt(rt*rt+ht*ht);w.set(0,ct),b.set(0,Math.pow(w.y/v.y,n.zoomSpeed)),R(b.y),v.copy(w)}function Tt(A){n.enableZoom&&Ut(A),n.enablePan&&mt(A)}function vt(A){n.enableZoom&&Ut(A),n.enableRotate&&wt(A)}function ne(A){n.enabled!==!1&&(x.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",xe),n.domElement.addEventListener("pointerup",ce)),it(A),A.pointerType==="touch"?P(A):ue(A))}function xe(A){n.enabled!==!1&&(A.pointerType==="touch"?T(A):Vt(A))}function ce(A){st(A),x.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",xe),n.domElement.removeEventListener("pointerup",ce)),n.dispatchEvent(Hu),s=i.NONE}function Oe(A){st(A)}function ue(A){let et;switch(A.button){case 0:et=n.mouseButtons.LEFT;break;case 1:et=n.mouseButtons.MIDDLE;break;case 2:et=n.mouseButtons.RIGHT;break;default:et=-1}switch(et){case ls.DOLLY:if(n.enableZoom===!1)return;V(A),s=i.DOLLY;break;case ls.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;U(A),s=i.PAN}else{if(n.enableRotate===!1)return;D(A),s=i.ROTATE}break;case ls.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;D(A),s=i.ROTATE}else{if(n.enablePan===!1)return;U(A),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ia)}function Vt(A){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;B(A);break;case i.DOLLY:if(n.enableZoom===!1)return;X(A);break;case i.PAN:if(n.enablePan===!1)return;tt(A);break}}function $e(A){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(A.preventDefault(),n.dispatchEvent(Ia),W(A),n.dispatchEvent(Hu))}function Be(A){n.enabled===!1||n.enablePan===!1||nt(A)}function P(A){switch(ut(A),x.length){case 1:switch(n.touches.ONE){case cs.ROTATE:if(n.enableRotate===!1)return;ot(),s=i.TOUCH_ROTATE;break;case cs.PAN:if(n.enablePan===!1)return;_t(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case cs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;It(),s=i.TOUCH_DOLLY_PAN;break;case cs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xt(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ia)}function T(A){switch(ut(A),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;wt(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;mt(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Tt(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;vt(A),n.update();break;default:s=i.NONE}}function Z(A){n.enabled!==!1&&A.preventDefault()}function it(A){x.push(A)}function st(A){delete M[A.pointerId];for(let et=0;et<x.length;et++)if(x[et].pointerId==A.pointerId){x.splice(et,1);return}}function ut(A){let et=M[A.pointerId];et===void 0&&(et=new Et,M[A.pointerId]=et),et.set(A.pageX,A.pageY)}function yt(A){const et=A.pointerId===x[0].pointerId?x[1]:x[0];return M[et.pointerId]}n.domElement.addEventListener("contextmenu",Z),n.domElement.addEventListener("pointerdown",ne),n.domElement.addEventListener("pointercancel",Oe),n.domElement.addEventListener("wheel",$e,{passive:!1}),this.update()}}function tb(a){if(!!a&&!(typeof window>"u")){var t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=a,document.head.appendChild(t),a}}function Ds(a,t){var e=a.__state.conversionName.toString(),n=Math.round(a.r),i=Math.round(a.g),s=Math.round(a.b),r=a.a,o=Math.round(a.h),l=a.s.toFixed(1),c=a.v.toFixed(1);if(t||e==="THREE_CHAR_HEX"||e==="SIX_CHAR_HEX"){for(var u=a.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(e==="CSS_RGB")return"rgb("+n+","+i+","+s+")";if(e==="CSS_RGBA")return"rgba("+n+","+i+","+s+","+r+")";if(e==="HEX")return"0x"+a.hex.toString(16);if(e==="RGB_ARRAY")return"["+n+","+i+","+s+"]";if(e==="RGBA_ARRAY")return"["+n+","+i+","+s+","+r+"]";if(e==="RGB_OBJ")return"{r:"+n+",g:"+i+",b:"+s+"}";if(e==="RGBA_OBJ")return"{r:"+n+",g:"+i+",b:"+s+",a:"+r+"}";if(e==="HSV_OBJ")return"{h:"+o+",s:"+l+",v:"+c+"}";if(e==="HSVA_OBJ")return"{h:"+o+",s:"+l+",v:"+c+",a:"+r+"}"}return"unknown format"}var Wu=Array.prototype.forEach,ur=Array.prototype.slice,J={BREAK:{},extend:function(t){return this.each(ur.call(arguments,1),function(e){var n=this.isObject(e)?Object.keys(e):[];n.forEach(function(i){this.isUndefined(e[i])||(t[i]=e[i])}.bind(this))},this),t},defaults:function(t){return this.each(ur.call(arguments,1),function(e){var n=this.isObject(e)?Object.keys(e):[];n.forEach(function(i){this.isUndefined(t[i])&&(t[i]=e[i])}.bind(this))},this),t},compose:function(){var t=ur.call(arguments);return function(){for(var e=ur.call(arguments),n=t.length-1;n>=0;n--)e=[t[n].apply(this,e)];return e[0]}},each:function(t,e,n){if(!!t){if(Wu&&t.forEach&&t.forEach===Wu)t.forEach(e,n);else if(t.length===t.length+0){var i=void 0,s=void 0;for(i=0,s=t.length;i<s;i++)if(i in t&&e.call(n,t[i],i)===this.BREAK)return}else for(var r in t)if(e.call(n,t[r],r)===this.BREAK)return}},defer:function(t){setTimeout(t,0)},debounce:function(t,e,n){var i=void 0;return function(){var s=this,r=arguments;function o(){i=null,n||t.apply(s,r)}var l=n||!i;clearTimeout(i),i=setTimeout(o,e),l&&t.apply(s,r)}},toArray:function(t){return t.toArray?t.toArray():ur.call(t)},isUndefined:function(t){return t===void 0},isNull:function(t){return t===null},isNaN:function(a){function t(e){return a.apply(this,arguments)}return t.toString=function(){return a.toString()},t}(function(a){return isNaN(a)}),isArray:Array.isArray||function(a){return a.constructor===Array},isObject:function(t){return t===Object(t)},isNumber:function(t){return t===t+0},isString:function(t){return t===t+""},isBoolean:function(t){return t===!1||t===!0},isFunction:function(t){return t instanceof Function}},eb=[{litmus:J.isString,conversions:{THREE_CHAR_HEX:{read:function(t){var e=t.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return e===null?!1:{space:"HEX",hex:parseInt("0x"+e[1].toString()+e[1].toString()+e[2].toString()+e[2].toString()+e[3].toString()+e[3].toString(),0)}},write:Ds},SIX_CHAR_HEX:{read:function(t){var e=t.match(/^#([A-F0-9]{6})$/i);return e===null?!1:{space:"HEX",hex:parseInt("0x"+e[1].toString(),0)}},write:Ds},CSS_RGB:{read:function(t){var e=t.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return e===null?!1:{space:"RGB",r:parseFloat(e[1]),g:parseFloat(e[2]),b:parseFloat(e[3])}},write:Ds},CSS_RGBA:{read:function(t){var e=t.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return e===null?!1:{space:"RGB",r:parseFloat(e[1]),g:parseFloat(e[2]),b:parseFloat(e[3]),a:parseFloat(e[4])}},write:Ds}}},{litmus:J.isNumber,conversions:{HEX:{read:function(t){return{space:"HEX",hex:t,conversionName:"HEX"}},write:function(t){return t.hex}}}},{litmus:J.isArray,conversions:{RGB_ARRAY:{read:function(t){return t.length!==3?!1:{space:"RGB",r:t[0],g:t[1],b:t[2]}},write:function(t){return[t.r,t.g,t.b]}},RGBA_ARRAY:{read:function(t){return t.length!==4?!1:{space:"RGB",r:t[0],g:t[1],b:t[2],a:t[3]}},write:function(t){return[t.r,t.g,t.b,t.a]}}}},{litmus:J.isObject,conversions:{RGBA_OBJ:{read:function(t){return J.isNumber(t.r)&&J.isNumber(t.g)&&J.isNumber(t.b)&&J.isNumber(t.a)?{space:"RGB",r:t.r,g:t.g,b:t.b,a:t.a}:!1},write:function(t){return{r:t.r,g:t.g,b:t.b,a:t.a}}},RGB_OBJ:{read:function(t){return J.isNumber(t.r)&&J.isNumber(t.g)&&J.isNumber(t.b)?{space:"RGB",r:t.r,g:t.g,b:t.b}:!1},write:function(t){return{r:t.r,g:t.g,b:t.b}}},HSVA_OBJ:{read:function(t){return J.isNumber(t.h)&&J.isNumber(t.s)&&J.isNumber(t.v)&&J.isNumber(t.a)?{space:"HSV",h:t.h,s:t.s,v:t.v,a:t.a}:!1},write:function(t){return{h:t.h,s:t.s,v:t.v,a:t.a}}},HSV_OBJ:{read:function(t){return J.isNumber(t.h)&&J.isNumber(t.s)&&J.isNumber(t.v)?{space:"HSV",h:t.h,s:t.s,v:t.v}:!1},write:function(t){return{h:t.h,s:t.s,v:t.v}}}}}],hr=void 0,fo=void 0,tl=function(){fo=!1;var t=arguments.length>1?J.toArray(arguments):arguments[0];return J.each(eb,function(e){if(e.litmus(t))return J.each(e.conversions,function(n,i){if(hr=n.read(t),fo===!1&&hr!==!1)return fo=hr,hr.conversionName=i,hr.conversion=n,J.BREAK}),J.BREAK}),fo},qu=void 0,So={hsv_to_rgb:function(t,e,n){var i=Math.floor(t/60)%6,s=t/60-Math.floor(t/60),r=n*(1-e),o=n*(1-s*e),l=n*(1-(1-s)*e),c=[[n,l,r],[o,n,r],[r,n,l],[r,o,n],[l,r,n],[n,r,o]][i];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(t,e,n){var i=Math.min(t,e,n),s=Math.max(t,e,n),r=s-i,o=void 0,l=void 0;if(s!==0)l=r/s;else return{h:NaN,s:0,v:0};return t===s?o=(e-n)/r:e===s?o=2+(n-t)/r:o=4+(t-e)/r,o/=6,o<0&&(o+=1),{h:o*360,s:l,v:s/255}},rgb_to_hex:function(t,e,n){var i=this.hex_with_component(0,2,t);return i=this.hex_with_component(i,1,e),i=this.hex_with_component(i,0,n),i},component_from_hex:function(t,e){return t>>e*8&255},hex_with_component:function(t,e,n){return n<<(qu=e*8)|t&~(255<<qu)}},nb=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},yn=function(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")},bn=function(){function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}}(),yi=function a(t,e,n){t===null&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,e);if(i===void 0){var s=Object.getPrototypeOf(t);return s===null?void 0:a(s,e,n)}else{if("value"in i)return i.value;var r=i.get;return r===void 0?void 0:r.call(n)}},wi=function(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(a,t):a.__proto__=t)},Si=function(a,t){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:a},_e=function(){function a(){if(yn(this,a),this.__state=tl.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return bn(a,[{key:"toString",value:function(){return Ds(this)}},{key:"toHexString",value:function(){return Ds(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),a}();function Dl(a,t,e){Object.defineProperty(a,t,{get:function(){return this.__state.space==="RGB"?this.__state[t]:(_e.recalculateRGB(this,t,e),this.__state[t])},set:function(i){this.__state.space!=="RGB"&&(_e.recalculateRGB(this,t,e),this.__state.space="RGB"),this.__state[t]=i}})}function Il(a,t){Object.defineProperty(a,t,{get:function(){return this.__state.space==="HSV"?this.__state[t]:(_e.recalculateHSV(this),this.__state[t])},set:function(n){this.__state.space!=="HSV"&&(_e.recalculateHSV(this),this.__state.space="HSV"),this.__state[t]=n}})}_e.recalculateRGB=function(a,t,e){if(a.__state.space==="HEX")a.__state[t]=So.component_from_hex(a.__state.hex,e);else if(a.__state.space==="HSV")J.extend(a.__state,So.hsv_to_rgb(a.__state.h,a.__state.s,a.__state.v));else throw new Error("Corrupted color state")};_e.recalculateHSV=function(a){var t=So.rgb_to_hsv(a.r,a.g,a.b);J.extend(a.__state,{s:t.s,v:t.v}),J.isNaN(t.h)?J.isUndefined(a.__state.h)&&(a.__state.h=0):a.__state.h=t.h};_e.COMPONENTS=["r","g","b","h","s","v","hex","a"];Dl(_e.prototype,"r",2);Dl(_e.prototype,"g",1);Dl(_e.prototype,"b",0);Il(_e.prototype,"h");Il(_e.prototype,"s");Il(_e.prototype,"v");Object.defineProperty(_e.prototype,"a",{get:function(){return this.__state.a},set:function(t){this.__state.a=t}});Object.defineProperty(_e.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=So.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(t){this.__state.space="HEX",this.__state.hex=t}});var is=function(){function a(t,e){yn(this,a),this.initialValue=t[e],this.domElement=document.createElement("div"),this.object=t,this.property=e,this.__onChange=void 0,this.__onFinishChange=void 0}return bn(a,[{key:"onChange",value:function(e){return this.__onChange=e,this}},{key:"onFinishChange",value:function(e){return this.__onFinishChange=e,this}},{key:"setValue",value:function(e){return this.object[this.property]=e,this.__onChange&&this.__onChange.call(this,e),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),a}(),ib={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},ed={};J.each(ib,function(a,t){J.each(a,function(e){ed[e]=t})});var sb=/(\d+(\.\d+)?)px/;function Tn(a){if(a==="0"||J.isUndefined(a))return 0;var t=a.match(sb);return J.isNull(t)?0:parseFloat(t[1])}var H={makeSelectable:function(t,e){t===void 0||t.style===void 0||(t.onselectstart=e?function(){return!1}:function(){},t.style.MozUserSelect=e?"auto":"none",t.style.KhtmlUserSelect=e?"auto":"none",t.unselectable=e?"on":"off")},makeFullscreen:function(t,e,n){var i=n,s=e;J.isUndefined(s)&&(s=!0),J.isUndefined(i)&&(i=!0),t.style.position="absolute",s&&(t.style.left=0,t.style.right=0),i&&(t.style.top=0,t.style.bottom=0)},fakeEvent:function(t,e,n,i){var s=n||{},r=ed[e];if(!r)throw new Error("Event type "+e+" not supported.");var o=document.createEvent(r);switch(r){case"MouseEvents":{var l=s.x||s.clientX||0,c=s.y||s.clientY||0;o.initMouseEvent(e,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=o.initKeyboardEvent||o.initKeyEvent;J.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(e,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{o.initEvent(e,s.bubbles||!1,s.cancelable||!0);break}}J.defaults(o,i),t.dispatchEvent(o)},bind:function(t,e,n,i){var s=i||!1;return t.addEventListener?t.addEventListener(e,n,s):t.attachEvent&&t.attachEvent("on"+e,n),H},unbind:function(t,e,n,i){var s=i||!1;return t.removeEventListener?t.removeEventListener(e,n,s):t.detachEvent&&t.detachEvent("on"+e,n),H},addClass:function(t,e){if(t.className===void 0)t.className=e;else if(t.className!==e){var n=t.className.split(/ +/);n.indexOf(e)===-1&&(n.push(e),t.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return H},removeClass:function(t,e){if(e)if(t.className===e)t.removeAttribute("class");else{var n=t.className.split(/ +/),i=n.indexOf(e);i!==-1&&(n.splice(i,1),t.className=n.join(" "))}else t.className=void 0;return H},hasClass:function(t,e){return new RegExp("(?:^|\\s+)"+e+"(?:\\s+|$)").test(t.className)||!1},getWidth:function(t){var e=getComputedStyle(t);return Tn(e["border-left-width"])+Tn(e["border-right-width"])+Tn(e["padding-left"])+Tn(e["padding-right"])+Tn(e.width)},getHeight:function(t){var e=getComputedStyle(t);return Tn(e["border-top-width"])+Tn(e["border-bottom-width"])+Tn(e["padding-top"])+Tn(e["padding-bottom"])+Tn(e.height)},getOffset:function(t){var e=t,n={left:0,top:0};if(e.offsetParent)do n.left+=e.offsetLeft,n.top+=e.offsetTop,e=e.offsetParent;while(e);return n},isActive:function(t){return t===document.activeElement&&(t.type||t.href)}},nd=function(a){wi(t,a);function t(e,n){yn(this,t);var i=Si(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),s=i;i.__prev=i.getValue(),i.__checkbox=document.createElement("input"),i.__checkbox.setAttribute("type","checkbox");function r(){s.setValue(!s.__prev)}return H.bind(i.__checkbox,"change",r,!1),i.domElement.appendChild(i.__checkbox),i.updateDisplay(),i}return bn(t,[{key:"setValue",value:function(n){var i=yi(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),i}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),yi(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(is),rb=function(a){wi(t,a);function t(e,n,i){yn(this,t);var s=Si(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),r=i,o=s;if(s.__select=document.createElement("select"),J.isArray(r)){var l={};J.each(r,function(c){l[c]=c}),r=l}return J.each(r,function(c,u){var d=document.createElement("option");d.innerHTML=u,d.setAttribute("value",c),o.__select.appendChild(d)}),s.updateDisplay(),H.bind(s.__select,"change",function(){var c=this.options[this.selectedIndex].value;o.setValue(c)}),s.domElement.appendChild(s.__select),s}return bn(t,[{key:"setValue",value:function(n){var i=yi(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),i}},{key:"updateDisplay",value:function(){return H.isActive(this.__select)?this:(this.__select.value=this.getValue(),yi(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this))}}]),t}(is),ob=function(a){wi(t,a);function t(e,n){yn(this,t);var i=Si(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),s=i;function r(){s.setValue(s.__input.value)}function o(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return i.__input=document.createElement("input"),i.__input.setAttribute("type","text"),H.bind(i.__input,"keyup",r),H.bind(i.__input,"change",r),H.bind(i.__input,"blur",o),H.bind(i.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),i.updateDisplay(),i.domElement.appendChild(i.__input),i}return bn(t,[{key:"updateDisplay",value:function(){return H.isActive(this.__input)||(this.__input.value=this.getValue()),yi(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(is);function Xu(a){var t=a.toString();return t.indexOf(".")>-1?t.length-t.indexOf(".")-1:0}var id=function(a){wi(t,a);function t(e,n,i){yn(this,t);var s=Si(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),r=i||{};return s.__min=r.min,s.__max=r.max,s.__step=r.step,J.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=Xu(s.__impliedStep),s}return bn(t,[{key:"setValue",value:function(n){var i=n;return this.__min!==void 0&&i<this.__min?i=this.__min:this.__max!==void 0&&i>this.__max&&(i=this.__max),this.__step!==void 0&&i%this.__step!==0&&(i=Math.round(i/this.__step)*this.__step),yi(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,i)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=Xu(n),this}}]),t}(is);function ab(a,t){var e=Math.pow(10,t);return Math.round(a*e)/e}var Mo=function(a){wi(t,a);function t(e,n,i){yn(this,t);var s=Si(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,i));s.__truncationSuspended=!1;var r=s,o=void 0;function l(){var g=parseFloat(r.__input.value);J.isNaN(g)||r.setValue(g)}function c(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}function u(){c()}function d(g){var f=o-g.clientY;r.setValue(r.getValue()+f*r.__impliedStep),o=g.clientY}function h(){H.unbind(window,"mousemove",d),H.unbind(window,"mouseup",h),c()}function m(g){H.bind(window,"mousemove",d),H.bind(window,"mouseup",h),o=g.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),H.bind(s.__input,"change",l),H.bind(s.__input,"blur",u),H.bind(s.__input,"mousedown",m),H.bind(s.__input,"keydown",function(g){g.keyCode===13&&(r.__truncationSuspended=!0,this.blur(),r.__truncationSuspended=!1,c())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return bn(t,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():ab(this.getValue(),this.__precision),yi(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(id);function ju(a,t,e,n,i){return n+(i-n)*((a-t)/(e-t))}var el=function(a){wi(t,a);function t(e,n,i,s,r){yn(this,t);var o=Si(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,{min:i,max:s,step:r})),l=o;o.__background=document.createElement("div"),o.__foreground=document.createElement("div"),H.bind(o.__background,"mousedown",c),H.bind(o.__background,"touchstart",h),H.addClass(o.__background,"slider"),H.addClass(o.__foreground,"slider-fg");function c(f){document.activeElement.blur(),H.bind(window,"mousemove",u),H.bind(window,"mouseup",d),u(f)}function u(f){f.preventDefault();var p=l.__background.getBoundingClientRect();return l.setValue(ju(f.clientX,p.left,p.right,l.__min,l.__max)),!1}function d(){H.unbind(window,"mousemove",u),H.unbind(window,"mouseup",d),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function h(f){f.touches.length===1&&(H.bind(window,"touchmove",m),H.bind(window,"touchend",g),m(f))}function m(f){var p=f.touches[0].clientX,_=l.__background.getBoundingClientRect();l.setValue(ju(p,_.left,_.right,l.__min,l.__max))}function g(){H.unbind(window,"touchmove",m),H.unbind(window,"touchend",g),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return bn(t,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",yi(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(id),sd=function(a){wi(t,a);function t(e,n,i){yn(this,t);var s=Si(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n)),r=s;return s.__button=document.createElement("div"),s.__button.innerHTML=i===void 0?"Fire":i,H.bind(s.__button,"click",function(o){return o.preventDefault(),r.fire(),!1}),H.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return bn(t,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),t}(is),nl=function(a){wi(t,a);function t(e,n){yn(this,t);var i=Si(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));i.__color=new _e(i.getValue()),i.__temp=new _e(0);var s=i;i.domElement=document.createElement("div"),H.makeSelectable(i.domElement,!1),i.__selector=document.createElement("div"),i.__selector.className="selector",i.__saturation_field=document.createElement("div"),i.__saturation_field.className="saturation-field",i.__field_knob=document.createElement("div"),i.__field_knob.className="field-knob",i.__field_knob_border="2px solid ",i.__hue_knob=document.createElement("div"),i.__hue_knob.className="hue-knob",i.__hue_field=document.createElement("div"),i.__hue_field.className="hue-field",i.__input=document.createElement("input"),i.__input.type="text",i.__input_textShadow="0 1px 1px ",H.bind(i.__input,"keydown",function(f){f.keyCode===13&&d.call(this)}),H.bind(i.__input,"blur",d),H.bind(i.__selector,"mousedown",function(){H.addClass(this,"drag").bind(window,"mouseup",function(){H.removeClass(s.__selector,"drag")})}),H.bind(i.__selector,"touchstart",function(){H.addClass(this,"drag").bind(window,"touchend",function(){H.removeClass(s.__selector,"drag")})});var r=document.createElement("div");J.extend(i.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),J.extend(i.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:i.__field_knob_border+(i.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),J.extend(i.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),J.extend(i.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),J.extend(r.style,{width:"100%",height:"100%",background:"none"}),Yu(r,"top","rgba(0,0,0,0)","#000"),J.extend(i.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),cb(i.__hue_field),J.extend(i.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:i.__input_textShadow+"rgba(0,0,0,0.7)"}),H.bind(i.__saturation_field,"mousedown",o),H.bind(i.__saturation_field,"touchstart",o),H.bind(i.__field_knob,"mousedown",o),H.bind(i.__field_knob,"touchstart",o),H.bind(i.__hue_field,"mousedown",l),H.bind(i.__hue_field,"touchstart",l);function o(f){m(f),H.bind(window,"mousemove",m),H.bind(window,"touchmove",m),H.bind(window,"mouseup",c),H.bind(window,"touchend",c)}function l(f){g(f),H.bind(window,"mousemove",g),H.bind(window,"touchmove",g),H.bind(window,"mouseup",u),H.bind(window,"touchend",u)}function c(){H.unbind(window,"mousemove",m),H.unbind(window,"touchmove",m),H.unbind(window,"mouseup",c),H.unbind(window,"touchend",c),h()}function u(){H.unbind(window,"mousemove",g),H.unbind(window,"touchmove",g),H.unbind(window,"mouseup",u),H.unbind(window,"touchend",u),h()}function d(){var f=tl(this.value);f!==!1?(s.__color.__state=f,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function h(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}i.__saturation_field.appendChild(r),i.__selector.appendChild(i.__field_knob),i.__selector.appendChild(i.__saturation_field),i.__selector.appendChild(i.__hue_field),i.__hue_field.appendChild(i.__hue_knob),i.domElement.appendChild(i.__input),i.domElement.appendChild(i.__selector),i.updateDisplay();function m(f){f.type.indexOf("touch")===-1&&f.preventDefault();var p=s.__saturation_field.getBoundingClientRect(),_=f.touches&&f.touches[0]||f,v=_.clientX,w=_.clientY,b=(v-p.left)/(p.right-p.left),x=1-(w-p.top)/(p.bottom-p.top);return x>1?x=1:x<0&&(x=0),b>1?b=1:b<0&&(b=0),s.__color.v=x,s.__color.s=b,s.setValue(s.__color.toOriginal()),!1}function g(f){f.type.indexOf("touch")===-1&&f.preventDefault();var p=s.__hue_field.getBoundingClientRect(),_=f.touches&&f.touches[0]||f,v=_.clientY,w=1-(v-p.top)/(p.bottom-p.top);return w>1?w=1:w<0&&(w=0),s.__color.h=w*360,s.setValue(s.__color.toOriginal()),!1}return i}return bn(t,[{key:"updateDisplay",value:function(){var n=tl(this.getValue());if(n!==!1){var i=!1;J.each(_e.COMPONENTS,function(o){if(!J.isUndefined(n[o])&&!J.isUndefined(this.__color.__state[o])&&n[o]!==this.__color.__state[o])return i=!0,{}},this),i&&J.extend(this.__color.__state,n)}J.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,r=255-s;J.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Yu(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),J.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+r+","+r+","+r+",.7)"})}}]),t}(is),lb=["-moz-","-o-","-webkit-","-ms-",""];function Yu(a,t,e,n){a.style.background="",J.each(lb,function(i){a.style.cssText+="background: "+i+"linear-gradient("+t+", "+e+" 0%, "+n+" 100%); "})}function cb(a){a.style.background="",a.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",a.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",a.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",a.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",a.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var ub={load:function(t,e){var n=e||document,i=n.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=t,n.getElementsByTagName("head")[0].appendChild(i)},inject:function(t,e){var n=e||document,i=document.createElement("style");i.type="text/css",i.innerHTML=t;var s=n.getElementsByTagName("head")[0];try{s.appendChild(i)}catch{}}},hb=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,db=function(t,e){var n=t[e];return J.isArray(arguments[2])||J.isObject(arguments[2])?new rb(t,e,arguments[2]):J.isNumber(n)?J.isNumber(arguments[2])&&J.isNumber(arguments[3])?J.isNumber(arguments[4])?new el(t,e,arguments[2],arguments[3],arguments[4]):new el(t,e,arguments[2],arguments[3]):J.isNumber(arguments[4])?new Mo(t,e,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Mo(t,e,{min:arguments[2],max:arguments[3]}):J.isString(n)?new ob(t,e):J.isFunction(n)?new sd(t,e,""):J.isBoolean(n)?new nd(t,e):null};function fb(a){setTimeout(a,1e3/60)}var pb=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||fb,mb=function(){function a(){yn(this,a),this.backgroundElement=document.createElement("div"),J.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),H.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),J.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var t=this;H.bind(this.backgroundElement,"click",function(){t.hide()})}return bn(a,[{key:"show",value:function(){var e=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),J.defer(function(){e.backgroundElement.style.opacity=1,e.domElement.style.opacity=1,e.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var e=this,n=function i(){e.domElement.style.display="none",e.backgroundElement.style.display="none",H.unbind(e.domElement,"webkitTransitionEnd",i),H.unbind(e.domElement,"transitionend",i),H.unbind(e.domElement,"oTransitionEnd",i)};H.bind(this.domElement,"webkitTransitionEnd",n),H.bind(this.domElement,"transitionend",n),H.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-H.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-H.getHeight(this.domElement)/2+"px"}}]),a}(),gb=tb(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);ub.inject(gb);var $u="dg",Zu=72,Ku=20,Cr="Default",mr=function(){try{return!!window.localStorage}catch{return!1}}(),xr=void 0,Ju=!0,As=void 0,Fa=!1,rd=[],Xt=function a(t){var e=this,n=t||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),H.addClass(this.domElement,$u),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=J.defaults(n,{closeOnTop:!1,autoPlace:!0,width:a.DEFAULT_WIDTH}),n=J.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),J.isUndefined(n.load)?n.load={preset:Cr}:n.preset&&(n.load.preset=n.preset),J.isUndefined(n.parent)&&n.hideable&&rd.push(this),n.resizable=J.isUndefined(n.parent)&&n.resizable,n.autoPlace&&J.isUndefined(n.scrollable)&&(n.scrollable=!0);var i=mr&&localStorage.getItem(Ls(this,"isLocal"))==="true",s=void 0,r=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return e.parent?e.getRoot().preset:n.load.preset},set:function(h){e.parent?e.getRoot().preset=h:n.load.preset=h,yb(this),e.revert()}},width:{get:function(){return n.width},set:function(h){n.width=h,rl(e,h)}},name:{get:function(){return n.name},set:function(h){n.name=h,r&&(r.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(h){n.closed=h,n.closed?H.addClass(e.__ul,a.CLASS_CLOSED):H.removeClass(e.__ul,a.CLASS_CLOSED),this.onResize(),e.__closeButton&&(e.__closeButton.innerHTML=h?a.TEXT_OPEN:a.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return i},set:function(h){mr&&(i=h,h?H.bind(window,"unload",s):H.unbind(window,"unload",s),localStorage.setItem(Ls(e,"isLocal"),h))}}}),J.isUndefined(n.parent)){if(this.closed=n.closed||!1,H.addClass(this.domElement,a.CLASS_MAIN),H.makeSelectable(this.domElement,!1),mr&&i){e.useLocalStorage=!0;var o=localStorage.getItem(Ls(this,"gui"));o&&(n.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=a.TEXT_CLOSED,H.addClass(this.__closeButton,a.CLASS_CLOSE_BUTTON),n.closeOnTop?(H.addClass(this.__closeButton,a.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(H.addClass(this.__closeButton,a.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),H.bind(this.__closeButton,"click",function(){e.closed=!e.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);H.addClass(l,"controller-name"),r=Fl(e,l);var c=function(h){return h.preventDefault(),e.closed=!e.closed,!1};H.addClass(this.__ul,a.CLASS_CLOSED),H.addClass(r,"title"),H.bind(r,"click",c),n.closed||(this.closed=!1)}n.autoPlace&&(J.isUndefined(n.parent)&&(Ju&&(As=document.createElement("div"),H.addClass(As,$u),H.addClass(As,a.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(As),Ju=!1),As.appendChild(this.domElement),H.addClass(this.domElement,a.CLASS_AUTO_PLACE)),this.parent||rl(e,n.width)),this.__resizeHandler=function(){e.onResizeDebounced()},H.bind(window,"resize",this.__resizeHandler),H.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),H.bind(this.__ul,"transitionend",this.__resizeHandler),H.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&xb(this),s=function(){mr&&localStorage.getItem(Ls(e,"isLocal"))==="true"&&localStorage.setItem(Ls(e,"gui"),JSON.stringify(e.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function u(){var d=e.getRoot();d.width+=1,J.defer(function(){d.width-=1})}n.parent||u()};Xt.toggleHide=function(){Fa=!Fa,J.each(rd,function(a){a.domElement.style.display=Fa?"none":""})};Xt.CLASS_AUTO_PLACE="a";Xt.CLASS_AUTO_PLACE_CONTAINER="ac";Xt.CLASS_MAIN="main";Xt.CLASS_CONTROLLER_ROW="cr";Xt.CLASS_TOO_TALL="taller-than-window";Xt.CLASS_CLOSED="closed";Xt.CLASS_CLOSE_BUTTON="close-button";Xt.CLASS_CLOSE_TOP="close-top";Xt.CLASS_CLOSE_BOTTOM="close-bottom";Xt.CLASS_DRAG="drag";Xt.DEFAULT_WIDTH=245;Xt.TEXT_CLOSED="Close Controls";Xt.TEXT_OPEN="Open Controls";Xt._keydownHandler=function(a){document.activeElement.type!=="text"&&(a.which===Zu||a.keyCode===Zu)&&Xt.toggleHide()};H.bind(window,"keydown",Xt._keydownHandler,!1);J.extend(Xt.prototype,{add:function(t,e){return yr(this,t,e,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(t,e){return yr(this,t,e,{color:!0})},remove:function(t){this.__ul.removeChild(t.__li),this.__controllers.splice(this.__controllers.indexOf(t),1);var e=this;J.defer(function(){e.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&As.removeChild(this.domElement);var t=this;J.each(this.__folders,function(e){t.removeFolder(e)}),H.unbind(window,"keydown",Xt._keydownHandler,!1),Qu(this)},addFolder:function(t){if(this.__folders[t]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+t+'"');var e={name:t,parent:this};e.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[t]&&(e.closed=this.load.folders[t].closed,e.load=this.load.folders[t]);var n=new Xt(e);this.__folders[t]=n;var i=Fl(this,n.domElement);return H.addClass(i,"folder"),n},removeFolder:function(t){this.__ul.removeChild(t.domElement.parentElement),delete this.__folders[t.name],this.load&&this.load.folders&&this.load.folders[t.name]&&delete this.load.folders[t.name],Qu(t);var e=this;J.each(t.__folders,function(n){t.removeFolder(n)}),J.defer(function(){e.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var t=this.getRoot();if(t.scrollable){var e=H.getOffset(t.__ul).top,n=0;J.each(t.__ul.childNodes,function(i){t.autoPlace&&i===t.__save_row||(n+=H.getHeight(i))}),window.innerHeight-e-Ku<n?(H.addClass(t.domElement,Xt.CLASS_TOO_TALL),t.__ul.style.height=window.innerHeight-e-Ku+"px"):(H.removeClass(t.domElement,Xt.CLASS_TOO_TALL),t.__ul.style.height="auto")}t.__resize_handle&&J.defer(function(){t.__resize_handle.style.height=t.__ul.offsetHeight+"px"}),t.__closeButton&&(t.__closeButton.style.width=t.width+"px")},onResizeDebounced:J.debounce(function(){this.onResize()},50),remember:function(){if(J.isUndefined(xr)&&(xr=new mb,xr.domElement.innerHTML=hb),this.parent)throw new Error("You can only call remember on a top level GUI.");var t=this;J.each(Array.prototype.slice.call(arguments),function(e){t.__rememberedObjects.length===0&&vb(t),t.__rememberedObjects.indexOf(e)===-1&&t.__rememberedObjects.push(e)}),this.autoPlace&&rl(this,this.width)},getRoot:function(){for(var t=this;t.parent;)t=t.parent;return t},getSaveObject:function(){var t=this.load;return t.closed=this.closed,this.__rememberedObjects.length>0&&(t.preset=this.preset,t.remembered||(t.remembered={}),t.remembered[this.preset]=po(this)),t.folders={},J.each(this.__folders,function(e,n){t.folders[n]=e.getSaveObject()}),t},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=po(this),il(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(t){this.load.remembered||(this.load.remembered={},this.load.remembered[Cr]=po(this,!0)),this.load.remembered[t]=po(this),this.preset=t,sl(this,t,!0),this.saveToLocalStorageIfPossible()},revert:function(t){J.each(this.__controllers,function(e){this.getRoot().load.remembered?od(t||this.getRoot(),e):e.setValue(e.initialValue),e.__onFinishChange&&e.__onFinishChange.call(e,e.getValue())},this),J.each(this.__folders,function(e){e.revert(e)}),t||il(this.getRoot(),!1)},listen:function(t){var e=this.__listening.length===0;this.__listening.push(t),e&&ad(this.__listening)},updateDisplay:function(){J.each(this.__controllers,function(t){t.updateDisplay()}),J.each(this.__folders,function(t){t.updateDisplay()})}});function Fl(a,t,e){var n=document.createElement("li");return t&&n.appendChild(t),e?a.__ul.insertBefore(n,e):a.__ul.appendChild(n),a.onResize(),n}function Qu(a){H.unbind(window,"resize",a.__resizeHandler),a.saveToLocalStorageIfPossible&&H.unbind(window,"unload",a.saveToLocalStorageIfPossible)}function il(a,t){var e=a.__preset_select[a.__preset_select.selectedIndex];t?e.innerHTML=e.value+"*":e.innerHTML=e.value}function _b(a,t,e){if(e.__li=t,e.__gui=a,J.extend(e,{options:function(r){if(arguments.length>1){var o=e.__li.nextElementSibling;return e.remove(),yr(a,e.object,e.property,{before:o,factoryArgs:[J.toArray(arguments)]})}if(J.isArray(r)||J.isObject(r)){var l=e.__li.nextElementSibling;return e.remove(),yr(a,e.object,e.property,{before:l,factoryArgs:[r]})}},name:function(r){return e.__li.firstElementChild.firstElementChild.innerHTML=r,e},listen:function(){return e.__gui.listen(e),e},remove:function(){return e.__gui.remove(e),e}}),e instanceof el){var n=new Mo(e.object,e.property,{min:e.__min,max:e.__max,step:e.__step});J.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var r=e[s],o=n[s];e[s]=n[s]=function(){var l=Array.prototype.slice.call(arguments);return o.apply(n,l),r.apply(e,l)}}),H.addClass(t,"has-slider"),e.domElement.insertBefore(n.domElement,e.domElement.firstElementChild)}else if(e instanceof Mo){var i=function(r){if(J.isNumber(e.__min)&&J.isNumber(e.__max)){var o=e.__li.firstElementChild.firstElementChild.innerHTML,l=e.__gui.__listening.indexOf(e)>-1;e.remove();var c=yr(a,e.object,e.property,{before:e.__li.nextElementSibling,factoryArgs:[e.__min,e.__max,e.__step]});return c.name(o),l&&c.listen(),c}return r};e.min=J.compose(i,e.min),e.max=J.compose(i,e.max)}else e instanceof nd?(H.bind(t,"click",function(){H.fakeEvent(e.__checkbox,"click")}),H.bind(e.__checkbox,"click",function(s){s.stopPropagation()})):e instanceof sd?(H.bind(t,"click",function(){H.fakeEvent(e.__button,"click")}),H.bind(t,"mouseover",function(){H.addClass(e.__button,"hover")}),H.bind(t,"mouseout",function(){H.removeClass(e.__button,"hover")})):e instanceof nl&&(H.addClass(t,"color"),e.updateDisplay=J.compose(function(s){return t.style.borderLeftColor=e.__color.toString(),s},e.updateDisplay),e.updateDisplay());e.setValue=J.compose(function(s){return a.getRoot().__preset_select&&e.isModified()&&il(a.getRoot(),!0),s},e.setValue)}function od(a,t){var e=a.getRoot(),n=e.__rememberedObjects.indexOf(t.object);if(n!==-1){var i=e.__rememberedObjectIndecesToControllers[n];if(i===void 0&&(i={},e.__rememberedObjectIndecesToControllers[n]=i),i[t.property]=t,e.load&&e.load.remembered){var s=e.load.remembered,r=void 0;if(s[a.preset])r=s[a.preset];else if(s[Cr])r=s[Cr];else return;if(r[n]&&r[n][t.property]!==void 0){var o=r[n][t.property];t.initialValue=o,t.setValue(o)}}}}function yr(a,t,e,n){if(t[e]===void 0)throw new Error('Object "'+t+'" has no property "'+e+'"');var i=void 0;if(n.color)i=new nl(t,e);else{var s=[t,e].concat(n.factoryArgs);i=db.apply(a,s)}n.before instanceof is&&(n.before=n.before.__li),od(a,i),H.addClass(i.domElement,"c");var r=document.createElement("span");H.addClass(r,"property-name"),r.innerHTML=i.property;var o=document.createElement("div");o.appendChild(r),o.appendChild(i.domElement);var l=Fl(a,o,n.before);return H.addClass(l,Xt.CLASS_CONTROLLER_ROW),i instanceof nl?H.addClass(l,"color"):H.addClass(l,nb(i.getValue())),_b(a,l,i),a.__controllers.push(i),i}function Ls(a,t){return document.location.href+"."+t}function sl(a,t,e){var n=document.createElement("option");n.innerHTML=t,n.value=t,a.__preset_select.appendChild(n),e&&(a.__preset_select.selectedIndex=a.__preset_select.length-1)}function th(a,t){t.style.display=a.useLocalStorage?"block":"none"}function vb(a){var t=a.__save_row=document.createElement("li");H.addClass(a.domElement,"has-save"),a.__ul.insertBefore(t,a.__ul.firstChild),H.addClass(t,"save-row");var e=document.createElement("span");e.innerHTML="&nbsp;",H.addClass(e,"button gears");var n=document.createElement("span");n.innerHTML="Save",H.addClass(n,"button"),H.addClass(n,"save");var i=document.createElement("span");i.innerHTML="New",H.addClass(i,"button"),H.addClass(i,"save-as");var s=document.createElement("span");s.innerHTML="Revert",H.addClass(s,"button"),H.addClass(s,"revert");var r=a.__preset_select=document.createElement("select");if(a.load&&a.load.remembered?J.each(a.load.remembered,function(d,h){sl(a,h,h===a.preset)}):sl(a,Cr,!1),H.bind(r,"change",function(){for(var d=0;d<a.__preset_select.length;d++)a.__preset_select[d].innerHTML=a.__preset_select[d].value;a.preset=this.value}),t.appendChild(r),t.appendChild(e),t.appendChild(n),t.appendChild(i),t.appendChild(s),mr){var o=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(Ls(a,"isLocal"))==="true"&&l.setAttribute("checked","checked"),th(a,o),H.bind(l,"change",function(){a.useLocalStorage=!a.useLocalStorage,th(a,o)})}var u=document.getElementById("dg-new-constructor");H.bind(u,"keydown",function(d){d.metaKey&&(d.which===67||d.keyCode===67)&&xr.hide()}),H.bind(e,"click",function(){u.innerHTML=JSON.stringify(a.getSaveObject(),void 0,2),xr.show(),u.focus(),u.select()}),H.bind(n,"click",function(){a.save()}),H.bind(i,"click",function(){var d=prompt("Enter a new preset name.");d&&a.saveAs(d)}),H.bind(s,"click",function(){a.revert()})}function xb(a){var t=void 0;a.__resize_handle=document.createElement("div"),J.extend(a.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function e(s){return s.preventDefault(),a.width+=t-s.clientX,a.onResize(),t=s.clientX,!1}function n(){H.removeClass(a.__closeButton,Xt.CLASS_DRAG),H.unbind(window,"mousemove",e),H.unbind(window,"mouseup",n)}function i(s){return s.preventDefault(),t=s.clientX,H.addClass(a.__closeButton,Xt.CLASS_DRAG),H.bind(window,"mousemove",e),H.bind(window,"mouseup",n),!1}H.bind(a.__resize_handle,"mousedown",i),H.bind(a.__closeButton,"mousedown",i),a.domElement.insertBefore(a.__resize_handle,a.domElement.firstElementChild)}function rl(a,t){a.domElement.style.width=t+"px",a.__save_row&&a.autoPlace&&(a.__save_row.style.width=t+"px"),a.__closeButton&&(a.__closeButton.style.width=t+"px")}function po(a,t){var e={};return J.each(a.__rememberedObjects,function(n,i){var s={},r=a.__rememberedObjectIndecesToControllers[i];J.each(r,function(o,l){s[l]=t?o.initialValue:o.getValue()}),e[i]=s}),e}function yb(a){for(var t=0;t<a.__preset_select.length;t++)a.__preset_select[t].value===a.preset&&(a.__preset_select.selectedIndex=t)}function ad(a){a.length!==0&&pb.call(window,function(){ad(a)}),J.each(a,function(t){t.updateDisplay()})}function jn(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function ld(a,t){a.prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t}/*!
 * GSAP 3.11.0
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var qe={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},qs={duration:.5,overwrite:!1,delay:0},zl,vn,ae,sn=1e8,Wt=1/sn,ol=Math.PI*2,bb=ol/4,wb=0,cd=Math.sqrt,Sb=Math.cos,Mb=Math.sin,ve=function(t){return typeof t=="string"},Qt=function(t){return typeof t=="function"},Jn=function(t){return typeof t=="number"},Nl=function(t){return typeof t>"u"},Fn=function(t){return typeof t=="object"},Fe=function(t){return t!==!1},ud=function(){return typeof window<"u"},mo=function(t){return Qt(t)||ve(t)},hd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Me=Array.isArray,al=/(?:-?\.?\d|\.)+/gi,dd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Is=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,za=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,fd=/[+-]=-?[.\d]+/,pd=/[^,'"\[\]\s]+/gi,Eb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Yt,tn,ll,Ol,Xe={},Eo={},md,gd=function(t){return(Eo=Ji(t,Xe))&&je},Bl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},To=function(t,e){return!e&&console.warn(t)},_d=function(t,e){return t&&(Xe[t]=e)&&Eo&&(Eo[t]=e)||Xe},Ar=function(){return 0},Tb={suppressEvents:!0,isStart:!0},br={suppressEvents:!0},kl={},vi=[],cl={},vd,Ge={},Na={},eh=30,vo=[],Ul="",Vl=function(t){var e=t[0],n,i;if(Fn(e)||Qt(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=vo.length;i--&&!vo[i].targetTest(e););n=vo[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Ud(t[i],n)))||t.splice(i,1);return t},Wi=function(t){return t._gsap||Vl(rn(t))[0]._gsap},xd=function(t,e,n){return(n=t[e])&&Qt(n)?t[e]():Nl(n)&&t.getAttribute&&t.getAttribute(e)||n},ze=function(t,e){return(t=t.split(",")).forEach(e)||t},ee=function(t){return Math.round(t*1e5)/1e5||0},ye=function(t){return Math.round(t*1e7)/1e7||0},Os=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Cb=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Co=function(){var t=vi.length,e=vi.slice(0),n,i;for(cl={},vi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},yd=function(t,e,n,i){vi.length&&Co(),t.render(e,n,i||vn),vi.length&&Co()},bd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(pd).length<2?e:ve(t)?t.trim():t},wd=function(t){return t},ln=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ab=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ji=function(t,e){for(var n in e)t[n]=e[n];return t},nh=function a(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Fn(e[n])?a(t[n]||(t[n]={}),e[n]):e[n]);return t},Ao=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},wr=function(t){var e=t.parent||Yt,n=t.keyframes?Ab(Me(t.keyframes)):ln;if(Fe(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Lb=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Sd=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t[i],o;if(s)for(o=e[s];r&&r[s]>o;)r=r._prev;return r?(e._next=r._next,r._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=r,e.parent=e._dp=t,e},Uo=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,r=e._next;s?s._next=r:t[n]===e&&(t[n]=r),r?r._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Qn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},qi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Pb=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ul=function(t,e,n,i){return t._startAt&&(vn?t._startAt.revert(br):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Rb=function a(t){return!t||t._ts&&a(t.parent)},ih=function(t){return t._repeat?Xs(t._tTime,t=t.duration()+t._rDelay)*t:0},Xs=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Lo=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Vo=function(t){return t._end=ye(t._start+(t._tDur/Math.abs(t._ts||t._rts||Wt)||0))},Go=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ye(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Vo(t),n._dirty||qi(n,t)),t},Md=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=Lo(t.rawTime(),e),(!e._dur||Br(0,e.totalDuration(),n)-e._tTime>Wt)&&e.render(n,!0)),qi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Wt}},An=function(t,e,n,i){return e.parent&&Qn(e),e._start=ye((Jn(n)?n:n||t!==Yt?Qe(t,n,e):t._time)+e._delay),e._end=ye(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Sd(t,e,"_first","_last",t._sort?"_start":0),hl(e)||(t._recent=e),i||Md(t,e),t._ts<0&&Go(t,t._tTime),t},Ed=function(t,e){return(Xe.ScrollTrigger||Bl("scrollTrigger",e))&&Xe.ScrollTrigger.create(e,t)},Td=function(t,e,n,i){if(Hl(t,e),!t._initted)return 1;if(!n&&t._pt&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&vd!==We.frame)return vi.push(t),t._lazy=[e,i],1},Db=function a(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||a(e))},hl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Ib=function(t,e,n,i){var s=t.ratio,r=e<0||!e&&(!t._start&&Db(t)&&!(!t._initted&&hl(t))||(t._ts<0||t._dp._ts<0)&&!hl(t))?0:1,o=t._rDelay,l=0,c,u,d;if(o&&t._repeat&&(l=Br(0,t._tDur,e),u=Xs(l,o),t._yoyo&&u&1&&(r=1-r),u!==Xs(t._tTime,o)&&(s=1-r,t.vars.repeatRefresh&&t._initted&&t.invalidate())),r!==s||vn||i||t._zTime===Wt||!e&&t._zTime){if(!t._initted&&Td(t,e,i,n))return;for(d=t._zTime,t._zTime=e||(n?Wt:0),n||(n=e&&!d),t.ratio=r,t._from&&(r=1-r),t._time=0,t._tTime=l,c=t._pt;c;)c.r(r,c.d),c=c._next;e<0&&ul(t,e,n,!0),t._onUpdate&&!n&&on(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&on(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===r&&(r&&Qn(t,1),n||(on(t,r?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Fb=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},js=function(t,e,n,i){var s=t._repeat,r=ye(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=r/t._dur),t._dur=r,t._tDur=s?s<0?1e10:ye(r*(s+1)+t._rDelay*s):r,o>0&&!i?Go(t,t._tTime=t._tDur*o):t.parent&&Vo(t),n||qi(t.parent,t),t},sh=function(t){return t instanceof Ie?qi(t):js(t,t._dur)},zb={_start:0,endTime:Ar,totalDuration:Ar},Qe=function a(t,e,n){var i=t.labels,s=t._recent||zb,r=t.duration()>=sn?s.endTime(!1):t._dur,o,l,c;return ve(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=r),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Me(n)?n[0]:n).totalDuration()),o>1?a(t,e.substr(0,o-1),n)+l:r+l)):e==null?r:+e},Sr=function(t,e,n){var i=Jn(e[1]),s=(i?2:1)+(t<2?0:1),r=e[s],o,l;if(i&&(r.duration=e[1]),r.parent=n,t){for(o=r,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Fe(l.vars.inherit)&&l.parent;r.immediateRender=Fe(o.immediateRender),t<2?r.runBackwards=1:r.startAt=e[s-1]}return new fe(e[0],r,e[s+1])},Mi=function(t,e){return t||t===0?e(t):e},Br=function(t,e,n){return n<t?t:n>e?e:n},Se=function(t,e){return!ve(t)||!(e=Eb.exec(t))?"":e[1]},Nb=function(t,e,n){return Mi(n,function(i){return Br(t,e,i)})},dl=[].slice,Cd=function(t,e){return t&&Fn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Fn(t[0]))&&!t.nodeType&&t!==tn},Ob=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return ve(i)&&!e||Cd(i,1)?(s=n).push.apply(s,rn(i)):n.push(i)})||n},rn=function(t,e,n){return ae&&!e&&ae.selector?ae.selector(t):ve(t)&&!n&&(ll||!Ys())?dl.call((e||Ol).querySelectorAll(t),0):Me(t)?Ob(t,n):Cd(t)?dl.call(t,0):t?[t]:[]},fl=function(t){return t=rn(t)[0]||To("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return rn(e,n.querySelectorAll?n:n===t?To("Invalid scope")||Ol.createElement("div"):t)}},Ad=function(t){return t.sort(function(){return .5-Math.random()})},Ld=function(t){if(Qt(t))return t;var e=Fn(t)?t:{each:t},n=Xi(e.ease),i=e.from||0,s=parseFloat(e.base)||0,r={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,d=i;return ve(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(h,m,g){var f=(g||e).length,p=r[f],_,v,w,b,x,M,C,y,E;if(!p){if(E=e.grid==="auto"?0:(e.grid||[1,sn])[1],!E){for(C=-sn;C<(C=g[E++].getBoundingClientRect().left)&&E<f;);E--}for(p=r[f]=[],_=l?Math.min(E,f)*u-.5:i%E,v=E===sn?0:l?f*d/E-.5:i/E|0,C=0,y=sn,M=0;M<f;M++)w=M%E-_,b=v-(M/E|0),p[M]=x=c?Math.abs(c==="y"?b:w):cd(w*w+b*b),x>C&&(C=x),x<y&&(y=x);i==="random"&&Ad(p),p.max=C-y,p.min=y,p.v=f=(parseFloat(e.amount)||parseFloat(e.each)*(E>f?f-1:c?c==="y"?f/E:E:Math.max(E,f/E))||0)*(i==="edges"?-1:1),p.b=f<0?s-f:s,p.u=Se(e.amount||e.each)||0,n=n&&f<0?Od(n):n}return f=(p[h]-p.min)/p.max||0,ye(p.b+(n?n(f):f)*p.v)+p.u}},pl=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ye(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Jn(n)?0:Se(n))}},Pd=function(t,e){var n=Me(t),i,s;return!n&&Fn(t)&&(i=n=t.radius||sn,t.values?(t=rn(t.values),(s=!Jn(t[0]))&&(i*=i)):t=pl(t.increment)),Mi(e,n?Qt(t)?function(r){return s=t(r),Math.abs(s-r)<=i?s:r}:function(r){for(var o=parseFloat(s?r.x:r),l=parseFloat(s?r.y:0),c=sn,u=0,d=t.length,h,m;d--;)s?(h=t[d].x-o,m=t[d].y-l,h=h*h+m*m):h=Math.abs(t[d]-o),h<c&&(c=h,u=d);return u=!i||c<=i?t[u]:r,s||u===r||Jn(r)?u:u+Se(r)}:pl(t))},Rd=function(t,e,n,i){return Mi(Me(t)?!e:n===!0?!!(n=0):!i,function(){return Me(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Bb=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,r){return r(s)},i)}},kb=function(t,e){return function(n){return t(parseFloat(n))+(e||Se(n))}},Ub=function(t,e,n){return Id(t,e,0,1,n)},Dd=function(t,e,n){return Mi(n,function(i){return t[~~e(i)]})},Vb=function a(t,e,n){var i=e-t;return Me(t)?Dd(t,a(0,t.length),e):Mi(n,function(s){return(i+(s-t)%i)%i+t})},Gb=function a(t,e,n){var i=e-t,s=i*2;return Me(t)?Dd(t,a(0,t.length-1),e):Mi(n,function(r){return r=(s+(r-t)%s)%s||0,t+(r>i?s-r:r)})},Lr=function(t){for(var e=0,n="",i,s,r,o;~(i=t.indexOf("random(",e));)r=t.indexOf(")",i),o=t.charAt(i+7)==="[",s=t.substr(i+7,r-i-7).match(o?pd:al),n+=t.substr(e,i-e)+Rd(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=r+1;return n+t.substr(e,t.length-e)},Id=function(t,e,n,i,s){var r=e-t,o=i-n;return Mi(s,function(l){return n+((l-t)/r*o||0)})},Hb=function a(t,e,n,i){var s=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!s){var r=ve(t),o={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),r)t={p:t},e={p:e};else if(Me(t)&&!Me(e)){for(u=[],d=t.length,h=d-2,c=1;c<d;c++)u.push(a(t[c-1],t[c]));d--,s=function(g){g*=d;var f=Math.min(h,~~g);return u[f](g-f)},n=e}else i||(t=Ji(Me(t)?[]:{},t));if(!u){for(l in e)Gl.call(o,t,l,"get",e[l]);s=function(g){return Xl(g,o)||(r?t.p:t)}}}return Mi(n,s)},rh=function(t,e,n){var i=t.labels,s=sn,r,o,l;for(r in i)o=i[r]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=r,s=o);return l},on=function(t,e,n){var i=t.vars,s=i[e],r=ae,o=t._ctx,l,c,u;if(!!s)return l=i[e+"Params"],c=i.callbackScope||t,n&&vi.length&&Co(),o&&(ae=o),u=l?s.apply(c,l):s.call(c),ae=r,u},gr=function(t){return Qn(t),t.scrollTrigger&&t.scrollTrigger.kill(!1),t.progress()<1&&on(t,"onInterrupt"),t},Fs,Wb=function(t){t=!t.name&&t.default||t;var e=t.name,n=Qt(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Ar,render:Xl,add:Gl,kill:ow,modifier:rw,rawVars:0},r={targetTest:0,get:0,getSetter:ql,aliases:{},register:0};if(Ys(),t!==i){if(Ge[e])return;ln(i,ln(Ao(t,s),r)),Ji(i.prototype,Ji(s,Ao(t,r))),Ge[i.prop=e]=i,t.targetTest&&(vo.push(i),kl[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}_d(e,i),t.register&&t.register(je,i,Ne)},Ht=255,_r={aqua:[0,Ht,Ht],lime:[0,Ht,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ht],navy:[0,0,128],white:[Ht,Ht,Ht],olive:[128,128,0],yellow:[Ht,Ht,0],orange:[Ht,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ht,0,0],pink:[Ht,192,203],cyan:[0,Ht,Ht],transparent:[Ht,Ht,Ht,0]},Oa=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ht+.5|0},Fd=function(t,e,n){var i=t?Jn(t)?[t>>16,t>>8&Ht,t&Ht]:0:_r.black,s,r,o,l,c,u,d,h,m,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),_r[t])i=_r[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),r=t.charAt(2),o=t.charAt(3),t="#"+s+s+r+r+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ht,i&Ht,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ht,t&Ht]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(al),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,r=u<=.5?u*(c+1):u+c-u*c,s=u*2-r,i.length>3&&(i[3]*=1),i[0]=Oa(l+1/3,s,r),i[1]=Oa(l,s,r),i[2]=Oa(l-1/3,s,r);else if(~t.indexOf("="))return i=t.match(dd),n&&i.length<4&&(i[3]=1),i}else i=t.match(al)||_r.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/Ht,r=i[1]/Ht,o=i[2]/Ht,d=Math.max(s,r,o),h=Math.min(s,r,o),u=(d+h)/2,d===h?l=c=0:(m=d-h,c=u>.5?m/(2-d-h):m/(d+h),l=d===s?(r-o)/m+(r<o?6:0):d===r?(o-s)/m+2:(s-r)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},zd=function(t){var e=[],n=[],i=-1;return t.split(xi).forEach(function(s){var r=s.match(Is)||[];e.push.apply(e,r),n.push(i+=r.length+1)}),e.c=n,e},oh=function(t,e,n){var i="",s=(t+i).match(xi),r=e?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return t;if(s=s.map(function(h){return(h=Fd(h,e,1))&&r+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=zd(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(xi,"1").split(Is),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||r+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(xi),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},xi=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in _r)a+="|"+t+"\\b";return new RegExp(a+")","gi")}(),qb=/hsl[a]?\(/,Nd=function(t){var e=t.join(" "),n;if(xi.lastIndex=0,xi.test(e))return n=qb.test(e),t[1]=oh(t[1],n),t[0]=oh(t[0],n,zd(t[1])),!0},Pr,We=function(){var a=Date.now,t=500,e=33,n=a(),i=n,s=1e3/240,r=s,o=[],l,c,u,d,h,m,g=function f(p){var _=a()-i,v=p===!0,w,b,x,M;if(_>t&&(n+=_-e),i+=_,x=i-n,w=x-r,(w>0||v)&&(M=++d.frame,h=x-d.time*1e3,d.time=x=x/1e3,r+=w+(w>=s?4:s-w),b=1),v||(l=c(f)),b)for(m=0;m<o.length;m++)o[m](x,h,M,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){md&&(!ll&&ud()&&(tn=ll=window,Ol=tn.document||{},Xe.gsap=je,(tn.gsapVersions||(tn.gsapVersions=[])).push(je.version),gd(Eo||tn.GreenSockGlobals||!tn.gsap&&tn||{}),u=tn.requestAnimationFrame),l&&d.sleep(),c=u||function(p){return setTimeout(p,r-d.time*1e3+1|0)},Pr=1,g(2))},sleep:function(){(u?tn.cancelAnimationFrame:clearTimeout)(l),Pr=0,c=Ar},lagSmoothing:function(p,_){t=p||1/Wt,e=Math.min(_,t,0)},fps:function(p){s=1e3/(p||240),r=d.time*1e3+s},add:function(p,_,v){var w=_?function(b,x,M,C){p(b,x,M,C),d.remove(w)}:p;return d.remove(p),o[v?"unshift":"push"](w),Ys(),w},remove:function(p,_){~(_=o.indexOf(p))&&o.splice(_,1)&&m>=_&&m--},_listeners:o},d}(),Ys=function(){return!Pr&&We.wake()},Dt={},Xb=/^[\d.\-M][\d.\-,\s]/,jb=/["']/g,Yb=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,r=n.length,o,l,c;s<r;s++)l=n[s],o=s!==r-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(jb,"").trim():+c,i=l.substr(o+1).trim();return e},$b=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Zb=function(t){var e=(t+"").split("("),n=Dt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Yb(e[1])]:$b(t).split(",").map(bd)):Dt._CE&&Xb.test(t)?Dt._CE("",t):n},Od=function(t){return function(e){return 1-t(1-e)}},Bd=function a(t,e){for(var n=t._first,i;n;)n instanceof Ie?a(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?a(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Xi=function(t,e){return t&&(Qt(t)?t:Dt[t]||Zb(t))||e},ss=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},r;return ze(t,function(o){Dt[o]=Xe[o]=s,Dt[r=o.toLowerCase()]=n;for(var l in s)Dt[r+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Dt[o+"."+l]=s[l]}),s},kd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ba=function a(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),r=s/ol*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Mb((u-r)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:kd(o);return s=ol/s,l.config=function(c,u){return a(t,c,u)},l},ka=function a(t,e){e===void 0&&(e=1.70158);var n=function(r){return r?--r*r*((e+1)*r+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:kd(n);return i.config=function(s){return a(t,s)},i};ze("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,t){var e=t<5?t+1:t;ss(a+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Dt.Linear.easeNone=Dt.none=Dt.Linear.easeIn;ss("Elastic",Ba("in"),Ba("out"),Ba());(function(a,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?a*o*o:o<n?a*Math.pow(o-1.5/t,2)+.75:o<i?a*(o-=2.25/t)*o+.9375:a*Math.pow(o-2.625/t,2)+.984375};ss("Bounce",function(r){return 1-s(1-r)},s)})(7.5625,2.75);ss("Expo",function(a){return a?Math.pow(2,10*(a-1)):0});ss("Circ",function(a){return-(cd(1-a*a)-1)});ss("Sine",function(a){return a===1?1:-Sb(a*bb)+1});ss("Back",ka("in"),ka("out"),ka());Dt.SteppedEase=Dt.steps=Xe.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,r=1-Wt;return function(o){return((i*Br(0,r,o)|0)+s)*n}}};qs.ease=Dt["quad.out"];ze("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Ul+=a+","+a+"Params,"});var Ud=function(t,e){this.id=wb++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:xd,this.set=e?e.getSetter:ql},$s=function(){function a(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,js(this,+e.duration,1,1),this.data=e.data,ae&&(this._ctx=ae,ae.data.push(this)),Pr||We.wake()}var t=a.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,js(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Ys(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Go(this,n),!s._dp||s.parent||Md(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&An(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Wt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),yd(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ih(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ih(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Xs(this._tTime,s)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Wt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Lo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Wt?0:this._rts,this.totalTime(Br(-this._delay,this._tDur,i),!0),Vo(this),Pb(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ys(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Wt&&(this._tTime-=Wt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&An(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Fe(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Lo(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=br);var i=vn;return vn=n,this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents),this.data!=="nested"&&Qn(this),vn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this.vars.immediateRender?-1:s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,sh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,sh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Qe(this,n),Fe(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Fe(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Wt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Wt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Wt)},t.eventCallback=function(n,i,s){var r=this.vars;return arguments.length>1?(i?(r[n]=i,s&&(r[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete r[n],this):r[n]},t.then=function(n){var i=this;return new Promise(function(s){var r=Qt(n)?n:wd,o=function(){var c=i.then;i.then=null,Qt(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=c),s(r),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){gr(this)},a}();ln($s.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Wt,_prom:0,_ps:!1,_rts:1});var Ie=function(a){ld(t,a);function t(n,i){var s;return n===void 0&&(n={}),s=a.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Fe(n.sortChildren),Yt&&An(n.parent||Yt,jn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ed(jn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,r){return Sr(0,arguments,this),this},e.from=function(i,s,r){return Sr(1,arguments,this),this},e.fromTo=function(i,s,r,o){return Sr(2,arguments,this),this},e.set=function(i,s,r){return s.duration=0,s.parent=this,wr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new fe(i,s,Qe(this,r),1),this},e.call=function(i,s,r){return An(this,fe.delayedCall(0,i,s),r)},e.staggerTo=function(i,s,r,o,l,c,u){return r.duration=s,r.stagger=r.stagger||o,r.onComplete=c,r.onCompleteParams=u,r.parent=this,new fe(i,r,Qe(this,l)),this},e.staggerFrom=function(i,s,r,o,l,c,u){return r.runBackwards=1,wr(r).immediateRender=Fe(r.immediateRender),this.staggerTo(i,s,r,o,l,c,u)},e.staggerFromTo=function(i,s,r,o,l,c,u,d){return o.startAt=r,wr(o).immediateRender=Fe(o.immediateRender),this.staggerTo(i,s,o,l,c,u,d)},e.render=function(i,s,r){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:ye(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,m,g,f,p,_,v,w,b,x,M,C;if(this!==Yt&&u>l&&i>=0&&(u=l),u!==this._tTime||r||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,b=this._start,w=this._ts,_=!w,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(M=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,r);if(h=ye(u%p),u===l?(f=this._repeat,h=c):(f=~~(u/p),f&&f===u/p&&(h=c,f--),h>c&&(h=c)),x=Xs(this._tTime,p),!o&&this._tTime&&x!==f&&(x=f),M&&f&1&&(h=c-h,C=1),f!==x&&!this._lock){var y=M&&x&1,E=y===(M&&f&1);if(f<x&&(y=!y),o=y?0:c,this._lock=1,this.render(o||(C?0:ye(f*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&on(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,o=y?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Bd(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Fb(this,ye(o),ye(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&!s&&(on(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||h>=m._start)&&m._ts&&v!==m){if(m.parent!==this)return this.render(i,s,r);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,s,r),h!==this._time||!this._ts&&!_){v=0,g&&(u+=this._zTime=-Wt);break}}m=g}else{r=r||vn,m=this._last;for(var I=i<0?i:h;m;){if(g=m._prev,(m._act||I<=m._end)&&m._ts&&v!==m){if(m.parent!==this)return this.render(i,s,r);if(m.render(m._ts>0?(I-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(I-m._start)*m._ts,s,r),h!==this._time||!this._ts&&!_){v=0,g&&(u+=this._zTime=I?-Wt:Wt);break}}m=g}}if(v&&!s&&(this.pause(),v.render(h>=o?0:-Wt)._zTime=h>=o?1:-1,this._ts))return this._start=b,Vo(this),this.render(i,s,r);this._onUpdate&&!s&&on(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(b===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Qn(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(on(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var r=this;if(Jn(s)||(s=Qe(this,s,i)),!(i instanceof $s)){if(Me(i))return i.forEach(function(o){return r.add(o,s)}),this;if(ve(i))return this.addLabel(i,s);if(Qt(i))i=fe.delayedCall(0,i);else return this}return this!==i?An(this,i,s):this},e.getChildren=function(i,s,r,o){i===void 0&&(i=!0),s===void 0&&(s=!0),r===void 0&&(r=!0),o===void 0&&(o=-sn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof fe?s&&l.push(c):(r&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,r)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),r=s.length;r--;)if(s[r].vars.id===i)return s[r]},e.remove=function(i){return ve(i)?this.removeLabel(i):Qt(i)?this.killTweensOf(i):(Uo(this,i),i===this._recent&&(this._recent=this._last),qi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ye(We.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Qe(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,r){var o=fe.delayedCall(0,s||Ar,r);return o.data="isPause",this._hasPause=1,An(this,o,Qe(this,i))},e.removePause=function(i){var s=this._first;for(i=Qe(this,i);s;)s._start===i&&s.data==="isPause"&&Qn(s),s=s._next},e.killTweensOf=function(i,s,r){for(var o=this.getTweensOf(i,r),l=o.length;l--;)pi!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var r=[],o=rn(i),l=this._first,c=Jn(s),u;l;)l instanceof fe?Cb(l._targets,o)&&(c?(!pi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&r.push(l):(u=l.getTweensOf(o,s)).length&&r.push.apply(r,u),l=l._next;return r},e.tweenTo=function(i,s){s=s||{};var r=this,o=Qe(r,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,m,g=fe.to(r,ln({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:r._time))/r.timeScale())||Wt,onStart:function(){if(r.pause(),!m){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:r._time))/r.timeScale());g._dur!==p&&js(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,d||[])}},s));return h?g.render(0):g},e.tweenFromTo=function(i,s,r){return this.tweenTo(s,ln({startAt:{time:Qe(this,i)}},r))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),rh(this,Qe(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),rh(this,Qe(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Wt)},e.shiftChildren=function(i,s,r){r===void 0&&(r=0);for(var o=this._first,l=this.labels,c;o;)o._start>=r&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=r&&(l[c]+=i);return qi(this)},e.invalidate=function(){var i=this._first;for(this._lock=0;i;)i.invalidate(),i=i._next;return a.prototype.invalidate.call(this)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,r;s;)r=s._next,this.remove(s),s=r;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),qi(this)},e.totalDuration=function(i){var s=0,r=this,o=r._last,l=sn,c,u,d;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-i:i));if(r._dirty){for(d=r.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&r._sort&&o._ts&&!r._lock?(r._lock=1,An(r,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!r._dp||d&&d.smoothChildTiming)&&(r._start+=u/r._ts,r._time-=u,r._tTime-=u),r.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;js(r,r===Yt&&r._time>s?r._time:s,1,1),r._dirty=0}return r._tDur},t.updateRoot=function(i){if(Yt._ts&&(yd(Yt,Lo(i,Yt)),vd=We.frame),We.frame>=eh){eh+=qe.autoSleep||120;var s=Yt._first;if((!s||!s._ts)&&qe.autoSleep&&We._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||We.sleep()}}},t}($s);ln(Ie.prototype,{_lock:0,_hasPause:0,_forcing:0});var Kb=function(t,e,n,i,s,r,o){var l=new Ne(this._pt,t,e,0,1,Xd,null,s),c=0,u=0,d,h,m,g,f,p,_,v;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Lr(i)),r&&(v=[n,i],r(v,t,e),n=v[0],i=v[1]),h=n.match(za)||[];d=za.exec(i);)g=d[0],f=i.substring(c,d.index),m?m=(m+1)%5:f.substr(-5)==="rgba("&&(m=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:f||u===1?f:",",s:p,c:g.charAt(1)==="="?Os(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=za.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(fd.test(i)||_)&&(l.e=0),this._pt=l,l},Gl=function(t,e,n,i,s,r,o,l,c,u){Qt(i)&&(i=i(s||0,t,r));var d=t[e],h=n!=="get"?n:Qt(d)?c?t[e.indexOf("set")||!Qt(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,m=Qt(d)?c?nw:Wd:Wl,g;if(ve(i)&&(~i.indexOf("random(")&&(i=Lr(i)),i.charAt(1)==="="&&(g=Os(h,i)+(Se(h)||0),(g||g===0)&&(i=g))),!u||h!==i||ml)return!isNaN(h*i)&&i!==""?(g=new Ne(this._pt,t,e,+h||0,i-(h||0),typeof d=="boolean"?sw:qd,0,m),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!d&&!(e in t)&&Bl(e,i),Kb.call(this,t,e,h,i,m,l||qe.stringFilter,c))},Jb=function(t,e,n,i,s){if(Qt(t)&&(t=Mr(t,s,e,n,i)),!Fn(t)||t.style&&t.nodeType||Me(t)||hd(t))return ve(t)?Mr(t,s,e,n,i):t;var r={},o;for(o in t)r[o]=Mr(t[o],s,e,n,i);return r},Vd=function(t,e,n,i,s,r){var o,l,c,u;if(Ge[t]&&(o=new Ge[t]).init(s,o.rawVars?e[t]:Jb(e[t],i,s,r,n),n,i,r)!==!1&&(n._pt=l=new Ne(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Fs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},pi,ml,Hl=function a(t,e){var n=t.vars,i=n.ease,s=n.startAt,r=n.immediateRender,o=n.lazy,l=n.onUpdate,c=n.onUpdateParams,u=n.callbackScope,d=n.runBackwards,h=n.yoyoEase,m=n.keyframes,g=n.autoRevert,f=t._dur,p=t._startAt,_=t._targets,v=t.parent,w=v&&v.data==="nested"?v.parent._targets:_,b=t._overwrite==="auto"&&!zl,x=t.timeline,M,C,y,E,I,z,j,F,R,N,D,V,U;if(x&&(!m||!i)&&(i="none"),t._ease=Xi(i,qs.ease),t._yEase=h?Od(Xi(h===!0?i:h,qs.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!x&&!!n.runBackwards,!x||m&&!n.stagger){if(F=_[0]?Wi(_[0]).harness:0,V=F&&n[F.prop],M=Ao(n,kl),p&&(p.revert(d&&f?br:Tb),p._lazy=0),s){if(Qn(t._startAt=fe.set(_,ln({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:Fe(o),startAt:null,delay:0,onUpdate:l,onUpdateParams:c,callbackScope:u,stagger:0},s))),e<0&&(vn||!r&&!g)&&t._startAt.revert(br),r&&f&&e<=0){e&&(t._zTime=e);return}}else if(d&&f&&!p){if(e&&(r=!1),y=ln({overwrite:!1,data:"isFromStart",lazy:r&&Fe(o),immediateRender:r,stagger:0,parent:v},M),V&&(y[F.prop]=V),Qn(t._startAt=fe.set(_,y)),e<0&&(vn?t._startAt.revert(br):t._startAt.render(-1,!0)),t._zTime=e,!r)a(t._startAt,Wt);else if(!e)return}for(t._pt=t._ptCache=0,o=f&&Fe(o)||o&&!f,C=0;C<_.length;C++){if(I=_[C],j=I._gsap||Vl(_)[C]._gsap,t._ptLookup[C]=N={},cl[j.id]&&vi.length&&Co(),D=w===_?C:w.indexOf(I),F&&(R=new F).init(I,V||M,t,D,w)!==!1&&(t._pt=E=new Ne(t._pt,I,R.name,0,1,R.render,R,0,R.priority),R._props.forEach(function(B){N[B]=E}),R.priority&&(z=1)),!F||V)for(y in M)Ge[y]&&(R=Vd(y,M,t,D,I,w))?R.priority&&(z=1):N[y]=E=Gl.call(t,I,y,"get",M[y],D,w,0,n.stringFilter);t._op&&t._op[C]&&t.kill(I,t._op[C]),b&&t._pt&&(pi=t,Yt.killTweensOf(I,N,t.globalTime(e)),U=!t.parent,pi=0),t._pt&&o&&(cl[j.id]=1)}z&&jd(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!U,m&&e<=0&&x.render(sn,!0,!0)},Qb=function(t,e,n,i,s,r,o){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,u,d,h;if(!l)for(l=t._ptCache[e]=[],d=t._ptLookup,h=t._targets.length;h--;){if(c=d[h][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return ml=1,t.vars[e]="+=0",Hl(t,o),ml=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+r*c.c,c.c=n-c.s,u.e&&(u.e=ee(n)+Se(u.e)),u.b&&(u.b=c.s+Se(u.b))},tw=function(t,e){var n=t[0]?Wi(t[0]).harness:0,i=n&&n.aliases,s,r,o,l;if(!i)return e;s=Ji({},e);for(r in i)if(r in s)for(l=i[r].split(","),o=l.length;o--;)s[l[o]]=s[r];return s},ew=function(t,e,n,i){var s=e.ease||i||"power1.inOut",r,o;if(Me(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(r in e)o=n[r]||(n[r]=[]),r==="ease"||o.push({t:parseFloat(t),v:e[r],e:s})},Mr=function(t,e,n,i,s){return Qt(t)?t.call(e,n,i,s):ve(t)&&~t.indexOf("random(")?Lr(t):t},Gd=Ul+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Hd={};ze(Gd+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Hd[a]=1});var fe=function(a){ld(t,a);function t(n,i,s,r){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=a.call(this,r?i:wr(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,m=l.overwrite,g=l.keyframes,f=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,v=i.parent||Yt,w=(Me(n)||hd(n)?Jn(n[0]):"length"in i)?[n]:rn(n),b,x,M,C,y,E,I,z;if(o._targets=w.length?Vl(w):To("GSAP target "+n+" not found. https://greensock.com",!qe.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,g||h||mo(c)||mo(u)){if(i=o.vars,b=o.timeline=new Ie({data:"nested",defaults:f||{}}),b.kill(),b.parent=b._dp=jn(o),b._start=0,h||mo(c)||mo(u)){if(C=w.length,I=h&&Ld(h),Fn(h))for(y in h)~Gd.indexOf(y)&&(z||(z={}),z[y]=h[y]);for(x=0;x<C;x++)M=Ao(i,Hd),M.stagger=0,_&&(M.yoyoEase=_),z&&Ji(M,z),E=w[x],M.duration=+Mr(c,jn(o),x,E,w),M.delay=(+Mr(u,jn(o),x,E,w)||0)-o._delay,!h&&C===1&&M.delay&&(o._delay=u=M.delay,o._start+=u,M.delay=0),b.to(E,M,I?I(x,E,w):0),b._ease=Dt.none;b.duration()?c=u=0:o.timeline=0}else if(g){wr(ln(b.vars.defaults,{ease:"none"})),b._ease=Xi(g.ease||i.ease||"none");var j=0,F,R,N;if(Me(g))g.forEach(function(D){return b.to(w,D,">")}),b.duration();else{M={};for(y in g)y==="ease"||y==="easeEach"||ew(y,g[y],M,g.easeEach);for(y in M)for(F=M[y].sort(function(D,V){return D.t-V.t}),j=0,x=0;x<F.length;x++)R=F[x],N={ease:R.e,duration:(R.t-(x?F[x-1].t:0))/100*c},N[y]=R.v,b.to(w,N,j),j+=N.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||o.duration(c=b.duration())}else o.timeline=0;return m===!0&&!zl&&(pi=jn(o),Yt.killTweensOf(w),pi=0),An(v,jn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!g&&o._start===ye(v._time)&&Fe(d)&&Rb(jn(o))&&v.data!=="nested")&&(o._tTime=-Wt,o.render(Math.max(0,-u))),p&&Ed(jn(o),p),o}var e=t.prototype;return e.render=function(i,s,r){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-Wt&&!u?l:i<Wt?0:i,h,m,g,f,p,_,v,w,b;if(!c)Ib(this,i,s,r);else if(d!==this._tTime||!i||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=d,w=this.timeline,this._repeat){if(f=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(f*100+i,s,r);if(h=ye(d%f),d===l?(g=this._repeat,h=c):(g=~~(d/f),g&&g===d/f&&(h=c,g--),h>c&&(h=c)),_=this._yoyo&&g&1,_&&(b=this._yEase,h=c-h),p=Xs(this._tTime,f),h===o&&!r&&this._initted)return this._tTime=d,this;g!==p&&(w&&this._yEase&&Bd(w,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=r=1,this.render(ye(f*g),!0).invalidate()._lock=0))}if(!this._initted){if(Td(this,u?i:h,r,s))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,s,r)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(b||this._ease)(h/c),this._from&&(this.ratio=v=1-v),h&&!o&&!s&&(on(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(v,m.d),m=m._next;w&&w.render(i<0?i:!h&&_?-Wt:w._dur*w._ease(h/this._dur),s,r)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&ul(this,i,s,r),on(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&on(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&ul(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Qn(this,1),!s&&!(u&&!o)&&(d||o)&&(on(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),a.prototype.invalidate.call(this)},e.resetTo=function(i,s,r,o){Pr||We.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Hl(this,l),c=this._ease(l/this._dur),Qb(this,i,s,r,o,c,l)?this.resetTo(i,s,r,o):(Go(this,0),this.parent||Sd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?gr(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,pi&&pi.vars.overwrite!==!0)._first||gr(this),this.parent&&r!==this.timeline.totalDuration()&&js(this,this._dur*this.timeline._tDur/r,0,1),this}var o=this._targets,l=i?rn(i):o,c=this._ptLookup,u=this._pt,d,h,m,g,f,p,_;if((!s||s==="all")&&Lb(o,l))return s==="all"&&(this._pt=0),gr(this);for(d=this._op=this._op||[],s!=="all"&&(ve(s)&&(f={},ze(s,function(v){return f[v]=1}),s=f),s=tw(o,s)),_=o.length;_--;)if(~l.indexOf(o[_])){h=c[_],s==="all"?(d[_]=s,g=h,m={}):(m=d[_]=d[_]||{},g=s);for(f in g)p=h&&h[f],p&&((!("kill"in p.d)||p.d.kill(f)===!0)&&Uo(this,p,"_pt"),delete h[f]),m!=="all"&&(m[f]=1)}return this._initted&&!this._pt&&u&&gr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Sr(1,arguments)},t.delayedCall=function(i,s,r,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:o})},t.fromTo=function(i,s,r){return Sr(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,r){return Yt.killTweensOf(i,s,r)},t}($s);ln(fe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ze("staggerTo,staggerFrom,staggerFromTo",function(a){fe[a]=function(){var t=new Ie,e=dl.call(arguments,0);return e.splice(a==="staggerFromTo"?5:4,0,0),t[a].apply(t,e)}});var Wl=function(t,e,n){return t[e]=n},Wd=function(t,e,n){return t[e](n)},nw=function(t,e,n,i){return t[e](i.fp,n)},iw=function(t,e,n){return t.setAttribute(e,n)},ql=function(t,e){return Qt(t[e])?Wd:Nl(t[e])&&t.setAttribute?iw:Wl},qd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},sw=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Xd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Xl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},rw=function(t,e,n,i){for(var s=this._pt,r;s;)r=s._next,s.p===i&&s.modifier(t,e,n),s=r},ow=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Uo(this,e,"_pt"):e.dep||(n=1),e=i;return!n},aw=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},jd=function(t){for(var e=t._pt,n,i,s,r;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:r)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:r=e,e=n}t._pt=s},Ne=function(){function a(e,n,i,s,r,o,l,c,u){this.t=n,this.s=s,this.c=r,this.p=i,this.r=o||qd,this.d=l||this,this.set=c||Wl,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=a.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=aw,this.m=n,this.mt=s,this.tween=i},a}();ze(Ul+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return kl[a]=1});Xe.TweenMax=Xe.TweenLite=fe;Xe.TimelineLite=Xe.TimelineMax=Ie;Yt=new Ie({sortChildren:!1,defaults:qs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});qe.stringFilter=Nd;var Zs=[],xo={},lw=[],ah=0,Ua=function(t){return(xo[t]||lw).map(function(e){return e()})},gl=function(){var t=Date.now(),e=[];t-ah>2&&(Ua("matchMediaInit"),Zs.forEach(function(n){var i=n.queries,s=n.conditions,r,o,l,c;for(o in i)r=tn.matchMedia(i[o]).matches,r&&(l=1),r!==s[o]&&(s[o]=r,c=1);c&&(n.revert(),l&&e.push(n))}),Ua("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),ah=t,Ua("matchMedia"))},Yd=function(){function a(e,n){this.selector=n&&fl(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=a.prototype;return t.add=function(n,i,s){Qt(n)&&(s=i,i=n,n=Qt);var r=this,o=function(){var c=ae,u=r.selector,d;return c&&c.data.push(r),s&&(r.selector=fl(s)),ae=r,d=i.apply(r,arguments),Qt(d)&&r._r.push(d),ae=c,r.selector=u,r.isReverted=!1,d};return r.last=o,n===Qt?o(r):n?r[n]=o:o},t.ignore=function(n){var i=ae;ae=null,n(this),ae=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof a?n.push.apply(n,i.getTweens()):i instanceof fe&&i._targets[0]!==i.vars.onComplete&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(this.getTweens().map(function(o){return{g:o.globalTime(0),t:o}}).sort(function(o,l){return l.g-o.g||-1}).forEach(function(o){return o.t.revert(n)}),this.data.forEach(function(o){return!(o instanceof $s)&&o.revert&&o.revert(n)}),this._r.forEach(function(o){return o(n,s)}),this.isReverted=!0):this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){var r=Zs.indexOf(this);~r&&Zs.splice(r,1)}},t.revert=function(n){this.kill(n||{})},a}(),cw=function(){function a(e){this.contexts=[],this.scope=e}var t=a.prototype;return t.add=function(n,i,s){Fn(n)||(n={matches:n});var r=new Yd(0,s||this.scope),o=r.conditions={},l,c,u;this.contexts.push(r),i=r.add("onMatch",i),r.queries=n;for(c in n)c==="all"?u=1:(l=tn.matchMedia(n[c]),l&&(Zs.indexOf(r)<0&&Zs.push(r),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(gl):l.addEventListener("change",gl)));return u&&i(r),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},a}(),Po={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Wb(i)})},timeline:function(t){return new Ie(t)},getTweensOf:function(t,e){return Yt.getTweensOf(t,e)},getProperty:function(t,e,n,i){ve(t)&&(t=rn(t)[0]);var s=Wi(t||{}).get,r=n?wd:bd;return n==="native"&&(n=""),t&&(e?r((Ge[e]&&Ge[e].get||s)(t,e,n,i)):function(o,l,c){return r((Ge[o]&&Ge[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=rn(t),t.length>1){var i=t.map(function(u){return je.quickSetter(u,e,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}t=t[0]||{};var r=Ge[e],o=Wi(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=r?function(u){var d=new r;Fs._pt=0,d.init(t,n?u+n:u,Fs,0,[t]),d.render(1,d),Fs._pt&&Xl(1,Fs)}:o.set(t,l);return r?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=je.to(t,Ji((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),r=function(l,c,u){return s.resetTo(e,l,c,u)};return r.tween=s,r},isTweening:function(t){return Yt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Xi(t.ease,qs.ease)),nh(qs,t||{})},config:function(t){return nh(qe,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,r=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Ge[o]&&!Xe[o]&&To(e+" effect requires "+o+" plugin.")}),Na[e]=function(o,l,c){return n(rn(o),ln(l||{},s),c)},r&&(Ie.prototype[e]=function(o,l,c){return this.add(Na[e](o,Fn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Dt[t]=Xi(e)},parseEase:function(t,e){return arguments.length?Xi(t,e):Dt},getById:function(t){return Yt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ie(t),i,s;for(n.smoothChildTiming=Fe(t.smoothChildTiming),Yt.remove(n),n._dp=0,n._time=n._tTime=Yt._time,i=Yt._first;i;)s=i._next,(e||!(!i._dur&&i instanceof fe&&i.vars.onComplete===i._targets[0]))&&An(n,i,i._start-i._delay),i=s;return An(Yt,n,0),n},context:function(t,e){return t?new Yd(t,e):ae},matchMedia:function(t){return new cw(t)},matchMediaRefresh:function(){return Zs.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||gl()},addEventListener:function(t,e){var n=xo[t]||(xo[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=xo[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Vb,wrapYoyo:Gb,distribute:Ld,random:Rd,snap:Pd,normalize:Ub,getUnit:Se,clamp:Nb,splitColor:Fd,toArray:rn,selector:fl,mapRange:Id,pipe:Bb,unitize:kb,interpolate:Hb,shuffle:Ad},install:gd,effects:Na,ticker:We,updateRoot:Ie.updateRoot,plugins:Ge,globalTimeline:Yt,core:{PropTween:Ne,globals:_d,Tween:fe,Timeline:Ie,Animation:$s,getCache:Wi,_removeLinkedListItem:Uo,reverting:function(){return vn},context:function(t){return t&&ae&&(ae.data.push(t),t._ctx=ae),ae},suppressOverwrites:function(t){return zl=t}}};ze("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Po[a]=fe[a]});We.add(Ie.updateRoot);Fs=Po.to({},{duration:0});var uw=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},hw=function(t,e){var n=t._targets,i,s,r;for(i in e)for(s=n.length;s--;)r=t._ptLookup[s][i],r&&(r=r.d)&&(r._pt&&(r=uw(r,i)),r&&r.modifier&&r.modifier(e[i],t,n[s],i))},Va=function(t,e){return{name:t,rawVars:1,init:function(i,s,r){r._onInit=function(o){var l,c;if(ve(s)&&(l={},ze(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}hw(o,s)}}}},je=Po.registerPlugin({name:"attr",init:function(t,e,n,i,s){var r,o,l;this.tween=n;for(r in e)l=t.getAttribute(r)||"",o=this.add(t,"setAttribute",(l||0)+"",e[r],i,s,0,0,r),o.op=r,o.b=l,this._props.push(r)},render:function(t,e){for(var n=e._pt;n;)vn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Va("roundProps",pl),Va("modifiers"),Va("snap",Pd))||Po;fe.version=Ie.version=je.version="3.11.0";md=1;ud()&&Ys();Dt.Power0;Dt.Power1;Dt.Power2;Dt.Power3;Dt.Power4;Dt.Linear;Dt.Quad;Dt.Cubic;Dt.Quart;Dt.Quint;Dt.Strong;Dt.Elastic;Dt.Back;Dt.SteppedEase;Dt.Bounce;Dt.Sine;Dt.Expo;Dt.Circ;/*!
 * CSSPlugin 3.11.0
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var lh,mi,Bs,jl,Vi,ch,Yl,dw=function(){return typeof window<"u"},ti={},zi=180/Math.PI,ks=Math.PI/180,Ts=Math.atan2,uh=1e8,$l=/([A-Z])/g,fw=/(left|right|width|margin|padding|x)/i,pw=/[\s,\(]\S/,Zn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_l=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},mw=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},gw=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},_w=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},$d=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Zd=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},vw=function(t,e,n){return t.style[e]=n},xw=function(t,e,n){return t.style.setProperty(e,n)},yw=function(t,e,n){return t._gsap[e]=n},bw=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},ww=function(t,e,n,i,s){var r=t._gsap;r.scaleX=r.scaleY=n,r.renderTransform(s,r)},Sw=function(t,e,n,i,s){var r=t._gsap;r[e]=n,r.renderTransform(s,r)},Jt="transform",Dn=Jt+"Origin",Mw=function(t){var e=this,n=this.target,i=n.style;if(t in ti){if(this.tfm=this.tfm||{},t!=="transform"&&(t=Zn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(s){return e.tfm[s]=Yn(n,s)}):this.tfm[t]=n._gsap.x?n._gsap[t]:Yn(n,t)),n._gsap.svg&&(this.svg=n.getAttribute(t)||""),this.props.indexOf(Jt)>=0)return;t=Jt}i&&this.props.push(t,i[t])},Kd=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Ew=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,r;for(s=0;s<t.length;s+=2)t[s+1]?n[t[s]]=t[s+1]:n.removeProperty(t[s].replace($l,"-$1").toLowerCase());if(this.tfm){i.svg&&e.setAttribute("transform",this.svg||"");for(r in this.tfm)i[r]=this.tfm[r];s=Yl(),s&&!s.isStart&&!n[Jt]&&(Kd(n),i.uncache=1)}},Jd=function(t,e){var n={target:t,props:[],revert:Ew,save:Mw};return e&&e.split(",").forEach(function(i){return n.save(i)}),n},Qd,vl=function(t,e){var n=mi.createElementNS?mi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):mi.createElement(t);return n.style?n:mi.createElement(t)},In=function a(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace($l,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&a(t,Ks(e)||e,1)||""},hh="O,Moz,ms,Ms,Webkit".split(","),Ks=function(t,e,n){var i=e||Vi,s=i.style,r=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);r--&&!(hh[r]+t in s););return r<0?null:(r===3?"ms":r>=0?hh[r]:"")+t},xl=function(){dw()&&window.document&&(lh=window,mi=lh.document,Bs=mi.documentElement,Vi=vl("div")||{style:{}},vl("div"),Jt=Ks(Jt),Dn=Jt+"Origin",Vi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Qd=!!Ks("perspective"),Yl=je.core.reverting,jl=1)},Ga=function a(t){var e=vl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,r;if(Bs.appendChild(e),e.appendChild(this),this.style.display="block",t)try{r=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=a}catch{}else this._gsapBBox&&(r=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Bs.removeChild(e),this.style.cssText=s,r},dh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},tf=function(t){var e;try{e=t.getBBox()}catch{e=Ga.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Ga||(e=Ga.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+dh(t,["x","cx","x1"])||0,y:+dh(t,["y","cy","y1"])||0,width:0,height:0}:e},ef=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&tf(t))},Rr=function(t,e){if(e){var n=t.style;e in ti&&e!==Dn&&(e=Jt),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace($l,"-$1").toLowerCase())):n.removeAttribute(e)}},gi=function(t,e,n,i,s,r){var o=new Ne(t._pt,e,n,0,1,r?Zd:$d);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},fh={deg:1,rad:1,turn:1},Tw={grid:1,flex:1},bi=function a(t,e,n,i){var s=parseFloat(n)||0,r=(n+"").trim().substr((s+"").length)||"px",o=Vi.style,l=fw.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",m=i==="%",g,f,p,_;return i===r||!s||fh[i]||fh[r]?s:(r!=="px"&&!h&&(s=a(t,e,n,"px")),_=t.getCTM&&ef(t),(m||r==="%")&&(ti[e]||~e.indexOf("adius"))?(g=_?t.getBBox()[l?"width":"height"]:t[u],ee(m?s/g*d:s/100*g)):(o[l?"width":"height"]=d+(h?r:i),f=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,_&&(f=(t.ownerSVGElement||{}).parentNode),(!f||f===mi||!f.appendChild)&&(f=mi.body),p=f._gsap,p&&m&&p.width&&l&&p.time===We.time&&!p.uncache?ee(s/p.width*d):((m||r==="%")&&!Tw[In(f,"display")]&&(o.position=In(t,"position")),f===t&&(o.position="static"),f.appendChild(Vi),g=Vi[u],f.removeChild(Vi),o.position="absolute",l&&m&&(p=Wi(f),p.time=We.time,p.width=f[u]),ee(h?g*s/d:g&&s?d/g*s:0))))},Yn=function(t,e,n,i){var s;return jl||xl(),e in Zn&&e!=="transform"&&(e=Zn[e],~e.indexOf(",")&&(e=e.split(",")[0])),ti[e]&&e!=="transform"?(s=Ir(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Do(In(t,Dn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ro[e]&&Ro[e](t,e,n)||In(t,e)||xd(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?bi(t,e,s,n)+n:s},Cw=function(t,e,n,i){if(!n||n==="none"){var s=Ks(e,t,1),r=s&&In(t,s,1);r&&r!==n?(e=s,n=r):e==="borderColor"&&(n=In(t,"borderTopColor"))}var o=new Ne(this._pt,t.style,e,0,1,Xd),l=0,c=0,u,d,h,m,g,f,p,_,v,w,b,x;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=In(t,e)||i,t.style[e]=n),u=[n,i],Nd(u),n=u[0],i=u[1],h=n.match(Is)||[],x=i.match(Is)||[],x.length){for(;d=Is.exec(i);)p=d[0],v=i.substring(l,d.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),p!==(f=h[c++]||"")&&(m=parseFloat(f)||0,b=f.substr((m+"").length),p.charAt(1)==="="&&(p=Os(m,p)+b),_=parseFloat(p),w=p.substr((_+"").length),l=Is.lastIndex-w.length,w||(w=w||qe.units[e]||b,l===i.length&&(i+=w,o.e+=w)),b!==w&&(m=bi(t,e,f,w)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:m,c:_-m,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Zd:$d;return fd.test(i)&&(o.e=0),this._pt=o,o},ph={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Aw=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=ph[n]||n,e[1]=ph[i]||i,e.join(" ")},Lw=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,r=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ti[o]&&(l=1,o=o==="transformOrigin"?Dn:Jt),Rr(n,o);l&&(Rr(n,Jt),r&&(r.svg&&n.removeAttribute("transform"),Ir(n,1),r.uncache=1,Kd(i)))}},Ro={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var r=t._pt=new Ne(t._pt,e,n,0,0,Lw);return r.u=i,r.pr=-10,r.tween=s,t._props.push(n),1}}},Dr=[1,0,0,1,0,0],nf={},sf=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},mh=function(t){var e=In(t,Jt);return sf(e)?Dr:e.substr(7).match(dd).map(ee)},Zl=function(t,e){var n=t._gsap||Wi(t),i=t.style,s=mh(t),r,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Dr:s):(s===Dr&&!t.offsetParent&&t!==Bs&&!n.svg&&(l=i.display,i.display="block",r=t.parentNode,(!r||!t.offsetParent)&&(c=1,o=t.nextElementSibling,Bs.appendChild(t)),s=mh(t),l?i.display=l:Rr(t,"display"),c&&(o?r.insertBefore(t,o):r?r.appendChild(t):Bs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},yl=function(t,e,n,i,s,r){var o=t._gsap,l=s||Zl(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,m=l[0],g=l[1],f=l[2],p=l[3],_=l[4],v=l[5],w=e.split(" "),b=parseFloat(w[0])||0,x=parseFloat(w[1])||0,M,C,y,E;n?l!==Dr&&(C=m*p-g*f)&&(y=b*(p/C)+x*(-f/C)+(f*v-p*_)/C,E=b*(-g/C)+x*(m/C)-(m*v-g*_)/C,b=y,x=E):(M=tf(t),b=M.x+(~w[0].indexOf("%")?b/100*M.width:b),x=M.y+(~(w[1]||w[0]).indexOf("%")?x/100*M.height:x)),i||i!==!1&&o.smooth?(_=b-c,v=x-u,o.xOffset=d+(_*m+v*f)-_,o.yOffset=h+(_*g+v*p)-v):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=x,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Dn]="0px 0px",r&&(gi(r,o,"xOrigin",c,b),gi(r,o,"yOrigin",u,x),gi(r,o,"xOffset",d,o.xOffset),gi(r,o,"yOffset",h,o.yOffset)),t.setAttribute("data-svg-origin",b+" "+x)},Ir=function(t,e){var n=t._gsap||new Ud(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,r="px",o="deg",l=getComputedStyle(t),c=In(t,Dn)||"0",u,d,h,m,g,f,p,_,v,w,b,x,M,C,y,E,I,z,j,F,R,N,D,V,U,B,X,tt,W,nt,ot,_t;return u=d=h=f=p=_=v=w=b=0,m=g=1,n.svg=!!(t.getCTM&&ef(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Jt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+l[Jt]),i.scale=i.rotate=i.translate="none"),C=Zl(t,n.svg),n.svg&&(V=(!n.uncache||c==="0px 0px")&&!e&&t.getAttribute("data-svg-origin"),yl(t,V||c,!!V||n.originIsAbsolute,n.smooth!==!1,C)),x=n.xOrigin||0,M=n.yOrigin||0,C!==Dr&&(z=C[0],j=C[1],F=C[2],R=C[3],u=N=C[4],d=D=C[5],C.length===6?(m=Math.sqrt(z*z+j*j),g=Math.sqrt(R*R+F*F),f=z||j?Ts(j,z)*zi:0,v=F||R?Ts(F,R)*zi+f:0,v&&(g*=Math.abs(Math.cos(v*ks))),n.svg&&(u-=x-(x*z+M*F),d-=M-(x*j+M*R))):(_t=C[6],nt=C[7],X=C[8],tt=C[9],W=C[10],ot=C[11],u=C[12],d=C[13],h=C[14],y=Ts(_t,W),p=y*zi,y&&(E=Math.cos(-y),I=Math.sin(-y),V=N*E+X*I,U=D*E+tt*I,B=_t*E+W*I,X=N*-I+X*E,tt=D*-I+tt*E,W=_t*-I+W*E,ot=nt*-I+ot*E,N=V,D=U,_t=B),y=Ts(-F,W),_=y*zi,y&&(E=Math.cos(-y),I=Math.sin(-y),V=z*E-X*I,U=j*E-tt*I,B=F*E-W*I,ot=R*I+ot*E,z=V,j=U,F=B),y=Ts(j,z),f=y*zi,y&&(E=Math.cos(y),I=Math.sin(y),V=z*E+j*I,U=N*E+D*I,j=j*E-z*I,D=D*E-N*I,z=V,N=U),p&&Math.abs(p)+Math.abs(f)>359.9&&(p=f=0,_=180-_),m=ee(Math.sqrt(z*z+j*j+F*F)),g=ee(Math.sqrt(D*D+_t*_t)),y=Ts(N,D),v=Math.abs(y)>2e-4?y*zi:0,b=ot?1/(ot<0?-ot:ot):0),n.svg&&(V=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!sf(In(t,Jt)),V&&t.setAttribute("transform",V))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(m*=-1,v+=f<=0?180:-180,f+=f<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+r,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+r,n.z=h+r,n.scaleX=ee(m),n.scaleY=ee(g),n.rotation=ee(f)+o,n.rotationX=ee(p)+o,n.rotationY=ee(_)+o,n.skewX=v+o,n.skewY=w+o,n.transformPerspective=b+r,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[Dn]=Do(c)),n.xOffset=n.yOffset=0,n.force3D=qe.force3D,n.renderTransform=n.svg?Rw:Qd?rf:Pw,n.uncache=0,n},Do=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ha=function(t,e,n){var i=Se(e);return ee(parseFloat(e)+parseFloat(bi(t,"x",n+"px",i)))+i},Pw=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,rf(t,e)},Ri="0deg",dr="0px",Di=") ",rf=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,r=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,m=n.skewY,g=n.scaleX,f=n.scaleY,p=n.transformPerspective,_=n.force3D,v=n.target,w=n.zOrigin,b="",x=_==="auto"&&t&&t!==1||_===!0;if(w&&(d!==Ri||u!==Ri)){var M=parseFloat(u)*ks,C=Math.sin(M),y=Math.cos(M),E;M=parseFloat(d)*ks,E=Math.cos(M),r=Ha(v,r,C*E*-w),o=Ha(v,o,-Math.sin(M)*-w),l=Ha(v,l,y*E*-w+w)}p!==dr&&(b+="perspective("+p+Di),(i||s)&&(b+="translate("+i+"%, "+s+"%) "),(x||r!==dr||o!==dr||l!==dr)&&(b+=l!==dr||x?"translate3d("+r+", "+o+", "+l+") ":"translate("+r+", "+o+Di),c!==Ri&&(b+="rotate("+c+Di),u!==Ri&&(b+="rotateY("+u+Di),d!==Ri&&(b+="rotateX("+d+Di),(h!==Ri||m!==Ri)&&(b+="skew("+h+", "+m+Di),(g!==1||f!==1)&&(b+="scale("+g+", "+f+Di),v.style[Jt]=b||"translate(0, 0)"},Rw=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,r=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,m=n.target,g=n.xOrigin,f=n.yOrigin,p=n.xOffset,_=n.yOffset,v=n.forceCSS,w=parseFloat(r),b=parseFloat(o),x,M,C,y,E;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ks,c*=ks,x=Math.cos(l)*d,M=Math.sin(l)*d,C=Math.sin(l-c)*-h,y=Math.cos(l-c)*h,c&&(u*=ks,E=Math.tan(c-u),E=Math.sqrt(1+E*E),C*=E,y*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),x*=E,M*=E)),x=ee(x),M=ee(M),C=ee(C),y=ee(y)):(x=d,y=h,M=C=0),(w&&!~(r+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(w=bi(m,"x",r,"px"),b=bi(m,"y",o,"px")),(g||f||p||_)&&(w=ee(w+g-(g*x+f*C)+p),b=ee(b+f-(g*M+f*y)+_)),(i||s)&&(E=m.getBBox(),w=ee(w+i/100*E.width),b=ee(b+s/100*E.height)),E="matrix("+x+","+M+","+C+","+y+","+w+","+b+")",m.setAttribute("transform",E),v&&(m.style[Jt]=E)},Dw=function(t,e,n,i,s){var r=360,o=ve(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?zi:1),c=l-i,u=i+c+"deg",d,h;return o&&(d=s.split("_")[1],d==="short"&&(c%=r,c!==c%(r/2)&&(c+=c<0?r:-r)),d==="cw"&&c<0?c=(c+r*uh)%r-~~(c/r)*r:d==="ccw"&&c>0&&(c=(c-r*uh)%r-~~(c/r)*r)),t._pt=h=new Ne(t._pt,e,n,i,c,mw),h.e=u,h.u="deg",t._props.push(n),h},gh=function(t,e){for(var n in e)t[n]=e[n];return t},Iw=function(t,e,n){var i=gh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",r=n.style,o,l,c,u,d,h,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),r[Jt]=e,o=Ir(n,1),Rr(n,Jt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Jt],r[Jt]=e,o=Ir(n,1),r[Jt]=c);for(l in ti)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(m=Se(c),g=Se(u),d=m!==g?bi(n,l,c,g):parseFloat(c),h=parseFloat(u),t._pt=new Ne(t._pt,o,l,d,h-d,_l),t._pt.u=g||0,t._props.push(l));gh(o,i)};ze("padding,margin,Width,Radius",function(a,t){var e="Top",n="Right",i="Bottom",s="Left",r=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?a+o:"border"+o+a});Ro[t>1?"border"+a:a]=function(o,l,c,u,d){var h,m;if(arguments.length<4)return h=r.map(function(g){return Yn(o,g,c)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(u+"").split(" "),m={},r.forEach(function(g,f){return m[g]=h[f]=h[f]||h[(f-1)/2|0]}),o.init(l,m,d)}});var of={name:"css",register:xl,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var r=this._props,o=t.style,l=n.vars.startAt,c,u,d,h,m,g,f,p,_,v,w,b,x,M,C,y;jl||xl(),this.styles=this.styles||Jd(t),y=this.styles.props,this.tween=n;for(f in e)if(f!=="autoRound"&&(u=e[f],!(Ge[f]&&Vd(f,e,n,i,t,s)))){if(m=typeof u,g=Ro[f],m==="function"&&(u=u.call(n,i,t,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Lr(u)),g)g(this,t,f,u,n)&&(C=1);else if(f.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(f)+"").trim(),u+="",xi.lastIndex=0,xi.test(c)||(p=Se(c),_=Se(u)),_?p!==_&&(c=bi(t,f,c,_)+_):p&&(u+=p),this.add(o,"setProperty",c,u,i,s,0,0,f),r.push(f),y.push(f,o[f]);else if(m!=="undefined"){if(l&&f in l?(c=typeof l[f]=="function"?l[f].call(n,i,t,s):l[f],ve(c)&&~c.indexOf("random(")&&(c=Lr(c)),Se(c+"")||(c+=qe.units[f]||Se(Yn(t,f))||""),(c+"").charAt(1)==="="&&(c=Yn(t,f))):c=Yn(t,f),h=parseFloat(c),v=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),d=parseFloat(u),f in Zn&&(f==="autoAlpha"&&(h===1&&Yn(t,"visibility")==="hidden"&&d&&(h=0),y.push("visibility",o.visibility),gi(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),f!=="scale"&&f!=="transform"&&(f=Zn[f],~f.indexOf(",")&&(f=f.split(",")[0]))),w=f in ti,w){if(this.styles.save(f),b||(x=t._gsap,x.renderTransform&&!e.parseTransform||Ir(t,e.parseTransform),M=e.smoothOrigin!==!1&&x.smooth,b=this._pt=new Ne(this._pt,o,Jt,0,1,x.renderTransform,x,0,-1),b.dep=1),f==="scale")this._pt=new Ne(this._pt,x,"scaleY",x.scaleY,(v?Os(x.scaleY,v+d):d)-x.scaleY||0,_l),this._pt.u=0,r.push("scaleY",f),f+="X";else if(f==="transformOrigin"){y.push(Dn,o[Dn]),u=Aw(u),x.svg?yl(t,u,0,M,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==x.zOrigin&&gi(this,x,"zOrigin",x.zOrigin,_),gi(this,o,f,Do(c),Do(u)));continue}else if(f==="svgOrigin"){yl(t,u,1,M,0,this);continue}else if(f in nf){Dw(this,x,f,h,v?Os(h,v+u):u);continue}else if(f==="smoothOrigin"){gi(this,x,"smooth",x.smooth,u);continue}else if(f==="force3D"){x[f]=u;continue}else if(f==="transform"){Iw(this,u,t);continue}}else f in o||(f=Ks(f)||f);if(w||(d||d===0)&&(h||h===0)&&!pw.test(u)&&f in o)p=(c+"").substr((h+"").length),d||(d=0),_=Se(u)||(f in qe.units?qe.units[f]:p),p!==_&&(h=bi(t,f,c,_)),this._pt=new Ne(this._pt,w?x:o,f,h,(v?Os(h,v+d):d)-h,!w&&(_==="px"||f==="zIndex")&&e.autoRound!==!1?_w:_l),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=gw);else if(f in o)Cw.call(this,t,f,c,v?v+u:u);else if(f in t)this.add(t,f,c||t[f],v?v+u:u,i,s);else{Bl(f,u);continue}w||y.push(f,o[f]),r.push(f)}}C&&jd(this)},render:function(t,e){if(e.tween._time||!Yl())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Yn,aliases:Zn,getSetter:function(t,e,n){var i=Zn[e];return i&&i.indexOf(",")<0&&(e=i),e in ti&&e!==Dn&&(t._gsap.x||Yn(t,"x"))?n&&ch===n?e==="scale"?bw:yw:(ch=n||{})&&(e==="scale"?ww:Sw):t.style&&!Nl(t.style[e])?vw:~e.indexOf("-")?xw:ql(t,e)},core:{_removeProperty:Rr,_getMatrix:Zl}};je.utils.checkPrefix=Ks;je.core.getStyleSaver=Jd;(function(a,t,e,n){var i=ze(a+","+t+","+e,function(s){ti[s]=1});ze(t,function(s){qe.units[s]="deg",nf[s]=1}),Zn[i[13]]=a+","+t,ze(n,function(s){var r=s.split(":");Zn[r[1]]=i[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ze("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){qe.units[a]="px"});je.registerPlugin(of);var Kl=je.registerPlugin(of)||je;Kl.core.Tween;let af=1,lf=2,cf=.2;class Fw{constructor(t){this.scene=t.scene,this.cannonWorld=t.cannonWorld,this.index=t.index,this.width=t.width||af,this.height=t.height||lf,this.depth=t.depth||cf,this.x=t.x||0,this.y=t.y||1,this.z=t.z||0,this.rotationX=t.rotationX||0,this.rotationY=t.rotationY||0,this.rotationZ=t.rotationZ||0,this.mesh=new Pn(t.geometry,t.material),this.mesh.name=`${this.index}\uBC88\uC9F8 \uB3C4\uBBF8\uB178`,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.position.set(this.x,this.y,this.z),this.mesh.rotation.set(this.rotationX,this.rotationY,this.rotationZ),this.scene.add(this.mesh),this.setCannonBody()}setCannonBody(){const t=new ko(new S(this.width/2,this.height/2,this.depth/2));this.cannonBody=new pt({mass:1,position:new S(this.x,this.y,this.z),shape:t,material:Fo}),this.cannonBody.quaternion.setFromAxisAngle(new S(0,1,0),this.rotationY),this.cannonBody.allowSleep=!0,this.cannonBody.sleepSpeedLimit=1,this.cannonBody.sleepTimeLimit=1,this.mesh.cannonBody=this.cannonBody,this.cannonWorld.addBody(this.cannonBody)}}const yo=document.querySelector(".canvas"),Qi=new Wh({canvas:yo,antialias:!0});Qi.shadowMap.enabled=!0;Qi.setSize(window.innerWidth,window.innerHeight);const ii=new gv;ii.background=new Bt("#222");const Te=new He(75,window.innerWidth/window.innerHeight,.1,1e3);Te.position.set(0,50,0);Te.lookAt(0,0,0);ii.add(Te);const zw=new Qy(Te,Qi.domElement),Nw=new Ev(60);ii.add(Nw);const an=15,Ei=new wv("#fff",1);Ei.castShadow=!0;Ei.shadow.mapSize.width=2048;Ei.shadow.mapSize.height=2048;const uf=Ei.clone(),hf=Ei.clone(),df=Ei.clone();Ei.position.set(-an,an,an);uf.position.set(an,an,an);hf.position.set(-an,an,-an);df.position.set(an,an,-an);ii.add(Ei,uf,hf,df);const ei=new Xy;ei.gravity.set(0,-10,0);ei.broadphase=new Rs(ei);const Io=new tr("default"),Fo=new tr("domino"),Ow=new ns(Io,Io,{friction:.5,restitution:.2});ei.defaultContactMaterial=Ow;const Bw=new ns(Fo,Io,{friction:.5,restitution:.2});ei.addContactMaterial(Bw);const kw=new ns(Fo,Fo,{friction:0,restitution:.2});ei.addContactMaterial(kw);const Uw=new Ax,ff=new pt({mass:0,position:new S(0,0,0),shape:Uw,material:Io});ff.quaternion.setFromAxisAngle(new S(-1,0,0),Math.PI/2);ei.addBody(ff);const Vw=new es(60,1,60),Gw=new Al({color:"#111"}),Jl=new Pn(Vw,Gw);Jl.position.set(0,-.5,0);Jl.receiveShadow=!0;ii.add(Jl);const Hw=new es(af,lf,cf),Ww=new Al({color:"#aaa"}),qw=new Al({color:"red"});let _h;const pf=[],Rt=[19,37,74,111,150],vh=function(a){return a<Rt[0]?[0,0,-a]:a==Rt[0]?[.5,0,-18.7]:a==Rt[1]?[17.7,0,-18.5]:a==Rt[2]?[17.7,0,18.5]:a==Rt[3]?[-18.7,0,18.5]:a>=Rt[0]&&a<Rt[1]?[a-Rt[0]+.2,0,-Rt[0]]:a>=Rt[1]&&a<Rt[2]?[Rt[1]-Rt[0],0,-Rt[0]-Rt[1]+a+.5]:a>=Rt[2]&&a<Rt[3]?[Rt[0]+Rt[2]-a-1,0,Rt[0]]:a>=Rt[3]&&a<Rt[4]?[-Rt[0],0,Rt[0]+Rt[3]-a-.5]:"else"};for(let a=0;a<Rt[Rt.length-1];a++){let t=a>=Rt[0]&&a<Rt[1]||a>=Rt[2]&&a<Rt[3]?Math.PI/2:0;t=a==18?-Math.PI/8:a==Rt[0]?-Math.PI/4:a==36?Math.PI*.4:a==Rt[1]?Math.PI*.2:a==Rt[2]?-Math.PI/4:a==Rt[3]?Math.PI/4:t;const e=a==18||a==19||a==36||a==37||a==74||a==111?qw:Ww;_h=new Fw({scene:ii,cannonWorld:ei,x:vh(a)[0],z:vh(a)[2],geometry:Hw,material:e,rotationY:t,index:a}),pf.push(_h)}const Xw=new Sv,mf=function(){const a=Xw.getDelta();let t=1/60;a<.01&&(t=1/120),ei.step(t,a,3),pf.forEach(e=>{e.cannonBody&&(e.mesh.position.copy(e.cannonBody.position),e.mesh.quaternion.copy(e.cannonBody.quaternion))}),zw.update(),Qi.render(ii,Te),Qi.setAnimationLoop(mf)};mf();function jw(){Te.aspect=window.innerWidth/window.innerHeight,Te.updateProjectionMatrix(),Qi.setSize(window.innerWidth,window.innerHeight),Qi.render(ii,Te)}const xh=new Mv,bl=new Et;let yh=!1;function Yw(){xh.setFromCamera(bl,Te);const a=xh.intersectObjects(ii.children);for(const t of a)if(a[0].object.cannonBody){const e=Te.position.x<0?300:Te.position.x>-30&&Te.position.x<30?0:-300,n=Te.position.z<0?300:-300;t.object.cannonBody.applyForce(new S(e,0,n)),yh||(yh=!0,Kl.to(Te.position,{delay:.5,duration:2.5,y:20,z:40}));break}}function $w(){Kl.to(Te.position,{delay:.5,duration:1.5,y:6,z:8})}yo.addEventListener("click",a=>{bl.x=a.clientX/yo.clientWidth*2-1,bl.y=-(a.clientY/yo.clientHeight*2-1),Yw()});window.addEventListener("resize",jw);window.addEventListener("load",$w);
