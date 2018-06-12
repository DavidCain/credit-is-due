# Give credit where credit is due
This is a passive aggressive Firefox extension that makes it easier for
me to request the credits that Uber® will supposedly credit to my
account each month.

I'm tired of writing Uber support every month, explaining my issue,
being promised that it's resolved, only to do the same song and dance
the following month. In months where I forget to write Uber support, I'm
not credited because that's not "their policy." At this point, it's a
problem worth automating, no?

<p align="center">
  <img src="https://imgs.xkcd.com/comics/automation.png"
       alt="XKCD comic explaining that automation is rarely a time-saver"/>
</p>

<p align="center">
  <a href="https://xkcd.com/1319">XKCD #1319</a>, "Automation"
</p>


## How did this happen?
I was one of many people who chose to #deleteuber. Before deletion, my
account had an AmEx Platinum card associated with it.

A few months after I deleted my Uber account, American Express announced
that they would be partnering with Uber to give $200 in annual credits
to all Platinum cardmembers. At the time, Travis Kalanick had been
forced out as CEO and Uber seemed to be making some positive changes. I
decided to join again and make use of the free credits.

Because my supposedly deleted account had been associated with the
same AmEx card, Uber's systems were unable to automatically grant me the
credits. I understand: this is an edge case that an automated system
might not have considered. I've been writing Uber support ever since,
each month yielding a new addition to the streak of unconvincing
promises.

### Assurances by Uber Support that my issue has been resolved

**August 12, 2017**: "AK" writes:

> $15 in credit will be added to your account every month, plus a $20
> bonus in December.

**August 13, 2017**: "Rakesh A" writes:

> You should see the Amex credits added in your app next month. If for
> any reason you don't see the credits next month, please let us know.

**October 21, 2017**: "kushagraGupta" writes:

> Starting next month you should receive the benefit on this account
> automatically. If for some reason you still do not see the credits
> deposited to your account by the 5th of the month, please let us know
> and we’ll add them for you.

**January 25, 2018**: "Grace" writes:

> Starting next month you should receive the benefit of this account
> automatically. If for some reason you still do not see the credits
> deposited to your account by the 5th of the month, please let us know
> and we’ll add them to you once again.

**January 26, 2018**: "Michael Angelo F." writes:

> I can assure you that the next set of credits will be applied to your
> account as it should be. This is based on what I can currently see
> here in your account.

**February 8, 2018**: "temerra b" writes:

> Starting next month you should receive the benefit on this account
> automatically. If for some reason you still do not see the credits
> deposited to your account by the 5th of the month, please let us know
> and we’ll add them for you once again.

**February 8, 2018**: "marlyn m" writes:

> Not to worry, starting next month you should receive the benefit on
> this account automatically. If for some reason you still do not see
> the credits deposited to your account by the 5th of the month, please
> let us know and we’ll add them for you.

**March 5, 2018**: "Marino S" writes:

> Starting next month you should receive the benefit on this account
> automatically. If for some reason you still do not see the credits
> deposited to your account by the 5th of the month, please let us know
> and we’ll add them for you once again.

**April 6, 2018**: "Raechell" writes:

> We've passed your question on to another team because they're experts
> in solving problems like yours. We’ll let you know as soon as we have
> an update.

(A phone call followed, with more promises that the problem was resolved)

**May 7, 2018**: "Benedick" writes:

> I've updating your account so that you've received the benefit for
> this month, and will automatically receive it on the first of the
> month moving forward.


## How does it work?
This extension sits silently in the background, checking every couple of
hours if it's time to submit my monthly ticket yet. If it's time, a
browser notification appears reminding me to collect my $15. I can
simply click the extension's button, and the script wall take care of
the rest (forming the body of the support request & submitting). There's
a pause for human authentication if need be!
