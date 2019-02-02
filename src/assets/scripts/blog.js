import Vue from "vue";
import axios from "axios";

const blogMenuItem = {
  template: "#blog-menu-item",
  props:{
    post: Object
  }
}
const blogMenu = {
  template: "#blog-menu",
  props:{
    posts: Array
  },
  components: {
    blogMenuItem
  }
}
const blogContentItem = {
  template: "#blog-content-item",
  props:{
    contentPost: Object
  },
  computed: {
    postDate: function(){
      return this.getDate(this.contentPost.date)
    }
  },
  methods:{
    getDate(date){
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'}
      const dateValue = new Date(Number(date)*1000).toLocaleString("ru", options);
      return dateValue;
    }
  },
}
const blogContent = {
  template: "#blog-content",
  props:{
    contentPosts: Array
  },
  components: {
    blogContentItem
  }
}


new Vue({
  el: "#blog-main-content",
  components: {
    blogMenu, blogContent
},
  data() {
    return {
      posts: [],
    }
  },

  created() {
    axios
      .get('https://webdev-api.loftschool.com/posts/68')
      .then(response =>(this.posts = response.data));
  },
  updated: function () {
    this.$nextTick(function () {
      const blogList = document.querySelector(".side-menu__list");
      const articles = document.querySelectorAll(".main-content__item");
      const links = document.querySelectorAll(".side-menu__link");

      links[0].parentElement.classList.add("side-menu__item--active");

      function windowScroller(reqmove, duration) {
        const requestAnimationFrame =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.msRequestAnimationFrame
        window.requestAnimationFrame = requestAnimationFrame

        const scrollHeight = window.scrollY
        const diffY =
          scrollHeight < reqmove
            ? reqmove - scrollHeight
            : -1 * (scrollHeight - reqmove)

        const animate = (draw, duration) => {
          const start = performance.now()
          requestAnimationFrame(function move(time) {
            let timePassed = time - start
            if (timePassed > duration) timePassed = duration
            draw(timePassed)
            if (timePassed < duration) requestAnimationFrame(move)
          })
        }

        animate(timePassed => {
          window.scroll(0, scrollHeight + diffY * Math.min(timePassed / duration, 1))
        }, duration)
      }


      function fixed() {
        if (blogList.parentElement.getBoundingClientRect().top <= 0) {
          blogList.classList.remove("side-menu__list--absolute");
          blogList.classList.add("side-menu__list--fixed");

        } else {
          blogList.classList.remove("side-menu__list--fixed");
          blogList.classList.add("side-menu__list--absolute");
        }
      }

      function checkCurrentArticle() {
        for (let i = 0; i < articles.length; i++) {
          console.log(articles[i].getBoundingClientRect().y);
          if (
                articles[i].getBoundingClientRect().y < 520 &&
                articles[i].getBoundingClientRect().y >
                  -articles[i].getBoundingClientRect().height
              ) {
                const prevArticle = links[i].parentElement.previousElementSibling;
                const nextArticle = links[i].parentElement.nextElementSibling;

                if (prevArticle) {
                  prevArticle.classList.remove("side-menu__item--active");
                }
                if (nextArticle) {
                  nextArticle.classList.remove("side-menu__item--active");
                }

                links[i].parentElement.classList.add("side-menu__item--active");
              }
        }
      }

      function toArticle(name) {
        for (let item of articles) {
          if (name === item.dataset.name) {
            let scrollPos = item.getBoundingClientRect().top + window.scrollY
            windowScroller(scrollPos, 300)
          }
        }
      }

      blogList.addEventListener("click", e => {
        e.preventDefault();
        if (e.target.classList.contains("side-menu__link") && !e.target.parentElement.classList.contains("blog__item--active")) {
          toArticle(e.target.getAttribute("data-name"));
        }
      });

      fixed();

      window.addEventListener("scroll", () => {
        fixed();
        checkCurrentArticle();
      });
          })
        },
        template: "#blog-root"
      })