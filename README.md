# Technical Design
Create a simple User list app in which I can add to a list, new users based on a name and age.

![image](https://user-images.githubusercontent.com/52185265/207764819-df5b5077-7b3c-4247-aee7-c4879731f2cd.png)

 
## Project structure
- src
  - assets // for assets
  - styles // for global styles
  - components
    - UI // where all reusable components will be created
    - Component
      - Component.styles.tsx // where the component's styles will be created
      - Component.container.tsx // where the component's business logic will be created, if it has any
      - Component.component.tsx // where the component's View will be created
- App.tsx
- main.tsx
- index.html
 - [...]
 
## Components
- I will be needing a `<UserForm />` component that will be in charge of the inputs, submitting data and handling the modal error object. It will need the following props: `onSubmitHandler` & `fetchUserData`. While the onSubmit is self explanatory, the `fetchUserData` will be used to lift the form state to `App.tsx` and there, send the data forward to create new users;
- I will also be needing a `<User />` component. It will be a simple presentation component and will need the following props: `username` & `age`;
- To properly render created users, a `<UserList />` will be created. It will need a `User` object with the following keys: `username`, `age` & `id`
- Some reusable components will also be created to keep the DRY principle. They will be `<Input />, <Button />, <Card /> & <Modal />`
  - The `<Input />` will be used for gattering user data and will need a `label` and a `type` as props
  - The `<Button />` will be a simple button and will need a `type`, `children` and `onClickHandler` function
  - The `<Card />` is self explanatory
  - The `<Modal />` will be used to display errors and will need a `title`, `content` and a `toggleModal` function
  
## Types
  ```ts
type User {
  username: string;
  age: number;
  id: string;
};

type UserList = { users: User[] };

type ErrorType { 
  title: string; 
  content: string; 
};
  ```
## Tests
 - should render the `<App />`
 - should render `<UserList />` when at least one user exists
 - should create user with valid name & age input
 - should add user to the list once created
 - should render error modal if name or age is blank
 - should render error modal if age is a negative value
 - should render modal with the correct error data
