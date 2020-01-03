<?php
    // Get all the form data
    $name           = $_POST['name'];
    $email_address  = $_POST['email'];
    $message        = $_POST['message'];

    // Create the email and send the message
    $to = 'nick@bitzer.me';
    $email_subject = "Website Contact Form:  $name";
    $email_body =   "You have received a new message from your website contact form.\n\n".
        "Here are the details:\n\n
        Name: $name\n
        Email: $email_address\n
        Message:\n\t$message\n\n";
    $headers = "From: noreply@bitzer.me\n";
    $headers .= "Reply-To: $email_address";
    # Attempt to send email. If email can't be sent, log all the information to the log file.
    if(!mail($to,$email_subject,$email_body,$headers)) {
        print("ERROR! Unable to send form data email!");
    }
    else {
        print("Email successfully sent to $to");
    }
    return true;
?>
