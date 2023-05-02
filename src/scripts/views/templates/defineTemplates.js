import config from '../../globals/config';

export const createRestaurantSkeletonCard= ()=> `
  <div class="skeletonCard">
    <div class="image"></div>
      <div class="infos">
        <div class="info"></div>
        <div class="info"></div>
      </div>

      <div class="content">
        <div class="title"></div>
        <div class="description"></div>
        <div class="description"></div>
        <div class="description"></div>
        <div class="description"></div>

        <div class="btn"></div>
      </div>
    </div>
  </div>
`;

export const createRestaurantCard= (restaurant)=> `
  <div class="restaurantCard">
    <img data-src="${config.SMALL_IMAGE_BASE_URL}/${restaurant.pictureId}" 
    alt="${restaurant.name}" class="lazyload">

    <div class="infos">
      <p class="location">
        <i class="fa-sharp fa-solid fa-map"></i> 
        <span>${restaurant.city}</span>
      </p>
      <p class="rating">
        <i class="fa-sharp fa-solid fa-star"></i> 
        <span>${restaurant.rating}</span>
      </p>
    </div>

    <div class="content">
      <h3>${restaurant.name}</h3>
      <p>
        ${restaurant.description}
      </p>
      <a href="/#/detail/${restaurant.id}" class="detailBtn"
        aria-label="Lihat lebih lanjut ${restaurant.name}"
      >
        <i class="fa fa-question-circle"></i>
        Lihat lebih lanjut
      </a>
    </div>
  </div>
`;

export const createCommentCard= (comment)=> `
  <div class="commentCard">
    <p class="description">${comment.comment}</p>

    <div class="bio">
      <img
        class="lazyload"
        src="${comment.profilePic}"
        alt="${comment.name}"
      />
      <div>
        <p class="name">${comment.name}</p>
        <p class="job">${comment.job}</p>
      </div>
    </div>
  </div>
`;

export const createDetailPageSkeleton= ()=> `
  <div class="skeletonCard detailPageSkeleton">
    <div class="image"></div>

    <div class="favBtn"></div>

    <div class="title"></div>

    <div class="labelSection">
      <div class="label"></div>
      <div class="label"></div>
    </div>

    <div class="generalInfoSection">
      <div class="label labelShort"></div>
      <div class="label"></div>
    </div>

    <div class="descriptionSection">
      <div class="description"></div>
      <div class="description"></div>
      <div class="description"></div>
      <div class="description"></div>
    </div>

    <div class="menusSection">
      <div class="menuList">
        <div class="menuTitle"></div>
        <div class="menuLabel"></div>
        <div class="menuLabel"></div>
        <div class="menuLabel"></div>
      </div>

      <div class="menuList">
        <div class="menuTitle"></div>
        <div class="menuLabel"></div>
        <div class="menuLabel"></div>
        <div class="menuLabel"></div>
      </div>
    </div>

    <div class="reviewsSection">
      <div class="title sectionTitle"></div>

      <div class="reviewCards">
        <div class="reviewCard">
          <div class="title"></div>
          <div class="date"></div>
          <div class="review"></div>
        </div>

        <div class="reviewCard">
          <div class="title"></div>
          <div class="date"></div>
          <div class="review"></div>
        </div>

        <div class="reviewCard">
          <div class="title"></div>
          <div class="date"></div>
          <div class="review"></div>
        </div>
      </div>
    </div>
  </div>
`;

export const createDetailPageCard= (restaurant)=> {
  const {categories}= restaurant;
  const {foods, drinks}= restaurant.menus;

  return `
    <div class="restaurantDetail">
      <img src="${config.MEDIUM_IMAGE_BASE_URL}${restaurant.pictureId}" 
        alt="gambar ${restaurant.name}" class="lazyload">

      <div class="generalInfo">
        <div id="favoriteButtonContainer"></div>

        <h3 class="title">${restaurant.name}</h3>
        <div class="categories">
          ${categories.map((category)=> `
            <p class="categoryLabel">${category.name}</p>
          `).join('')}
        </div>
        <p class="location">
          <i class="fa fa-map"></i>
          ${restaurant.address}, ${restaurant.city}
        </p>
        <p class="rating">
          <i class="fa fa-star"></i> ${restaurant.rating}
        </p>
      </div>

      <p class="description">
        ${restaurant.description}
      </p>

      <div class="menus">
        <div class="menuList">
          <h3>Makanan</h3>
          <ul>
            ${foods.map((menu)=>`<li>${menu.name}</li>`).join('')}
          </ul>
        </div>
        
        <div class="menuList">
          <h3>Minuman</h3>
          <ul>
            ${drinks.map((menu)=> `<li>${menu.name}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="reviews">
        <h2>Review para customer</h2>
        <div id="reviewCards">
          ${createRestaurantReviewsCard(restaurant.customerReviews)}
        </div>
      </div>

      <div class="form">
        <h2>Kirimkan Review Anda</h2>
        <form method="post">
          <input type="text" id="nameInput" name="name" 
            placeholder="Tulis nama anda disini" required>
          <textarea id="reviewInput" name="review" required rows="11" 
            placeholder="Tulis komentar anda disini..."></textarea>
          <button>Kirim Review</button> 
        </form> 
      </div> 
    </div>
  `;
};

export const createRestaurantReviewsCard= (customerReviews)=>
  customerReviews.map((review)=> `
    <div class="reviewCard">
      <h4>${review.name}</h4>
      <p class="date">${review.date}</p>
      <p class="review">${review.review}</p>
    </div>
  `).join('');

export const likeBtnTemplate= ()=> `
  <button aria-label="tambahkan restoran ke favorit" 
    id="favoriteButton">
    <i class="fa-regular fa-thumbs-up"></i> Tambahkan ke favorit 
  </button>
`;

export const dislikeBtnTemplate= ()=> `
  <button aria-label="hapus restoran dari favorit" 
    id="favoriteButton" class="dislike">
    <i class="fa-regular fa-thumbs-down"></i> Hapus dari favorit
  </button>
`;
