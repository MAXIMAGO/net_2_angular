# Net2angular

This project is integrated in the MAXIMAGO .NET to Angular Workshop as a hands on demo.
The readme describes a task on the way of creating your first angular application while acompanying the Structure of the Presentation.

## So far
We created a project-component displaying our project types

## Task 3
Since we do not want to use static data from code. We want to have a service provide the data for us as well as inject it to our component

### Create the project-service
Once again we use the angular-cli (generate command)[https://www.npmjs.com/package/@angular/cli#generating-components-directives-pipes-and-services] and create a service in __services__ since we like to have the structore clean we even put the service in asubfodler named after the servce

```bash
ng g servcie services/project/project
```
### Provide projects
We implement a method in the servcie to provide the projects

### Use the service
We need to provide the services as well as inject it in our component.
Afterwards we can use it to set the components projects member.

### Dependency Injection
In angular any constructor parameter is supposed to be injected if the instance itsself is provided via injection.
The Service has to be provided by the app so we add it to the module's provider array.
```typescript

```

proceed to task4_first_service
