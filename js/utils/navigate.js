import { global } from "core-js";

export default NavigateUtil = {
    navigateTo:function(url,params){
        global.Navigater.navigate(url,{...params})
    },
    naviBack:function(navigation){
        navigation.goBack()
    }
}