

function randomColorText(num,texts){

i=0;
  

do
{
	
document.write("<div style='color:rgb("+Math.round(255*Math.random())+","+Math.round(255*Math.random())+","+Math.round(255*Math.random())+")';>"+i+texts+"</div></br>");
i++;
}
while (i<num);
};

function MakeForm(e)  
{  
  
    // 创建一个 form  
    var form1 = document.createElement("form");  
    form1.id = "form1";  
    form1.name = "form1";  
  
    // 添加到 body 中  
    document.body.appendChild(form1);  
  
    // 创建一个输入  
    var input = document.createElement("input");  
    // 设置相应参数  
    input.type = "text";  
    input.name = "value1";  
    input.value = "1234567";  
  
    // 将该输入框插入到 form 中  
    form1.appendChild(input);  
  
    // form 的提交方式  
    form1.method = "POST";  
    // form 提交路径  
    form1.action = "/servlet/info";  
  
    // 对该 form 执行提交  
    form1.submit();  
    // 删除该 form  
    document.body.removeChild(form1);  
};  



//创建div的function

function createDiv(content,idname,classname){
var newDiv=document.createElement("div");
  /**ss.style.color=red;
  ss.style.font-size=50pt;*/
  newDiv.id=idname;
  //ss.type=node;
  //ss.className=classname; 
  
  newDiv.innerHTML=content;  
  document.body.appendChild(newDiv);  
  
};



//创建span的function
function createSpan(contentx,idnamex,appendId){
	var newSpan=document.createElement("span");
	var App=appendId;
	//alert(appendId);
	newSpan.id=idnamex;
	//newSpan.className=classNamex;
	newSpan.innerHTML=contentx;
	
	document.getElementById(App).appendChild(newSpan);
	
	
};


function appendDiv(content,idname,appendId){
var newDiv=document.createElement("div");
  /**ss.style.color=red;
  ss.style.font-size=50pt;*/
  newDiv.id=idname;
  //ss.type=node;
  //ss.className=classname; 
  
  newDiv.innerHTML=content;  
  document.getElementById(appendId).appendChild(newDiv);
  
};


  function createDom(domId){
  
  createDiv("aa",domId,"domclass");
  var dom=document.getElementById(domId);
  var domstyle=dom.style;
  dom.innerHTML=domId;
  domstyle.textAlign="center";
  dom.style.height="500px";
  dom.style.width="500px";
  domstyle.zIndex=1;
  domstyle.backgroundColor="gray";
  domstyle.position="relative";
  domstyle.float="left";
  domstyle.draggable="true";
  domstyle.cursor="hand"; 
  domstyle.border="1px solid #F00";  

  dom.onmousedown=function(){
	  alert(domstyle.leftmargin)
	  

  };
  /**domstyle.events=expression(ondragstart=function(){
	 // dom.offsetLeft=dom.offsetLeft+10px; 
  },
  ondrag=function(){});
  */
  
  alert('left'+dom.offsetLeft+'<br>Top'+dom.offsetTop+'<br>height'+dom.offsetHeight)
  
  
  
  
  
  
  }


