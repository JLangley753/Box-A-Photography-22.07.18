<?php
  $name = $_POST['name'];
  $details = $_POST['details'];
  $number = $_POST['contactNumber'];
  $emailadd = $_POST['contactEmail'];

  $email_from = 'yourname@yourwebsite.com';

  $email_subject = 'New Enquiry';

  $email_body = "You have received a new message from $name.\n".
  "Here are the details of the message:\n $details\n".
  "Here is the contact details of $name: email address: $emailadd and phone number: $number".

  $to = "hlblueuk@yahoo.co.uk";

  $headers = "New enquiry from $name at $email_from \r\n";

  mail($to, $email_subject,$email_body,$headers);
?>
