# Rick and Morty - Oladele Olorunsola Submission

## Setup Instructions

1. **Install project dependencies**
    ```bash
    npm install
    ```
2. **Install project dependencies**

   To start the app, use the command below:
    ```bash
    npm run dev
    ```

## Running Tests

I have included some tests to ensure the reliability of the application. To run the tests, execute:

```bash
npm run test
```

## Technical Decisions

### 1. React Environment

I opted to use Vite as opposed to Create React App suggested in the brief because, CRA isn't supported anymore by React and Vite offers speed and flexibility in comparison to CRA

### 2. UI Toolkit

I opted to use SCSS for styling the user interface, and tried to use the BEM methodology for my naming conventions.
I also made use of Material UI for the loading interface and Table representation, I decided not to however use this UI library on some pages because I wanted to have full control on how the page is designed.

### 3. Testing Strategy

For testing purposes, I chose to utilize Vitest and Jest.

### 4. Custom Hooks

To enhance code organization and reusability, I created custom hooks for each of the pages (characters, episodes, locations) to encapsulate and manage logic related to each of them. This approach ensures a clean and modular codebase, promoting maintainability and readability. Also, in the case of improving the creation and deletion of objects, the logics can also be written here. 

## Areas for improvement
1. If I have more time, I will write more test for like single pages of characters, episodes and locations. Another test I can also write if afforded more time is tests for the custom hooks.
2. One way to also improve this application is the ability to search for characters, episodes, and locations, I would also do that if I had more time.
