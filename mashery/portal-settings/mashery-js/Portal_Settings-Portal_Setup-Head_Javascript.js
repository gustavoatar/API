function removeStyleSheet(filename){

          var links = document.getElementsByTagName('link');

          for (var i=links.length; i>=0; i--){

               if (links[i] && links[i].getAttribute('href')!=null && links[i].getAttribute('href').indexOf(filename)!=-1)

                    links[i].parentNode.removeChild(links[i]);
          }
     }
     removeStyleSheet('Mashery-base');
     //if (typeof $ == 'undefined') document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"><\/script>');
</script> 
     <meta charset="utf-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
     <meta name="description" content="">
     <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0">
     <link rel="shortcut icon" href="/files/favicon.ico" />
     <link rel="apple-touch-icon" href="/files/apple-touch-icon.png" />
     <link rel="apple-touch-icon" sizes="57x57" href="/files/apple-touch-icon-57x57.png" />
     <link rel="apple-touch-icon" sizes="72x72" href="/files/apple-touch-icon-72x72.png" />
     <link rel="apple-touch-icon" sizes="114x114" href="/files/apple-touch-icon-114x114.png" />
     <link rel="apple-touch-icon" sizes="144x144" href="/files/apple-touch-icon-144x144.png" />
     <link rel="apple-touch-icon" sizes="57x57" href="/files/apple-touch-icon-60x60.png" />
     <link rel="apple-touch-icon" sizes="72x72" href="/files/apple-touch-icon-120x120.png" />
     <link rel="apple-touch-icon" sizes="114x114" href="/files/apple-touch-icon-76x76.png" />
     <link rel="apple-touch-icon" sizes="144x144" href="/files/apple-touch-icon-152x152.png" />
     <link rel="stylesheet" href="/public/Mashery/styles/clients/hearst-theme-bootstrap-vendor.css">
     <link rel="stylesheet" href="/files/bootstrap-theme.css">
     <script src="/public/Mashery/scripts/vendor/clients/hearst/bootstrap.min.js"></script>
<script src="/files/custom.modernizr.min.js"></script>
     <script type="text/javascript">
//<![CDATA[
// JavaScript Document