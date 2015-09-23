$(function(){
    var ue = UE.getEditor('editor');
    function upcontent(){

    }
    $("input[name='submit']").on("click",function(){
        upcontent();
    })
    $("form").submit(function(){
        if(!ue.hasContents()){
           alert("请填写内容");
           return false;
        }else{
            $("#info").val(ue.getContent());
            console.log(ue.getContent(),$("form"));
        }
     });

})

