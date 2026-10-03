const translations = {
  ar: {
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.demos': 'العروض',
    'nav.pricing': 'التسعير',
    'nav.faq': 'الأسئلة الشائعة',
    'nav.contact': 'التواصل',
    'cta.primary': 'احصل على عرض سعر',
    'cta.secondary': 'استكشف الخدمات',
    'cta.price': 'عرض الأسعار',
    'demo.view': 'مشاهدة الموقع',
    'demo.copy': 'نسخ الرابط',
    'demo.disclaimer': 'Demo تجريبي — ليس موقع عميل حقيقي.',
    'copy.email.success': 'تم نسخ البريد الإلكتروني',
    'copy.email.error': 'تعذر نسخ البريد الإلكتروني',
    'copy.demo.success': 'تم نسخ الرابط',
    'copy.demo.error': 'تعذر نسخ الرابط',
    'faq.preview.cta': 'الذهاب إلى FAQ',
    'cta.contact': 'بدء المشروع',
    'common.whatsapp': 'واتساب',
    'common.email': 'البريد الإلكتروني',
    'common.domainIncluded': 'النطاق مشمول',
    'common.domainExcluded': 'النطاق غير مشمول',
    'common.hostingIncluded': 'الاستضافة مشمولة',
    'common.revisions': 'التعديلات',
    'footer.text': 'Imran — تصميم وتطوير مواقع مناسبة للمشاريع التجارية.',
    'footer.whatsapp': 'تواصل عبر واتساب',
    'page.home.title': 'Imran — Web Developer',
    'page.services.title': 'الخدمات | Imran',
    'page.demos.title': 'العروض | Imran',
    'page.pricing.title': 'التسعير | Imran',
    'page.faq.title': 'FAQ | Imran',
    'page.404.title': 'الصفحة غير موجودة | Imran',
    'page.home.description': 'Imran crée des sites web modernes pour les entreprises et activités commerciales.',
    'page.services.description': 'Découvrez les services de création et mise à jour de sites web pour entreprises et commerces.',
    'page.demos.description': 'Démos de sites web pour différents secteurs: restaurant, hôtel, beauté, livraison, voiture, salon, pharmacie, surf.',
    'page.pricing.description': 'Tarifs clairs en dirham marocain: 499 MAD, 999 MAD, 1499 MAD, 2499 MAD.',
    'page.faq.description': 'Questions fréquentes sur les services, prix, délais et modifications de sites web.',
    'page.404.description': 'Cette page n’existe pas ou a été déplacée.'
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.demos': 'Démos',
    'nav.pricing': 'Tarifs',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'cta.primary': 'Demander un devis',
    'cta.secondary': 'Découvrir les services',
    'cta.price': 'Voir les tarifs',
    'demo.view': 'Voir le site',
    'demo.copy': 'Copier le lien',
    'demo.disclaimer': 'Demo de démonstration — ce n’est pas un vrai site client.',
    'copy.email.success': 'E-mail copié',
    'copy.email.error': 'Impossible de copier l’e-mail',
    'copy.demo.success': 'Lien copié',
    'copy.demo.error': 'Impossible de copier le lien',
    'faq.preview.cta': 'Voir la FAQ',
    'cta.contact': 'Lancer le projet',
    'common.whatsapp': 'WhatsApp',
    'common.email': 'E-mail',
    'common.domainIncluded': 'Domaine inclus',
    'common.domainExcluded': 'Domaine non inclus',
    'common.hostingIncluded': 'Hébergement inclus',
    'common.revisions': 'Modifications',
    'footer.text': 'Imran — Conception et développement de sites pour les projets commerciaux.',
    'footer.whatsapp': 'Contact via WhatsApp',
    'page.home.title': 'Imran — Web Developer',
    'page.services.title': 'Services | Imran',
    'page.demos.title': 'Démos | Imran',
    'page.pricing.title': 'Tarifs | Imran',
    'page.faq.title': 'FAQ | Imran',
    'page.404.title': 'Page introuvable | Imran',
    'page.home.description': 'Imran crée des sites web modernes pour les entreprises et activités commerciales.',
    'page.services.description': 'Découvrez les services de création et de mise à jour de sites web pour entreprises et commerces.',
    'page.demos.description': 'Démos de sites web pour plusieurs secteurs : restaurant, hôtel, beauté, livraison, voiture, salon, pharmacie, surf.',
    'page.pricing.description': 'Tarifs clairs en dirham marocain : 499 MAD, 999 MAD, 1499 MAD, 2499 MAD.',
    'page.faq.description': 'Questions fréquentes sur les services, les prix, les délais et les modifications de sites web.',
    'page.404.description': 'Cette page est introuvable ou a été déplacée.'
  }
};

const app = {
  lang: localStorage.getItem('portfolio-lang') || 'ar',
  config: window.portfolioConfig || { demos: [], pricing: [] }
};

function getText(key) {
  return (translations[app.lang] && translations[app.lang][key]) || key;
}

function setLanguage(lang) {
  const selected = translations[lang] ? lang : 'ar';
  app.lang = selected;
  localStorage.setItem('portfolio-lang', selected);

  document.documentElement.lang = selected;
  document.documentElement.dir = selected === 'ar' ? 'rtl' : 'ltr';
  document.body.dir = selected === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = getText(key);
  });

  document.querySelectorAll('.lang-btn').forEach((button) => {
    const active = button.dataset.lang === selected;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  document.title = getText(`page.${document.body.dataset.page || 'home'}.title`) || 'Imran — Web Developer';
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', getText(`page.${document.body.dataset.page || 'home'}.description`));

  updateWhatsAppLinks();
  updatePageState();
  renderDemos();
  renderPricing();
}

function updateWhatsAppLinks() {
  const message = encodeURIComponent(window.portfolioConfig?.whatsappMessage || 'السلام عليكم، اطلعت على الـPortfolio وأريد معرفة المزيد عن إنشاء موقع لمشروعي.');
  document.querySelectorAll('[data-whatsapp-link]').forEach((link) => {
    const base = `https://wa.me/${window.portfolioConfig?.whatsappNumber || '212608814717'}`;
    link.href = `${base}?text=${message}`;
  });
}

function updatePageState() {
  const page = document.body.dataset.page || 'home';
  document.querySelectorAll('[data-nav]').forEach((link) => {
    const matches = link.dataset.nav === page;
    link.classList.toggle('active', matches);
  });

  const mobileNav = document.querySelector('.nav');
  if (mobileNav) mobileNav.classList.remove('open');
}

function copyText(value) {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(value);
  }
  return Promise.reject(new Error('Clipboard unavailable'));
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => toast.classList.remove('show'), 2200);
}

function getDemoDescription(demo) {
  return app.lang === 'ar' ? demo.descriptionAr : demo.descriptionFr;
}

function renderDemos() {
  const grid = document.querySelector('[data-demo-grid]');
  if (!grid) return;

  const demos = app.config.demos || [];
  if (!demos.length) {
    grid.innerHTML = '<div class="empty-state">No demos available.</div>';
    return;
  }

  const maxItems = grid.dataset.limit ? Number(grid.dataset.limit) : demos.length;
  const visible = demos.slice(0, maxItems);

  grid.innerHTML = visible.map((demo) => `
    <article class="demo-card">
      <img src="${demo.image}" alt="${demo.name}" loading="lazy" />
      <div class="demo-body">
        <h3>${demo.name}</h3>
        <p>${getDemoDescription(demo)}</p>
        <div class="demo-meta">${demo.category}</div>
        <div class="demo-actions">
          <a class="btn btn-primary" href="${demo.url}" target="_blank" rel="noreferrer">${getText('demo.view')}</a>
          <button class="btn btn-secondary copy-demo-btn" type="button" data-demo-url="${demo.url}">${getText('demo.copy')}</button>
        </div>
        <div class="demo-disclaimer">${getText('demo.disclaimer')}</div>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.copy-demo-btn').forEach((button) => {
    button.addEventListener('click', async () => {
      try {
        await copyText(button.dataset.demoUrl);
        showToast(getText('copy.demo.success'));
      } catch (error) {
        showToast(getText('copy.demo.error'));
      }
    });
  });
}

function renderPricing() {
  const host = document.querySelector('[data-pricing-grid]');
  if (!host) return;

  const pricing = app.config.pricing || [];
  if (!pricing.length) {
    host.innerHTML = '<div class="empty-state">No pricing available.</div>';
    return;
  }

  host.innerHTML = pricing.map((plan, index) => `
    <article class="pricing-card ${index === 1 ? 'popular' : ''}">
      <div class="badge">${index === 1 ? (app.lang === 'ar' ? 'الأكثر طلبًا' : 'Most popular') : (app.lang === 'ar' ? 'باقة' : 'Package')}</div>
      <h3>${plan.name}</h3>
      <div class="price-box">
        <span class="amount">${plan.price}</span>
        <span class="currency">MAD</span>
      </div>
      <p class="price-note">${plan.description}</p>
      <ul>
        <li>${plan.domainIncluded ? getText('common.domainIncluded') : getText('common.domainExcluded')}</li>
        <li>${getText('common.hostingIncluded')}</li>
        <li>${getText('common.revisions')}: ${plan.revisions}</li>
      </ul>
    </article>
  `).join('');
}

function bindEvents() {
  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });

  document.querySelectorAll('.copy-email-btn, [data-copy-email]').forEach((button) => {
    button.addEventListener('click', async () => {
      try {
        await copyText(button.dataset.copyEmail || window.portfolioConfig.email);
        showToast(getText('copy.email.success'));
      } catch (error) {
        showToast(getText('copy.email.error'));
      }
    });
  });

  const toggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  document.querySelectorAll('.nav a').forEach((link) => {
    link.addEventListener('click', () => {
      if (nav) nav.classList.remove('open');
    });
  });
}

(function init() {
  bindEvents();
  renderDemos();
  renderPricing();
  setLanguage(app.lang);
})();
