<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet">

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Header</title>
</head>
<body>
    
    <div id="header" class="fixed-header">
        <div><a href="index.php"><img class="home-logo" src="Icons/Home.png" alt=""></a></div>
        <div class="the-clock">
        <div id="clock-top" class="clock-top"></div>
        <div id="clock-middle" class="clock-middle">
            <div id="hours"></div>
            
            <div id="minutes"></div>
        </div>
        <div id="clock-bottom" class="clock-bottom"></div>
        </div>
        
    </div>

    <link rel="stylesheet" href="styles.css">
    <script src="headersFooters/theTime.js"></script>
</body>
</html>

