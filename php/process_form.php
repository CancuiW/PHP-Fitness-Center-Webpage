<!-- 
@Author: Can Cui
@Date: April 18, 2023
@PHP Version: PHP 8.0
@Purpose: 1.Deal with the content of form(make sure the if all of them were filled out
          2.Connect the Mysql database


-->


<?php


// WHere we send the information back after processing and mailing 
$pageOfForm = "../index.php?go=c3";


/* 1) CHECK for $_POST data */
if (isset($_POST) && ($_POST['checkMe'] == "12345")) {
    
    /* 2) CHECK for required fields here (||-->or) */
    if ( (trim($_POST['first-name']) == "") 
        || (trim($_POST['last-name']) == "") 
        || (trim($_POST['phone-num']) == "") 
        || (trim($_POST['city']) == "")
        || (trim($_POST['email']) == "")
        || (trim($_POST['state']) == "")
        || (trim($_POST['tour_date']) == ""))  { 
        
        /* Set an errorMessage variable to return to form page */
        $message = 1; 

        /* 3) SEND THEM BACK WITH header() */
        // https://www.php.net/manual/en/function.header.php
        header('Location: '.$pageOfForm.'&message='.$message);

    } else { 
        
        

/*-----------------------------------------connect the database--------------------------------------------*/ 


        $server =	'127.0.0.1'; // hostname of our MySQL system
        $user =		'hk2100';    // username - your accessID
        $pass =		'hk2100884'; // password - password from your email
        $db =		'hk2100';    // database name - your accessID

        // initialize MySQLi in PHP
        $mysqli = mysqli_init();
        /* Check to see if we have initialized $mysqli from above */
        if (!$mysqli) {
            die('mysqli_init failed');
        }
        /* Set the connection time out to 20 seconds */
        if (!$mysqli->options(MYSQLI_OPT_CONNECT_TIMEOUT, 20)) {
            die('Setting MYSQLI_OPT_CONNECT_TIMEOUT failed');
        }
        /* Pass the host, username, password, and database name  
        and try to connect to the database */
        if (!$mysqli->real_connect($server, $user, $pass, $db)) {
            die('Connect Error (' . mysqli_connect_errno() . ') '. mysqli_connect_error());
        }
        // ensure characterset encoding
        $mysqli->set_charset("utf8mb4");

        $firstName_df= trim($_POST['first-name']); 
        $lastName_df= trim($_POST['last-name']); 
        $city_df =trim($_POST['city']); 
        $email_df =trim($_POST['email']); 
        $state_df =trim($_POST['state']); 
        $phone_num_df = trim($_POST['phone-num']); 
        $tour_date_df = trim($_POST['tour_date']); 

        #transfer the information data to Mysql datbase
        $insert="INSERT INTO visitor(firstName, lastName, city,email,state,phoneNumber,tourDate) VALUES ('$firstName_df','$lastName_df','$city_df','$email_df','$state_df','$phone_num_df','$tour_date_df')";
                
        if ($mysqli->query($insert)===TRUE){
            $records="We will connect you as soon as possible !";
        }else {
            $records="Error: ".$insert."<br>".$mysqli->error;
        }


        $mysqli->close();

        session_start();
        $_SESSION['records']=$records;



        $message = 2;
        /* 6) SEND THEM BACK WITH header() */
        header( 'Location: '.$pageOfForm.'&message='.$message);
    } 
} else {
    header( 'Location: '.$pageOfForm);
}
?>