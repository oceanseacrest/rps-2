# Considerations and Areas for Improvement

## Using Chakra UI, React, Next.js, and Typescript

This is a tech stack I use regularly at work, so I opted for it because I felt like using it would help me deliver a better product in a shorter amount of time. I find it really easy to style Chakra UI components, and they look pretty good out of the box. I picked React over Angular because I use it daily and noticed that Angular has had numerous updates since I used it last in my previous job, so it would have taken me longer to get up to speed with it. I thought Next.js would be useful for its file-based routing, but admittedly, I don't think I leveraged most of what the framework has to offer on this particular project aside from that. Typescript is nice because it provides type safety (obviously!) and I just find it easier to work with code written in Typescript because it's pretty self-documenting.

## Accessibility

I didn't use a screen reader to test the accessibility of the application, which I would do if I had more time, but I did navigate it using my keyboard to ensure that focusable elements could be reached and that the tab order flowed in a logical way.

## Responsiveness

I didn't spend too much time in this arena because I was more focused on getting the core functionality working and ensuring that things looked good in desktop mode. It did occur to me partway through to add some responsive styles using Chakra's existing breakpoints, so I did that in a few places. If I had more time, I would have made certain the application looked good on various screen sizes and resolutions.

## Testing

I didn't write any tests for this project, but doing some front-end unit testing with Jest is something I would consider with more time.

## Performance

Next.js offers code splitting out of the box, which means that each page only loads the Javascript it needs. Other than that, which is provided automatically, I didn't do any performance optimizations. This is a fairly lightweight project, so I don't think it's a concern at this point, but if the project were to grow substantially, I would take performance and bundle size into account.

## Refactoring

Given more time, I would have refactored the code. I find that codebases where files are shorter in length--regardless of whether they have more imports--are more manageable, so I tried to break out parts of my code into components, especially when they were reused in multiple places. I would have tried to refactor the `Game.tsx` file, as it is very logic-heavy and I started to confuse myself even working in it. I'd see about using a single object to store the state values rather than numerous individual values. I also think there are some improvements I can make to the game in general, especially when the user is playing against the computer, specifically around timing, the messages displayed after each round, and the way the arrow points to whose turn it is. The messaging around the score at the end could also be made more clear if I kept track of the number of rounds that were ties. I might even break out some of the game logic into different files depending on whether the user is playing against the computer or another user, but first I would take a longer look at the code to see if that would be beneficial.

## General Improvements

Having two players play the game within the same browser is not ideal. Given more time, I could have re-learned about web sockets (it's been a very long time since I have utilized them in a project) and implemented some socket-based solution that would allow users in different browsers to play against each other. One thing I did to try to make the game better in this regard was allowing users to input their choice using the keyboard, which is more discreet than selecting a button on the screen, in case the person they're playing against is being sneaky. I also added a "Play again" button so users could simply restart if they wanted to play again, without having to refresh the page. Something else I added was a footer to the bottom so users can go home and choose between playing against another person or against a computer with ease. I made certain abstractions in the code somewhat haphazardly, like allowing a color to be passed in to the name inputs and an emoji to be passed into the choice button. I didn't really have a rhyme or reason for some of these abstractions. If I had a more clear idea of if things in the game would change or evolve, I would decide if I wanted to hard-code certain aspects of the game or make them more customizable/future-proof (like the number of rounds the game lasts for, which I set as a variable to three). One other thing I did was allow the user to navigate to the game without entering names by having default values set in the code, and I also allow them to continue to the game by pressing "Enter" without having to explicitly press the "next" button. I also added a spinner to make it seem like there is some calculation going on after both users have made their choice. This provides a visual cue to the user that things are going on. I would need to find a source, but I think I have read before that users prefer to see that something appears to be loading, rather than it appearing instantaneously or after some time on a blank page. Something that I think would add some delight would be animations when the user makes selections, or having custom icons for the rock, paper, and scissors buttons.

## Backend

Since the position I'm applying for is frontend-focused, I opted not to implement a backend for this project. I probably would have used Node.js and Express to create an API to store the game state. I'm not sure what I would use for the database, but I would do some reading on that and whatever other technologies would be lightweight and ideal for prototyping.