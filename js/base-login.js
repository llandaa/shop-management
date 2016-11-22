$(function(){
	$('#login_btn').on('click', function(){
	     var num=0;
		 var str="";
     $("input[type$='text']").each(function(n){
          if($(this).val()=="")
          {
			  alert(str+=""+$(this).attr("name")+"不能为空！\r\n",{
                title: '提示框',				
				icon:0,								
          }); 
		    num++;
            return false;            
          } 
		 });
		 	     						
	 $("input[type$='password']").each(function(n){
          if($(this).val()=="")
          {
			  alert(str+=""+$(this).attr("name")+"不能为空！\r\n",{
                title: '提示框',				
				icon:0,								
          }); 
		    num++;
            return false;            
          } 
          if($(this).val()!="18403553952")
          {
			  alert("对不起，您的密码不正确",{
                title: '提示框',				
				icon:0,								
          }); 
		    num++;
            return false;            
          } 
		 });
		  if(num>0){  return false;}	 	
          else{
          	if($("input[type$='text']").val()=="我爱喝酸奶" && $("input[type$='password']").val()=="18403553952"){
          		 alert('登陆成功！',{
               title: '提示框',				
			   icon:1,		
			  });
	          location.href="shopping-management.html";
			   close(index);
          	}else{
          		 alert('请核对您的用户名和密码',{
               title: '提示框',				
			   icon:1,		
			  });
	          
          	}
			 	
		  }		 		     						
	})
})
