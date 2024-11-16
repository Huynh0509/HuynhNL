//Banner Slide
let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelector('.slides'); //Chọn phần tử chứ tất cả các ảnh dùng để trình chiếu
    const totalSlides = document.querySelectorAll('.slide').length; //Đếm tổng số ảnh dùng để trình chiếu

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

//Chi tiết sản phẩm
function changeImage(imageSrc) {
    const mainImage = document.getElementById("mainProductImage");
    mainImage.src = imageSrc;
}

//Giỏ hàng
function updateCart(input) {
    const row = input.closest("tr");
    const priceCell = row.children[2];
    const subtotalCell = row.querySelector(".subtotal");
    const quantity = parseInt(input.value, 10);
    const price = parseInt(priceCell.textContent.replace("đ", "").replace(".", ""), 10);

    // Cập nhật tổng tiền cho dòng hiện tại
    const subtotal = price * quantity;
    subtotalCell.textContent = subtotal.toLocaleString("vi-VN") + "đ";

    // Cập nhật tổng tiền toàn giỏ hàng
    updateTotal();
}

function removeItem(button) {
    const row = button.closest("tr");
    row.remove();
    updateTotal();
}

function updateTotal() {
    const subtotalCells = document.querySelectorAll(".subtotal");
    let total = 0;

    subtotalCells.forEach(cell => {
        const value = parseInt(cell.textContent.replace("đ", "").replace(".", ""), 10);
        total += value;
    });

    const totalElement = document.getElementById("cart-total");
    totalElement.textContent = total.toLocaleString("vi-VN") + "đ";
}

