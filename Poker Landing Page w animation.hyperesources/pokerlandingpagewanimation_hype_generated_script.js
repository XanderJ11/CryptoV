//	HYPE.documents["Poker Landing Page w animation"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="Poker%20Landing%20Page%20w%20animation.hyperesources",f="Poker Landing Page w animation",g="pokerlandingpagewanimation_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/pokerlandingpagewanimation_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=null==navigator.userAgentData&&navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_768F||null!=window.HYPE_dtl_768F)||true==!0||null!=c&&10>c;a=!0==d?"HYPE-768.full.min.js":"HYPE-768.thin.min.js";c=!0==d?"F":"T";
d=d?"":"";if(false==!1&&(a=k("HYPE_768"+c,"HYPE_dtl_768"+c,a,d),false==!0&&(a=a||k("HYPE_w_768","HYPE_wdtl_768","HYPE-768.waypoints.min.js","")),true==!0&&(a=a||k("Matter","HYPE_pdtl_768","HYPE-768.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=
document.getElementsByTagName("div"),b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"lockscreen",source:"function(hypeDocument, element, event) {\tdocument.body.style.overflow = \"hidden\";\n}",identifier:"106"},{name:"centerScene",source:"function(hypeDocument, element, event) {\tfunction centerScene(hypeDocument, element, event) {\n    var scene = hypeDocument.currentSceneElement();\n    scene.style.position = \"absolute\";\n    scene.style.top = \"50%\";\n    scene.style.left = \"50%\";\n    scene.style.transform = \"translate(-50%, -50%)\";\n}\n\nwindow.onload = function() {\n    centerScene(hypeDocument);\n};\nwindow.onresize = function() {\n    centerScene(hypeDocument);\n};\n\n\t\n}",identifier:"245"},{name:"gravityAsk",source:"function(hypeDocument, element, event) {\t\n\tif (typeof DeviceMotionEvent.requestPermission === 'function') {\n    DeviceMotionEvent.requestPermission().then(response => {\n        if (response === 'granted') {\n            console.log(\"Motion access granted\");\n        }\n    }).catch(console.error);\n}\n\n}",identifier:"375"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_768"+c](f,g,{"3":{p:1,n:"backdrop.jpg",g:"65",o:true,t:"@1x"},"-2":{n:"blank.gif"},"4":{p:1,n:"backdrop_2x.jpg",g:"65",o:true,t:"@2x"},"0":{p:1,n:"red.png",g:"19",t:"@1x"},"1":{p:1,n:"blue.png",g:"21",t:"@1x"},"2":{p:1,n:"black.png",g:"23",t:"@1x"},"-1":{n:"PIE.htc"}},
l,[],e,[{n:"Untitled Scene",o:"1",X:[0]}],[{o:"244",A:{a:[{p:4,h:"106"},{p:4,h:"375"}]},p:"600px",a:100,Y:390,Z:750,b:100,cA:true,c:"#000",L:[],bY:0.33,d:390,U:{"376":{V:{"Main Timeline":"435"},W:"435",n:"Symbol"}},T:{"435":{c:"376",q:false,z:2,i:"435",a:[{y:0,i:"e",s:1,z:0,o:"377",f:"c"},{f:"c",y:0,z:2,i:"bL",e:2.2,s:20,o:"377"},{y:2,i:"bL",s:2.2,z:0,o:"377",f:"c"}],n:"Main Timeline",f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:10.15,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",y:0,z:2,i:"f",e:4,s:0,o:"376"},{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:2,z:2,i:"f",e:-4,s:4,o:"376"},{f:"c",y:4,z:2,i:"f",e:0,s:-4,o:"376"},{f:"c",y:6,z:1,i:"f",e:0,s:0,o:"376"},{f:"c",y:7,z:1,i:"f",e:-11,s:0,o:"376"},{f:"c",y:8,z:0.15,i:"f",e:-3,s:-11,o:"376"},{f:"c",y:8.15,z:0.15,i:"f",e:-13,s:-3,o:"376"},{f:"c",y:9,z:0.14,i:"f",e:-13,s:-13,o:"376"},{f:"c",y:9.14,z:0.16,i:"f",e:2,s:-13,o:"376"},{f:"c",y:10,z:0.15,i:"f",e:0,s:2,o:"376"},{y:10.15,i:"f",s:0,z:0,o:"376",f:"c"}],f:30,b:[{D:2,H:true,E:true,z:false,F:0,G:0,C:0,b:"435"}]}},bZ:180,O:["386","385","376","384","377","387","388","389","390","391","392","395","393","394","397","396","398","399","400","401","402","403","404","405","406","407","408","409","410","378","379","380","381","382","420","413","429","411","412","414","415","434","418","416","417","419","421","422","423","424","425","426","427","428","430","431","432","433","383"],n:"Mobile","_":0,v:{"393":{b:85,z:20,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"21",bF:"376",bU:0.22,j:"absolute",k:"div",bV:0.033,aI:"50%",aJ:"50%",bW:0.0022,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:72,J:"None"},"414":{b:708,z:42,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"19",bF:"376",bU:0.22,j:"absolute",k:"div",aI:"50%",aJ:"50%",bW:0.0011,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:300,J:"None"},"421":{b:740,z:51,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"21",bF:"376",bU:0.22,j:"absolute",k:"div",aI:"50%",aJ:"50%",bW:0.0022,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:236,J:"None"},"379":{b:275,z:5,c:124,d:32,gg:"1",aS:8,cQ:1,aT:8,f:-2,bS:100,cR:1,aU:8,bF:"376",Q:11,aV:8,tX:0,R:"#000",j:"absolute",S:0,k:"div",bV:0,T:3,tY:0,bW:0.003,Z:"break-word",r:"inline",s:"AppleGothic,sans-serif",t:33,bM:"1",F:"center",v:"bold",G:"#FFF",w:"POKER<br>",x:"visible",a:165,y:"preserve"},"407":{b:117,z:34,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"23",bF:"376",bU:0.22,j:"absolute",k:"div",bV:0.033,aI:"50%",aJ:"50%",bW:0.0033,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:249,J:"None"},"386":{c:470,bS:100,d:50,r:"none",cY:"0",I:"Solid",J:"Solid",K:"Solid",g:"#0BED00",L:"Solid",bM:"1",M:1,bF:"376",N:1,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",P:1,O:1,C:"#D8DDE4",z:12,k:"div",D:"#D8DDE4",a:0,b:0},"387":{b:53,z:13,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"19",bF:"376",bU:0.22,j:"absolute",k:"div",bV:0.033,aI:"50%",aJ:"50%",bW:0.0011,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:55,J:"None"},"415":{b:708,z:43,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"19",bF:"376",bU:0.22,j:"absolute",k:"div",aI:"50%",aJ:"50%",bW:0.0011,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:380,J:"None"},"394":{b:85,z:21,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"21",bF:"376",bU:0.22,j:"absolute",k:"div",bV:0.033,aI:"50%",aJ:"50%",bW:0.0022,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:104,J:"None"},"422":{b:740,z:52,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"21",bF:"376",bU:0.22,j:"absolute",k:"div",aI:"50%",aJ:"50%",bW:0.0022,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:332,J:"None"},"408":{b:117,z:36,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"23",bF:"376",bU:0.22,j:"absolute",k:"div",bV:0.033,aI:"50%",aJ:"50%",bW:0.0033,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:296,J:"None"},"388":{b:53,z:14,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"19",bF:"376",bU:0.22,j:"absolute",k:"div",bV:0.033,aI:"50%",aJ:"50%",bW:0.0011,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:136,J:"None"},"409":{b:117,z:37,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"23",bF:"376",bU:0.22,j:"absolute",k:"div",bV:0.033,aI:"50%",aJ:"50%",bW:0.0033,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:343,J:"None"},"416":{b:740,z:44,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"21",bF:"376",bU:0.22,j:"absolute",k:"div",aI:"50%",aJ:"50%",bW:0.0022,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:76,J:"None"},"395":{b:85,z:22,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"21",bF:"376",bU:0.22,j:"absolute",k:"div",bV:0.033,aI:"50%",aJ:"50%",bW:0.0022,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:40,J:"None"},"423":{b:740,z:53,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"21",bF:"376",bU:0.22,j:"absolute",k:"div",aI:"50%",aJ:"50%",bW:0.0022,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:364,J:"None"},"430":{b:772,z:60,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"23",bF:"376",bU:0.22,j:"absolute",k:"div",aI:"50%",aJ:"50%",bW:0.0033,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:253,J:"None"},"389":{b:53,z:15,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"19",bF:"376",bU:0.22,j:"absolute",k:"div",bV:0.033,aI:"50%",aJ:"50%",bW:0.0011,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:168,J:"None"},"417":{b:740,z:45,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"21",bF:"376",bU:0.22,j:"absolute",k:"div",aI:"50%",aJ:"50%",bW:0.0022,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:108,J:"None"},"396":{b:85,z:23,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"21",bF:"376",bU:0.22,j:"absolute",k:"div",bV:0.033,aI:"50%",aJ:"50%",bW:0.0022,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:200,J:"None"},"424":{b:740,z:54,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"21",bF:"376",bU:0.22,j:"absolute",k:"div",aI:"50%",aJ:"50%",bW:0.0022,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:396,J:"None"},"431":{b:772,z:61,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"23",bF:"376",bU:0.22,j:"absolute",k:"div",aI:"50%",aJ:"50%",bW:0.0033,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:300,J:"None"},"397":{b:86,z:24,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"21",bF:"376",bU:0.22,j:"absolute",k:"div",bV:0.033,aI:"50%",aJ:"50%",bW:0.0022,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:153,J:"None"},"418":{b:740,z:46,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"21",bF:"376",bU:0.22,j:"absolute",k:"div",aI:"50%",aJ:"50%",bW:0.0022,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:44,J:"None"},"425":{b:772,z:55,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"23",bF:"376",bU:0.22,j:"absolute",k:"div",aI:"50%",aJ:"50%",bW:0.0033,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:44,J:"None"},"432":{b:772,z:62,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"23",bF:"376",bU:0.22,j:"absolute",k:"div",aI:"50%",aJ:"50%",bW:0.0033,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:347,J:"None"},"398":{b:85,z:25,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"21",bF:"376",bU:0.22,j:"absolute",k:"div",bV:0.033,aI:"50%",aJ:"50%",bW:0.0022,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:232,J:"None"},"419":{b:740,z:47,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"21",bF:"376",bU:0.22,j:"absolute",k:"div",aI:"50%",aJ:"50%",bW:0.0022,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:204,J:"None"},"426":{b:772,z:56,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"23",bF:"376",bU:0.22,j:"absolute",k:"div",aI:"50%",aJ:"50%",bW:0.0033,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:91,J:"None"},"433":{b:772,z:63,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"23",bF:"376",bU:0.22,j:"absolute",k:"div",aI:"50%",aJ:"50%",bW:0.0033,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:396,J:"None"},"399":{b:85,z:26,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"21",bF:"376",bU:0.22,j:"absolute",k:"div",bV:0.033,aI:"50%",aJ:"50%",bW:0.0022,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:279,J:"None"},"427":{b:772,z:57,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"23",bF:"376",bU:0.22,j:"absolute",k:"div",aI:"50%",aJ:"50%",bW:0.0033,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:140,J:"None"},"434":{R:"#000",S:0,bF:"376",aI:6,T:3,aJ:6,dB:"button",aK:6,X:3.3,aL:6,Z:"break-word",bM:"2",aP:"crosshair",a:172,b:719,c:108,d:36,aS:3,aT:3,g:"#FFF",aU:3,bS:100,aV:3,j:"absolute",aW:0,k:"div",A:"#000",bU:1.11,aX:0,B:"#000",C:"#000",bV:0.033,D:"#000",cT:0.033,bW:0.003,aZ:0,F:"center",aA:{a:[{p:5,j:"sms:9492643446?body=I%20am%20interested%20in%20joining%20the%20poker%20tournament.",k:true}]},G:"#000",r:"inline",s:"AppleGothic,sans-serif",I:"Solid",t:33,J:"Solid",K:"Solid",bA:"#000",v:"bold",L:"Solid",w:"JOIN",M:3,bB:0,x:"visible",N:3,bC:0,gg:"1",O:3,y:"preserve",z:64,bD:"none",P:3,Q:3},"428":{b:772,z:58,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"23",bF:"376",bU:0.22,j:"absolute",k:"div",aI:"50%",aJ:"50%",bW:0.0033,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:187,J:"None"},"400":{b:85,z:27,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"21",bF:"376",bU:0.22,j:"absolute",k:"div",bV:0.033,aI:"50%",aJ:"50%",bW:0.0022,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:328,J:"None"},"380":{b:386,z:6,c:264,d:32,gg:"1",aS:8,e:1,cQ:1,aT:8,f:2,bS:100,cR:1,aU:8,bF:"376",Q:11,aV:8,tX:0,R:"#000",j:"absolute",S:0,tY:0,bV:0,T:3,k:"div",bW:0.0040000002,Z:"break-word",r:"inline",s:"AppleGothic,sans-serif",t:33,bM:"1",F:"center",v:"bold",G:"#FFF",w:"TOURNAMENT<br>",x:"visible",a:95,y:"preserve"},"401":{b:85,z:28,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"21",bF:"376",bU:0.22,j:"absolute",k:"div",bV:0.033,aI:"50%",aJ:"50%",bW:0.0022,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:360,J:"None"},"429":{b:675,z:59,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"23",bF:"376",bU:0.33,j:"absolute",cT:0.033,k:"div",bV:0.033,aI:"50%",aJ:"50%",bW:0.0033,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:248,J:"None"},"381":{b:497,z:7,c:154,d:32,gg:"1",aS:8,e:1,cQ:1,aT:8,f:-2,bS:100,cR:1,aU:8,bF:"376",Q:11,aV:8,tX:0,R:"#000",j:"absolute",S:0,tY:0,bV:0,T:3,k:"div",bW:0.0040000002,Z:"break-word",r:"inline",s:"AppleGothic,sans-serif",t:22,bM:"1",F:"center",v:"bold",G:"#FFF",w:"100% LEGAL<br>",x:"visible",a:151,y:"preserve"},"402":{b:85,z:29,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"21",bF:"376",bU:0.22,j:"absolute",k:"div",bV:0.033,aI:"50%",aJ:"50%",bW:0.0022,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:392,J:"None"},"382":{b:608,z:8,c:154,d:32,gg:"1",aS:8,e:1,cQ:1,aT:8,f:2,bS:100,cR:1,aU:8,bF:"376",Q:11,aV:8,tX:0,R:"#000",j:"absolute",S:0,tY:0,bV:0,T:3,k:"div",bW:0.0040000002,Z:"break-word",r:"inline",s:"AppleGothic,sans-serif",t:22,bM:"1",F:"center",v:"bold",G:"#FFF",w:"WIN A PS5!<br>",x:"visible",a:161,y:"preserve"},"403":{b:117,z:30,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"23",bF:"376",bU:0.22,j:"absolute",k:"div",bV:0.033,aI:"50%",aJ:"50%",bW:0.0033,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:40,J:"None"},"410":{b:117,z:38,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"23",bF:"376",bU:0.22,j:"absolute",k:"div",bV:0.033,aI:"50%",aJ:"50%",bW:0.0033,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:392,J:"None"},"376":{x:"visible",a:-40,bS:383,b:-53,j:"absolute",cA:false,c:472,k:"div",bY:1,d:856,z:2,bX:false,bZ:180,cV:[],f:0},"404":{b:117,z:31,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"23",bF:"376",bU:0.22,j:"absolute",k:"div",bV:0.033,aI:"50%",aJ:"50%",bW:0.0033,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:87,J:"None"},"383":{c:470,bS:100,d:50,r:"none",cY:"0",I:"Solid",J:"Solid",K:"Solid",g:"#0BED00",L:"Solid",bM:"1",M:1,w:"",bF:"376",j:"absolute",N:1,x:"visible",B:"#D8DDE4",P:1,O:1,C:"#D8DDE4",A:"#D8DDE4",z:9,D:"#D8DDE4",k:"div",a:0,b:804},"411":{b:708,z:39,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"19",bF:"376",bU:0.22,j:"absolute",k:"div",aI:"50%",aJ:"50%",bW:0.0011,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:59,J:"None"},"390":{b:53,z:16,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"19",bF:"376",bU:0.22,j:"absolute",k:"div",bV:0.033,aI:"50%",aJ:"50%",bW:0.0011,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:264,J:"None"},"377":{p:"no-repeat",bJ:0.5,c:390,q:"100% 100%",bS:100,d:750,r:"inline",cY:"0",e:1,bL:20,aX:0,h:"65",w:"",bF:"376",j:"absolute",x:"visible",k:"div",dB:"img",z:3,bI:0.55671387,a:40,b:53},"405":{b:117,z:32,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"23",bF:"376",bU:0.22,j:"absolute",k:"div",bV:0.033,aI:"50%",aJ:"50%",bW:0.0033,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:136,J:"None"},"384":{c:40,bS:100,d:854,r:"none",cY:"0",I:"Solid",J:"Solid",K:"Solid",g:"#0BED00",L:"Solid",bM:"1",M:1,bF:"376",N:1,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",P:1,O:1,C:"#D8DDE4",z:10,k:"div",D:"#D8DDE4",a:430,b:0},"412":{b:708,z:40,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"19",bF:"376",bU:0.22,j:"absolute",k:"div",aI:"50%",aJ:"50%",bW:0.0011,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:140,J:"None"},"391":{b:53,z:17,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"19",bF:"376",bU:0.22,j:"absolute",k:"div",bV:0.033,aI:"50%",aJ:"50%",bW:0.0011,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:296,J:"None"},"392":{b:53,z:19,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"19",bF:"376",bU:0.22,j:"absolute",k:"div",bV:0.033,aI:"50%",aJ:"50%",bW:0.0011,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:376,J:"None"},"420":{b:653,z:48,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"21",bF:"376",bU:0.33,j:"absolute",cT:0.033,k:"div",bV:0.033,aI:"50%",aJ:"50%",bW:0.0033,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:216,J:"None"},"378":{b:164,z:4,c:144,d:32,gg:"1",bR:0,aS:8,cQ:1,aT:8,f:2,bS:100,cR:1,aU:8,bF:"376",Q:11,aV:8,tX:0,R:"#000",j:"absolute",aW:0,tY:0,bV:0,S:0,T:3,aX:0,k:"div",bW:0.0020000001,aY:0,Z:"break-word",r:"inline",s:"AppleGothic,sans-serif",t:33,bM:"1",F:"center",v:"bold",G:"#FFF",w:"KSTATE<br>",x:"visible",a:155,y:"preserve"},"406":{b:117,z:33,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"23",bF:"376",bU:0.22,j:"absolute",k:"div",bV:0.033,aI:"50%",aJ:"50%",bW:0.0033,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:183,J:"None"},"385":{c:38,bS:100,d:854,r:"none",cY:"0",I:"Solid",J:"Solid",K:"Solid",g:"#0BED00",L:"Solid",bM:"1",M:1,bF:"376",N:1,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",P:1,O:1,C:"#D8DDE4",z:11,k:"div",D:"#D8DDE4",a:0,b:0},"413":{b:675,z:41,K:"None",c:31,L:"None",d:31,M:0,N:0,bS:100,O:0,P:0,h:"19",bF:"376",bU:0.33,j:"absolute",cT:0.033,k:"div",bV:0.033,aI:"50%",aJ:"50%",bW:0.0033,aK:"50%",p:"no-repeat",A:"#D8DDE4",aL:"50%",q:"100% 100%",B:"#D8DDE4",C:"#D8DDE4",D:"#D8DDE4",bM:"2",bN:{a:[{p:11}]},w:"",x:"visible",I:"None",a:184,J:"None"}}}],{},h,{},
(function (shouldShow, mainContentContainer) {
	var loadingPageID = mainContentContainer.id + "_loading";
	var loadingDiv = document.getElementById(loadingPageID);

	if(shouldShow == true) {
		if(loadingDiv == null) {	
			loadingDiv = document.createElement("div");
			loadingDiv.id = loadingPageID;
			loadingDiv.style.cssText = "overflow:hidden;position:absolute;width:150px;top:40%;left:0;right:0;margin:auto;padding:2px;border:3px solid #BBB;background-color:#EEE;border-radius:10px;text-align:center;font-family:Helvetica,Sans-Serif;font-size:13px;font-weight:700;color:#AAA;z-index:100000;";
			loadingDiv.innerHTML = "Loading";
			mainContentContainer.appendChild(loadingDiv);
		}
 
		loadingDiv.style.display = "block";
		loadingDiv.removeAttribute("aria-hidden");
		mainContentContainer.setAttribute("aria-busy", true);
	} else {
		loadingDiv.style.display = "none";
		loadingDiv.setAttribute("aria-hidden", true);
		mainContentContainer.removeAttribute("aria-busy");
	}
})

,true,true,-1,true,true,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
