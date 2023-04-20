function removeButton(){
    let lastLi = $('#movieList li:last');
    let removeBtn = ' <button>Remove</button>';
    if(lastLi.find('button').length == 0){
        lastLi.append(removeBtn);
    }
};

$('#form').on('submit', function (e){
    e.preventDefault();
    let title = $('#title').val();
    let rating = $('#rating').val();
    $('#movieList').append('<li>' + title  + ' --- ' + rating + '</li>');
    removeButton();
});

$('ul').on('click', 'li button', function(e){
    $(e.target).closest('li').remove();
});

function alphSort(){
    let list, switching, b, shouldSwitch, dir, switchcount = 0;
    list = document.getElementById("movieList");
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        b = list.getElementsByTagName("LI");
        for (i = 0; i < (b.length - 1); i++) {
        shouldSwitch = false;
        if (dir == "asc") {
            if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
            }
        } else if (dir == "desc") {
            if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
            shouldSwitch= true;
            break;
            }
          }
        }
        if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
        switchcount ++;
        } else {
        if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
          }
        }
    }
}

$('#alphSort').on('click', function(){
    alphSort($('#movieList'));
});