(function(d) {
    var config = {
      kitId: 'ags4afe',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);
  
(function (d) {
    var config = {
        kitId: 'ztc4geb',
        scriptTimeout: 3000,
        async: true
    },
        h = d.documentElement, t = setTimeout(function () { h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"; }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a; h.className += " wf-loading"; tk.src = 'https://use.typekit.net/' + config.kitId + '.js'; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != "complete" && a != "loaded") return; f = true; clearTimeout(t); try { Typekit.load(config) } catch (e) { } }; s.parentNode.insertBefore(tk, s)
})(document);

$(function () {
    // マウスホイールを横スクロールにする
    const scrollElement = document.querySelector("main");

    scrollElement.addEventListener("wheel", (e) => {
        if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;

        const maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;

        if (
            (scrollElement.scrollLeft <= 0 && e.deltaY < 0) ||
            (scrollElement.scrollLeft >= maxScrollLeft && e.deltaY > 0)
        )
            return;

        e.preventDefault();
        scrollElement.scrollLeft += e.deltaY;
    });
});