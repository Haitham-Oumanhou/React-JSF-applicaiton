# POC: Cohabitation of Java JSF and React Applications

This POC demonstrates the integration and cohabitation of a Java Server Faces (JSF) application with a React frontend. The goal is to explore and validate how both technologies can coexist within the same project, sharing data and resources while maintaining their respective development and deployment workflows.

## Project Structure

The project is structured into two main parts:

1. **JSF Application**: A traditional Java web application built using JSF technology and PrimeFaces components. This app handles server-side rendering and includes some core business logic and services.
  
2. **React Application**: A modern, component-based JavaScript application built with React. This frontend handles client-side rendering and enhances the user interface with dynamic and responsive components.

## Objectives

- **Data Sharing**: Ensure smooth data exchange between the JSF backend and the React frontend using APIs or shared states.
- **Separation of Concerns**: Maintain a clear separation between the JSF and React codebases, allowing independent development and deployment.
- **UI Integration**: Demonstrate how a React component can be embedded within a JSF page, and how JSF-managed data can be passed to React components.
- **Routing**: Explore the routing between JSF views and React views, ensuring a seamless user experience.
- **Build Process**: Validate the build and deployment process for the combined application, focusing on potential challenges like asset bundling, resource sharing, and version control.

## Setup and Installation

### Prerequisites

- Java 11 or higher
- Maven 3.6+
- Node.js 14+
- npm or yarn

### JSF Application Setup

1. Navigate to the `jsf` directory:
    ```bash
    cd jsf
    ```
2. Build the JSF application using Maven:
    ```bash
    mvn clean install
    ```
3. Deploy the application to a compatible application server ( JBoss/WildFly 26.1.2 Final was used in the developpement process).

### React Application Setup

1. Navigate to the `pfa` directory:
    ```bash
    cd pfa
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the React development server:
    ```bash
    npm start
    ```

## Usage

- Access the JSF application at `http://localhost:8080/jsf-1.0-SNAPSHOT/`.
- Access the React application at `http://localhost:3000`.
- Some pages in the JSF application will embed React components (after enabling the React Switch), demonstrating the integration.

## Key Learnings and Considerations

- **API Communication**: Ensure the backend JSF application exposes RESTful endpoints that the React app can consume.
- **UI Consistency**: Design and styling must be consistent across both JSF and React components to provide a unified user experience.
- **State Management**: Consider how state is managed and shared between JSF and React components, especially in complex scenarios.
- **Performance**: Monitor the performance impact of serving a React app within a JSF application, particularly in production environments.