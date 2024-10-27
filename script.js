let currentTitle = ''; // تخزين العنوان الحالي
let currentContent = ''; // تخزين المحتوى الحالي

function updateText() {
    const titleInput = document.getElementById('title-input').value;
    const contentInput = document.getElementById('content-input').value;
    const textColor = document.getElementById('text-color').value;
    const textSize = document.getElementById('text-size').value;

    // تحديث عنوان المحتوى مباشرة على الصورة
    const titleElement = document.querySelector('#title-text');
    const contentElement = document.querySelector('#content-text');

    // تحقق من وجود نصوص
    if (titleInput) {
        titleElement.textContent = titleInput; // تحديث العنوان
    } else {
        titleElement.textContent = ''; // مسح العنوان إذا لم يكن هناك نص
    }

    if (contentInput) {
        contentElement.innerHTML = contentInput.replace(/\n/g, '<br>'); // تحديث المحتوى
    } else {
        contentElement.innerHTML = ''; // مسح المحتوى إذا لم يكن هناك نص
    }

    // تطبيق لون النص وحجم النص إذا كان مُحدداً
    contentElement.style.color = textColor ? textColor : '#000000'; // اللون الافتراضي أسود إذا لم يتم اختيار لون
    contentElement.style.fontSize = textSize ? `${textSize}px` : '16px'; // الحجم الافتراضي 16px إذا لم يتم اختيار حجم

    // تخزين النص الحالي
    currentTitle = titleInput;
    currentContent = contentInput;
}

function printImage() {
    // إخفاء عناصر التحكم عند الطباعة
    const controls = document.getElementById('controls');
    controls.style.display = 'none';
    
    // استخدام window.print() لطباعة المحتوى
    window.print();

    // استخدام setTimeout للتأكد من إعادة تحميل الصفحة بعد انتهاء عملية الطباعة
    setTimeout(() => {
        controls.style.display = 'block'; // إعادة عرض عناصر التحكم
        location.reload(); // إعادة تحميل الصفحة بالكامل
    }, 100); // تأخير بسيط (100 مللي ثانية) قبل إعادة التحميل
}


// إضافة أحداث للتحديث الفوري للنص
document.getElementById('title-input').addEventListener('input', updateText);
document.getElementById('content-input').addEventListener('input', updateText);
document.getElementById('text-color').addEventListener('input', updateText);
document.getElementById('text-size').addEventListener('input', updateText);
