import{_ as i,o as n,c as e,e as s,a as d,d as l}from"./app-otDwoQZb.js";const v={},r=d("p",null,"斐波那契数列，又称黄金分割数列，指的是0 1 1 2 3 5 8 13 21",-1),a=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getFibonacci(n) {
	var fibarr = [];
	var i = 0;
	while(i &lt; n) {
		if(i &lt;= 1) {
			fibarr.push(i)
		} else {
			fibarr.push(fibarr[i-1] + fibarr[i-2])
		}
		i ++;
	}
	return fibarr;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#具体实现：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var canvas = document.querySelector(&#39;canvas&#39;);

canvas.width = 600;
canvas.height = 480;

var coor = {
  x: 300,
  y: 240,
};

var ctx = canvas.getContext(&#39;2d&#39;);

function draw(r, n ,prevR) {
   if(n&gt;2) {
     switch(n%4) {
      case 0 :
        coor.y = coor.y - 5 * prevR;
        coor.y = coor.y + 5 * r;

        break;
      case 1 :
        coor.x = coor.x + 5 * prevR;
        coor.x = coor.x - 5 * r;
        break;
      case 2 :
        coor.y = coor.y + 5 * prevR;
        coor.y = coor.y - 5 * r;
        break;
      case 3 :
        coor.x = coor.x - 5 * prevR;
        coor.x = coor.x + 5 * r;
        break;
    }
  }
  ctx.beginPath();
  ctx.arc(coor.x,coor.y,5*r,Math.PI*0.5*(n),Math.PI*0.5*(n-1),true);
  if(n&gt;1) {
     switch(n%4) {
      case 0 :
        ctx.moveTo(coor.x - 5*r,coor.y);

        break;
      case 1 :
        ctx.moveTo(coor.x,coor.y + 5*r);
        break;
      case 2 :
       ctx.moveTo(coor.x + 5*r,coor.y);
        break;
      case 3 :
        ctx.moveTo(coor.x,coor.y-5*r);
        break;
    }
  }
  
  ctx.lineWidth = 1;
  ctx.strokeStyle = &#39;#fff&#39;;
  ctx.stroke();
}



function getFibonacci(n) {
  var fibarr = [];
  var i = 0;
  while(i&lt;n) {
    if(i&lt;=1) {
      fibarr.push(i);
    }else{
      fibarr.push(fibarr[i-1] + fibarr[i-2])
    }
    i++;
  }
  
  return fibarr;
}
var data = getFibonacci(10);

for(var i = 0,l=data.length;i&lt;l;i++) {
  if(data[i]!=0) {
    draw(data[i],i,data[i-1]);
    
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function c(b,u){return n(),e("div",null,[r,s(" 生成数组的方法 "),a])}const t=i(v,[["render",c],["__file","S007-使用canvas绘制一个有限度的斐波那契数列的曲线.html.vue"]]);export{t as default};
