const optionProject = document.getElementById('option-project');
const sectionProject = document.getElementById('section-project');

const project = {
	categories: [
		{
			category_id: 1,
			name: "Xe hơi"

		},
		{
			category_id: 2,
			name: "Bán hàng"
		},
		{
			category_id: 3,
			name: "Du lịch"
		}
	],
	projects: [
		{
			id: 1,
			name: "Quảng Bình Ford",
			link: "https://quangninhford.com.vn/",
			image: "img/web-1.jpg",
			category_id: 1,
		},
		{
			id: 2,
			name: "Honda",
			link: "https://quangninhford.com.vn/",
			image: "img/web-2.jpg",
			category_id: 2,
		},
		{
			id: 3,
			name: "Bánh ướt cây me",
			link: "https://banhuotcayme.vn/",
			image: "img/web-3.jpg",
			category_id: 3
		},
		{
			id: 4,
			name: "Du lịch",
			link: "https://patravel.com.vn/",
			image: "img/web-4.jpg",
			category_id: 3,
		},
		{
			id: 5,
			name: "Cần Thơ Ford",
			link: "https://quangninhford.com.vn/",
			image: "img/web-5.jpg",
			category_id: 3,
		},
		{
			id: 6,
			name: "Quảng Bình Ford 2222",
			link: "https://quangninhford.com.vn/",
			image: "img/web-6.jpg",
			category_id: 3,
		},
	],
	currentCategoryId: 1,
	handlePositionProduct () {

	},
	handleSelectItemsPerColumn() {
		const count = 1;
		this.handlePositionProduct();
	},
	handleSelectCategory (selectElement) {
		selectElement.addEventListener('change', (e) => {
			const option = e.target.value;
			const products = document.querySelectorAll(`.product`);
			this.handlePositionProduct();
		})
	},

	render: function () {
		const arr = {};

		const selectHtml = this.categories.map((category) => {
			return `<option ${this.currentCategoryId === category.category_id ? 'selected' : ''} value="dm_${category.category_id}">${category.name}</option>`
		});

		const htmls = this.projects.map(project => {
			return `
				 <div class="product col dm_${project.category_id} ${project.category_id !== this.currentCategoryId ? 'd-none' : ''}" data-aos="fade-up" ata-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-delay="200">
					 <div class="section-theme__item">
						 <div class="ratio ratio-16x9">
						 <img src="${project.image}" class="background-contain" alt="${project.name}">
						 </div>
					 <div class="section-theme__content">
						 <div class="theme-inner">
							 <div class="theme-title">${project.name}</div>
							<div class="theme-text">${this.categories.find(item => item.category_id === project.category_id).name}</div>
						 </div>
						<a href="${project.link}" class="link-blog link-default btn-project">Demo</a>
					 </div>
					</div>
				</div>`;
		})

		optionProject.innerHTML = selectHtml.join('');
		sectionProject.innerHTML = htmls.join('');
	},
	start: function () {
		this.render();
		const selectCategory = document.querySelector('#option-project');
		const allProducts = document.querySelectorAll('.product');
		console.log(allProducts)
		this.handleSelectCategory(selectCategory);
	}
}
project.start();
