#### Video Demo: https://www.youtube.com/watch?v=6txABH4yXvA
#### Description:

###### Created with Next Js 13, TypeScript, Tailwind, NextAuth, Prisma and Neon Tech Database. Workout tracking website that lets you log a workout with six different exercises and a date and saves them to your account

The website has three different routes, a simple landing page, a dashboard and a dynamic route to update individual workouts.

The landing page includes a Sign in button that uses NextAuth with OAuth to log in with GitHub or Google and create a user entry on the database. If the user is already logged in, this page redirects the to the dashboard.

The dashboard lets users view and create different workouts. It includes a form that creates a workout with six exercises and a date, and then displays it on a card along with any other workouts. Every workout has its own ID and the ID of the user that created it.

Clicking on a card takes you to a dynamic route with the id of the workout that lets the user update or delete the current workout.

I decided not to create a different route to submit workouts in order to keep it all in the same page and prevent unnecessary routing. Additionally, using Next js experimental server actions, the data is updated as soon as the database receives the information of a new workout.

#### Live Website: 