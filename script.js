let currentTitle = ''; // تخزين العنوان الحالي
let currentContent = ''; // تخزين المحتوى الحالي

function updateText() {
    const titleInput = document.getElementById('title-input').value;
    const contentInput = document.getElementById('content-input').value;

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

    // تخزين النص الحالي
    currentTitle = titleInput;
    currentContent = contentInput;
}

function printImage() {
    window.print();
}

// إضافة أحداث للتحديث الفوري للنص
document.getElementById('title-input').addEventListener('input', updateText);
document.getElementById('content-input').addEventListener('input', updateText);
