<h1 align="center">
	<img alt="GoBarber" src="https://res.cloudinary.com/dmcfuvvn2/image/upload/v1599183126/gobarber-logo_tct7iv.svg" width="200px" />
</h1>

<h3 align="center">
  Node.JS
</h3>

<p align="center">The best way to schedule your service!</p>

<h3 align="center">

  
**[REST API][api_site]**

**[GoBarber - Mobile][mobile_site]**

**Deploy: [GoBarber][deploy_site]**

</h3>

<img alt="Image" src="https://res.cloudinary.com/dmcfuvvn2/image/upload/v1599182907/mockup_defrne.png">



<!-- Website Links -->

[api_site]: https://github.com/nathancsouza/gobarber-back-end/
[mobile_site]: https://github.com/nathancsouza/gobarber-mobile/
[deploy_site]: https://gobarber.nathansouza.com/


  
## Password recovery

**RF**

- The user must be able to recover his password informing his e-mail;
- The user must receive an email with password recovery instructions;
- The user must be able to reset his password;

**RNF**

- Use Mailtrap to test shipments in a dev environment;
- Use Amazon SES for production shipments;
- E-mails should be sent in the background (background job);

**RN**

- The link sent by email to reset password must expire in 2h;
- The user needs to confirm the new password when resetting;

# Profile update

**RF**

- The User must be able to update his name, email and password;

**RN**

- The user cannot change his email to an email already used;
- To update your password, the user must inform the old password;
- To update your password, the user needs to confirm the new password;



# Provider panel

**RF**

- The provider must be able to list their schedules for a specific day;
- The provider must receive a notification whenever there is a new appointment;
- The provider must be able to view unread notifications;

**RNF**

- The provider's schedules for the day must be stored in cache;
- The provider's notifications must be stored in MongoDB
- The provider's notifications must be sent in real time using Socket.io;

**RN**

- The notification must have a read or unread status for the provider to control;


# Service scheduling

**RF**

- The user must be able to list all registered service providers;
- The user must be able to list the days of a month with at least one available time from a provider;
- The user must be able to list available times on a specific day of a provider;
- The user must be able to make a new appointment with the provider;

**RNF**

- The list of providers must be cached;

**RN**

- Each appointment must last exactly 1 hour;
- Appointments must be available between 8 am and 6 pm (first at 8 am, last at 5 pm);
- The user cannot schedule at a busy time;
- The user cannot schedule an appointment that has already passed;
- The user cannot schedule services with himself;
