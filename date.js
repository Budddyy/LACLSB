window.onload = function() {
    setInterval(function() {
        var date = new Date();
        var displayDate = date.toLocaleDateString();
        document.getElementById('datetime').innerHTML = displayDate + " ";
    }, 100);
};