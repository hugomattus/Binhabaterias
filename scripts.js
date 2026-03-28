// Google Analytics — inicialização da camada de dados
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'AW-16650813497');

// Google Ads — rastreamento de conversão
function gtag_report_conversion(url) {
    var callback = function () {
        if (typeof url !== 'undefined') {
            window.location = url;
        }
    };
    gtag('event', 'conversion', {
        send_to: 'AW-11464341905/ETEoCJ64i48cEJHzz9oq',
        event_callback: callback
    });
    return false;
}
