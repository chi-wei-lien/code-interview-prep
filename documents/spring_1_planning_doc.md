# Spring 1 Planning Document (5/18 - 5/20)
goal: After this spring, users can sign up and sign in using Gmail and log question they solved each day

### User Story 1 (14 hr)
As a user, I would like to sign up and sign in using my Gmail account
- [] (5 hr) Setup backend and database
- [] (3 hr) Gmail sign in setup
- [] (3 hr) Filter chain and Session preservation
- [] (3 hr) Frontend for signing in and up

Acceptance Criteria
- [] Given that the user first visit the website, they will be redirected to the sign in/up page
- [] Given that the user is signing up, they can set up an account username
- [] Given that the user signed up with their gmail account, their account information should be preserved
- [] Given that the user is signed in and close the tab, the don't have to re-sign in until they log out or the session expires

### User Story 2 (7 hr)
As a user, I would like to log all the coding questions that I have solved in each day
- [] (3 hr) Frondend for question logging
- [] (2 hr) Backend for creating question log
- [] (2 hr) Backend for returning question logs with pagination

Acceptance Criteria
- [] Given that the user created a question log, the question log should not disappear when refreshed
- [] Given that the user visit the main page, they should see 20 question at first
- [] Given that the user click on next page, they should see more question logs
- [] Given that the user click on the page number, they should see the corresponding question logs on that page
- [] Given that the user visit the main page, all question logs should be displayed chronologically


### User Story 3 (5 hr)
As a user, I would like to label the difficulty of each coding question that I have logged 
- [] (3 hr) Frontend for editting log
- [] (2 hr) Backend for editting log 

Acceptance Criteria
- [] Given that the user click on the edit button, they should see a pop up modal for them to edit the corresponding question log
- [] Given that the user editted the difficulty of a question, the change should be preserved 