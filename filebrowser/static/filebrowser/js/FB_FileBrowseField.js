function FileSubmit(FilePath, FileURL, ThumbURL, FileType) {
    
    // var input_id=window.name.split("___").join(".");
    var input_id=window.name.replace(/____/g,'-').split("___").join(".");
    var preview_id = 'preview_' + input_id;
    var previewlink_id = 'previewlink_' + input_id;
    var previewimage_id = 'previewimage_' + input_id;
    input = opener.document.getElementById(input_id);
    preview = opener.document.getElementById(preview_id);
    previewlink = opener.document.getElementById(previewlink_id);
    previewimage = opener.document.getElementById(previewimage_id);
    previewplayer = opener.document.getElementById("player");
    // set new value for input field
    input.value = FilePath;

    if (previewplayer)
        previewplayer.remove()
    previewlink.setAttribute("href", "");
    previewlink.setAttribute("target", "");
    previewimage.setAttribute("src", "");
    preview.setAttribute("style", "display:none");
    if (ThumbURL && FileType != "") {
        // selected file is an image and thumbnail is available:
        // display the preview-image (thumbnail)
        // link the preview-image to the original image
        previewlink.setAttribute("href", FileURL);
        previewlink.setAttribute("target", "_blank");
        previewimage.setAttribute("src", ThumbURL);
        preview.setAttribute("style", "display:block");
    } else if (FileType == "Audio"){
        preview.innerHTML += "<audio id=\"player\" src="+FileURL+" controls>Your browser does not support the audio element.</audio>"
        preview.setAttribute("style", "display:block");
    }
    this.close();
}

