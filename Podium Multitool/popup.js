function createURL() {
    var url_lead= "https://www.google.com/maps/place/?q=place_id:"
    var placeID_from_input = document.getElementById("placeID_input").value;
    var url_final= url_lead.concat(placeID_from_input);
    document.getElementById('google_link').textContent = url_final;
    document.getElementById('google_link').href = url_final;
}

document.getElementById('get_url').onclick = createURL;