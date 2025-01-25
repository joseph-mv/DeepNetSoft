
# DeepnetSoft Assignment
This is a full-stack application built using the MERN stack (MongoDB, Express, React, Node.js). The application allows the creation and management of menus and menu items dynamically. Users can add menus and add, edit, delete, and view  their associated items.

## Features

- **Responsive Design**:Optimised for all devices, ensuring a great user experience on mobile, tablet, and desktop.
- **Modern UI**: Clean and professional interface with Tailwind CSS.
development and deployment.
- **Interactive Components**: Engaging and dynamic content powered by React and TypeScript.
- Cross-Origin Resource Sharing (CORS) configuration
- Security headers set via `helmet`
- TypeScript support for type-checking and development



## Technologies Used

### Frontend
- **React.js**: For building a component-based architecture.

- **TypeScript**: Ensures type safety and better code maintainability.

- **Vite**: Fast build tool and development server.

- **Tailwind CSS**: For modern, utility-first styling.
### Backend
- **Node.js**
- **TypeScript**
- **Express.js**
- **MongoDB**: with `mongoose`
- **Nodemon**: for auto-reloading during development
- **Helmet**: for HTTP headers security
- **CORS**: for handling cross-origin requests


## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- Node.js
- npm (Node Package Manager)


### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/joseph-mv/DeepNetSoft.git
   cd DeepNetSoft
    ```


2. **Install backend dependencies:**

   ```bash
   npm install
    ```
3. **Set up environment variables:** Create a .env file in backend folder and add the following variable:
   ```bash
   PORT=3000
MONGO_URI=mongodb://localhost:27017/DeepNetSoft
NODE_ENV=development
    ```
 

4. **Install frontend dependencies:**

   ```bash
   cd frontend
   npm install
    ```

 5. **Set up environment variables:** Create a .env file in frontend folder and add the following variable:
  ```bash
   VITE_BASE_URL=http://localhost:3000
    ```



### Running the application

1. **Start the frontend server :**
   - Open a new terminal, navigate to the frontend directory, and run

    ```bash
   npm run dev
   npm install -g serve
   serve -s dist
   ```
This command starts a local development server. By default, it runs on http://localhost:5173, where you can view the application in your browser. Any changes you make to the code will automatically refresh the page.

2. **Build the frontend project for production:**

    ```bash
   npm run build

   ```
This command generates an optimised production build in the dist folder. The build is minified and includes all necessary assets for deployment.

3. **Start the backend  server :**
   - Open a terminal and navigate to the backend directory, then run:


    ```bash
   npm run dev

   ```

4.  **Build the backend project for production:**

 ```bash
   npm run build
   npm run serve
```

## Deployment
### Steps to deploy on Vercel:
1.Sign in to your Vercel account or create a new account at Vercel.

2.Click on "New Project" and import your GitHub repository.

3.Configure the project settings if needed, and click "Deploy."

4.Vercel will automatically build and deploy your application. Once completed, you will receive a live URL to access your deployed site.

### Steps to deploy on Netlify:

1.Sign in to your Netlify account or create a new account at Netlify.

2.Click on "Add new site" and select "Import from Git."

3.Connect your GitHub repository and choose the branch to deploy.

4.Configure the build settings if needed (` npm run build ` for the build command and `dist` as the publish directory).

5.Click "Deploy Site." Netlify will build and deploy your application, providing you with a live URL.



**License:**

[MIT License]

**Acknowledgements:**

* Thanks to the React, TypeScript, Vite, Tailwind CSS, Node.js ,Express.js communities for their excellent tools and resources..

