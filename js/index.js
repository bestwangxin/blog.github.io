/**
 * Created by �Źֵ��ǹ� on 2016/10/10.
 */
/*
����ͼ�ֲ�*/
$(function(){
    var curIndex = 0;//��ǰindex
    var imgLen= $(".imgList li").length;//��ȡͼƬ����
    /*�����ʱ���Զ��仯��2.5��һ��*/
    var autoChange = setInterval(function(){
        if(curIndex<imgLen-1){
            curIndex++
        }else{
            curIndex=0
        }
        changeTo(curIndex);
    },2500);
    //�����½ǰ�ťindex�����¼��󶨴����

    $(".indexList li").click(function(){
        clearInterval(autoChange);
        curIndex = $(this).index();
        changeTo(curIndex);
    });
    //�����ʱ��ʱ������ö�ʱ��--��װ
    function autoChangeAgain(){
        autoChange = setInterval(function(){
            if(curIndex < imgLen-1){
                curIndex ++;
            }else{
                curIndex = 0;
            }
            //���ñ任������
            changeTo(curIndex);
        },2500);
    }


    function changeTo(num){
        var goLeft = num * 225;
        $(".imgList").animate({left: "-" + goLeft + "px"},"slow");
        $(".indexList").find("li").eq(num).addClass("indexListOn").siblings().removeClass("indexListOn");
        $(".textUl").find("li").eq(num).css("display","block").siblings().css("display","none");
    }
})
/*
 ����ͼ�ֲ�*/
