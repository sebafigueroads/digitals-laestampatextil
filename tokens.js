/* ======================================================================
   LA ESTAMPA TEXTIL · TOKENS CENTRALES · 2026
   - Cliente: Priscila Sarmiento (4 años · ex-marca "Remind")
   - Vertical: estampado textil personalizado + merchandising B2B
   - Tecnología: sublimación + DTF · plotters Epson certificados
   - Kick-off: 2026-05-11 · Digitals
   - Entregables: web madre nueva · 2 landings (estampado textil + merch B2B)
                  · estrategia comunicacional + gráfica + marketing
                  · embudo de conversión con Hapee + IA
                  · always-on Google + sistema de testeo Meta
   ====================================================================== */

window.LET_TOKENS = {

  /* ============= BRAND META ============= */
  brand: {
    name: 'La Estampa Textil',
    legal: 'La Estampa Textil SpA',
    lead: 'Priscila Sarmiento',
    role: 'Fundadora & Directora Creativa',
    foundedAs: 'Remind (2022) → La Estampa Textil (2024)',
    site: 'laestampatextil.cl',
    logo: 'assets/logo/logo.png',
    address: 'Santiago · Chile · cobertura nacional',
    tagline: 'Estampado textil con oficio. Tinta firme en cada prenda.',
    pitch: 'Estampado textil especializado · sublimación + DTF + estampado por metro + confección. 4 años de oficio operativo: plotters Epson, gestión de color y deadlines que se cumplen. Servimos a marcas, agencias, productoras y clientes finales — desde un metro de tela hasta una flota completa de uniformes.',
    kicker: '4 AÑOS · 70-80 CIERRES/MES · COBERTURA NACIONAL · TICKET PROM. $50K',

    facts: [
      { k: '4 años', v: 'de oficio textil · ex-marca Remind' },
      { k: '70-80', v: 'cierres mensuales · vía Google Ads' },
      { k: '$50K', v: 'ticket promedio cliente nuevo' },
      { k: 'CL', v: 'cobertura nacional · despacho a regiones' },
      { k: 'Epson', v: 'plotters certificados · sublimación + DTF' },
      { k: 'B2B+B2C', v: 'productoras, agencias, marcas y clientes finales' }
    ],

    capabilities: [
      { id: 'sub',       name: 'Sublimación',          desc: 'Tinta integrada a la fibra · color firme, suave al tacto · ideal para poliéster + mezclas.' },
      { id: 'dtf',       name: 'DTF · film transfer',  desc: 'Impresión sobre film + termoadhesivo · funciona en algodón, mezclas, lycra, polar. Cero límite de color.' },
      { id: 'tela',      name: 'Estampado por metro',  desc: 'Telas estampadas a pedido · base para confección propia o terceros · catálogo de bases técnicas.' },
      { id: 'conf',      name: 'Confección completa',  desc: 'Mantas de picnic · pañoletas · uniformes · cubrealarmas · pop-ups y banderas para activación.' },
      { id: 'bord',      name: 'Bordado + terminaciones', desc: 'Bordado computarizado, etiquetado, empaque y terminaciones de prenda para acabado profesional.' }
    ],

    products: [
      { id: 'p-uniformes',    name: 'Uniformes corporativos',  cat: 'B2B', tag: 'Poleras, chaquetas, hoodies con logo bordado/estampado',  qty: '20 → 1.000+ und' },
      { id: 'p-event',        name: 'Activaciones de marca',   cat: 'B2B', tag: 'Poleras staff, mantas, banderas, tótems textiles',          qty: '50 → 500 und' },
      { id: 'p-manta',        name: 'Mantas de picnic',        cat: 'Pro', tag: 'Personalizadas con logo full-color, bordes terminados',    qty: '10 → 300 und' },
      { id: 'p-pano',         name: 'Pañoletas / bandanas',    cat: 'Pro', tag: 'Algodón natural · sublimación o estampado al agua',         qty: '50 → 2.000 und' },
      { id: 'p-cubre',        name: 'Cubrealarmas',            cat: 'Pro', tag: 'Para inmobiliarias · marcas de seguridad · publicidad OOH', qty: '5 → 100 und' },
      { id: 'p-tela',         name: 'Tela estampada / metro',  cat: 'B2B', tag: 'Para confeccionistas · bases varias · color a brief',       qty: 'Desde 1 m' },
      { id: 'p-merch',        name: 'Merchandising B2B',       cat: 'B2B', tag: 'Kits corporativos · onboarding · regalos clientes',         qty: '20 → 500 kits' },
      { id: 'p-b2c',          name: 'B2C · pedidos directos',  cat: 'B2C', tag: 'Polera única, regalo personalizado, evento privado',         qty: '1 → 50 und · flujo + liquidez' }
    ],

    cases: [
      { tag: 'ACTIVACIÓN · AGENCIA',     title: 'Poleras staff · 200 unidades · activación nacional', desc: 'Operación tipo "activación a la chilena": brief el lunes, poleras en bodega del cliente el viernes. DTF para soportar lavados y sol. Repetición a partir del segundo evento.' },
      { tag: 'ENTRETENIMIENTO',          title: 'Vestuario para producción audiovisual',             desc: 'Piezas de vestuario para una producción televisiva con timing apretado, materialidad de cámara y libreta de color respetada. Una credencial más en el portafolio de producciones culturales con que LET ha trabajado.' },
      { tag: 'INMOBILIARIA · OOH',       title: 'Cubrealarmas full-color para fachada nueva',       desc: 'Una inmobiliaria pidió cubrir 18 alarmas con su gráfica de lanzamiento. Sublimación sobre poliéster reforzado · resistencia UV · instalación en obra.' },
      { tag: 'RETAIL · KIT ONBOARDING',  title: 'Kit nuevo empleado · pañoleta + manta + tote',     desc: 'Marca de retail con 200 ingresos mensuales · kit con 3 piezas estampadas a su brand book · entrega a domicilio del nuevo colaborador.' },
      { tag: 'B2C · CLIENTE FINAL',      title: 'Pedido directo desde Google Ads',                  desc: 'El 70-80 de cierres mensuales viene mayoritariamente de cliente final: cumpleaños, regalo personalizado, polera única, despedida. Flujo y liquidez que sostiene la operación día a día.' }
    ]
  },

  /* ============= AUDIT DEL ESTADO ACTUAL ============= */
  audit: {
    site: 'https://laestampatextil.cl/',
    works: [
      'Google Ads ya está convirtiendo: 70-80 cierres mes generan caja predecible.',
      'Catálogo real instalado: el sitio enumera productos concretos (no es brochure).',
      'WhatsApp visible, contacto directo accesible para la audiencia actual.',
      'Trayectoria operativa: 4 años desde Remind dan piso técnico real.',
      'Capacidades técnicas serias: plotters Epson + sublimación + DTF cubren la mayoría de demandas.',
      'B2C transaccional ya rinde: cliente final desde Google Ads sostiene el flujo de caja diario.'
    ],
    breaks: [
      'Marca sin sistema visual definido: la web actual no comunica el oficio técnico que tiene detrás.',
      'Storytelling poco explotado: 4 años de oficio, casos reales con productoras y agencias, plotters Epson · poco visible.',
      'B2C transaccional y B2B premium conviven en la misma puerta: una madre con un cumpleaños y un jefe de marketing comprando 500 poleras llegan al mismo sitio sin segmentar.',
      'No hay landing por servicio: las campañas de Google llegan a páginas genéricas, quality score mediocre.',
      'Pixel y tracking de Meta inexistentes o mal calibrados · imposible escalar pauta.',
      'Sin embudo automático: leads entran a WhatsApp y los filtra una persona (cuello de botella).',
      'Sin always-on Google estructurado: campañas tipo "todo a la canasta" en vez de líneas dedicadas por servicio + intención.',
      'Sin proceso de testeo Meta: no hay framework para encontrar anuncios ganadores.',
      'Casos no estructurados como prueba social: existen trabajos sólidos en portafolio pero no están organizados como activos editoriales.'
    ]
  },

  /* ============= LOGO · LECTURA + EVOLUCIÓN VISUAL ============= */
  /* Nota: la marca La Estampa Textil ya está registrada. Mantenemos logo + nombre.
     Trabajamos evolución y profesionalización del ecosistema visual, no rebranding. */
  logo: {
    asset: 'assets/logo/laestampa-logo-real.jpg',
    note: 'LET ya tiene marca registrada. No proponemos cambio de nombre ni rediseño del logo. Lo que sigue es lectura del activo actual y propuesta de evolución del ecosistema visual derivado (aplicaciones, sistema iconográfico, manual).',
    elements: [
      { lbl: 'Wordmark',     val: '"la estampa textil" · script bold + sello curvo', meaning: 'Identidad cálida y artesanal · transmite oficio. Funciona bien para reconocimiento de marca.' },
      { lbl: 'Badge curvo',  val: '"ESTAMPADO TEXTIL DIGITAL" all-caps sans',         meaning: 'Sello de oficio en composición circular · refuerza el carácter de imprenta artesanal.' },
      { lbl: 'Tres olas',    val: 'Rojo · coral · turquesa (3 trazos curvos)',         meaning: 'Buena metáfora visual: capas de tinta de un estampado · CMYK simplificado. Personalidad cálida que separa a LET de competidores fríos.' },
      { lbl: 'Tipografía',   val: 'Script handwritten bold + sans curva',              meaning: 'Voz amistosa · close-to-craft. Conviene complementar con un sans funcional para usos B2B y digitales.' }
    ],
    strengths: [
      'Marca registrada y consolidada · no la tocamos.',
      'Las 3 olas de color son únicas + memorables · cero competidor chileno usa esa metáfora.',
      'Voz cálida + artesanal · alineada con el storytelling de oficio.',
      'Composición circular tipo sello · escala bien en etiquetas, sellos, mockups, packaging.'
    ],
    weaknesses: [
      'Falta sistema visual derivado: aplicaciones, etiquetas colgantes, packaging, stationery.',
      'No hay versión monocroma definida (blanco / negro / sobre acento) ni reglas claras de uso digital.',
      'Sin sistema iconográfico derivado de las 3 olas.',
      'Sin manual de marca con reglas básicas para que LET aplique el logo consistentemente.'
    ],
    recommendations: [
      'Mantener logo y nombre tal como están. No hay rebranding ni cambio de nombre en esta propuesta.',
      'Construir manual de marca de 10-12 págs: versiones (color/mono), área de respeto, mal uso, tipografías digitales acompañantes (sin reemplazar el logo).',
      'Usar las 3 olas como sistema gráfico derivado · iconografía por servicio · footers · favicons · sticker pack.',
      'Definir 3 etiquetas/divisiones internas dentro del mismo logo: estampado, merch B2B y B2C operativo, para organizar comunicación sin tocar la marca madre.',
      'Aplicaciones físicas: etiquetas colgantes, packaging básico, uniforme de equipo · todo bajo el logo actual.'
    ]
  },

  /* ============= EVOLUCIÓN VISUAL · NO REBRANDING ============= */
  /* Sustituye al antiguo bloque "rename". La clienta confirmó que la marca está
     registrada. Acá hablamos de profesionalización del ecosistema, no cambio
     de nombre, dominio o logo. */
  evolution: {
    title: 'Evolución y profesionalización del ecosistema visual',
    headline: 'La marca se mantiene. Lo que evoluciona es el ecosistema.',
    why: 'La Estampa Textil ya tiene marca registrada, logo conocido por sus clientes y un dominio (laestampatextil.cl) con tráfico orgánico vivo. No proponemos rebranding ni cambio de nombre. Proponemos profesionalizar lo que rodea a la marca: manual visual, aplicaciones físicas y digitales, sistema iconográfico, tono editorial y arquitectura web. La marca madre permanece intacta.',
    keepsList: [
      'Logo actual · 100% intacto',
      'Nombre "La Estampa Textil" · marca registrada',
      'Dominio laestampatextil.cl · sin migración forzada (ver sección Propiedad + Dominio)',
      'Identidad cálida + las 3 olas + script handwritten'
    ],
    evolvesList: [
      'Manual de marca con reglas de uso (versiones, área de respeto, tipografías digitales)',
      'Sistema iconográfico derivado de las 3 olas para usos digitales y físicos',
      'Aplicaciones físicas: etiquetas colgantes, packaging básico, uniforme equipo',
      'Arquitectura web: sitio madre + 2 landings con copy editorial y proof técnico',
      'Tono editorial consistente entre web, RRSS y materiales comerciales',
      'Tres etiquetas internas para organizar la comunicación: Estampado (operativo) · Merch B2B (premium) · B2C (cliente final). Sin sub-marcas formales, sin tocar el logo.'
    ],
    transition: [
      { phase: 'Semana 1-2', name: 'Manual visual',     detail: 'Manual de marca v1 · versiones del logo · tipografías acompañantes · colores extendidos · usos correctos/incorrectos.' },
      { phase: 'Semana 3-5', name: 'Sistema gráfico',   detail: 'Sistema iconográfico derivado de las 3 olas · plantillas RRSS · diseño de etiquetas, hangtags y packaging básico.' },
      { phase: 'Semana 6-8', name: 'Web madre + LPs',   detail: 'Web nueva sobre laestampatextil.cl con copy editorial + arquitectura B2B/B2C clara + 2 landings dedicadas.' },
      { phase: 'Semana 9-12',name: 'Aplicaciones',      detail: 'Aplicaciones físicas implementadas: etiquetas en producción, packaging básico, uniforme equipo · uso real del manual.' }
    ]
  },

  /* ============= DIGITALS · PATRÓN TELECTRONIC ============= */
  digitals: {
    socio: {
      kicker: '— TU SOCIO ESTRATÉGICO',
      title: 'No somos una agencia más. Somos una <em>consultora de IA + performance</em> que opera como infraestructura del cliente.',
      lead: '7 años · 20-25 personas · 4 partnerships globales · 1 stack tecnológico propio. Especialistas en sectores donde la decisión de compra es compleja: textil B2B, industrial, retail premium, agencias creativas.',
      kpis: [
        { num: '7+',      label: 'Años escalando marcas',         suf: 'experiencia' },
        { num: '1.000+',  label: 'Campañas ejecutadas',           suf: 'multi-canal' },
        { num: '$100M+',  label: 'USD gestionados en pauta',       suf: 'paid media' },
        { num: '500+',    label: 'Casos de éxito en 7 países',    suf: 'LATAM' }
      ],
      pillars: [
        { num: '01', title: 'Performance', subtitle: 'Datos · pauta · funnel medible',  desc: '$100M+ USD gestionados en Meta · Google · LinkedIn · TikTok. Marcajes server-side, CAPI, atribución multi-touch. <em>Cada peso de pauta tiene su trazabilidad.</em>', color: 'accent' },
        { num: '02', title: 'IA aplicada',  subtitle: 'Stack propio · agentes · contenido', desc: 'Hapee CRM propio · Claude (todas las versiones) · Higgsfield para video · Gemini · NotebookLM. <em>IA no como producto, sino como infraestructura.</em>', color: 'accent2' },
        { num: '03', title: 'Autoridad B2B',subtitle: 'Editorial · LinkedIn · prospección', desc: 'Sistema integral: pauta digital + autoridad editorial + AEO/GEO + presencia LinkedIn empresa. <em>Cuando el comprador busca proveedor de estampado serio, apareces tú.</em>', color: 'accent3' }
      ],
      team: [
        { name: 'SEBASTIÁN', role: 'Co-founder & CEO',          img: 'https://digitals.cl/imgs/sebastian-new.png' },
        { name: 'FREDDY',    role: 'Co-founder & CFO',          img: 'https://digitals.cl/imgs/Freddy.png' },
        { name: 'GIORGINA',  role: 'Directora de Marketing',    img: 'https://digitals.cl/imgs/Gina%20(1).png' },
        { name: 'ROCÍO',     role: 'Directora de Arte',          img: 'https://digitals.cl/imgs/Rocio.png' },
        { name: 'CAMILA',    role: 'Content Manager',            img: 'https://digitals.cl/imgs/camila-new.png' },
        { name: 'JAIME',     role: 'Director de TI',             img: 'https://digitals.cl/imgs/jaime.png' },
        { name: 'JOSE',      role: 'SEM Manager',                img: 'https://digitals.cl/imgs/Jose.png' },
        { name: 'CLAUDIA',   role: 'SEM Analyst',                img: 'https://digitals.cl/imgs/claudia.jpg' },
        { name: 'NELLY',     role: 'Diseñadora Gráfica',         img: 'https://digitals.cl/imgs/nelly.jpg' },
        { name: 'PATRICIA',  role: 'Diseñadora Gráfica',         img: 'https://digitals.cl/imgs/Paty.png' },
        { name: 'RICHARD',   role: 'Director de Arte Jr',        img: 'https://digitals.cl/imgs/Foto%20Richard.png' },
        { name: 'LEIDY',     role: 'Recursos Humanos',           img: 'https://digitals.cl/imgs/leidy.jpg' }
      ],
      partners: [
        { name: 'Meta',     tag: 'Work Partner Authorized', color: '#0064E1', detail: 'Acceso priority · betas Advantage+ · AI Agent Ads · CAPI server-side' },
        { name: 'Google',   tag: 'Premier Partner 2025',     color: '#4285F4', detail: 'Top 3% global · account manager dedicado · soporte en deal review' },
        { name: 'LinkedIn', tag: 'Marketing Partner',         color: '#0A66C2', detail: 'Útil para LinkedIn empresa · access tools · soporte directo' },
        { name: 'AWS',      tag: 'Cloud Partner',             color: '#FF9900', detail: 'Arquitectura serverless · Hapee CRM hosting · datos a escala' }
      ],
      whyClient: {
        title: '¿Por qué esta combinación importa para <span class="accent-orange">La Estampa Textil</span>?',
        body: 'LET trabaja con tres públicos que coexisten y todos importan: B2B premium (gerentes de marca, productoras, agencias), cliente B2C transaccional (cumpleaños, polera única, regalo) que sostiene el flujo de caja diario, y operación recurrente (clientes que vuelven). Los partnerships oficiales (Meta · Google · LinkedIn · AWS) dan acceso a soporte priority por canal. Sumado al equipo in-house, al stack tecnológico propio y a la dupla CEO+CFO, LET accede a operación con <em>oficio comercial + agilidad técnica</em>. No es marketing bonito — es estructura para escalar lo que ya funciona sin romper la operación textil.'
      }
    },

    origen: {
      kicker: '— COFUNDADORES · 30 AÑOS DE AMISTAD',
      title: 'Antes que holding, una estructura humana que <em>ningún competidor copia.</em>',
      lead: 'Dos cofundadores que se conocen desde los 4 años. Un publicista + un Contador Auditor — dos disciplinas complementarias que aseguran ejecución creativa y orden operacional al mismo tiempo. Ambos actúan como asesores estratégicos y PMs de cada cuenta · no son figuras decorativas.',
      sebastian: {
        name: 'Sebastián Figueroa',
        role: 'Co-founder & CEO',
        title: 'Publicista · asesor estratégico · PM',
        accent: '#FF5A1F',
        credentials: [
          'Publicista · Universidad Adolfo Ibáñez',
          'Master en Marketing y Comunicación · UCM Madrid',
          'MBA · Pontificia Universidad Católica de Chile (UC)',
          'Performance + IA aplicada · stack Claude · Higgsfield · Gemini'
        ]
      },
      freddy: {
        name: 'Freddy Castro',
        role: 'Co-founder & CFO',
        title: 'Auditor · asesor estratégico · PM',
        accent: '#F2C12B',
        credentials: [
          'Contador Auditor · NIIF · auditoría externa Big Four',
          'MBA · Universidad de Barcelona',
          'Stack técnico · arquitectura Hapee CRM',
          'Gobierno financiero del holding · operación cliente'
        ]
      },
      callout: 'Ambos cofundadores actúan como <b>asesores estratégicos y project managers</b> de los proyectos que tomamos — no son figuras decorativas. Sebastián lidera la dirección creativa, comercial y publicitaria · Freddy lidera la operación, finanzas y compliance. Cada cliente tiene acceso directo a ambos: pueden levantar el teléfono y resolver con quien firma. <em>No hay capas que diluyan el mensaje.</em>'
    },

    stack: {
      hito: {
        tag: 'HITO 2026',
        title: 'Esta semana <span class="hi">dejamos de usar Adobe + Figma</span>',
        body: 'El equipo migró 100% de los flujos de diseño y producción audiovisual al nuevo stack IA-nativo: <b>Higgsfield</b> (video), <b>CapCut</b> (edición), <b>Gamma</b> (decks/landings) y <b>Claude/Gemini</b> (copy + design assistance). Resultado: tiempos de producción <em>4-8× más rápidos</em>, costo de licencias <em>−85%</em>, calidad output <em>igual o superior</em> medida en aprobación cliente. <b>Esta es la ventaja operativa que habilita el servicio a La Estampa con frecuencia mensual sin disparar costo.</b>'
      },
      categories: [
        {
          cat: 'Inteligencia · IA generativa',
          tag: 'EL CEREBRO',
          color: '#FF5A1F',
          desc: 'Lo que escribimos, programamos, analizamos e investigamos pasa primero por estos modelos. Reemplaza horas de trabajo humano en research, copy y código.',
          items: [
            { name: 'Claude (Anthropic)', use: 'Modelo principal · todas las versiones (Sonnet · Opus · Haiku) · estrategia, copy, análisis, código, design, agentes' },
            { name: 'Gemini (Google)',    use: 'Análisis multimodal · investigación profunda · stack Google nativo · ventana 2M tokens' }
          ]
        },
        {
          cat: 'Producción visual · contenido + diseño',
          tag: 'LA FÁBRICA',
          color: '#FF8E29',
          desc: 'Reemplaza el flujo Adobe + Figma anterior. Producimos reels, videos, decks, mockups y propuestas en una fracción del tiempo y costo.',
          items: [
            { name: 'Higgsfield',  use: 'Generación de video con IA · escenas hyperrealistas · personajes consistentes · reels de campaña 4K-8K' },
            { name: 'CapCut',      use: 'Edición video · subtítulos automáticos · efectos · cortes inteligentes · cross-platform export' },
            { name: 'Gamma',       use: 'Diseño de presentaciones, decks, propuestas, landing pages · output editable y exportable a Google Slides/PDF' }
          ]
        },
        {
          cat: 'Investigación · análisis profundo',
          tag: 'EL INVESTIGADOR',
          color: '#0A66C2',
          desc: 'Procesamiento de PDFs, papers, websites, datasets para insights de mercado, briefs de cliente y benchmarking competitivo. Crítico para auditorías de marca + benchmarks B2B de La Estampa.',
          items: [
            { name: 'NotebookLM (Google)',                use: 'Cargamos 50+ documentos del cliente · genera análisis cruzados · identifica patrones · podcast automático' },
            { name: 'Google AI Studio',                   use: 'Lab de prompting + multimodal · prototipos de agentes · análisis de imagen masivo' },
            { name: 'Google Labs (Whisk · ImageFX · Veo)',use: 'Suite experimental · features pre-release · ventaja competitiva por timing' }
          ]
        },
        {
          cat: 'CRM + automatización · stack propio',
          tag: 'EL OPERADOR',
          color: '#22C55E',
          desc: 'Hapee CRM (whitelabel del holding) operando como CRM, ESP, automation, landing builder, agentes IA y forms. Dogfooding total.',
          items: [
            { name: 'Hapee CRM', use: 'CRM + ESP + automation flows + agentes IA propios + landing pages + forms · todo unificado · costo ~50% menor que HubSpot' }
          ]
        }
      ],
      callout: 'El stack no es vanity tech — es lo que hace posible entregar campañas multi-canal, 3 propuestas de web + RRSS y embudo Hapee + IA a LET sin que el costo se dispare. Una agencia tradicional con Adobe/Figma + producción humana cobra 3-4× más por el mismo output. Operando con este stack, asignamos a LET un equipo dedicado a un costo competitivo, manteniendo calidad enterprise + compliance. <em>LET recibe el beneficio del stack sin pagar la curva de aprendizaje.</em>'
    }
  },

  /* ============= BENCHMARK + MATRIZ COMPETITIVA =============
     Doble cancha competitiva (validado con LET):
     · DIRECTO TEXTIL (Bulo · Cotton Print · Textil Digital · Maule · Sublimasur · Coté Conde):
       compiten por el cliente que llega buscando "estampado de polera/uniforme".
     · INDIRECTO MERCH B2B (Nova Promo · Zona Promo · Promobrands · Branding Chile · Prom Promo · Bestseller):
       compiten por el budget de "merch corporativo / activación de marca" cuando el
       cliente busca poleras + tazas + lanyards en un solo proveedor. Acá LET pelea
       con catálogos amplios y volúmenes — su ventaja es la calidad del estampado real
       versus el merch importado/sublimado en serie. */
  market: [
    /* DIRECTO CHILE · COMPETIDORES TEXTILES REALES */
    { name: 'Bulo',                     type: 'directo',   bucket: 'Estampado textil CL',  focus: 'Estampado textil + confección · público B2B/B2C urbano',  web: 7, gap: 'Comunicación cuidada e instalada · web ordenada · falta diferenciación de oficio técnico en copy.' },
    { name: 'Cotton Print',             type: 'directo',   bucket: 'Estampado textil CL',  focus: 'Estampado en algodón · DTF/sublimación · catálogo amplio',  web: 6, gap: 'Catálogo extenso pero web tipo brochure · sin storytelling editorial · UX correcta no diferencial.' },
    { name: 'Textil Digital',           type: 'directo',   bucket: 'Estampado textil CL',  focus: 'Estampado digital textil · sublimación + DTF · B2B operativo', web: 6, gap: 'Foco técnico bien resuelto · web sin voz editorial · no compite por audiencia premium con narrativa.' },
    { name: 'Maule Estampados',         type: 'directo',   bucket: 'Estampado textil CL',  focus: 'Estampado masivo regional · pricing agresivo',              web: 5, gap: 'Web tipo catálogo plano · sin B2B · sin storytelling editorial.' },
    { name: 'Sublimasur',               type: 'directo',   bucket: 'Estampado textil CL',  focus: 'Sublimación masiva para retail',                            web: 6, gap: 'Buen tráfico orgánico · UX 2018 · sin línea B2B premium.' },
    { name: 'Coté Conde Estampados',    type: 'directo',   bucket: 'Estampado textil CL',  focus: 'Boutique creativo · IG-first',                              web: 7, gap: 'Identidad fuerte en IG · sin web de conversión · escala limitada.' },

    /* INDIRECTO CHILE · MERCH B2B (compiten por presupuesto de activación / regalo corporativo) */
    { name: 'Nova Promo (Nova Group)',  type: 'indirecto', bucket: 'Merch B2B CL',         focus: 'Merch corporativo · catálogo amplio importado + estampado · clientes corporativos grandes', web: 7, gap: 'Catálogo enorme + músculo comercial · pero estampado tercerizado · sin storytelling del oficio textil · vulnerable cuando el cliente pide calidad real.' },
    { name: 'Zona Promo',               type: 'indirecto', bucket: 'Merch B2B CL',         focus: 'Promocionales corporativos · catálogo + estampado básico',  web: 6, gap: 'Web catálogo · foco en cantidad y precio · sin diferenciación de técnica de estampado · LET puede ganar terreno B2B premium.' },
    { name: 'Promobrands',              type: 'indirecto', bucket: 'Merch B2B CL',         focus: 'Regalo corporativo + textil + accesorios',                  web: 6, gap: 'Player tradicional B2B · UX correcta · sin narrativa de oficio · LET es alternativa premium cuando el cliente quiere proyectar calidad.' },
    { name: 'Branding Chile',           type: 'indirecto', bucket: 'Merch B2B CL',         focus: 'Branded merchandise + activaciones',                        web: 7, gap: 'Buena identidad visual · cliente medio-alto · sin diferencial técnico en estampado · LET compite con calidad real del producto final.' },
    { name: 'Prom Promo',               type: 'indirecto', bucket: 'Merch B2B CL',         focus: 'Promocionales masivos a empresas',                          web: 5, gap: 'Foco volumen + precio · sin storytelling · LET no compite directo en precio pero sí en proyectos donde la marca importa.' },
    { name: 'Bestseller Promocionales', type: 'indirecto', bucket: 'Merch B2B CL',         focus: 'Catálogo extenso de promocionales · clientes recurrentes',  web: 6, gap: 'Volumen + servicio · sin proyectar oficio textil · vulnerable en proyectos donde el cliente valida calidad del estampado.' },

    /* REFERENTES GLOBALES (no compiten directo · benchmark UX/comunicación) */
    { name: 'Custom Ink (USA)',         type: 'global',    bucket: 'Referente UX',         focus: 'Estampado on-demand B2C/B2B con configurador',              web: 9, gap: 'Referente UX para configurador · imposible imitar precio · sí imitar narrativa técnica.' },
    { name: 'Printful (USA)',           type: 'global',    bucket: 'Referente UX',         focus: 'Print-on-demand con dropshipping',                          web: 9, gap: 'Modelo SaaS · no aplica modelo · sí referencia de mockups + sistema visual.' },

    /* US · OBJETIVO */
    { name: 'La Estampa Textil',        type: 'us',        bucket: 'Objetivo',             focus: 'Estampado textil con oficio · sublimación + DTF + confección + merch B2B', web: 6, gap: 'Tiene oficio + casos sólidos + tecnología seria. Falta sistema digital que organice los públicos (B2B / B2C / recurrente) y lo proyecte con criterio editorial. Doble cancha: textiles directos + merch B2B premium.' }
  ],

  /* ============= INSIGHTS DEL MERCADO B2B ============= */
  insights: [
    {
      kicker: 'INSIGHT 01 · OFICIO',
      title: 'El comprador B2B compra confianza · no precio. El que muestra oficio se gana el partner. El que vende "rápido y barato" se gana la cotización.',
      body: 'Una gerenta de marca, un productor o una agencia eligen proveedor por una razón sola: confían que el resultado va a salir como prometiste. Cuando entras compitiendo por precio bajo, te miden contra todos los demás y te reemplazan cuando hay uno más barato. Cuando entras mostrando oficio real — qué máquinas usas, cómo gestionas color, qué pasa si la talla sale mal — pasas a ser el partner que no se cambia.',
      use: 'La web tiene que demostrar oficio en cada scroll: plotters Epson visibles, diferencia técnica entre sublimación y DTF, gestión de color paso a paso, tiempos reales de entrega. Priscila aparece como directora creativa explicando cómo se hace · no como vendedora cerrando.'
    },
    {
      kicker: 'INSIGHT 02 · DEADLINE',
      title: 'En activación de marca, el plazo gana al precio · siempre.',
      body: 'Lunes el brief, viernes en bodega del cliente. La diferencia entre un proveedor "ok" y uno "imprescindible" es cumplir el plazo crítico con calidad. La Estampa ya lo hace operativamente — falta comunicarlo como promesa de marca.',
      use: 'Hero de la web + landing merch B2B: "lunes el brief, viernes en bodega del cliente". Reforzar con tracking visible del estado del pedido (etapa, fecha, contacto).'
    },
    {
      kicker: 'INSIGHT 03 · PORTAFOLIO',
      title: 'LET tiene credenciales sólidas. Lo que falta es organizarlas como activos editoriales.',
      body: 'En 4 años LET acumuló trabajos con productoras, agencias, inmobiliarias, retail y marcas con cobertura nacional — incluyendo producciones culturales y vestuario para TV. Cada caso bien documentado (con permiso del cliente y métricas honestas) es un activo de venta. Hoy esos casos existen pero no están ordenados como prueba social estructurada.',
      use: 'Carrusel de casos en web madre + landing B2B · cada uno con foto, ticket cumplido, deadline real. Sin centrar la narrativa en un único caso — son varios proyectos sólidos que en conjunto demuestran oficio.'
    },
    {
      kicker: 'INSIGHT 04 · INICIATIVAS COMPLEMENTARIAS',
      title: 'La línea eco y la Ley REP son iniciativas en desarrollo, no el pilar central de LET.',
      body: 'LET reutiliza mermas (camas y sacos para perros donados a fundaciones) y trabaja con bases textiles más limpias cuando el brief lo permite. Es una iniciativa real en desarrollo, sin grandes números aún. Honesto: no la inflamos como activo principal. Va como línea complementaria que se comunica cuando suma valor a un cliente específico (corporativo con meta ESG).',
      use: 'Mención complementaria en web (no pillar entero). Anexo opcional en cotización B2B cuando el cliente lo pide. Sin storytelling de greenwashing, sin "perros donados" como bandera principal de comunicación.'
    },
    {
      kicker: 'INSIGHT 05 · GOOGLE',
      title: 'Google Ads ya rinde · el problema es que no escala porque la web actual castiga el quality score.',
      body: '70-80 cierres/mes con la web actual es resultado de la fuerza del search intent + el oficio operativo. Si se entrega cada campaña a una landing dedicada con copy y proof específicos del servicio, el CPL baja 30-50% y el ticket promedio sube por mejor calificación de lead.',
      use: 'Always-on con landings dedicadas · estampado textil + merch B2B + activaciones + por-metro · cada una con su funnel propio y métricas separadas.'
    }
  ],

  /* ============= ESTRATEGIA COMUNICACIONAL ============= */
  comm: {
    territory: 'Oficio textil con criterio · estampado especializado · proveedor que sabe lo que hace.',
    tone: {
      voice: 'Especialista textil que explica con claridad. Honesta, técnica, sin marketing-speak ni lenguaje aspiracional. La voz de quien tiene 4 años de oficio y los puede defender en cualquier conversación.',
      do: [
        'Hablamos chileno claro · "este metro de tela", "los plotters Epson", "el deadline real".',
        'Mostramos cómo se hace · BTS de taller, no solo producto final.',
        'Citamos materiales y técnicas con precisión (qué tela aguanta DTF, gramaje, durabilidad).',
        'Reconocemos al cliente que confió primero · cadena de prueba social honesta.'
      ],
      dont: [
        'No prometemos "el más barato" pero tampoco hacemos como si el precio no importara.',
        'No usamos "calidad" como adjetivo · mostramos calidad con detalle técnico.',
        'No copiamos el lenguaje genérico de catálogo de mayoristas.',
        'No inflamos casos puntuales · son credenciales entre varias, no narrativa única.',
        'No usamos lenguaje aspiracional tipo "marcas que importan" / "premium" / "lujo".'
      ]
    },
    pillars: [
      {
        num: '01', name: 'Oficio técnico', weight: 28, kicker: 'DIFERENCIACIÓN',
        desc: 'Educación sobre el oficio: sublimación vs DTF, gestión de color, qué tela aguanta qué uso, gramajes, durabilidad. Construye autoridad técnica natural — Priscila y el equipo explican lo que hacen todos los días. Baja la fricción de cotización porque el lead llega informado.',
        formats: ['Reel 30s explicativo (Priscila o equipo a cámara)', 'Carrusel comparativo técnico', 'Blog SEO técnico', 'Cápsulas video del equipo'],
        cadence: '3 al mes'
      },
      {
        num: '02', name: 'Casos reales', weight: 24, kicker: 'PRUEBA SOCIAL',
        desc: 'Trabajos hechos para clientes reales: productoras, agencias, inmobiliarias, retail, marcas con cobertura nacional. Antes/después, BTS de taller, deadline cumplido. Cada caso vale por sí mismo — no inflamos uno como bandera única.',
        formats: ['Carrusel IG/LinkedIn por caso', 'Reel BTS 30-60s', 'Caso PDF descargable', 'Post largo LinkedIn'],
        cadence: '3 al mes'
      },
      {
        num: '03', name: 'Merch B2B', weight: 18, kicker: 'CONVERSIÓN B2B',
        desc: 'Kits corporativos, onboarding, regalo cliente, activaciones, uniformes. Foco partner de agencias y productoras. Mockups, cotización express, time-to-bodega visible. Sistema, no pedido suelto.',
        formats: ['Carrusel mockups', 'Caso agencia/productora', 'Post LinkedIn long-form', 'PDF capacidades B2B'],
        cadence: '2 al mes'
      },
      {
        num: '04', name: 'B2C operativo', weight: 14, kicker: 'FLUJO + LIQUIDEZ',
        desc: 'Cliente final transaccional: polera única, regalo personalizado, cumpleaños, despedida, evento privado. Es el flujo que sostiene la operación día a día. Necesita su propio canal de comunicación visible y CTAs directos.',
        formats: ['Reel producto B2C', 'Carrusel "regalo perfecto"', 'Stories Q&A pedidos cortos', 'CTA WhatsApp directo'],
        cadence: '2 al mes'
      },
      {
        num: '05', name: 'Voz Priscila · fundadora con oficio', weight: 10, kicker: 'AUTORIDAD TÉCNICA',
        desc: 'Priscila aparece como fundadora que conoce el oficio profundamente y lo explica. No es creator-content ni cara de redes — es la persona que decide qué tela aguanta qué uso, cómo gestionar el color y por qué un brief funciona o no. Construye autoridad técnica natural, no influencer-energy.',
        formats: ['Reel explicación técnica a cámara (1ra persona)', 'Post LinkedIn sobre decisión de oficio concreta', 'Quote card de criterio textil', 'Entrevista invitada en podcast del sector'],
        cadence: '1-2 al mes'
      },
      {
        num: '06', name: 'Iniciativas eco · complementaria', weight: 4, kicker: 'EN DESARROLLO',
        desc: 'Reutilización de mermas (camas y sacos donados), uso de bases textiles más limpias cuando el brief lo permite, conciencia con Ley REP. Comunicado honestamente como iniciativa en desarrollo, no como pilar central. Aparece cuando suma valor a un cliente específico, no como bandera permanente.',
        formats: ['Mención puntual en stories', 'Anexo opcional en cotización B2B'],
        cadence: '1 al mes o reactivo'
      },
      {
        num: '07', name: 'Cultura textil chilena', weight: 2, kicker: 'BRAND LIFT',
        desc: 'Capitalizar momentos del año relevantes para el negocio (temporada activación, fechas patrias, fin de año, vuelta a clases). Sin forzar "cultura pop" como bandera identitaria.',
        formats: ['Reactivo IG/TikTok', 'Edición especial'],
        cadence: 'Reactivo'
      }
    ]
  },

  /* ============= ESTRATEGIA GRÁFICA ============= */
  graphic: {
    direction: 'Editorial Textil · Tinta y Crudo',
    thesis: 'Oficio editorial con paleta de tinta de imprenta + crudo de textil sin teñir + acento DTF naranja saturado. Tipografía display industrial condensed (Bricolage Grotesque) + serif italiana editorial (Instrument Serif) + sans funcional limpia (Geist). Cero gradientes de moda · cero stock imagery · cero íconos genéricos. Toda la marca respira oficio.',
    refs: 'Teemill (UK) · Aquafil Econyl · Apartamento Magazine · Foundry Co. · Aesop graphic system · Mejuri editorial',
    palette: {
      bg: '#0B0A08',          /* tinta de imprenta · negro cálido */
      bg2: '#15140F',          /* tinta + crudo · panel oscuro */
      ink: '#F4ECDC',          /* papel manteca · crudo textil */
      inkSoft: '#94897A',      /* lino envejecido */
      line: 'rgba(244,236,220,0.07)',
      accent: '#FF5A1F',       /* DTF · acento técnico */
      accent2: '#C9F25C',      /* eco lime · línea circular */
      accent3: '#F2C12B',      /* hilo dorado · award */
      accentDeep: '#B53A0F'
    },
    type: {
      display:   { family: 'Bricolage Grotesque', weight: 700, role: 'Titulares · headlines de sección' },
      editorial: { family: 'Instrument Serif',    weight: 400, italic: true, role: 'Tipos editoriales · piezas con voz' },
      body:      { family: 'Geist',                weight: 400, role: 'Texto corrido · UI · datos' },
      mono:      { family: 'Geist Mono',           weight: 500, role: 'Numerales · kickers · etiquetas técnicas' }
    },
    moods: [
      { id: 'taller',   name: 'Taller de tinta',      tag: 'BTS, plotters, mesa de corte, paños de prueba',         use: 'Casos · oficio · educativo' },
      { id: 'editorial', name: 'Editorial crudo',     tag: 'Telas con luz natural, hilos, etiquetas, costura visible', use: 'Hero · piezas de marca · línea pro' },
      { id: 'pop',      name: 'Color saturado',       tag: 'Color saturado para activaciones, alta energía, packaging', use: 'Activaciones · campañas masivas · brand lift' },
      { id: 'eco',      name: 'Iniciativas complementarias', tag: 'Verde sutil para anexo eco · mención discreta de mermas', use: 'Línea complementaria · cuando suma valor al cliente' }
    ],
    do: [
      'Foto editorial de taller con luz natural · texturas reales de tela visibles.',
      'Color naranja DTF como sello — usar con disciplina, no decorar todo.',
      'Tipografía display en mayúsculas + condensed + tracking apretado · evoca imprenta.',
      'Itálica editorial para piezas con voz · jamás para datos.',
      'Grid editorial 12 col con generosa caja blanca · respeto al oficio.'
    ],
    dont: [
      'Sin gradientes coloridos tipo SaaS.',
      'Sin stock photo · cero imagen genérica.',
      'Sin emojis decorativos en piezas formales.',
      'Sin íconos de "calidad/rapidez/precio" genéricos · usamos foto real.',
      'Sin más de 2 colores acento por pieza.'
    ]
  },

  /* ============= EMBUDO DE CONVERSIÓN · HAPEE + IA ============= */
  funnel: {
    overview: 'Embudo always-on con Hapee como CRM operativo + agente IA filtrando prospectos en primera línea. Separación inmediata cliente nuevo vs antiguo · enrutado por servicio · cotización express con SLA visible · cierre asistido por humano.',
    stages: [
      {
        num: '01', name: 'TOFU · Captura', kpi: 'CPL · CTR · session quality',
        desc: 'Tráfico desde Google Ads (always-on) + Meta (testeo de creativo) + orgánico social + referido. Cada origen aterriza en landing específica: estampado textil, merch B2B, activaciones, por-metro.',
        levers: [
          'Search Ads always-on con landings dedicadas (quality score 8+)',
          'Meta · sistema rotativo de testeo de creativo · ganadores escalados',
          'IG/LinkedIn orgánico con CTA explícito a cotización',
          'SEO en cluster técnico: "DTF Chile", "estampado textil", "merch B2B", "estampado por metro"',
          'Referido de agencias y productoras con incentivo'
        ]
      },
      {
        num: '02', name: 'MOFU · Filtro IA', kpi: 'Tasa filtro · tiempo respuesta · % cliente antiguo identificado',
        desc: 'Agente IA dentro de Hapee recibe el lead, identifica antiguo/nuevo, califica intención (cotizar / informarse / soporte), enruta. Cliente antiguo va directo a ejecutivo + historial. Nuevo recibe respuesta automática con próximos pasos en menos de 3 minutos.',
        levers: [
          'Detección automática de email/teléfono contra base CRM',
          'Clasificación de intención por NLP del primer mensaje',
          'Respuesta automática con SLA visible ("cotización en <24h hábiles")',
          'Recolección de variables clave: tipo de prenda, cantidad, fecha de entrega, presupuesto',
          'Escalamiento a humano cuando el lead supera umbral (B2B >100 und o palabra clave "agencia/productora")'
        ]
      },
      {
        num: '03', name: 'BOFU · Cotización', kpi: 'Conversión cotización→pedido · ticket prom · cycle time',
        desc: 'Ejecutivo arma cotización con plantillas pre-cargadas en Hapee. Cotización digital con mockups, opción de aprobar online, integración con calendario para confirmación de entrega.',
        levers: [
          'Plantillas de cotización por servicio · respuesta en <24h',
          'Mockup visual incluido (no solo precio)',
          'Pago online con cuotas vía Mach/Webpay/Transferencia',
          'Recordatorios automáticos a las 24h, 72h, 7d',
          'Descuento por anticipación o repetición de cliente'
        ]
      },
      {
        num: '04', name: 'POST · Producción + Entrega', kpi: 'On-time delivery · NPS · tasa de re-pedido',
        desc: 'Pedido aprobado entra a producción con tracking visible para el cliente. Updates automáticos en cada etapa: aprobación gráfica → impresión → confección → despacho. Hapee envía notificaciones push + email.',
        levers: [
          'Tracking público de pedido con código',
          'Updates automáticos por etapa',
          'Encuesta NPS 7 días post-entrega',
          'Foto de entrega final cargada al CRM',
          'Activación campaña "repítelo en 90 días"'
        ]
      },
      {
        num: '05', name: 'LOOP · Retención', kpi: 'LTV · tasa recurrencia · referido NPS',
        desc: 'Cliente antiguo entra a flujo de retención: campañas dirigidas, descuento por aniversario, invitación a "Línea Eco", caso de éxito si autoriza. Buscamos LTV >$300k cliente B2B activo.',
        levers: [
          'Email mensual segmentado por industria del cliente',
          'Lookalike Meta sobre clientes top',
          'Programa de referido B2B con incentivo (15% segunda compra)',
          'Editorial trimestral con caso de cliente (con permiso)',
          'Up-sell a Línea Eco / Merch / Activaciones según historial'
        ]
      }
    ]
  },

  /* ============= ALWAYS-ON GOOGLE ============= */
  googleAds: {
    thesis: 'Google es el motor probado del negocio · 70-80 cierres/mes vienen de ahí. La oportunidad no es "probar otra cosa", es escalar lo que ya funciona con estructura más quirúrgica: 4 líneas always-on con landings dedicadas y máxima coherencia search→ad→landing.',
    structure: [
      {
        num: 'L1', name: 'Estampado textil · core', focus: 'B2B + B2C operativo',
        desc: 'Bottom-of-funnel · intención de compra alta. Foco en sublimación, DTF, "estampado de poleras", "estampado uniforme", "estampado textil". Aterriza en landing dedicada · estampado textil.',
        budgetShare: '38%',
        keywords: ['estampado de poleras', 'estampado textil', 'DTF Chile', 'sublimación textil', 'estampar uniforme empresa'],
        landing: 'Landing Estampado Textil'
      },
      {
        num: 'L2', name: 'Merchandising B2B', focus: 'Empresas + agencias + productoras',
        desc: 'Audiencia premium · ticket mayor. Foco en "merchandising corporativo", "kits empresa", "regalo cliente", "uniforme marca". Aterriza en landing B2B con cotizador.',
        budgetShare: '32%',
        keywords: ['merchandising corporativo Chile', 'kit corporativo', 'regalo empresa personalizado', 'uniforme corporativo', 'producto promocional'],
        landing: 'Landing Merchandising B2B'
      },
      {
        num: 'L3', name: 'Activación · eventos', focus: 'Agencias + productoras + marcas',
        desc: 'Estacional con peaks · noviembre-marzo (festivales/eventos) y agosto-septiembre (fiestas patrias). Foco en "poleras para activación", "estampado urgente", "producción evento".',
        budgetShare: '18%',
        keywords: ['poleras activación marca', 'estampado urgente', 'producción evento textil', 'merchandising festival'],
        landing: 'Landing Estampado · módulo Eventos'
      },
      {
        num: 'L4', name: 'Estampado por metro', focus: 'Confeccionistas + diseñadores',
        desc: 'Nicho técnico · alto ticket recurrente. Foco en "tela estampada por metro", "estampado para confección", "sublimación por metro". Atrae confeccionistas que repiten.',
        budgetShare: '12%',
        keywords: ['tela estampada por metro', 'sublimación por metro Chile', 'estampado para diseñador', 'tela personalizada confección'],
        landing: 'Web madre · módulo Por Metro'
      }
    ],
    rules: [
      'Quality Score objetivo: 8+ en todos los keywords core. Si baja, se pausa y se rearma landing.',
      'Cada anuncio responsivo lleva 8 títulos + 4 descripciones + extensiones (precio, llamada, sitelinks de servicio).',
      'Tracking server-side con CAPI · GA4 + Hapee · cero pérdida de datos por bloqueador.',
      'Reporte semanal · CPL por línea · % cierre por línea · ticket prom por línea.',
      'Mensual: revisión de keyword negativo + ajuste de pujas + rotación de creativo.'
    ]
  },

  /* ============= META · TESTEO DE ANUNCIOS GANADORES ============= */
  metaAds: {
    thesis: 'Meta no es donde está la demanda · es donde se construye la marca y se encuentran ganadores creativos a bajo costo. Sistema: 3 fases · testeo → escalado → retención.',
    phases: [
      {
        num: 'F1', name: 'Testeo · descubrimiento', objective: 'Identificar el creativo + el hook ganador',
        desc: '4 variables a probar por servicio: (1) hook (oficio · deadline · caso real · explicación técnica) · (2) formato (video taller · carrusel mockup · foto producto · UGC cliente) · (3) público (LAL clientes · interés textil/marcas · agencias · cliente final B2C) · (4) CTA (cotizar · descargar PDF · WhatsApp).',
        budget: '$8 USD/día por variante · 4 variantes por servicio · 3 servicios = $96/día',
        kpi: 'CPM bajo + CTR >1.2% + Hook rate >25% video',
        duration: '7-10 días por test'
      },
      {
        num: 'F2', name: 'Escalado · ganadores', objective: 'Llevar el ganador al máximo de eficiencia',
        desc: 'Variante que pasa el test entra a Advantage+ con presupuesto multiplicado 3-5×. Optimización por conversión real (lead calificado · no solo formulario). Lookalikes 1-3% sobre la base de clientes con LTV >$100k.',
        budget: '$30-60 USD/día por ganador · escalado por etapas',
        kpi: 'CPL <$8 USD · cierre >12% · ticket prom $50k+',
        duration: '30-90 días por creativo · refresh al detectar fatiga'
      },
      {
        num: 'F3', name: 'Retención · clientes', objective: 'Vender más a los que ya compraron',
        desc: 'Campañas dinámicas con catálogo · audiencia segmentada por historial (compró estampado → ofrecer merch; compró merch → ofrecer activación). Email + Meta sincronizados.',
        budget: '$15-25 USD/día',
        kpi: 'ROAS >4× · tasa recurrencia >35%',
        duration: 'Always-on'
      }
    ],
    creativeMatrix: [
      { ang: 'OFICIO',       hook: '"Así se imprime una polera que aguanta 50 lavados"',         format: 'Reel taller · plotter Epson en acción',          cta: 'Cotizar mi pedido' },
      { ang: 'DEADLINE',     hook: '"Lunes el brief, viernes en tu bodega"',                    format: 'Carrusel proceso 5 slides',                       cta: 'Pedir cotización express' },
      { ang: 'CASO',         hook: '"Cómo resolvimos 500 poleras de activación en 5 días"',     format: 'Reel BTS · 30s · permiso del cliente',            cta: 'Ver casos' },
      { ang: 'B2C',          hook: '"Tu polera personalizada en 5 días · 1 unidad o más"',      format: 'Reel producto B2C · cliente final',               cta: 'Pedir mi polera' },
      { ang: 'EXPLICACIÓN',  hook: '"Priscila explica: ¿DTF o sublimación para tu marca?"',      format: 'Reel cara · 60s · sub. abajo',                    cta: 'Ver el video completo' },
      { ang: 'COMPLEMENTARIO', hook: '"Anexo de mermas reutilizadas si lo necesitas en tu compra B2B"', format: 'Carrusel iniciativa eco · 4 slides',            cta: 'Pedir mi cotización con anexo' }
    ]
  },

  /* ============= WEB MADRE · ARQUITECTURA ============= */
  motherWeb: {
    name: 'laestampatextil.cl · v2.0',
    thesis: 'Web madre con 3 puertas claras según público (B2B / B2C / recurrente). Editorial pero sin lenguaje aspiracional · oficio técnico al centro · 2 landings dedicadas para campañas. Cero relleno, todo conduce a cotización o pedido.',
    sections: [
      { num: '01', id: 'hero',       label: 'Hero · video taller real',
        desc: 'Titular en display condensed · subtítulo legible · CTA primario "Cotizar pedido" + secundario "Ver capacidades". Loop de 12s del plotter Epson trabajando.' },
      { num: '02', id: 'puertas',    label: '3 puertas · B2B / B2C / Por metro',
        desc: 'Grid de 3 tiles con derivación clara según público: Merch B2B (empresa/agencia), Estampado B2C (cliente final, 1+ unidad) y Por metro (confeccionistas). Cada puerta conduce a su landing o módulo.' },
      { num: '03', id: 'cases',      label: 'Casos · varios proyectos sólidos',
        desc: 'Carrusel horizontal con casos de productoras, inmobiliarias, agencias, retail, audiovisual. Cada caso por sí mismo, sin centrar la narrativa en uno solo. Foto, tag, deadline cumplido.' },
      { num: '04', id: 'oficio',     label: 'Oficio · cómo se imprime',
        desc: 'Cards técnicas: Sublimación · DTF · Estampado por metro · Confección + Bordado. Con foto BTS y diferencia operativa explicada en 3 líneas.' },
      { num: '05', id: 'priscila',   label: 'Voz · Priscila explica',
        desc: 'Foto + bloque editorial breve. Priscila como fundadora con oficio que explica decisiones técnicas (no como influencer ni cara de marketing).' },
      { num: '06', id: 'process',    label: 'Cómo trabajamos · 5 etapas',
        desc: 'Brief → cotización <24h → mockup → producción → entrega. Cada etapa con tiempo y entregable visible.' },
      { num: '07', id: 'clients',    label: 'Clientes que confían',
        desc: 'Banda de logos con permiso · agencias, productoras, marcas, retail. Prueba social directa, sin storytelling inflado.' },
      { num: '08', id: 'iniciativas',label: 'Iniciativas en desarrollo',
        desc: 'Bloque breve y honesto: reutilización de mermas, base textiles más limpias cuando el brief lo permite, Ley REP. Línea complementaria, no pilar central. Sin pirotecnia ESG.' },
      { num: '09', id: 'cta',        label: 'CTA final · cotización + WhatsApp',
        desc: 'Formulario integrado Hapee · 5 campos máx · tracking server-side. WhatsApp como alternativa visible. Separación clara B2B vs B2C en el form.' }
    ],
    techStack: 'Stack moderno · HTML5 semántico + Tailwind v4 compilado + JS ES2024 + GSAP (lo mismo que Linear, Vercel, Stripe). Landings: vanilla single-file (LCP < 1.5s, A/B testeables). Web madre: vanilla o Astro + Tailwind (decisión kick-off). Tracking: GA4 + Pixel + CAPI server-side + Hapee API. Deploy: Dokploy gestionado por Digitals. <b>Entregamos repositorio Git completo + código fuente al lanzamiento — LET es dueña del 100%</b>. Editable a futuro con prompts de IA (Claude, ChatGPT, Cursor) — sin admin UI, sin curva CMS. Sin WordPress, sin plugins. Ver sección Propiedad + Plataforma para detalles.'
  },

  /* ============= LANDING 1 · ESTAMPADO TEXTIL ============= */
  landEstampado: {
    name: 'Landing · Estampado Textil',
    target: 'B2B operativo + B2C transaccional · marcas, agencias, productoras y cliente final comprando 1-1.000 unidades',
    accent: '#FF5A1F',
    sections: [
      { num: '01', label: 'Hero · "Tinta firme en tu prenda"', detail: 'Video taller 8s · headline directo · CTA "Cotizar pedido" · prueba "70+ cierres/mes"' },
      { num: '02', label: 'Servicios técnicos', detail: 'Sublimación · DTF · Estampado por metro · Bordado + terminaciones · cada uno con foto real, durabilidad lavados, mejor uso' },
      { num: '03', label: 'Por qué LET', detail: '4 pilares: plotters Epson certificados, deadline real, gestión de color, oficio de 4 años' },
      { num: '04', label: 'Cómo funciona', detail: '5 pasos · brief → mockup → aprobación → producción → entrega · timeline visible' },
      { num: '05', label: 'Casos reales', detail: 'Selección de proyectos B2B y B2C · agencia activación + inmobiliaria + retail + producción audiovisual. Foto + ticket cumplido' },
      { num: '06', label: 'Cotización express', detail: 'Form de 6 campos · cantidad, prenda, fecha, brief, contacto · responde IA en 3 min. Separación B2B vs B2C visible' },
      { num: '07', label: 'Garantía + FAQ', detail: 'FAQ con 8 preguntas reales · "¿qué tela aguanta DTF?", "¿pueden producir 500 en 5 días?", "¿desde cuántas unidades?"' }
    ],
    proofPoints: [
      { k: '70-80', v: 'cierres/mes hoy con esta línea' },
      { k: '<24h',  v: 'tiempo respuesta cotización' },
      { k: '5 días',v: 'producción estándar 200 und' },
      { k: 'Epson', v: 'plotters certificados industriales' }
    ]
  },

  /* ============= LANDING 2 · MERCHANDISING B2B ============= */
  landMerch: {
    name: 'Landing · Merchandising B2B',
    target: 'Gerentes de marca + jefes de marketing + procurement de corporativos. Pedidos 100-2.000 unidades, ticket promedio $400k+',
    accent: '#C9F25C',
    sections: [
      { num: '01', label: 'Hero · "Merch corporativo con oficio textil"', detail: 'Hero · foto kit corporativo real · CTA "Solicitar capacidades" · prueba "marcas que confiaron"' },
      { num: '02', label: 'Líneas B2B', detail: 'Kits onboarding · regalo cliente · activación · uniforme corporativo · merch eventos. Card por línea con foto y unit cost referencial' },
      { num: '03', label: 'Catálogo curado', detail: 'Selección de productos con materialidad explícita · cada uno con base textil, mínimo de unidades, time-to-bodega' },
      { num: '04', label: 'Anexo iniciativas eco · opcional', detail: 'Línea complementaria · cliente puede pedir cotización con anexo de mermas reutilizadas o bases textiles más limpias cuando aplique. No es pilar, es opción.' },
      { num: '05', label: 'Casos B2B', detail: 'Marca retail (200 ingresos/mes), agencia activación, productora · varios proyectos en paralelo. Caso con resultado concreto, sin inflar uno solo' },
      { num: '06', label: 'Proceso B2B', detail: 'Brief → cotización con mockup → aprobación → producción → entrega. SLA explícito por etapa' },
      { num: '07', label: 'PDF capacidades', detail: 'Descargable con un email · documento vendible · genera lead calificado' },
      { num: '08', label: 'CTA · cotización dedicada', detail: 'Form B2B con campos: empresa, contacto, presupuesto rango, fecha, brief. Asignación directa a ejecutivo B2B' }
    ],
    proofPoints: [
      { k: '$400k+', v: 'ticket prom. cliente B2B activo' },
      { k: '$50k',   v: 'ticket prom. cliente nuevo (entrada)' },
      { k: '<24h',   v: 'tiempo respuesta cotización B2B' },
      { k: '24/7',   v: 'descarga PDF capacidades sin form' }
    ]
  },

  /* ============= INICIATIVAS EN DESARROLLO · COMPLEMENTARIA ============= */
  /* Nota: este bloque baja drásticamente el peso de eco/circular respecto
     a la versión anterior. Por feedback de la clienta: la línea eco es una
     iniciativa real en desarrollo, no el pilar central de la propuesta. */
  initiatives: {
    label: 'Iniciativas complementarias en desarrollo',
    thesis: 'LET trabaja varias iniciativas complementarias sin convertirlas en bandera de marketing: reutilización de mermas (camas y sacos donados a fundaciones), uso de bases textiles más limpias cuando el brief lo permite, y conciencia con Ley REP. Se comunican cuando suman valor a un cliente específico (corporativo con meta de sostenibilidad), no como pilar permanente de comunicación.',
    items: [
      { num: '01', name: 'Reutilización de mermas', desc: 'Sobras de producción se separan por base. Una parte se confecciona en camas y sacos donados a fundaciones aliadas. Sin números inflados — lo comunicamos con honestidad cuando el cliente lo pide.' },
      { num: '02', name: 'Bases textiles más limpias', desc: 'Cuando el brief lo permite, ofrecemos bases con menor impacto (algodón orgánico, RPET) como opción en la cotización. No es default · es opción explícita.' },
      { num: '03', name: 'Conciencia Ley REP', desc: 'Seguimiento de la Ley REP y su evolución en textiles. Iniciativa de cumplimiento, no de marketing.' },
      { num: '04', name: 'Anexo opcional en cotización B2B', desc: 'Cliente corporativo con meta ESG puede pedir anexo con materialidad de su pedido específico. Sin reporte trimestral inflado, sin métrica vanity.' }
    ],
    use: [
      'Mención breve en web madre, no sección entera con pirotecnia.',
      'Anexo opcional en cotización B2B cuando el cliente lo solicita.',
      'Stories puntuales mostrando una entrega real a fundación. Sin convertirlo en marca.',
      'Sin co-branding de "marcas verdes" forzado · sin lenguaje greenwashing.'
    ]
  },

  /* ============= 3 ESTILOS DE WEB FULL ============= */
  /* Cada estilo amarra a 1 insight clave del estudio y trae:
     paleta + tipografía únicas, hero photo real, secciones, efectos high-tech
     ====================================================================== */
  webStyles: [
    {
      id: 'taller', idx: 'W1', codename: 'taller-editorial',
      name: 'Taller Editorial',
      tag: 'editorial · slow craft · premium artesanal',
      insightId: 'INSIGHT 01',
      insightLine: 'El B2B compra oficio, no precio.',
      thesis: 'Si La Estampa proyecta su oficio como editorial fashion, el comprador B2B premium (gerente de marca, productora seria, agencia top) la lee como partner — no como proveedor reemplazable. Web fotografiada como portfolio Aesop / Apartamento. Negro tinta + crudo + DTF naranja. Tipografía display industrial condensed + serif italiana editorial. Cero stock photo · todo foto real de taller.',
      target: 'Gerentes de marca · agencias creativas top · productoras premium · clientes con presupuesto cuidando narrativa.',
      refs: 'Aesop · Mejuri · Apartamento Magazine · Foundry Co · Common Projects · Studio Wieki Somers',
      palette: {
        bg: '#F4ECDC', bg2: '#FAF4E6', ink: '#1A1814', soft: '#6A6357',
        accent: '#FF5A1F', accent2: '#9E8266', accent3: '#C28A30',
        line: 'rgba(26,24,20,0.10)'
      },
      typo: {
        display:   { family: 'Bricolage Grotesque', weight: 700, role: 'Headlines · uppercase tracking apretado' },
        editorial: { family: 'Instrument Serif',    weight: 400, italic: true, role: 'Piezas con voz · subhead' },
        body:      { family: 'Geist',                weight: 400, role: 'Texto corrido · UI' },
        mono:      { family: 'Geist Mono',           weight: 500, role: 'Numerales · kickers técnicos' }
      },
      hero: {
        kicker: '— OFICIO · DESDE 2022 · SANTIAGO',
        title: ['La tinta firme', 'que viste a <em>las marcas</em>', 'que importan.'],
        sub: 'Sublimación, DTF y estampado por metro con plotters Epson certificados. Lunes el brief, viernes en bodega de tu cliente. 70+ cierres mensuales lo confirman.',
        cta: 'Cotizar mi pedido →',
        cta2: 'Ver el oficio',
        image: 'assets/img/taller-hero.png',
        imageAlt: 'Plotter Epson DTF imprimiendo en taller La Estampa Textil',
        stats: [
          { v: '4 años', k: 'OFICIO TEXTIL' },
          { v: '70-80', k: 'CIERRES/MES' },
          { v: 'CL', k: 'COBERTURA NACIONAL' },
          { v: '<24h', k: 'COTIZACIÓN' }
        ]
      },
      sections: [
        { id: 'oficio',     name: 'Oficio · capacidades',  detail: 'DTF · sublimación · estampado por metro · confección + bordado. Cada técnica con su mejor uso, durabilidad de lavado y materialidad.', image: 'assets/img/taller-mesa.png' },
        { id: 'producto',   name: 'Pieza editorial',       detail: 'Foto editorial de prendas terminadas con luz natural · tipo lookbook. La prenda es protagonista, no la oferta.', image: 'assets/img/taller-polera.png' },
        { id: 'casos',      name: 'Casos · 4 años',        detail: 'Producciones audiovisuales + agencia activación + inmobiliaria + retail · varias credenciales en paralelo, sin inflar una sola.' },
        { id: 'proceso',    name: 'Cómo trabajamos',       detail: 'Brief → cotización <24h → mockup → producción → entrega · timeline visible con SLA por etapa.' },
        { id: 'priscila',   name: 'Voz · Priscila Sarmiento', detail: 'Editorial de la fundadora · entrevista corta · 4 años de oficio narrados en primera persona.' },
        { id: 'eco-anexo',  name: 'Anexo opcional · iniciativas', detail: 'CTA opcional en la cotización · mermas reutilizadas + bases textiles más limpias disponibles cuando el brief lo permite.' },
        { id: 'cotizar',    name: 'Cotización express',    detail: 'Formulario integrado Hapee · agente IA filtra en 3 min · ejecutivo responde en menos de 24h.' }
      ],
      effects: [
        'Hero con loop de video del plotter Epson trabajando (fade-in scroll)',
        'Tilt 3D + glare en todas las cards (mouse-driven con perspective)',
        'Reveal animations on scroll (GSAP ScrollTrigger · stagger por bloque)',
        'Cursor custom naranja DTF con difference blend',
        'KPI counters animados (0 → valor real con easing)',
        'Smooth scroll Lenis + horizontal carousel casos',
        'Imagen heros con parallax depth (translate-Y sobre scroll)',
        'Botones con micro-interacción tinta (ink-bleed CSS)'
      ]
    },

    {
      id: 'pop', idx: 'W2', codename: 'pop-saturado',
      name: 'Pop Saturado',
      tag: 'estampado para activaciones · color saturado · cultura visual chilena',
      insightId: 'INSIGHT 03',
      insightLine: 'Varios casos sólidos en paralelo. La diferenciación está en el oficio + ritmo de entrega.',
      thesis: 'Si LET adopta voz visual saturada y directa, se convierte en la opción cómoda cuando una marca, productora o agencia necesita estampado para activación con tiempos cortos. Web con energía visual alta, color saturado, tipografía display de cartel, animaciones bouncy. Foco operativo: tiempos, casos reales, cotización rápida. No es marca aspiracional · es proveedor confiable que sabe lo que hace.',
      target: 'Productoras de eventos · agencias creativas · marcas con campañas masivas · activaciones B2B con deadlines cortos.',
      refs: 'Cultura visual chilena saturada · packaging supermercado clásico · gráfica de feria · cartel ochentero',
      palette: {
        bg: '#FFF8F0', bg2: '#FFFDF6', ink: '#0E0A06', soft: '#7A6D5F',
        accent: '#E94F4F', accent2: '#FF8E5A', accent3: '#3DC9C0',
        line: 'rgba(14,10,6,0.10)'
      },
      typo: {
        display:   { family: 'Archivo Black',     weight: 900, role: 'Display masivo cartel de fiesta · uppercase' },
        editorial: { family: 'Caprasimo',         weight: 400, italic: false, role: 'Acentos retro-pop curvilíneos' },
        body:      { family: 'Manrope',            weight: 500, role: 'Texto corrido · UI saturada' },
        mono:      { family: 'Space Mono',         weight: 400, role: 'Datos técnicos + stickers retro' }
      },
      hero: {
        kicker: '— ESTAMPADO PARA ACTIVACIONES · DEADLINE QUE SE CUMPLE',
        title: ['Tinta firme', '<em>cuando</em>', 'la activación corre.'],
        sub: 'Estampado para activaciones, festivales, lanzamientos y campañas masivas. Lunes el brief, viernes en bodega de tu cliente. DTF y sublimación que aguantan sol, lavado y cámara HD. Lo hacemos hace 4 años.',
        cta: 'Cotizar mi evento →',
        cta2: 'Ver capacidades',
        image: 'assets/img/pop-hero.png',
        imageAlt: 'Poleras vibrantes en backstage de activación',
        stats: [
          { v: '70-80', k: 'CIERRES/MES HOY' },
          { v: '+200', k: 'POLERAS/ACTIVACIÓN' },
          { v: '5 días', k: 'BRIEF → BODEGA' },
          { v: 'CL', k: 'COBERTURA NACIONAL' }
        ]
      },
      sections: [
        { id: 'manifiesto',  name: 'Por qué LET para activación', detail: 'Por qué LET es la elección cuando una activación tiene plazo corto. Headline directo + foto real de taller en producción.' },
        { id: 'casos-pop',   name: 'Casos de activación',    detail: 'Varios proyectos en paralelo · agencia activación, festival, producción audiovisual, retail. Cada caso con foto, ticket cumplido y tiempos reales · sin inflar uno solo.', image: 'assets/img/pop-confetti.png' },
        { id: 'productos',   name: 'Catálogo activación',    detail: 'Poleras staff · bandanas · mantas · banderas · tótems. Cada producto con foto saturada + min/máx unidades + lead time.', image: 'assets/img/pop-polera.png' },
        { id: 'marquee',     name: 'Marquee marcas',         detail: 'Banda infinita con logos de marcas vestidas (con permiso). Movimiento continuo, hover acelera la velocidad.' },
        { id: 'crew',        name: 'El crew La Estampa',     detail: 'Foto del equipo en faena, retrato grupal pop, energía colectiva. Humaniza la operación.' },
        { id: 'agenda',      name: 'Próximos eventos',       detail: 'Lista de festivales / activaciones donde la marca estará vistiendo o presente. Calendario rotativo.' },
        { id: 'cta-pop',     name: 'Cotiza tu evento',       detail: 'Formulario express modo evento · fecha → cantidad → brief → contacto. Asignación rápida a ejecutivo activaciones.' }
      ],
      effects: [
        'Hero con video loop colorido + scratch SFX al cargar',
        'Tipografía bouncy en hover (scale + rotate playful)',
        'Marquee infinito de marcas (CSS animation continuous)',
        'Color flash on hover cards (cycle entre los 3 acentos)',
        'Confetti emitter al hacer click en CTA principal (canvas)',
        'Stickers animados (rotación lenta · drop shadow vibrante)',
        'Cursor custom magenta con texto follow ("ven")',
        'KPI counters con bounce + color split overlay',
        'Background pattern animado tipo grano TV (CSS noise)'
      ]
    },

    {
      id: 'verde', idx: 'W3', codename: 'documental-tecnico',
      name: 'Documental Técnico',
      tag: 'documental · oficio + iniciativas complementarias · slow web',
      insightId: 'INSIGHT 04',
      insightLine: 'Las iniciativas eco son complementarias · no el pilar de la marca.',
      thesis: 'Si LET adopta un tono documental técnico, comunica claramente lo que hace (oficio textil) y agrega las iniciativas complementarias (reutilización de mermas, bases más limpias, Ley REP) como anexo opcional. Web slow scroll con foco en proceso de taller. La narrativa eco aparece, pero no domina. Apta para corporativos con criterio ambiental que valoran honestidad sobre pirotecnia ESG.',
      target: 'Corporativos con criterio ambiental medido · gerentes de compras y marketing exigentes · marcas que prefieren honestidad técnica a greenwashing.',
      refs: 'Documentales industriales · catálogos técnicos editoriales · Aesop · Common Projects · cero greenwashing visual',
      palette: {
        bg: '#EDEFE0', bg2: '#F6F8EC', ink: '#1A2418', soft: '#5D6953',
        accent: '#4A7A50', accent2: '#9CC233', accent3: '#A88660',
        line: 'rgba(26,36,24,0.10)'
      },
      typo: {
        display:   { family: 'Fraunces',          weight: 700, role: 'Display editorial documental · serif slab' },
        editorial: { family: 'Cormorant Garamond', weight: 500, italic: true, role: 'Voz lírica · narrativa larga' },
        body:      { family: 'Manrope',            weight: 400, role: 'Texto corrido legible · long-form' },
        mono:      { family: 'JetBrains Mono',     weight: 400, role: 'Métricas + datasets verificables' }
      },
      hero: {
        kicker: '— OFICIO TEXTIL · INICIATIVAS COMPLEMENTARIAS',
        title: ['Estampado textil', '<em>explicado</em>', 'con criterio.'],
        sub: 'Sublimación, DTF, estampado por metro y confección con 4 años de oficio operativo. Cuando el cliente lo pide, agregamos opciones de bases textiles más limpias y anexo de mermas reutilizadas. Sin pirotecnia ESG · solo lo que efectivamente hacemos.',
        cta: 'Cotizar mi pedido →',
        cta2: 'Ver capacidades técnicas',
        image: 'assets/img/verde-hero.png',
        imageAlt: 'Manos clasificando tela en taller LET',
        stats: [
          { v: '4 años', k: 'OFICIO TEXTIL' },
          { v: '70-80', k: 'CIERRES/MES' },
          { v: '<24h', k: 'COTIZACIÓN' },
          { v: 'Opt', k: 'ANEXO ECO OPCIONAL' }
        ]
      },
      sections: [
        { id: 'manifiesto',  name: 'Cómo trabajamos',         detail: 'Editorial sobre el oficio. Tono honestidad técnica · sin marketing-speak. Por qué la marca trabaja con un proveedor que sabe lo que hace.' },
        { id: 'tecnicas',    name: 'Técnicas y bases',        detail: 'Sublimación · DTF · estampado por metro · confección. Cada una con foto BTS y diferencia operativa. Bases textiles más limpias disponibles como opción cuando el brief lo permite.', image: 'assets/img/verde-hero.png' },
        { id: 'proceso',     name: 'Proceso · 5 etapas',      detail: 'Brief → cotización → mockup → producción → entrega. Cada etapa con foto documental y dato real.' },
        { id: 'casos',       name: 'Casos · varios proyectos',detail: 'Galería de casos B2B y B2C reales · agencia, productora, retail, audiovisual. Sin inflar uno solo.' },
        { id: 'iniciativas', name: 'Iniciativas complementarias', detail: 'Bloque breve y honesto: reutilización de mermas a fundaciones, bases textiles más limpias como opción, seguimiento Ley REP. Sin reporte trimestral inflado, sin métricas vanity.' },
        { id: 'anexo-opt',   name: 'Anexo opcional · cotización', detail: 'Cliente corporativo con meta ambiental puede pedir anexo con materialidad del pedido específico. Sin costo extra · sin condiciones especiales.' },
        { id: 'cotizar',     name: 'Cotizar pedido',          detail: 'Formulario B2B + B2C con campos separados. Asignación directa según público.' }
      ],
      effects: [
        'Slow scroll cinematográfico (Lenis con duration extendida 1.6s)',
        'Contador en vivo de kilos recuperados (suma con tween smooth)',
        'Timeline ciclo circular animado (path SVG draw on scroll)',
        'Mapa Chile interactivo con pinpoints fundaciones (canvas + hover)',
        'Imágenes documentales con fade-in cinematic blur → sharp',
        'Long-form editorial con drop caps + leading generoso',
        'Cursor custom lime con halo soft',
        'KPI counters lentos (3-4s duration) reforzando "slow" feeling',
        'Galería perros con scroll horizontal masonry · cada foto con caption fundación'
      ]
    }
  ],

  /* ============= 3 PROPUESTAS DE GRÁFICAS RRSS ============= */
  /* Cada propuesta acompaña a un estilo de web · misma voz, mismo sistema gráfico
     extrapolado a feed/stories/reel/carrusel
     ====================================================================== */
  rrssProps: [
    {
      id: 'rrss-taller', idx: 'R1', linkedWeb: 'W1',
      name: 'Editorial Taller',
      tag: 'Instagram editorial · Facebook B2B · slow craft',
      voice: 'Maestra de taller que escribe bien. Voz técnica + autoridad + ligeramente irreverente. Sin marketing-speak.',
      channels: [
        { id: 'ig',  name: 'Instagram', pct: 65, focus: 'Plataforma principal · feed editorial 1:1 · stories proceso · reels BTS taller. Construye marca y cierra leads B2B premium con foto cuidada.' },
        { id: 'fb',  name: 'Facebook',  pct: 35, focus: 'Comunidad B2B activa · marketplace + grupos de productoras / agencias / retail HR. Posts long-form y casos descargables PDF.' }
      ],
      formats: [
        { name: 'Feed editorial 1:1 IG',  use: 'Producto + textura + close-up materialidad',     cadence: '8/mes' },
        { name: 'Reel BTS 30-60s IG',     use: 'Plotter trabajando + costura + corte',           cadence: '4/mes' },
        { name: 'Carrusel técnico 6sl',   use: 'Comparativas DTF/sublimación/estampado por metro',  cadence: '3/mes' },
        { name: 'Stories proceso IG',     use: 'BTS diario · taller real · cliente entrega',      cadence: 'diario' },
        { name: 'Post largo FB · caso',   use: 'Caso real + foto + métricas · permite compartir',  cadence: '2/mes' },
        { name: 'FB grupos B2B',          use: 'Productoras / HR / activaciones · respuestas + recursos', cadence: '4/mes' }
      ],
      feedImage: 'assets/img/rrss-taller-feed.png',
      storyImage: 'assets/img/rrss-taller-story.png',
      feedTiles: [
        { img: 'assets/img/rrss-taller-feed.png',    caption: 'Macro de tela cruda con etiqueta',     kicker: 'MATERIAL · 01' },
        { img: 'assets/img/rrss-taller-feed-2.png',  caption: 'Manos planchando · proceso',           kicker: 'OFICIO · 02' },
        { img: 'assets/img/rrss-taller-feed-3.png',  caption: 'Flatlay herramientas de taller',       kicker: 'HERRAMIENTAS · 03' },
        { img: 'assets/img/taller-polera.png',         caption: 'Producto final · polera blanco DTF',     kicker: 'PRODUCTO · 04' },
        { img: 'assets/img/taller-mesa.png',         caption: 'Mesa de corte · luz natural',           kicker: 'TALLER · 05' },
        { img: 'assets/img/taller-hero.png',         caption: 'Plotter Epson en plena impresión',     kicker: 'TECH · 06' }
      ],
      stories: [
        { img: 'assets/img/rrss-taller-story.png', kicker: 'BTS · COSTURA',     title: 'Detrás del taller', cta: 'Cotizar ahora →' },
        { img: 'assets/img/taller-polera.png',       kicker: 'PRODUCTO · POLERA',   title: 'Nueva tirada de poleras básicos LE.PRO 01', cta: 'Ver materialidad →' }
      ],
      carousel: {
        title: 'Carrusel educativo · 6 slides',
        slides: [
          { n: '01/06', kind: 'HOOK',  title: '¿Sublimación o DTF?',            body: 'Los 2 procesos que más confundimos. La diferencia es la tela.' },
          { n: '02/06', kind: 'DATO',  title: 'Sublimación = poliéster',         body: 'Tinta integrada a la fibra. Cero relieve. Aguanta 60+ lavados.' },
          { n: '03/06', kind: 'DATO',  title: 'DTF = casi cualquier tela',       body: 'Film + termoadhesivo. Color sin límite. Algodón, lycra, polar.' },
          { n: '04/06', kind: 'COMP',  title: 'Cuándo elegir cada uno',          body: 'Uniforme deportivo → sublimación. Activación corta → DTF.' },
          { n: '05/06', kind: 'CASO',  title: 'Caso real',                       body: '200 poleras staff · DTF para tirada rápida con marca a 4 tintas.' },
          { n: '06/06', kind: 'CTA',   title: 'Cotiza tu pedido',                body: 'Te respondemos en menos de 24h con mockup incluido.' }
        ]
      },
      samplePost: {
        kicker: '— OFICIO · 4 AÑOS DE TINTA',
        title: 'No vendemos poleras. Vendemos firmeza.',
        body: 'Cuando un cliente nos pide 200 poleras para una activación que sale en TV, no pensamos en el polera. Pensamos en el lavado número 50, en el sol de las 3 de la tarde, en la cámara HD que va a registrar cada hilo. La tinta firme no es un slogan: es el cálculo de gramaje + base textil + DTF correcto para que en el lavado 50, tu marca todavía exista. Y eso, que parece obvio, es la diferencia entre un proveedor y un partner.\n\n— Priscila',
        metrics: [{ k: 'Lavados resistidos', v: '50+' }, { k: 'Cierres/mes', v: '70-80' }, { k: 'Tiempo cotización', v: '<24h' }],
        tags: ['#estampadochile', '#oficiotextil', '#dtfprofesional']
      },
      paletteOverride: null /* hereda de W1 */
    },

    {
      id: 'rrss-pop', idx: 'R2', linkedWeb: 'W2',
      name: 'Pop Cultural',
      tag: 'Instagram cultural · Facebook masivo · trends + cultura',
      voice: 'Reactiva, irreverente, festiva. Habla en lenguaje chileno-internet. Memes propios. Le habla a la calle, no al gerente.',
      channels: [
        { id: 'ig',  name: 'Instagram', pct: 70, focus: 'Plataforma principal · reels < 30s siguiendo trends pop · stories reactivas · carrusel meme · feed cultural alta saturación. Co-creación con micro-celebs locales.' },
        { id: 'fb',  name: 'Facebook',  pct: 30, focus: 'Audiencia masiva · grupos de productoras + agencias + dueños de marca · video crosspost · eventos en agenda · marketplace para ofertas express activación.' }
      ],
      formats: [
        { name: 'Reel IG trend 15-30s',     use: 'Sumarse a trend del momento con polera + chiste',     cadence: '10/mes' },
        { name: 'Carrusel meme IG',          use: 'Memes locales con producto · alta viralidad',       cadence: '4/mes' },
        { name: 'Stories reactivas IG',      use: 'En vivo desde activación + festival',                cadence: 'evento' },
        { name: 'Co-creación con talents',   use: 'Influencer / micro-celeb pop chileno usa polera',     cadence: '2/mes' },
        { name: 'Video FB crosspost',        use: 'Mismo reel reformateado · alcance masivo orgánico', cadence: '4/mes' },
        { name: 'Evento FB · próxima act.',  use: 'Página de evento + agenda + check-in masivo',       cadence: '2/mes' }
      ],
      feedImage: 'assets/img/rrss-pop-feed.png',
      storyImage: 'assets/img/rrss-pop-story.png',
      feedTiles: [
        { img: 'assets/img/rrss-pop-feed.png',    caption: 'Pop flatlay maximalista',          kicker: 'POP · 01' },
        { img: 'assets/img/rrss-pop-feed-2.png',  caption: 'Poleras vibrantes apilados',          kicker: 'PRODUCTO · 02' },
        { img: 'assets/img/rrss-pop-feed-3.png',  caption: 'Polera amarillo · estudio pop',       kicker: 'CAMPAÑA · 03' },
        { img: 'assets/img/pop-polera.png',         caption: 'Pop polera flatlay + party props',    kicker: 'EDITORIAL · 04' },
        { img: 'assets/img/pop-confetti.png',     caption: 'Confetti explosion · activación',   kicker: 'BTS · 05' },
        { img: 'assets/img/pop-hero.png',         caption: 'Poleras colgando · backstage',         kicker: 'EVENTO · 06' }
      ],
      stories: [
        { img: 'assets/img/rrss-pop-story.png', kicker: 'EN VIVO · FESTIVAL',  title: 'Estamos en backstage', cta: 'Ver activación →' },
        { img: 'assets/img/pop-hero.png',       kicker: 'BTS · ACTIVACIÓN',    title: 'Cómo se resolvieron 500 poleras en 5 días', cta: 'Ver caso →' }
      ],
      carousel: {
        title: 'Carrusel meme · 6 slides',
        slides: [
          { n: '01/06', kind: 'HOOK',  title: 'Cuando tu marca tiene que pegar',       body: 'Y el comercial sale el domingo. Y el lunes es feriado.' },
          { n: '02/06', kind: 'DATO',  title: 'Lunes: brief',                          body: 'Te llama tu jefe. "Necesito 200 poleras para el viernes."' },
          { n: '03/06', kind: 'DATO',  title: 'Martes: mockup',                        body: 'Te respondemos con mockup, color y tela. Apruebas.' },
          { n: '04/06', kind: 'DATO',  title: 'Miércoles-jueves: producción',          body: 'DTF a tope. Empaquetado. Etiquetado por talla.' },
          { n: '05/06', kind: 'CASO',  title: 'Viernes: bodega',                        body: 'Llega antes del cierre de bodega de tu cliente.' },
          { n: '06/06', kind: 'CTA',   title: 'Domingo: TV nacional',                  body: 'Tu marca pasa a la historia. Lunes, repetís pedido.' }
        ]
      },
      samplePost: {
        kicker: '— BTS · ACTIVACIÓN MARCA NACIONAL',
        title: 'Lunes el brief. Viernes en bodega de tu cliente.',
        body: 'POV: lunes te mandamos 200 poleras para tu staff de activación. Viernes están repartidos. Llegan antes de que cierren la bodega. Esa es LET. Si tu activación tiene plazo corto y tu marca tiene que verse bien, escríbenos. Hace 4 años que lo hacemos.\n\n#estampadotextil #activación #merchcorporativo',
        metrics: [{ k: 'Tiempo brief → bodega', v: '5 días' }, { k: 'Poleras producidas', v: '200' }, { k: 'Repetición cliente', v: 'alta' }],
        tags: ['#estampadotextil', '#activación', '#merchcorporativo']
      }
    },

    {
      id: 'rrss-verde', idx: 'R3', linkedWeb: 'W3',
      name: 'Documental Técnico',
      tag: 'Instagram documental · Facebook B2B · narrativa larga sobre oficio',
      voice: 'Cronista del oficio textil. Honestidad técnica sin moralina. Explica el proceso completo, incluye las iniciativas eco como anexo natural, sin convertirlas en bandera.',
      channels: [
        { id: 'ig',  name: 'Instagram', pct: 60, focus: 'Plataforma principal · carruseles narrativos sobre oficio · reels documental BTS taller · galería de procesos · stories proceso semanal.' },
        { id: 'fb',  name: 'Facebook',  pct: 40, focus: 'Audiencia corporate B2B · long-form descargable PDF · grupos de RSE / industria · posts shareable para gerentes de compras.' }
      ],
      formats: [
        { name: 'Carrusel técnico IG · 6 sl', use: 'Materialidad + foto + dato real del proceso',                    cadence: '2/mes' },
        { name: 'Reel documental IG · 60s',   use: 'BTS proceso + bases textiles + decisión técnica explicada',     cadence: '2/mes' },
        { name: 'Post largo FB · caso',       use: 'PDF caso B2B descargable · materialidad + tiempos + resultado', cadence: '1/mes' },
        { name: 'Stories proceso IG',          use: 'BTS clasificación + confección + entrega · breve',              cadence: 'semanal' },
        { name: 'Post FB grupos industria',    use: 'Compartir caso técnico en grupos B2B · CTA cotización',         cadence: '2/mes' }
      ],
      feedImage: 'assets/img/rrss-verde-feed.png',
      storyImage: 'assets/img/rrss-verde-story.png',
      feedTiles: [
        { img: 'assets/img/rrss-verde-feed.png',    caption: 'Mermas clasificadas con etiquetas eco', kicker: 'CICLO · 01' },
        { img: 'assets/img/rrss-verde-feed-2.png',  caption: 'Perro descansando en cama de mermas',    kicker: 'IMPACTO · 02' },
        { img: 'assets/img/rrss-verde-feed-3.png',  caption: 'Notebook con métricas eco',              kicker: 'DATOS · 03' },
        { img: 'assets/img/verde-perros-row.png',   caption: 'Galería · perros y camas donadas',       kicker: 'FUNDACIÓN · 04' },
        { img: 'assets/img/verde-perro.png',        caption: 'Retrato cliente final (perro feliz)',    kicker: 'PORTAFOLIO · 05' },
        { img: 'assets/img/verde-hero.png',         caption: 'Proceso · clasificación de mermas',      kicker: 'TALLER · 06' }
      ],
      stories: [
        { img: 'assets/img/rrss-verde-story.png', kicker: 'CICLO · ENTREGA',   title: 'Entrega de camas a fundación', cta: 'Descargar reporte →' },
        { img: 'assets/img/verde-perro.png',      kicker: 'TESTIMONIO · PERRO', title: 'Felipe encontró su cama hoy',  cta: 'Ver historia →' }
      ],
      carousel: {
        title: 'Carrusel técnico · 6 slides',
        slides: [
          { n: '01/06', kind: 'HOOK',  title: 'Cómo elegir la técnica',         body: 'Sublimación, DTF o estampado por metro. Depende de la tela y el uso.' },
          { n: '02/06', kind: 'DATO',  title: 'Sublimación',                    body: 'Mejor en poliéster y mezclas. Tinta integrada · color firme · 60+ lavados.' },
          { n: '03/06', kind: 'DATO',  title: 'DTF',                            body: 'Casi cualquier tela. Color sin límite · resiste 50+ lavados · ideal activación.' },
          { n: '04/06', kind: 'DATO',  title: 'Bases textiles · opciones',      body: 'Mezclas estándar para volumen + bases más limpias disponibles cuando el brief lo permite.' },
          { n: '05/06', kind: 'CASO',  title: 'Anexo opcional',                 body: 'Cliente corporativo puede pedir anexo de materialidad y mermas reutilizadas. Sin costo extra.' },
          { n: '06/06', kind: 'CTA',   title: 'Cotiza tu pedido',               body: 'Respuesta en menos de 24h. Te decimos qué técnica conviene a tu brief.' }
        ]
      },
      samplePost: {
        kicker: '— OFICIO · 4 AÑOS DE PRODUCCIÓN',
        title: 'No vendemos sólo poleras. Vendemos criterio técnico.',
        body: 'Cuando un cliente nos pide 500 poleras, no le decimos "ningún problema" antes de mirar el brief. Primero preguntamos: ¿qué tela?, ¿qué uso?, ¿cuántos lavados?, ¿qué deadline? La diferencia entre un proveedor y un partner es que el partner te avisa cuándo la decisión que estás tomando no te va a funcionar. Sobre la sostenibilidad: trabajamos iniciativas en desarrollo (mermas reutilizadas, bases más limpias cuando aplica). No es nuestra bandera, es nuestra opción extra.\n\n— Priscila y equipo LET',
        metrics: [{ k: 'Tiempo respuesta cotización', v: '<24h' }, { k: 'Lavados resistidos', v: '50-60+' }, { k: 'Anexo eco opcional', v: 'Sin costo' }],
        tags: ['#estampadotextil', '#oficiotextil', '#dtfprofesional']
      }
    }
  ],

  /* ============= ROADMAP · operativo · sprint a sprint =============
     Narrativa: estamos en S2 de propuesta · próximo paso es feedback +
     setup MVP. Hapee se va activando en paralelo. Informe oficial al día 60. */
  roadmap: [
    {
      mo: 'Semana 1-2', phase: 'F0 · Estratégica',
      status: 'now', /* ESTAMOS ACÁ */
      name: 'Propuesta + feedback',
      focus: 'Presentación + alineación · este documento',
      milestones: [
        'Presentación propuesta integral (este documento) entregada',
        'Cliente revisa direcciones · feedback de estilo web, pilares, pisos de inversión Meta',
        'SOW + kick-off firmado',
        'Accesos: pixel/GA4/ads/redes/dominios entregados a Digitals'
      ],
      hapee: 'Setup cuenta Hapee · estructura de pipeline base'
    },
    {
      mo: 'Semana 3', phase: 'F1 · Producción',
      status: 'next',
      name: 'Toma de contenidos presencial',
      focus: 'Sesión audiovisual en taller · activo editorial mes 1',
      milestones: [
        'Sesión audiovisual full-day en taller: plotters, prendas terminadas de portafolio, Priscila en cámara explicando oficio',
        'Captura para 30-40 piezas (reels BTS · carruseles técnicos · quote cards · stories)',
        'Tracking instalado: Pixel Meta + GA4 + CAPI server-side validados',
        'Primera grilla RRSS construida (4 semanas adelantadas) · LinkedIn + IG + TikTok'
      ],
      hapee: 'Agente IA fase 1 · responde queries básicos de servicios + horarios'
    },
    {
      mo: 'Semana 4-5', phase: 'F2 · MVP en aire',
      status: 'next',
      name: 'Campañas MVP + grillas publicando',
      focus: 'Marketing digital arranca · always-on básico',
      milestones: [
        'Google Ads MVP: 2 líneas Search core (Estampado + Merch B2B) en aire',
        'Meta MVP: 2 campañas (cold prospecting + retargeting)',
        '8 creativos en F1 testeo · variantes de hipótesis ganadora',
        'Primera grilla RRSS publicándose · ritmo de 3 piezas por semana arranca'
      ],
      hapee: 'Agente fase 2 · lead scoring básico + routing por servicio (estampado/merch/eco)'
    },
    {
      mo: 'Semana 6-7', phase: 'F3 · Iteración',
      status: 'next',
      name: 'Testeo creativos + ganadores',
      focus: 'Identificar ganadores · cortar perdedores · re-asignar presupuesto',
      milestones: [
        'Análisis de los 8 creativos F1 · 2-3 ganadores identificados con data significativa',
        'Perdedores cortados · presupuesto re-asignado a winners',
        'Segunda grilla RRSS publicada · ajustada según engagement de la primera',
        '4 nuevos creativos F2 entrando para escalar la hipótesis ganadora'
      ],
      hapee: 'Agente fase 3 · triaje cliente nuevo vs recurrente + cotización express integrada'
    },
    {
      mo: 'Día 60 · Fin Mes 2', phase: '★ INFORME OFICIAL',
      status: 'milestone',
      name: 'Primer informe ejecutivo + QBR',
      focus: 'Reporte completo + decisión de escalamiento',
      milestones: [
        'Reporte ejecutivo: CPL · ROAS · leads calificados · engagement por pilar · piezas publicadas',
        'Sesión QBR con Priscila + equipo · narrativa + lectura estratégica de cifras',
        'Decisión de escalamiento de pisos Meta (austero → medio · o medio → ambicioso)',
        'Plan Mes 3-4 firmado con ajustes derivados del aprendizaje real'
      ],
      hapee: 'Reporte Hapee completo · pipeline · lead-to-close ratio · costo por industria'
    },
    {
      mo: 'Semana 9-10', phase: 'F4 · Scaling',
      status: 'future',
      name: 'Ganadores en F2 + Advantage+',
      focus: 'Aumento de presupuestos validados · estructura always-on completa',
      milestones: [
        'Ganadores creativos escalados a F2 con Advantage+ scaling',
        'Aumento de presupuestos Meta + Google según ROAS validado',
        'Google Ads pasa de 2 a 4 líneas always-on con landings dedicadas',
        'Tercera grilla RRSS publicada · ya con tono refinado a la audiencia real'
      ],
      hapee: 'Agente fase 4 · lookups CRM + sugerencia upsell por historial cliente'
    },
    {
      mo: 'Semana 11-12', phase: 'F5 · Segunda toma',
      status: 'future',
      name: 'Producción mes 3 + Eco editorial',
      focus: 'Refresh de banco audiovisual + arranca línea Eco',
      milestones: [
        'Segunda toma de contenidos presencial · enfoque diferenciado por aprendizaje M1-M2',
        '4 reels editoriales producidos · Priscila explicando proceso a cámara',
        'Línea Eco arranca: primera entrega editorial mensual con fundación de perros',
        'Anexo opcional de materialidad activado en cotización B2B'
      ],
      hapee: 'Hapee + Pixel · conversiones offline (contratos firmados) re-inyectadas al algoritmo'
    },
    {
      mo: 'Día 90 · Fin Mes 3', phase: '★ INFORME OFICIAL',
      status: 'milestone',
      name: 'Segundo informe + plan Q2',
      focus: 'QBR trimestral · narrativa + roadmap Q2',
      milestones: [
        'Reporte ejecutivo Q1 completo · 90 días de data real',
        'Casos cerrados B2B documentados con métricas reservadas',
        'LTV promedio M1-M3 · tasa de recurrencia · churn risk',
        'Plan Q2 firmado: prensa + voz Priscila + co-branding fundación'
      ],
      hapee: 'Hapee operando en modo predictivo · score de cierre por industria + intent'
    },
    {
      mo: 'Mes 4-6', phase: 'F6 · Retención + LTV',
      status: 'future',
      name: 'Loop cliente · email + Meta dinámico',
      focus: 'Maximizar valor cliente existente · loop de fidelización',
      milestones: [
        'Email mensual segmentado por tipo de cliente B2B (productora · agencia · empresa)',
        'Meta dinámico con catálogo de prendas + servicios',
        'LTV promedio +20% vs arranque · medido en cohortes mensuales',
        'Tasa recurrencia >30% · reorders automáticos email + WhatsApp'
      ],
      hapee: 'Hapee · programa cliente recurrente con tier (Pro / Premium / Strategic)'
    },
    {
      mo: 'Mes 7-12', phase: 'F7 · Escala + voz',
      status: 'future',
      name: 'Priscila como activo editorial + prensa',
      focus: 'Brand-lift sectorial · La Estampa como referente CL',
      milestones: [
        'LinkedIn de Priscila operando con 4 posts/mes editoriales',
        'Primera salida en prensa industria textil + activación cultural',
        '5+ casos B2B cerrados con ticket >$1M documentados',
        'KPI: cierre mensual >120 leads calificados · CPL <$8K'
      ],
      hapee: 'Hapee + Claude/Gemini · agente que pre-redacta propuestas con base templates'
    }
  ],

  /* ============= INVERSIÓN + ENTREGABLES ============= */
  invest: {
    notes: 'Cifras de referencia · trabajo por fases · facturación mensual con SLA. Producción de pauta (Google + Meta) gestionada en cuenta del cliente con transparencia total.',
    phases: [
      {
        id: 'F1', name: 'Fase 1 · Fundación (M1)', range: 'Inversión única + onboarding',
        items: [
          'Manual de marca v1 (10-12 págs) sobre el logo actual · sin rebranding',
          'Setup Hapee CRM + agente IA primer flujo',
          'Tracking server-side · Pixel Meta + GA4 + CAPI',
          'Estructuración del portafolio · casos con permission management',
          'Audit Google Ads y baseline de KPIs'
        ]
      },
      {
        id: 'F2', name: 'Fase 2 · Web + Landings (M2-M3)', range: 'Inversión única',
        items: [
          'Diseño + dev web madre (9 secciones) sobre laestampatextil.cl',
          'Landing Estampado Textil dedicada',
          'Landing Merchandising B2B + PDF capacidades',
          'Handoff técnico al equipo LET · entrega de código fuente · documentación de cómo agregar casos y editar copy',
          'QA + lanzamiento + entrega de accesos, credenciales y repositorio a LET'
        ]
      },
      {
        id: 'F3', name: 'Fase 3 · Operación mensual (M3+)', range: 'Fee mensual recurrente',
        items: [
          'Gestión Google Ads · 4 líneas always-on + reporte semanal',
          'Gestión Meta · sistema F1-F2-F3 + creatividad rotativa',
          'Producción de contenido · 10-14 piezas/mes según pilares',
          'Edición + curaduría de casos editoriales',
          'Reuniones de optimización quincenal · roadmap activo'
        ]
      },
      {
        id: 'F4', name: 'Producción de pauta (M3+)', range: 'Gestionado a cuenta del cliente',
        items: [
          'Google Ads · estructura always-on (presupuesto a definir según meta de cierres)',
          'Meta Ads · sistema testeo + escalado (presupuesto a definir por servicio)',
          'LinkedIn · campañas dirigidas a agencias y productoras (opcional · ramp-up M6+)',
          'Cuentas del cliente · transparencia total · reporte mensual con CPL/ROAS por línea'
        ]
      }
    ]
  },

  /* ============= PROPIEDAD + PLATAFORMA + DOMINIO + COSTOS =============
     Sección agregada por feedback formal de la clienta · transparencia sobre
     qué es de quién, qué incluye el servicio y qué no, y cómo se resuelve
     la pregunta .cl vs .com. */
  ownership: {
    title: 'Propiedad + plataforma + dominio + costos',
    headline: 'Qué es de LET, qué administra Digitals, qué cuesta extra. Todo explícito.',
    intro: 'Por feedback formal de LET, dejamos por escrito lo que muchas veces se asume y después confunde: quién es dueño de qué, qué plataforma usamos y por qué, qué costos están incluidos en el fee mensual y cuáles van por separado. Sin letra chica.',

    platform: {
      label: 'Plataforma · stack moderno + AI-editable (no WordPress)',
      body: 'Construimos las landings y la web madre con el stack más actual de la industria: HTML5 semántico + Tailwind CSS v4 compilado + JavaScript moderno (ES2024+) + animaciones GSAP donde aporta. Es exactamente lo que usan equipos de producto de empresas como Linear, Vercel, Stripe o GitHub — el estándar de 2026, no de 2010. Cero WordPress, cero plugins, cero plugin-hell. Performance nativa (LCP &lt; 1.5s en mobile), SEO técnico impecable de origen, accesibilidad WCAG AA. <em>La diferencia versus un CMS legacy: el código es transparente, leíble y autoeditable por cualquier modelo de IA.</em>',
      alternatives: 'Para la web madre evaluamos en kick-off dos rutas: (A) vanilla HTML + Tailwind · más rápida de sacar · ideal si LET delega mantención a Digitals. (B) Astro + Tailwind + MDX para casos · SSG con SEO máximo · ideal si LET quiere autonomía editorial liviana. Decisión técnica en sesión 1.',
      stack: ['<b>Landings de campaña</b> · vanilla HTML5 + Tailwind v4 compilado · 1 archivo standalone por landing · deploy independiente para A/B testing rápido', '<b>Web madre institucional</b> · vanilla HTML o Astro + Tailwind (decisión kick-off) · componentizado · multi-página · SSG para SEO técnico de élite', '<b>Hosting</b> · Dokploy gestionado por Digitals (incluido en el fee) · dominio laestampatextil.cl a nombre de LET · SSL automático · CDN incluido', '<b>Tracking</b> · GA4 + Pixel Meta + CAPI server-side + Hapee CRM integrado por API · sin pérdida de datos por iOS 14.5+ ni bloqueadores', '<b>Entrega total</b> · LET recibe el repositorio Git completo + código fuente + documentación + accesos en el día del lanzamiento. Cero lock-in. LET es dueña absoluta del código.']
    },

    /* ============= AI-EDITABLE · LA VENTAJA REAL DEL STACK MODERNO ============= */
    aiEditable: {
      label: 'Mantención del futuro · editar el sitio con prompts, no con CMS',
      body: 'Esto es lo que diferencia el stack moderno de un WordPress: <em>el código en sí mismo es la interfaz de edición.</em> Cualquier persona del equipo LET — sin saber programar — puede pedirle a ChatGPT, Claude, Cursor o cualquier IA: "agrega un caso nuevo con esta foto y este texto" o "cambia el headline de la landing de DTF a este otro" o "reemplaza esta sección por una galería de 6 productos". La IA edita el código directamente. No hay que entrar a un admin, no hay panel de control, no hay curva de aprendizaje de un CMS específico. Es el método de programación que usan hoy los equipos punteros del mundo (vibe-coding, AI-pair-programming). <em>El sitio se vuelve un documento vivo que cualquiera con acceso al repo puede editar conversando con una IA.</em>',
      examples: [
        { who: 'Priscila u operación interna', prompt: '"Agrega un caso nuevo: cliente Falabella, 500 poleras DTF, foto adjunta, copy: \'cierre en 5 días\'"', result: 'IA edita el archivo del catálogo de casos, sube la foto, regenera el componente. Cambio visible en 2 minutos.' },
        { who: 'Equipo comercial', prompt: '"Cambia todos los precios de cotización rápida +12%"', result: 'IA recorre todos los archivos, actualiza los valores, mantiene la coherencia visual.' },
        { who: 'Marketing LET', prompt: '"Cambia el headline de la landing de Estampado a: \'Estampamos lo que tu marca necesita esta semana\' y bájale el peso a la tipografía"', result: 'IA edita el HTML + el Tailwind class, deja todo listo para deploy.' }
      ],
      callout: 'Mientras tanto, Digitals sigue siendo el equipo operativo: subimos los cambios al servidor, hacemos QA y monitoreamos performance. La diferencia es que LET <b>nunca queda atado</b> a depender de Digitals para tareas simples de copy, ni a aprender un CMS que en 5 años va a estar obsoleto.'
    },

    /* ============= ALCANCE FUNNEL · QUÉ INCLUYE Y QUÉ NO ============= */
    funnelScope: {
      label: 'Funnel automático · alcance del entregable',
      body: 'Para evitar confusión sobre qué construimos: el <b>funnel automático Hapee + IA</b> incluye las <b>landings de campaña</b> (Estampado Textil + Merchandising B2B) conectadas al CRM con captura, calificación y enrutamiento automático. <em>NO incluye la página web institucional completa de LET.</em> La web madre laestampatextil.cl es un entregable separado del funnel: es el sitio institucional que vive en paralelo y se nutre del funnel para conversión, pero no es parte del scope automatizado de captura.',
      included: ['Landing dedicada Estampado Textil · conectada al funnel Hapee', 'Landing dedicada Merchandising B2B · conectada al funnel Hapee', 'Agente IA de filtro de leads en primera línea', 'Enrutamiento automático cliente nuevo / antiguo', 'Cotización express con SLA visible'],
      excluded: ['Página web madre institucional (entregable separado · ver fase 2)', 'Catálogo completo de casos / portafolio (vive en web madre)', 'Blog editorial (no es prioridad inicial)', 'Tienda online (no aplica B2C transaccional inmediato)']
    },

    propertyMatrix: [
      { item: 'Sitio web (código + diseño)',          owner: 'LET',     detail: 'Código fuente entregado a LET al lanzamiento. Sin lock-in con Digitals.' },
      { item: 'Hosting + dominio laestampatextil.cl', owner: 'LET',     detail: 'A nombre de LET · facturado directo a LET · accesos administrados por LET.' },
      { item: 'Identidad visual + manual de marca',   owner: 'LET',     detail: 'Archivos editables entregados (Figma + PDF + assets sueltos).' },
      { item: 'Cuentas Google Ads + Meta Ads',         owner: 'LET',     detail: 'Cuentas a nombre de LET · Digitals gestiona con acceso autorizado. LET las conserva si termina la relación.' },
      { item: 'Pixel Meta + GA4',                       owner: 'LET',     detail: 'Instalados en el sitio · datos pertenecen a LET.' },
      { item: 'Cuenta Hapee CRM',                      owner: 'LET',     detail: 'Whitelabel del holding Digitals · costo mensual incluido en fee · datos exportables si LET decide cambiar de CRM.' },
      { item: 'Agente IA + flujos automatizados',      owner: 'Compartido', detail: 'Configuración hecha por Digitals sobre Hapee · prompts y flujos entregados como documentación · LET puede heredarlos si cambia de stack.' },
      { item: 'Banco audiovisual + casos',             owner: 'LET',     detail: 'Fotos, videos, casos PDF · todo a nombre de LET con uso ilimitado.' }
    ],

    costsIncluded: {
      label: 'Incluido en el fee mensual',
      items: [
        'Gestión Google Ads + Meta Ads (operativo)',
        'Producción de contenido RRSS según pilares acordados',
        'Operación Hapee CRM + agente IA (licencias whitelabel cubiertas)',
        'Reportes semanales + mensuales',
        'Mantención básica del sitio (actualizaciones de seguridad, fixes menores)'
      ]
    },

    costsExtra: {
      label: 'No incluido · separado',
      items: [
        'Presupuesto de pauta (Google + Meta) · va a cuenta de LET, no del fee',
        'Hosting del sitio · cobrado directo por el proveedor a LET (USD 100-300/año aprox)',
        'Renovación dominio · LET paga directo (NIC.cl o registrar internacional)',
        'Licencias de IA generativa de uso intensivo (si LET pide videos Higgsfield > X cantidad mensual)',
        'Mantención mayor de plataforma · rediseño, nuevas secciones grandes, integraciones extra · cotización aparte',
        'Producciones audiovisuales presenciales · una incluida por trimestre · adicionales cotizadas aparte'
      ]
    },

    domain: {
      label: 'Decisión .cl vs .com · pendiente',
      headline: 'LET es dueña de laestampatextil.cl. Si quiere migrar a .com, hay plan de transición SEO.',
      currentStatus: 'Actualmente laestampatextil.cl tiene tráfico orgánico vivo y posicionamiento Google sobre keywords del oficio. No hay urgencia de migración.',
      options: [
        { id: 'A', name: 'Quedarse en .cl', recommendation: 'Recomendado si el foco es Chile B2B+B2C transaccional', detail: 'Mantener laestampatextil.cl como dominio principal · seguir construyendo equity SEO ya acumulado · cero riesgo · cero costo de migración.' },
        { id: 'B', name: 'Migrar a .com', recommendation: 'Tiene sentido si LET planea expansión LATAM y quiere prestigio internacional', detail: 'Migrar a laestampatextil.com (o variante consensuada) · planificar transición SEO controlada · 301 redirects permanentes desde laestampatextil.cl · monitoreo de tráfico durante 90 días post-migración.' }
      ],
      migrationPlan: {
        label: 'Si LET decide migrar a .com · plan de transición',
        steps: [
          'Paso 1 · Auditoría SEO completa del sitio actual · inventario de URLs con tráfico, backlinks externos, posicionamiento por keyword.',
          'Paso 2 · Mapping 1:1 de URLs viejas → URLs nuevas en el .com · sin URLs huérfanas.',
          'Paso 3 · 301 redirects permanentes desde laestampatextil.cl hacia laestampatextil.com · uno por uno, no wildcard.',
          'Paso 4 · Search Console y GA4 configurados para ambos dominios · monitoreo paralelo 90 días.',
          'Paso 5 · Recovery plan si hay caída de tráfico >15% en M2 post-migración.',
          'Paso 6 · Mantener laestampatextil.cl con redirect activo por mínimo 24 meses · idealmente permanente.'
        ],
        risks: [
          'Pérdida temporal de 10-30% del tráfico orgánico durante 60-90 días (riesgo controlable con migración bien hecha).',
          'Backlinks externos que apuntan a .cl pueden tardar en transferir equity (parte se mantiene con 301).',
          'Posicionamiento de keywords con .cl puede tomar 3-6 meses en consolidarse en .com.'
        ],
        recommendation: 'Recomendación Digitals: no migrar a .com en M1-M3. Decidir en QBR M3 (día 90) con data real del crecimiento orgánico ya alcanzado. Si LET decide migrar, hacerlo entre M6-M9 cuando ya tengamos un sitio nuevo estable y métricas baseline.'
      }
    }
  },

  /* ============= OPERACIÓN · QUIÉN HACE QUÉ =============
     Agregado por feedback de la clienta. LET no se convierte en media company.
     Carga operativa razonable, repartida explícitamente. */
  operating: {
    title: 'Operación realista · quién hace qué',
    headline: 'LET sigue siendo empresa textil. Digitals opera el marketing. Nadie se transforma en lo que no es.',
    intro: 'Por feedback formal de LET: la propuesta no la convierte en media company ni le pide a Priscila ser influencer full-time. Carga operativa razonable, división explícita de tareas, sin sobrecarga del equipo LET.',
    digitalsDoes: {
      label: 'Lo que hace Digitals (operación + entregables)',
      items: [
        'Gestión completa de Google Ads + Meta Ads (estrategia, creativo, optimización, reporte).',
        'Operación Hapee CRM + agente IA · setup y mantención de flujos.',
        'Producción de contenido para RRSS · 10-14 piezas/mes desde el material capturado en sesiones.',
        'Diseño + dev del sitio madre y las 2 landings · sin involucrar al equipo LET en tareas técnicas.',
        'Reportes ejecutivos semanales/mensuales + QBR trimestral con la dirección de LET.',
        'Coordinación de sesiones audiovisuales en taller (las planificamos, traemos producción, dejamos archivos listos).',
        'Handoff técnico al lanzamiento · entrega de código fuente + documentación · capacitación al equipo LET para editar copy y agregar casos sin depender de Digitals.'
      ]
    },
    letDoes: {
      label: 'Lo que aporta LET (mínimo viable)',
      items: [
        'Acceso a la operación textil para sesión audiovisual mensual o bimensual (Priscila + equipo en taller).',
        '<b>Capacitación al equipo LET para enviar material audiovisual aprovechable al instante</b> · Digitals entrena al equipo en cómo grabar correctamente con celular (ángulos, luz, audio, vertical 9:16 vs 1:1, qué capturar) · cuando LET ve un pedido bonito saliendo del plotter, una entrega especial o un cliente happy, lo graba bien y lo manda al canal compartido · Digitals lo procesa y publica en 24-48h sin re-grabaciones.',
        'Validación rápida de creativos y posts antes de salir (review batch quincenal).',
        'Continuar atendiendo cotizaciones B2B premium con el equipo comercial actual (Digitals filtra leads, LET cierra).',
        'Permission management de casos: pedir consentimiento al cliente cuando vamos a publicar un proyecto en portafolio.',
        'Decisiones estratégicas en QBR · qué ajustar, qué escalar, qué pausar.',
        'Aprobar manual de marca v1 + sus aplicaciones.'
      ]
    },
    letDoesNot: {
      label: 'Lo que LET NO tiene que hacer',
      items: [
        'No tiene que producir contenido propio · todo sale de la sesión audiovisual mensual.',
        'No tiene que postear diariamente · la grilla la opera Digitals.',
        'No tiene que aprender Meta Ads ni Google Ads · son operados por Digitals.',
        'No tiene que ser "media company" · sigue siendo empresa textil.',
        'Priscila NO tiene que ser influencer · aparece a cámara para explicar oficio cuando suma, no como rutina diaria.',
        'No tiene que hacer reportes ESG mensuales · iniciativas eco son anexo opcional cuando aplica.'
      ]
    }
  }
};
