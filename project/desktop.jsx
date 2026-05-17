/* Desktop landing — 1440 wide */
const Logo = () => (
  <div className="d-logo">
    <div className="mark">AV</div>
    <span>Audit Vector</span>
  </div>
);

const Eyebrow = ({children}) => <div className="eyebrow">{children}</div>;

function DesktopLanding() {
  return (
    <div className="site-d" data-screen-label="Desktop">

      {/* Header */}
      <header className="d-header">
        <Logo />
        <nav className="d-nav">
          <a href="#services">Услуги</a>
          <a href="#cases">Опыт</a>
          <a href="#clients">Клиенты</a>
          <a href="#about">О компании</a>
          <a href="#contact">Контакты</a>
        </nav>
        <div className="d-header-right">
          <span className="d-phone mono">+7 (XXX) XXX-XX-XX</span>
          <button className="btn-primary">Связаться</button>
        </div>
      </header>

      {/* Hero */}
      <section className="d-hero">
        <div>
          <Eyebrow>Аудит · Инвентаризация · Астана</Eyebrow>
          <h1>Независимый аудит и&nbsp;инвентаризация для <em>промышленных предприятий</em></h1>
          <p className="lead">ТОО «Audit Vector» проводит независимую инвентаризацию имущества, проверку ТМЗ и&nbsp;аудит финансовой отчётности на&nbsp;объектах с&nbsp;распределённой структурой и&nbsp;сложной инфраструктурой по&nbsp;всей территории Казахстана.</p>
          <div className="d-hero-ctas">
            <button className="btn-primary">Запросить КП</button>
            <button className="btn-ghost">Скачать презентацию</button>
          </div>
        </div>

        <aside className="d-hero-side">
          <div className="label">Государственная лицензия</div>
          <div className="lic-num">№&nbsp;24032816</div>
          <div className="lic-row">
            <div>
              <div className="k">Выдана</div>
              <div className="v">13 ноября 2024</div>
            </div>
            <div>
              <div className="k">Орган</div>
              <div className="v">КК МФ РК</div>
            </div>
            <div>
              <div className="k">Регистрация</div>
              <div className="v">09 июня 2022</div>
            </div>
            <div>
              <div className="k">Членство</div>
              <div className="v">Союз Аудиторов&nbsp;РК</div>
            </div>
          </div>
        </aside>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="n">3<span className="unit">года</span></div>
            <div className="lbl">Сопровождение инвентаризации KATCO без перерыва</div>
          </div>
          <div className="hero-stat">
            <div className="n">7+</div>
            <div className="lbl">Крупных промышленных и государственных клиентов</div>
          </div>
          <div className="hero-stat">
            <div className="n">2022</div>
            <div className="lbl">Год регистрации компании в РК</div>
          </div>
          <div className="hero-stat">
            <div className="n">100<span className="unit">%</span></div>
            <div className="lbl">Проектов сданы в согласованные сроки</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services">
        <div className="section-head">
          <div className="left">
            <Eyebrow>01 / Услуги</Eyebrow>
            <h2>Что мы делаем</h2>
          </div>
          <div className="right">
            Четыре направления, в&nbsp;которых у&nbsp;нас есть подтверждённый опыт работы с&nbsp;крупными промышленными и&nbsp;государственными заказчиками. Каждое направление поддержано штатной командой и&nbsp;собственной методикой.
          </div>
        </div>
        <div className="services-grid">
          {AV.services.map(s => (
            <div className="service-card" key={s.num}>
              <div className="num">— {s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="more">Подробнее →</div>
            </div>
          ))}
        </div>
      </section>

      {/* Cases */}
      <section className="section" id="cases">
        <div className="section-head">
          <div className="left">
            <Eyebrow>02 / Опыт</Eyebrow>
            <h2>Кейсы на&nbsp;крупных промышленных объектах</h2>
          </div>
          <div className="right">
            Мы работаем с&nbsp;предприятиями, у&nbsp;которых высокие требования к&nbsp;независимости и&nbsp;точности проверок: совместные предприятия, объекты со&nbsp;сложной инфраструктурой, производства с&nbsp;распределёнными складами.
          </div>
        </div>
        <div className="cases-wrap">
          {AV.cases.map((c, i) => (
            <div className={`case-card ${i === 1 ? 'light' : ''}`} key={c.name}>
              <span className="tag">{c.tag}</span>
              <h3>{c.name}</h3>
              <div className="sub">{c.sub}</div>
              <ul>
                {c.bullets.map(b => <li key={b}><span>{b}</span></li>)}
              </ul>
              <div className="meta">
                <span className="big">{c.big}</span>
                <span>{c.bigLbl}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Competencies */}
      <section className="section comp-section">
        <div className="section-head">
          <div className="left">
            <Eyebrow>03 / Компетенции</Eyebrow>
            <h2>Где наш опыт работает лучше всего</h2>
          </div>
          <div className="right">
            Накопленный опыт позволяет команде эффективно организовывать инвентаризацию там, где у&nbsp;большинства подрядчиков начинаются сложности — на&nbsp;больших объёмах, в&nbsp;распределённых структурах и&nbsp;на&nbsp;нестандартной инфраструктуре.
          </div>
        </div>
        <div className="comp-grid">
          {AV.comp.map(c => (
            <div className="comp-item" key={c.i}>
              <div className="ico">{c.i}</div>
              <h4>{c.t}</h4>
              <p>{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="section" id="clients">
        <div className="section-head">
          <div className="left">
            <Eyebrow>04 / Клиенты</Eyebrow>
            <h2>Кому мы&nbsp;уже помогли</h2>
          </div>
          <div className="right">
            Компании, по&nbsp;которым ТОО «Audit Vector» проводило аудиторскую проверку и&nbsp;сопутствующие услуги.
          </div>
        </div>
        <div className="clients-grid">
          {AV.clients.map(c => (
            <div className="client-cell" key={c.name}>
              <div className="name">{c.name}</div>
              <div className="ind">{c.ind}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="section" id="about">
        <div className="section-head">
          <div className="left">
            <Eyebrow>05 / Принципы</Eyebrow>
            <h2>Как мы работаем</h2>
          </div>
          <div className="right">
            Четыре вещи, на&nbsp;которые мы&nbsp;опираемся в&nbsp;любом проекте — от&nbsp;первого выезда на&nbsp;объект до&nbsp;передачи итогового отчёта.
          </div>
        </div>
        <div className="princ-grid">
          {AV.princ.map(p => (
            <div className="princ-item" key={p.n}>
              <div className="num">— {p.n}</div>
              <h4>{p.t}</h4>
              <p>{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="cta-inner">
          <div>
            <Eyebrow>Сотрудничество</Eyebrow>
            <h2>Готовы обсудить ваш <em>проект</em>?</h2>
          </div>
          <form className="cta-form" onSubmit={e => e.preventDefault()}>
            <div className="row">
              <input placeholder="Компания" />
              <input placeholder="Контактное лицо" />
            </div>
            <div className="row">
              <input placeholder="Email" />
              <input placeholder="Телефон" />
            </div>
            <textarea placeholder="Кратко опишите задачу — объект, ориентировочные сроки, объём" />
            <button type="submit">Отправить заявку</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="d-footer">
        <div className="top">
          <div className="col">
            <Logo />
            <p style={{marginTop: 16, color: 'var(--ink-3)', fontSize: 13, maxWidth: 320}}>
              ТОО «Audit Vector» — независимый аудит, инвентаризация и&nbsp;сопутствующие услуги для&nbsp;промышленных и&nbsp;государственных заказчиков.
            </p>
          </div>
          <div className="col">
            <h5>Адрес</h5>
            <p>г. Астана</p>
            <p>ЖК Тельман</p>
            <p>ул. Аккемер 12/3</p>
          </div>
          <div className="col">
            <h5>Контакты</h5>
            <a href="tel:+7000">+7 (XXX) XXX-XX-XX</a>
            <a href="mailto:info@auditvector.kz">info@auditvector.kz</a>
          </div>
          <div className="col">
            <h5>Документы</h5>
            <a>Лицензия № 24032816</a>
            <a>Свидетельство СА РК №0158</a>
          </div>
        </div>
        <div className="bot">
          <span>© 2022—2026 ТОО «Audit Vector»</span>
          <span>Астана · Республика Казахстан</span>
        </div>
      </footer>

    </div>
  );
}

window.DesktopLanding = DesktopLanding;
