# Net-Core-Mvc-Angular
An ASP.NET Core MVC Feature SPA approach using Angular.

## Purpose
I've read multiple stackoverflow posts asking how to use Angular along side a server side client framework like Asp.Net MVC. Many of these questions are from people who simply want to provide an enhanced user experience for a specific feature in their Net MVC app. Unfortunately, many of the responses suggest to not use a framework like Angular along side another server side client framework. I'd like to share an approach that is working well for me.

## Architecture
![Single App Component](https://github.com/mikelunn/net-core-mvc-angular/blob/master/AngularMvc.png)

At the surface, this approach may seem somewhat reckless. Because if a user is accessing Feature B, we wouldn’t want to unnecessarily include Feature C dependencies. This simply would not scale well. The answer to this problem lies in Webpack’s code splitting feature. And thankfully, Angular and the Angular-CLI make this incredibly easy.

