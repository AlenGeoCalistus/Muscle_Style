# MUSCLE_STYLE - Premium eCommerce Fitness Store

MUSCLE_STYLE is a robust, full-stack eCommerce application built from scratch, designed to provide a seamless shopping experience for fitness enthusiasts. From high-quality protein supplements to workout gear, this platform handles everything from user authentication to complex order management.

> [!IMPORTANT]
> **Project Status:** This website is currently **under development**. 
> Please note that **PayPal** and **Razorpay** payment gateways are currently undergoing maintenance and are not fully functional. These will be fixed and activated in the upcoming updates.

---

## 📸 Screenshots

| Home Page | Login Page |
|-----------|------------|
| ![HomePage](screenShots/HomePage.png) | ![LoginPage](screenShots/loginPage.png) |

| Sign Up Page | Products Page |
|--------------|---------------|
| ![SignUpPage](screenShots/SignUpPage.png) | ![Productspage](screenShots/Productspage.png) |

| Cart Page | Checkout Address |
|-----------|------------------|
| ![cartPage](screenShots/cartPage.png) | ![CheckoutAddress](screenShots/CheckoutAddress.png) |

---

## 🚀 Features

### User Side
- **OTP Authentication:** Secure Login and Signup using OTP verification.
- **Product Discovery:** Browse products with categories and detailed views.
- **Cart Management:** Add to cart, adjust quantities, and persistent storage.
- **Checkout Flow:** Multiple address management and coupon application.
- **Payment Options:** Support for Cash on Delivery (COD) and Online Payments (Razorpay/PayPal integrated).
- **Profile Management:** Track orders and manage personal details.

### Admin Side
- **User Management:** Monitor and manage registered users.
- **Product Management:** Full CRUD operations for products and categories.
- **Category Management:** Organise products into logical groups.
- **Offer & Coupon Management:** Create and manage promotional offers and discount coupons.

---

## 🛠 Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (NoSQL)
- **Frontend:** Handlebars (HBS), Bootstrap, CSS
- **Authentication:** Twilio (for OTP)
- **Payments:** Razorpay SDK, PayPal REST SDK
- **Environment:** Dotenv for secure configuration

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)

---

## ⚙️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/AlenGeoCalistus/MUSCLE_STYLE_PROJECT.git
cd MUSCLE_STYLE_PROJECT
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory and add your credentials:
```env
PORT=3000
MONGO_URI=your_mongodb_uri
TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_token
TWILIO_VERIFY_SERVICE_SID=your_service_sid
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
PAYPAL_CLIENT_ID=your_paypal_id
PAYPAL_CLIENT_SECRET=your_paypal_secret
```

### 4. Run the Application
```bash
# For development (auto-restart)
npm start

# For production
node ./bin/www
```

The application will be available at `http://localhost:3000`.

---

## 🚧 Roadmap
- [ ] Fix and re-validate Payment Gateway credentials.
- [ ] Implement advanced product search and filtering.
- [ ] Enhance Admin Dashboard with real-time analytics.
- [ ] Optimize mobile responsiveness.

---
*Created with ❤️ by Alen Geo Calistus*
