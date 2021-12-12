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
|  Awesome Print   | _Makes rails objects and data in IRB look cleaner._ |
|      Pry Rails   | _A runtime developer console and IRB alternative._ |
|      Faker       | _Fake library that generates fake data._ |
|      Rack-CORS   | _Ruby on Rails Cross-Origin Resource Sharing (CORS)._ |
|       JWT        | _Compact URL-safe means of representing claims to be transferred between two parties._ |

<br>

### Client (Front End)

#### Wireframes

[Figma](https://www.figma.com/file/Mp9xvtITffV30SWTc5efGB/Bushwick-Bar?node-id=0%3A1)

- Home

![Home](https://i.imgur.com/GlSoGuA.png)

- SignIn

![SignIn](https://i.imgur.com/2kQaKKy.png)

- SignUp

![SignUp](https://i.imgur.com/N9jmzZd.png)

- UserHome

![UserHome](https://i.imgur.com/nXXqnSs.png)

- Ingredients

![Ingredients](https://i.imgur.com/Depm58D.png)

- Cocktails

![Cocktails](https://i.imgur.com/nhnUjYQ.png)

- CreateCocktail

![CreateCocktail](https://i.imgur.com/uxzM24X.png)

- EditCocktail

![EditCocktail](https://i.imgur.com/q9eyVkv.png)

- DetailCocktail

![DetailCocktail](https://i.imgur.com/ef2mZ1T.png)



#### Component Hierarchy

[Whimsical](https://whimsical.com/3cE76w9wo4cfYch8hSnULA)
![Component Hierarchy](https://i.imgur.com/1LcZdfA.png)

#### Component Architecture

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
|__ components/
      |__ Layout
            |__ Layout.css
            |__ Layout.jsx
      |__ Nav
            |__ Nav.css
            |__ Nav.jsx
      |__ Footer
            |__ Footer.css
            |__ Footer.jsx
|__ containers/
      |__ MainContainer.jsx
|__ screens/
      |__ Home
            |__ Home.css
            |__ Home.jsx
      |__ SignIn
            |__ SignIn.css
            |__ SignIn.jsx
      |__ SignOut
            |__ SignOut.css
            |__ SignOut.jsx
      |__ UserHome
            |__ UserHome.css
            |__ UserHome.jsx
      |__ Ingredients
            |__ Ingredients.css
            |__ Ingredients.jsx
      |__ Cocktails
            |__ Cocktails.css
            |__ Cocktails.jsx
      |__ CreateCocktail
            |__ CreateCocktail.css
            |__ CreateCocktail.jsx
      |__ EditCocktail
            |__ EditCocktail.css
            |__ EditCocktail.jsx
      |__ DetailCocktail
            |__ DetailCocktail.css
            |__ DetailCocktail.jsx
|__ services/
      |__ apiConfig.jsx
      |__ auth.jsx
      |__ Cocktails.jsx

```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Complete Backend    |    H     |     1 hrs      |     1 hrs     |     TBD     |
| Start FrontEnd      |    H     |     1 hrs      |     1 hrs     |     TBD     |
| Start CSS           |    H     |     .5 hrs     |     1 hrs     |     TBD     |
| CSS cont'd          |    H     |     .5 hrs     |     1 hrs     |     TBD     |
| TOTAL               |          |     3 hrs      |     4 hrs     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

![ERD](https://i.imgur.com/6jAaPeA.png)
<br>

***

## Post-MVP

- Create an entry form on the landing page in which the user selects their taste preference (Boozy, Sweet, Sour, Bitter, Astrigent etc.) and 10 cocktail combinations are generated with different ingredients based on the users choice. Never struggle deciding a drink again!
- Be able to send user-made cocktails to surrounding bars via a google maps api for pickup or possibly even delivery.
- Implement ratings system where a user can rate others cocktails.

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions
```
StandardError: An error has occurred, this and all later migrations canceled:

PG::DuplicateTable: ERROR:  relation "ingredients" already exists


```
An issue that I came across early in development was trying to delete an orphaned migration. Usually once a migration is done, no other changes could be made. After trying to test some functionality on Postman, I realized that I had one migration pending. As anyone would I ran `rails db:migrate` and had realized that I had two of the same "ingredient" tables. (Must have created a duplicate at some point by running the command twice when toggling the up arrow in terminal and not realize).
```
➜  Bushwick-Bar git:(main) ✗ rails db:migrate
Running via Spring preloader in process 37405
== 20211211222012 CreateIngredients: migrating ================================
-- create_table(:ingredients)
rake aborted!
StandardError: An error has occurred, this and all later migrations canceled:

PG::DuplicateTable: ERROR:  relation "ingredients" already exists
/Users/sidneypaucar/Desktop/general_assembly/SEI/unit_4/Bushwick-Bar/db/migrate/20211211222012_create_ingredients.rb:3:in `change'
<internal:/Users/sidneypaucar/.rbenv/versions/3.0.0/lib/ruby/3.0.0/rubygems/core_ext/kernel_require.rb>:85:in `require'
<internal:/Users/sidneypaucar/.rbenv/versions/3.0.0/lib/ruby/3.0.0/rubygems/core_ext/kernel_require.rb>:85:in `require'
-e:1:in `<main>'

Caused by:
ActiveRecord::StatementInvalid: PG::DuplicateTable: ERROR:  relation "ingredients" already exists
/Users/sidneypaucar/Desktop/general_assembly/SEI/unit_4/Bushwick-Bar/db/migrate/20211211222012_create_ingredients.rb:3:in `change'
<internal:/Users/sidneypaucar/.rbenv/versions/3.0.0/lib/ruby/3.0.0/rubygems/core_ext/kernel_require.rb>:85:in `require'
<internal:/Users/sidneypaucar/.rbenv/versions/3.0.0/lib/ruby/3.0.0/rubygems/core_ext/kernel_require.rb>:85:in `require'
-e:1:in `<main>'

Caused by:
PG::DuplicateTable: ERROR:  relation "ingredients" already exists
/Users/sidneypaucar/Desktop/general_assembly/SEI/unit_4/Bushwick-Bar/db/migrate/20211211222012_create_ingredients.rb:3:in `change'
<internal:/Users/sidneypaucar/.rbenv/versions/3.0.0/lib/ruby/3.0.0/rubygems/core_ext/kernel_require.rb>:85:in `require'
<internal:/Users/sidneypaucar/.rbenv/versions/3.0.0/lib/ruby/3.0.0/rubygems/core_ext/kernel_require.rb>:85:in `require'
-e:1:in `<main>'
Tasks: TOP => db:migrate
(See full trace by running task with --trace)
```



So I ran `rake db:migrate:status` to see which migration ID it was, and deleted it. This is wrong. You cannot just simply delete a migration file once it is already applied to the database. 



```
➜  Bushwick-Bar git:(main) ✗ rake db:migrate:status

database: Bushwick_Bar_development

 Status   Migration ID    Migration Name
--------------------------------------------------
   up     20211211221504  Create users
   up     20211211221557  Create cocktails
   up     20211211222012  ********** NO FILE **********
   up     20211211222508  Cocktail ingredient
  down    20211211082707  Create ingredients
```



The problem is rake db:rollback wasn't working at all because of the missing file, thus not being able to get rid of the NO FILE message.

I've tried deleting the migration via Postgre by entering my database's console and entering`DELETE FROM schema_migrations WHERE version IN 20211211222012;`, running `bundle exec rake db:migrate:status`.No luck. Duplicate still present. 

Restarted VS and Terminal. No luck. Eventually I had decided to ` git reset --hard` and my most recent commit since I thought that this error was something that I had recently done. Apparently not, This duplicate table was created 5 commits ago. Tried to save myself the trouble by taking a step back and resetting myself from all the mess (back when I had the one `ingredients` table), even if it meant having a huge setback. To avoid this, I just instinctively decided to whip out my phone and record all the files changed with each of those commits (Personally found it easier than going through a ton of screenshots). Ran `git push --force` since I am the only one adding to the main branch.

Ran `rake db:migrate:status` on terminal. Same message. Turns out resetting my  commits to an earlier point didn't reset my database as well. 

I haven't ran `rails db:reset` this whole time because I was certain that it would reset my whole database and have me start from scratch. Not, that it would drop, create, schema.load, and seed the database as well! I ran the command and voila!



```
➜  Bushwick-Bar git:(main) ✗ rake db:migrate:status

database: Bushwick_Bar_development

 Status   Migration ID    Migration Name
--------------------------------------------------
   up     20211211221504  Create users
   up     20211211221557  Create cocktails
   up     20211211222012  Create ingredients
   up     20211211222508  Cocktail ingredient
```



 Learned about the different aspects in regards to migrations and their functionality first hand. Going in loops, spending hours on a simple error to eventually solve it, without any type of help, is amazing. Although it seems like an easy fix, it was the thought process and learning experience is that made it all worthwhile. Maybe that's why there are professionals, they've spent hours stuck solving a problem so that you don't have to!