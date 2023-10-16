# CBTEA: CBT Thought Journal Web App

CBTEA is a full-stack CRUD web application designed for Cognitive Behavioral Therapy (CBT) thought journals. Dive deep into your cognitive processes and behavioral patterns with an intuitive and user-friendly platform.


## Features 🌟

- **User Registration & Authentication**: Secure sign up and login system.
- **Journal Entries**: Pen down your thoughts and feelings with an intuitive journaling interface.
  - **Situation/Anxious Thoughts**: Capture the context of a specific event or moment, as well as the anxiety-inducing thoughts related to the situation
  - **Cognitive Distortions**: Choose from a predefined list of cognitive distortions that fit your thought patterns.
  - **Evidence Gathering**: Counter your negative thoughts by documenting evidence that contradicts them.
  - **Rational Thought Formation**: After weighing the evidence, form and record a more balanced and rational thought.
- **Browse Past Entries**: Reflect and revisit your past entries at any time.
- **Manage Your Entries**: Easily delete old journals or mark them as favorites for quick access.

## Technologies Used 🛠️

- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Frontend Templating**: EJS
- **Authentication**: Passport.js
  
## Getting Started 🚀

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation & Setup

1. **Clone the repository**:
```bash
git clone https://github.com/YourGitHubUsername/cbtea.git
```

2. **Navigate to the project directory**:
```bash
cd cbtea
```

3. **Install dependencies**:
```bash
npm install
```

4. **Setup environment variables**:

Create a `.env` file in the root directory and set up your environment variables:

```
DB_STRING=your_mongodb_connection_string
SECRET=your_secret_key
```

🔐 For the `SECRET`, consider generating a random string. This secret is crucial for session security.

5. **Run the application**:
```bash
npm start
```

Open your browser and navigate to `http://localhost:YOUR_PORT` to access CBTEA.

## Contact 📞

Larry Chen - Lc3718@columbia.edu
