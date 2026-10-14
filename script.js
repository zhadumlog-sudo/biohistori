const events = [
  {
    id: 1, year: "1979; конец 1980-х — начало 1990-х", tag: "Лабораторный инцидент", location: "Свердловск и объекты советской биологической программы",
    title: "Свердловская вспышка сибирской язвы и проблема запасов возбудителя",
    summary: "Вспышка 1979 года стала одним из наиболее известных случаев, связанных с предполагаемым аварийным выбросом из военного объекта.",
    body: [
      ["Контекст", "В апреле и мае 1979 года в Свердловске (ныне Екатеринбург) произошла вспышка сибирской язвы. Советские официальные объяснения связывали её с заражённым мясом, тогда как опубликованное в журнале Science эпидемиологическое исследование пришло к выводу, что вспышку вызвал случайный выброс аэрозоля с военного микробиологического объекта."],
      ["Последствия", "Погибли десятки людей; в литературе встречаются разные оценки числа жертв. Поэтому корректнее не выдавать одну оценку за бесспорную. В последующие годы отдельным вопросом для советской биологической программы стало безопасное обращение с запасами опасных биологических материалов и их уничтожение."],
      ["Почему это важно", "История показывает, как значение имеют прозрачное расследование, своевременное информирование населения и строгие системы биологической безопасности. Вспышка 1979 года и позднейшие мероприятия по уничтожению запасов — связанные исторически, но не одно и то же событие."]
    ],
    sources: [
      ["Meselson et al., “The Sverdlovsk anthrax outbreak of 1979”, Science (1994), PubMed", "https://pubmed.ncbi.nlm.nih.gov/7973702/"],
      ["Исторические документы Госдепартамента США о расследовании вспышки (1980)", "https://history.state.gov/historicaldocuments/frus1977-80v26/d111"],
      ["NTI: Former Soviet biological weapons facilities in Kazakhstan", "https://nonproliferation.org/former-soviet-biological-weapons-facilities-in-kazakhstan/"]
    ]
  },
  {
    id: 2, year: "1971", tag: "Вспышка инфекции", location: "Аральск, Казахская ССР",
    title: "Вспышка натуральной оспы в Аральске",
    summary: "Вспышка оспы была связана с районом острова Возрождения, где проводились биологические испытания.",
    body: [
      ["Что произошло", "В 1971 году в Аральске возникла вспышка натуральной оспы. Исторические исследования связывают её с заражением человека после пребывания в районе Аральского моря, неподалёку от острова Возрождения, где находился советский испытательный полигон."],
      ["Последствия", "В опубликованных описаниях говорится о десяти заболевших и трёх умерших. Для локализации вспышки проводились противоэпидемические мероприятия, включая выявление контактов и вакцинацию."],
      ["Почему это важно", "Событие часто приводят как пример того, что инфекционный риск на исследовательских объектах способен затрагивать населённые пункты за их пределами. Подробности реконструируются по историческим документам, поэтому источники следует читать критически."]
    ],
    sources: [
      ["Sarynov et al., Report on measures taken to contain and eradicate the smallpox outbreak in Aralsk (PubMed)", "https://pubmed.ncbi.nlm.nih.gov/12901678/"],
      ["Jonathan B. Tucker, The 1971 Smallpox Epidemic in Aralsk (Center for Nonproliferation Studies)", "https://books.google.com/books/about/The_1971_Smallpox_Epidemic_in_Aralsk_Kaz.html?id=cka5AAAAIAAJ"],
      ["NTI: Vozrozhdeniye Open-Air Test Site", "https://www.nti.org/education-center/facilities/vozrozhdeniye-open-air-test-site/"]
    ]
  },
  {
    id: 3, year: "1988", tag: "Лабораторное заражение", location: "Колцово, Новосибирская область, СССР",
    title: "Смертельное заражение вирусом Марбург",
    summary: "Советский исследователь Николай Устинов заразился вирусом Марбург во время лабораторной работы.",
    body: [
      ["Что известно", "В 1988 году исследователь Николай Устинов заразился вирусом Марбург на научном объекте в Колцово и умер от инфекции. Этот случай описывается в материалах об истории советской биологической программы и лабораторной безопасности."],
      ["Значение", "Марбург относится к опасным вирусным инфекциям. Инцидент подчёркивает необходимость надёжного сдерживания возбудителей, обучения персонала и соблюдения процедур безопасности при исследовательской работе."],
      ["Ограничение источников", "Доступные общедоступные описания этого эпизода кратки. Поэтому страница не добавляет неподтверждённых деталей о точном ходе лабораторного происшествия."]
    ],
    sources: [
      ["The Soviet Biological Weapons Program: A History — обзор истории программы (Harvard University Press)", "https://www.hup.harvard.edu/books/9780674065260"],
      ["List of laboratory biosecurity incidents (справочный перечень; сведения следует сверять с первичными источниками)", "https://en.wikipedia.org/wiki/List_of_laboratory_biosecurity_incidents"]
    ]
  },
  {
    id: 4, year: "1990", tag: "Лабораторная безопасность", location: "Колцово, Новосибирская область, РСФСР",
    title: "Сообщения о повторном заражении вирусом Марбург",
    summary: "В источниках об истории советских лабораторий описывается ещё один смертельный случай заражения в 1990 году.",
    body: [
      ["История", "В некоторых справочных описаниях истории лабораторных инцидентов упоминается повторный случай заражения вирусом Марбург в Колцово в 1990 году, закончившийся смертью сотрудника."],
      ["Почему требуется осторожность", "В открытых источниках подробностей заметно меньше, чем по вспышке в Свердловске или Аральске. Поэтому событие включено как предварительно документированный эпизод, а не как подробно реконструированная авария."],
      ["Урок", "Лабораторная безопасность зависит не только от оборудования, но и от организационных процедур, подготовки сотрудников и анализа происшествий без сокрытия значимых фактов."]
    ],
    sources: [
      ["List of laboratory biosecurity incidents (справочный перечень)", "https://en.wikipedia.org/wiki/List_of_laboratory_biosecurity_incidents"],
      ["The Soviet Biological Weapons Program: A History — Harvard University Press", "https://www.hup.harvard.edu/books/9780674065260"]
    ]
  },
  {
    id: 5, year: "1936–1992", tag: "Испытательный полигон", location: "Остров Возрождения, Аральское море",
    title: "Биологические испытания на острове Возрождения",
    summary: "Остров использовался для испытаний биологических агентов; это длительная деятельность, а не одна отдельная авария.",
    body: [
      ["История объекта", "Остров Возрождения в Аральском море использовался СССР для испытаний биологических агентов на открытом воздухе. По данным Nuclear Threat Initiative, объект функционировал в период с 1936 по 1992 год; позднее он был демонтирован."],
      ["Риски и последствия", "Испытания создавали потенциальные риски для персонала и окружающей среды. После распада СССР Казахстан и Узбекистан участвовали в мероприятиях по устранению негативных последствий деятельности бывшего полигона."],
      ["Изменение ландшафта", "Из-за усыхания Аральского моря остров постепенно перестал быть отделён водой от материка. Это осложнило оценку и управление экологическими рисками бывшей территории полигона."],
      ["Важно различать", "Этот пункт описывает историю объекта и накопленные риски, а не одну установленную аварию."]
    ],
    sources: [
      ["Nuclear Threat Initiative: Vozrozhdeniye Open-Air Test Site", "https://www.nti.org/education-center/facilities/vozrozhdeniye-open-air-test-site/"],
      ["James Martin Center for Nonproliferation Studies: Former Soviet Biological Weapons Facilities in Kazakhstan", "https://nonproliferation.org/former-soviet-biological-weapons-facilities-in-kazakhstan/"]
    ]
  },
  {
    id: 6, year: "XX век; отдельные вспышки в разные годы", tag: "Ветеринарная эпидемиология", location: "Различные регионы СССР",
    title: "Вспышки ящура среди сельскохозяйственных животных",
    summary: "Ящур распространяется среди восприимчивых животных и может вызывать серьёзные потери в животноводстве.",
    body: [
      ["Что это за проблема", "Ящур — высококонтагиозное вирусное заболевание парнокопытных животных. В СССР и позднее в России регистрировались вспышки в разные годы. Это не одна конкретная авария, а категория ветеринарных чрезвычайных ситуаций."],
      ["Последствия", "Вспышки могут приводить к ограничениям на перемещение животных и продукции, карантинным мерам, ветеринарным обследованиям и значительным экономическим потерям."],
      ["Почему включено в список", "Этот пример расширяет тему биологических чрезвычайных ситуаций: их последствия могут касаться животноводства и продовольственных цепочек, даже если речь не идёт о массовом заболевании людей."]
    ],
    sources: [
      ["World Reference Laboratory for Foot-and-Mouth Disease: Russia — сведения о зарегистрированных годах вспышек", "https://www.wrlfmd.org/western-and-central-asia/russia"],
      ["Control of foot-and-mouth disease in a closed society: A case study of Soviet Estonia (научная статья, PMC)", "https://pmc.ncbi.nlm.nih.gov/articles/PMC9429994/"]
    ]
  },
  {
    id: 7, year: "Советский период и позднее", tag: "Природный очаг", location: "Казахская ССР и Казахстан",
    title: "Случаи чумы в природных очагах Казахстана",
    summary: "Природные очаги чумы существуют независимо от лабораторных объектов и требуют постоянного эпидемиологического наблюдения.",
    body: [
      ["Контекст", "На территории Казахстана известны природные очаги чумы. В таких районах возбудитель поддерживается в природных экосистемах среди животных и переносчиков; иногда возникают случаи заражения людей."],
      ["Меры реагирования", "Система наблюдения включает эпидемиологический мониторинг, медицинскую диагностику, ветеринарные исследования и меры по снижению контакта людей с источниками инфекции."],
      ["Важно", "Это обобщённый материал о природных очагах, а не описание одной подтверждённой техногенной аварии. Он включён для сравнения природных и техногенных биологических рисков."]
    ],
    sources: [
      ["Всемирная организация здравоохранения: Plague — информационный обзор", "https://www.who.int/news-room/fact-sheets/detail/plague"],
      ["WHO: Plague — overview and public-health context", "https://www.who.int/health-topics/plague"]
    ]
  },
  {
    id: 8, year: "XX век", tag: "Природная инфекция", location: "Различные регионы СССР",
    title: "Вспышки туляремии",
    summary: "Туляремия встречается в природных очагах и может передаваться человеку различными путями.",
    body: [
      ["Что происходило", "В СССР регистрировались вспышки туляремии — инфекции, связанной с природными очагами и животными. Риск для человека зависит от местных экологических условий и контакта с заражённой средой или переносчиками."],
      ["Последствия", "Вспышки требуют эпидемиологического расследования, медицинского наблюдения и санитарных мер. Масштаб и причины различаются от случая к случаю."],
      ["Связь с историей биобезопасности", "Туляремия также фигурирует в исследованиях истории испытаний на острове Возрождения. Однако природные вспышки и испытательная деятельность — разные категории событий."]
    ],
    sources: [
      ["CDC: About Tularemia — справочная информация о заболевании", "https://www.cdc.gov/tularemia/about/index.html"],
      ["NTI: Vozrozhdeniye Open-Air Test Site", "https://www.nti.org/education-center/facilities/vozrozhdeniye-open-air-test-site/"]
    ]
  },
  {
    id: 9, year: "1990-е годы", tag: "Переходный период", location: "Различные объекты бывшего СССР",
    title: "Биологическая безопасность после закрытия и реорганизации объектов",
    summary: "После распада СССР возникли задачи по учёту материалов, переоборудованию объектов и снижению экологических рисков.",
    body: [
      ["Контекст", "В 1990-е годы часть советских научных и военных объектов была реорганизована или закрыта. Для бывших биологических объектов важными задачами стали безопасное обращение с материалами, поддержание инфраструктуры и оценка экологических последствий."],
      ["Что важно уточнять", "Это не одна конкретная авария с единой датой и числом пострадавших, а совокупность задач переходного периода. Поэтому не следует приписывать всем объектам одинаковые проблемы или последствия."],
      ["Урок", "Закрытие учреждения само по себе не отменяет необходимости инвентаризации материалов, безопасной утилизации, мониторинга и документированного контроля."]
    ],
    sources: [
      ["NTI: Vozrozhdeniye Open-Air Test Site", "https://www.nti.org/education-center/facilities/vozrozhdeniye-open-air-test-site/"],
      ["James Martin Center for Nonproliferation Studies: Former Soviet Biological Weapons Facilities in Kazakhstan", "https://nonproliferation.org/former-soviet-biological-weapons-facilities-in-kazakhstan/"]
    ]
  }
];

const grid = document.getElementById("eventGrid");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");
const backdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const modalDone = document.getElementById("modalDone");
let lastFocused = null;

function renderCards(query = "") {
  const normalized = query.trim().toLocaleLowerCase("ru");
  const filtered = events.filter(event =>
    [event.title, event.year, event.location, event.tag, event.summary].join(" ").toLocaleLowerCase("ru").includes(normalized)
  );
  grid.innerHTML = filtered.map(event => `
    <article class="event-card">
      <div class="card-top">
        <span class="card-number">№ ${String(event.id).padStart(2, "0")}</span>
        <span class="tag">${escapeHtml(event.tag)}</span>
      </div>
      <h3>${escapeHtml(event.title)}</h3>
      <div class="card-meta">${escapeHtml(event.year)}</div>
      <p>${escapeHtml(event.summary)}</p>
      <button class="card-button" type="button" data-event-id="${event.id}" aria-label="Открыть историю: ${escapeHtml(event.title)}">
        Открыть историю <span aria-hidden="true">↗</span>
      </button>
    </article>
  `).join("");
  noResults.hidden = filtered.length > 0;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}

function openEvent(id, button) {
  const event = events.find(item => item.id === Number(id));
  if (!event) return;
  lastFocused = button || document.activeElement;
  document.getElementById("modalMeta").textContent = `${event.year} · ${event.tag}`;
  document.getElementById("modalTitle").textContent = event.title;
  document.getElementById("modalLocation").textContent = `Место: ${event.location}`;
  document.getElementById("modalBody").innerHTML = event.body.map(([heading, text]) =>
    `<h3>${escapeHtml(heading)}</h3><p>${escapeHtml(text)}</p>`
  ).join("");
  document.getElementById("modalSources").innerHTML = event.sources.map(([label, url]) =>
    `<li><a href="${url}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)} ↗</a></li>`
  ).join("");
  backdrop.hidden = false;
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeModal() {
  backdrop.hidden = true;
  document.body.style.overflow = "";
  if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
}

grid.addEventListener("click", event => {
  const button = event.target.closest("[data-event-id]");
  if (button) openEvent(button.dataset.eventId, button);
});
searchInput.addEventListener("input", event => renderCards(event.target.value));
modalClose.addEventListener("click", closeModal);
modalDone.addEventListener("click", closeModal);
backdrop.addEventListener("click", event => {
  if (event.target === backdrop) closeModal();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !backdrop.hidden) closeModal();
});

renderCards();
