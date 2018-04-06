function submitSupportTicket() {
  // React is used, with convoluted element IDs
  // Look up by class instead.
  var input = document.getElementsByClassName("text-input")[0];
  var submitButton = document.getElementsByClassName("btn--primary")[0];
  if (submitButton.textContent != "Submit") {
    console.error("Other buttons exist on the page! Exiting early.");
    return;
  }

  var message = (
    "For the past year, I have not been receiving monthly $15 credits " +
    "as an AmEx Platinum cardholder. Could you credit me for this month and " +
    "give an estimation of when this issue will be resolved? " +
    "I've been told many times before that it will be fixed the following month, " +
    "and I've unfortunately lost confidence in these promises."
  );
  input.value = message;
  submitButton.click();

  // Let the background know that a ticket was submitted!
  browser.runtime.sendMessage({
    action: 'ticketSubmitted',
    timeSubmitted: new Date(),
    message: message,
  });
}

submitSupportTicket();
