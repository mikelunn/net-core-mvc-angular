# Net-Core-Mvc-Angular
An ASP.NET Core MVC Feature SPA approach using Angular.

## Purpose
I've read multiple stackoverflow posts asking how to use Angular along side a server side client framework like Asp.Net MVC. Many of these questions are from people who simply want to provide an enhanced user experience for a specific feature in their Net MVC app. Unfortunately, many of the responses suggest to not use a framework like Angular along side another server side client framework. I'd like to share an approach that is working well for me.

## Architecture
![Single App Component](https://github.com/mikelunn/net-core-mvc-angular/blob/master/AngularMvc.png)

With this approach, the MVC framework handles the rendering of the app shell, and any other features that just display data to the user. Then I use Angular for features that involve a lot of partial page refreshing. And rather than pulling in the complexity of server-side pre-rendering into my projects, I chose to use a very simple method of data pre-loading.
By not replacing my server-side framework entirely with a client-side framework, I feel that much complexity is reduced within my client-side code. A lot of infrastructure related code is also moved out of my SPA app and back into the server side where it belongs. So let’s look at the key components of this approach.

At the surface, this approach may seem somewhat reckless. Because if a user is accessing Feature B, we wouldn’t want to unnecessarily include Feature C dependencies. This simply would not scale well. By taking a feature module approach, i’m able to keep my root module as thin as possible and lazy load each individual feature on demand.


