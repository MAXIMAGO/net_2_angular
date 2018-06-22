# Net2angular

This project is integrated in the MAXIMAGO .NET to Angular Workshop as a hands on demo.
The readme describes a task on the way of creating your first angular application while acompanying the Structure of the Presentation.

## So far
We created a new component project-list. The served project does still look the same since we haven't made use of the component yet.

## Task 2
The project-list has a meaningufull name but no logic at all. We want create the visual component and place it in our app's view

### Define Html
We open the project in vscode. Since its possible we do it right from the console
```bash
code .
```
Then we open the src/app/components/project-list/project-list.component.html
And define a layout for displaying items as we see fit.

### Bind data
We feel the need to dynamcly bind our layout to data and use the *ngFor expression to create a template for each element of an array.

```html
<div *ngFor="let project of projects">
  ...
</div>
```

We implement a corresponding property in the components *.ts file as well
```typescript
export class ProjectListComponent implements OnInit {
  public projects = [{ Name: 'WPF' }, { Name: 'Angular' }];
  ...
```

### Style the view
Opposed to xaml styling is not done with in the visual markup but via css styles.
So we edit the components css file to visualize the elements
```css
/** We define a container */
.container {
  padding: 8px;
  background: skyblue;
  font-size: 30px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: bold;
}

/** We define the container's mouseover */
.container:hover {
  background: blue;
  color:white;
}

/** We define a generic class for clickable elements */
.clickable {
  cursor: pointer;
}

```
proceed to task3_first_service
