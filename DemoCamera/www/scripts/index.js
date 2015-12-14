// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();

(function () {
    document.getElementById("camera").addEventListener("click", capturarFoto);
    document.getElementById("albumFoto").addEventListener("click", abrirAlbumDeFotos);

    function capturarFoto() {
        navigator.camera.getPicture(captureSuccess, onFail, {
            quality: 50,
            destinationType: navigator.camera.DestinationType.FILE_URI //Tipo de retorno da imagem
        });
    }

    function abrirAlbumDeFotos() {
        navigator.camera.getPicture(captureSuccess, onFail, {
            quality: 50,
            destinationType: navigator.camera.DestinationType.FILE_URI, //Tipo de retorno da imagem
            sourceType: navigator.camera.PictureSourceType.SAVEDPHOTOALBUM //Local da onde buscará a imagem, o padrão é abrir a camera
        });
    }

    //callback que receberá o caminho da imagem e atribuirá no source da tag img
    function captureSuccess(foto) {
        document.getElementById("foto").setAttribute("src", foto); 
    }

    //callback de falha
    function onFail(message) {
        alert("Erro: " + message);
    }
})();