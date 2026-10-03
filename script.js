'use strict';

const WHATSAPP_NUMBER = '212608814717';
const DEFAULT_CONTACT_MESSAGE = 'Hello, I would like to ask about your Apple devices and services.';
let currentLanguage = 'en';
let selectedDevice = '';

const translations = {
  en: {
    navHome: 'Home', navRepairs: 'Repairs', navDevices: 'Devices', navAccessories: 'Accessories', navFaq: 'FAQ', navContact: 'Contact', navWhatsapp: 'WhatsApp us',
    heroEyebrow: 'YOUR LOCAL APPLE STUDIO · DEMO', heroTitle: 'A little care goes a <em>long way.</em>', heroText: 'Thoughtful Apple repairs, new devices and everyday essentials — with a human touch, right here in Morocco.', bookRepair: 'Book a repair', shopDevices: 'Shop devices', heroProof: 'Careful hands. Clear estimates. No surprises.', heroCaption: 'Made for your everyday.',
    stripRepair: '01 / Thoughtful repairs', stripDevices: '02 / New Apple devices', stripCare: '03 / Essentials, made easy',
    servicesEyebrow: 'HOW WE CAN HELP', servicesTitle: 'Good tech deserves <em>good care.</em>', servicesText: 'From a cracked display to your next upgrade, we keep the useful things in your life working beautifully.', serviceIphone: 'iPhone repair', serviceIphoneText: 'Screens, batteries, cameras and the unexpected.', serviceIpad: 'iPad repair', serviceIpadText: 'Bring your big ideas back to a bright screen.', serviceMac: 'MacBook repair', serviceMacText: 'Careful diagnostics for the work that matters.', exploreRepairs: 'Explore repairs',
    repairEyebrow: 'A BETTER WAY TO GET IT FIXED', repairTitle: 'Let’s get your device <em>back to you.</em>', repairText: 'Tell us a little about your device. We’ll prepare an estimate and a clear request you can send straight to our team.', repairPromise: 'No commitment yet. A real inspection confirms the final price.',     bookingLabel: 'REPAIR REQUEST', demoOnly: 'DEMO', progressDevice: 'Device', progressIssue: 'Issue', progressDetails: 'Details', progressReview: 'Review', stepOne: 'STEP 01', chooseDevice: 'What needs a little care?', selectDeviceFirst: 'Choose a device first', selectModel: 'Choose a model', brandLabel: 'Brand', modelLabel: 'Model', colorLabel: 'Device color', colorBlack: 'Black', colorWhite: 'White', colorSilver: 'Silver', colorGold: 'Gold', colorBlue: 'Blue', colorPurple: 'Purple', colorOther: 'Other', problemLabel: 'What seems to be the problem?', chooseProblem: 'Choose a repair issue', problemScreen: 'Broken Screen', problemBattery: 'Battery Replacement', problemCharging: 'Charging Problem', problemCamera: 'Camera Problem', problemSpeaker: 'Speaker Problem', problemMic: 'Microphone Problem', problemWater: 'Water Damage', problemGlass: 'Back Glass Damage', problemSoftware: 'Software Problem', problemOther: 'Other', estimatedPrice: 'Estimated price', priceBased: 'Based on your selections', estimateNote: 'Final price may change after physical inspection.', nameLabel: 'Full name', phoneLabel: 'Phone number', locationLabel: 'City / location', dateLabel: 'Preferred repair date', notesLabel: 'Additional notes', optional: '(optional)', namePlaceholder: 'Your name', phonePlaceholder: '+212 6...', locationPlaceholder: 'e.g. Casablanca', notesPlaceholder: 'Anything else we should know?', safetyEstimate: 'Prices shown are estimates. Final pricing may vary after device inspection.', safetyBackup: 'Please back up your important data before submitting your device for repair.', safetyPassword: 'Do not share passwords or sensitive account information through the form.', reviewRequest: 'Review repair request', readyToSend: 'READY TO SEND', summaryTitle: 'Your repair request', summaryNote: 'This demo sends your request through WhatsApp. No booking is stored on this website.', sendWhatsApp: 'Send repair request on WhatsApp', startAgain: '← Start again',
    summaryDevice: 'Device', summaryModel: 'Model', summaryColor: 'Color', summaryProblem: 'Problem', summaryPrice: 'Estimated price', summaryName: 'Customer name', summaryPhone: 'Phone', summaryLocation: 'Location', summaryDate: 'Preferred date', summaryNotes: 'Notes', noNotes: 'None',
    errorDevice: 'Please choose a device.', errorModel: 'Please choose a model.', errorColor: 'Please choose a device color.', errorProblem: 'Please choose a repair issue.', errorName: 'Please enter your full name.', errorPhone: 'Enter a valid phone number with at least 8 digits.', errorLocation: 'Please enter your city or location.', errorDate: 'Please choose today or a future date.', errorForm: 'Please check the highlighted information and try again.',
    devicesEyebrow: 'A FRESH START', devicesTitle: 'New things, <em>well chosen.</em>', devicesText: 'A small, considered selection of new Apple devices. Fictional demo products and prices.', newDevice: 'NEW DEVICE', phoneDescription: 'A brilliant everyday companion. New, sealed and ready for you.', ipadDescription: 'A bright canvas for big ideas, study and downtime.', macDescription: 'Thoughtful power for the projects you care about.', askWhatsApp: 'Ask on WhatsApp', productPriceNotice: 'Demo pricing for illustration only. This fictional store does not process sales.',
    accessoryEyebrow: 'THE LITTLE EXTRAS', accessoryTitle: 'Everyday, <em>made easier.</em>', accessoryText: 'A few good essentials for keeping your devices powered, protected and ready to go.', charger: 'Charger', cable: 'USB-C cable', case: 'Protective case', screenProtector: 'Screen protector', askAccessories: 'Ask us about accessories',
    whyImageCaption: 'GOOD WORK TAKES CARE.', whyEyebrow: 'WHY NORTHSTAR', whyTitle: 'The details matter. <em>So do you.</em>', whyText: 'We believe a repair should feel as considered as the device itself. That means honest conversations, thoughtful handling and no pressure to decide.', whyOne: 'Clear, upfront estimates', whyOneText: 'Know what to expect before we begin.', whyTwo: 'Careful device handling', whyTwoText: 'A calm, respectful approach at every step.', whyThree: 'A real person to talk to', whyThreeText: 'Questions are welcome. We’ll explain things plainly.',
    reviewsEyebrow: 'A FEW KIND WORDS', reviewsTitle: 'Small details, <em>big difference.</em>', fictionalReviews: 'Fictional demo reviews — not real customer testimonials.', reviewOne: '“Really clear about what my phone needed. The whole experience felt easy and thoughtful.”', reviewTwo: '“They explained the estimate before doing anything. I appreciated the honest advice.”', reviewThree: '“A lovely, calm place to ask questions and get my iPad checked. Very reassuring.”', reviewCity1: 'Casablanca · Demo review', reviewCity2: 'Rabat · Demo review', reviewCity3: 'Tangier · Demo review',
    faqEyebrow: 'GOOD TO KNOW', faqTitle: 'A few things <em>you might wonder.</em>', faqText: 'Still have a question? Our friendly (fictional) team is just a message away.', askQuestion: 'Ask us a question', faqOneQ: 'How long does a repair take?', faqOneA: 'Timing depends on the device and issue. After an inspection, we’ll share an estimated timeframe before any work begins.', faqTwoQ: 'Do you repair all iPhone models?', faqTwoA: 'We can assess a wide range of iPhone models. Send us your model and issue, and we’ll confirm what’s possible.', faqThreeQ: 'Is the repair price final?', faqThreeA: 'No. The displayed amount is only a fictional estimate. A physical inspection is needed to confirm any final price.', faqFourQ: 'Do I need an appointment?', faqFourA: 'An appointment request helps us plan. Contact us first to confirm availability and the details of your visit.', faqFiveQ: 'Do you sell new devices?', faqFiveA: 'The demo shop shows a small fictional selection of new iPhone, iPad and MacBook devices, plus a few accessories.', faqSixQ: 'Do you offer a repair warranty?', faqSixA: 'Warranty terms depend on the repair and parts used. We would explain the applicable terms before any real service.',
    contactEyebrow: 'LET’S TALK TECH', contactTitle: 'Here when your tech <em>needs a hand.</em>', contactText: 'Questions, a repair estimate or a little help choosing? Drop our demo team a message.', contactDemo: 'FICTIONAL DEMO STUDIO · MOROCCO', contactHours: 'Message us anytime. We’ll get back to you during studio hours.', studioHours: 'Studio hours', hoursValue: 'Mon–Sat · 10:00–19:00', footerText: 'Care for the devices you count on. A fictional demo studio in Morocco.', backTop: 'Back to top', demoDisclaimer: 'Fictional demo website. Not a real business.', footerMade: 'Made with care, for demonstration.', chatWhatsApp: 'Chat on WhatsApp',
    contactWhatsAppMessage: DEFAULT_CONTACT_MESSAGE
  },
  ar: {
    navHome: 'الرئيسية', navRepairs: 'الإصلاح', navDevices: 'الأجهزة', navAccessories: 'الإكسسوارات', navFaq: 'الأسئلة الشائعة', navContact: 'اتصل بنا', navWhatsapp: 'راسلنا واتساب',
    heroEyebrow: 'استوديو أبل المحلي · نموذج تجريبي', heroTitle: 'قليل من العناية يصنع <em>فرقاً كبيراً.</em>', heroText: 'إصلاحات أبل بعناية، وأجهزة جديدة، وإكسسوارات يومية — بلمسة إنسانية هنا في المغرب.', bookRepair: 'احجز إصلاحاً', shopDevices: 'تسوّق الأجهزة', heroProof: 'عناية دقيقة. تقديرات واضحة. بلا مفاجآت.', heroCaption: 'لأيامك، بكل تفاصيلها.',
    stripRepair: '01 / إصلاحات بعناية', stripDevices: '02 / أجهزة أبل جديدة', stripCare: '03 / أساسياتك بسهولة',
    servicesEyebrow: 'كيف يمكننا مساعدتك', servicesTitle: 'التقنية الجيدة تستحق <em>عناية جيدة.</em>', servicesText: 'من شاشة متشققة إلى جهازك القادم، نساعدك على إبقاء أجهزتك اليومية في أفضل حال.', serviceIphone: 'إصلاح آيفون', serviceIphoneText: 'الشاشات والبطاريات والكاميرات وما يفاجئك.', serviceIpad: 'إصلاح آيباد', serviceIpadText: 'لتعود أفكارك الكبيرة إلى شاشة مشرقة.', serviceMac: 'إصلاح ماك بوك', serviceMacText: 'تشخيص دقيق للأعمال التي تهمك.', exploreRepairs: 'اكتشف خدمات الإصلاح',
    repairEyebrow: 'طريقة أفضل لإصلاح جهازك', repairTitle: 'لنعُد بجهازك <em>إليك من جديد.</em>', repairText: 'أخبرنا قليلاً عن جهازك. سنعدّ تقديراً وطلباً واضحاً يمكنك إرساله مباشرة إلى فريقنا.', repairPromise: 'لا يوجد أي التزام الآن. الفحص الفعلي يؤكد السعر النهائي.', bookingLabel: 'طلب إصلاح', demoOnly: 'تجريبي', progressDevice: 'الجهاز', progressIssue: 'العطل', progressDetails: 'التفاصيل', progressReview: 'المراجعة', stepOne: 'الخطوة 01', chooseDevice: 'ما الجهاز الذي يحتاج إلى عناية؟', selectDeviceFirst: 'اختر الجهاز أولاً', selectModel: 'اختر الطراز', brandLabel: 'العلامة التجارية', modelLabel: 'الطراز', colorLabel: 'لون الجهاز', colorBlack: 'أسود', colorWhite: 'أبيض', colorSilver: 'فضي', colorGold: 'ذهبي', colorBlue: 'أزرق', colorPurple: 'بنفسجي', colorOther: 'آخر', problemLabel: 'ما المشكلة؟', chooseProblem: 'اختر نوع الإصلاح', problemScreen: 'شاشة مكسورة', problemBattery: 'استبدال البطارية', problemCharging: 'مشكلة في الشحن', problemCamera: 'مشكلة في الكاميرا', problemSpeaker: 'مشكلة في مكبر الصوت', problemMic: 'مشكلة في الميكروفون', problemWater: 'ضرر بسبب الماء', problemGlass: 'تلف الزجاج الخلفي', problemSoftware: 'مشكلة برمجية', problemOther: 'أخرى', estimatedPrice: 'السعر التقديري', priceBased: 'حسب اختياراتك', estimateNote: 'قد يتغير السعر النهائي بعد الفحص الفعلي.', nameLabel: 'الاسم الكامل', phoneLabel: 'رقم الهاتف', locationLabel: 'المدينة / الموقع', dateLabel: 'التاريخ المفضل للإصلاح', notesLabel: 'ملاحظات إضافية', optional: '(اختياري)', namePlaceholder: 'اسمك', phonePlaceholder: '+212 6...', locationPlaceholder: 'مثال: الدار البيضاء', notesPlaceholder: 'هل هناك أي تفاصيل أخرى؟', safetyEstimate: 'الأسعار المعروضة تقديرية. قد يختلف السعر النهائي بعد فحص الجهاز.', safetyBackup: 'يرجى الاحتفاظ بنسخة احتياطية من بياناتك المهمة قبل تسليم الجهاز للإصلاح.', safetyPassword: 'لا تشارك كلمات المرور أو معلومات الحساب الحساسة عبر النموذج.', reviewRequest: 'راجع طلب الإصلاح', readyToSend: 'جاهز للإرسال', summaryTitle: 'طلب الإصلاح الخاص بك', summaryNote: 'يرسل هذا النموذج التجريبي طلبك عبر واتساب. لا يتم حفظ أي حجز على الموقع.', sendWhatsApp: 'أرسل طلب الإصلاح عبر واتساب', startAgain: '← ابدأ من جديد',
    summaryDevice: 'الجهاز', summaryModel: 'الطراز', summaryColor: 'اللون', summaryProblem: 'المشكلة', summaryPrice: 'السعر التقديري', summaryName: 'اسم العميل', summaryPhone: 'الهاتف', summaryLocation: 'الموقع', summaryDate: 'التاريخ المفضل', summaryNotes: 'ملاحظات', noNotes: 'لا يوجد',
    errorDevice: 'يرجى اختيار الجهاز.', errorModel: 'يرجى اختيار الطراز.', errorColor: 'يرجى اختيار لون الجهاز.', errorProblem: 'يرجى اختيار نوع الإصلاح.', errorName: 'يرجى إدخال اسمك الكامل.', errorPhone: 'أدخل رقم هاتف صحيحاً يتضمن 8 أرقام على الأقل.', errorLocation: 'يرجى إدخال المدينة أو الموقع.', errorDate: 'يرجى اختيار تاريخ اليوم أو تاريخ لاحق.', errorForm: 'يرجى مراجعة المعلومات المحددة والمحاولة مجدداً.',
    devicesEyebrow: 'بداية جديدة', devicesTitle: 'أجهزة جديدة، <em>مختارة بعناية.</em>', devicesText: 'تشكيلة صغيرة ومنتقاة من أجهزة أبل الجديدة. المنتجات والأسعار تجريبية وخيالية.', newDevice: 'جهاز جديد', phoneDescription: 'رفيق رائع ليومك. جديد ومغلق وجاهز لك.', ipadDescription: 'مساحة مشرقة للأفكار الكبيرة والدراسة والاسترخاء.', macDescription: 'قوة مدروسة للمشاريع التي تهمك.', askWhatsApp: 'اسأل عبر واتساب', productPriceNotice: 'أسعار تجريبية للتوضيح فقط. هذا المتجر الخيالي لا يعالج عمليات البيع.',
    accessoryEyebrow: 'إضافات صغيرة', accessoryTitle: 'اجعل يومك <em>أكثر سهولة.</em>', accessoryText: 'أساسيات مختارة للحفاظ على شحن أجهزتك وحمايتها وجاهزيتها.', charger: 'شاحن', cable: 'كابل USB-C', case: 'غطاء حماية', screenProtector: 'واقي شاشة', askAccessories: 'اسألنا عن الإكسسوارات',
    whyImageCaption: 'العمل الجيد يبدأ بالعناية.', whyEyebrow: 'لماذا نورث ستار', whyTitle: 'التفاصيل مهمة. <em>وأنت أيضاً.</em>', whyText: 'نؤمن بأن الإصلاح يجب أن يحظى بالعناية نفسها التي صُمم بها الجهاز. حوار صريح، وتعامل لطيف، ومن دون ضغط لاتخاذ القرار.', whyOne: 'تقديرات واضحة ومسبقة', whyOneText: 'اعرف ما يمكن توقعه قبل أن نبدأ.', whyTwo: 'تعامل دقيق مع جهازك', whyTwoText: 'نهج هادئ ومحترم في كل خطوة.', whyThree: 'شخص حقيقي للتحدث معه', whyThreeText: 'نرحب بأسئلتك ونشرح لك الأمور بوضوح.',
    reviewsEyebrow: 'كلمات طيبة', reviewsTitle: 'تفاصيل صغيرة، <em>فرق كبير.</em>', fictionalReviews: 'آراء تجريبية خيالية — ليست شهادات عملاء حقيقيين.', reviewOne: '«شرحوا لي بوضوح ما يحتاجه هاتفي. كانت التجربة سهلة ومدروسة.»', reviewTwo: '«شرحوا التقدير قبل البدء بأي شيء. قدّرت نصيحتهم الصريحة.»', reviewThree: '«مكان هادئ ولطيف لطرح الأسئلة وفحص جهاز الآيباد. تجربة مطمئنة.»', reviewCity1: 'الدار البيضاء · رأي تجريبي', reviewCity2: 'الرباط · رأي تجريبي', reviewCity3: 'طنجة · رأي تجريبي',
    faqEyebrow: 'معلومات مفيدة', faqTitle: 'بعض الأمور <em>التي قد تتساءل عنها.</em>', faqText: 'هل لديك سؤال آخر؟ فريقنا الودود (الخيالي) على بُعد رسالة.', askQuestion: 'اطرح علينا سؤالاً', faqOneQ: 'كم يستغرق الإصلاح؟', faqOneA: 'تعتمد المدة على الجهاز والعطل. بعد الفحص، نشاركك المدة التقديرية قبل بدء أي عمل.', faqTwoQ: 'هل تصلحون جميع طرازات آيفون؟', faqTwoA: 'يمكننا فحص مجموعة واسعة من طرازات آيفون. أرسل إلينا الطراز والعطل لنتأكد مما يمكن إصلاحه.', faqThreeQ: 'هل سعر الإصلاح نهائي؟', faqThreeA: 'لا. المبلغ المعروض تقديري وخيالي فقط. يلزم فحص الجهاز لتأكيد السعر النهائي.', faqFourQ: 'هل أحتاج إلى موعد؟', faqFourA: 'يساعدنا طلب الموعد على التخطيط. تواصل معنا أولاً لتأكيد التوفر وتفاصيل زيارتك.', faqFiveQ: 'هل تبيعون أجهزة جديدة؟', faqFiveA: 'يعرض المتجر التجريبي تشكيلة خيالية صغيرة من أجهزة آيفون وآيباد وماك بوك الجديدة وبعض الإكسسوارات.', faqSixQ: 'هل تقدمون ضماناً على الإصلاح؟', faqSixA: 'تختلف شروط الضمان حسب الإصلاح والقطع المستخدمة. سنوضح الشروط المعمول بها قبل أي خدمة فعلية.',
    contactEyebrow: 'لنتحدث عن التقنية', contactTitle: 'نحن هنا عندما يحتاج جهازك <em>إلى المساعدة.</em>', contactText: 'أسئلة أو تقدير لإصلاح أو مساعدة في الاختيار؟ أرسل رسالة إلى فريقنا التجريبي.', contactDemo: 'استوديو تجريبي خيالي · المغرب', contactHours: 'راسلنا في أي وقت. سنجيبك خلال ساعات عمل الاستوديو.', studioHours: 'ساعات العمل', hoursValue: 'الاثنين–السبت · 10:00–19:00', footerText: 'عناية بالأجهزة التي تعتمد عليها. استوديو تجريبي خيالي في المغرب.', backTop: 'العودة إلى الأعلى', demoDisclaimer: 'موقع تجريبي خيالي. ليس نشاطاً تجارياً حقيقياً.', footerMade: 'صُمم بعناية لأغراض العرض.', chatWhatsApp: 'تواصل عبر واتساب',
    contactWhatsAppMessage: 'مرحباً، أود الاستفسار عن أجهزة أبل وخدماتكم.'
  }
};

const modelOptions = {
  iPhone: ['iPhone 11', 'iPhone 12', 'iPhone 13', 'iPhone 14', 'iPhone 15', 'iPhone 16', 'iPhone 17'],
  iPad: ['iPad', 'iPad Air', 'iPad Pro', 'iPad mini'],
  MacBook: ['MacBook Air', 'MacBook Pro']
};

const repairPrices = {
  iPhone: { 'Broken Screen': 950, 'Battery Replacement': 550, 'Charging Problem': 450, 'Camera Problem': 700, 'Speaker Problem': 400, 'Microphone Problem': 400, 'Water Damage': 850, 'Back Glass Damage': 800, 'Software Problem': 250, Other: 400 },
  iPad: { 'Broken Screen': 1250, 'Battery Replacement': 850, 'Charging Problem': 550, 'Camera Problem': 650, 'Speaker Problem': 450, 'Microphone Problem': 450, 'Water Damage': 1000, 'Back Glass Damage': 950, 'Software Problem': 300, Other: 500 },
  MacBook: { 'Broken Screen': 2200, 'Battery Replacement': 1200, 'Charging Problem': 750, 'Camera Problem': 650, 'Speaker Problem': 600, 'Microphone Problem': 550, 'Water Damage': 1800, 'Back Glass Damage': 900, 'Software Problem': 400, Other: 650 }
};

const model = document.querySelector('#model');
const problem = document.querySelector('#problem');
const priceOutput = document.querySelector('#estimated-price');
const form = document.querySelector('#repair-form');
const fieldsContainer = document.querySelector('#booking-fields');
const summaryPanel = document.querySelector('#repair-summary');
const summaryList = document.querySelector('#summary-list');
const dateInput = document.querySelector('#repair-date');

function translate(key) {
  return translations[currentLanguage][key] || translations.en[key] || key;
}

function setLanguage(language) {
  if (!translations[language]) return;
  currentLanguage = language;
  const root = document.documentElement;
  root.lang = language;
  root.dir = language === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = translations[language][element.dataset.i18n];
    if (value !== undefined) element.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const value = translations[language][element.dataset.i18nPlaceholder];
    if (value !== undefined) element.placeholder = value;
  });
  document.querySelectorAll('.lang-button').forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  updateModelPlaceholder();
  updateEstimate();
  updateContactLinks();
  if (!summaryPanel.hidden) renderSummary(buildBookingData());
}

function updateModelPlaceholder() {
  if (!selectedDevice) return;
  const placeholder = model.options[0];
  if (placeholder && !placeholder.value) placeholder.textContent = translate('selectModel');
}

function chooseDevice(device) {
  if (!modelOptions[device]) return;
  selectedDevice = device;
  document.querySelector('#device').value = device;
  document.querySelectorAll('.device-choice').forEach((button) => {
    const active = button.dataset.device === device;
    button.classList.toggle('is-selected', active);
    button.setAttribute('aria-pressed', String(active));
  });
  model.disabled = false;
  model.replaceChildren(new Option(translate('selectModel'), ''));
  modelOptions[device].forEach((item) => model.add(new Option(item, item)));
  document.querySelector('#device-error').textContent = '';
  updateEstimate();
  updateProgress();
}

function updateEstimate() {
  const selectedProblem = problem.value;
  if (!selectedDevice || !selectedProblem || !repairPrices[selectedDevice][selectedProblem]) {
    priceOutput.innerHTML = '— <small>MAD</small>';
    return;
  }
  const selectedModel = model.value;
  const base = repairPrices[selectedDevice][selectedProblem];
  const modelAdjustment = selectedDevice === 'iPhone' && selectedModel ? Math.max(0, modelOptions.iPhone.indexOf(selectedModel) - 2) * 100 : 0;
  const estimate = base + modelAdjustment;
  priceOutput.innerHTML = `${estimate.toLocaleString('en-US')} <small>MAD</small>`;
}

function updateProgress() {
  const hasDevice = Boolean(selectedDevice);
  const hasIssue = hasDevice && Boolean(model.value) && Boolean(document.querySelector('input[name="color"]:checked')) && Boolean(problem.value);
  const hasCustomer = ['#customer-name', '#customer-phone', '#customer-location', '#repair-date'].every((selector) => document.querySelector(selector).value.trim());
  let current = hasCustomer ? 4 : hasIssue ? 3 : hasDevice ? 2 : 1;
  if (!summaryPanel.hidden) current = 4;
  document.querySelectorAll('.progress-step').forEach((step) => {
    const number = Number(step.dataset.progress);
    step.classList.toggle('is-current', number === current);
    step.classList.toggle('is-done', number < current);
  });
}

function validateForm() {
  const checks = [
    [Boolean(selectedDevice), 'device-error', 'errorDevice'],
    [Boolean(model.value), 'model', 'errorModel'],
    [Boolean(document.querySelector('input[name="color"]:checked')), 'color-field', 'errorColor'],
    [Boolean(problem.value), 'problem', 'errorProblem'],
    [Boolean(document.querySelector('#customer-name').value.trim()), 'customer-name', 'errorName'],
    [/^\+?[\d\s().-]{8,24}$/.test(document.querySelector('#customer-phone').value.trim()) && document.querySelector('#customer-phone').value.replace(/\D/g, '').length >= 8, 'customer-phone', 'errorPhone'],
    [Boolean(document.querySelector('#customer-location').value.trim()), 'customer-location', 'errorLocation'],
    [Boolean(dateInput.value) && dateInput.value >= localDateString(), 'repair-date', 'errorDate']
  ];
  document.querySelectorAll('.validation-error').forEach((element) => element.classList.remove('validation-error'));
  document.querySelector('#device-error').textContent = '';
  document.querySelector('#form-error').textContent = '';
  let firstInvalid = null;
  checks.forEach(([valid, selector, messageKey]) => {
    if (valid) return;
    if (selector === 'device-error') {
      document.querySelector(`#${selector}`).textContent = translate(messageKey);
      firstInvalid ||= document.querySelector('.device-choices');
    } else if (selector === 'color-field') {
      document.querySelector(`.${selector}`).classList.add('validation-error');
      firstInvalid ||= document.querySelector(selector);
    } else {
      const field = document.querySelector(`#${selector}`);
      field.classList.add('validation-error');
      field.setAttribute('aria-invalid', 'true');
      firstInvalid ||= field;
    }
  });
  if (firstInvalid) {
    if (firstInvalid.matches('input, select, textarea')) firstInvalid.setAttribute('aria-invalid', 'true');
    firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
    if (firstInvalid.matches('input, select, textarea')) firstInvalid.focus({ preventScroll: true });
    document.querySelector('#form-error').textContent = translate('errorForm');
    return false;
  }
  return true;
}

function localDateString() {
  const now = new Date();
  const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return localDate.toISOString().slice(0, 10);
}

function selectedOptionText(select) {
  const selected = select.options[select.selectedIndex];
  return selected ? selected.textContent : '';
}

function buildBookingData() {
  const color = document.querySelector('input[name="color"]:checked');
  const estimateText = priceOutput.textContent.replace(/\s+/g, ' ').trim();
  return {
    device: selectedDevice,
    model: model.value,
    color: color ? color.closest('label').querySelector('[data-i18n]').textContent : '',
    problem: selectedOptionText(problem),
    price: estimateText,
    name: document.querySelector('#customer-name').value.trim(),
    phone: document.querySelector('#customer-phone').value.trim(),
    location: document.querySelector('#customer-location').value.trim(),
    date: dateInput.value,
    notes: document.querySelector('#repair-notes').value.trim()
  };
}

function renderSummary(data) {
  const rows = [
    ['summaryDevice', data.device], ['summaryModel', data.model], ['summaryColor', data.color],
    ['summaryProblem', data.problem], ['summaryPrice', data.price], ['summaryName', data.name],
    ['summaryPhone', data.phone], ['summaryLocation', data.location], ['summaryDate', data.date],
    ['summaryNotes', data.notes || translate('noNotes')]
  ];
  summaryList.replaceChildren(...rows.map(([label, value]) => {
    const row = document.createElement('div');
    const term = document.createElement('dt');
    const detail = document.createElement('dd');
    term.textContent = translate(label);
    detail.textContent = value;
    row.append(term, detail);
    return row;
  }));
  const message = currentLanguage === 'ar'
    ? `مرحباً، أود طلب إصلاح.\n\nالجهاز: ${data.device}\nالطراز: ${data.model}\nاللون: ${data.color}\nالمشكلة: ${data.problem}\nالسعر التقديري: ${data.price}\n\nاسم العميل: ${data.name}\nالهاتف: ${data.phone}\nالموقع: ${data.location}\nالتاريخ المفضل: ${data.date}\nملاحظات: ${data.notes || translate('noNotes')}\n\nيرجى تأكيد طلب الإصلاح.`
    : `Hello, I would like to request a repair.\n\nDevice: ${data.device}\nModel: ${data.model}\nColor: ${data.color}\nProblem: ${data.problem}\nEstimated Price: ${data.price}\n\nCustomer Name: ${data.name}\nPhone: ${data.phone}\nLocation: ${data.location}\nPreferred Date: ${data.date}\nNotes: ${data.notes || translate('noNotes')}\n\nPlease confirm the repair request.`;
  document.querySelector('#send-repair-whatsapp').href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function updateContactLinks() {
  const encodedMessage = encodeURIComponent(translations[currentLanguage].contactWhatsAppMessage);
  document.querySelectorAll('.nav-whatsapp, .accessory-cta, .faq-intro .text-link, .contact-card .contact-phone, .mobile-whatsapp').forEach((link) => {
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  });
  document.querySelectorAll('.product-ask').forEach((link) => {
    const productName = link.dataset.product;
    const message = currentLanguage === 'ar'
      ? `مرحباً، أود الاستفسار عن ${productName} في متجركم التجريبي.`
      : `Hello, I would like to ask about the ${productName} in your demo store.`;
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  });
}

document.querySelectorAll('.lang-button').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

document.querySelectorAll('.device-choice').forEach((button) => {
  button.setAttribute('aria-pressed', 'false');
  button.addEventListener('click', () => chooseDevice(button.dataset.device));
});

model.addEventListener('change', () => { updateEstimate(); updateProgress(); });
problem.addEventListener('change', () => { updateEstimate(); updateProgress(); });
document.querySelectorAll('input[name="color"]').forEach((input) => input.addEventListener('change', updateProgress));
document.querySelectorAll('#customer-name, #customer-phone, #customer-location, #repair-date').forEach((field) => {
  field.addEventListener('input', () => {
    field.classList.remove('validation-error');
    field.removeAttribute('aria-invalid');
    updateProgress();
  });
  field.addEventListener('change', updateProgress);
});
document.querySelectorAll('#model, #problem').forEach((field) => field.addEventListener('change', () => {
  field.classList.remove('validation-error');
  field.removeAttribute('aria-invalid');
}));
document.querySelectorAll('input[name="color"]').forEach((field) => field.addEventListener('change', () => {
  document.querySelector('.color-field').classList.remove('validation-error');
}));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!validateForm()) return;
  const booking = buildBookingData();
  renderSummary(booking);
  fieldsContainer.hidden = true;
  summaryPanel.hidden = false;
  updateProgress();
  summaryPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

document.querySelector('#start-again').addEventListener('click', () => {
  form.reset();
  selectedDevice = '';
  document.querySelector('#device').value = '';
  document.querySelectorAll('.device-choice').forEach((button) => {
    button.classList.remove('is-selected');
    button.setAttribute('aria-pressed', 'false');
  });
  model.disabled = true;
  model.replaceChildren(new Option(translate('selectDeviceFirst'), ''));
  priceOutput.innerHTML = '— <small>MAD</small>';
  document.querySelectorAll('.validation-error').forEach((field) => field.classList.remove('validation-error'));
  document.querySelectorAll('[aria-invalid]').forEach((field) => field.removeAttribute('aria-invalid'));
  document.querySelector('#form-error').textContent = '';
  document.querySelector('#device-error').textContent = '';
  summaryPanel.hidden = true;
  fieldsContainer.hidden = false;
  updateProgress();
  document.querySelector('#repairs').scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('.faq-item summary').forEach((summary) => {
  summary.addEventListener('click', (event) => {
    const item = event.currentTarget.parentElement;
    if (item.open) return;
    document.querySelectorAll('.faq-item[open]').forEach((openItem) => {
      if (openItem !== item) openItem.open = false;
    });
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  menuToggle.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  navigation.classList.toggle('is-open', !expanded);
});
navigation.querySelectorAll('a[href^="#"]').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
}));

dateInput.min = localDateString();
updateContactLinks();
updateProgress();
