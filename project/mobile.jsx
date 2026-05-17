/* Mobile landing — 390 wide */
const MLogo = () => (
  <div className="d-logo" style={{fontSize: 14}}>
    <div className="mark" style={{width: 24, height: 24, fontSize: 11}}>AV</div>
    <span>Audit Vector</span>
  </div>
);

const MEyebrow = ({children}) => <div className="eyebrow" style={{fontSize: 10}}>{children}</div>;

function MobileLanding() {
  return (
    <div className="site-m" data-screen-label="Mobile">

      <header className="m-header">
        <MLogo />
        <button className="m-burger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </header>

      <section className="m-hero">
        <MEyebrow>Аудит · Инвентаризация · Астана</MEyebrow>
        <h1>Независимый аудит для <em>промышленных предприятий</em></h1>
        <p className="lead">ТОО «Audit Vector» — инвентаризация имущества, проверка ТМЗ и&nbsp;аудит финансовой отчётности на&nbsp;крупных объектах в&nbsp;РК.</p>
        <div className="ctas">
          <button className="btn-primary">Запросить КП</button>
          <button className="btn-ghost">Скачать презентацию</button>
        </div>
        <div className="m-lic">
          <div className="label">Государственная лицензия</div>
          <div className="num">№ 24032816</div>
          <div className="row">
            <div><div className="k">Выдана</div><div className="v">13.11.2024</div></div>
            <div><div className="k">Регистрация</div><div className="v">09.06.2022</div></div>
          </div>
        </div>
      </section>

      <div className="m-stats">
        <div className="m-stat">
          <div className="n">3<span className="unit">года</span></div>
          <div className="lbl">Сопровождение KATCO без перерыва</div>
        </div>
        <div className="m-stat">
          <div className="n">7+</div>
          <div className="lbl">Крупных промышленных клиентов</div>
        </div>
        <div className="m-stat">
          <div className="n">2022</div>
          <div className="lbl">Год регистрации в&nbsp;РК</div>
        </div>
        <div className="m-stat">
          <div className="n">100<span className="unit">%</span></div>
          <div className="lbl">Проектов в&nbsp;срок</div>
        </div>
      </div>

      <section className="m-section">
        <MEyebrow>01 / Услуги</MEyebrow>
        <h2>Что мы делаем</h2>
        <p className="desc">Четыре направления, в&nbsp;которых у&nbsp;нас есть подтверждённый опыт работы.</p>
        <div className="m-services">
          {AV.services.map(s => (
            <div className="m-service" key={s.num}>
              <div className="num">— {s.num}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <div className="arrow">→</div>
            </div>
          ))}
        </div>
      </section>

      <section className="m-section">
        <MEyebrow>02 / Опыт</MEyebrow>
        <h2>Кейсы</h2>
        <p className="desc">Работаем с&nbsp;предприятиями, у&nbsp;которых высокие требования к&nbsp;точности проверок.</p>
        {AV.cases.map((c, i) => (
          <div className={`m-case ${i === 1 ? 'light' : ''}`} key={c.name}>
            <span className="tag">{c.tag}</span>
            <h3>{c.name}</h3>
            <div className="sub">{c.sub}</div>
            <ul>{c.bullets.map(b => <li key={b}><span>{b}</span></li>)}</ul>
            <div className="meta">
              <span className="big">{c.big}</span>
              <span className="lbl">{c.bigLbl}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="m-section">
        <MEyebrow>03 / Компетенции</MEyebrow>
        <h2>Где наш опыт работает лучше</h2>
        <p className="desc">Большие объёмы, распределённые структуры, нестандартная инфраструктура.</p>
        {AV.comp.map(c => (
          <div className="m-comp" key={c.i}>
            <div className="ico">{c.i}</div>
            <div>
              <h4>{c.t}</h4>
              <p>{c.d}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="m-section">
        <MEyebrow>04 / Клиенты</MEyebrow>
        <h2>Кому мы помогли</h2>
        <p className="desc">Компании, по&nbsp;которым проводилась аудиторская проверка.</p>
        <div className="m-clients">
          {AV.clients.map(c => (
            <div className="m-client" key={c.name}>
              <div className="name">{c.name}</div>
              <div className="ind">{c.ind}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="m-section">
        <MEyebrow>05 / Принципы</MEyebrow>
        <h2>Как мы работаем</h2>
        <p className="desc">Четыре вещи, на&nbsp;которые мы&nbsp;опираемся в&nbsp;любом проекте.</p>
        {AV.princ.map(p => (
          <div className="m-princ" key={p.n}>
            <div className="num">— {p.n}</div>
            <h4>{p.t}</h4>
            <p>{p.d}</p>
          </div>
        ))}
      </section>

      <section className="m-cta">
        <MEyebrow>Сотрудничество</MEyebrow>
        <h2>Готовы обсудить ваш <em>проект</em>?</h2>
        <form className="m-cta-form" onSubmit={e => e.preventDefault()}>
          <input placeholder="Компания" />
          <input placeholder="Контактное лицо" />
          <input placeholder="Email" />
          <input placeholder="Телефон" />
          <textarea placeholder="Кратко опишите задачу" />
          <button type="submit">Отправить заявку</button>
        </form>
      </section>

      <footer className="m-footer">
        <div className="col">
          <MLogo />
          <p style={{marginTop: 12, color: 'var(--ink-3)', fontSize: 12}}>
            ТОО «Audit Vector» — независимый аудит и&nbsp;инвентаризация.
          </p>
        </div>
        <div className="col">
          <h5>Адрес</h5>
          <p>г. Астана, ЖК Тельман, ул. Аккемер 12/3</p>
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
        <div className="legal">© 2022—2026 ТОО «Audit Vector» · Астана, РК</div>
      </footer>

    </div>
  );
}

window.MobileLanding = MobileLanding;
