<?php
	require 'PHPMailerAutoload.php';

	$mail = new PHPMailer;

	$user_FirstName = filter_var($_POST["userFirstName"], FILTER_SANITIZE_STRING);
	$user_LastName  = filter_var($_POST["userLastName"], FILTER_SANITIZE_STRING);
	$user_Email     = filter_var($_POST["userEmail"], FILTER_SANITIZE_EMAIL);
	$fileatt        = $_POST["floorPlanAttachment"];
	$vrLinks        = $_POST["vrLinks"];
	$unitNums       = $_POST["unitNumbers"];
	$user_fromEmail = "rpeterson@finelineperspectives.com";
	$notes          = filter_var($_POST["notes"], FILTER_SANITIZE_STRING);
	
	$mail->setFrom($user_fromEmail);
	$mail->addAddress($user_Email);     // Add a recipient
	
	for ( $ct = 0; $ct < count($fileatt); $ct++ ) {
		$attachFile	= filter_var($_POST["floorPlanAttachment"][$ct], FILTER_SANITIZE_STRING);
		$mail->addAttachment($attachFile);
	}
	
	for( $i = 0; $i < count($vrLinks); $i++ ) {
		$virtualTourLink = filter_var($_POST["vrLinks"][$i], FILTER_SANITIZE_STRING);
		$unitNumber = filter_var($_POST["unitNumbers"][$i], FILTER_SANITIZE_STRING);
	
		$vrLink .= "<li><a href='$virtualTourLink'>$unitNumber</a></li>";
	}

	$mail->isHTML(true);                             
	
	$mail->Subject = 'Floorplans from Astoria';
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
					Attached are the floorplans you requested from Astoria. Feel free to contact me with any additional questions.
					If your favourite units have virtual tours, the link(s) to tours will show up here: <br /> <ul>'.$vrLink.'</ul>
					<br />
					<br />
				
					'.$notes.'
				</p>
				
				<p>'.$user_fromEmail.'</p>
			
			</div>

			</body>
			</html>
		';

	$mail->Body    = $email_body;
	

	if(!$mail->send()) {
		echo 'Floorplans could not be sent.';
		echo $user_Email;
		echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
		echo 'Floorplans have been sent!';
	
	}
