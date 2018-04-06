/* Redirect to the help page (a separate content script will auto-fill & submit)
 * This is done via messaging because we don't always want to redirect from the trips page
 * (we only want to redirect when we're brought there specifically to submit a ticket)
 */

function redirectToHelpPage(request) {
  if (request.performRedirect) {
    window.location = 'https://help.uber.com/h/65645907-4045-47e4-b162-2acdd7990205';
  }
}

browser.runtime.sendMessage({action: 'isRedirectNeeded'}).then(redirectToHelpPage);
