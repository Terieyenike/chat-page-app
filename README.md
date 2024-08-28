# Chat Page Application

This is a simple chat page application built with Next and TypeScript. It allows users to enter a message, send it to the OpenAI API, and receive a response that is displayed on the page. The application features a loading state, Markdown parsing, and HTML sanitization using `marked` and `DOMPurify`.

## Features

- **Next with TypeScript**: Provides a strongly typed, scalable foundation for the application.
- **Tailwind CSS**: Used for styling and animations, including a loading state with a pulsing effect.
- **Markdown Parsing**: Responses from the API are parsed from Markdown to HTML using `marked`.
- **HTML Sanitization**: The parsed HTML is sanitized with `DOMPurify` to prevent XSS attacks.

## Technologies Used

- [Next](https://nextjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [marked](https://marked.js.org/)
- [DOMPurify](https://github.com/cure53/DOMPurify)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/terieyenike/chat-page-app.git
   cd chat-page-app
   ```

2. **Install dependencies**

   ```
   npm install
   ```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Usage

1. **Enter a message**: Type a message into the input field.

2. **Send the message**: Click the "Send" button to submit the message.

3. **View the response**: The application will display a loading indicator while waiting for a response, and then show the parsed and sanitized response.

## Code Overview

The main component of the application is Home, which handles the message input, API request, and response rendering.

### State Variables

- `message`: Holds the user's input message.
- `response`: Stores the API response (in sanitized HTML format).
- `isLoading`: Tracks whether the API request is in progress.

### Functions

- `handleSubmit`: Handles form submission, sends the message to the API, and updates the state with the response.
- `handleMessageChange`: Updates the message state as the user types.

### Markdown Parsing and Sanitization

- `marked`: Converts the API response (Markdown) to HTML.
- `DOMPurify`: Sanitizes the converted HTML to prevent XSS attacks.

### Tailwind CSS

Tailwind CSS is used to style the application and provide animations, such as the pulsing effect during the loading state.

## Customization

You can customize the application by:

- Modifying the Tailwind CSS styles to change the look and feel.
- Changing the API endpoint in the fetch call to integrate with your backend service.
- Enhancing the application with additional features such as handling multiple messages or integrating authentication.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
