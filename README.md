# marchewa.dev - My Personal Portfolio Website

This is the repository containing the source code of my personal website [marchewa.dev](https://marchewa.dev/).

## Table Of Contents

- [Setup](#setup)
  - [Cloning The Repository](#cloning-the-repository)
  - [Environment Variables](#environment-variables)
  - [Running The Project](#running-the-project)
    - [Via Docker Compose](#via-docker-compose)
    - [Without Docker](#without-docker)
- [License](#license) 

## Setup

### Cloning The Repository

```bash
git clone https://github.com/marchewadm/portfolio.git
cd portfolio
```

### Environment Variables

Before running the project, create a `.env` file in the root directory. You can use the provided `.env.example` as a template.

Example of `.env` file:

```bash
CLOUDINARY_CLOUD_NAME=<YOUR_CLOUDINARY_CLOUD_NAME>
```

### Running The Project

#### Via Docker Compose

1. **Build Docker Image**

```bash
docker compose build
```

2. **Run The Container**

```bash
docker compose up -d
```

3. **Stop The Container**

```bash
docker compose down
```

#### Without Docker

1. **Install All dependencies**

```bash
npm install
```

2. **Run Development Server**

```bash
npm run dev
```

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).