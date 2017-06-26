var link = document.createElement('a');
link.setAttribute('href', 'http://ak.c.ooyala.com/'+(document.getElementsByClassName('oo-player')[0]).getAttribute('data-content-id')+'/DOcJ-FxaFrRg4gtDEwOjEzYzowazumG4');
link.setAttribute('download', document.title.replace(/[^a-zA-Z\d ]/g, "")+'.mkv');
link.appendChild(document.createTextNode('Right Click and Save As'));
var win = window.open('', '','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes, width=200,height=50');
win.document.body.appendChild(link);