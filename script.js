let bukuDewasa = database.dewasa;
let bukuAnakAnak = database.anakanak;

let cardsDewasa = "";
bukuDewasa.forEach((i) => {
	cardsDewasa += showBuku(i);
});
let cardsBukuDewasa = document.querySelector(".dataBukuDewasa");
cardsBukuDewasa.innerHTML = cardsDewasa;

let cardsAnakAnak = "";
bukuAnakAnak.forEach((i) => {
	cardsAnakAnak += showBuku(i);
});
let cardsBukuAnakAnak = document.querySelector(".dataBukuAnakanak");
cardsBukuAnakAnak.innerHTML = cardsAnakAnak;

function showBuku(i) {
	return `<div class="item" data-key="1">
                <div class="img">
                    <img src="${i.gambar}" alt="gambar buku">
                </div>
                <div class="content">
                    <div class="title">${i.judul}</div>
                    <div class="des">Penulis : ${i.penulis}</div>
                    <div class="des">Penerbit : ${i.penerbit}</div>
                    <div class="des">Tahun : ${i.tahun}</div>
                    <div class="des">Bahasa : ${i.bahasa}</div>
                    <div class="price">Rp.0</div>
                    <input type="number" class="count" min="1" value="1">
                    <button class="add">Add to cart</button>
                    <button class="remove" onclick="Remove(1)"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>`;
}

function searchBooks() {
	let keywordSearch = document
		.querySelector(".inputKeyword")
		.value.toLowerCase();
	if (keywordSearch === "") {
		alert("Masukkan kata pencarian!");
	} else {
		let filteredBooksDewasa = bukuDewasa.filter((i) =>
			i.judul.toLowerCase().includes(keywordSearch)
		);
		let filteredBooksAnakAnak = bukuAnakAnak.filter((i) =>
			i.judul.toLowerCase().includes(keywordSearch)
		);
		let cardsDewasa = "";
		filteredBooksDewasa.forEach((i) => {
			cardsDewasa += showBuku(i);
		});

		let cardsAnakAnak = "";
		filteredBooksAnakAnak.forEach((i) => {
			cardsAnakAnak += showBuku(i);
		});

		if (cardsDewasa === "" && cardsAnakAnak === "") {
			alert("Pencarian yang kamu cari tidak ditemukan!");
		} else {
			cardsBukuDewasa.innerHTML = cardsDewasa;
			cardsBukuAnakAnak.innerHTML = cardsAnakAnak;
		}
	}
}
let searchButton = document.querySelector(".searchButton");
let inputClass = document.querySelector(".inputKeyword");
searchButton.addEventListener("click", searchBooks);
inputClass.addEventListener("keyup", function (btn) {
	if (btn.keyCode === 13) {
		searchBooks();
	}
});

// ================ Feedback  ================ //
let reviews = [];

function displayReviews() {
	const reviewsContainer = document.querySelector(".reviews");
	reviewsContainer.innerHTML = "";

	reviews.forEach((review) => {
		const reviewElement = document.createElement("div");
		reviewElement.className = "review";
		const ratingStars = "★".repeat(review.rating);
		reviewElement.innerHTML = `<p>${review.text} dengan rating ${ratingStars}</p>`;
		reviewsContainer.appendChild(reviewElement);
	});
}

document.querySelector("#submitReview").addEventListener("click", () => {
	const userReview = document.querySelector("#userReview").value;
	const rating = parseInt(document.querySelector("#rating").value);

	if (userReview && rating >= 1 && rating <= 5) {
		reviews.push({ text: userReview, rating });
		displayReviews();
		document.querySelector("#userReview").value = "";
		document.querySelector("#rating").value = "1";
	}
});

displayReviews();
