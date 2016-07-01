// MakeForm(e);
  
  
  //随机颜色的文字
  randomColorText(15,'随机彩色文字');
  
  
  //创建div
  createDiv("通过这个创建一个div","a1");
  
  //创建一个span
  createSpan("<br>创建一个span","spanID","a1");
  
  
  //在div中批量创建span
  i=0;
  do{
  createSpan("<br>批量span"+i,"spanID"+i,"a1");

  i++;
  }
  while (i<10);
  
  
  //DOM操作 div的嵌套
  appendDiv("添加div到一个div里01","appendDiv01","a1");
  appendDiv("添加div到一个div里02","appendDiv02","appendDiv01");
  
  
  //改变不同div的样式
  document.getElementById("appendDiv01").style.color="red";
  document.getElementById("appendDiv02").style.color="blue";
  
  //建立一个div的dom
  createDiv("","dom01","domclass01");
  var dom01=document.getElementById("dom01");
  var dom01style=dom01.style;
  dom01.style.height="500px";
  dom01.style.width="500px";
  dom01.style.width="500px";
  
  
  //
  //
  //
  //
  //
  