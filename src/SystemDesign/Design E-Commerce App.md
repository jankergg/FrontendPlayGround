# Design Amazon

### Functional Requirements

- User Auth(logout/login)
- Products list by category
- Product details
- Shopping Cart
- Online Payment
- Order Management(place, cancel, return)

### Non-functional Requirements

- Products ranking
- Personalized recommendation
- Favorate products
- A11y/i18n

- SSR: home page, for its highly personalized and dynamic, product
- ISR: product details

### Component design

- Global navbar with search and menu
- Global Shopping cart
- Home view
- Channel view
- Detail view
- Shopping cart view
- Checkout view
- Success/Fail view

### State management

- Redux/Zustand to persistence and manage local state, e.g. add product to cart
- Cookie/Http-only
