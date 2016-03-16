/*global cordova, module*/

module.exports = {
    pay: function (paymentInfo, successCallback, errorCallback) {
        console.log("cordova alipay begin to to exec");
        cordova.exec(successCallback, errorCallback, "AliPay", "pay", [paymentInfo]);
    }
};
