/* When clicking the add-on icon, fill out a support ticket automatically. */
function fileSupportTicket() {
  // If the user is logged in, then we'll be redirected to the support ticket
  // (And a content script will take care of filling it out and submitting)
  // Otherwise, a login form will show up. Proceed with login as normal.
  browser.tabs.create({"url": 'https://riders.uber.com'});
}
browser.browserAction.onClicked.addListener(fileSupportTicket);


function checkIfNeedsSubmission() {
  return browser.storage.local.get()
    .then(function success(storedSettings) {
      return storedSettings.ticketLastSubmitted;
    })
    .then(function(lastTicketSubmitted) {
      var today = new Date();

      // Last ticket was submitted in the previous month (or earlier)
      var haveNotSubmittedThisMonth = (
        !lastTicketSubmitted ||
        today.getYear() > lastTicketSubmitted.getYear() ||
        today.getMonth() > lastTicketSubmitted.getMonth()
      );

      return (haveNotSubmittedThisMonth && today.getDate() >= 5);
    });
}

/* Give a browser alert if we need to submit a ticket this month. */
function alertIfNeedingSubmission() {
  checkIfNeedsSubmission().then(function(needsSubmission) {
    if (needsSubmission) {
      browser.notifications.create({
        type: "basic",
        title: "Time to submit your monthly support request",
        message: (
          "You haven't submitted a support request to Uber yet! " +
          "Do that now to get $15 in credits this month."
        )
      });
    }
  });
}

function handleContentMessages(request, sender, sendResponse) {
  if (request.action == 'ticketSubmitted') {
    browser.storage.local.set({ ticketLastSubmitted: request.timeSubmitted });
    sendResponse({response: "Successfully recorded time of ticket submisson."});
  } else if (request.action == 'isRedirectNeeded') {
    // We may wish to load riders.uber.com for other reasons (i.e. without a redirect)
    // A content script takes care of the actual redirect, so notify the script

    checkIfNeedsSubmission().then(function(needsSubmission) {
      sendResponse({performRedirect: needsSubmission});
    });
    return true;  // Response function will be called asynchronously
  }
}

browser.runtime.onMessage.addListener(handleContentMessages);


// Check on a schedule if it's time to file a new support ticket
alertIfNeedingSubmission();  // First, check immediately
browser.alarms.onAlarm.addListener(alertIfNeedingSubmission);
browser.alarms.create('alertIfNeedingSubmission', {periodInMinutes: 120});
