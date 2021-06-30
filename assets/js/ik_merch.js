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
      }
    ],
    products: [
      {
        id: 1,
        title: 'Футболка',
        price: 1500,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        is_modal_open: false,
        image_path: 'images/image 3.png'
      },
      {
        id: 2,
        title: 'Кепка',
        price: 1500,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        is_modal_open: false,
        image_path: 'images/image 2.png'
      },
      {
        id: 3,
        title: 'Кепка',
        price: 1500,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        is_modal_open: false,
        image_path: 'images/image 4.png'
      },
      {
        id: 4,
        title: 'Кепка',
        price: 1500,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        is_modal_open: false,
        image_path: 'images/image 5.png'
      },
      {
        id: 5,
        title: 'Кепка',
        price: 1500,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        is_modal_open: false,
        image_path: 'images/image 6.png'
      },
      {
        id: 6,
        title: 'Кепка',
        price: 1500,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        is_modal_open: false,
        image_path: 'images/image 7.png'
      },
      {
        id: 7,
        title: 'Кепка',
        price: 1500,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        is_modal_open: false,
        image_path: 'images/image 8.png'
      },
      {
        id: 8,
        title: 'Кепка',
        price: 1500,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        is_modal_open: false,
        image_path: 'images/image 9.png'
      }

    ],
    basket: [
      {
        id: 1,
        title: 'Футболка',
        price: 1500,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        is_modal_open: false,
        image_path: 'images/image 3.png'
      }
     ],
    message: 'В корзину',
    message1: 'Начать оформление',
    counter: 10
  },
  computed: {
    opened_product() {
      const [product] = this.products.filter(p => p.is_modal_open);
      return product || null;
    },
    opened_basket() {
      const [order] = this.basket.filter(b => b.is_modal_open);
      return order || null;
    },
    opened_order() {
      const [form] = this.basket.filter(o => o.is_modal_open);
      return form || null;
    }
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
    toggle_cart(id) {
      this.basket.map(b => {
        if (b.id == id) {
          b.is_modal_open = !b.is_modal_open;
        } else {
          b.is_modal_open = false;
        }
      });
    },
    make_order(){
      this.basket.map(o => {
        if (o.id == id) {
          o.is_modal_open = !o.is_modal_open;
        } else {
          o.is_modal_open = false;
        }
      });
    },
    incrementValue() {
      this.counter++;
    },
    decrementValue() {
      this.counter--;
    },
    addProductToBasket(){
      this.basket.push(this.opened_product);
    }
  }
});
