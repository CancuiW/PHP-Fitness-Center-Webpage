
<!-- 
    @Author: CanCui
    @Date: April 7, 2023
    @PHP Version: PHP 8.0
    @Purpose:Add the current time in footer and unify the  footer to all pages.
 
-->

<footer class="footer">
    <div class='left-footer'>
         <ul>
             <!-- the outcomes of validation-->
            <li>
                <a class="html_valid" href="https://validator.w3.org/nu/?doc=http%3A%2F%2F141.217.120.86%2Fhk2100%2Fgroup_project%2Findex.php" target="_blank">
                <img src="https://www.w3.org/Icons/valid-html401"
                    alt="Valid HTML 4.01 Transitional">
                </a>
            </li>
            <li>
                <a class="css_valid" href="https://jigsaw.w3.org/css-validator/validator?uri=http%3A%2F%2F141.217.120.86%2Fhk2100%2Fgroup_project%2Findex.php&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=zh-cn" target="_blank">
                <img src="https://www.w3.org/Icons/valid-css2"
                    alt="Valid W3C CSS">
                </a>

            </li>
            
            
        </ul>

    </div>

    <div class='right-footer'>
        <?php
            //Set the time zone to Western Standard Time 
            date_default_timezone_set('America/Detroit'); 
            //The date() function is used to format a Unix timestamp into a date and time string in the specified format
            echo $data->name.' '.date("D M j g:iA", $currentTime); 
            
        ?>
    </div>
       
</footer>
 