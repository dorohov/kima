<?
//__theme_ed($this->post['meta']);

$images = [];

if($this->post['meta']['images'] != '') {
	$_images = unserialize($this->post['meta']['images']);
	if(is_array($_images) && count($_images)) {
		foreach($_images as $img_id) {
			$images[] = $img_id;
		}
	}
}

?>

<div class="content-block portfolio-page__content-block height-page  is--overflow " role="main">
	
	<div class="portfolio-card-panel__inner  is--hidden-screen"> 
		<div class="page-header-panel__block">
			<div class="page-header__block  is--heading  is--portfolio-card">
				<h1  class="page-header__heading  is--heading  is--portfolio-card"><span><?=t($this->post['id']);?></span></h1>		
			</div>	
		</div>
	</div>
	
	<div class="portfolio-card-panel__tabs-content">
		<div class="portfolio-card-panel__tabs-pane fade in active" id="portfolio-slider-1">
			<div class="portfolio-card-panel__owl-block">
				<div class="owl-portfolio  portfolio-card-panel__owl  is--portfolio">
					
					<?
					
					$count_str = '' . count($images);
					
					if(strlen($count_str) < 2) {
						$count_str = '0' . $count_str;
					}
					
					if(count($images)) {
						foreach($images as $index => $p_id) {
							
							$index_str = '' . ($index + 1);
							
							if(strlen($index_str) < 2) {
								$index_str = '0' . $index_str;
							}
							
							$img_preview = $this->mdl('Imgs')->rawImg($p_id, 'full');
							if($img_preview == '') {
								$img_preview = 'http://via.placeholder.com/1920x1080';
							}
							
					?>
					<div data-owl-item="<?=$index_str;?>" class="portfolio-card__slider-item">
						<a href="<?=$img_preview;?>" class="portfolio-card__slider-link" data-fancybox="portfolio-gallery1" style="background-image: url(<?=$img_preview;?>);"></a>
					</div>
					<?
						}
					}
					?>
					
				</div>	
				<div class="owl-count__block  is--portfolio">
					<span class="owl-count__item  is--count">01</span>
					<span class="owl-count__item">/<?=$count_str;?></span>
				</div>
			</div>
		</div>
	</div>
	
	<div class="portfolio-card-panel__inner"> 
		<div class="mCustomScrollbar portfolio-card-panel__scroll" data-mcs-theme="gold">
			<div class="page-header-panel__block  is--hidden-device">
				<div class="page-header__block  is--heading  is--portfolio-card">
					<h1  class="page-header__heading  is--heading  is--portfolio-card"><span><?=t($this->post['id']);?></span></h1>		
				</div>	
			</div>
			<div class="portfolio-card-panel__decs-block">
				<div class="portfolio-card-panel__decs-row row  is--wrap  ">
					
					<?
					if($this->post['meta']['city'] != '') {
					?>
					<div class="portfolio-card-panel__decs-cols cols">
						<div class="portfolio-card-panel__decs-item">
							<span>Адрес:</span> <?=$this->post['meta']['city'];?>
							<?
							if($this->post['meta']['adr'] != '') {
							?>
							, <?=$this->post['meta']['adr'];?>
							<?
							}
							?>
						</div>
					</div>
					<?
					}
					?>
					
					<?
					if($this->post['meta']['client'] != '') {
					?>
					<div class="portfolio-card-panel__decs-cols cols">
						<div class="portfolio-card-panel__decs-item">
							<span>Заказчик:</span> <?=$this->post['meta']['client'];?>
						</div>
					</div>
					<?
					}
					?>
					
					<?
					if($this->post['meta']['stage'] != '') {
					?>
					<div class="portfolio-card-panel__decs-cols cols">
						<div class="portfolio-card-panel__decs-item">
							<span>Стадия:</span> <?=$this->post['meta']['stage'];?>
						</div>
					</div>
					<?
					}
					?>
					
					<?
					if($this->post['meta']['year'] != '') {
					?>
					<div class="portfolio-card-panel__decs-cols cols">
						<div class="portfolio-card-panel__decs-item">
							<span>Год: <?=$this->post['meta']['year'];?>&nbsp;год</span>
						</div>
					</div>
					<?
					}
					?>
					
				</div>
			</div>
			<div class="portfolio-card-panel__text-block  text__block">
				<?=c($this->post['id']);?>
			</div>
		</div>
	</div>
</div>