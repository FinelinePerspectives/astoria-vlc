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
	$user_Consent   = filter_var($_POST["userConsent"], FILTER_SANITIZE_STRING);
	$notes          = filter_var($_POST["notes"], FILTER_SANITIZE_STRING);
	$fileatt        = filter_var($_POST["floorPlanAttachment"], FILTER_SANITIZE_STRING);

	$mail->setFrom('rpeterson@finelineperspectives.com');
	$mail->addAddress('rpeterson@finelineperspectives.com'); // Add admin Email

	$mail->addAttachment($fileatt);         // Add attachments
	
	if(!filter_var($user_Email, FILTER_VALIDATE_EMAIL)) //email validation
	{
		header('HTTP/1.1 500 Please enter a valid email!');
		exit();
	}

	$email_body =	
	'
		   <html>
			<head>
			<meta charset="utf-8">
		
			</head>

			<body>
			<div id="content">
				
				<p>
					A copy of details of who received the attached floorplan (s).
					 
				</p>
				<table width="70%" border-top="0.5" cellpadding="5" cellspacing="0" style="border-style: solid; border-width: 1px; border-color:#EAF2FA;">
		        <tr bgcolor="#EAF2FA">
		          <td colspan="2">
			          <font style="font-size:12px">
			          	<strong> First Name:</strong>
			          </font>
			       </td>
		        </tr>
		        <tr>
		        	<td width="20">&nbsp;</td>
					<td bgcolor="#FFFFFF">
						'.$user_FirstName.'
					</td>
		        </tr>
				<tr bgcolor="#EAF2FA">
		          <td colspan="2">
			          <font style="font-size:12px">
			          	<strong> Last Name:</strong>
			          </font>
			       </td>
		        </tr>
		        <tr>
		        	<td width="20">&nbsp;</td>
					<td bgcolor="#FFFFFF">
						'.$user_LastName.'
					</td>
		        </tr>
		        <tr bgcolor="#EAF2FA">
	              <td colspan="2">
	    	          <font style="font-size:12px">
	    	          	<strong>Email:</strong>
	    	          </font>
	    	       </td>
	            </tr>
	            <tr>
	            	<td width="20">&nbsp;</td>
	    			<td bgcolor="#FFFFFF">
	    				'.$user_Email.'
	    			</td>
	            </tr>
				<tr bgcolor="#EAF2FA">
	              <td colspan="2">
	    	          <font style="font-size:12px">
	    	          	<strong>Notes:</strong>
	    	          </font>
	    	       </td>
	            </tr>
	            <tr>
	            	<td width="20">&nbsp;</td>
	    			<td bgcolor="#FFFFFF">
	    				'.$notes.'
	    			</td>
	            </tr>
		       
	            <tr bgcolor="#EAF2FA">
	              <td colspan="2">
	    	          <font style="font-size:12px">
	    	          	<strong>Consent:</strong>
	    	          </font>
	    	       </td>
	            </tr>
	            <tr>
	            	<td width="20">&nbsp;</td>
	    			<td bgcolor="#FFFFFF">
	    				'.$user_Consent.'
	    			</td>
	            </tr>
		      </table>
				
			</div>



			</body>
			</html>
		';

	
	$mail->isHTML(true);                                  // Set email format to HTML
	
	$mail->Subject = 'Copy of Floorplan from Civic 66';
	$mail->Body    = $email_body;
	
	if(!$mail->send()) {
		echo 'Message could not be sent.';
		echo $user_Email;
		echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
		echo 'Message has been sent';
	}
