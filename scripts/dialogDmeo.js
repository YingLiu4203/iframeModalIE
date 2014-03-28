jQuery(function () {

    // local variables
    var $modalContainer = $('#myModal');
    var $modalDialog = $(".modal-dialog");
    var $modalFrame = $("#modalFrame");
    var $pdfFrame = $(".pdfFrame");

    // the event handler that hides the modal dialog 
    var hideModal = function () {
        $modalContainer.modal('hide');
    }

    // set the dialog iframe to the same location 
    // and size as the modal dialog's location and size
    var setModalFrameCss =  function () {
        var modalOffset = $modalDialog.offset();
        $modalFrame.css({
            display: 'block',
            position: 'absolute',
            top: modalOffset.top,
            left: modalOffset.left,
            height: $modalDialog.height(),
            width: $modalDialog.width()
        });
    };

    // when show the dialog, show the dialog iframe in 
    // the same location and the size as the dialog.
    // also bind event handler to focusin event 
    // inside the pdf iframe
    $modalContainer.on('shown.bs.modal', function () {
        setModalFrameCss();
        $pdfFrame.on('focusin', hideModal);
    });

    // when hide the dialog, hide dialog iframe and
    // unbind the focusin event handler
    $modalContainer.on('hidden.bs.modal', function (e) {
        $modalFrame.css("display", "none");
        $pdfFrame.off('focusin', hideModal);
    });

});