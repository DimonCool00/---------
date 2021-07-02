const app = new Vue({
  el: '#app',
  data: {
    sizes: [
      {
        id: 1,
        value: 'XS',
        is_selected: true,
      },
      {
        id: 2,
        value: 'S',
        is_selected: false,
      },
      {
        id: 3,
        value: 'L',
        is_selected: false,
      },
      {
        id: 4,
        value: 'XL',
        is_selected: false,
      },
      {
        id: 5,
        value: 'XXL',
        is_selected: false,
      },
    ],
    products: [
      {
        id: 1,
        title: 'Футболка',
        price: 1500,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        is_modal_open: false,
        image_path: 'assets/images/image 3.png',
      },
      {
        id: 2,
        title: 'Кепка',
        price: 1500,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        is_modal_open: false,
        image_path: 'assets/images/image 2.png',
      },
      {
        id: 3,
        title: 'Кепка',
        price: 1500,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        is_modal_open: false,
        image_path: 'assets/images/image 4.png',
      },
      {
        id: 4,
        title: 'Кепка',
        price: 1500,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        is_modal_open: false,
        image_path: 'assets/images/image 5.png',
      },
      {
        id: 5,
        title: 'Кепка',
        price: 1500,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        is_modal_open: false,
        image_path: 'assets/images/image 6.png',
      },
      {
        id: 6,
        title: 'Кепка',
        price: 1500,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        is_modal_open: false,
        image_path: 'assets/images/image 7.png',
      },
      {
        id: 7,
        title: 'Кепка',
        price: 1500,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        is_modal_open: false,
        image_path: 'assets/images/image 8.png',
      },
      {
        id: 8,
        title: 'Кепка',
        price: 1500,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        is_modal_open: false,
        image_path: 'assets/images/image 9.png',
      },
    ],
    cart: [],
    amount: 1,
    is_cart_open: false,
    is_order_open: false,
    is_order_succes: false,
  },
  computed: {
    opened_product() {
      const [product] = this.products.filter(p => p.is_modal_open);
      return product || null;
    },
    cart_total_amount() {
      return this.cart.reduce((acc, product) => acc += (product.price * product.amount), 0) || 0;
    },
  },
  methods: {
    toggle_dialog(id) {
      this.products.map(p => {
        if (p.id == id) {
          p.is_modal_open = !p.is_modal_open;
        } else {
          p.is_modal_open = false;
        }
      });
    },
    select_size(id) {
      this.sizes.map(s => {
        if (s.id == id) {
          s.is_selected = true;
        } else {
          s.is_selected = false;
        }
      });
    },
    calculate_product_price(product) {
      return product.price * product.amount;
    },
    increment_amount() {
      this.amount++;
    },
    decrement_amount() {
      this.amount--;
    },
    add_to_cart() {
      if (this.amount > 0) {
        const size = this.sizes.filter(s => s.is_selected)[0].value;
        const data = { ...this.opened_product, size, amount: this.amount }
        this.cart.push(data);
      }
    },
    toggle_cart() {
      this.is_cart_open = !this.is_cart_open;
    },
    toggle_order() {
      this.is_order_open = !this.is_order_open;
    },
    toggle_succes() {
      this.is_order_succes = !this.is_order_succes;
    }
  },
});
