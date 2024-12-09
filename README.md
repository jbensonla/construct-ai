Construction Automation Project Management AI Platform

Overview

This platform aims to streamline construction project management through automation and AI. It currently includes:
- A React frontend for project visualization and management.
- A Node.js/Express backend connected to a PostgreSQL database.
- Future integration with Auth0 for authentication and Puppeteer for PDF generation.

Getting Started

Prerequisites

- **Node.js (LTS version)**: [Download here](https://nodejs.org/)
- **Git**: [Download here](https://git-scm.com/)
- **PostgreSQL**: [Download here](https://www.postgresql.org/)

Environment Variables

You’ll need two `.env` files:  
1. Backend (`/backend/.env`)**  
   ```env
   PORT=4000
   DB_HOST=<your-db-endpoint>
   DB_USER=<your-db-username>
   DB_PASS=<your-db-password>
   DB_NAME=<your-db-name>
