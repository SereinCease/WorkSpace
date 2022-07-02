<template>
	<view class="common-detail">
		<view class="img-area">
			<image :src="isVegetables?'../../static/vegetable.jpg':'../../static/fruit.jpg'" style="width: 100%;">
			</image>
		</view>
		<view class="details-area" v-if="JSON.stringify(detailsList)!=='[]'">
			<view class="list-content" :class="'bg-'+item.color" v-for="item,index in detailsList" :key="index" :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]">
				<view class="list-item" @click="getDetails(item)">
					<view class="left-img">
						<image :src="item.img" mode="aspectFit" class="img-left"></image>
					</view>
					<view class="right-main">
						<view class="main-name">
							{{item.name}}
						</view>
						<view class="main-subname">
							<span>描述：</span>{{item.subName}}
						</view>
						<view class="bottom-right">
							...
						</view>
					</view>
				</view>
			</view>
		</view>
		<u-empty v-if="JSON.stringify(detailsList)==='[]'">
		</u-empty>
		<u-modal :show="show" :title="title" @close="closeModal" closeOnClickOverlay="true">
			<view class="slot-content">
				<rich-text :nodes="content"></rich-text>
			</view>
		</u-modal>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyName: "",
				isVegetables: true,
				show: false,
				title: '',
				content: '',
				vegetables: [{
					title: '根菜类',
					children: [{
							name: '胡萝卜',
							img: '../../static/logo.png',
							color: 'green',
							subName: '根茎类蔬菜',
							description: `
								<div class="lemma-summary" label-module="lemmaSummary">
								<div class="para" label-module="para" data-pid="1">胡萝卜（学名：<i>Daucus carota</i> var. <i>sativa</i> Hoffm.）是伞形科、胡萝卜属野胡萝卜的变种，一年生或二年生<a target="_blank" href="/item/%E8%8D%89%E6%9C%AC/541696" data-lemmaid="541696">草本</a>植物。根粗壮，长圆锥形，呈橙红色或黄色。茎直立，高可达90厘米，多分枝。<a target="_blank" href="/item/%E5%8F%B6%E7%89%87/6728903" data-lemmaid="6728903">叶片</a>具长柄，羽状复叶，<a target="_blank" href="/item/%E8%A3%82%E7%89%87/1893009" data-lemmaid="1893009">裂片</a>线形或披针形，先端尖锐；叶柄基部扩大，形成叶鞘。复伞形花序；花序梗有糙硬毛；总<a target="_blank" href="/item/%E8%8B%9E%E7%89%87/6732646" data-lemmaid="6732646">苞片</a>多数，呈叶状、结果期外缘的伞辐向内弯曲；花通常白色，有时带淡红色；花柄不等长。果实圆锥形，棱上有白色刺手。期4月开花。</div><div class="para" label-module="para" data-pid="2">原产亚洲西部，阿富汗,10世纪时经伊朗传入欧洲大陆，15世纪英国已有栽培，16世纪传入美国。12世纪经伊朗传入中国，日本在16世纪从中国引入。</div><div class="para" label-module="para" data-pid="3">胡萝卜素是维生素A的主要来源，而维生素A可以促进生长，防止细菌感染，以及具有保护表皮组织，保护呼吸道、消化道、泌尿系统等上皮细胞组织的功能与作用；胡萝卜含有一种檞皮素，常吃可增加冠状动脉血流量，促进肾上腺素合成，有降压、消炎之功效。胡萝卜种子含油量达13%，可驱蛔虫，治长久不愈的痢疾。胡萝卜叶子可防治水痘与急性黄疸肝炎。长期饮用胡萝卜汁可预防夜盲症、干眼病，使皮肤丰润、皱褶展平、斑点消除及头发健美。特别是对吸烟的人来说，每天吃点胡萝卜更有预防肺癌的作用。</div><div class="para" label-module="para" data-pid="4">（概述图参考来源：<a target="_blank" href="/item/%E4%B8%AD%E5%9B%BD%E8%87%AA%E7%84%B6%E6%A0%87%E6%9C%AC%E9%A6%86/2885233" data-lemmaid="2885233">中国自然标本馆</a><sup class="sup--normal" data-sup="1" data-ctrmap=":1,">
								[1]</sup><a class="sup-anchor" name="ref_[1]_17967">&nbsp;</a>
								）</div>
								</div>
								`
						},
						{
							name: '白萝卜',
							color: 'pink',
							img: '../../static/logo.png',
							subName: '白色的，强身健体',
							description: `
								<div class="lemma-summary" label-module="lemmaSummary">
								<div class="para" label-module="para" data-pid="1">根茎类<a target="_blank" href="/item/%E8%94%AC%E8%8F%9C/453" data-lemmaid="453">蔬菜</a>，<a target="_blank" href="/item/%E5%8D%81%E5%AD%97%E8%8A%B1%E7%A7%91">十字花科</a><a target="_blank" href="/item/%E8%90%9D%E5%8D%9C%E5%B1%9E">萝卜属</a>植物。种植有千年历史，在饮食和<a target="_blank" href="/item/%E4%B8%AD%E5%8C%BB%E9%A3%9F%E7%96%97/2584913" data-lemmaid="2584913">中医食疗</a>领域都有广泛应用。清乾隆庚午年（公元1750年）编修的《如皋县志》载：“萝卜，一名莱菔，有红白二种，四时皆可栽，唯末伏初为善，破甲即可供食，生沙壤者甘而脆，生瘠土者坚而辣。”<sup class="sup--normal" data-sup="1" data-ctrmap=":1,">
								[1]</sup><a class="sup-anchor" name="ref_[1]_15195118">&nbsp;</a>
								</div><div class="para" label-module="para" data-pid="2">其色白，属金，入肺，性甘平辛，归肺脾经，具有下气、消食、除疾润肺、解毒生津，利尿通便的功效。主治<a target="_blank" href="/item/%E8%82%BA%E7%97%BF/11003859" data-lemmaid="11003859">肺痿</a>、<a target="_blank" href="/item/%E8%82%BA%E7%83%AD/2764745" data-lemmaid="2764745">肺热</a>、便秘、吐血、<a target="_blank" href="/item/%E6%B0%94%E8%83%80/4363596" data-lemmaid="4363596">气胀</a>、食滞、<a target="_blank" href="/item/%E6%B6%88%E5%8C%96%E4%B8%8D%E8%89%AF/9401580" data-lemmaid="9401580">消化不良</a>、痰多、大小便不通畅、酒精中毒等。<sup class="sup--normal" data-sup="2" data-ctrmap=":2,">
								[2]</sup><a class="sup-anchor" name="ref_[2]_15195118">&nbsp;</a>
								</div>
								</div>
								`
						},
						{
							name: '大头菜/甘蓝',
							color: 'mauve',
							img: '../../static/logo.png',
							subName: '吃嘛嘛香',
							description: `
								<div class="lemma-summary" label-module="lemmaSummary">
								<div class="para" label-module="para" data-pid="1">甘蓝（学名：<i>Brassica oleracea </i>var. <i>capitata </i>L.）是十字花科、芸薹属植物。二年生草本，被粉霜。矮且粗壮一年生茎肉质，不分枝，绿色或灰绿色。基生叶质厚，层层包裹成球状体，扁球形；二年生茎有分枝，具茎生叶。基生叶顶端圆形，基部骤窄成极短有宽翅的叶柄；上部茎生叶卵形或长圆状卵形，基部抱茎。总状花序顶生及腋生；花淡黄色，直径2-2.5厘米；花梗长7-15毫米；萼片直立，线状长圆形；花瓣宽椭圆状倒卵形或近圆形，顶端微缺。长角果圆柱形，两侧稍压扁，中脉突出，喙圆锥形；果梗粗，直立开展。种子球形，棕色。花期4月，果期5月。<sup class="sup--normal" data-sup="2" data-ctrmap=":2,">
								[2]</sup><a class="sup-anchor" name="ref_[2]_33958">&nbsp;</a>
								</div><div class="para" label-module="para" data-pid="2">原产于地中海北岩；中国各地均有培。喜欢温和冷凉的气候，不耐炎热，生长适宜的温度为10-20℃，25℃以上生长缓慢，不耐干旱与水渍，要求疏松、肥沃的土壤类型。<sup class="sup--normal" data-sup="5-7" data-ctrmap=":5,:6,:7,">
								[5-7]</sup><a class="sup-anchor" name="ref_[5-7]_33958">&nbsp;</a>
								</div><div class="para" label-module="para" data-pid="3">甘蓝营养元素很丰富如优质蛋白，纤维素，矿物质，维生素等等，吃甘蓝可以补充营养，强身健体。<sup class="sup--normal" data-sup="1" data-ctrmap=":1,">
								[1]</sup><a class="sup-anchor" name="ref_[1]_33958">&nbsp;</a>
								作蔬菜及饲料用。叶的浓汁用于治疗胃及十二指肠溃疡。<sup class="sup--normal" data-sup="2" data-ctrmap=":2,">
								[2]</sup><a class="sup-anchor" name="ref_[2]_33958">&nbsp;</a>
								</div><div class="para" label-module="para" data-pid="4">（概述图参考来源：<sup class="sup--normal" data-sup="9" data-ctrmap=":9,">
								[9]</sup><a class="sup-anchor" name="ref_[9]_33958">&nbsp;</a>
								）</div>
								</div>
								`
						},
					]
				}, {
					title: '白菜类',
					children: [{
							name: '白菜',
							img: '../../static/logo.png',
							color: 'green',
							subName: '白菜，真好吃',
							description: `
								<div class="lemma-summary" label-module="lemmaSummary">
								<div class="para" label-module="para" data-pid="1">白菜（学名：<i>Brassica rapa</i> var. <i>glabra</i> Regel）是<a target="_blank" href="/item/%E5%8D%81%E5%AD%97%E8%8A%B1%E7%A7%91/282107" data-lemmaid="282107">十字花科</a>，芸薹属<a target="_blank" href="/item/%E4%BA%8C%E5%B9%B4%E7%94%9F%E8%8D%89%E6%9C%AC/3514486" data-lemmaid="3514486">二年生草本</a>，高可达60厘米，全株无毛，基生叶多数，大形，倒卵状长圆形至宽倒卵形，顶端圆钝，边缘皱缩，波状，叶柄白色，扁平，花鲜黄色，萼片长圆形或卵状披针形，直立，淡绿色至黄色；花瓣倒卵形，果梗开展或上升，种子球形，棕色。5月开花，6月结果。</div><div class="para" label-module="para" data-pid="2">白菜原分布于中国华北，中国各地广泛栽培。白菜比较耐寒，喜好冷凉气候，不适于栽植在排水不良的粘土地上。</div><div class="para" label-module="para" data-pid="3">白菜营养丰富，菜叶可供炒食、生食、盐腌、酱渍，外层脱落的菜叶尚可作饲料，具有一定的药用价值。</div><div class="para" label-module="para" data-pid="4">（概述图参考来源：<a target="_blank" href="/item/%E4%B8%AD%E5%9B%BD%E8%87%AA%E7%84%B6%E6%A0%87%E6%9C%AC%E9%A6%86/2885233" data-lemmaid="2885233">中国自然标本馆</a><sup class="sup--normal" data-sup="1" data-ctrmap=":1,">
								[1]</sup><a class="sup-anchor" name="ref_[1]_15903098">&nbsp;</a>
								）</div>
								</div>
								`
						},
						{
							name: '白萝卜',
							color: 'pink',
							img: '../../static/logo.png',
							subName: '白色的，强身健体',
							description: `
								<div class="lemma-summary" label-module="lemmaSummary">
								<div class="para" label-module="para" data-pid="1">根茎类<a target="_blank" href="/item/%E8%94%AC%E8%8F%9C/453" data-lemmaid="453">蔬菜</a>，<a target="_blank" href="/item/%E5%8D%81%E5%AD%97%E8%8A%B1%E7%A7%91">十字花科</a><a target="_blank" href="/item/%E8%90%9D%E5%8D%9C%E5%B1%9E">萝卜属</a>植物。种植有千年历史，在饮食和<a target="_blank" href="/item/%E4%B8%AD%E5%8C%BB%E9%A3%9F%E7%96%97/2584913" data-lemmaid="2584913">中医食疗</a>领域都有广泛应用。清乾隆庚午年（公元1750年）编修的《如皋县志》载：“萝卜，一名莱菔，有红白二种，四时皆可栽，唯末伏初为善，破甲即可供食，生沙壤者甘而脆，生瘠土者坚而辣。”<sup class="sup--normal" data-sup="1" data-ctrmap=":1,">
								[1]</sup><a class="sup-anchor" name="ref_[1]_15195118">&nbsp;</a>
								</div><div class="para" label-module="para" data-pid="2">其色白，属金，入肺，性甘平辛，归肺脾经，具有下气、消食、除疾润肺、解毒生津，利尿通便的功效。主治<a target="_blank" href="/item/%E8%82%BA%E7%97%BF/11003859" data-lemmaid="11003859">肺痿</a>、<a target="_blank" href="/item/%E8%82%BA%E7%83%AD/2764745" data-lemmaid="2764745">肺热</a>、便秘、吐血、<a target="_blank" href="/item/%E6%B0%94%E8%83%80/4363596" data-lemmaid="4363596">气胀</a>、食滞、<a target="_blank" href="/item/%E6%B6%88%E5%8C%96%E4%B8%8D%E8%89%AF/9401580" data-lemmaid="9401580">消化不良</a>、痰多、大小便不通畅、酒精中毒等。<sup class="sup--normal" data-sup="2" data-ctrmap=":2,">
								[2]</sup><a class="sup-anchor" name="ref_[2]_15195118">&nbsp;</a>
								</div>
								</div>
								`
						},
						{
							name: '大头菜/甘蓝',
							color: 'mauve',
							img: '../../static/logo.png',
							subName: '吃嘛嘛香',
							description: `
								<div class="lemma-summary" label-module="lemmaSummary">
								<div class="para" label-module="para" data-pid="1">甘蓝（学名：<i>Brassica oleracea </i>var. <i>capitata </i>L.）是十字花科、芸薹属植物。二年生草本，被粉霜。矮且粗壮一年生茎肉质，不分枝，绿色或灰绿色。基生叶质厚，层层包裹成球状体，扁球形；二年生茎有分枝，具茎生叶。基生叶顶端圆形，基部骤窄成极短有宽翅的叶柄；上部茎生叶卵形或长圆状卵形，基部抱茎。总状花序顶生及腋生；花淡黄色，直径2-2.5厘米；花梗长7-15毫米；萼片直立，线状长圆形；花瓣宽椭圆状倒卵形或近圆形，顶端微缺。长角果圆柱形，两侧稍压扁，中脉突出，喙圆锥形；果梗粗，直立开展。种子球形，棕色。花期4月，果期5月。<sup class="sup--normal" data-sup="2" data-ctrmap=":2,">
								[2]</sup><a class="sup-anchor" name="ref_[2]_33958">&nbsp;</a>
								</div><div class="para" label-module="para" data-pid="2">原产于地中海北岩；中国各地均有培。喜欢温和冷凉的气候，不耐炎热，生长适宜的温度为10-20℃，25℃以上生长缓慢，不耐干旱与水渍，要求疏松、肥沃的土壤类型。<sup class="sup--normal" data-sup="5-7" data-ctrmap=":5,:6,:7,">
								[5-7]</sup><a class="sup-anchor" name="ref_[5-7]_33958">&nbsp;</a>
								</div><div class="para" label-module="para" data-pid="3">甘蓝营养元素很丰富如优质蛋白，纤维素，矿物质，维生素等等，吃甘蓝可以补充营养，强身健体。<sup class="sup--normal" data-sup="1" data-ctrmap=":1,">
								[1]</sup><a class="sup-anchor" name="ref_[1]_33958">&nbsp;</a>
								作蔬菜及饲料用。叶的浓汁用于治疗胃及十二指肠溃疡。<sup class="sup--normal" data-sup="2" data-ctrmap=":2,">
								[2]</sup><a class="sup-anchor" name="ref_[2]_33958">&nbsp;</a>
								</div><div class="para" label-module="para" data-pid="4">（概述图参考来源：<sup class="sup--normal" data-sup="9" data-ctrmap=":9,">
								[9]</sup><a class="sup-anchor" name="ref_[9]_33958">&nbsp;</a>
								）</div>
								</div>
								`
						},
					]
				}, ],
				fruits: [
					{
						title: '浆果类',
						children: [{
								name: '葡萄',
								img: '../../static/logo.png',
								color: 'green',
								subName: '葡萄水灵灵',
								description: `
									<div class="lemma-summary" label-module="lemmaSummary">
									<div class="para" label-module="para" data-pid="1">葡萄（学名：<i>Vitis vinifera</i> L.）为葡萄科葡萄属木质<a target="_blank" href="/item/%E8%97%A4%E6%9C%AC%E6%A4%8D%E7%89%A9">藤本植物</a>，小枝圆柱形，有纵棱纹，无毛或被稀疏柔毛，叶卵圆形，<a target="_blank" href="/item/%E5%9C%86%E9%94%A5%E8%8A%B1%E5%BA%8F/1381805" data-lemmaid="1381805">圆锥花序</a>密集或疏散，基部<a target="_blank" href="/item/%E5%88%86%E6%9E%9D/8763966" data-lemmaid="8763966">分枝</a><a target="_blank" href="/item/%E5%8F%91%E8%BE%BE/118646" data-lemmaid="118646">发达</a>，果实球形或<a target="_blank" href="/item/%E6%A4%AD%E5%9C%86%E5%BD%A2/10957419" data-lemmaid="10957419">椭圆形</a>，<a target="_blank" href="/item/%E8%8A%B1%E6%9C%9F/13019857" data-lemmaid="13019857">花期</a>4-5月，<a target="_blank" href="/item/%E6%9E%9C%E6%9C%9F/9857508" data-lemmaid="9857508">果期</a>8-9月。</div><div class="para" label-module="para" data-pid="2">葡萄是世界最古老的果树树种之一，葡萄的<a target="_blank" href="/item/%E6%A4%8D%E7%89%A9/142914" data-lemmaid="142914">植物</a><a target="_blank" href="/item/%E5%8C%96%E7%9F%B3/82301" data-lemmaid="82301">化石</a>发现于第三纪地层中，说明当时已遍布于欧、亚及格陵兰。<sup class="sup--normal" data-sup="1" data-ctrmap=":1,">
									[1]</sup><a class="sup-anchor" name="ref_[1]_5062282">&nbsp;</a>
									葡萄原产亚洲西部，世界各地均有栽培，<sup class="sup--normal" data-sup="2" data-ctrmap=":2,">
									[2]</sup><a class="sup-anchor" name="ref_[2]_5062282">&nbsp;</a>
									世界各地的葡萄约95%集中分布在北半球。<sup class="sup--normal" data-sup="3" data-ctrmap=":3,">
									[3]</sup><a class="sup-anchor" name="ref_[3]_5062282">&nbsp;</a>
									</div><div class="para" label-module="para" data-pid="3">葡萄为著名水果，生食或制<a target="_blank" href="/item/%E8%91%A1%E8%90%84%E5%B9%B2/709985" data-lemmaid="709985">葡萄干</a>，并<a target="_blank" href="/item/%E9%85%BF%E9%85%92/10861354" data-lemmaid="10861354">酿酒</a>，<a target="_blank" href="/item/%E9%85%BF%E9%85%92/10861354" data-lemmaid="10861354">酿酒</a>后的酒脚可提酒石酸，根和藤药用能止呕、<a target="_blank" href="/item/%E5%AE%89%E8%83%8E/10571295" data-lemmaid="10571295">安胎</a>。<sup class="sup--normal" data-sup="2" data-ctrmap=":2,">
									[2]</sup><a class="sup-anchor" name="ref_[2]_5062282">&nbsp;</a>
									</div><div class="para" label-module="para" data-pid="4">（概述图参考：<a target="_blank" href="/item/%E4%B8%AD%E5%9B%BD%E8%87%AA%E7%84%B6%E6%A0%87%E6%9C%AC%E9%A6%86">中国自然标本馆</a><sup class="sup--normal" data-sup="4" data-ctrmap=":4,">
									[4]</sup><a class="sup-anchor" name="ref_[4]_5062282">&nbsp;</a>
									）</div>
									</div>
									`
							},
							{
								name: '西瓜',
								color: 'pink',
								img: '../../static/logo.png',
								subName: '夏天美滋滋',
								description: `
									<div class="lemma-summary" label-module="lemmaSummary">
									<div class="para" label-module="para">西瓜（学名：<i>Citrullus lanatus </i>(Thunb.) Matsum. et Nakai）一年生蔓生<a target="_blank" href="/item/%E8%97%A4%E6%9C%AC">藤本</a>；茎、枝粗壮，具明显的棱。<a target="_blank" href="/item/%E5%8D%B7%E9%A1%BB/6007704" data-lemmaid="6007704">卷须</a>较粗壮，具短柔毛，叶柄粗，密被柔毛；叶片纸质，轮廓三角状卵形，带白绿色，两面具短硬毛，叶片基部心形。雌雄同株。雌、雄花均单生于叶腋。雄花花梗长3-4厘米，密被黄褐色长柔毛；花萼筒宽钟形；花冠淡黄色；<a target="_blank" href="/item/%E9%9B%84%E8%95%8A/2375527" data-lemmaid="2375527">雄蕊</a>近离生，花丝短，药室折曲。雌花：花萼和花冠与雄花同；<a target="_blank" href="/item/%E5%AD%90%E6%88%BF/5372809" data-lemmaid="5372809">子房</a>卵形，柱头肾形。果实大型，近于球形或椭<a target="_blank" href="/item/%E5%9C%86%E5%BD%A2/6643442" data-lemmaid="6643442">圆形</a>，肉质，多汁，<a target="_blank" href="/item/%E6%9E%9C%E7%9A%AE/7201871" data-lemmaid="7201871">果皮</a><a target="_blank" href="/item/%E5%85%89%E6%BB%91/227421" data-lemmaid="227421">光滑</a>，<a target="_blank" href="/item/%E8%89%B2%E6%B3%BD/29894" data-lemmaid="29894">色泽</a>及纹饰各式。种子多数，卵形，黑色、红色，两面平滑，基部钝圆，通常边缘稍拱起，花果期夏季。</div><div class="para" label-module="para">中国各地栽培，品种甚多，外果皮、果肉及种子形式多样，以新疆、甘肃兰州、宁夏中宁一带、山东德州、江苏东台等地最为有名。其原种可能来自非洲，广泛栽培于世界热带到温带，后传入中国。</div><div class="para" label-module="para">西瓜为<a target="_blank" href="/item/%E5%A4%8F%E5%AD%A3/22299" data-lemmaid="22299">夏季</a>之水果，<a target="_blank" href="/item/%E6%9E%9C%E8%82%89/7201991" data-lemmaid="7201991">果肉</a>味甜，能降温去暑；种子含油，可作消遣食品；果皮药用，有<a target="_blank" href="/item/%E6%B8%85%E7%83%AD/6351094" data-lemmaid="6351094">清热</a>、<a target="_blank" href="/item/%E5%88%A9%E5%B0%BF/492724" data-lemmaid="492724">利尿</a>、<a target="_blank" href="/item/%E9%99%8D%E8%A1%80%E5%8E%8B/3443437" data-lemmaid="3443437">降血压</a>之效。</div><div class="para" label-module="para">（概述图片来源：<sup class="sup--normal" data-sup="1" data-ctrmap=":1,">
									[1]</sup><a class="sup-anchor" name="ref_[1]_18564259">&nbsp;</a>
									）</div>
									</div>
									`
							},
							{
								name: '大头菜/甘蓝',
								color: 'mauve',
								img: '../../static/logo.png',
								subName: '吃嘛嘛香',
								description: `
									<div class="lemma-summary" label-module="lemmaSummary">
									<div class="para" label-module="para" data-pid="1">甘蓝（学名：<i>Brassica oleracea </i>var. <i>capitata </i>L.）是十字花科、芸薹属植物。二年生草本，被粉霜。矮且粗壮一年生茎肉质，不分枝，绿色或灰绿色。基生叶质厚，层层包裹成球状体，扁球形；二年生茎有分枝，具茎生叶。基生叶顶端圆形，基部骤窄成极短有宽翅的叶柄；上部茎生叶卵形或长圆状卵形，基部抱茎。总状花序顶生及腋生；花淡黄色，直径2-2.5厘米；花梗长7-15毫米；萼片直立，线状长圆形；花瓣宽椭圆状倒卵形或近圆形，顶端微缺。长角果圆柱形，两侧稍压扁，中脉突出，喙圆锥形；果梗粗，直立开展。种子球形，棕色。花期4月，果期5月。<sup class="sup--normal" data-sup="2" data-ctrmap=":2,">
									[2]</sup><a class="sup-anchor" name="ref_[2]_33958">&nbsp;</a>
									</div><div class="para" label-module="para" data-pid="2">原产于地中海北岩；中国各地均有培。喜欢温和冷凉的气候，不耐炎热，生长适宜的温度为10-20℃，25℃以上生长缓慢，不耐干旱与水渍，要求疏松、肥沃的土壤类型。<sup class="sup--normal" data-sup="5-7" data-ctrmap=":5,:6,:7,">
									[5-7]</sup><a class="sup-anchor" name="ref_[5-7]_33958">&nbsp;</a>
									</div><div class="para" label-module="para" data-pid="3">甘蓝营养元素很丰富如优质蛋白，纤维素，矿物质，维生素等等，吃甘蓝可以补充营养，强身健体。<sup class="sup--normal" data-sup="1" data-ctrmap=":1,">
									[1]</sup><a class="sup-anchor" name="ref_[1]_33958">&nbsp;</a>
									作蔬菜及饲料用。叶的浓汁用于治疗胃及十二指肠溃疡。<sup class="sup--normal" data-sup="2" data-ctrmap=":2,">
									[2]</sup><a class="sup-anchor" name="ref_[2]_33958">&nbsp;</a>
									</div><div class="para" label-module="para" data-pid="4">（概述图参考来源：<sup class="sup--normal" data-sup="9" data-ctrmap=":9,">
									[9]</sup><a class="sup-anchor" name="ref_[9]_33958">&nbsp;</a>
									）</div>
									</div>
									`
							},
						]
					}, 
				],
				detailsList: []
			}
		},
		methods: {
			getDetails(val) {
				console.log(val);
				this.show = true;
				this.title = val.name
				this.content = val.description
			},
			closeModal() {
				this.show = false
			}
		},
		onLoad({
			keyName
		}) {
			const nameArr = keyName.split(',')
			this.keyName = nameArr[0]
			this.isVegetables = nameArr[1] === 'vegetables' ? true : false
			const commonArr = this.isVegetables ? JSON.parse(JSON.stringify(this.vegetables)) : JSON.parse(JSON.stringify(
				this.fruits))
			const filterArr = commonArr.filter(cv => cv.title === this.keyName)
			if (filterArr && JSON.stringify(filterArr) !== '[]') {
				this.detailsList = filterArr[0].children
				console.log(this.detailsList);
			}

		}
	}
</script>

<style lang="scss" scoped>
	/deep/ .u-modal {
		height: 80vh;
		overflow: auto !important;
	}

	/deep/ .u-modal__button-group,
	/deep/ .u-line {
		display: none !important;
	}

	/deep/ .lemma-summary {
		clear: both;
		font-size: 14px;
		word-wrap: break-word;
		color: #333;
		margin-bottom: 15px;
		text-indent: 2em;
		line-height: 24px;
		zoom: 1;
	}

	/deep/ .para {
		font-size: 14px;
		word-wrap: break-word;
		color: #333;
		margin-bottom: 15px;
		text-indent: 2em;
		line-height: 24px;
		zoom: 1;
	}

	.details-area {
		padding: 20rpx;
		display: flex;
		flex-wrap: wrap;

		.list-content {
			margin-right: 20rpx;
			margin-bottom: 20rpx;
			width: calc(50% - 12rpx);
			box-shadow: 8rpx 8rpx 20rpx #7d7d7d, -8rpx -8rpx 20rpx #e9e9e9;
			&:nth-of-type(2n) {
				margin-right: 0;
			}

			height: 300rpx;
			border-radius: 8rpx;
			padding: 20rpx;

			.list-item {
				.left-img {
					width: 100%;
					margin-right: 20rpx;

					.img-left {
						width: 100%;
						height: 100rpx;
						border-radius: 50%;
					}
				}

				.right-main {
					.main-name {
						margin-top: 20rpx;
						text-align: center;
						font-size: 40rpx;
						font-weight: bolder;
					}

					.main-subname {
						text-align: center;
						margin-top: 10rpx;
						font-size: 24rpx;
					}

					.bottom-right {
						display: flex;
						justify-content: flex-end;
					}
				}
			}

		}
	}
</style>
