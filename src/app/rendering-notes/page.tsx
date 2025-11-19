const RenderingNotesPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Принципи підходів рендерінгу
        </h1>
        <p className="mt-3 text-slate-300">
          Створити для себе картинки/діаграму/текстовий файл принципів роботи
          підходів рендерінгу, в яких зазначити на яких етапах відбувається
          рендерінг, генерація сторінок, обробка клієнтом.
        </p>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <Card
            title="CSR — Client-Side Rendering"
            items={[
              ["Де рендерінг", "У браузері (React виконується на клієнті)."],
              [
                "Коли генерується сторінка",
                "Після завантаження JS; HTML спочатку мінімальний.",
              ],
              ["Обробка клієнтом", "Гідрація, фетч даних, SPA-навігація."],
              [
                "Коли застосовувати",
                "Інтенсивні інтеракції, приватні зони, дашборди.",
              ],
            ]}
          />
          <Card
            title="SSR — Server-Side Rendering"
            items={[
              ["Де рендерінг", "На сервері на кожен запит (runtime)."],
              [
                "Коли генерується сторінка",
                "Під час запиту формується готовий HTML.",
              ],
              ["Обробка клієнтом", "Гідрація клієнтських компонентів."],
              [
                "Коли застосовувати",
                "Публічні сторінки з SEO та свіжими даними.",
              ],
            ]}
          />
          <Card
            title="SSG / ISR — Static Generation"
            items={[
              ["Де рендерінг", "На сервері під час білду (build-time)."],
              [
                "Коли генерується сторінка",
                "Раз на білд; з ISR — перегенерація за revalidate/on-demand.",
              ],
              ["Обробка клієнтом", "Опційна гідрація «острівців»."],
              [
                "Коли застосовувати",
                "Контент, що рідко змінюється: блоги, маркетинг.",
              ],
            ]}
          />
          <Card
            title="Streaming SSR / RSC"
            items={[
              [
                "Де рендерінг",
                "На сервері; HTML стрімиться частинами, RSC зменшує JS.",
              ],
              [
                "Коли генерується сторінка",
                "Під час запиту — швидкі частини приходять першими.",
              ],
              ["Обробка клієнтом", "Поступова гідрація клієнтських ділянок."],
              [
                "Коли застосовувати",
                "Довгі запити, великі сторінки, зниження TTFB.",
              ],
            ]}
          />
          <Card
            title="Edge Rendering / Middleware"
            items={[
              ["Де рендерінг", "На edge-рантаймі ближче до користувача."],
              [
                "Коли генерується сторінка",
                "На кожен запит з низькою латентністю + кешуванням.",
              ],
              [
                "Обробка клієнтом",
                "Як зазвичай — гідрація там, де є клієнтські частини.",
              ],
              [
                "Коли застосовувати",
                "Geo-персоналізація, A/B, швидкі правила доступу.",
              ],
            ]}
          />
        </section>

        <section className="mt-12 grid gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-3">Життєвий цикл запиту</h2>
            <LifecycleDiagram />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-3">Режими рендерінгу</h2>
            <ModesDiagram />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-3">Коли що обирати</h2>
          <ul className="list-disc pl-6 text-slate-300 space-y-1">
            <li>
              <b>CSR</b>: інтенсивні інтеракції, приватний контент, дашборди.
            </li>
            <li>
              <b>SSR</b>: публічні сторінки з динамічними даними та SEO.
            </li>
            <li>
              <b>SSG/ISR</b>: рідко змінюваний контент з максимально швидкою
              роздачею.
            </li>
            <li>
              <b>Streaming SSR</b>: великі/повільні сторінки, де важлива перша
              видимість.
            </li>
            <li>
              <b>RSC</b>: зменшити JS на клієнті, тягар даних на сервер.
            </li>
            <li>
              <b>Edge</b>: персоналізація/кеш поблизу користувача, правила
              доступу.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

const Card = ({
  title,
  items,
}: {
  title: string;
  items: [string, string][];
}) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur p-6 shadow-xl">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <dl className="space-y-2 text-slate-300">
        {items.map(([k, v]) => (
          <div key={k} className="grid grid-cols-3 gap-3">
            <dt className="col-span-1 text-slate-400">{k}</dt>
            <dd className="col-span-2">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

const LifecycleDiagram = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      viewBox="0 0 900 260"
    >
      <defs>
        <marker
          id="ah"
          markerWidth="10"
          markerHeight="7"
          refX="10"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
        </marker>
        <style>{`
          .box { fill:#0ea5e9; fill-opacity:.12; stroke:#0ea5e9; rx:10; ry:10; }
          .label { font:14px ui-sans-serif,system-ui,Arial; fill:#e5e7eb; text-anchor:middle; dominant-baseline:middle; }
          .title { font:700 18px ui-sans-serif,system-ui,Arial; fill:#fff; }
          .muted { fill:#cbd5e1; font:12px ui-sans-serif,system-ui,Arial; text-anchor:middle; }
          .arrow { stroke:#94a3b8; stroke-width:2; fill:none; marker-end:url(#ah); }
        `}</style>
      </defs>

      <text x="30" y="28" className="title">
        Життєвий цикл запиту (вирівняна схема)
      </text>

      <rect x="30" y="76" width="180" height="64" className="box" />
      <text x="120" y="108" className="label">
        Клієнтський запит
      </text>

      <rect x="240" y="76" width="180" height="64" className="box" />
      <text x="330" y="98" className="label">
        Сервер
      </text>
      <text x="330" y="120" className="muted">
        SSR / SSG / Streaming / RSC
      </text>

      <rect x="450" y="76" width="180" height="64" className="box" />
      <text x="540" y="108" className="label">
        HTML + дані
      </text>

      <rect x="660" y="76" width="180" height="64" className="box" />
      <text x="750" y="98" className="label">
        Клієнт
      </text>
      <text x="750" y="120" className="muted">
        Гідрація + UI
      </text>

      <line x1="210" y1="108" x2="240" y2="108" className="arrow" />
      <line x1="420" y1="108" x2="450" y2="108" className="arrow" />
      <line x1="630" y1="108" x2="660" y2="108" className="arrow" />

      <rect x="360" y="166" width="180" height="64" className="box" />
      <text x="450" y="188" className="label">
        CSR
      </text>
      <text x="450" y="206" className="muted">
        Рендерінг у браузері
      </text>

      <line x1="120" y1="198" x2="360" y2="198" className="arrow" />
      <line x1="540" y1="198" x2="840" y2="198" className="arrow" />
    </svg>
  );
};

const ModesDiagram = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      viewBox="0 0 920 280"
    >
      <style>{`.c{fill:#10b981;fill-opacity:.12;stroke:#10b981;rx:10;ry:10}.H{font:700 16px ui-sans-serif,system-ui,Arial;fill:#fff}.t{font:13px ui-sans-serif,system-ui,Arial;fill:#e5e7eb}`}</style>
      <text x="20" y="24" className="H">
        Режими рендерінгу
      </text>
      <rect x="20" y="50" width="210" height="200" className="c" />
      <text x="30" y="72" className="H">
        CSR
      </text>
      <text x="30" y="98" className="t">
        · Рендер у браузері
      </text>
      <text x="30" y="120" className="t">
        · Дані фетчаться на клієнті
      </text>
      <text x="30" y="142" className="t">
        · Початковий HTML мінімальний
      </text>
      <rect x="250" y="50" width="210" height="200" className="c" />
      <text x="260" y="72" className="H">
        SSR
      </text>
      <text x="260" y="98" className="t">
        · HTML генерується на сервері
      </text>
      <text x="260" y="120" className="t">
        · Гідрація на клієнті
      </text>
      <text x="260" y="142" className="t">
        · Свіжі дані на запит
      </text>
      <rect x="480" y="50" width="210" height="200" className="c" />
      <text x="490" y="72" className="H">
        SSG / ISR
      </text>
      <text x="490" y="98" className="t">
        · Рендер під час білду
      </text>
      <text x="490" y="120" className="t">
        · Регенерація за revalidate
      </text>
      <text x="490" y="142" className="t">
        · Роздача з CDN
      </text>
      <rect x="710" y="50" width="190" height="200" className="c" />
      <text x="720" y="72" className="H">
        Streaming / RSC
      </text>
      <text x="720" y="98" className="t">
        · Потоковий HTML
      </text>
      <text x="720" y="120" className="t">
        · Менше JS завдяки RSC
      </text>
      <text x="720" y="142" className="t">
        · Краще Time-to-First-Byte
      </text>
    </svg>
  );
};

export default RenderingNotesPage;
