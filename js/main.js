/* ============================================================
   Khorasan Map — site scripts
   i18n (English / Persian), language switch, mobile nav, lightbox
   ============================================================ */

(function () {
  'use strict';

  /* ---------------------------------------------------------
     Translations. Keys map to [data-i18n] attributes in the HTML.
     Anything not listed for "fa" falls back to the English string.
     --------------------------------------------------------- */
  var I18N = {
    en: {
      /* nav */
      'nav.home': 'Home',
      'nav.faq': 'FAQ',
      'nav.gallery': 'Gallery',
      'nav.download': 'Download',

      /* footer */
      'footer.tagline': 'An Euro Truck Simulator 2 map expansion covering North Khorasan, Iran.',
      'footer.disclaimer': 'Not affiliated with SCS Software. Euro Truck Simulator 2 is a trademark of SCS Software.',
      'footer.col.map': 'Map',
      'footer.col.get': 'Get the mod',
      'footer.col.community': 'Community',
      'footer.discord': 'Discord',

      /* home — hero */
      'home.lead': 'A map expansion for Euro Truck Simulator 2 recreating the highlands of North Khorasan, Iran — its cities, its roads and the landscape in between.',
      'home.cta.download': 'Download',
      'home.cta.gallery': 'View gallery',

      /* home — region strip */
      'stat.region': 'Region',
      'stat.status': 'Status',
      'stat.region.value': 'North Khorasan',
      'stat.status.value': 'In development',

      /* home — community band */
      'home.community.title': 'Join the community',
      'home.community.body': 'Follow the development, report issues and see new areas before they are released.',
      'home.community.cta': 'Join Discord',

      /* home — about band */
      'home.built.eyebrow': 'About',
      'home.built.title': 'Built by modders, for drivers',
      'home.built.1.title': 'Independent',
      'home.built.1.body': 'A community project, developed on its own schedule and released free.',
      'home.built.2.title': 'Built from references',
      'home.built.2.body': 'Cities and roads modelled on the real layout of North Khorasan.',
      'home.built.3.title': 'Still growing',
      'home.built.3.body': 'New cities and connections are added with every update.',

      /* home — FAQ */
      'home.faq.eyebrow': 'FAQ',
      'home.faq.title': 'Frequently asked questions',
      'faq.1.q': 'What is Khorasan Map?',
      'faq.1.a': 'A map expansion for Euro Truck Simulator 2 that recreates North Khorasan in Iran, including its cities and main roads.',
      'faq.2.q': 'Which areas are included?',
      'faq.2.a': 'Shirvan, Esfarayen and Road 87 are currently built or under construction. See the coverage map above for the full picture.',
      'faq.3.q': 'Which game version and DLC do I need?',
      'faq.3.a': 'The supported game version and the required DLC will be confirmed with the first release. Check the download page for the details.',
      'faq.4.q': 'How do I install it?',
      'faq.4.a': 'Copy the .scs files into your ETS2 mod folder and enable them in Mod Manager. The download page has the full steps and the load order.',

      /* home — final CTA */
      'home.cta.title': 'Ready to hit the road?',
      'home.cta.body': 'Grab the latest build and start driving through North Khorasan.',

      /* download */
      'dl.title': 'Download',
      'dl.lead': 'Get the latest build of Khorasan Map and install it in a couple of minutes.',
      'dl.card.title': 'Khorasan Map — latest release',
      'dl.pill.version': 'Version TBA',
      'dl.pill.game': 'Game version TBA',
      'dl.pill.size': 'Size TBA',
      'dl.card.body': 'Download links are not published yet. As soon as the release is ready the buttons below will point to the mirrors.',
      'dl.btn.primary': 'Download (coming soon)',
      'dl.btn.mirror': 'Mirror (coming soon)',
      'dl.note': 'Only download from the official links on this page. Reuploads are not supported by us in any way and may be outdated, modified or contain viruses.',
      'dl.req.title': 'Requirements',
      'dl.req.game': 'Game',
      'dl.req.version': 'Game version',
      'dl.req.version.value': 'TBA',
      'dl.req.dlc': 'Required DLC',
      'dl.req.dlc.value': 'TBA',
      'dl.req.bg': 'Background map',
      'dl.req.bg.value': 'TBA',
      'dl.install.title': 'Installation',
      'dl.install.1': 'Download the archive and extract it if needed.',
      'dl.install.2': 'Copy the .scs files into Documents\\Euro Truck Simulator 2\\mod.',
      'dl.install.3': 'Start the game and open Mod Manager in your profile.',
      'dl.install.4': 'Enable the mods and set the load order shown below.',
      'dl.install.5': 'Start a new profile or use a save that is compatible with the map.',
      'dl.order.title': 'Load order',
      'dl.order.tba': '(not yet)',
      'dl.order.note': 'Top of the list = highest priority in Mod Manager.',
      'dl.changelog.title': 'Changelog',
      'dl.changelog.body': 'The version history will be published together with the first release.',

      /* gallery */
      'gal.title': 'Gallery',
      'gal.lead': 'Screenshots taken in game across the areas currently built.',
      'gal.shirvan': 'Shirvan',
      'gal.shirvan.sub': 'City and surroundings',
      'gal.esfarayen': 'Esfarayen',
      'gal.esfarayen.sub': 'City and surroundings',
      'gal.road87': 'Road 87',
      'cap.shirvan.1': 'Moallem Square in Shirvan',
      'cap.shirvan.2': 'Shirvan city',
      'cap.shirvan.3': 'Shirvan city',
      'cap.esfarayen': 'Esfarayen City',
      'cap.road87': 'Road 87',
      'tag.wip': 'WIP'
    },

    fa: {
      'nav.home': 'خانه',
      'nav.faq': 'پرسش‌ها',
      'nav.gallery': 'گالری',
      'nav.download': 'دانلود',

      'footer.tagline': 'یک مپ گسترش‌یافته برای Euro Truck Simulator 2 در خراسان شمالی، ایران.',
      'footer.disclaimer': 'وابسته به SCS Software نیست. Euro Truck Simulator 2 علامت تجاری SCS Software است.',
      'footer.col.map': 'مپ',
      'footer.col.get': 'دریافت ماد',
      'footer.col.community': 'انجمن',
      'footer.discord': 'دیسکورد',

      'home.lead': 'یک مپ گسترش‌یافته برای Euro Truck Simulator 2 که ارتفاعات خراسان شمالی ایران را بازسازی می‌کند — شهرها، جاده‌ها و مناظر میان آن‌ها.',
      'home.cta.download': 'دانلود',
      'home.cta.gallery': 'مشاهدهٔ گالری',

      'stat.region': 'منطقه',
      'stat.status': 'وضعیت',
      'stat.region.value': 'خراسان شمالی',
      'stat.status.value': 'در حال توسعه',

      'home.community.title': 'به انجمن بپیوندید',
      'home.community.body': 'روند توسعه را دنبال کنید، مشکلات را گزارش دهید و مناطق جدید را پیش از انتشار ببینید.',
      'home.community.cta': 'ورود به دیسکورد',

      'home.built.eyebrow': 'دربارهٔ ما',
      'home.built.title': 'ساختهٔ مادسازان، برای رانندگان',
      'home.built.1.title': 'مستقل',
      'home.built.1.body': 'یک پروژهٔ انجمنی که با برنامهٔ خودش توسعه می‌یابد و رایگان منتشر می‌شود.',
      'home.built.2.title': 'بر پایهٔ منابع واقعی',
      'home.built.2.body': 'شهرها و جاده‌ها بر اساس نقشهٔ واقعی خراسان شمالی ساخته شده‌اند.',
      'home.built.3.title': 'در حال گسترش',
      'home.built.3.body': 'با هر به‌روزرسانی شهرها و مسیرهای تازه اضافه می‌شود.',

      'home.faq.eyebrow': 'پرسش‌های متداول',
      'home.faq.title': 'پرسش‌های متداول',
      'faq.1.q': 'مپ خراسان چیست؟',
      'faq.1.a': 'یک مپ گسترش‌یافته برای Euro Truck Simulator 2 که خراسان شمالی ایران را همراه با شهرها و جاده‌های اصلی آن بازسازی می‌کند.',
      'faq.2.q': 'چه مناطقی شامل می‌شود؟',
      'faq.2.a': 'شیروان، اسفراین و جادهٔ ۸۷ در حال حاضر ساخته شده یا در دست ساخت هستند. برای تصویر کامل، نقشهٔ پوشش بالا را ببینید.',
      'faq.3.q': 'به چه نسخه‌ای از بازی و چه DLC نیاز دارم؟',
      'faq.3.a': 'نسخهٔ پشتیبانی‌شدهٔ بازی و DLCهای لازم همراه با اولین انتشار اعلام می‌شود. جزئیات را در صفحهٔ دانلود ببینید.',
      'faq.4.q': 'چگونه نصب کنم؟',
      'faq.4.a': 'فایل‌های .scs را در پوشهٔ mod بازی کپی کرده و در Mod Manager فعال کنید. مراحل کامل و ترتیب بارگذاری در صفحهٔ دانلود آمده است.',

      'home.cta.title': 'آمادهٔ حرکت هستید؟',
      'home.cta.body': 'آخرین نسخه را دریافت کنید و رانندگی در خراسان شمالی را آغاز کنید.',

      'dl.title': 'دانلود',
      'dl.lead': 'آخرین نسخهٔ مپ خراسان را دریافت و در چند دقیقه نصب کنید.',
      'dl.card.title': 'مپ خراسان — آخرین نسخه',
      'dl.pill.version': 'نسخه: به‌زودی',
      'dl.pill.game': 'نسخهٔ بازی: به‌زودی',
      'dl.pill.size': 'حجم: به‌زودی',
      'dl.card.body': 'لینک‌های دانلود هنوز منتشر نشده‌اند. به‌محض آماده شدن نسخه، دکمه‌های زیر به میرورها متصل می‌شوند.',
      'dl.btn.primary': 'دانلود (به‌زودی)',
      'dl.btn.mirror': 'میرور (به‌زودی)',
      'dl.note': 'فقط از لینک‌های رسمی همین صفحه دانلود کنید. ما به‌هیچ‌وجه از بازنشرها پشتیبانی نمی‌کنیم و ممکن است قدیمی، دستکاری‌شده یا حاوی ویروس باشند.',
      'dl.req.title': 'پیش‌نیازها',
      'dl.req.game': 'بازی',
      'dl.req.version': 'نسخهٔ بازی',
      'dl.req.version.value': 'به‌زودی',
      'dl.req.dlc': 'DLC مورد نیاز',
      'dl.req.dlc.value': 'به‌زودی',
      'dl.req.bg': 'مپ پس‌زمینه',
      'dl.req.bg.value': 'به‌زودی',
      'dl.install.title': 'نصب',
      'dl.install.1': 'فایل فشرده را دانلود و در صورت نیاز از حالت فشرده خارج کنید.',
      'dl.install.2': 'فایل‌های .scs را در مسیر Documents\\Euro Truck Simulator 2\\mod کپی کنید.',
      'dl.install.3': 'بازی را اجرا کرده و Mod Manager پروفایل خود را باز کنید.',
      'dl.install.4': 'مادها را فعال کرده و ترتیب بارگذاری زیر را تنظیم کنید.',
      'dl.install.5': 'یک پروفایل جدید بسازید یا از سیوی سازگار با مپ استفاده کنید.',
      'dl.order.title': 'ترتیب بارگذاری',
      'dl.order.tba': '(هنوز نه)',
      'dl.order.note': 'بالای فهرست = بالاترین اولویت در Mod Manager.',
      'dl.changelog.title': 'تغییرات',
      'dl.changelog.body': 'تاریخچهٔ نسخه‌ها همراه با اولین انتشار منتشر خواهد شد.',

      'gal.title': 'گالری',
      'gal.lead': 'تصاویر درون‌بازی از مناطقی که تاکنون ساخته شده‌اند.',
      'gal.shirvan': 'شیروان',
      'gal.shirvan.sub': 'شهر و حومه',
      'gal.esfarayen': 'اسفراین',
      'gal.esfarayen.sub': 'شهر و حومه',
      'gal.road87': 'جادهٔ ۸۷',
      'cap.shirvan.1': 'میدان معلم شیروان',
      'cap.shirvan.2': 'شهر شیروان',
      'cap.shirvan.3': 'شهر شیروان',
      'cap.esfarayen': 'شهر اسفراین',
      'cap.road87': 'جادهٔ ۸۷',
      'tag.wip': 'در دست ساخت'
    }
  };

  var STORAGE_KEY = 'khorasan-lang';

  function t(lang, key) {
    var dict = I18N[lang] || I18N.en;
    return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : I18N.en[key];
  }

  function applyLanguage(lang) {
    if (!I18N[lang]) lang = 'en';

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var value = t(lang, el.getAttribute('data-i18n'));
      if (typeof value === 'string') el.textContent = value;
    });

    // attribute translations, e.g. data-i18n-attr="alt:cap.road87"
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var parts = pair.split(':');
        if (parts.length !== 2) return;
        var value = t(lang, parts[1].trim());
        if (typeof value === 'string') el.setAttribute(parts[0].trim(), value);
      });
    });

    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
      var active = btn.dataset.lang === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode */ }
  }

  function initLanguage() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
    applyLanguage(saved || 'en');

    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
      btn.addEventListener('click', function () { applyLanguage(btn.dataset.lang); });
    });
  }

  /* ---------- mobile nav ---------- */

  function initNav() {
    var toggle = document.querySelector('.nav-toggle');
    var links = document.querySelector('.nav-links');
    if (!toggle || !links) return;

    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    // close the drawer after following an in-page anchor
    links.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- lightbox ---------- */

  function initLightbox() {
    var box = document.querySelector('.lightbox');
    if (!box) return;

    var boxImg = box.querySelector('img');
    var boxCap = box.querySelector('figcaption');
    var closeBtn = box.querySelector('.lightbox-close');

    function open(src, caption) {
      boxImg.src = src;
      boxImg.alt = caption || '';
      boxCap.textContent = caption || '';
      box.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    }

    function close() {
      box.classList.remove('is-open');
      document.body.style.overflow = '';
      boxImg.removeAttribute('src');
    }

    document.querySelectorAll('[data-lightbox] img').forEach(function (img) {
      img.addEventListener('click', function () {
        var fig = img.closest('[data-lightbox]');
        var cap = fig ? fig.querySelector('figcaption') : null;
        open(img.currentSrc || img.src, cap ? cap.textContent.trim() : img.alt);
      });
    });

    closeBtn.addEventListener('click', close);
    box.addEventListener('click', function (e) { if (e.target === box) close(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && box.classList.contains('is-open')) close();
    });
  }

  /* ---------- misc ---------- */

  function initYear() {
    var el = document.getElementById('year');
    if (el) el.textContent = String(new Date().getFullYear());
  }

  document.addEventListener('DOMContentLoaded', function () {
    initLanguage();
    initNav();
    initLightbox();
    initYear();
  });
})();
