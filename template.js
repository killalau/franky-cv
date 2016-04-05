'use strict';

export let index = (reactHtml, initReactState) => `<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Franky Lau CV</title>
    <link rel="stylesheet" type="text/css" href="js/lib/bootstrap/3.3.5/css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="js/lib/bootstrap/3.3.5/css/bootstrap-theme.min.css" />
    <link rel="stylesheet" type="text/css" href="css/index.css" />
</head>

<body>
    <div id="app">${reactHtml}</div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script type="application/json" id="initReactState">${JSON.stringify(initReactState)}</script>
    <script src="js/bundle.js"></script>
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-48674045-1', 'auto');
        ga('send', 'pageview');
    </script>
</body>
</html>`;
