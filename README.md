<div align="center">

[![Version][version-shield]][version-url]
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<img src="https://github.com/mfrederic/realt-properties-map/blob/main/frontend/public/RealT_Logo.png?raw=true" width="300" alt="RealT Properties Map Logo">

# RealT Properties Map

A community-driven project providing an interactive visualization of RealT portfolio properties.

[View Demo](https://rpm.mighte.app/) · [Report Bug](https://github.com/mfrederic/realt-properties-map/issues) · [Request Feature](https://github.com/mfrederic/realt-properties-map/issues)

</div>

## 📋 About The Project

RealT Properties Map helps you visualize RealT portfolio properties and track your own investments. The project integrates data from multiple sources including:
- Realtoken Dashboard
- realtoken-thegraph GQL resources

> **Important:** This project is not officially affiliated with [RealT](https://realt.co/)

## 🚀 Getting Started

### Built With
- [React](https://reactjs.org/) - Frontend framework
- [Node.js](https://nodejs.org/) - Backend runtime
- [Express](https://expressjs.com/) - Backend framework
- [GraphQL](https://graphql.org/) - API query language
- [Leaflet](https://leafletjs.com/) - Interactive maps
- [Docker](https://www.docker.com/) - Containerization

### Using Docker (Recommended)

The easiest way to run the project is using Docker:

```bash
docker compose up
```

### Manual Setup
This section describes how to setup the project using individual services. This can be useful for development purposes.

#### Backend Setup
```bash
cd ./backend
npm install
npm run dev
```
The backend will run on `http://localhost:3000`

#### Frontend Setup
```bash
cd ./frontend
npm install
npm run start
```
The frontend will run on `http://localhost:3010`

### Environment Configuration
Both frontend and backend require environment configuration. Copy the provided `example.env` files and modify as needed:
- `backend/example.env` → `backend/.env`
- `frontend/example.env` → `frontend/.env`

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

Distributed under the Apache-2.0 License. See `LICENSE` for more information.

[version-shield]: https://img.shields.io/github/v/tag/mfrederic/realt-properties-map.svg?label=version&style=for-the-badge
[version-url]: https://github.com/mfrederic/realt-properties-map/tags
[contributors-shield]: https://img.shields.io/github/contributors/mfrederic/realt-properties-map.svg?style=for-the-badge
[contributors-url]: https://github.com/mfrederic/realt-properties-map/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/mfrederic/realt-properties-map.svg?style=for-the-badge
[forks-url]: https://github.com/mfrederic/realt-properties-map/network/members
[stars-shield]: https://img.shields.io/github/stars/mfrederic/realt-properties-map.svg?style=for-the-badge
[stars-url]: https://github.com/mfrederic/realt-properties-map/stargazers
[issues-shield]: https://img.shields.io/github/issues/mfrederic/realt-properties-map.svg?style=for-the-badge
[issues-url]: https://github.com/mfrederic/realt-properties-map/issues
[license-shield]: https://img.shields.io/github/license/mfrederic/realt-properties-map.svg?style=for-the-badge
[license-url]: https://github.com/mfrederic/realt-properties-map/blob/master/LICENSE.txt