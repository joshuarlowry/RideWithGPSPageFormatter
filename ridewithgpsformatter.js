<script type="text/javascript">
function formatHTML(routeID, elementID)
{
    var baseurl = "http://ridewithgps.com/routes/"+routeID;
    var html = wrapParagraph(link(baseurl,"Ride With GPS"));
    html += wrapParagraph(link(baseurl+"/cue_sheet.html","Cue Sheet"));
    html += wrapParagraph(link(baseurl+"/full.png","Map"));
    html += wrapParagraph(link(baseurl,img(baseurl+"/full.png")));
    html += wrapParagraph(img(baseurl+"/elevation_profile.jpg\""));
    html += "<h1> GPS </h1>";
    html += "<ul>";
    html += wrapListItem(link(baseurl+".tcx","TCX"));
    html += wrapListItem(link(baseurl+".gpx?sub_format=track","GPX Track"));
    html += wrapListItem(link(baseurl+".gpx?sub_format=route","GPX Route"));
    html += "</ul>";
    var node = document.getElementById(elementID);
    node.innerHTML = html;
}

function link(url,display)
{
    return "<a href=\""+url+"\">"+display+"</a>";
}
function img(url)
{
    return "<img src=\""+url+"\"/>";
}
function wrapParagraph(str)
{
    return "<p>"+str+"</p>";
}
function wrapListItem(str)
{
    return "<li>"+str+"</li>";
}
</script>