<?php
	require 'PHPMailerAutoload.php';
	
	$mail = new PHPMailer;
	
	$user_FirstName = filter_var($_POST["userFirstName"], FILTER_SANITIZE_STRING);
	$user_LastName  = filter_var($_POST["userLastName"], FILTER_SANITIZE_STRING);
	$user_Email     = filter_var($_POST["userEmail"], FILTER_SANITIZE_STRING);
	$fileatt        =  filter_var($_POST["floorPlanAttachment"], FILTER_SANITIZE_STRING);
	$notes          = filter_var($_POST["notes"], FILTER_SANITIZE_STRING);
	$user_fromEmail = "rpeterson@finelineperspectives.com";
	
	$mail->setFrom($user_fromEmail);
	$mail->addAddress($user_Email);     // Add a recipient
	
	$mail->addAttachment($fileatt);         // Add attachments
	$mail->isHTML(true);                                  // Set email format to HTML
	
	$mail->Subject = 'Floorplan from Astoria';
	
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
					Attached is the floorplan you requested from Astoria. Feel free to contact me with any additional questions.
					<br />
					Here are any other notes we discussed:
					<br />
					<br />
					'.$notes.'
					

				</p>
				
				<p>'.$user_fromEmail.'</p>
				
			</div>



			</body>
			</html>
		';

	$mail->Body = $email_body;
	
	if(!$mail->send()) {
		echo 'Flooplan could not be sent.';
		echo $user_Email;
		echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
		echo 'Floorplan has been sent!';
	}
