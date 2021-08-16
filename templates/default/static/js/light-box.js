var lightBox7b2 = new Vue({
    el:'#zrz-light-box',
    data:{
        items:[],
        show:false,
        start:false,
        flktyHome:''
    },
    mounted:function(){
        var box = document.querySelectorAll('.content-img-box'),
            that = this;
        if(box.length <1 ) return;
        if(box.length > 0){
            var index = 0;
            box.forEach(function(ele){
                that.items.push({
                    'img':that.filterStr(ele.querySelectorAll('img')[0].src),
                    'des':ele.querySelectorAll('.addDesn')[0].innerText,
                });
                ele.setAttribute('data-i',index);
                ele.onclick = function(){
                    i = this.getAttribute('data-i');
                    that.showBox(i);
                }
                index++;
            });
        }
    },
    methods:{
        //过滤图片参数
        filterStr:function(src){
            var n = src.indexOf('?');
            return src.substring(0, n != -1 ? n : src.length);
        },
        showBox:function(i){
            this.show = true;
            if(!this.start){
                this.flktyHome = new Flickity('.zrz-light-box-in', {
                    cellAlign: 'left',
                    autoPlay: false,
                    wrapAround: true,
                    prevNextButtons: true,
                    fullscreen: true,
                });
                this.start = true;
            }
            //this.flktyHome.resize();
            this.flktyHome.select(i);
        }
    },
    updated:function(){
        
    },
})