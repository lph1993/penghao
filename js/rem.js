!function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t,i){e.exports=i(2)},,function(e,t){!function(e){function t(){var t=o.getBoundingClientRect().width;t/i>540&&(t=540*i),e.rem=t/16,o.style.fontSize=e.rem+"px"}var i,n,r,a=e.document,o=a.documentElement,l=a.querySelector('meta[name="viewport"]'),s=a.querySelector('meta[name="flexible"]');if(l){var c=l.getAttribute("content").match(/initial\-scale=(["']?)([\d\.]+)\1?/);c&&(n=parseFloat(c[2]),i=parseInt(1/n))}else if(s){var c=s.getAttribute("content").match(/initial\-dpr=(["']?)([\d\.]+)\1?/);c&&(i=parseFloat(c[2]),n=parseFloat((1/i).toFixed(2)))}if(!i&&!n){var d=(e.navigator.appVersion.match(/android/gi),e.navigator.appVersion.match(/iphone/gi));i=e.devicePixelRatio,i=d?i>=3?3:i>=2?2:1:1,n=1/i}if(o.setAttribute("data-dpr",i),!l)if(l=a.createElement("meta"),l.setAttribute("name","viewport"),l.setAttribute("content","initial-scale="+n+", maximum-scale="+n+", minimum-scale="+n+", user-scalable=no"),o.firstElementChild)o.firstElementChild.appendChild(l);else{var m=a.createElement("div");m.appendChild(l),a.write(m.innerHTML)}e.dpr=i,e.addEventListener("resize",function(){clearTimeout(r),r=setTimeout(t,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(r),r=setTimeout(t,300))},!1),t()}(window)}]);