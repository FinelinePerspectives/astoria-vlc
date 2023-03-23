<?php header('Access-Control-Allow-Origin: *'); ?>
<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

/* Exception class. */
require 'Exception.php';

/* The main PHPMailer class. */
require 'PHPMailer.php';

/* SMTP class, needed if you want to use SMTP. */
require 'SMTP.php';
	
	$mail = new PHPMailer;

	
	$user_FirstName = filter_var($_POST["userFirstName"], FILTER_SANITIZE_STRING);
	$user_LastName  = filter_var($_POST["userLastName"], FILTER_SANITIZE_STRING);
	$user_Email     = filter_var($_POST["userEmail"], FILTER_SANITIZE_EMAIL);
	$fileatt        = filter_var($_POST["floorPlanAttachment"], FILTER_SANITIZE_STRING);
	$notes          = filter_var($_POST["notes"], FILTER_SANITIZE_STRING);
	$user_fromEmail = "rpeterson@finelineperspectives.com";
	
	$mail->setFrom($user_fromEmail);
	$mail->addAddress($user_Email);     // Add a recipient
	
	if(!filter_var($user_Email, FILTER_VALIDATE_EMAIL)) //email validation
	{
		header('HTTP/1.1 500 Please enter a valid email!');
		exit();
	}
	$mail->addAttachment($fileatt);         // Add attachments
	$mail->isHTML(true);                                  // Set email format to HTML
	
	$mail->Subject = 'Floor Plan from Civic 66';
	
	$email_body =	
	'
		   <html>
			<head>
			<meta charset="utf-8">
			
			</head>

			<body>
			<div id="content">
				
				<h2>Hi '.$user_FirstName.'&nbsp;'.$user_LastName.',</h2>
				<p>
					
				<p>
					Attached is the floorplan you requested from Civic 66. Feel free to contact me with any additional questions.
					<br />
					
					Here are any other notes we discussed: <br />
					'.$notes.'
					

				</p>
				
				<p>'.$user_fromEmail.'</p>
				
			</div>



			</body>
			</html>
		';

	$mail->Body = $email_body;
	
	if(!$mail->send()) {
		echo 'Message could not be sent.';
		echo $user_Email;
		echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
		echo 'Message has been sent';
	}
