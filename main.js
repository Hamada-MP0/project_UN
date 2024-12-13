
function showsection(sectionId) {
  // إخفاء جميع الأقسام
  const sections = document.querySelectorAll('.section_main');
  sections.forEach(section => {
    section.classList.add('hidden'); // إضافة فئة الإخفاء لجميع الأقسام
  });
  // إظهار القسم المطلوب
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.remove('hidden');
  }
}

// عند تحميل الصفحة، عرض قسم الـ Home تلقائيًا
document.addEventListener('DOMContentLoaded', () => {
  showContent('Home');
});







  const buttons = document.querySelectorAll('.toggle-button');


buttons.forEach(button => {
  button.addEventListener('click', () => {
   
    button.classList.toggle('rotated');

   
    const targetId = button.getAttribute('data-target');
    const targetBody = document.getElementById(targetId);
    targetBody.classList.toggle('hidden');
  });
});

    function showContent(Id) {
        // إخفاء جميع العناصر
        const allContents = document.querySelectorAll('.content');
        allContents.forEach(content => {
          content.classList.add('hidden');
        });
      
        // إظهار العنصر المحدد
        const targetContent = document.getElementById(Id);
        targetContent.classList.remove('hidden');
      }