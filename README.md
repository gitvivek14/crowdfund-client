# Crowdfunding Platform

This is the client-side application for a modern, decentralized crowdfunding platform. Built with React and Vite, it provides a seamless and intuitive user experience for creating, managing, and contributing to various campaigns.

## Live Demo

Check out the live version of the application here: **[https://crowdfund-client.vercel.app/](https://crowdfund-client.vercel.app/)**

## About The Project

This platform empowers users to bring their creative ideas to life by raising funds from a global community. It features a clean, responsive interface and robust functionality for a complete crowdfunding experience, from campaign creation to secure donations.

### Built With

*   **Framework:** [React](https://reactjs.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [Shadcn/UI](https://ui.shadcn.com/)
*   **State Management:** React Context API
*   **Authentication:** [Clerk](https://clerk.com/)

## Features

*   **User Authentication:** Secure sign-up and login functionality managed by Clerk.
*   **Campaign Creation:** An easy-to-use form for users to create and launch their own fundraising campaigns.
*   **Campaign Discovery:** Browse and filter active campaigns by categories like Charity and Projects.
*   **Detailed Campaign View:** View comprehensive details for each campaign, including goals, progress, and backer information.
*   **User Profiles:** Manage personal information and view created and backed campaigns on a dedicated profile page.
*   **Funding:** A simple and secure process for users to fund the campaigns they support.
*   **Responsive Design:** Fully responsive and mobile-first design ensures a great experience on any device.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm (or yarn/pnpm) installed on your machine.

*   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/gitvivek14/crowdfund-client.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd crowdfund-client
    ```
3.  Install the required NPM packages:
    ```sh
    npm install
    ```
4.  Start the development server:
    ```sh
    npm run dev
    ```
5.  Open your browser and navigate to `http://localhost:5173` (or the port specified in your console).

## Project Structure

The project is organized with a clear and scalable structure to separate concerns and improve maintainability.

```
└── -crowdfund-client/
    ├── README.md
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── assets/
        ├── components/
        │   ├── ui/
        │   ├── CampaignCard.jsx
        │   ├── DisplayCampaigns.jsx
        │   ├── FormField.jsx
        │   ├── Navbar.jsx
        │   └── Sidebar.jsx
        ├── constants/
        ├── context/
        ├── hooks/
        ├── lib/
        ├── pages/
        │   ├── CampaignDetails.jsx
        │   ├── CreateCampaign.jsx
        │   ├── Home.jsx
        │   └── Profile.jsx
        └── utils/```
