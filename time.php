<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Time</title>
    
</head>
<body>
    
    <div><?php include "headersFooters/header.php"; ?></div>
    <div><?php include "headersFooters/sidebar.php"; ?></div>

    <div style="color: white;">Odin: 215mins or 3:35mins</div>

    <button id="saveButton">Save</button>
    <br>
    <p>link it up to a json</p>
    <p>save in local storage</p>

    <div class="container">
        <div class="subcontainer">
            <label for="date">Date</label>
            <input type="date" placeholder="date" id="date">
        </div>
        <div class="subcontainer">
            <label for="start">Start</label>
            <input type="time" placeholder="start" id="start">
        </div>
        <div class="subcontainer">
            <label for="end">End</label>
            <input type="time" placeholder="end" id="end">
        </div>
        <div class="subcontainer">
            <label for="3bar">3bar</label>
            <input type="time" placeholder="3bar" id="3bar">
        </div>
        <div class="subcontainer">
            <label for="1bar">1bar</label>
            <input type="time" placeholder="1bar" id="1bar">
        </div>
        <div class="subcontainer">
            <label for="night">hours</label>
            <input type="time" placeholder="hours" id="night">
        </div>
        <div class="subcontainer">
            <label for="total">total</label>
            <input type="time" placeholder="total" id="total">
        </div>
    </div>
    
  
    
    
    <link rel="stylesheet" href="time.css">
    <script src="time.js"></script>
    

    
</body>
</html>