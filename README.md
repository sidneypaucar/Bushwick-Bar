# Bushwick-Bar

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Bushwick Bar** is a full-stack web application where any member can openly craft their very own drink. From a virgin margarita, to a "Mr.Chow"("The Hangover" Movie Reference) blackout cocktail, the possibilites are ENDLESS. Craft your very own and head on out to the dancefloor!_


<br>

## MVP

- Front end built with ReactJS
	- 8+ separate components
	- Utilize React Router
	- Integrate with a Ruby on Rails Backend
	- Full CRUD on Ingredients
- RESTful JSON API built with Ruby on Rails
	- At least 1 association between tables
	- Full CRUD on the ingredients table
  - A database of 2+ tables
- Style with flexbox/grid
- Implement responsive design

<br>

### Goals

- _Build a database of Users, Cocktails, and Ingredients_
- _Allow a user to view all crafted Cocktails._
- _Allow a user to add, edit, and delete their own Cocktails._

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Front-end framework using javascript._ |
|   React Router   | _Used for routing through React components._ |
|   Ruby on Rails  | _Back-end framework for creating JSON API._ |
|      Axios       | _Used for making front-end API calls._ |
|      BCYRPT      | _Used for password hashing._ |
|      Rack-CORS   | _Ruby on Rails Cross-Origin Resource Sharing (CORS)._ |
|       JWT        | _Compact URL-safe means of representing claims to be transferred between two parties._ |

<br>

### Client (Front End)

#### Wireframes

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree Sample](https://gist.git.generalassemb.ly/davidtwhitlatch/414107e2560ae0bb65e233570f2fe056#file-component-tree-png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](https://drive.google.com/file/d/1kLyQTZqfcA4jjKWQexfEkG2UspyclK8Q/view)
<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.