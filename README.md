# Gym Tracker

#### Video Demo: https://www.youtube.com/watch?v=6txABH4yXvA
## Description:

Created with Next Js 13, TypeScript, Tailwind, Next-Auth, Prisma and Neon Tech Database. Workout tracking website that lets you log a workout with six different exercises, a date and saves them to your account

## Routes

The website has three different routes, a simple landing page, a dashboard and a dynamic route to update individual workouts.

The landing page includes a Sign in button that uses Next-Auth with OAuth to log in with GitHub or Google and create a user entry on the database. If the user is already logged in, this page redirects the to the dashboard.

The dashboard lets users view and create different workouts. It includes a form that creates a workout with six exercises and a date, and then displays it on a card along with any other workouts. Every workout has its own ID and the ID of the user that created it.

Clicking on a card takes you to a dynamic route with the id of the workout that lets the user update or delete the current workout, and then returns them to the dashboard.

## Design Implementations

I decided not to create a different route to submit workouts in order to keep it all in the same page and prevent unnecessary routing. Additionally, using Next js experimental server actions, the data is updated as soon as the database receives the information of a new workout.

Adding to that, the form gives freedom to the user to write whatever they want, meaning they can save their workouts in whatever formatting style they want. If they don't want to save all six exercises, they can write null.

Using the Postgres database Neon and the ORM prisma, managing the data and creating new workouts was possible.

All of the routes of the website are completely responsive and mobile friendly. This was achieved by using Tailwind media queries. Adding to that, the projects are displayed in cards aligned in the CSS grid system. 

Next Js makes it easy to handle loading and error. The website has a loading page while it fetches the data, as well as an error page that has a refresh button whenever there is a problem while fetching the data.

## Issues

On previous versions, there was a security issue that made any user access any workout as long as they had the id, meaning that they could update it or delete it. This was fixed by creating additional security on the dynamic route, and check that the id of the current user matches the owner id of the workout.

There was also a problem with the page sending too many redirects, which would impact performance and speed.

When you are done, you can sign out and all of your workouts will still be there when you come back.

### Live Website: 