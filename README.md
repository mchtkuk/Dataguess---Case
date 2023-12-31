# Mid-Level Frontend Developer Assignment  - E-commerce Store with Advanced Filtering & Authentication and Role-based Permissions - Mücahit KUK


Task 1 

E-commerce Store with Advanced Filtering: Build an e-commerce store using React and Redux. Implement advanced filtering options such as multiple criteria, price ranges, sorting, and dynamic updates of product listings. Ensure smooth user experience and efficient data handling.

Task 7

Authentication and Role-based Permissions: Develop a user authentication system with role-based permissions using React, Redux, and a backend API. Users should have different roles (admin, user) with varying levels of access. Implement protected routes and ensure the appropriate UI is shown based on user roles.

## Proje Kurulumu

1- final-project dosyasına sağ tıklayıp farklı bir terminalde çalıştırın.
2- Açılan terminalde npm install yazarak dependenciesleri yükleyin.
3- Dependenciesler yüklendikten sonra npm run start yazarak json server ile vite'ı çalıştırabilirsiniz.

(Eğer npm run start çalışmazsa 2 ayrı terminalde "npm run dev" ile "npm run server" ile de projeyi çalıştırabilirsiniz.)


## Proje İçeriği


- Bu proje, bir e-Commerce web sitesi için gerekli olan temel yapıyı oluşturmanızı amaçlamaktadır.
- Proje, 3 ana bölümden oluşmaktadır. Bunlar:
  - Kullanıcı Yönetimi
  - Ürün Yönetimi
  - Sepet Yönetimi
- Proje, 3 farklı veritabanı tablosundan oluşmaktadır. Bunlar:
  - Users
  - Products
  - Carts

## Proje Bölümleri (ProtectedRoutes based on Admin and users)

- Anasayfa
- Ürünler Sayfası
- Ürün Detay Sayfası
- Sepet Sayfası
- Kayıt Ol Sayfası
- Giriş Yap Sayfası


## Admin Hesabı

- Username : admin
- Şifre: admin123

## Kullanılan Teknolojiler

- @popperjs/core: 2.11.8
- @reduxjs/toolkit: 1.9.5
- bootstrap: 5.3.0
- formik: 2.4.2
- json-server: 0.17.3
- react: 18.2.0
- react-bootstrap: 2.8.0
- react-dom: 18.2.0
- react-redux: 8.1.1"
- react-router-dom: 6.13.0
- styled-components: 6.0.0-rc.5
- swiper: 9.4.1
- react-redux: 8.1.1
- yup: 1.2.0
- axios: 1.4.0


## Proje bağımlılıkları (böyle gözükmesi lazım), package.json ile de kontrol edilebilir.

"dependencies": {
    "@popperjs/core": "^2.11.8",
    "@reduxjs/toolkit": "^1.9.5",
    "bootstrap": "^5.3.0",
    "formik": "^2.4.2",
    "json-server": "^0.17.3",
    "react": "^18.2.0",
    "react-bootstrap": "^2.8.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.1.1",
    "react-router-dom": "^6.13.0",
    "styled-components": "^6.0.0-rc.5",
    "swiper": "^9.4.1",
    "yup": "^1.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.37",
    "@types/react-dom": "^18.0.11",
    "@vitejs/plugin-react": "^4.0.0",
    "eslint": "^8.38.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.3.4",
    "npm-run-all": "^4.1.5",
    "vite": "^4.3.9"
  }
