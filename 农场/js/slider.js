window.onload = function () {
    function $(id) {
        return document.getElementById(id);
    }
    var js_slider = $("js_slider");
    var slider_main_block = $("slider_main_block");
    var imgs = slider_main_block.children;
    var slider_ctrl = $("slider_ctrl");
    for (var i=0;i<imgs.length;i++)
    {
        var span = document.createElement("span");
        span.className = "slider-ctrl-con"
        span.innerHTML = imgs.length-i;
        slider_ctrl.insertBefore(span,slider_ctrl.children[1]);
    }
    var spans = slider_ctrl.children;
    spans[1].setAttribute("class","slider-ctrl-con current");

    var scrollwidth = js_slider.clientWidth;
    for (var i=1;i<imgs.length;i++)
    {
        imgs[i].style.left = scrollwidth+"px";
    }

    var iNow=0;
    for (var k in spans){
        spans[k].onclick = function () {
            //alert(this.innerHTML);
            if (this.className == "slider-ctrl-prev")
            {
                animate(imgs[iNow],{left:scrollwidth});
                --iNow < 0? iNow=imgs.length-1:iNow;
                imgs[iNow].style.left=-scrollwidth+"px";
                animate(imgs[iNow],{left:0});
                setSquare();
            }
            else if (this.className =="slider-ctrl-next")
            {
                autoPlay()
            }
            else{
                var that = this.innerHTML-1;
                if (that>iNow)
                {
                    animate(imgs[iNow],{left:-scrollwidth});
                    imgs[that].style.left=scrollwidth+"px";
                    animate(imgs[that],{left:0});
                }
                else if (that<iNow)
                {
                    animate(imgs[iNow],{left:scrollwidth});
                    imgs[that].style.left=-scrollwidth+"px";
                    animate(imgs[that],{left:0});
                }

                iNow=that;
                animate(imgs[that],{left:0});
                setSquare();
            }
        }
    }
    function setSquare() {
        for (var i=1;i<spans.length-1;i++)
        {
            spans[i].className="slider-ctrl-con";
        }
            spans[iNow+1].className="slider-ctrl-con current";
    }
    var timer = null;
    var speed=5000;
    timer = setInterval(autoPlay,speed);
    function autoPlay() {
        animate(imgs[iNow],{left:-scrollwidth});
        ++iNow > imgs.length-1? iNow=0:iNow;
        imgs[iNow].style.left=scrollwidth+"px";
        animate(imgs[iNow],{left:0});
        setSquare();
    }
    js_slider.onmouseover = function () {
        clearInterval(timer);
    }
    js_slider.onmouseout=function () {
        clearInterval(timer);
        timer = setInterval(autoPlay,speed);
    }

    //以上是轮播图
    //
    // var nav = document.getElementById("nav");
    // var lis = document.getElementsByTagName("li");
    // var curr=0;
    // for (var i=0;i<lis.length;i++)
    // {
    //     lis[i].onclick=function () {
    //         lis[i].classList.add("first");
    //
    //     }
    // }

    //tab栏切换
    var lis = document.getElementById("mt").getElementsByTagName("li");
    var divs = document.getElementById("mb").getElementsByTagName("div");
    for (var i=0;i<lis.length;i++)
    {
        lis[i].index=i;
        lis[i].onmouseover= function(){
            for(var j=0;j<lis.length;j++)
            {
                lis[j].className = "";
                divs[j].className = "";
            }
            divs[this.index].className="show";
        }
    }

    //nav下拉菜单
    function List(id) {  //  获取对象
        this.id = document.getElementById(id);  // 取 id 值
        this.lis = this.id.children[0].children;  // 获取一级菜单所有的li
    }
    // init 初始化
    List.prototype.init = function() {  // 遍历所有的li 显示和隐藏
        var that  = this;
        for(var i=0;i<this.lis.length;i++)
        {
            this.lis[i].index = i;
            this.lis[i].onclick=function () {
                lis.className=""
;                that.className="lione"
            }
            this.lis[i].onmouseover = function() {
                that.show(this.children[1]);  //  显示出来
            }
            this.lis[i].onmouseout = function() {
                that.hide(this.children[1]);  // 隐藏起来
            }
        }
    }
    //  显示模块
    List.prototype.show = function(obj) {
        obj.style.display = "block";
    }
    // 隐藏模块
    List.prototype.hide = function(obj) {
        obj.style.display = "none";
    }
    var list = new List("list");  // 实例化了一个对象 叫  list
    list.init();

    
    //content
    
    var anniu=document.getElementById("anniu");
    anniu.onmouseover=function () {
        anniu.onmouseout=function () {
            anniu.src="image/anniu1.png";
        }
        anniu.src="image/anniu.png";
    }
    var anniu1=document.getElementById("anniu1");
    anniu1.onmouseover=function () {
        anniu1.onmouseout=function () {
            anniu1.src="image/anniu.png";
        }
        anniu1.src="image/anniu1.png";
    }
    var anniu2=document.getElementById("anniu2");
    anniu2.onmouseover=function () {
        anniu2.onmouseout=function () {
            anniu2.src="image/zixun.png";
        }
        anniu2.src="image/zixun1.png";
    }
}