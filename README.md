# Net2angular

This project is integrated in the MAXIMAGO .NET to Angular Workshop as a hands on demo.
The readme describes a task on the way of creating your first angular application while acompanying the Structure of the Presentation.

## So far
We created an app with the angular-cli. We are already able to test by running the angular-cli [serve command](https://www.npmjs.com/package/@angular/cli#usage) in the project folder
```
cd net2angular
ng serve
```
or
```
cd net2angular
npm run start
```

The later will execute ng serve but is in sync with the node package notation and should always result in running your application as needed


## Task 1
We want to create an application wich allows the user to select a project type and based on the selection is able to set the project configuration.

### Create a first component
We want to create a list component to allow the selection of the project type

Since we want to organize all our components in a subfolder __components__.
With that in mind we use the angular-cli [generate command](https://www.npmjs.com/package/@angular/cli#generating-components-directives-pipes-and-services)

*For windows users mind that only forward slashes are valid so c:\myPath\someFile.ext should look like c:/myPath/someFile.ext*

```bash
ng g component components/project-list
```
proceed to branch task2_implement_project-list
