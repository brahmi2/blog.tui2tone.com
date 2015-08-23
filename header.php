<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js" ng-app="app">
<head>
	<title title-tag>BLOG.TUI2TONE.COM</title>
	<meta name="description" content="{{WP_SETTING.SITE_TITLE}} {{WP_SETTING.DESCRIPTION}}">
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<meta name="google-site-verification" content="QuDQ6XJTf1u2KQri8ZkVvvbDEpQZqdbl_F3KtkJKUPc" />

	<!-- Facebook Meta -->
  <meta property="og:title" content="{{WP_SETTING.SITE_TITLE}}">
  <meta name="description" property="og:description" content="{{WP_SETTING.SITE_TITLE}}">
  <meta property="og:image" content="{{WP_SETTING.SITE_THUMBNAIL}}">

	<base href="/">

	<script type="text/javascript">
		var $config = {
			image_url: "<?php bloginfo('template_url'); ?>/images/"
		}
	</script>
	<?php wp_head(); ?>
</head>
<body>
	<div class="app-container">
