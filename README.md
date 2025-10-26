# Expense Tracker - Selego Technical Test

## How to Install and Run

### Clone the repository

```
git clone https://github.com/ErgiBraholli/expense-tracker-technical-test-selego.git
cd expense-tracker
```

### Install dependencies

```
cd backend
npm install

cd ../frontend
npm install
```

### Setup environment variables

#### In the backend folder, create a .env file based on the example below:

```
PORT=5000
MONGO_URI=
BUDGET_LIMIT=300
EMAIL_FROM=
EMAIL_TO=
BREVO_SMTP_KEY=
```

### Run the project

```
cd backend
npm start

cd ../frontend
npm start
```

## My decisions

- Used Brevo (Sendinblue) as the email service because it was the simplest to integrate for me.
  It was my first time setting up email integration in a project, and it took a bit of time to figure out the SMTP setup and authentication keys — but I got it fully working in the end.
- Used Bootstrap for quick and clean styling (I prefer it over writing a lot of custom CSS).
- Used props to pass data between parent and child components, keeping the app modular and reusable.
- Used useState to manage input and data states, and useEffect to load and refresh data efficiently.

## Time I took to build the app

- I started building the app from 12:30PM and finished everything including testing by 15:45PM.
  However, I did not clone the original repository before starting, as I wasn’t aware that the timer was linked to the clone action.
  Instead, I built the project completely from scratch, following every instruction and structure in the technical test document.
  All features were implemented exactly as required and tested successfully.

- You can ask me anything about the code during a follow-up or interview —
  I fully understand every part of the backend, frontend, and email integration.
