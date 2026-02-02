# 📩 Newsletter Subscription (Django + React)

A full-stack **Newsletter Subscribe** feature built with **Django REST Framework** and **React**.

Users can enter their email address to subscribe, and the backend stores the subscriber information in the database.

---

## 🚀 Features

- Email subscription form (React)
- Django REST API endpoint
- Email validation
- Stores subscribers in database
- Prevents duplicate emails

---

## 🛠 Tech Stack

- **Backend:** Django + Django REST Framework  
- **Frontend:** React.js + Axios  
- **Database:** SQLite (development)

---

## 🌍 Why Newsletter Subscription Matters

Many top websites use newsletters to:

- Keep users updated  
- Build an audience  
- Communicate directly through email  

It’s a common real-world feature in blogs, e-commerce, and SaaS platforms.

---

## ⚙️ Setup

### Backend (Django)

```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```


### Front-end(React.js)

```bash
cd frontend
npm install
npm run dev 