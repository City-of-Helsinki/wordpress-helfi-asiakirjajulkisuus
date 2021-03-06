<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package Bulmascores
 */

get_header(); ?>

<section class="section latest">
	<div class="container">
		<h2 class="section-title"><?php pll_e('Hakutulokset') ?></h2>
		<div class="columns is-flex is-multiline">


			<?php
			if ( have_posts() ) : ?>

				<?php
				/* Start the Loop */
				while ( have_posts() ) : the_post();

					/**
					 * Run the loop for the search to output the results.
					 * If you want to overload this in a child theme then include a file
					 * called content-search.php and that will be used instead.
					 */
					get_template_part( 'template-parts/content', 'search' );

				endwhile;


			else :

				get_template_part( 'template-parts/content', 'none' );

			endif; ?>

		</div>
	</div>
</section>

<?php
get_footer();
