<?php
	    $name = $_POST['name'];
	    $email = $_POST['email'];
	    $message = $_POST['message'];
	    $from = 'From: Cinema Plus'; 
	    $to = 'emailtester0002@gmail.com'; 
	    $subject = 'AutoMailer message';
	    $human = $_POST['human'];
				
	    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
					
	    if ($_POST['submit'] && $human == '4') {				 
	        if (mail ($to, $subject, $body, $from)) { 
		    	header( 'Location: ../#/confirm' ) ;
		} else { 
		    header( 'Location: ../#/fail' ) ;
		} 
	    } else if ($_POST['submit'] && $human != '4') {
			echo '<p>You answered the anti-spam question incorrectly!</p>';
	    }
	?>