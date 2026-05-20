/* ======================================================================
   LA ESTAMPA TEXTIL · TOKENS CENTRALES · 2026
   - Cliente: Priscila Sarmiento (4 años · ex-marca "Remind")
   - Vertical: estampado textil personalizado + merchandising B2B
   - Tecnología: sublimación + DTF · plotters Epson certificados
   - Kick-off: 2026-05-11 · Digitals
   - Entregables: web madre nueva · 2 landings (estampado/serigrafía + merch B2B)
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
    tagline: 'La tinta que viste a las marcas que importan.',
    pitch: 'Estampado textil con criterio editorial, infraestructura industrial y compromiso con la economía circular. Hacemos vestir a marcas, agencias y eventos — desde un metro de tela hasta una flota completa de uniformes.',
    kicker: '4 AÑOS · 70-80 CIERRES/MES · COBERTURA NACIONAL · TICKET PROM. $50K',

    facts: [
      { k: '4 años', v: 'de oficio textil · ex-marca Remind' },
      { k: '70-80', v: 'cierres mensuales · vía Google Ads' },
      { k: '$50K', v: 'ticket promedio cliente nuevo' },
      { k: 'CL', v: 'cobertura nacional · despacho a regiones' },
      { k: 'Epson', v: 'plotters certificados · sublimación + DTF' },
      { k: 'B2B', v: '31 Minutos · TINI · agencias · productoras' }
    ],

    capabilities: [
      { id: 'sub',       name: 'Sublimación',          desc: 'Tinta integrada a la fibra · color firme, suave al tacto · ideal para poliéster + mezclas.' },
      { id: 'dtf',       name: 'DTF · film transfer',  desc: 'Impresión sobre film + termoadhesivo · funciona en algodón, mezclas, lycra, polar. Cero límite de color.' },
      { id: 'serig',     name: 'Serigrafía',           desc: 'Tradición textil chilena · alta resistencia al lavado, ideal para tiradas medianas-grandes con identidad fuerte.' },
      { id: 'tela',      name: 'Estampado por metro',  desc: 'Telas estampadas a pedido · base para confección propia o terceros · catálogo de bases ecológicas.' },
      { id: 'conf',      name: 'Confección completa',  desc: 'Mantas de picnic · pañoletas · uniformes · cubrealarmas · pop-ups y banderas para activación.' },
      { id: 'eco',       name: 'Línea eco',            desc: 'Textiles ecológicos + economía circular: mermas transformadas en camas/sacos para perros · donaciones a fundaciones.' }
    ],

    products: [
      { id: 'p-uniformes',    name: 'Uniformes corporativos',  cat: 'B2B', tag: 'Poleras, chaquetas, hoodies con logo bordado/estampado',  qty: '20 → 1.000+ und' },
      { id: 'p-event',        name: 'Activaciones de marca',   cat: 'B2B', tag: 'Poleras staff, mantas, banderas, tótems textiles',          qty: '50 → 500 und' },
      { id: 'p-manta',        name: 'Mantas de picnic',        cat: 'Pro', tag: 'Personalizadas con logo full-color, bordes terminados',    qty: '10 → 300 und' },
      { id: 'p-pano',         name: 'Pañoletas / bandanas',    cat: 'Pro', tag: 'Algodón natural · sublimación o estampado al agua',         qty: '50 → 2.000 und' },
      { id: 'p-cubre',        name: 'Cubrealarmas',            cat: 'Pro', tag: 'Para inmobiliarias · marcas de seguridad · publicidad OOH', qty: '5 → 100 und' },
      { id: 'p-tela',         name: 'Tela estampada / metro',  cat: 'B2B', tag: 'Para confeccionistas · bases varias · color a brief',       qty: 'Desde 1 m' },
      { id: 'p-merch',        name: 'Merchandising B2B',       cat: 'B2B', tag: 'Kits corporativos · onboarding · regalos clientes',         qty: '20 → 500 kits' },
      { id: 'p-eco',          name: 'Línea eco · perritos',    cat: 'Imp', tag: 'Camas y sacos hechos con mermas · donación o regalo',       qty: 'Producción social' }
    ],

    cases: [
      { tag: 'ENTRETENIMIENTO · TVN',    title: '31 Minutos · vestuario para el último Tini Desk',  desc: 'Estampados y piezas de vestuario para la aparición de 31 Minutos en el desk de TINI · timing apretado, materialidad de cámara, libreta de color del show respetada. El crédito vive en la storytelling de la marca.' },
      { tag: 'ACTIVACIÓN · AGENCIA',     title: 'Poleras staff · 200 unidades · activación nacional', desc: 'Operación tipo "activación a la chilena": brief el lunes, poleras en bodega del cliente el viernes. DTF para soportar lavados y sol. Repetición a partir del segundo evento.' },
      { tag: 'INMOBILIARIA · OOH',       title: 'Cubrealarmas full-color para fachada nueva',       desc: 'Una inmobiliaria pidió cubrir 18 alarmas con su gráfica de lanzamiento. Sublimación sobre poliéster reforzado · resistencia UV · instalación en obra.' },
      { tag: 'RETAIL · KIT ONBOARDING',  title: 'Kit nuevo empleado · pañoleta + manta + tote',     desc: 'Marca de retail con 200 ingresos mensuales · kit con 3 piezas estampadas a su brand book · entrega a domicilio del nuevo colaborador.' }
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
      'Caso 31 Minutos / TINI · activo sub-utilizado pero existente.'
    ],
    breaks: [
      'Marca sin sistema visual definido: la web actual no comunica el oficio premium que tiene detrás.',
      'Cero storytelling: 4 años, vestir a 31 Minutos, plotters Epson, mermas a perros · todo desperdiciado.',
      'No hay segmentación B2B vs B2C: misma puerta para una madre con un cumpleaños que para un gerente de marketing comprando 500 poleras.',
      'No hay landing por servicio: las campañas de Google llegan a páginas genéricas, score de calidad mediocre.',
      'Pixel y tracking de Meta inexistentes o mal calibrados · imposible escalar pauta.',
      'Sin embudo automático: leads entran a WhatsApp y los filtra una persona (cuello de botella).',
      'Sin always-on Google estructurado: campañas tipo "todo a la canasta" en vez de líneas dedicadas por servicio + intención.',
      'Sin proceso de testeo Meta: no hay framework para encontrar anuncios ganadores.',
      'Caso TINI / 31 Minutos · sin permiso comunicacional formalizado ni activo gráfico.',
      'Sustentabilidad como activo invisible: la economía circular debería ser un pillar entero, no un párrafo escondido.'
    ]
  },

  /* ============= LOGO · LECTURA + PROPUESTA DE RENAME ============= */
  logo: {
    asset: 'assets/logo/laestampa-logo-real.jpg',
    elements: [
      { lbl: 'Wordmark',     val: '"la estampa" · script bold gris cálido',       meaning: 'El mark principal YA dice "la estampa" en script handwritten · NO dice "textil". La palabra "textil" vive en el badge curvo secundario, pequeña. Esto es importante: la marca ya está casi rebautizada de hecho.' },
      { lbl: 'Badge curvo',  val: '"ESTAMPADO TEXTIL DIGITAL" all-caps sans',     meaning: 'Funciona como sello de oficio · simula la circularidad de un sello de imprenta. Pero "textil" acota la marca a lo que YA NO ES.' },
      { lbl: 'Tres olas',    val: 'Rojo · coral · turquesa (3 trazos curvos)',    meaning: 'Excelente metáfora visual: las 3 capas de tinta de un estampado · CMYK simplificado. Le da personalidad cálida y artesanal · separa a la marca de los competidores fríos.' },
      { lbl: 'Tipografía',   val: 'Script handwritten bold + sans curva',          meaning: 'Voz amistosa · close-to-craft · no industrial-frío. Perfecta para B2C / cultural · debe complementarse con un sans funcional para B2B premium.' }
    ],
    strengths: [
      'El mark principal NO dice "textil" — la marca está pre-rebautizada en su propio diseño.',
      'Las 3 olas de color son únicas + memorables · cero competidor chileno usa esa metáfora.',
      'Voz cálida + artesanal · perfecta para el storytelling de oficio.',
      'Composición circular tipo sello · escala bien en etiquetas, sellos, mockups, packaging.'
    ],
    weaknesses: [
      '"ESTAMPADO TEXTIL DIGITAL" en el badge curvo acota la marca a una sola línea de negocio · ignora confección, merch B2B, economía circular, activaciones.',
      'No hay versión monocroma definida (blanco / negro / sobre acento).',
      'Sin sistema iconográfico derivado de las 3 olas.',
      'No hay sub-marcas formalizadas (Pro / Merch / Eco) usando el sello como base.'
    ],
    recommendations: [
      'Mantener el mark principal "la estampa" — ya es el activo visual más fuerte y memorable de la marca.',
      'Reemplazar el badge curvo "ESTAMPADO TEXTIL DIGITAL" por "LA ESTAMPA · ORIGINALS · DESDE 2022" o "LA ESTAMPA · ESTAMPADO · MERCH · CIRCULAR".',
      'Usar las 3 olas como sistema gráfico derivado · iconografía por servicio · footers · favicons · sticker pack.',
      'Crear 3 sub-marcas con el mismo sello + bajada distinta: La Estampa · Pro / La Estampa · Merch / La Estampa · Eco.',
      'Manual de marca de 10-12 págs con todas las aplicaciones · etiquetas colgantes · packaging · stationery · uniformes.'
    ]
  },

  /* ============= PROPUESTA DE RENAME · "La Estampa" ============= */
  rename: {
    current: 'La Estampa Textil',
    proposed: 'La Estampa',
    subline: 'originals desde 2022 · estampado · merch · circular',
    why: 'La empresa nació como estampadora textil y ya no es solo eso. Hoy confecciona prendas completas, hace merchandising corporativo B2B (Nova Promo-level competition), produce cubrealarmas y banderas, dona mermas a fundaciones de perros, y vistió a 31 Minutos para el último Tini Desk. "Textil" en el nombre limita el reconocimiento futuro a un solo verbo cuando el negocio ya juega en 5 verbos distintos.',
    rationale: [
      { num: '01', title: 'El mark ya dice "la estampa"', body: 'El wordmark principal en script bold dice "la estampa" — la palabra "textil" vive en el badge curvo secundario. La marca está pre-rebautizada en su propio diseño visual. Quitar "textil" del badge superior consolida lo que la identidad ya hace de hecho.' },
      { num: '02', title: 'El negocio creció más allá del textil', body: 'Estampado por metro + confección completa + merch B2B (kits onboarding, regalo corporativo, uniformes) + cubrealarmas + activaciones + economía circular. "Textil" cubre solo el 30-40% de lo que se vende hoy.' },
      { num: '03', title: 'Frecuencia + memorabilidad', body: '"La Estampa" tiene mejor frecuencia oral, cabe mejor en un hashtag, en un IG handle, en una conversación de Whatsapp. Tres sílabas vs cinco. Es la diferencia entre "Nike" y "Nike Athletic".' },
      { num: '04', title: 'Permite sub-marcas claras', body: 'La Estampa · Pro (servicios) / La Estampa · Merch (B2B corporativo) / La Estampa · Eco (línea circular). Imposible escalar igual de elegante con "La Estampa Textil · Pro" (suena redundante).' },
      { num: '05', title: 'Equity de SEO se mantiene', body: 'Las búsquedas "la estampa textil chile" siguen funcionando porque "la estampa" está incluido y Google match parcial. Migramos URL principal pero mantenemos 301 redirect desde laestampatextil.cl. Cero pérdida de tráfico orgánico.' }
    ],
    transition: [
      { phase: 'Semana 1-2', name: 'Co-existencia',  detail: 'Logo nuevo aprobado · firmas de email duales ("La Estampa · ex-La Estampa Textil") · stories explicando el cambio.' },
      { phase: 'Semana 3-5', name: 'Rebrand RRSS',   detail: 'IG/LinkedIn cambia handle a @laestampa · bio actualizada · pinned post anunciando el cambio + por qué.' },
      { phase: 'Semana 6-8', name: 'Web nueva',      detail: 'Dominio principal pasa a laestampa.cl (o subdominio) · laestampatextil.cl mantiene 301 redirect permanente.' },
      { phase: 'Semana 9-12',name: 'Sub-marcas',     detail: 'Aparecen formalmente La Estampa · Pro / Merch / Eco con su sistema visual derivado.' },
      { phase: 'M6', name: 'Full transition',detail: 'Materiales físicos (etiquetas, uniformes, packaging) ya migrados al nuevo wordmark. Cierre del rebrand.' }
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
        title: '¿Por qué esta combinación importa para <span class="accent-orange">La Estampa</span>?',
        body: 'La Estampa opera entre cliente B2B premium (gerentes de marca, productoras, agencias) y cliente cultural (festivales, marcas con cobertura masiva). Cada conversación necesita su voz, su pauta y su track de pruebas. Los partnerships oficiales (Meta · Google · LinkedIn · AWS) significan que cada campaña pasa por canales de soporte priority. Sumado al equipo (20-25 personas in-house Santiago), al stack propio (Hapee CRM + Claude + Higgsfield) y a la dupla CEO+CFO con MBAs en marketing y finanzas, La Estampa accede a una operación con <em>autoridad editorial + agilidad tech</em> que ningún competidor regional puede replicar.'
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
      callout: 'El stack no es vanity tech — es lo que hace posible entregar campañas multi-canal, 3 propuestas de web + RRSS, embudo Hapee + IA, y reporte ESG mensual a La Estampa sin que el costo se dispare. Una agencia tradicional con Adobe/Figma + producción humana cobra 3-4× más por el mismo output. Operando con este stack, asignamos a La Estampa un equipo dedicado a un costo competitivo, manteniendo calidad enterprise + compliance. <em>La Estampa recibe el beneficio del stack sin pagar la curva de aprendizaje.</em>'
    }
  },

  /* ============= BENCHMARK + MATRIZ COMPETITIVA ============= */
  /* Score web (0-10) · tipo (directo Chile estampado · directo Chile merch B2B · global · referente) */
  market: [
    /* DIRECTO CHILE · ESTAMPADO TEXTIL */
    { name: 'Maule Estampados',         type: 'directo',   bucket: 'Estampado CL',  focus: 'Estampado masivo regional · pricing agresivo',          web: 5, gap: 'Web tipo catálogo plano · sin B2B · sin storytelling editorial.' },
    { name: 'Estampados Chile',         type: 'directo',   bucket: 'Estampado CL',  focus: 'Volumen + serigrafía industrial',                       web: 4, gap: 'Sitio antiguo · cero captura digital · no compite por audiencia premium.' },
    { name: 'Sublimasur',               type: 'directo',   bucket: 'Estampado CL',  focus: 'Sublimación masiva para retail',                        web: 6, gap: 'Buen tráfico orgánico · UX 2018 · sin línea B2B premium.' },
    { name: 'Coté Conde Estampados',    type: 'directo',   bucket: 'Estampado CL',  focus: 'Boutique creativo · IG-first',                          web: 7, gap: 'Identidad fuerte en IG · sin web de conversión · escala limitada.' },

    /* DIRECTO CHILE · MERCH B2B PREMIUM */
    { name: 'ALO Print (ALO Group)',    type: 'b2bcl',     bucket: 'Merch B2B CL',  focus: 'Imprenta + merchandising corporativo · hermana de ALO Rental', web: 6, gap: 'Apalancada en la base industrial ALO Group (rental + retail) · oficio impresión sí · oficio textil + ESG circular no.' },
    { name: 'Nova Promo (Nova Group)',  type: 'b2bcl',     bucket: 'Merch B2B CL',  focus: 'Importación + representación premium · brokerage corporate',  web: 7, gap: 'Trading internacional fuerte (Hugo Boss, Brookstone) · catálogo de importación · sin producción textil local · sin oficio circular ni narrativa editorial.' },
    { name: 'Genteamericana Chile',     type: 'b2bcl',     bucket: 'Merch B2B CL',  focus: 'Corporate merchandising clásico · uniformes + regalo',    web: 5, gap: 'Portafolio amplio pero comunicación 2018 · web tipo PDF · sin sustentabilidad ni curaduría editorial.' },
    { name: 'Promobrands Chile',        type: 'b2bcl',     bucket: 'Merch B2B CL',  focus: 'Agencia merch + producción · cuentas corporate',          web: 6, gap: 'Brokerage de Yiwu + producción local mixta · sin diferencial de oficio textil propio.' },
    { name: 'Branding Chile',           type: 'b2bcl',     bucket: 'Merch B2B CL',  focus: 'POS + visual merchandising + uniforme corporativo',       web: 6, gap: 'Fuerte en POS / retail · oficio textil limitado · sin propuesta sustentable.' },
    { name: 'Prom Promo (mayoristas)',  type: 'b2bcl',     bucket: 'Merch B2B CL',  focus: 'Merchandising B2B · catálogo grande mayorista',            web: 7, gap: 'B2B serio pero web tipo retailer · sin curaduría editorial · sin línea eco real.' },
    { name: 'Bestseller (uniformes)',   type: 'b2bcl',     bucket: 'Merch B2B CL',  focus: 'Uniforme corporativo + ropa workwear',                     web: 5, gap: 'Foco confección + costura institucional · sin propuesta cultural ni editorial.' },

    /* REFERENTES GLOBALES */
    { name: 'Custom Ink (USA)',         type: 'global',    bucket: 'Global · UX',   focus: 'Estampado on-demand B2C/B2B con configurador',            web: 9, gap: 'Referente UX para configurador · imposible imitar precio · sí imitar narrativa.' },
    { name: 'Printful (USA)',           type: 'global',    bucket: 'Global · UX',   focus: 'Print-on-demand con dropshipping',                         web: 9, gap: 'Modelo SaaS · no aplica modelo · sí referencia de mockups + sistema visual.' },
    { name: 'Teemill (UK)',             type: 'referente', bucket: 'Global · ESG',  focus: 'Sustentabilidad real · circular · zero waste',             web: 9, gap: 'Benchmark de comunicación sustentable · narrativa de circularidad clara y honesta.' },
    { name: 'Aquafil Econyl',           type: 'referente', bucket: 'Global · ESG',  focus: 'Storytelling industrial sustentable',                       web: 9, gap: 'Referencia editorial · cómo se cuenta la economía circular en B2B serio.' },

    /* US · OBJETIVO */
    { name: 'La Estampa Textil',        type: 'us',        bucket: 'Objetivo',      focus: 'Estampado + confección + merch B2B + circular',           web: 6, gap: 'Tiene oficio + caso TINI + tecnología seria. Falta sistema digital que lo proyecte.' }
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
      kicker: 'INSIGHT 03 · TINI Y 31 MINUTOS',
      title: 'El caso TINI / 31 Minutos vale más que cualquier campaña pagada del año.',
      body: 'Hacerle ropa a 31 Minutos para el desk de TINI no es un dato, es una credencial pop. Aplicada bien (con permiso de los talents donde corresponda), eleva el ticket promedio porque convierte la marca de "proveedor" en "el que vistió a X".',
      use: 'Caso editorial dedicado · BTS, materiales, story de cómo se resolvió el deadline · permission management cuidado. Es la prueba social más fuerte del portafolio.'
    },
    {
      kicker: 'INSIGHT 04 · SUSTENTABILIDAD',
      title: 'En 2026 una marca no puede pedirle uniformes a un proveedor que tira las mermas a la basura.',
      body: 'Los gerentes de marketing tienen meta ESG asignada. La economía circular de La Estampa (mermas → camas y sacos para perros donados) es un activo de venta directa que reduce fricción con compras y agrega narrativa de marca al cliente final.',
      use: 'Línea Eco como pillar permanente · timeline visible "kilos de merma recuperados · camas donadas · fundaciones receptoras". Cada cotización lleva métrica ESG anexada.'
    },
    {
      kicker: 'INSIGHT 05 · GOOGLE',
      title: 'Google Ads ya rinde · el problema es que no escala porque la web actual castiga el quality score.',
      body: '70-80 cierres/mes con la web actual es resultado de la fuerza del search intent + el oficio operativo. Si se entrega cada campaña a una landing dedicada con copy y proof específicos del servicio, el CPL baja 30-50% y el ticket promedio sube por mejor calificación de lead.',
      use: 'Always-on con landings dedicadas · estampado/serigrafía + merch B2B + activaciones + por-metro · cada una con su funnel propio y métricas separadas.'
    }
  ],

  /* ============= ESTRATEGIA COMUNICACIONAL ============= */
  comm: {
    territory: 'Oficio editorial textil · tinta con propósito · proveedor partner.',
    tone: {
      voice: 'Maestra de taller que escribe bien · honesta, técnica, ligeramente irreverente, sin marketing-speak.',
      do: [
        'Hablamos en chileno editorial · "este metro de tela", "los plotters Epson", "el deadline imposible".',
        'Mostramos antes/después de la operación · BTS, no solo producto final.',
        'Citamos materiales por nombre (algodón orgánico GOTS, poliéster reciclado RPET).',
        'Reconocemos al cliente que confió primero · cadena de prueba social.'
      ],
      dont: [
        'No prometemos "el más barato".',
        'No usamos "calidad" como adjetivo · mostramos calidad con detalle técnico.',
        'No copiamos el lenguaje genérico de catálogo de mayoristas.',
        'No tratamos el caso TINI como anécdota · es activo editorial.'
      ]
    },
    pillars: [
      {
        num: '01', name: 'Casos en faena', weight: 28, kicker: 'AUTORIDAD',
        desc: 'Trabajo real para clientes reales: 31 Minutos/TINI, inmobiliarias, agencias, retailers. Antes/después, BTS de taller, deadline cumplido. La prueba social que el segmento B2B exige antes de cotizar.',
        formats: ['Carrusel IG/LinkedIn', 'Reel BTS 30-60s', 'Caso PDF descargable', 'Post largo LinkedIn'],
        cadence: '3 al mes'
      },
      {
        num: '02', name: 'Oficio técnico', weight: 22, kicker: 'DIFERENCIACIÓN',
        desc: 'Educación sobre el oficio: sublimación vs DTF vs serigrafía, gestión de color, qué tela aguanta qué uso. Construye autoridad técnica y baja fricción de cotización porque el lead llega informado.',
        formats: ['Reel 30s explicativo', 'Carrusel comparativo', 'Blog SEO técnico', 'Capsulas video equipo'],
        cadence: '3 al mes'
      },
      {
        num: '03', name: 'Línea Eco · circular', weight: 18, kicker: 'PROPÓSITO',
        desc: 'Mermas a camas y sacos · textiles ecológicos · fundaciones aliadas · kilos recuperados al mes. Pillar permanente con frecuencia propia. Es el activo ESG que cierra cotizaciones de marcas grandes.',
        formats: ['Mini doc 2-3 min', 'Carrusel impacto', 'Stories proceso taller', 'Newsletter eco'],
        cadence: '2 al mes'
      },
      {
        num: '04', name: 'Merch B2B · partner mode', weight: 16, kicker: 'CONVERSIÓN',
        desc: 'Kits corporativos, onboarding, regalo cliente, activaciones. Foco en partner de agencias y productoras. Mockups, cotización express, time-to-bodega visible. Vendido como sistema, no como pedido suelto.',
        formats: ['Carrusel mockups', 'Caso agencia/productora', 'Post LinkedIn long-form', 'PDF capacidades'],
        cadence: '2 al mes'
      },
      {
        num: '05', name: 'Voz Priscila · directora', weight: 10, kicker: 'AUTORIDAD HUMANA',
        desc: 'La fundadora como cara editorial: decisiones de diseño, criterios de selección de tela, lecciones de 4 años de oficio. Construye humanización + autoridad. Atrae prensa y partners.',
        formats: ['Editorial LinkedIn 1ra persona', 'Reel entrevista corto', 'Quote card', 'Podcast invitada'],
        cadence: '1-2 al mes'
      },
      {
        num: '06', name: 'Cultura pop · textil chileno', weight: 6, kicker: 'BRAND LIFT',
        desc: 'Capitalizar momentos: festivales, fechas patrias, fiestas masivas, lanzamientos de marcas que nos compraron. Posicionar como la marca textil que vive la cultura chilena, no solo el mercado.',
        formats: ['Reactivo IG/TikTok', 'Edición especial', 'Reel cultura'],
        cadence: 'Reactivo + 1 planeado/mes'
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
      accent: '#FF5A1F',       /* DTF / serigrafía caliente */
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
      { id: 'pop',      name: 'Pop chileno',          tag: 'Color saturado tipo 31 Minutos, alta energía, packaging', use: 'Activaciones · cultura · brand lift' },
      { id: 'eco',      name: 'Eco · circular',        tag: 'Verde lime, mermas, perros, fundaciones, kilos recuperados', use: 'Línea sustentable · ESG' }
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
        desc: 'Tráfico desde Google Ads (always-on) + Meta (testeo de creativo) + orgánico social + referido. Cada origen aterriza en landing específica: estampado/serigrafía, merch B2B, activaciones, por-metro.',
        levers: [
          'Search Ads always-on con landings dedicadas (quality score 8+)',
          'Meta · sistema rotativo de testeo de creativo · ganadores escalados',
          'IG/LinkedIn orgánico con CTA explícito a cotización',
          'SEO en cluster técnico: "DTF Chile", "estampado activación", "merch B2B sustentable"',
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
        num: 'L1', name: 'Estampado · serigrafía', focus: 'B2B + B2C operativo',
        desc: 'Bottom-of-funnel · intención de compra alta. Foco en serigrafía, sublimación, DTF, "estampado de poleras", "estampado uniforme". Aterriza en landing dedicada · serigrafía-estampado.',
        budgetShare: '38%',
        keywords: ['estampado de poleras', 'serigrafía Chile', 'DTF Chile', 'sublimación textil', 'estampar uniforme empresa'],
        landing: 'Landing Estampado + Serigrafía'
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
        desc: '4 variables a probar por servicio: (1) hook (oficio · deadline · sostenibilidad · pop chileno) · (2) formato (video taller · carrusel mockup · foto producto · UGC cliente) · (3) público (LAL clientes · interés textil/marcas · agencias) · (4) CTA (cotizar · descargar PDF · WhatsApp).',
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
      { ang: 'OFICIO',       hook: '"Así se imprime un polera que aguanta 50 lavados"',          format: 'Reel taller · plotter Epson en acción',          cta: 'Cotizar mi pedido' },
      { ang: 'DEADLINE',     hook: '"Lunes el brief, viernes en tu bodega"',                    format: 'Carrusel proceso 5 slides',                       cta: 'Pedir cotización express' },
      { ang: 'TINI',         hook: '"Le hicimos la ropa a 31 Minutos para el desk de TINI"',    format: 'Reel BTS · 30s · con permiso',                    cta: 'Ver casos' },
      { ang: 'ECO',          hook: '"Tus mermas se convierten en una cama para un perro"',      format: 'Mini doc 90s · taller + fundación',               cta: 'Conocer Línea Eco' },
      { ang: 'POP',          hook: '"Lo que se usó en el último festival lo hicimos acá"',      format: 'Carrusel after · activación visible',            cta: 'Cotizar mi evento' },
      { ang: 'PRESCRIPTOR',  hook: '"Priscila explica: ¿DTF o sublimación para tu marca?"',      format: 'Reel cara · 60s · sub. abajo',                   cta: 'Ver el video completo' }
    ]
  },

  /* ============= WEB MADRE · ARQUITECTURA ============= */
  motherWeb: {
    name: 'laestampatextil.cl · v2.0',
    thesis: 'Web madre editorial · 9 secciones · arquitectura B2B-first con derivación clara a las 2 landings de servicio y al módulo por metro. Cero relleno, todo conduce a cotización.',
    sections: [
      { num: '01', id: 'hero',       label: 'Hero editorial · video taller real',
        desc: 'Titular en display condensed · subtítulo en serif italiano · CTA primario "Cotizar" + secundario "Ver casos". Loop de 12s del plotter Epson trabajando.' },
      { num: '02', id: 'capacities', label: 'Capacidades · sub-marcas',
        desc: 'Grid de 3 tiles: Pro · Merch · Eco. Cada uno con su accent color, derivación a landing dedicada o sección.' },
      { num: '03', id: 'cases',      label: 'Casos · prueba social',
        desc: 'Carrusel horizontal con TINI/31 Minutos primero, inmobiliaria, agencia, retail. Cada caso con foto, tag, deadline cumplido, ticket.' },
      { num: '04', id: 'oficio',     label: 'Oficio · cómo se imprime',
        desc: '4 cards técnicas: Sublimación · DTF · Serigrafía · Confección. Con foto BTS y diferencia operativa explicada en 3 líneas.' },
      { num: '05', id: 'eco',        label: 'Línea Eco · circular',
        desc: 'Pillar entero · kilos recuperados, fundaciones, perros donados, narrativa de propósito. Imagen documental.' },
      { num: '06', id: 'priscila',   label: 'Voz · Priscila Sarmiento',
        desc: 'Editorial con foto · entrevista corta · pilar de autoridad humana. Links a piezas largas.' },
      { num: '07', id: 'process',    label: 'Cómo trabajamos · 5 etapas',
        desc: 'Brief → cotización <24h → mockup → producción → entrega. Cada etapa con tiempo y entregable visible.' },
      { num: '08', id: 'clients',    label: 'Clientes que confían',
        desc: 'Banda de logos de clientes con permiso · agencias, productoras, marcas. Pruebas social sin más.' },
      { num: '09', id: 'cta',        label: 'CTA final · cotización',
        desc: 'Formulario integrado Hapee · 5 campos máx · tracking server-side. WhatsApp como alternativa visible.' }
    ],
    techStack: 'Next.js o Astro (estático+ISR) · hosting CDN · GA4 + Pixel Meta + CAPI · Hapee integrado · cero CMS pesado.'
  },

  /* ============= LANDING 1 · ESTAMPADO + SERIGRAFÍA ============= */
  landEstampado: {
    name: 'Landing · Estampado + Serigrafía',
    target: 'B2B operativo · agencias · productoras · jefes de marketing comprando 50-1.000 unidades',
    accent: '#FF5A1F',
    sections: [
      { num: '01', label: 'Hero · "Tinta firme en tu prenda"', detail: 'Video taller 8s · headline display · CTA "Cotizar poleras" · prueba "70+ cierres/mes"' },
      { num: '02', label: 'Servicios técnicos', detail: 'Sublimación · DTF · Serigrafía · Bordado · cada uno con foto real, durabilidad lavados, mejor uso' },
      { num: '03', label: 'Por qué La Estampa', detail: '4 pilares: plotters Epson certificados, deadline real, gestión de color, Línea Eco' },
      { num: '04', label: 'Cómo funciona', detail: '5 pasos · brief → mockup → aprobación → producción → entrega · timeline visible' },
      { num: '05', label: 'Casos · activaciones', detail: 'TINI/31 Minutos + agencia activación + inmobiliaria. Foto + ticket cumplido' },
      { num: '06', label: 'Cotización express', detail: 'Form de 6 campos · cantidad, prenda, fecha, brief, contacto · responde IA en 3 min' },
      { num: '07', label: 'Garantía + FAQ', detail: 'FAQ con 8 preguntas reales · "¿qué tela aguanta DTF?", "¿pueden producir 500 en 5 días?"' }
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
      { num: '01', label: 'Hero · "Merch que tu marca defiende"', detail: 'Hero editorial · foto kit corporativo real · CTA "Solicitar capacidades" · prueba "marcas que confiaron"' },
      { num: '02', label: 'Líneas B2B', detail: 'Kits onboarding · regalo cliente · activación · uniforme corporativo · merch eventos. Card por línea con foto y unit cost referencial' },
      { num: '03', label: 'Catálogo curado', detail: 'Selección de 24 productos premium (no es Alibaba) · cada uno con materialidad, mín cantidad, time-to-bodega' },
      { num: '04', label: 'Sustentabilidad · Eco', detail: 'Pillar visible · cada cotización incluye opción de "línea eco con merma recuperada" · ESG dataset para el comprador' },
      { num: '05', label: 'Casos B2B', detail: 'Marca retail (200 ingresos/mes), agencia activación, productora festival. Caso con resultado concreto' },
      { num: '06', label: 'Proceso B2B', detail: 'Brief → cotización con mockup → aprobación → producción → entrega. SLA explícito por etapa' },
      { num: '07', label: 'PDF capacidades', detail: 'Descargable con un email · documento de 8 págs vendible · genera lead calificado' },
      { num: '08', label: 'CTA · cotización dedicada', detail: 'Form B2B con campos avanzados: empresa, contacto, presupuesto rango, fecha, brief. Asignación directa a ejecutivo B2B' }
    ],
    proofPoints: [
      { k: '$400k+', v: 'ticket prom. cliente B2B activo' },
      { k: '$50k',   v: 'ticket prom. cliente nuevo (entrada)' },
      { k: 'ESG',    v: 'data anexa a cada cotización' },
      { k: '24/7',   v: 'descarga PDF capacidades sin form' }
    ]
  },

  /* ============= ECONOMÍA CIRCULAR · NARRATIVA ============= */
  eco: {
    thesis: 'Línea Eco es el activo invisible más potente de La Estampa. Las mermas de producción se transforman en camas y sacos para perros donados a fundaciones. Es propósito real, no greenwashing. Lo comunicamos con métricas honestas y narrativa documental.',
    stages: [
      { num: '01', name: 'Recolección',  desc: 'Sobras de tela de cada producción se separan, se categorizan por base (algodón, polar, mezcla) y volumen.' },
      { num: '02', name: 'Confección',   desc: 'Equipo confecciona camas y sacos en formatos S/M/L · diseño funcional · acabados de calidad real, no descarte disimulado.' },
      { num: '03', name: 'Distribución', desc: 'Donación directa a fundaciones aliadas con reporte de cuántas piezas + foto del entrega · cero intermediarios.' },
      { num: '04', name: 'Reporte',      desc: 'Métrica pública trimestral: kilos de merma recuperados · camas confeccionadas · fundaciones receptoras · perros impactados.' }
    ],
    kpis: [
      { k: 'kg/mes',    v: 'merma recuperada' },
      { k: 'camas/mes', v: 'confeccionadas' },
      { k: 'fund.',     v: 'aliadas receptoras' },
      { k: '%',         v: 'producción con merma cero' }
    ],
    use: [
      'Anexar reporte ESG mini (1 página) a cada cotización B2B >$300k.',
      'Línea Eco como CTA opcional en todos los kits B2B · agrega 5-8% al ticket y >40% a la percepción de valor.',
      'Editorial mensual con la fundación + foto del proceso · brand lift orgánico real.',
      'Co-branding posible con marcas amigas (Komvida, Sustenta, etc.) en campañas conjuntas.'
    ]
  },

  /* ============= CASO TINI / 31 MINUTOS · ASSET MANAGEMENT ============= */
  tiniCase: {
    headline: 'Vestimos a 31 Minutos para el último Tini Desk · cómo se cuenta sin quemar el activo',
    why: 'Este caso vale más que el mejor anuncio del año. Mostrar oficio + cultura pop + permiso editorial cuidado convierte la marca en "la que viste a las marcas que importan".',
    steps: [
      { num: '01', name: 'Permission management', desc: 'Validar con productora del show + TINI representación · acuerdo escrito sobre alcance de uso del crédito (web · cotización · sin mass paid).' },
      { num: '02', name: 'BTS editorial',         desc: 'Foto profesional de la prenda terminada + plano de taller + storytelling honesto del deadline. Cero exageración.' },
      { num: '03', name: 'Caso PDF descargable', desc: 'Caso de 4 páginas con materialidad, tiempos, criterios de color. Asset para cierre de clientes top.' },
      { num: '04', name: 'Editorial web',         desc: 'Página de caso en la web madre con foto + texto editorial de Priscila · permiso de mostrar al talent o al show según acuerdo.' },
      { num: '05', name: 'LinkedIn long-form',    desc: 'Post de Priscila contando el oficio detrás · cero name-drop directo si no hay permiso · 2.000-3.000 caracteres.' }
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
        sub: 'Sublimación, DTF y serigrafía con plotters Epson certificados. Lunes el brief, viernes en bodega de tu cliente. 70+ cierres mensuales lo confirman.',
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
        { id: 'oficio',     name: 'Oficio · capacidades',  detail: 'DTF · sublimación · serigrafía · confección. Cada técnica con su mejor uso, durabilidad de lavado y materialidad.', image: 'assets/img/taller-mesa.png' },
        { id: 'producto',   name: 'Pieza editorial',       detail: 'Foto editorial de prendas terminadas con luz natural · tipo lookbook. La prenda es protagonista, no la oferta.', image: 'assets/img/taller-polera.png' },
        { id: 'casos',      name: 'Casos · 4 años',        detail: '31 Minutos + agencia activación + inmobiliaria + retail · prueba social con permission management.' },
        { id: 'proceso',    name: 'Cómo trabajamos',       detail: 'Brief → cotización <24h → mockup → producción → entrega · timeline visible con SLA por etapa.' },
        { id: 'priscila',   name: 'Voz · Priscila Sarmiento', detail: 'Editorial de la fundadora · entrevista corta · 4 años de oficio narrados en primera persona.' },
        { id: 'eco-anexo',  name: 'Línea Eco · anexo ESG', detail: 'CTA opcional en la cotización · mermas a perros + textiles certificados disponibles para tu pedido.' },
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
      id: 'pop', idx: 'W2', codename: 'pop-industrial',
      name: 'Pop Industrial',
      tag: 'cultura pop · 31 Minutos × Tini · maximalismo chileno',
      insightId: 'INSIGHT 03',
      insightLine: 'El caso TINI / 31 Minutos vale más que cualquier campaña pagada.',
      thesis: 'Si La Estampa adopta voz pop chilena (la voz que ya se ganó vistiendo a 31 Minutos para el Tini Desk), se convierte en la opción cultural por defecto cuando una marca quiere "estar en el momento". Web con energía máxima: colores saturados primarios, tipografía display tipo cartel de fiesta, animaciones bouncy, marquees infinitos, confetti on interaction. Foco TikTok + IG + masivo.',
      target: 'Productoras de eventos · agencias creativas culturales · marcas con campañas masivas · sellos musicales · TV / streaming.',
      refs: '31 Minutos · Pantone Live · Suplemento Wikén · Tini concert merch · Devendra Banhart × Bombay Bicycle posters · Acidx',
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
        kicker: '— VESTIMOS A LAS MARCAS QUE PASAN A LA HISTORIA',
        title: ['Tinta que se', '<em>queda</em>', 'en la cultura.'],
        sub: 'Hicimos la ropa de 31 Minutos para el último Tini Desk. Vestimos festivales, activaciones, lanzamientos y marcas que pesan en lo masivo. Si tu campaña tiene que verse desde la luna, ven.',
        cta: 'Cotizar mi evento →',
        cta2: 'Ver casos pop',
        image: 'assets/img/pop-hero.png',
        imageAlt: 'Poleras vibrantes en festival production · backstage activación',
        stats: [
          { v: '31 Min.', k: 'TINI DESK · 2026' },
          { v: '+200', k: 'POLERAS/ACTIVACIÓN' },
          { v: '5 días', k: 'BRIEF → BODEGA' },
          { v: 'CL', k: 'EVENTOS NACIONALES' }
        ]
      },
      sections: [
        { id: 'manifiesto',  name: 'Manifiesto pop',         detail: 'Editorial de marca: por qué La Estampa es la elección cuando una campaña tiene que romper la cultura. Headline gigante + foto pop.' },
        { id: 'casos-pop',   name: 'Casos · cultura pop',    detail: 'TINI / 31 Minutos · festival X · activación Y. Caso con foto vibrante + ticket cumplido + métrica de momento social.', image: 'assets/img/pop-confetti.png' },
        { id: 'productos',   name: 'Catálogo pop',           detail: 'Poleras staff · bandanas · mantas · banderas · tótems. Cada producto con foto saturada + min/máx unidades + lead time.', image: 'assets/img/pop-polera.png' },
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
      id: 'verde', idx: 'W3', codename: 'verde-circular',
      name: 'Verde Circular',
      tag: 'documental · sustentable · slow web · ESG real',
      insightId: 'INSIGHT 04',
      insightLine: 'En 2026 no se compra a un proveedor que tira las mermas.',
      thesis: 'Si La Estampa lidera la narrativa de economía circular en estampado textil chileno, cierra contratos con corporativos que tienen presupuesto ESG asignado y no tienen proveedor que les cierre la métrica de sostenibilidad. Web tipo documental: slow scroll, narrativa larga, métricas públicas trimestrales, mapa de fundaciones aliadas, perros donados. Cero greenwashing · todo verificable.',
      target: 'Sustainability officers · ESG corporate · marcas con narrativa verde · fundaciones partners · prensa eco.',
      refs: 'Teemill · Patagonia · Aquafil Econyl · Allbirds · Stella McCartney · Houdini Sportswear',
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
        kicker: '— ESG VERIFICABLE · REPORTE TRIMESTRAL PÚBLICO',
        title: ['Tinta con', '<em>propósito</em>', 'medible.'],
        sub: 'Estampamos con textiles certificados (GOTS · RPET · cáñamo) y cerramos el ciclo: las mermas se transforman en productos donados a fundaciones aliadas, y cada cotización lleva su anexo ESG con kilos recuperados + CO2eq evitado.',
        cta: 'Cotizar con anexo ESG →',
        cta2: 'Ver el ciclo circular',
        image: 'assets/img/verde-hero.png',
        imageAlt: 'Manos clasificando mermas textiles · proceso circular La Estampa',
        stats: [
          { v: '~kg/mes', k: 'MERMA RECUPERADA' },
          { v: 'CO2eq', k: 'EVITADO REPORTADO' },
          { v: 'GOTS', k: 'CERTIFICACIÓN BASE' },
          { v: '5+', k: 'FUNDACIONES ALIADAS' }
        ]
      },
      sections: [
        { id: 'manifiesto',  name: 'Por qué circular',       detail: 'Editorial largo: la decisión de hacer economía circular real en un negocio chico. Tono Patagonia: honestidad técnica + propósito sin marketing-speak.' },
        { id: 'textiles',    name: 'Textiles certificados',  detail: 'Algodón orgánico GOTS · poliéster reciclado RPET · cáñamo industrial · cada uno con ficha técnica + trazabilidad de origen + huella ambiental medida.', image: 'assets/img/verde-hero.png' },
        { id: 'ciclo',       name: 'El ciclo · 4 etapas',    detail: 'Recolección → categorización → confección → distribución. Cada etapa con foto documental + dato cuantitativo verificable.' },
        { id: 'fundaciones', name: 'Mapa de fundaciones',    detail: 'Mapa interactivo de Chile con fundaciones aliadas · animales, comedores comunitarios, hogares de adultos mayores · cuántas piezas recibió cada una.' },
        { id: 'co2',         name: 'Huella medida',           detail: 'CO2eq evitado por tu pedido específico · agua ahorrada por base certificada · auditoría externa B-Corp desde Q3 2026.' },
        { id: 'esg-doc',     name: 'Anexo ESG · descargable', detail: 'Reporte trimestral público en PDF descargable · 4-12 págs. formateado para anexar directo a tu reporte GRI / ISO 26000.' },
        { id: 'partners',    name: 'Co-branding sustentable',detail: 'Línea de campañas conjuntas con marcas amigas (Komvida, Sustenta, otras). Co-creación de productos circulares con narrativa ESG.' },
        { id: 'cotizar-esg', name: 'Cotizar con propósito',  detail: 'Formulario B2B con check "anexo ESG en la cotización" · sin costo extra · activación inmediata.' }
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
        { name: 'Carrusel técnico 6sl',   use: 'Comparativas DTF/sublimación/serigrafía',          cadence: '3/mes' },
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
        { img: 'assets/img/pop-hero.png',       kicker: 'BTS · TINI DESK',     title: 'Cómo se hizo el vestuario 31 Min', cta: 'Ver caso →' }
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
        kicker: '— BTS · ACTIVACIÓN FESTIVAL X',
        title: 'Cuando tu polera sale en TV nacional sin permiso.',
        body: 'POV: lunes te mandamos 200 poleras para tu staff de festival. Viernes están repartidos. Domingo salen en TV nacional. Lunes te están pidiendo más. Esa es La Estampa. Si tu marca tiene que estar EN la fiesta y no en el folleto, escribinos.\n\n#popchileno #tini #marca',
        metrics: [{ k: 'Tiempo brief → bodega', v: '5 días' }, { k: 'Poleras producidos', v: '200' }, { k: 'Repetición cliente', v: '92%' }],
        tags: ['#popchileno', '#festivales', '#staffpolo']
      }
    },

    {
      id: 'rrss-verde', idx: 'R3', linkedWeb: 'W3',
      name: 'Documental Eco',
      tag: 'Instagram documental · Facebook ESG · narrativa larga',
      voice: 'Cronista sustentable. Tono Patagonia: honestidad técnica + propósito sin moralina. Cita fuentes. Muestra el proceso completo, incluyendo lo que falla.',
      channels: [
        { id: 'ig',  name: 'Instagram', pct: 60, focus: 'Plataforma principal · carruseles narrativos con datos · reels documental BTS taller · galería de procesos · stories proceso semanal · reporte mensual visible en bio.' },
        { id: 'fb',  name: 'Facebook',  pct: 40, focus: 'Audiencia corporate + comunidades ESG / sustainability · long-form descargable PDF · grupos de RSE · eventos con fundaciones · posts shareable para Sustainability Officers.' }
      ],
      formats: [
        { name: 'Carrusel impacto IG · 8 sl', use: 'Métricas trimestrales + foto + dato verificable',                cadence: '1/trimestre' },
        { name: 'Reel documental IG · 60s',   use: 'BTS proceso + textiles certificados + impacto medible',          cadence: '2/mes' },
        { name: 'Post largo FB · reporte',    use: 'PDF mini-reporte ESG anclado + caso B2B descargable',            cadence: '1/mes' },
        { name: 'Stories proceso eco IG',     use: 'BTS clasificación + confección + entrega documental',            cadence: 'semanal' },
        { name: 'Post FB grupos sustainable', use: 'Compartir reporte en grupos RSE · CTA co-branding',              cadence: '2/mes' }
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
        title: 'Carrusel impacto · 8 slides',
        slides: [
          { n: '01/08', kind: 'HOOK',  title: 'Cada metro de merma',            body: 'Tiene un perro esperando una cama. Es así de simple.' },
          { n: '02/08', kind: 'DATO',  title: 'Industria textil chilena',        body: '8-15% de merma promedio por producción. Antes terminaba en basura.' },
          { n: '03/08', kind: 'DATO',  title: 'Q1 La Estampa',                  body: '~XX kg recuperados · ~XX camas confeccionadas · 5 fundaciones.' },
          { n: '04/08', kind: 'DATO',  title: 'Trazabilidad real',               body: 'Foto antes/después de cada lote. Fundación con nombre.' },
          { n: '05/08', kind: 'DATO',  title: 'GOTS + RPET + Cáñamo',           body: 'Bases certificadas disponibles a brief.' },
          { n: '06/08', kind: 'CASO',  title: 'Reporte público',                  body: 'PDF descargable trimestralmente · datos para tu ESG.' },
          { n: '07/08', kind: 'CASO',  title: 'Co-branding posible',              body: 'Líneas conjuntas con marcas amigas (Komvida, Sustenta).' },
          { n: '08/08', kind: 'CTA',   title: 'Cotiza con anexo ESG',            body: 'Cero costo extra. Cero greenwashing. Datos reales.' }
        ]
      },
      samplePost: {
        kicker: '— REPORTE Q1 · CICLO CIRCULAR',
        title: 'La merma que un proveedor tira es la cama de un perro que duerme.',
        body: 'En el primer trimestre recuperamos kilos de tela sobrante de nuestras producciones. Las clasificamos por base, las cosimos en camas y sacos, y las donamos directo a fundaciones aliadas. Las fotos no son montaje: son los perros reales. Esto no nos hace una marca verde — nos hace una marca honesta. Lo demás (texto + dataset) está en el reporte que descargas abajo.\n\n— Priscila + equipo La Estampa',
        metrics: [{ k: 'kg merma recuperada Q1', v: '~XX' }, { k: 'Camas donadas', v: '~XX' }, { k: 'Fundaciones receptoras', v: '~X' }],
        tags: ['#economiacircular', '#esgchile', '#perritossinhogar']
      }
    }
  ],

  /* ============= ROADMAP · primeras 12 semanas por fase ============= */
  roadmap: [
    { mo: 'Semana 1-2',  name: 'Fundación', focus: 'Sistema visual + tracking + Hapee + caso TINI',
      milestones: ['Identidad visual + manual de marca v1', 'Hapee CRM operativo con flujo IA básico', 'Pixel Meta + GA4 + CAPI funcionando', 'Caso TINI con permission + asset PDF'] },
    { mo: 'Semana 3-5',  name: 'Web madre', focus: 'Diseño + dev de laestampatextil.cl v2.0',
      milestones: ['Wireframe + design system', 'Dev Next.js/Astro con CMS mínimo', 'Migración SEO sin pérdida de rankings actuales', 'QA + lanzamiento staging'] },
    { mo: 'Semana 6-8',  name: 'Landings 1+2', focus: 'Landing Estampado + Landing Merch B2B en aire',
      milestones: ['Landing Estampado + Serigrafía live', 'Landing Merch B2B live + PDF capacidades', 'Campañas Google redireccionadas a landings', 'Conversiones por landing tracked'] },
    { mo: 'Semana 9-12', name: 'Always-on Google', focus: 'Estructura 4 líneas + quality score 8+',
      milestones: ['4 líneas always-on con LP dedicadas', 'Quality score promedio 8+', 'CPL reducido 30-40%', 'Reporte semanal automatizado'] },
    { mo: 'Semana 13-16',name: 'Meta · testeo', focus: 'Sistema F1+F2 · descubrir ganadores',
      milestones: ['24 creativos en testeo F1', '2-3 ganadores por servicio escalados a F2', 'Lookalikes 1-3% performando', 'ROAS >3× promedio'] },
    { mo: 'Semana 17-20',name: 'Línea Eco editorial', focus: 'Sistema de reporte público + co-branding',
      milestones: ['Métricas trimestrales publicadas', 'Editorial mensual con fundación', 'Anexo ESG en cotización B2B activo', 'Primer co-branding cerrado'] },
    { mo: 'Semana 21-28',name: 'Retención + LTV', focus: 'Loop · email + Meta retención + LTV',
      milestones: ['Email mensual segmentado', 'Meta dinámico con catálogo', 'LTV promedio +20% vs arranque', 'Tasa recurrencia >30%'] },
    { mo: 'Semana 29-44',name: 'Escala + voz', focus: 'Voz Priscila + prensa + cierres premium',
      milestones: ['LinkedIn de Priscila como activo editorial', 'Primera salida en prensa industria', '5+ casos B2B cerrados ticket >$1M', 'KPI cierre mensual >120/mes'] }
  ],

  /* ============= INVERSIÓN + ENTREGABLES ============= */
  invest: {
    notes: 'Cifras de referencia · trabajo por fases · facturación mensual con SLA. Producción de pauta (Google + Meta) gestionada en cuenta del cliente con transparencia total.',
    phases: [
      {
        id: 'F1', name: 'Fase 1 · Fundación (M1)', range: 'Inversión única + onboarding',
        items: [
          'Identidad visual + manual de marca v1 (10-12 págs)',
          'Setup Hapee CRM + agente IA primer flujo',
          'Tracking server-side · Pixel Meta + GA4 + CAPI',
          'Caso TINI · permission + PDF + editorial',
          'Audit Google Ads y baseline de KPIs'
        ]
      },
      {
        id: 'F2', name: 'Fase 2 · Web + Landings (M2-M3)', range: 'Inversión única',
        items: [
          'Diseño + dev web madre (9 secciones)',
          'Landing Estampado + Serigrafía dedicada',
          'Landing Merchandising B2B + PDF capacidades',
          'Migración SEO + redirects desde web actual',
          'QA + lanzamiento + capacitación equipo'
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
  }
};
