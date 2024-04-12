# Title 
EcommerceBackEnd

# Introduction
As a manager at an internet retail company, having a robust and efficient backend for your e-commerce website is crucial for competing in today's market. This proposal outlines the implementation of a backend solution using the latest technologies to meet the needs of your company.

# Prerequisites
Before getting started, ensure you have the following:
- Node.js installed on your machine
- MySQL server installed and running
- Insomnia Core or similar API testing tool installed

# Installation
- NPM i
- Install mysql -u root -p 
- SOURCE db/schema.sql 
- and Exit 
- NPM run seed
- NPM run start

# API Endpoints
GET Routes
- Categories: GET /api/categories
- Products: GET /api/products
- Tags: GET /api/tags

# POST, PUT, and DELETE Routes
You can test POST, PUT, and DELETE routes using Insomnia Core:
- Create Data: POST /api/<endpoint>
- Update Data: PUT /api/<endpoint>/<id>
- Delete Data: DELETE /api/<endpoint>/<id>
Replace <endpoint> with categories, products, or tags as per your requirements.

# licence
This project is licensed under the MIT License.

# Technologies Used
HTML CSS JavaScript Nodejs (express.js) Insomnia mySQL