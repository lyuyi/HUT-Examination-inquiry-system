//  用到了closest方法
//  该特效中使用jQuery来切换.search-wrapper包裹元素的激活状态，为它添加和移除.active class。
//  searchToggle()函数从.search-wrapper中添加和移除.active class。
    
    function searchToggle(obj, evt){
        var container = $(obj).closest('.search-wrapper');

        if(!container.hasClass('active')){//hasClass()函数用于指示当前jQuery对象所匹配的元素是否含有指定的css类名。
              container.addClass('active');
              evt.preventDefault();//取消事件的默认动作
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){//$(obj).closest('.input-holder').length == 0等价于if(!obj.closest('.input-holder')[0])
              container.removeClass('active');
              // 找到现在触发的事件的中类search-input的值是否等于空值
              container.find('.search-input').val('');
              // clear and hide result container when we press close
              container.find('.result-container').fadeOut(100, function(){$(this).empty();});//移除 this 元素的内容
        }
    }

    function submitFn(obj, evt){
        value = $(obj).find('.search-input').val().trim();//jQuery.trim()函数的返回值为String类型，返回去除两端空白字符串后的字符串。
        _html = "输入正确的学号: ";
        if(!value.length){
            _html = "学号不能为空";
        }
        else if(value.length<11){
            _html = "学号为11位数";
        }
        else if(value.length>11){
            $("#open").show();
            $("#mask").show();
            $("#close").click(function () {
              $("#open").hide();
              $("#mask").hide();
              $(".search-input").val('');
            });
        }
        else{
            _html += "<b>" + value + "</b>";
        }

        $(obj).find('.result-container').html('<span>' + _html + '</span>');
        $(obj).find('.result-container').fadeIn(100);

        evt.preventDefault();
    }
