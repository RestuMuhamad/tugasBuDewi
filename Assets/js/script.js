window.addEventListener("load", () => {
	// Start
	const boxMulai = document.getElementById("box-mulai");
	const h1BoxMulai = document.getElementById("text-mulai");
	const transisiMulai = () => {
		boxMulai.style.opacity = 0;
		setTimeout(() => {
			location.href = "play.html";
		}, 550);
	};

	if (h1BoxMulai) {
		h1BoxMulai.addEventListener("click", () => {
			transisiMulai();
		});
	}

	// Play
	const boxGame = document.getElementById("box-game");
	const namaBuah = document.getElementById("nama-buah");

	const ambilAngkaCard = (el) => {
		const angkaSementara = el.className.split(" ");
		return angkaSementara[1];
	};

	const generateAngka = (num) => {
		return Math.floor(Math.random() * num);
	};

	const angkaNamaBuah = generateAngka(4);
	switch (angkaNamaBuah) {
		case 1:
			namaBuah.classList.add(1);
			namaBuah.innerHTML = "Apel";
			break;
		case 2:
			namaBuah.classList.add(2);
			namaBuah.innerHTML = "Jeruk";
			break;
		case 3:
			namaBuah.classList.add(3);
			namaBuah.innerHTML = "Pisang";
			break;
		case 4:
			namaBuah.classList.add(4);
			namaBuah.innerHTML = "Mangga";
			break;
		default:
			namaBuah.classList.add(4);
			namaBuah.innerHTML = "Mangga";
			break;
	}

	const ubahCard = (el) => {
		const angkaEl = ambilAngkaCard(el);
		const cardBuah = el;
		cardBuah.classList.toggle("active");
		setTimeout(() => {
			cardBuah.style.background = "url('assets/jadi/" + angkaEl + "-1.png')";
			cardBuah.style.backgroundSize = "contain";
			cardBuah.style.backgroundRepeat = "no-repeat";
			cardBuah.classList.toggle("active");
		}, 300);
	};
	const alertBenar = () => {
		Swal.fire({
			title: "Jawaban anda benar!",
			text: "Apakah anda ingin lanjut?",
			icon: "success",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Ya,ingin",
			cancelButtonText: "Maaf",
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire("Harap tunggu", "Memuat ulangan halaman", "success");
				setTimeout(() => {
					location.href = "play.html";
				}, 1500);
			} else {
				Swal.fire("Terimakasih", "", "info");
				setTimeout(() => {
					location.href = "index.html";
				}, 1500);
			}
		});
	};

	const alertSalah = () => {
		Swal.fire({
			title: "Jawaban anda salah!",
			text: "Apakah anda ingin lanjut?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Ya,ingin",
			cancelButtonText: "Maaf",
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire("Harap tunggu", "Memuat ulangan halaman", "success");
				setTimeout(() => {
					location.href = "play.html";
				}, 1500);
			} else {
				Swal.fire("Terimakasih", "", "info");
				setTimeout(() => {
					location.href = "index.html";
				}, 1500);
			}
		});
	};

	if (boxGame) {
		boxGame.addEventListener("click", (e) => {
			const angkaCard = ambilAngkaCard(e.target);
			ubahCard(e.target);
      setTimeout(() => {
        angkaCard == namaBuah.className ? alertBenar() : alertSalah();
      }, 800);
		});
	}
});
