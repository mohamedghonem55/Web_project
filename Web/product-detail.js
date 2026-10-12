
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");


const selectedProduct = products.find(p => p.id === productId);


if (selectedProduct) {
  document.getElementById("product-img").src = selectedProduct.image;
  document.getElementById("product-img").alt = selectedProduct.name;
  document.getElementById("product-name").textContent = selectedProduct.name;
  document.getElementById("product-category").textContent = selectedProduct.category;
  document.getElementById("product-price").textContent = selectedProduct.price;
  document.getElementById("product-description").textContent = selectedProduct.description;


  const specsList = document.getElementById("product-specs");
  specsList.innerHTML = ""; 
  
  selectedProduct.specs.forEach(spec => {
    const li = document.createElement("li");
    li.textContent = spec;
    specsList.appendChild(li);
  });


  document.title = `${selectedProduct.name} | GETRONICX`;
} else {
  
  document.querySelector(".details-wrapper").innerHTML = `
    <div style="background-color: #111116; border: 1px solid #222; border-radius: 20px; max-width: 600px; margin: 80px auto; padding: 50px 20px; text-align: center; color: #fff; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
      <div style="font-size: 65px; margin-bottom: 20px;">⚠️</div>
      <h2 style="color: #ff3333; font-size: 28px; margin-bottom: 15px; font-family: 'Roboto', sans-serif;">عذراً، المنتج غير موجود!</h2>
      <p style="color: #aaa; font-size: 16px; line-height: 1.6; margin-bottom: 35px;">
        يبدو أن الرابط الذي تحاول الوصول إليه غير صحيح، أو أنه تم إزالة هذا المنتج من قاعدة البيانات.
      </p>
      <a href="index.html" class="btn" style="text-decoration:none; padding: 12px 35px; font-size: 16px; font-weight: bold; display: inline-block;">العودة للصفحة الرئيسية</a>
    </div>
  `;
}