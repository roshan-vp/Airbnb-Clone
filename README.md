# Vibnb - Airbnb Clone

Vibnb is a full-stack web application inspired by Airbnb, built using Node.js, Express, and MongoDB. It allows users to browse, create, and manage property listings, as well as leave reviews and ratings.

## 🚀 Features

- **User Authentication:** Secure signup and login functionality using Passport.js.
- **Listings Management:** Users can create, edit, and delete their own property listings.
- **Reviews & Ratings:** Users can leave reviews and star ratings for properties.
- **Image Upload:** Integrated with Cloudinary for seamless image storage and management.
- **Map Integration:** Interactive maps to display property locations using MapTiler.
- **Responsive Design:** Mobile-friendly interface for a smooth user experience.
- **MVC Architecture:** Organized codebase following the Model-View-Controller pattern.

## 🛠️ Tech Stack

- **Frontend:** EJS (Embedded JavaScript), CSS, Bootstrap (via CDN)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Atlas), Mongoose
- **Authentication:** Passport.js
- **Storage:** Cloudinary
- **Maps:** MapTiler SDK
- **Validation:** Joi (Server-side validation)

## ⚙️ Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/roshan-vp/Airbnb-Clone.git
    cd Vibnb_Project01
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory and add the following credentials:

    ```env
    CLOUD_NAME=your_cloudinary_name
    CLOUD_API_KEY=your_cloudinary_api_key
    CLOUD_API_SECRET=your_cloudinary_api_secret
    MAP_TOKEN=your_maptiler_token
    ATLASDB_URL=your_mongodb_atlas_connection_string
    SECRET=your_session_secret
    ```

4.  **Run the application:**

    ```bash
    node app.js
    ```

    Or if you have `nodemon` installed:

    ```bash
    nodemon app.js
    ```

5.  **Access the app:**
    Open your browser and go to `http://localhost:5050`.

## 📂 Project Structure

```
Vibnb_Project01/
├── controller/       # Route logic (MVC)
├── init/             # Database seeding scripts
├── models/           # Mongoose schemas (Listing, Review, User)
├── public/           # Static assets (CSS, JS, Images)
├── routes/           # Express routes
├── utils/            # Helper functions and error handling
├── views/            # EJS templates
├── app.js            # Main application entry point
└── ...
```

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

## 📄 License

This project is licensed under the ISC License.
