angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("footer/footer.html","<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"author\">\n          <img class=\"profile\" src=\"{{config.image_url}}profile.jpg\" />\n          <div class=\"title\">\n            <div class=\"name\">Charuwit Nodthaisong</div>\n            <div class=\"subtitle\">Web Developer</div>\n            <div class=\"social\">\n              <a href=\"https://twitter.com/tui2tone\" target=\"_blank\"><i class=\"icon ion-social-twitter\"></i></a>\n              <a href=\"https://th.linkedin.com/in/tui2tone\" target=\"_blank\"><i class=\"icon ion-social-linkedin\"></i></a>\n              <a href=\"https://github.com/tui2tone\" target=\"_blank\"><i class=\"icon ion-social-github\"></i></a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 hidden-xs hidden-sm\">\n        <ul class=\"nav navbar-nav\">\n          <li><a href=\"#\">Blog</a></li>\n          <li><a href=\"#about\">Templates</a></li>\n          <li><a href=\"#contact\">About Me</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n");
$templateCache.put("main/main.html","<div class=\"jumbotron app-header\" ng-style=\"{\'background-image\': \'url(\' + config.image_url + \'header_bg.jpg)\' }\">\n  <img ng-src=\"{{config.image_url}}logo.png\" class=\"logo animated fadeInUp\">\n</div>\n<div class=\"blog-list-container container\" ui-view>\n</div>\n");
$templateCache.put("main/posts.html","<ul class=\"blog-categories\" ng-init=\"main.selected_category = mp.selected_category\">\n  <li ng-class=\"{active: main.selected_category == \'All\'}\"><a href=\"/\">All</a></li>\n  <li ng-repeat=\"category in main.categories\" ng-class=\"{active: main.selected_category == category.slug}\"><a href=\"/tag/{{category.slug}}\">{{category.name}}</a></li>\n</ul>\n<div class=\"blog-list\" infinite-scroll=\"mp.loadData()\">\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-6\" ng-repeat=\"post in mp.posts \">\n      <a href=\"/{{post.date | date: \'yyyy\'}}/{{post.date | date: \'MM\'}}/{{post.slug}}/{{post.ID}}\" class=\"blog animated fadeInUp\" style=\"animation-delay: {{post.delay}}s\">\n        <div>\n          <img class=\"img-responsive\" ng-src=\"{{post.featured_image.source}}\" />\n          <div class=\"title\" ng-style=\"{\'background-color\': post.meta.post_color}\">\n            <div>\n              <h4>{{post.title}}</h4>\n              <p>{{post.excerpt}}</p>\n            </div>\n          </div>\n        </div>\n      </a>\n    </div>\n    <div class=\"col-xs-12\">\n      <div class=\"post-loading animated fadeInDown\" ng-show=\"mp.loading\">\n        <i class=\"icon ion-load-c spin\"></i>\n        <br>\n        Loading..\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("navbar/navbar.html","<nav class=\"navbar navbar-fixed-top navbar-affix navbar-default\" role=\"navigation\" data-spy=\"affix\" data-offset-top=\"60\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">\n        <img src=\"{{config.image_url}}mini-logo-w.png\" />\n      </a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse navbar-right\">\n      <ul class=\"nav navbar-nav\">\n        <li>\n          <button type=\"button\" class=\"navbar-close visible-xs\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <i class=\"icon ion-close-round\"></i>\n          </button>\n        </li>\n        <li class=\"active\"><a href=\"#\">Blog</a></li>\n        <li><a href=\"#about\">Templates</a></li>\n        <li><a href=\"#contact\">About Me</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"loading-progress animated fadeInDown\" loading-bar>\n  <i class=\"icon ion-record\"></i>\n  <md-progress-circular class=\"md-hue-2\" md-mode=\"indeterminate\"></md-progress-circular>\n</div>\n");
$templateCache.put("post/main.html","<div class=\"jumbotro post-header\" data-stellar-background-ratio=\"0.5\" style=\"background-image: url({{post.data.featured_image.source}})\">\n</div>\n<div class=\"container\">\n  <div class=\"post-container\">\n    <div class=\"post-title  animated fadeInUp\">\n      <h3>{{post.data.title}}</h3>\n      <h4>{{post.data.excerpt}}</h4>\n      <p class=\"post-date\">{{post.data.date | date: \"dd MMM yyyy HH:mm\"}}</p>\n    </div>\n    <div class=\"post-content animated fadeInUp\" ng-bind-html=\"post.data.content\">\n\n    </div>\n  </div>\n</div>\n");}]);