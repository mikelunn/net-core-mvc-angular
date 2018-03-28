# Net-Core-Mvc-Angular
An ASP.NET Core MVC Feature SPA approach using Angular.

## Purpose
I've read multiple stackoverflow posts asking how to use Angular along side a server side client framework like Asp.Net MVC. Many of these questions are from people who simply want to provide an enhanced user experience for a specific feature in their Net MVC app. Unfortunately, many of the responses suggest to not use a framework like Angular along side another server side client framework. I'd like to share an approach that is working well for me.

## Architecture
![Single App Component](https://github.com/mikelunn/net-core-mvc-angular/blob/master/AngularMvc.png)

With this approach, the MVC framework handles the rendering of the app shell, and any other features that just display data to the user. Then I use Angular for features that involve a lot of partial page refreshing. And rather than pulling in the complexity of server-side pre-rendering into my projects, I chose to use a very simple method of data pre-loading.
By not replacing my server-side framework entirely with a client-side framework, I feel that much complexity is reduced within my client-side code. A lot of infrastructure related code is also moved out of my SPA app and back into the server side where it belongs. So let’s look at the key components of this approach.

## Feature Modules
With this approach I make sure each mini-spa is accessed with a good ‘ole fashioned full page refresh. The server then retrieves data from the backend, preloads the view with data, and renders a simple html page that contains the app component tag and related script dependencies.

What I like about this approach is that it allows me to handle authorization logic on the server, as well as retrieve data from the back end before redrawing the page. So every mini spa in my application will follow this approach.
At the surface, this approach may seem somewhat reckless. Because if a user is accessing Feature B, we wouldn’t want to unnecessarily include Feature C dependencies. This simply would not scale well. By taking a feature module approach, i’m able to keep my root module as thin as possible and lazy load each individual feature on demand.

## Preloading Feature Modules
By preloading my views with data i’m able to increase the initial page load of each mini spa. I use a simple service to hold the initial state of each feature, and the root component uses this service to set the initial data.
I also needed a way to dynamically inject the angular-cli generated app scripts into my razor pages. So I decided to create a simple html helper extension that just reads the index.html file from the dist folder.

Lastly, we need to tell the server how to handle routes within our spa application. There are many examples of handling this with custom routing middleware. And this was how I initially was handling my spa fallback routes. But I haven’t had any issue with just specifying the fallback using route attributes. I find it a little more explicit than the middleware approach.

Just to recap. This post was not meant to be a step by step guide to using Angular with Net Core MVC, nor do I consider it “the right way” to use the two frameworks together. I just wanted to share an approach that I have been successful with, and I hope it may help you be successful on a future project.


