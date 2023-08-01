$(document).ready(() => {
    $('#search').keyup(() => {
        let text;
        text = ($('#search').val()).toLowerCase();
        if (text.length >= 1) {
            $.ajax({
                url: "search.php",
                method: "GET",
                data: { 'search': text },
                success: (res) => {
                    $("#data").empty();
                    $('#data').append(res);
                    $('#closeSearch').click(() => {
                        $('#data').empty();
                    })
                }
            });
        }
        else {
            $('#data').empty();
        }
    })
})