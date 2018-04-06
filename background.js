/* In the background, check if it's time to submit the monthly support request! */


/* When clicking the add-on icon, fill out a support ticket automatically .

/* Automatically file a support ticket after a human-initiated login. */
function fileSupportTicket() {
  // If the user is logged in, then we'll be redirected to the support ticket
  // (And a content script will take care of filling it out and submitting)
  // Otherwise, a login form will show up. Proceed with login as normal.
  browser.tabs.create({"url": 'https://riders.uber.com'});
}
browser.browserAction.onClicked.addListener(fileSupportTicket);


/* Give a browser alert if we need to submit a ticket this month. */
function alertIfNeedingSubmission(lastTicketSubmitted) {
  var today = new Date();

  // Last ticket was submitted in the previous month (or earlier)
  var haveNotSubmittedThisMonth = (
    !lastTicketSubmitted ||
    today.getYear() > lastTicketSubmitted.getYear() ||
    today.getMonth() > lastTicketSubmitted.getMonth()
  );

  if (haveNotSubmittedThisMonth && today.getDate() >= 5) {
    browser.notifications.create({
      type: "basic",
      title: "Time to submit your monthly support request",
      message: (
        "You haven't submitted a support request to Uber yet! " +
        "Do that now to get $15 in credits this month."
      )
    });
  }
}

/* Check if we've submitted our monthly support ticket yet. */
function checkIfTicketSubmitted() {
  browser.storage.local.get()
    .then(function success(storedSettings) {
      alertIfNeedingSubmission(storedSettings.ticketLastSubmitted);
    }, console.error);
}

function handleTicketSubmitted(request, sender, sendResponse) {
  if (request.action == 'ticketSubmitted') {
    browser.storage.local.set({ ticketLastSubmitted: request.timeSubmitted });
    sendResponse({response: "Successfully recorded time of ticket submisson."});
  }
}

browser.runtime.onMessage.addListener(handleTicketSubmitted);


// Check on a schedule if it's time to file a new support ticket
checkIfTicketSubmitted();  // First, check immediately
browser.alarms.onAlarm.addListener(checkIfTicketSubmitted);
browser.alarms.create('checkIfTicketSubmitted', {periodInMinutes: 120});
