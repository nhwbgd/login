// 验证

// 　　兼容其他不支持placeholder的浏览器：
　　var PlaceHolder = { 
　　_support: (function() { 
　　return 'placeholder' in document.createElement('input'); 
　　})(), 
　　//提示文字的样式，需要在页面中其他位置定义 
　　className: 'vericode', 
　　init: function() { 
　　if (!PlaceHolder._support) { 
　　//未对textarea处理，需要的自己加上 
// 　　var inputs = document.getElementsByTagName('input'); 
	var inutP = document.getElementById("inputparent");
　　var inputs = inutP.getElementsByTagName('input');
　　PlaceHolder.create(inputs); 

	inputs[2].className = "verification-code vericode";
        } 
    }, 
　　create: function(inputs) { 
　　var input; 
　　if (!inputs.length) { 
　　inputs = [inputs]; 
        } 
　　for (var i = 0, length = inputs.length; i <length; i++) { 
　　input = inputs[i]; 

　　if (!PlaceHolder._support && input.attributes && input.attributes.placeholder) { 
　　PlaceHolder._setValue(input); 
            } 
        } 
    }, 
　　_setValue: function(input) { 
　　input.value = input.attributes.placeholder.nodeValue; 
　　input.className =PlaceHolder.className; 
	// input[2]["className"] = "";
    } 
}; 
PlaceHolder.init();
　　//页面初始化时对所有input做初始化 
　　//PlaceHolder.init(); 
　　//或者单独设置某个元素 
　　//PlaceHolder.create(document.getElementById('t1'));
$('.checkbox-wrap label').on('click', function() {
        $("input[name=autolog]").parent().removeClass().addClass('check-c')
        $("input[name=autolog]:checked").parent().removeClass().addClass('check-cd')
    })

// $("input[type='text']:first").focus()



	var checkAll = {
	    /**
	     * str 字符串常量
	     */

	    str: {
	        UserAuthentication:/^[0-9A-Za-z\u4e00-\u9fa5_]+$/,
	        phoneA:/^((\(\d{2,3}\))|(\d{3}\-))?1[3,8,5]{1}\d{9}$/,
	        passwordA:/^[a-zA-Z0-9 &!#$%()*+,-=.\/:;?@\[\]^_`<>{|}~]+$/,
	        emailA:/^\w+([-.]\w+)*@\w+([-]\w+)*\.(\w+([-]\w+)*\.)*[a-z]{2,3}$/,
	        vericodes:/^\d+$/
	    },
	    passwordStr: {
	        UPPER : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	        LOWER : "abcdefghijklmnopqrstuvwxyz",
	        NUMBER : "0123456789",
	        CHARACTER : "~`!@#$%^&*()_-+={}[]|;:,<>.?/"
	    },
	    msg: {
	    	msg0 : "用户名，4-16个字符/中文/数字/下划线",
	    	msg1 : "请输入正确的手机号码",
	    	msg2 : "密码长度6-20位",
	    	msg3 : $("<span><i></i><i></i><i></i></span>"),
	    	msg4 : "验证码不正确",
	    	msg5 : "请输入正确的邮箱地址",
	    	msg6 : "请输入验证码",
	    	msg7 : "两次密码输入不一致",
	    	msg8 : "大写字母、小写字母、数字和标点符号至少包含2种",
	    	msg9 : "请勾选"
	    },
	    onoff:null,
	    /**
	     * 对应校验条目
	     * @type {Object}
	     */
	    checkItem1: function(value){
	        if(value == " " || value == ""){
	        	return 0;
	        }else{
	            if(value.length < 4 || value.length > 16){
	            	return 0;
	            }else{
	            	return 1;
	            }
	        }
	    },
	    checkItem2: function(value){
	        if(value == " " || value == ""){
	        }else{
	            var item2Result = true;
	                if (!this.str.UserAuthentication.test(value)) {
	                    item2Result = false;
	                }
	            if(item2Result){
	            	return 1; 
	            }else{
	            	return 0;
	            }
	        }
	    },
	    checkItem3: function(value){
	        if(value == " " || value == ""){
	        	return 0;
	        }else{
	                    if (this.str.phoneA.test(value)) {
	                       return 1;
	                    }else{
	                    	return 0;
	                    }
	        }
	    },
	    checkItem4:function(value){

	    	 if(value == " " || value == ""){
	        	return 0;
	        }else if(value.length < 6 || value.length >20){
	        	return 0;
	        }else{
	                    if (this.str.passwordA.test(value)) {
	                       return 1;
	                    }else{
	                    	return 0;
	                    }
	        }
	    },
	     checkItem5: function(value){
	    	        if(value == ""){
	    	        	return 0;
	    	        }else{
	    	            var item3Result = {UPPER:0,LOWER:0,NUMBER:0,CHARACTER:0};
	    	            for (j in this.passwordStr) {
	    	                var strKey = j;
	    	                var strValue = this.passwordStr[strKey];
	    	                for (k = 0; k < value.length; k++) {
	    	                    if (strValue.indexOf(value.charAt(k)) > -1) {
	    	                        item3Result[strKey] = 1;
	    	                    }
	    	                }
	    	            }
	    	            if(item3Result.UPPER + item3Result.LOWER + item3Result.NUMBER +item3Result.CHARACTER > 1){
	    	            	return 1;
	    	            }else{
	    	            	return 0;
	    	            }
	    	        }
	    	    },
	    checkemail:function(value){
	    	if(value == " " || value == ""){
	    		return 0;
	    	}else{
	    		if(this.str.emailA.test(value)){
	    			return 1;
	    		}else{
	    			return 0;
	    		}
	    	}
	    },
	    checkveri:function(value){
	    	if(value == " " || value == ""){
	    		
	    		return 0;
	    	}else{
	    		return 1;
	    	}
	    },
	    checkvericode:function(value){
	    		if(value == " " || value == ""){
	    		
	    		return 0;
	    	}else{
	    		if(this.str.vericodes.test(value)){
	    			return 1;
	    		}else{
	    			return 0;
	    		}
	    	}
	    		
	    	
	    },
	    checkboxed:function(value){
	    	if(value){
	    		return 1;

	    	}else{
	    		return 0;
	    	}
	    },
//	    Vericountdown:function(){
//	    	jQuery('#veribtn').on("click",function(){
//	    		jQuery(this).hide().siblings(".vericode-btn").show();
//	    	})
//	    },
	    radios:function(){
			
			$('#Useragreement,#loginstatus').click(function(){
				if($(this).attr("checked")){
					$(this).removeAttr("checked")
				}else{
					$(this).attr("checked",true)
				}
				
			})
		},
	    checkTxzForm:function(){
	    	var formEmail = $('#email,#emails').attr('pass');
	    	if(formEmail == "n" || formEmail == undefined){
	    		alert('邮箱已注册')
	    		return false;
	    	}
	    	if(!$('#div_id_embed .gt_ajax_tip').hasClass('gt_success')){
	    		alert('请输入验证码')
	    		return false;
	    	}
	    },
	    init : function(){
	        var that = this;
	        // 用户名
	        jQuery('#username,#usernames').bind('keyup',function(event){

	                // var keycode=event.which;
	                // if(keycode==13){
	                //     return;
	                // }
	                var value = jQuery(this).val();
	                if(that.checkItem1(value) == 0){
	                	$('#username,#usernames').parent().find(".user-name-tip").html(that.msg.msg0).removeClass("gray-color").addClass("red-color verify-tips-text");
	                	$('#username,#usernames').addClass('transition-time text-wrong-style');
	                }else if(that.checkItem2(value) == 0){
	                	
	                	$('#username,#usernames').parent().find(".user-name-tip").html(that.msg.msg0).removeClass("gray-color").addClass("red-color verify-tips-text");
	                	$('#username,#usernames').addClass('transition-time text-wrong-style');
	                }else{
	                	$('#username').parent().find(".user-name-tip").html('').removeClass("red-color verify-tips-text").addClass("gray-color");
	                	$('#usernames').parent().find(".user-name-tip").html('').removeClass("red-color verify-tips-text").addClass("gray-color");

	                	$('#username,#usernames').removeClass('text-wrong-style');

	                	
	                }
	            });  
			    jQuery('#username').bind('blur',function(){
				  	$.ajax({
	                	url:"exists_username.do",
	                	type:"get",
	                	data:{param:$('#username').val()},
	                	dataType :'json',
	                	success:function(data){
	                		switch (data.status)
	                		{
	                			case "n":
	                			$('#username').parent().find('.user-name-tip').html(data.info).removeClass("gray-color").addClass("red-color verify-tips-text");
	                			$('#username').addClass('transition-time text-wrong-style');
	                			break;
	                			case "y":
	                			$('#username').parent().find('.user-name-tip').html('注：每60天可修改一次用户名').removeClass("red-color verify-tips-text").addClass("gray-color");
	                			$('#username').removeClass('text-wrong-style');
	                			break;
	                		}
	                		
	                	}
	                })
				  })
				
			// 手机
			$('#veribtn').attr('disabled',true);
			jQuery('#mobilephone,#oldmobilephone').bind('keyup',function(){
				var value = jQuery(this).val();
				if(that.checkItem3(value) == 0){
					$('#mobilephone,#oldmobilephone').parent().find('.form-tip').html(that.msg.msg1).addClass("red-color verify-tips-text");
					$('#mobilephone,#oldmobilephone').addClass('transition-time text-wrong-style');
					$('#veribtn').addClass('btn-disabled').removeClass('btn-default-main').attr('disabled',true);
				}else{
					$('#mobilephone,#oldmobilephone').parent().find('.form-tip').html('').removeClass("red-color verify-tips-text");
					$('#mobilephone,#oldmobilephone').removeClass('text-wrong-style');
					$('#veribtn').addClass('btn-default-main').removeClass('btn-disabled').removeAttr('disabled');
				}
				
			});
			jQuery('#mobilephone').bind('blur',function(){
				if(that.checkItem3($('#mobilephone').val()) == 1){
					$.ajax({
	                	url:"exists.do",
	                	type:"get",
	                	data:{param:$('#mobilephone').val()},
	                	dataType :'json',
	                	success:function(data){
	                		switch (data.status)
	                		{
	                			case "n":
	                			$('#mobilephone').parent().find('.form-tip').html("该手机号已注册").addClass("red-color verify-tips-text");
	                			break;
	                			case "y":
	                			$('#mobilephone').parent().find('.form-tip').html('').removeClass("red-color verify-tips-text");
	                			that.onoff = 1;
	                			break;
	                		}
	                		
	                	}
	                })
				}
			})
			jQuery('.checkbox-wrap label').on('click',function(){
				if(that.checkboxed($('#Useragreement').attr('checked')) == 0){
					$(this).parent().find('.form-tip').html(that.msg.msg9).addClass("red-color verify-tips-text");
				}else{
					$(this).parent().find('.form-tip').html('').removeClass("red-color verify-tips-text");
				}
			})
			jQuery('#oldmobilephone').bind('blur',function(){
				if(that.checkItem3($('#oldmobilephone').val()) == 1){
					$.ajax({
	                	url:"oldexists.do",
	                	type:"get",
	                	data:{param:$('#oldmobilephone').val()},
	                	dataType :'json',
	                	success:function(data){
	                		switch (data.status)
	                		{
	                			case "n":
	                			$('#oldmobilephone').parent().find('.form-tip').html(data.info	).addClass("red-color verify-tips-text");
	                			break;
	                			case "y":
	                			$('#oldmobilephone').parent().find('.form-tip').html('').removeClass("red-color verify-tips-text");
	                			break;
	                		}
	                		
	                	}
	                })
				}
			})
			// 密码 
			jQuery('#password').bind('keyup blur',function(){
				var value = jQuery(this).val();
				if(that.checkItem4(value) == 0){
					$('#password').parent().find('.form-tip').html(that.msg.msg2).addClass("red-color verify-tips-text");
					$('#password').addClass('transition-time text-wrong-style');
				}
				else if(that.checkItem5(value) == 0){
					$('#password').parent().find('.form-tip').html(that.msg.msg8).addClass("red-color verify-tips-text");
					$('#password').addClass('transition-time text-wrong-style');
				}else{
					$('#password').parent().find('.form-tip').removeClass("red-color verify-tips-text");
					$('#password').removeClass('text-wrong-style');
					that.msg.msg3.attr('class','intensity');
				
						$('#password').parent().find('.form-tip').html(that.msg.msg3);
				
					
						 window.PasswordUtil.analyzePwd(value,$('#password').parent().find('.form-tip'))
				}
			});
			jQuery('.form-eye-icon').bind('click',function(){
				if($('#password').attr("type") == "password"){
					$('#password').attr("type","text");
					$(this).addClass('disabled-glance')
				}else{
					$('#password').attr("type","password");
					$(this).removeClass('disabled-glance')
				}
			});
			// 修改密码  确认密码
			$('#setpassword').bind('keyup blur',function(){
				// alert()
				var value = jQuery(this).val();

				if(that.checkItem4(value) == 0){
					$('#setpassword').parent().find('.form-tip').html(that.msg.msg2).addClass("red-color verify-tips-text");
					$('#setpassword').addClass('transition-time text-wrong-style');
				}
				else if(value == $('#confirmpassword').val()){
					$('#confirmpassword').parent().find('.form-tip').html("").removeClass("red-color verify-tips-text");
					$('#confirmpassword').removeClass('transition-time text-wrong-style');
				}
				else if(that.checkItem5(value) == 0){
					$('#setpassword').parent().find('.form-tip').html(that.msg.msg8).addClass("red-color verify-tips-text");
					$('#setpassword').addClass('transition-time text-wrong-style');
				}else{
					$('#setpassword').parent().find('.form-tip').removeClass("red-color verify-tips-text");
					$('#setpassword').removeClass('text-wrong-style');
					that.msg.msg3.attr('class','intensity');
				
						$('#setpassword').parent().find('.form-tip').html(that.msg.msg3);
						window.PasswordUtil.analyzePwd(value,$('#setpassword').parent().find('.form-tip'))
					}
			})
			$('#confirmpassword').bind('keyup blur',function(){
				var value = jQuery(this).val();
				if(value != $('#setpassword').val()){
					$('#confirmpassword').parent().find('.form-tip').html(that.msg.msg7).addClass("red-color verify-tips-text");
					$('#confirmpassword').addClass('transition-time text-wrong-style');
					
					
				}else{
					$('#confirmpassword').parent().find('.form-tip').html("").removeClass("red-color verify-tips-text");
					$('#confirmpassword').removeClass('text-wrong-style');
					
				}
			})
			// 
			$('#modifyPass').bind('click',function(){
				if($('#setpassword').val() != $('#confirmpassword').val()){
					$('#confirmpassword').parent().find('.form-tip').html(that.msg.msg7).addClass("red-color verify-tips-text");
					$('#confirmpassword').addClass('transition-time text-wrong-style');

				}else if(that.checkItem5($('#setpassword').val()) == 0){
					$('#setpassword').parent().find('.form-tip').html(that.msg.msg8).addClass("red-color verify-tips-text");
					$('#setpassword').addClass('transition-time text-wrong-style');
				}else if(that.checkItem4($('#setpassword').val()) == 1 && that.checkItem5($('#setpassword').val()) == 1 && $('#setpassword').val() == $('#confirmpassword').val()){
					$('#loginform').submit();
				}else{
					$('#setpassword').parent().find('.form-tip').html(that.msg.msg2).addClass("red-color verify-tips-text");
					$('#setpassword').addClass('transition-time text-wrong-style');
				}
			})
			// 邮箱
			jQuery('#email,#emails').bind('keyup',function(){
				var value = jQuery(this).val();
				if(that.checkemail(value) == 0 ){
					$('#email,#emails').parent().find('.form-tip').html(that.msg.msg5).addClass("red-color verify-tips-text");
					$('#email,#emails').addClass('transition-time text-wrong-style');
				}else{
					$('#email,#emails').parent().find('.form-tip').html('').removeClass("red-color verify-tips-text");
					$('#email,#emails').removeClass('text-wrong-style');
				}
			});
			jQuery('#email,#emails').bind('blur',function(){
				var email = $('#email').length > 0 ? $('#email').val() : $('#emails').val();
				if(that.checkemail(email) == 1){
					$.ajax({
	                	url:"exists.do",
	                	type:"get",
	                	data:{param:email},
	                	dataType :'json',
	                	success:function(data){
	                		switch (data.status)
	                		{
	                			case "n":
	                			$('#email,#emails').parent().find('.form-tip').html("该邮箱已注册").addClass("red-color verify-tips-text");
	                			$('#email,#emails').attr('pass','n');
	                			break;
	                			case "y":
	                			$('#email,#emails').parent().find('.form-tip').html('').removeClass("red-color verify-tips-text");
	                			$('#email,#emails').attr('pass','y');
	                			that.onoff = 1;
	                			break;
	                		}
	                	}
	                })
				}
			})
			// 手机注册
			jQuery('#register').bind('click',function(){
				if(that.checkItem1($('#username').val()) == 1 && that.checkItem2($('#username').val()) == 1 && that.checkItem3($('#mobilephone').val()) == 1 && that.checkItem4($('#password').val()) == 1 && that.checkvericode($('#vericode').val()) == 1 && that.checkboxed($('#Useragreement').attr('checked')) == 1 && that.onoff == 1){
					$('#form').submit();
					$(this).attr('disabled',true);
				}else{
					if(that.checkItem1($('#username').val()) == 0 || that.checkItem2($('#username').val()) == 0){
						$('#username').parent().find(".user-name-tip").html(that.msg.msg0).removeClass("gray-color").addClass("red-color verify-tips-text");
	                	$('#username').addClass('transition-time text-wrong-style');
					} 
					if(that.checkItem3($('#mobilephone').val()) == 0){
						$('#mobilephone').parent().find('.form-tip').html(that.msg.msg1).addClass("red-color verify-tips-text");
						$('#mobilephone').addClass('transition-time text-wrong-style');
					}
					if(that.checkItem4($('#password').val()) == 0){
	                	$('#password').parent().find('.form-tip').html(that.msg.msg2).addClass("red-color verify-tips-text");
						$('#password').addClass('transition-time text-wrong-style');
					}
					if(that.checkvericode($('#vericode').val()) == 0){
				
						$('#vericode').parent().find('.form-tip').html(that.msg.msg6).addClass("red-color verify-tips-text");
						$('#vericode').addClass('transition-time text-wrong-style');
					}	
					
				}
				return false;
				
			})

		// 邮箱注册
		jQuery('#emailregister').bind('click',function(){
				// alert()
				
				if(that.checkItem1($('#username').val()) == 1 && that.checkItem2($('#username').val()) == 1 && that.checkItem4($('#password').val()) == 1 && that.checkemail($('#email').val()) == 1 && that.checkboxed($('#Useragreement').attr('checked')) == 1 && that.checkTxzForm() != false && that.onoff == 1){
					$(this).attr('disabled',true);
					$('#form').submit();
				}else{
					if(that.checkItem1($('#username').val()) == 0 || that.checkItem2($('#username').val()) == 0){
						$('#username').parent().find(".user-name-tip").html(that.msg.msg0).removeClass("gray-color").addClass("red-color verify-tips-text");
	                	$('#username').addClass('transition-time text-wrong-style');
					} 
					if(that.checkItem4($('#password').val()) == 0){
	                	$('#password').parent().find('.form-tip').html(that.msg.msg2).addClass("red-color verify-tips-text");
						$('#password').addClass('transition-time text-wrong-style');
					}	
					if(that.checkemail($('#email').val()) == 0){
						$('#email').parent().find('.form-tip').html(that.msg.msg5).addClass("red-color verify-tips-text");
						$('#email').addClass('transition-time text-wrong-style');
					}
				}
				return false;
				
			});
			// 手机验证码
			jQuery('#vericode').bind('keyup',function(){
				var value = $.trim(jQuery(this).val());
				if(that.checkvericode(value) == 0){
				
					$('#vericode').parent().find('.form-tip').html(that.msg.msg6).addClass("red-color verify-tips-text");
					$('#vericode').addClass('transition-time text-wrong-style');
				}else{
				
					$('#vericode').parent().find('.form-tip').html('').removeClass("red-color verify-tips-text");
					$('#vericode').removeClass('text-wrong-style');
				}
			});
			$('#vericode').bind('blur',function(){
				var phone = $('#pwdusername').length > 0 ? $('#pwdusername').val() : $('#mobilephone').val();
				if(phone != '' && $('#vericode').val() != ''){
					$.ajax({
		            	url:"checkPhoneCode.do",
		            	type:"get",
		            	data:{phoneNum:phone,param:$('#vericode').val()},
		            	dataType :'json',
		            	success:function(data){
		            		if(data.status == 'y'){
		            			$('#vericode').parent().find('.form-tip').html('').removeClass("red-color verify-tips-text");
		    					$('#vericode').removeClass('text-wrong-style');
		            		}else{
		            			$('#vericode').parent().find('.form-tip').html(checkAll.msg.msg4).addClass("red-color verify-tips-text");
								$('#vericode').addClass('transition-time text-wrong-style');
		            		}
		            	}
		            });
				}
			});
			// 图文验证码
			jQuery('#vercodes').bind('keyup',function(){
				var value = $.trim(jQuery(this).val());
				if(that.checkveri(value) == 0){
					$('#vercodes').parent().find('.form-tip').html(that.msg.msg6).addClass("red-color verify-tips-text");
					$('#vercodes').addClass('transition-time text-wrong-style');
				}else{
					// alert("aa")
					$('#vercodes').parent().find('.form-tip').html('').removeClass("red-color verify-tips-text");
					$('#vercodes').removeClass('text-wrong-style');
				}
			});
			$('#vercodes').bind('blur',function(){
				if($('#vercodes').val() != ''){
					$.ajax({
		            	url:"checkRandomCode.do",
		            	type:"get",
		            	data:{param:$('#vercodes').val()},
		            	dataType :'json',
		            	success:function(data){
		            		if(data.status == 'y'){
		            			$('#vercodes').parent().find('.form-tip').html('').removeClass("red-color verify-tips-text");
		    					$('#vercodes').removeClass('text-wrong-style');
		            		}else{
		            			$('#vercodes').parent().find('.form-tip').html(checkAll.msg.msg4).addClass("red-color verify-tips-text");
								$('#vercodes').addClass('transition-time text-wrong-style');
		            		}
		            	}
		            });
				}
			});
			//找回密码
			jQuery('#pwdusername').bind('blur',function(event){
			    //if enter return
			    var keycode=event.which;
			    if(keycode==13){
			        return;
			    }
			    if($('#pwdusername').val() != ''){
			        $.ajax({  
			            url:'check_account_get_pass.do',  
			            data:{param:$('#pwdusername').val()},
			            dataType:'json',
			            success:function(data) {
			            	if(data.result){//通过
			            	    //如果是手机则显示手机验证码
			                    if(checkAll.checkItem3($('#pwdusername').val()) == 1){//是手机
			                    	$('#emailVerify').hide();
			                    	$('#phoneVerify').show();
			                    	$('#veribtn').addClass('btn-default-main').removeClass('btn-disabled').removeAttr('disabled');
			                    }else{
			                    	$('#emailVerify').show();
			                    	$('#phoneVerify').hide();
			                    }
			                    $('#pwdusername').parent().find('.form-tip').html('').removeClass("red-color verify-tips-text");
								$('#pwdusername').removeClass('text-wrong-style');
			            	}else{
			            		$('#pwdusername').parent().find('.form-tip').html(data.msg).addClass("red-color verify-tips-text");
								$('#pwdusername').addClass('transition-time text-wrong-style');
								$('#veribtn').addClass('btn-disabled').removeClass('btn-default-main').attr('disabled',true);
			            	}
			            },  
			            error:function(data) {
			            	console.log("验证异常");
			            },
			        });
			    }
			});
			// 修改邮箱  
			jQuery('#Determine').bind('click',function(){
				if(that.checkveri($('#vercodes').val()) == 1 && that.checkemail($('#emails').val()) == 1){
					$.ajax({
						url:"modifyemail.do",
						type:"post",
						data:{appId:$("#appId").val(),email:$("#emails").val(),randomCode:$("#vercodes").val()},
						dataType:"json",
						success:function(data){
							if(data.result){
								msg(data.msg, 'verifyEmail.do?name='+data.name+'&appId=' + $("#appId").val());
							}else{
								msg(data.msg, null);
							}
						},
						error:function(){
							msg('程序异常', null);
						}
					});
				}else{
					if(that.checkveri($('#vercodes').val()) == 0){
						$('#vercodes').parent().find('.form-tip').html(that.msg.msg4).addClass("red-color verify-tips-text");
						$('#vercodes').addClass('transition-time text-wrong-style');
					}
				if(that.checkemail($('#emails').val()) == 0){
						$('#emails').parent().find('.form-tip').html(that.msg.msg5).addClass("red-color verify-tips-text");
						$('#emails').addClass('transition-time text-wrong-style');
					}
				}
				return false;
					
			});
			// 修改手机
			jQuery('#Deter').bind('click',function(){
				if(that.checkItem3($("#mobilephone").val()) == 1 && that.checkvericode($('#vericode').val()) == 1){
					$.ajax({
						url:"modifyphone.do",
						type:"post",
						data:{appId:$('#appId').val(),phoneCode:$('#vericode').val(),phoneNum:$("#mobilephone").val(),type:$('#type').val(),oldphoneNum:$('#oldmobilephone').val()},
						dataType:"json",
						success:function(data){
							if(data.result){
								msg(data.msg, 'accountSafe.do?appId=' + $("#appId").val());
							}else{
								msg(data.msg, null);
							}
						},
						error:function(){
							msg('程序异常', null);
						}
					});
				}else{
					if(that.checkvericode($('#vericode').val()) == 0){
							$('#vericode').parent().find('.form-tip').html(that.msg.msg4).addClass("red-color verify-tips-text");
						$('#vericode').addClass('transition-time text-wrong-style');
					}
					
				if(that.checkItem3($("#mobilephone").val()) == 0){
						$('#mobilephone').parent().find('.form-tip').html(that.msg.msg1).addClass("red-color verify-tips-text");
						$('#mobilephone').addClass('transition-time text-wrong-style');
					}
				}
					return false;	
			});
			// 解绑手机
			jQuery('#unbindBtn').bind('click',function(){
				if(that.checkItem3($("#oldmobilephone").val()) == 1){
					$.ajax({
						url:"unbindphone.do",
						type:"post",
						data:{appId:$('#appId').val(),oldphoneNum:$("#oldmobilephone").val()},
						dataType:"json",
						success:function(data){
							if(data.result){
								msg(data.msg, 'accountSafe.do?appId=' + $("#appId").val());
							}else{
								msg(data.msg, null);
							}
						},
						error:function(){
							msg('程序异常', null);
						}
					});
				}else{
					if(that.checkItem3($("#oldmobilephone").val()) == 0){
						$('#oldmobilephone').parent().find('.form-tip').html(that.msg.msg1).addClass("red-color verify-tips-text");
						$('#oldmobilephone').addClass('transition-time text-wrong-style');
					}
				}
				return false;	
			});
			// 修改用户名
			jQuery('#Modifyname').bind('click',function(){
				if(that.checkItem1($("#username").val()) == 1 && that.checkItem2($("#username").val()) == 1 && that.checkveri($('#vercodes').val()) == 1){
					$('#form').submit();
					$.ajax({
						url:"modifyUname.do",
						type:"post",
						data:{appId:$("#appId").val(),username:$("#username").val(),randomCode:$('#vercodes').val()},
						dataType:"json",
						success:function(data){
							if(data.result){
								msg(data.msg, 'accountSafe.do?appId=' + $("#appId").val());
								if(data.result){
									$z.addScriptTag('http://www.zcool.com.cn/sso/logout_jsonp.do?callback=$z.logoutCallBack&scriptId=ssoscript1006','ssoscript1006');
									$z.addScriptTag("http://www.zcooler.com/sso/logout_jsonp?callback=$z.logoutCallBack&scriptId=ssoscript1001",'ssoscript1001');
									$z.addScriptTag("http://www.hellorf.com/user/ssologout/?callback=$z.logoutCallBack&scriptId=ssoscript1007",'ssoscript1007');
									$z.addScriptTag("http://www.gogoup.com/sso/logout_jsonp?callback=$z.logoutCallBack&scriptId=ssoscript1010",'ssoscript1010');
								}
							}else{
								msg(data.msg, null);
							}
						},
						error:function(){
							msg('程序异常', null);
						}
					});
				}else{
					if(that.checkveri($('#vercodes').val()) == 0){
						$('#vercodes').parent().find('.form-tip').html(that.msg.msg4).addClass("red-color verify-tips-text");
						$('#vercodes').addClass('transition-time text-wrong-style');
					}
					
				if(that.checkItem1($("#username").val()) == 0 || that.checkItem2($("#username").val()) == 0){
						$('#username').parent().find(".user-name-tip").html(that.msg.msg0).removeClass("gray-color").addClass("red-color verify-tips-text");
	                	$('#username').addClass('transition-time text-wrong-style');
					}
				}
					return false;	
			});

			// 修改密码
			$('#Modifypass').bind('click',function(){
				if(that.checkItem4($('#password').val()) == 1 && $('#oldpwd').val() != ''){
					$.ajax({
						url:"modifysafepwd.do",
						type:"post",
						data:{appId:$('#appId').val(),oldpwd:$('#oldpwd').val(),password:$('#password').val(),nowUrl:$('#nowUrl').val()},
						dataType:"json",
						success:function(data){
							if(data.result){
								var url = data.nowUrl != null ? data.nowUrl : 'accountSafe.do?appId=' + $("#appId").val();
								msg(data.msg, url);
							}else{
								msg(data.msg, null);
							}
						},
						error:function(){
							msg('程序异常', null);
						}
					});
				}else{
					if(that.checkItem4($('#password').val()) == 0){
						$('#password').parent().find('.form-tip').html(that.msg.msg2).addClass("red-color verify-tips-text");
						$('#password').addClass('transition-time text-wrong-style');
					}
				}
			})
		}
		
	};
	checkAll.init();
//	checkAll.Vericountdown();
	checkAll.radios();
	// 绑定已有账号 
	$("#Existinguser").bind('blur',function(){
		if($('#Existinguser').val() != ''){
			$.ajax({
				url:"checkAccount.do",
				type:"get",
				data:{param:$('#Existinguser').val()},
				dataType:"json",
				success:function(data){
						if(data.status == "y"){
							$(".unregistered").hide();
						}else{
							$(".unregistered").show();
						}
					}
				})
		}
	})
	
	$('.register').on('click',function(){
		$(".bindingtab").find("span:eq(0)").removeClass("curent").siblings().addClass("curent");
		$(".bind-con:eq(0)").hide().siblings(".bind-con").show()
		$("#Existinguser").val("");
		$("#passwords").val("");
		$(".unregistered").hide();
	})
							
							
//弹窗,自行绑定确定方法
function binds(obj){
	this.PopupBlock = $(obj.PopupBlock);
	this.closebtn = $(obj.closebtn);
	this.Deter = $(obj.Deter);
	this.Unbundling = $(obj.Unbundling);
	this.cancel = obj.cancel;
	this.cancelF($(this.cancel)).cancelF($(this.closebtn));
}
binds.prototype = {
	cancelF:function(close){
		var that = this;
		close.on('click',function(){
			alert()
			that.PopupBlock.hide();
		})
		return this;
	}
}
function popupBlock(){
	return new binds({
		PopupBlock:'.pop-up-normal',
		closebtn:'.pop-close',
		Deter:'.pop-confirm',
		Unbundling:'.unbunding',
		cancel:'.pop-cancel'
	})
}
popupBlock();

// msg
 function Msg(obj){
 	this.Unbundling = $(obj.Unbundling);
 	this.url = obj.url;
 	this.tips = obj.tips;
 	this.shows();
 }
 Msg.prototype = {
 	shows:function(){
 		var that = this;
 		this.Unbundling.show();
 		this.Unbundling.find('p').html(this.tips)
 		setTimeout(function(){
			that.Unbundling.hide();
				if(that.url){
					location.href = that.url;
				}						
								
		},1500)
 	}
 }
function msg(tiptxt,url){
	new Msg({
		Unbundling:'.unbunding',
		url:url,
		tips:tiptxt
	});
}

function regType(type){
	if(type == 1){
		$('form').attr('action','/regEmail.do?' + window.location.href.split('?')[1]);
	}else{
		$('form').attr('action','/reg.do?' + window.location.href.split('?')[1]);
	}
	$('form').removeAttr('onsubmit');
	$('form').submit();
}

$(function() { 
	if (navigator.userAgent.toLowerCase().indexOf("chrome") >= 0) { 
		$(window).load(function(){ 
			$('input[type=text]').val('');
		}); 
	} 
}); 
