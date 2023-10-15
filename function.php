<?php
/**
 * Astra functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Astra
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Define Constants
 */
define( 'ASTRA_THEME_VERSION', '4.2.1' );
define( 'ASTRA_THEME_SETTINGS', 'astra-settings' );
define( 'ASTRA_THEME_DIR', trailingslashit( get_template_directory() ) );
define( 'ASTRA_THEME_URI', trailingslashit( esc_url( get_template_directory_uri() ) ) );
define( 'ASTRA_PRO_UPGRADE_URL', 'https://wpastra.com/pro/?utm_source=dashboard&utm_medium=free-theme&utm_campaign=upgrade-now' );
define( 'ASTRA_PRO_CUSTOMIZER_UPGRADE_URL', 'https://wpastra.com/pro/?utm_source=customizer&utm_medium=free-theme&utm_campaign=upgrade' );

/**
 * Minimum Version requirement of the Astra Pro addon.
 * This constant will be used to display the notice asking user to update the Astra addon to the version defined below.
 */
define( 'ASTRA_EXT_MIN_VER', '4.1.0' );

/**
 * Setup helper functions of Astra.
 */
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-theme-options.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-theme-strings.php';
require_once ASTRA_THEME_DIR . 'inc/core/common-functions.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-icons.php';

/**
 * Update theme
 */
require_once ASTRA_THEME_DIR . 'inc/theme-update/astra-update-functions.php';
require_once ASTRA_THEME_DIR . 'inc/theme-update/class-astra-theme-background-updater.php';

/**
 * Fonts Files
 */
require_once ASTRA_THEME_DIR . 'inc/customizer/class-astra-font-families.php';
if ( is_admin() ) {
	require_once ASTRA_THEME_DIR . 'inc/customizer/class-astra-fonts-data.php';
}

require_once ASTRA_THEME_DIR . 'inc/lib/webfont/class-astra-webfont-loader.php';
require_once ASTRA_THEME_DIR . 'inc/customizer/class-astra-fonts.php';

require_once ASTRA_THEME_DIR . 'inc/dynamic-css/custom-menu-old-header.php';
require_once ASTRA_THEME_DIR . 'inc/dynamic-css/container-layouts.php';
require_once ASTRA_THEME_DIR . 'inc/dynamic-css/astra-icons.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-walker-page.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-enqueue-scripts.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-gutenberg-editor-css.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-wp-editor-css.php';
require_once ASTRA_THEME_DIR . 'inc/dynamic-css/block-editor-compatibility.php';
require_once ASTRA_THEME_DIR . 'inc/dynamic-css/inline-on-mobile.php';
require_once ASTRA_THEME_DIR . 'inc/dynamic-css/content-background.php';
require_once ASTRA_THEME_DIR . 'inc/class-astra-dynamic-css.php';
require_once ASTRA_THEME_DIR . 'inc/class-astra-global-palette.php';

/**
 * Custom template tags for this theme.
 */
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-attr.php';
require_once ASTRA_THEME_DIR . 'inc/template-tags.php';

require_once ASTRA_THEME_DIR . 'inc/widgets.php';
require_once ASTRA_THEME_DIR . 'inc/core/theme-hooks.php';
require_once ASTRA_THEME_DIR . 'inc/admin-functions.php';
require_once ASTRA_THEME_DIR . 'inc/core/sidebar-manager.php';

/**
 * Markup Functions
 */
require_once ASTRA_THEME_DIR . 'inc/markup-extras.php';
require_once ASTRA_THEME_DIR . 'inc/extras.php';
require_once ASTRA_THEME_DIR . 'inc/blog/blog-config.php';
require_once ASTRA_THEME_DIR . 'inc/blog/blog.php';
require_once ASTRA_THEME_DIR . 'inc/blog/single-blog.php';

/**
 * Markup Files
 */
require_once ASTRA_THEME_DIR . 'inc/template-parts.php';
require_once ASTRA_THEME_DIR . 'inc/class-astra-loop.php';
require_once ASTRA_THEME_DIR . 'inc/class-astra-mobile-header.php';

/**
 * Functions and definitions.
 */
require_once ASTRA_THEME_DIR . 'inc/class-astra-after-setup-theme.php';

// Required files.
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-admin-helper.php';

require_once ASTRA_THEME_DIR . 'inc/schema/class-astra-schema.php';

/* Setup API */
require_once ASTRA_THEME_DIR . 'admin/includes/class-astra-api-init.php';

if ( is_admin() ) {
	/**
	 * Admin Menu Settings
	 */
	require_once ASTRA_THEME_DIR . 'inc/core/class-astra-admin-settings.php';
	require_once ASTRA_THEME_DIR . 'admin/class-astra-admin-loader.php';
	require_once ASTRA_THEME_DIR . 'inc/lib/astra-notices/class-astra-notices.php';
}

/**
 * Metabox additions.
 */
require_once ASTRA_THEME_DIR . 'inc/metabox/class-astra-meta-boxes.php';

require_once ASTRA_THEME_DIR . 'inc/metabox/class-astra-meta-box-operations.php';

/**
 * Customizer additions.
 */
require_once ASTRA_THEME_DIR . 'inc/customizer/class-astra-customizer.php';

/**
 * Astra Modules.
 */
require_once ASTRA_THEME_DIR . 'inc/modules/posts-structures/class-astra-post-structures.php';
require_once ASTRA_THEME_DIR . 'inc/modules/related-posts/class-astra-related-posts.php';

/**
 * Compatibility
 */
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-gutenberg.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-jetpack.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/woocommerce/class-astra-woocommerce.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/edd/class-astra-edd.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/lifterlms/class-astra-lifterlms.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/learndash/class-astra-learndash.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-beaver-builder.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-bb-ultimate-addon.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-contact-form-7.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-visual-composer.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-site-origin.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-gravity-forms.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-bne-flyout.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-ubermeu.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-divi-builder.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-amp.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-yoast-seo.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-starter-content.php';
require_once ASTRA_THEME_DIR . 'inc/addons/transparent-header/class-astra-ext-transparent-header.php';
require_once ASTRA_THEME_DIR . 'inc/addons/breadcrumbs/class-astra-breadcrumbs.php';
require_once ASTRA_THEME_DIR . 'inc/addons/scroll-to-top/class-astra-scroll-to-top.php';
require_once ASTRA_THEME_DIR . 'inc/addons/heading-colors/class-astra-heading-colors.php';
require_once ASTRA_THEME_DIR . 'inc/builder/class-astra-builder-loader.php';

// Elementor Compatibility requires PHP 5.4 for namespaces.
if ( version_compare( PHP_VERSION, '5.4', '>=' ) ) {
	require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-elementor.php';
	require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-elementor-pro.php';
	require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-web-stories.php';
}

// Beaver Themer compatibility requires PHP 5.3 for anonymus functions.
if ( version_compare( PHP_VERSION, '5.3', '>=' ) ) {
	require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-beaver-themer.php';
}

require_once ASTRA_THEME_DIR . 'inc/core/markup/class-astra-markup.php';

/**
 * Load deprecated functions
 */
require_once ASTRA_THEME_DIR . 'inc/core/deprecated/deprecated-filters.php';
require_once ASTRA_THEME_DIR . 'inc/core/deprecated/deprecated-hooks.php';
require_once ASTRA_THEME_DIR . 'inc/core/deprecated/deprecated-functions.php';

// START show user into from PHP to JS
function hook_javascript() {

    if(is_user_logged_in()) {
        // $output="<script> var curUserObj = ".json_encode(wp_get_current_user())."; //console.log(JSON.stringify(curUserObj)); </script>";
        $output="<script> var curBillingObj = ".json_encode(WC()->session->get('customer'))."; //console.log(JSON.stringify(curBillingObj)); </script>";
        echo $output;
    } else {
        // $output="<script> var curUserObj; </script>";
        $output="<script> var curBillingObj; </script>";
        echo $output;
    }
}
add_action('wp_head','hook_javascript');
// END show user into from PHP to JS

// START Update User field label
add_filter( 'gettext', 'wpse6096_gettext', 10, 2 );
function wpse6096_gettext( $translation, $original )
{
    if ( 'First name' == $original ) {
        return 'Company ID ';
    }
    if ( 'Last name' == $original ) {
        return 'Company Name';
    }
    return $translation;
}
// END Update User field label

// START add exchange button
add_filter( 'woocommerce_my_account_my_orders_actions', 'my_account_my_orders_order_again_action', 9999, 2 );
function my_account_my_orders_order_again_action( $actions, $order ) {

    // check order date within 1 month
    $orderdate = strtotime($order->get_date_created());
    // $add_month_orderdate = date('Y-m-d', strtotime( '+2 day', $orderdate ));
    $add_month_orderdate = date('Y-m-d', strtotime( '+1 months', $orderdate ));
    $today = date('Y-m-d', strtotime( 'today' ));
    // echo $add_month_orderdate;
    // echo " ".$today;

    // if ( $order->has_status( 'processing' ) ) {
    if ( $add_month_orderdate >= $today ) {

        // $sph_re = "";
        // $sph_le = "";
        // $cyl_re = "";
        // $cyl_le = "";
        // $axis_re = "";
        // $axis_le = "";
        // $flat_k_re = "";
        // $flat_k_le = "";
        // $flat_e_re = "";
        // $flat_e_le = "";
        // $steep_k_re = "";
        // $steep_k_le = "";
        // $steep_e_re = "";
        // $steep_e_le = "";
        // $steep_k_axis_re = "";
        // $steep_k_axis_le = "";
        // $hvid_re = "";
        // $hvid_le = "";
        // $pupil_size_re = "";
        // $pupil_size_le = "";

        foreach ( $order->get_items() as $item_id => $item ) {
            $product_id = $item->get_product_id();
            $allmeta = $item->get_meta_data();
            $product_url = get_permalink($product_id);
            
            $patient_id = $item->get_meta('patient_id');
            $patient_name = $item->get_meta('patient_name');
            if(!empty($item->get_meta('sph_re'))){
                $sph_re = "&sph_re=".$item->get_meta('sph_re');
            }
            if(!empty($item->get_meta('sph_le'))){
                $sph_le = "&sph_le=".$item->get_meta('sph_le');
            }
            if(!empty($item->get_meta('cyl_re'))){
                $cyl_re = "&cyl_re=".$item->get_meta('cyl_re');
            }
            if(!empty($item->get_meta('cyl_le'))){
                $cyl_le = "&cyl_le=".$item->get_meta('cyl_le');
            }
            if(!empty($item->get_meta('axis_re'))){
                $axis_re = "&axis_re=".$item->get_meta('axis_re');
            }
            if(!empty($item->get_meta('axis_le'))){
                $axis_le = "&axis_le=".$item->get_meta('axis_le');
            }
            if(!empty($item->get_meta('flat_k_re'))){
                $flat_k_re = "&flat_k_re=".$item->get_meta('flat_k_re');
            }
            if(!empty($item->get_meta('flat_k_le'))){
                $flat_k_le = "&flat_k_le=".$item->get_meta('flat_k_le');
            }
            if(!empty($item->get_meta('flat_e_re'))){
                $flat_e_re = "&flat_e_re=".$item->get_meta('flat_e_re');
            }
            if(!empty($item->get_meta('flat_e_le'))){
                $flat_e_le = "&flat_e_le=".$item->get_meta('flat_e_le');
            }
            if(!empty($item->get_meta('steep_k_re'))){
                $steep_k_re = "&steep_k_re=".$item->get_meta('steep_k_re');
            }
            if(!empty($item->get_meta('steep_k_le'))){
                $steep_k_le = "&steep_k_le=".$item->get_meta('steep_k_le');
            }
            if(!empty($item->get_meta('steep_e_re'))){
                $steep_e_re = "&steep_e_re=".$item->get_meta('steep_e_re');
            }
            if(!empty($item->get_meta('steep_e_le'))){
                $steep_e_le = "&steep_e_le=".$item->get_meta('steep_e_le');
            }
            if(!empty($item->get_meta('steep_k_axis_re'))){
                $steep_k_axis_re = "&steep_k_axis_re=".$item->get_meta('steep_k_axis_re');
            }
            if(!empty($item->get_meta('steep_k_axis_le'))){
                $steep_k_axis_le = "&steep_k_axis_le=".$item->get_meta('steep_k_axis_le');
            }
            if(!empty($item->get_meta('hvid_re'))){
                $hvid_re = "&hvid_re=".$item->get_meta('hvid_re');
            }
            if(!empty($item->get_meta('hvid_le'))){
                $hvid_le = "&hvid_le=".$item->get_meta('hvid_le');
            }
            if(!empty($item->get_meta('pupil_size_re'))){
                $pupil_size_re = "&pupil_size_re=".$item->get_meta('pupil_size_re');
            }
            if(!empty($item->get_meta('pupil_size_le'))){
                $pupil_size_le = "&pupil_size_le=".$item->get_meta('pupil_size_le');
            }
        }
        // $output="<script> var curOrderObj = ".json_encode($order->get_date_created())."; console.log(JSON.stringify(curOrderObj)); </script>";
        // $output="<script> var curOrderObj = ".json_encode(date( 'Y-m-d', strtotime( $order->get_date_created() )))."; console.log(JSON.stringify(curOrderObj)); </script>";
        // echo $output;
        $product_url_new = $product_url."?patient_id=".$patient_id."&patient_name=".$patient_name.$sph_re.$sph_le.$cyl_re.$cyl_le.$axis_re.$axis_le.$flat_k_re.$flat_k_le.$flat_e_re.$flat_e_le.$steep_k_re.$steep_k_le.$steep_e_re.$steep_e_le.$steep_k_axis_le.$hvid_re.$hvid_le.$pupil_size_re.$pupil_size_le;

        $actions['order-again'] = array(
            'url' => $product_url_new,
            // 'url'  => wp_nonce_url( add_query_arg( 'order_again', $order->id ) , 'woocommerce-order_again' ),
            'name' => __( 'Exchange Order', 'woocommerce' ),
        );
    }
    return $actions;
}
// END add exchange button