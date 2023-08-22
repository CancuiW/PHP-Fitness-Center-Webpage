<?php
/* 
@Author: CanCui
@Date: April 7, 2023
@PHP Version: PHP 8.0
@Purpose: integrate all contents in one page,ensuring the same navigation and footer.
*/
// call out $data from weather API
require_once('php/api.php');


/* First check for both 'go' and 'message' in query string */
if (isset($_GET) && isset($_GET['message'])) {
    $go = trim(urlencode($_GET['go']));
    $message = trim(urlencode($_GET['message']));
/* Check for 'go' and NOT 'message' */
} elseif (isset($_GET) && !isset($_GET['message'])) {
    $go = trim(urlencode($_GET['go']));
} else {
    /* default */
    $go = "";
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Group Project </title>
     <!-- choose favorite font in coolors.co website -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap" rel="stylesheet">

    <!-- StyleSheet -->
    <!-- could use PHP's time function to generate the hash for you. As it's a Unix timestamp it will change each time you refresh. -->
    <link rel="stylesheet" href="./css/nav_footer.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="./css/content.css?v=<?php echo time(); ?>">
   
</head>

<body>
    <!-- GRID WRAPPER -->
    <div id="wrapper">

       
        <!-- connect with navigation.php file --> 
        <?php include "./content/navigation.html" ?>
        
        <!-- MAIN CONTENT -->
        <article class="article">
            <?php
                /* Check query value from 'go' key */
                if ($go == 'c1') {
                    require_once('./content/home.html');
                } elseif ($go == 'c3'&& !isset($message)) {
                    require_once('./content/form_page.html');
                } elseif ($go == 'c3'&& isset($message)){
                    require_once('./php/message.php');
                } elseif ($go == 'c2'){
                    require_once('./content/contents.html');
                } elseif ($go == 'c4'){
                    require_once('./content/classes.html');
                } elseif ($go == 'c5'){
                    require_once('./php/map.php');
                }else{
                    require_once('./content/home.html');
                }
            ?>
        </article>

       

         <?php include "./php/footer.php" ?>
    </div>
</body>
</html>



