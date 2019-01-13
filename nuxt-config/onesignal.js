module.exports = ({ onesignal, branch }) => {
  return {
    cdn: true,
    init: {
      appId: branch === 'master' ? onesignal.prodID : onesignal.devID,
      autoRegister: true,
      persistNotification: false, // dismiss the notification after 20 seconds
      notifyButton: {
        enable: false,
        size: 'small',
        displayPredicate: function() {
          return OneSignal.isPushNotificationsEnabled().then(function(
            isPushEnabled
          ) {
            /* The user is subscribed, so we want to return "false" to hide the Subscription Bell */
            return !isPushEnabled
          })
        }
      },
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        title: 'Welcome to portfolio website',
        message: 'Thanks for subscribing!'
      }
    }
  }
}
