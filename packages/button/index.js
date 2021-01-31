import Button from './button.vue';
// import './style/index.css';

Button.install = (app) => {
  app.component(Button.name, Button);
}

export default Button;