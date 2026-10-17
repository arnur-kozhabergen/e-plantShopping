# Paradise Nursery — e-plantShopping

A React and Redux Toolkit shopping application for the Coursera Developing Front-End Apps with React final project, based on the official IBM starter.

## Features
- Landing page with company information, background image, and Get Started.
- Eighteen distinct plants: six in each of three categories, with images, prices, and descriptions.
- Shared Home, Plants, and Cart navigation. The cart badge sums all quantities.
- Redux add, remove, and update actions; Add to Cart disables while a plant is in the cart.
- Per-line totals, total quantity, full cart total, increment/decrement/delete, Continue Shopping, and Checkout Coming Soon.
- Responsive keyboard-accessible controls and a clearly labeled local illustration when a starter image is unavailable.

## Run
`npm ci`, then `npm run dev`. Build with `npm run build`.

## Deployment
The published GitHub Pages application is built into docs/ with base /e-plantShopping/.
Plant image URLs and the greenhouse background originate in the IBM course starter. Fallback plant illustrations are original SVG artwork. This is a student storefront; checkout is a demonstration and does not accept payments.

## Design reference
The category-first plant discovery and clear product/price hierarchy draw on https://bloomscape.com/plants/; the layout and code are this project's own implementation.
