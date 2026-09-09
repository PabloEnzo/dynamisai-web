export const t = {
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      projects: "Proyectos",
      contact: "Contacto",
      talkToUs: "Hablemos",
    },
    hero: {
      title: ["Software que ", "piensa", " contigo"] as [string, string, string],
      description:
        "En DynamisAI construimos productos de software donde la inteligencia artificial no es un añadido: es el núcleo. Cada línea de código diseñada para potenciar lo que las personas hacen mejor.",
      viewProjects: "Ver proyectos",
      learnMore: "Conocer más →",
      tags: ["IA integrada", "Alto rendimiento", "Privacidad primero", "Escalable"],
      scroll: "scroll",
    },
    about: {
      eyebrow: "Quiénes somos",
      title: ["Una empresa nacida desde la ", "curiosidad técnica"] as [string, string],
      description:
        "DynamisAI nació con una premisa clara: el software del futuro no puede ser estático. Combinamos ingeniería de software rigurosa con inteligencia artificial desarrollada en casa para crear productos que aprenden, se adaptan y escalan.",
      values: [
        {
          title: "IA como núcleo",
          desc: "No integramos IA como una función extra. La construimos desde el interior de cada producto, entrenando modelos propios adaptados a cada necesidad.",
        },
        {
          title: "Investigación aplicada",
          desc: "Cada producto que desarrollamos es el resultado de investigación real. Entendemos la tecnología antes de usarla.",
        },
        {
          title: "Sin dependencias externas",
          desc: "Apostamos por arquitecturas propias. Nuestros modelos corren en infraestructura propia, sin APIs de terceros ni costes por token.",
        },
        {
          title: "Software para personas",
          desc: "La tecnología más avanzada solo tiene sentido si mejora el día a día de quien la usa. Diseñamos pensando en el usuario final.",
        },
      ],
    },
    projects: {
      eyebrow: "Proyectos",
      title: ["Lo que estamos ", "construyendo"] as [string, string],
      description:
        "Cada proyecto de DynamisAI resuelve un problema real con IA diseñada a medida. Estos son los productos en los que trabajamos.",
      characteristics: "Características",
      moreProjects: {
        title: "Más proyectos en camino",
        desc: "Estamos investigando y diseñando los próximos productos de DynamisAI. Síguenos para enterarte cuando lancemos algo nuevo.",
      },
      meetingscribe: {
        tagline: "Reuniones más inteligentes, sin esfuerzo",
        description:
          "MeetingScribe es una aplicación de escritorio que transcribe, resume y extrae los puntos clave de tus reuniones automáticamente. Impulsada por modelos de IA propios, funciona sin enviar tus datos a ningún servidor externo.",
        status: "En desarrollo",
        cta: "Ver detalles y precios →",
        features: [
          "Transcripción automática en tiempo real",
          "Resúmenes y puntos de acción con IA",
          "100% privado — todo corre en tu máquina",
          "Integraciones con herramientas de trabajo",
        ],
      },
      faro: {
        tagline: "Comunicaciones de emergencia que nunca fallan",
        description:
          "FARO es una plataforma open source de comunicaciones resilientes que combina malla LoRa de bajo coste con IA local de triaje. Sin internet, sin cobertura móvil, sin servidores externos. Para protección civil, municipios y ciudadanos.",
        status: "Prototipo activo",
        cta: "Ver FARO →",
        features: [
          "Malla LoRa multi-salto sin infraestructura",
          "Triaje IA local ES/CA en < 1 ms",
          "App ciudadana PWA offline-first",
          "Panel de mando con mapa real del municipio",
        ],
      },
    },
    contact: {
      eyebrow: "Contacto",
      title: ["¿Tienes una idea? ", "Hablemos."] as [string, string],
      description:
        "Si tienes un proyecto en mente, quieres saber más sobre MeetingScribe o simplemente quieres estar al tanto de lo que hacemos, escríbenos. Respondemos rápido.",
      form: {
        name: "Tu nombre",
        email: "Tu email",
        subject: "Asunto",
        message: "Cuéntanos tu idea o pregunta...",
        send: "Enviar mensaje →",
        sending: "Enviando...",
      },
      success: {
        title: "¡Mensaje enviado!",
        desc: "Hemos recibido tu mensaje. Te responderemos pronto en",
        yourEmail: "tu email",
        another: "Enviar otro mensaje",
      },
      error:
        "Ha ocurrido un error al enviar el mensaje. Inténtalo de nuevo o escríbenos directamente.",
    },
    footer: {
      copyright: "Todos los derechos reservados.",
      privacy: "Privacidad",
      terms: "Términos",
    },
    kron: {
      hero: {
        back: "Volver a DynamisAI",
        badge: "Investigación & Desarrollo",
        subtitle: "La inteligencia artificial que construimos desde cero.",
        description:
          "Ningún API externo. Ningún proveedor de terceros. Cada modelo entrenado con nuestros datos, en nuestro hardware, bajo nuestro control total.",
        cta1: "Ver arquitectura técnica",
        cta2: "Roadmap →",
        stats: [
          { value: "~53M", label: "Parámetros totales" },
          { value: "3", label: "Modelos propios" },
          { value: "0", label: "APIs externas" },
          { value: "100%", label: "PyTorch propio" },
        ],
      },
      philosophy: {
        eyebrow: "Por qué",
        title: ["¿Por qué construir la IA ", "desde cero?"] as [string, string],
        description:
          "Usar la API de OpenAI es fácil. Construir la tuya propia es difícil. Elegimos lo difícil porque las razones importan.",
        reasons: [
          {
            title: "Control total",
            desc: "Si dependes de OpenAI o cualquier otro proveedor, ellos controlan tus precios, tu disponibilidad y tus datos. Con KRON, controlamos cada capa del stack.",
          },
          {
            title: "Sin coste por token",
            desc: "Las APIs externas cobran por cada llamada. KRON corre en nuestro servidor: coste fijo, sin sorpresas, sin límites artificiales de uso.",
          },
          {
            title: "Diseñada para escalar",
            desc: "KRON no es un modelo monolítico. Es un sistema modular con pipeline de plugins: cada producto nuevo de DynamisAI puede conectarse sin reescribir nada.",
          },
          {
            title: "Propiedad intelectual",
            desc: "Cada peso entrenado es nuestro. No cedemos datos a terceros para mejorar sus modelos. Lo que entrenamos con nuestros datos, nos pertenece.",
          },
        ],
        quote:
          '"KRON no es solo la IA de MeetingScribe. Es la base sobre la que construiremos todos los productos de DynamisAI. Un cerebro compartido que aprende y mejora con cada producto que desarrollamos."',
        quoteAuthor: "— DynamisAI",
      },
      architecture: {
        eyebrow: "Arquitectura",
        title: ["Tres modelos, ", "un pipeline"] as [string, string],
        description:
          "KRON no es un modelo único. Es un sistema de tres modelos especializados que trabajan en cadena: audio entra, resumen e tareas salen.",
        stackLabel: "Stack completo",
        techNote: "Autenticación via API Key · SQLite / PostgreSQL · Jobs asíncronos",
        models: [
          {
            name: "ConformerASR",
            params: "~30M parámetros",
            role: "Reconocimiento de voz",
            desc: "Arquitectura Conformer (CNN + Transformer) optimizada para transcripción de audio en reuniones. Entrena sobre datos de audio en español e inglés con decodificación CTC Beam Search.",
            details: [
              "Encoder Conformer multicapa",
              "CTC Head para decodificación",
              "Log-Mel features (80 bins)",
              "SpecAugment para robustez",
              "VAD integrado",
            ],
          },
          {
            name: "MeetingSummarizer",
            params: "~15M parámetros",
            role: "Resumen de reuniones",
            desc: "Modelo Seq2Seq Transformer entrenado específicamente para condensar transcripciones de reuniones en resúmenes ejecutivos concisos con los puntos clave.",
            details: [
              "Arquitectura Encoder-Decoder",
              "Tokenizer BPE (vocab 8.000)",
              "Fine-tuning en datos de reuniones",
              "Multiidioma (ES + EN)",
            ],
          },
          {
            name: "TaskExtractor",
            params: "~8M parámetros",
            role: "Extracción de tareas",
            desc: "Modelo de clasificación y extracción de entidades entrenado para detectar compromisos, tareas asignadas y decisiones dentro del texto de una transcripción.",
            details: [
              "Clasificación de secuencias",
              "NER para detectar asignados",
              "Extracción de fechas/plazos",
              "Confianza por tarea",
            ],
          },
        ],
        layers: [
          { label: "Productos (MeetingScribe, futuros...)", color: "#0055e0" },
          { label: "FastAPI REST — /v1/asr, /v1/nlp, /v1/pipeline", color: "#4a6080" },
          { label: "Sistema de plugins (auto-discovery)", color: "#4a6080" },
          { label: "Pipeline: ASR → Summarize → Extract Tasks", color: "#4a6080" },
          { label: "Modelos KRON (PyTorch)", color: "#7c3aed" },
          { label: "Servidor propio — sin datos externos", color: "#059669" },
        ],
      },
      currentState: {
        eyebrow: "Estado actual",
        title: ["Pipeline completo ", "funcionando"] as [string, string],
        description:
          "Los tres modelos de KRON funcionan en cadena: MeetingScribe graba, transcribe, resume y extrae tareas en tiempo real, 100% en local. La integración está terminada; ahora empieza la evolución multi-producto.",
        phase0: {
          label: "Fase 0 — Fundamentos",
          status: "Completado",
          items: [
            "Arquitectura completa definida y estructurada",
            "ConformerASR — código del modelo completo (encoder, CTC head)",
            "MeetingSummarizer — arquitectura Seq2Seq implementada",
            "TaskExtractor — modelo de clasificación implementado",
            "Audio pipeline: preprocesado, Log-Mel features, VAD, SpecAugment",
            "KronTokenizer BPE (sentencepiece, vocab 8.000)",
            "FastAPI REST con todos los routers (/asr, /nlp, /pipeline, /health)",
            "Sistema de plugins con auto-discovery",
            "MeetingPipeline: ASR → summarize → extract tasks",
            "JobManager — jobs asíncronos con asyncio",
            "Almacenamiento SQLite/PostgreSQL con SQLAlchemy async",
            "Scripts de entrenamiento listos para los 3 modelos",
          ],
        },
        phase12: {
          label: "Fases 1-2 — Datos + ASR",
          status: "Completado",
          items: [
            "KronTokenizer entrenado (vocab 8k, FLEURS ES + MLS ES + LibriSpeech EN)",
            "Datasets de audio descargados y preparados para ASR",
            "Validación de calidad de datos completada",
            "ConformerASR entrenado — 100k steps, val loss 1.23",
            "Evaluación WER: 21,8% (MLS) / 36,6% (FLEURS), CER 7,8%",
            "Integración live MeetingScribe — endpoint + webm + auth verificado",
          ],
        },
        next: {
          label: "Fases 3-4 — NLP + Integración",
          status: "Completado",
          items: [
            "MeetingSummarizer entrenado (48M params)",
            "Resumen extractivo fiable — sin alucinaciones",
            "TaskExtractor entrenado — persona / tarea / fecha",
            "Pipeline completo integrado en MeetingScribe",
            "Docker listo para despliegue en servidor propio",
          ],
        },
        progress: {
          label: "Progreso global del proyecto",
          arch: "Arquitectura ✓",
          data: "Datos ✓",
          training: "Entrenamiento ✓",
          integration: "Integración ✓",
        },
      },
      roadmap: {
        eyebrow: "Roadmap",
        title: ["El camino que ", "estamos recorriendo"] as [string, string],
        description:
          "De la arquitectura al modelo entrenado, hasta el producto en manos de los usuarios. Aquí está el plan completo, fase por fase.",
        phaseLabel: "Fase",
        footer:
          "KRON es un proyecto en evolución constante. Las fases y plazos se ajustan según los aprendizajes que vamos obteniendo durante el proceso.",
        phases: [
          {
            number: "0",
            title: "Fundamentos",
            statusLabel: "Completado",
            desc: "Diseño completo de la arquitectura, implementación de los tres modelos en PyTorch, pipeline de audio, tokenizer BPE, API REST con FastAPI y sistema de plugins.",
            items: [
              "Arquitectura ConformerASR, Summarizer, TaskExtractor",
              "FastAPI + routers completos",
              "Plugin system con auto-discovery",
              "Training scripts listos",
            ],
          },
          {
            number: "1",
            title: "Tokenizer & Datos",
            statusLabel: "Completado",
            desc: "Entrenamiento del tokenizer BPE con corpus en español e inglés, descarga y preparación de los datasets de audio para ASR. El corpus de reuniones para el Summarizer se prepara como prerequisito de la fase NLP.",
            items: [
              "Entrenamiento KronTokenizer (vocab 8k)",
              "FLEURS ES + MLS ES + LibriSpeech EN",
              "Validación calidad datos",
              "Preparación corpus reuniones (prerequisito Summarizer)",
            ],
          },
          {
            number: "2",
            title: "Entrenamiento ASR",
            statusLabel: "Completado",
            desc: "ConformerASR entrenado en GPU propio — 100k steps, val loss 1.23. WER 21,8% (MLS) / 36,6% (FLEURS), CER 7,8%. Integración live con MeetingScribe verificada.",
            items: [
              "Entrenamiento 100k steps en GPU propio",
              "WER 21,8% (MLS) / 36,6% (FLEURS)",
              "CER 7,8%",
              "Integración live MeetingScribe — endpoint + webm + auth",
            ],
          },
          {
            number: "3",
            title: "Entrenamiento NLP",
            statusLabel: "Completado",
            desc: "Entrenamiento del MeetingSummarizer (~15M params) y TaskExtractor (~8M params) sobre corpus anotado de reuniones. Validación de calidad de resúmenes y precisión de extracción.",
            items: [
              "MeetingSummarizer Seq2Seq entrenado",
              "TaskExtractor con NER",
              "Evaluación ROUGE para resúmenes",
              "Calibración de confianza por tarea",
            ],
          },
          {
            number: "4",
            title: "Integración & Producción",
            statusLabel: "Completado",
            desc: "Integración live del pipeline KRON con MeetingScribe desktop. Tests end-to-end, optimización de latencia, Docker para despliegue y monitorización en producción.",
            items: [
              "Pipeline live ASR → Resumen → Tareas",
              "Integración MeetingScribe desktop",
              "Docker + servidor propio",
              "Latencia < 30s para resumen completo",
            ],
          },
          {
            number: "5",
            title: "Multi-producto & Evolución",
            statusLabel: "Futuro",
            desc: "KRON como cerebro de todos los productos DynamisAI. Nuevos modelos especializados según los casos de uso que vayan surgiendo, sistema de aprendizaje continuo y expansión multiidioma.",
            items: [
              "KRON como base para nuevos productos DynamisAI",
              "Modelos especializados por dominio",
              "Aprendizaje continuo con datos de usuarios",
              "Expansión a más idiomas",
            ],
          },
        ],
        statuses: {
          done: "Completado",
          current: "En curso",
          upcoming: "Próximamente",
          future: "Futuro",
        },
      },
      cta: {
        title: "¿Quieres ver KRON en acción?",
        description:
          "KRON impulsa MeetingScribe. Cuando el producto esté listo, podrás probarlo en primera persona — con IA 100% propia, sin enviar tus datos a ningún servidor externo.",
        cta1: "Ver MeetingScribe →",
        cta2: "Contactar con nosotros",
      },
    },
    meetingscribe: {
      hero: {
        back: "Volver a DynamisAI",
        badge: "En desarrollo activo",
        subtitle: "Transcribe, resume y extrae los puntos clave de tus reuniones — automáticamente.",
        description:
          "Impulsado por modelos de IA propios. Todo corre en tu máquina. Tus datos nunca salen de tu equipo.",
        cta1: "Ver planes y precios",
        cta2: "Cómo funciona →",
        stats: [
          { value: "100%", label: "Privado — sin nube" },
          { value: "< 30s", label: "Resumen generado" },
          { value: "IA propia", label: "Sin APIs externas" },
          { value: "Multi-idioma", label: "ES, EN y más" },
        ],
      },
      features: {
        eyebrow: "Funcionalidades",
        title: ["Todo lo que necesitas para ", "nunca perder el hilo"] as [string, string],
        description:
          "MeetingScribe combina transcripción de alta calidad con inteligencia artificial para que puedas centrarte en la reunión, no en tomar notas.",
        items: [
          {
            title: "Transcripción en tiempo real",
            desc: "Convierte el audio de tu reunión en texto con alta precisión mientras habláis. Compatible con múltiples hablantes.",
          },
          {
            title: "Resúmenes con IA",
            desc: "Al finalizar la reunión, MeetingScribe genera automáticamente un resumen ejecutivo con los temas clave tratados.",
          },
          {
            title: "Puntos de acción",
            desc: "Detecta y extrae automáticamente las tareas, decisiones y compromisos adquiridos durante la reunión.",
          },
          {
            title: "100% privado y local",
            desc: "Todo el procesamiento ocurre en tu máquina. Ningún dato de tus reuniones se envía a servidores externos.",
          },
          {
            title: "Historial de reuniones",
            desc: "Accede a todas tus transcripciones y resúmenes anteriores, organizados por fecha, proyecto o participantes.",
          },
          {
            title: "Integraciones de trabajo",
            desc: "Exporta resúmenes directamente a Notion, Slack, Jira o por email con un solo clic.",
          },
        ],
      },
      howItWorks: {
        eyebrow: "Cómo funciona",
        title: ["De la reunión al resumen ", "en segundos"] as [string, string],
        description:
          "Sin configuraciones complejas. Sin cuentas en la nube. Solo abre, graba y obtén tu resumen.",
        steps: [
          {
            step: "01",
            title: "Abre MeetingScribe",
            desc: "Inicia la aplicación de escritorio antes de tu reunión. Compatible con cualquier plataforma de videoconferencia o reunión presencial.",
          },
          {
            step: "02",
            title: "Empieza a grabar",
            desc: "Con un clic, MeetingScribe comienza a capturar el audio y transcribir en tiempo real. Ves el texto aparecer al instante.",
          },
          {
            step: "03",
            title: "Finaliza la reunión",
            desc: "Al detener la grabación, la IA analiza la transcripción completa y genera el resumen, los puntos de acción y las decisiones tomadas.",
          },
          {
            step: "04",
            title: "Comparte o exporta",
            desc: "Revisa el resumen, edita si es necesario y envíalo a tu equipo o expórtalo a tus herramientas favoritas con un clic.",
          },
        ],
      },
      pricing: {
        eyebrow: "Precios",
        title: ["Planes simples y ", "sin sorpresas"] as [string, string],
        description: "14 días de prueba gratuita en todos los planes. Sin tarjeta de crédito.",
        devNotice:
          "MeetingScribe está en desarrollo — los precios son orientativos y pueden cambiar antes del lanzamiento.",
        plans: [
          {
            name: "Starter",
            price: "15",
            period: "/ mes",
            desc: "Perfecto para freelancers y profesionales que quieren dejar de tomar notas.",
            features: [
              "Hasta 10 reuniones / mes",
              "Transcripción automática",
              "Resumen con IA",
              "Exportar a TXT y PDF",
              "Historial 30 días",
            ],
            notIncluded: ["Puntos de acción IA", "Integraciones externas", "Soporte prioritario"],
            cta: "Empezar gratis 14 días",
          },
          {
            name: "Pro",
            price: "29",
            period: "/ mes",
            desc: "Para equipos que quieren sacar el máximo partido a cada reunión.",
            badge: "Más popular",
            features: [
              "Reuniones ilimitadas",
              "Transcripción automática",
              "Resumen con IA",
              "Puntos de acción IA",
              "Exportar a Notion, Slack, Jira",
              "Historial ilimitado",
              "Multi-idioma (ES, EN, FR, DE)",
            ],
            notIncluded: ["Soporte prioritario"],
            cta: "Empezar gratis 14 días",
          },
          {
            name: "Business",
            price: "49",
            period: "/ mes por usuario",
            desc: "Para empresas que necesitan privacidad máxima y gestión de equipo.",
            features: [
              "Todo lo de Pro",
              "Panel de administración",
              "Gestión de equipos y roles",
              "SSO / integración con directorio",
              "Modelo IA personalizable",
              "Soporte prioritario 24/7",
              "Onboarding dedicado",
            ],
            notIncluded: [],
            cta: "Contactar con ventas",
          },
        ],
      },
      appPreview: {
        eyebrow: "Vista previa",
        title: ["Así se ve ", "MeetingScribe"] as [string, string],
        description:
          "Una interfaz limpia y sin distracciones. Todo lo que necesitas, justo donde lo esperas.",
        note: "* Vista previa interactiva — pulsa los elementos del menú lateral para navegar. MeetingScribe está en desarrollo activo.",
        sidebarItems: [
          { id: "dashboard", label: "Inicio" },
          { id: "record", label: "Grabar" },
          { id: "history", label: "Historial" },
          { id: "friends", label: "Amigos" },
          { id: "settings", label: "Ajustes" },
        ],
        screenLabel: {
          dashboard: "Inicio",
          record: "Grabar",
          history: "Historial",
          friends: "Amigos",
          settings: "Ajustes",
        },
        dashboard: {
          greeting: "Hola, Juan",
          subtitle: "¿Listo para tu próxima reunión?",
          stats: [
            { value: "2", label: "Reuniones hoy" },
            { value: "8", label: "Esta semana" },
            { value: "4", label: "Tareas pendientes" },
          ],
          startRecording: "Iniciar grabación",
          startRecordingDesc: "Transcribe y resume tu reunión automáticamente",
          recordNow: "Grabar ahora",
          recentMeetings: "Reuniones recientes",
          viewAll: "Ver todas →",
        },
        history: {
          title: "Historial",
          search: "Buscar reunión...",
          export: "↓ Exportar",
          public: "Pública",
          summary: "Resumen",
          tasks: "Tareas",
          transcript: "Transcripción",
        },
        recording: {
          title: "Grabar reunión",
          ready: "Listo",
          rec: "REC",
          paused: "PAUSADO",
          start: "● Iniciar grabación",
          pause: "⏸ Pausar",
          stop: "■ Detener",
          resume: "▶ Reanudar",
          process: "⚡ Procesar con KRON",
          hintIdle: "Pulsa para comenzar la transcripción automática",
          hintRecording: "Grabando... habla con normalidad",
          hintPaused: "Grabación en pausa",
          hintDone: "Grabación finalizada — procesa para obtener el resumen",
        },
        meetings: [
          {
            title: "Reunión de producto Q2",
            date: "Hoy, 10:00",
            duration: "52 min",
            tasks: "3/5 tareas",
            summary:
              "Se definieron las prioridades para el Q2: integración con Notion y mejora de precisión de transcripción.",
          },
          {
            title: "Llamada con cliente — Acme",
            date: "Hoy, 12:30",
            duration: "28 min",
            tasks: "1/2 tareas",
            summary: "Revisión del progreso del proyecto. El cliente solicita demo la semana siguiente.",
          },
          {
            title: "Daily standup",
            date: "Ayer, 09:15",
            duration: "15 min",
            tasks: null as string | null,
            summary: "Bloqueos: integración API pendiente. Juan trabaja en ello hoy.",
          },
          {
            title: "Planning sprint 14",
            date: "Lun, 11:00",
            duration: "1h 20 min",
            tasks: "5/8 tareas",
            summary: "Se estimaron 12 historias de usuario. Capacidad del equipo: 34 puntos.",
          },
        ],
        tasksList: [
          { text: "Entregar prototipo integración Notion", assignee: "Laura", done: true },
          { text: "Revisar métricas de precisión de transcripción", assignee: "Juan", done: false },
          { text: "Preparar demo para cliente Acme", assignee: "Equipo", done: false },
        ],
        transcript:
          "Juan: Necesitamos definir las prioridades para el Q2 antes de fin de mes.\nLaura: Estoy de acuerdo. El foco debería estar en la integración con Notion y mejorar la precisión.\nJuan: ¿Podemos tener un prototipo para la siguiente semana?\nLaura: Sí, el jueves deberíamos tener algo funcional para revisar...",
        comingSoon: "Próximamente en la preview",
        section: "Sección",
      },
      cta: {
        title: ["Sé el primero en ", "probarlo"] as [string, string],
        description:
          "MeetingScribe está en desarrollo activo. Déjanos tu email y te avisaremos en cuanto esté listo para el acceso anticipado.",
        placeholder: "tu@email.com",
        button: "Avisarme →",
        note: "Sin spam. Solo te avisamos cuando lancemos.",
      },
    },
    faro: {
      hero: {
        back: "Volver a DynamisAI",
        badge: "Prototipo activo · Solicitud NGI Zero en curso",
        subtitle: "Comunicaciones de emergencia que funcionan cuando todo lo demás falla.",
        description:
          "Malla LoRa de bajo coste + IA local de triaje. Sin internet, sin cobertura móvil, sin servidores externos. Para protección civil, municipios y ciudadanos.",
        cta1: "Ver cómo funciona",
        cta2: "Estado del proyecto →",
        stats: [
          { value: "23,6 s", label: "Latencia media SOS" },
          { value: "0", label: "SOS no entregados" },
          { value: "84 %", label: "Precisión triaje urgencia" },
          { value: "100 %", label: "Offline — sin internet" },
        ],
      },
      problem: {
        eyebrow: "El problema",
        title: ["En una emergencia real, ", "las redes fallan"] as [string, string],
        description:
          "Las catástrofes recientes han dejado claro que los sistemas de comunicación actuales dependen de infraestructuras frágiles. Cuando más se necesitan, son los primeros en caer.",
        incidents: [
          {
            date: "Nov 2024",
            name: "DANA Valencia",
            detail:
              "Las redes cayeron en minutos. Los ciudadanos no podían llamar a emergencias. La coordinación de rescate fue caótica durante horas.",
            risk: "Inundación",
          },
          {
            date: "Abr 2025",
            name: "Apagón ibérico",
            detail:
              "Sin electricidad, sin internet, sin cobertura móvil en gran parte de España y Portugal durante horas. Las comunicaciones de emergencia dependían de radios analógicas.",
            risk: "Fallo eléctrico",
          },
          {
            date: "Recurrente",
            name: "Incendios forestales",
            detail:
              "En Maresme, Garraf y otras zonas, el humo y la saturación de red dificultan la coordinación entre voluntarios y protección civil en los momentos críticos.",
            risk: "Incendio",
          },
        ],
        gap: {
          eyebrow: "La brecha que existe",
          title: "Los sistemas oficiales no llegan al último kilómetro",
          desc1:
            "Los sistemas de alerta masiva (ES-Alert, sirenas) informan pero no permiten comunicación bidireccional. Los cuerpos de emergencia tienen radio profesional, pero los ciudadanos y los voluntarios quedan sin canales.",
          desc2:
            "FARO llena ese vacío: una capa de comunicación resiliente, barata y open source que funciona sin internet, sin cobertura móvil y sin depender de ningún operador.",
        },
        costEyebrow: "Coste de NO tenerlo",
        costItems: [
          "SOS que tardan minutos en llegar",
          "Coordinación de rescate por teléfono saturado",
          "Recursos enviados al lugar equivocado",
          "Voluntarios aislados sin información",
        ],
      },
      howItWorks: {
        eyebrow: "Cómo funciona",
        title: ["Del ciudadano al puesto de mando, ", "sin internet"] as [string, string],
        description:
          "FARO combina tres tecnologías que se complementan: radio LoRa para la conectividad, IA local para el triaje, y un panel web offline para la coordinación.",
        steps: [
          {
            num: "01",
            title: "El ciudadano envía un SOS",
            description:
              "Desde la app móvil PWA (funciona sin internet), el ciudadano envía un mensaje de emergencia. Puede escribir o usar voz offline. El mensaje se clasifica localmente en el dispositivo.",
          },
          {
            num: "02",
            title: "La malla LoRa lo transmite",
            description:
              "El mensaje salta de nodo en nodo por la red LoRa (radio de largo alcance, bajo consumo). Sin internet. Sin cobertura móvil. Funciona con batería durante días. Cada nodo repite el mensaje hasta que llega al puesto de mando.",
          },
          {
            num: "03",
            title: "La IA local hace el triaje",
            description:
              "Un clasificador ligero (< 500 KB, inferencia < 1 ms) analiza cada mensaje: urgencia (SOS, alta, media, baja) y categoría (rescate, incendio, médico, derrumbe...). Bilingüe ES/CA. Corre en el servidor local del municipio, sin enviar datos fuera.",
          },
          {
            num: "04",
            title: "El PM coordina desde el panel",
            description:
              "El puesto de mando ve un mapa en tiempo real con todas las alertas priorizadas por triaje, agrupadas por zona geográfica. El gestor puede despachar recursos, responder a ciudadanos y actualizar el estado de cada incidente.",
          },
        ],
        corroboration: {
          eyebrow: "Sistema de corroboración",
          title: "Detección automática de incidentes — sin vigilancia",
          desc: "Cuando 2 o más reportes de la misma categoría llegan desde una zona de ~700 m, FARO los agrupa y marca el incidente como <strong>confirmado</strong>. Esto permite detección temprana sin necesidad de monitorizar a ningún ciudadano individualmente. Solo reportes voluntarios dentro de la red.",
        },
      },
      features: {
        eyebrow: "Tecnología",
        title: ["Diseñado para funcionar ", "en las peores condiciones"] as [string, string],
        description:
          "Cada componente de FARO está elegido para ser robusto, barato y replicable por cualquier municipio sin dependencias externas.",
        items: [
          {
            initials: "LoRa",
            title: "Malla LoRa multi-salto",
            description:
              "Radio EU868 de largo alcance y bajo consumo. Los nodos se repiten mensajes en varios saltos hasta el puesto de mando. Sin infraestructura — un Raspberry Pi y un módulo LoRa bastan.",
          },
          {
            initials: "IA",
            title: "Triaje con IA local",
            description:
              "Clasificador híbrido (modelo lineal + léxico de emergencia) en < 500 KB. Urgencia y categoría en < 1 ms. Bilingüe ES/CA. Sin conexión, sin servidor en la nube, sin latencia de red.",
          },
          {
            initials: "PWA",
            title: "App ciudadana offline",
            description:
              "Web app instalable en cualquier móvil (no hace falta app store). Funciona sin internet: triaje local, caché de mapas, voz a texto offline con Vosk WASM. Accesible y bilingüe.",
          },
          {
            initials: "MAP",
            title: "Panel de mando georreferenciado",
            description:
              "Mapa real del municipio (OSM) con todas las alertas en tiempo real. Pan/zoom vectorial, ficha de cada incidente, bandeja priorizada por triaje. Funciona sin internet en el servidor local.",
          },
          {
            initials: "MUL",
            title: "Multi-riesgo y multi-municipio",
            description:
              "Cubre inundación, incendio forestal/urbano, terremoto/derrumbe, calor extremo y viento. Configurado con datos reales de OpenStreetMap. Escalable a varios municipios en la misma malla.",
          },
          {
            initials: "ALT",
            title: "Activación automática por alertas",
            description:
              "Se integra con feeds CAP oficiales (AEMET, IGN, EFFIS, SAIH). Al recibir una alerta, FARO pasa de modo dormido a vigilancia activa sin intervención manual del gestor.",
          },
        ],
        cost: {
          title: "Coste estimado por nodo: ~50-80 €",
          desc: "Heltec WiFi LoRa 32 V4 (~30 €) + Heltec Wireless Tracker (~30 €) + caja exterior + batería. Un municipio de 3.000 hab. puede estar cubierto con 8-12 nodos estratégicos.",
        },
        stats: [
          { v: "< 500 KB", l: "Modelo IA" },
          { v: "< 1 ms", l: "Triaje local" },
          { v: "~80 €", l: "Por nodo" },
        ],
      },
      currentState: {
        eyebrow: "Estado actual",
        title: ["Prototipo funcional, ", "métricas probadas"] as [string, string],
        description:
          "La demo de software está construida y validada. Los algoritmos de triaje y la simulación de malla LoRa están funcionando con datos reales de municipios del Maresme.",
        progress: "Progreso del prototipo",
        completedLabel: "Completado",
        pendingLabel: "Próximos pasos",
        of: "de",
        itemsCompleted: "ítems completados",
        done: [
          "Clasificador de triaje ES/CA (84% urgencia, 76% categoría)",
          "Simulador de malla LoRa con física real (EU868, duty cycle 1%)",
          "Panel de mando web offline con mapa real (Sant Andreu de Llavaneres + Mataró)",
          "App ciudadana móvil PWA instalable, offline-first",
          "Voz a texto offline (Vosk WASM)",
          "Sistema de corroboración por zona geográfica",
          "Flujo de despacho de incidentes (nuevo / en ruta / resuelto)",
          "6 escenarios de demo (DANA, incendio, terremoto) en mapa real del Maresme",
          "Test adversarial (45 mensajes reales): 0 SOS no entregados",
          "Borrador solicitud NGI Zero (41.600 € / 6 tareas)",
        ],
        pending: [
          "Publicar repo en GitHub (pendiente de decisión de Pablo)",
          "Comprar hardware Heltec V4 + Tracker GPS (~155 €)",
          "Parser CAP + AEMET para activación automática",
          "Piloto real con municipio / protección civil",
          "Video de demo de 2:15 para NGI (grabable sin hardware salvo 1 escena)",
        ],
        cta: {
          title: "Busca municipios piloto y colaboradores técnicos",
          desc: "Si representas un municipio, protección civil o eres técnico especialista en LoRa / sistemas de emergencia, nos encantaría hablar contigo.",
          button: "Hablar con el equipo →",
        },
      },
      roadmap: {
        eyebrow: "Hoja de ruta",
        title: ["Del prototipo a ", "infraestructura europea"] as [string, string],
        description:
          "Una ruta de financiación clara: NGI Zero primero (validación y primer despliegue), después UCPM para escalar, Horizon Europe para la investigación de largo plazo.",
        completedLabel: "Completado",
        phases: [
          {
            num: 1,
            label: "Actual",
            title: "Prototipo validado",
            description:
              "Demo funcional: triaje ES/CA, simulador LoRa, panel de mando offline, app ciudadana PWA. Métricas demostradas. Solicitud NGI Zero en borrador.",
          },
          {
            num: 2,
            label: "Próximo",
            title: "Publicación open source + hardware",
            description:
              "Repo público en GitHub/Codeberg (condición NGI Zero). Compra del primer kit hardware (~155 €). Test en entorno real con nodos físicos. Video de demo para la solicitud.",
          },
          {
            num: 3,
            label: "6-12 meses",
            title: "NGI Zero Commons Fund",
            description:
              "Solicitud a la convocatoria general (reabre tras verano 2026). Presupuesto: 41.600 €. 6 tareas: triaje multilingüe, activación CAP, hardware kit estándar, piloto municipal, documentación.",
          },
          {
            num: 4,
            label: "12-18 meses",
            title: "Piloto municipal real",
            description:
              "Despliegue en un municipio real de Catalunya (objetivo: Maresme). Coordinación con protección civil local. Validación en simulacro oficial. Primeros usuarios reales.",
          },
          {
            num: 5,
            label: "18-30 meses",
            title: "UCPM KAPP (UE)",
            description:
              "Consorcio europeo (≥3 entidades, ≥3 países). Solicitud al mecanismo UCPM KAPP (500 k – 1 M€). Despliegue transfronterizo y estandarización como infraestructura crítica de resiliencia.",
          },
          {
            num: 6,
            label: "Horizonte",
            title: "Horizon Europe",
            description:
              "Investigación avanzada: compresión semántica de mensajes para LoRa, integración con satélite de emergencia, estándar de interoperabilidad europeo. Publicación académica.",
          },
        ],
      },
      cta: {
        title: ["Hagamos que FARO ", "llegue al terreno"] as [string, string],
        description:
          "Si representas un municipio, eres voluntario de protección civil, investigador o simplemente quieres apoyar el proyecto — queremos conocerte.",
        cta1: "Contactar con el equipo →",
        cta2: "Conocer la IA detrás: KRON",
        footer: "FARO es open source · Licencia AGPL-3.0 · Desarrollado bajo DynamisAI",
      },
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      talkToUs: "Let's talk",
    },
    hero: {
      title: ["Software that ", "thinks", " with you"] as [string, string, string],
      description:
        "At DynamisAI we build software products where artificial intelligence is not an add-on: it's the core. Every line of code designed to amplify what people do best.",
      viewProjects: "View projects",
      learnMore: "Learn more →",
      tags: ["Integrated AI", "High performance", "Privacy first", "Scalable"],
      scroll: "scroll",
    },
    about: {
      eyebrow: "Who we are",
      title: ["A company born from ", "technical curiosity"] as [string, string],
      description:
        "DynamisAI was born with a clear premise: the software of the future cannot be static. We combine rigorous software engineering with in-house artificial intelligence to create products that learn, adapt and scale.",
      values: [
        {
          title: "AI as the core",
          desc: "We don't integrate AI as an extra feature. We build it from inside every product, training custom models adapted to each need.",
        },
        {
          title: "Applied research",
          desc: "Every product we develop is the result of real research. We understand the technology before we use it.",
        },
        {
          title: "No external dependencies",
          desc: "We bet on our own architectures. Our models run on our own infrastructure, without third-party APIs or per-token costs.",
        },
        {
          title: "Software for people",
          desc: "The most advanced technology only makes sense if it improves the day-to-day life of those who use it. We design with the end user in mind.",
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: ["What we're ", "building"] as [string, string],
      description:
        "Every DynamisAI project solves a real problem with purpose-built AI. These are the products we're working on.",
      characteristics: "Features",
      moreProjects: {
        title: "More projects on the way",
        desc: "We're researching and designing DynamisAI's next products. Follow us to find out when we launch something new.",
      },
      meetingscribe: {
        tagline: "Smarter meetings, effortlessly",
        description:
          "MeetingScribe is a desktop application that automatically transcribes, summarizes and extracts the key points from your meetings. Powered by our own AI models, it works without sending your data to any external server.",
        status: "In development",
        cta: "See details and pricing →",
        features: [
          "Automatic real-time transcription",
          "AI summaries and action points",
          "100% private — everything runs on your machine",
          "Integrations with work tools",
        ],
      },
      faro: {
        tagline: "Emergency communications that never fail",
        description:
          "FARO is an open source resilient communications platform that combines low-cost LoRa mesh with local AI triage. No internet, no mobile coverage, no external servers. For civil protection, municipalities and citizens.",
        status: "Active prototype",
        cta: "See FARO →",
        features: [
          "Multi-hop LoRa mesh without infrastructure",
          "Local AI triage ES/CA in < 1 ms",
          "Offline-first citizen PWA app",
          "Command dashboard with real municipal map",
        ],
      },
    },
    contact: {
      eyebrow: "Contact",
      title: ["Have an idea? ", "Let's talk."] as [string, string],
      description:
        "If you have a project in mind, want to learn more about MeetingScribe, or simply want to stay up to date with what we do, write to us. We respond quickly.",
      form: {
        name: "Your name",
        email: "Your email",
        subject: "Subject",
        message: "Tell us about your idea or question...",
        send: "Send message →",
        sending: "Sending...",
      },
      success: {
        title: "Message sent!",
        desc: "We've received your message. We'll reply soon at",
        yourEmail: "your email",
        another: "Send another message",
      },
      error:
        "An error occurred while sending the message. Please try again or write to us directly.",
    },
    footer: {
      copyright: "All rights reserved.",
      privacy: "Privacy",
      terms: "Terms",
    },
    kron: {
      hero: {
        back: "Back to DynamisAI",
        badge: "Research & Development",
        subtitle: "The artificial intelligence we build from scratch.",
        description:
          "No external API. No third-party providers. Every model trained with our data, on our hardware, under our full control.",
        cta1: "See technical architecture",
        cta2: "Roadmap →",
        stats: [
          { value: "~53M", label: "Total parameters" },
          { value: "3", label: "Own models" },
          { value: "0", label: "External APIs" },
          { value: "100%", label: "Own PyTorch" },
        ],
      },
      philosophy: {
        eyebrow: "Why",
        title: ["Why build AI ", "from scratch?"] as [string, string],
        description:
          "Using the OpenAI API is easy. Building your own is hard. We chose the hard path because the reasons matter.",
        reasons: [
          {
            title: "Full control",
            desc: "If you depend on OpenAI or any other provider, they control your pricing, availability and data. With KRON, we control every layer of the stack.",
          },
          {
            title: "No per-token cost",
            desc: "External APIs charge per call. KRON runs on our server: fixed cost, no surprises, no artificial usage limits.",
          },
          {
            title: "Designed to scale",
            desc: "KRON is not a monolithic model. It's a modular system with a plugin pipeline: every new DynamisAI product can connect without rewriting anything.",
          },
          {
            title: "Intellectual property",
            desc: "Every trained weight is ours. We don't hand data to third parties to improve their models. What we train with our data belongs to us.",
          },
        ],
        quote:
          '"KRON is not just MeetingScribe\'s AI. It\'s the foundation on which we\'ll build all DynamisAI products. A shared brain that learns and improves with every product we develop."',
        quoteAuthor: "— DynamisAI",
      },
      architecture: {
        eyebrow: "Architecture",
        title: ["Three models, ", "one pipeline"] as [string, string],
        description:
          "KRON is not a single model. It's a system of three specialized models that work in sequence: audio goes in, summary and tasks come out.",
        stackLabel: "Full stack",
        techNote: "API Key authentication · SQLite / PostgreSQL · Async jobs",
        models: [
          {
            name: "ConformerASR",
            params: "~30M parameters",
            role: "Speech recognition",
            desc: "Conformer (CNN + Transformer) architecture optimized for transcription of meeting audio. Trains on Spanish and English audio data with CTC Beam Search decoding.",
            details: [
              "Multi-layer Conformer encoder",
              "CTC Head for decoding",
              "Log-Mel features (80 bins)",
              "SpecAugment for robustness",
              "Integrated VAD",
            ],
          },
          {
            name: "MeetingSummarizer",
            params: "~15M parameters",
            role: "Meeting summarization",
            desc: "Seq2Seq Transformer model specifically trained to condense meeting transcripts into concise executive summaries with the key points.",
            details: [
              "Encoder-Decoder architecture",
              "BPE tokenizer (vocab 8,000)",
              "Fine-tuned on meeting data",
              "Multilingual (ES + EN)",
            ],
          },
          {
            name: "TaskExtractor",
            params: "~8M parameters",
            role: "Task extraction",
            desc: "Classification and entity extraction model trained to detect commitments, assigned tasks and decisions within transcript text.",
            details: [
              "Sequence classification",
              "NER to detect assignees",
              "Date/deadline extraction",
              "Per-task confidence",
            ],
          },
        ],
        layers: [
          { label: "Products (MeetingScribe, future...)", color: "#0055e0" },
          { label: "FastAPI REST — /v1/asr, /v1/nlp, /v1/pipeline", color: "#4a6080" },
          { label: "Plugin system (auto-discovery)", color: "#4a6080" },
          { label: "Pipeline: ASR → Summarize → Extract Tasks", color: "#4a6080" },
          { label: "KRON models (PyTorch)", color: "#7c3aed" },
          { label: "Own server — no external data", color: "#059669" },
        ],
      },
      currentState: {
        eyebrow: "Current state",
        title: ["Full pipeline ", "up and running"] as [string, string],
        description:
          "KRON's three models work in a chain: MeetingScribe records, transcribes, summarizes and extracts tasks in real time, 100% locally. Integration is done; now the multi-product evolution begins.",
        phase0: {
          label: "Phase 0 — Foundations",
          status: "Completed",
          items: [
            "Complete architecture defined and structured",
            "ConformerASR — full model code (encoder, CTC head)",
            "MeetingSummarizer — Seq2Seq architecture implemented",
            "TaskExtractor — classification model implemented",
            "Audio pipeline: preprocessing, Log-Mel features, VAD, SpecAugment",
            "KronTokenizer BPE (sentencepiece, vocab 8,000)",
            "FastAPI REST with all routers (/asr, /nlp, /pipeline, /health)",
            "Plugin system with auto-discovery",
            "MeetingPipeline: ASR → summarize → extract tasks",
            "JobManager — async jobs with asyncio",
            "SQLite/PostgreSQL storage with SQLAlchemy async",
            "Training scripts ready for 3 models",
          ],
        },
        phase12: {
          label: "Phases 1-2 — Data + ASR",
          status: "Completed",
          items: [
            "KronTokenizer trained (vocab 8k, FLEURS ES + MLS ES + LibriSpeech EN)",
            "Audio datasets downloaded and prepared for ASR",
            "Data quality validation completed",
            "ConformerASR trained — 100k steps, val loss 1.23",
            "WER evaluation: 21.8% (MLS) / 36.6% (FLEURS), CER 7.8%",
            "Live MeetingScribe integration — endpoint + webm + auth verified",
          ],
        },
        next: {
          label: "Phases 3-4 — NLP + Integration",
          status: "Completed",
          items: [
            "MeetingSummarizer trained (48M params)",
            "Reliable extractive summary — no hallucinations",
            "TaskExtractor trained — person / task / date",
            "Full pipeline integrated into MeetingScribe",
            "Docker ready for self-hosted deployment",
          ],
        },
        progress: {
          label: "Overall project progress",
          arch: "Architecture ✓",
          data: "Data ✓",
          training: "Training ✓",
          integration: "Integration ✓",
        },
      },
      roadmap: {
        eyebrow: "Roadmap",
        title: ["The path we are ", "walking"] as [string, string],
        description:
          "From architecture to trained model, to the product in users' hands. Here is the complete plan, phase by phase.",
        phaseLabel: "Phase",
        footer:
          "KRON is a constantly evolving project. Phases and timelines are adjusted based on what we learn along the way.",
        phases: [
          {
            number: "0",
            title: "Foundations",
            statusLabel: "Completed",
            desc: "Complete architecture design, implementation of three PyTorch models, audio pipeline, BPE tokenizer, FastAPI REST API and plugin system.",
            items: [
              "ConformerASR, Summarizer, TaskExtractor architecture",
              "FastAPI + complete routers",
              "Plugin system with auto-discovery",
              "Training scripts ready",
            ],
          },
          {
            number: "1",
            title: "Tokenizer & Data",
            statusLabel: "Completed",
            desc: "BPE tokenizer training with Spanish and English corpus, download and preparation of audio datasets for ASR. The meeting corpus for the Summarizer is prepared as a prerequisite for the NLP phase.",
            items: [
              "KronTokenizer training (vocab 8k)",
              "FLEURS ES + MLS ES + LibriSpeech EN",
              "Data quality validation",
              "Meeting corpus preparation (Summarizer prerequisite)",
            ],
          },
          {
            number: "2",
            title: "ASR Training",
            statusLabel: "Completed",
            desc: "ConformerASR trained on own GPU — 100k steps, val loss 1.23. WER 21.8% (MLS) / 36.6% (FLEURS), CER 7.8%. Live integration with MeetingScribe verified.",
            items: [
              "Training 100k steps on own GPU",
              "WER 21.8% (MLS) / 36.6% (FLEURS)",
              "CER 7.8%",
              "Live MeetingScribe integration — endpoint + webm + auth",
            ],
          },
          {
            number: "3",
            title: "NLP Training",
            statusLabel: "Completed",
            desc: "Training MeetingSummarizer (~15M params) and TaskExtractor (~8M params) on annotated meeting corpus. Quality validation of summaries and extraction accuracy.",
            items: [
              "MeetingSummarizer Seq2Seq trained",
              "TaskExtractor with NER",
              "ROUGE evaluation for summaries",
              "Per-task confidence calibration",
            ],
          },
          {
            number: "4",
            title: "Integration & Production",
            statusLabel: "Completed",
            desc: "Live integration of KRON pipeline with MeetingScribe desktop. End-to-end tests, latency optimization, Docker for deployment and production monitoring.",
            items: [
              "Live pipeline ASR → Summary → Tasks",
              "MeetingScribe desktop integration",
              "Docker + own server",
              "Latency < 30s for full summary",
            ],
          },
          {
            number: "5",
            title: "Multi-product & Evolution",
            statusLabel: "Future",
            desc: "KRON as the brain for all DynamisAI products. New specialized models as use cases emerge, continuous learning system and multilingual expansion.",
            items: [
              "KRON as the base for new DynamisAI products",
              "Domain-specialized models",
              "Continuous learning with user data",
              "Expansion to more languages",
            ],
          },
        ],
        statuses: {
          done: "Completed",
          current: "In progress",
          upcoming: "Coming soon",
          future: "Future",
        },
      },
      cta: {
        title: "Want to see KRON in action?",
        description:
          "KRON powers MeetingScribe. When the product is ready, you'll be able to try it first-hand — with 100% own AI, without sending your data to any external server.",
        cta1: "See MeetingScribe →",
        cta2: "Contact us",
      },
    },
    meetingscribe: {
      hero: {
        back: "Back to DynamisAI",
        badge: "Actively in development",
        subtitle:
          "Transcribe, summarize and extract the key points from your meetings — automatically.",
        description:
          "Powered by our own AI models. Everything runs on your machine. Your data never leaves your device.",
        cta1: "View plans and pricing",
        cta2: "How it works →",
        stats: [
          { value: "100%", label: "Private — no cloud" },
          { value: "< 30s", label: "Summary generated" },
          { value: "Own AI", label: "No external APIs" },
          { value: "Multi-language", label: "ES, EN and more" },
        ],
      },
      features: {
        eyebrow: "Features",
        title: ["Everything you need to ", "never lose track"] as [string, string],
        description:
          "MeetingScribe combines high-quality transcription with artificial intelligence so you can focus on the meeting, not on taking notes.",
        items: [
          {
            title: "Real-time transcription",
            desc: "Converts your meeting audio to text with high accuracy while you talk. Compatible with multiple speakers.",
          },
          {
            title: "AI summaries",
            desc: "When the meeting ends, MeetingScribe automatically generates an executive summary with the key topics discussed.",
          },
          {
            title: "Action points",
            desc: "Automatically detects and extracts tasks, decisions and commitments made during the meeting.",
          },
          {
            title: "100% private and local",
            desc: "All processing happens on your machine. No meeting data is ever sent to external servers.",
          },
          {
            title: "Meeting history",
            desc: "Access all your previous transcripts and summaries, organized by date, project or participants.",
          },
          {
            title: "Work integrations",
            desc: "Export summaries directly to Notion, Slack, Jira or by email with a single click.",
          },
        ],
      },
      howItWorks: {
        eyebrow: "How it works",
        title: ["From meeting to summary ", "in seconds"] as [string, string],
        description: "No complex setup. No cloud accounts. Just open, record and get your summary.",
        steps: [
          {
            step: "01",
            title: "Open MeetingScribe",
            desc: "Launch the desktop application before your meeting. Compatible with any video conferencing platform or in-person meeting.",
          },
          {
            step: "02",
            title: "Start recording",
            desc: "With one click, MeetingScribe begins capturing audio and transcribing in real time. You see the text appear instantly.",
          },
          {
            step: "03",
            title: "End the meeting",
            desc: "When you stop recording, the AI analyzes the full transcript and generates the summary, action points and decisions made.",
          },
          {
            step: "04",
            title: "Share or export",
            desc: "Review the summary, edit if needed and send it to your team or export it to your favorite tools with one click.",
          },
        ],
      },
      pricing: {
        eyebrow: "Pricing",
        title: ["Simple plans ", "without surprises"] as [string, string],
        description: "14-day free trial on all plans. No credit card required.",
        devNotice:
          "MeetingScribe is in development — prices are indicative and may change before launch.",
        plans: [
          {
            name: "Starter",
            price: "15",
            period: "/ month",
            desc: "Perfect for freelancers and professionals who want to stop taking notes.",
            features: [
              "Up to 10 meetings / month",
              "Automatic transcription",
              "AI summary",
              "Export to TXT and PDF",
              "30-day history",
            ],
            notIncluded: ["AI action points", "External integrations", "Priority support"],
            cta: "Start free for 14 days",
          },
          {
            name: "Pro",
            price: "29",
            period: "/ month",
            desc: "For teams who want to get the most out of every meeting.",
            badge: "Most popular",
            features: [
              "Unlimited meetings",
              "Automatic transcription",
              "AI summary",
              "AI action points",
              "Export to Notion, Slack, Jira",
              "Unlimited history",
              "Multi-language (ES, EN, FR, DE)",
            ],
            notIncluded: ["Priority support"],
            cta: "Start free for 14 days",
          },
          {
            name: "Business",
            price: "49",
            period: "/ month per user",
            desc: "For companies that need maximum privacy and team management.",
            features: [
              "Everything in Pro",
              "Admin dashboard",
              "Team and role management",
              "SSO / directory integration",
              "Customizable AI model",
              "Priority support 24/7",
              "Dedicated onboarding",
            ],
            notIncluded: [],
            cta: "Contact sales",
          },
        ],
      },
      appPreview: {
        eyebrow: "Preview",
        title: ["This is ", "MeetingScribe"] as [string, string],
        description:
          "A clean, distraction-free interface. Everything you need, exactly where you expect it.",
        note: "* Interactive preview — click the sidebar menu items to navigate. MeetingScribe is in active development.",
        sidebarItems: [
          { id: "dashboard", label: "Home" },
          { id: "record", label: "Record" },
          { id: "history", label: "History" },
          { id: "friends", label: "Friends" },
          { id: "settings", label: "Settings" },
        ],
        screenLabel: {
          dashboard: "Home",
          record: "Record",
          history: "History",
          friends: "Friends",
          settings: "Settings",
        },
        dashboard: {
          greeting: "Hello, Juan",
          subtitle: "Ready for your next meeting?",
          stats: [
            { value: "2", label: "Meetings today" },
            { value: "8", label: "This week" },
            { value: "4", label: "Pending tasks" },
          ],
          startRecording: "Start recording",
          startRecordingDesc: "Transcribe and summarize your meeting automatically",
          recordNow: "Record now",
          recentMeetings: "Recent meetings",
          viewAll: "View all →",
        },
        history: {
          title: "History",
          search: "Search meeting...",
          export: "↓ Export",
          public: "Public",
          summary: "Summary",
          tasks: "Tasks",
          transcript: "Transcript",
        },
        recording: {
          title: "Record meeting",
          ready: "Ready",
          rec: "REC",
          paused: "PAUSED",
          start: "● Start recording",
          pause: "⏸ Pause",
          stop: "■ Stop",
          resume: "▶ Resume",
          process: "⚡ Process with KRON",
          hintIdle: "Press to start automatic transcription",
          hintRecording: "Recording... speak naturally",
          hintPaused: "Recording paused",
          hintDone: "Recording ended — process to get your summary",
        },
        meetings: [
          {
            title: "Q2 Product meeting",
            date: "Today, 10:00",
            duration: "52 min",
            tasks: "3/5 tasks",
            summary:
              "Q2 priorities defined: Notion integration and transcription accuracy improvement.",
          },
          {
            title: "Client call — Acme",
            date: "Today, 12:30",
            duration: "28 min",
            tasks: "1/2 tasks",
            summary: "Project progress reviewed. Client requests demo next week.",
          },
          {
            title: "Daily standup",
            date: "Yesterday, 09:15",
            duration: "15 min",
            tasks: null as string | null,
            summary: "Blockers: API integration pending. Juan working on it today.",
          },
          {
            title: "Sprint 14 planning",
            date: "Mon, 11:00",
            duration: "1h 20 min",
            tasks: "5/8 tasks",
            summary: "12 user stories estimated. Team capacity: 34 points.",
          },
        ],
        tasksList: [
          { text: "Deliver Notion integration prototype", assignee: "Laura", done: true },
          { text: "Review transcription accuracy metrics", assignee: "Juan", done: false },
          { text: "Prepare demo for Acme client", assignee: "Team", done: false },
        ],
        transcript:
          "Juan: We need to define Q2 priorities before the end of the month.\nLaura: I agree. The focus should be on the Notion integration and improving accuracy.\nJuan: Can we have a prototype by next week?\nLaura: Yes, by Thursday we should have something functional to review...",
        comingSoon: "Coming soon in preview",
        section: "Section",
      },
      cta: {
        title: ["Be the first to ", "try it"] as [string, string],
        description:
          "MeetingScribe is in active development. Leave us your email and we'll notify you as soon as it's ready for early access.",
        placeholder: "your@email.com",
        button: "Notify me →",
        note: "No spam. We'll only notify you when we launch.",
      },
    },
    faro: {
      hero: {
        back: "Back to DynamisAI",
        badge: "Active prototype · NGI Zero application in progress",
        subtitle: "Emergency communications that work when everything else fails.",
        description:
          "Low-cost LoRa mesh + local AI triage. No internet, no mobile coverage, no external servers. For civil protection, municipalities and citizens.",
        cta1: "See how it works",
        cta2: "Project status →",
        stats: [
          { value: "23.6 s", label: "Average SOS latency" },
          { value: "0", label: "Undelivered SOS" },
          { value: "84 %", label: "Urgency triage accuracy" },
          { value: "100 %", label: "Offline — no internet" },
        ],
      },
      problem: {
        eyebrow: "The problem",
        title: ["In a real emergency, ", "networks fail"] as [string, string],
        description:
          "Recent disasters have made it clear that current communication systems depend on fragile infrastructures. When needed most, they're the first to go down.",
        incidents: [
          {
            date: "Nov 2024",
            name: "DANA Valencia",
            detail:
              "Networks went down in minutes. Citizens couldn't call emergency services. Rescue coordination was chaotic for hours.",
            risk: "Flood",
          },
          {
            date: "Apr 2025",
            name: "Iberian blackout",
            detail:
              "No electricity, no internet, no mobile coverage across much of Spain and Portugal for hours. Emergency communications depended on analog radios.",
            risk: "Power failure",
          },
          {
            date: "Recurring",
            name: "Wildfires",
            detail:
              "In Maresme, Garraf and other areas, smoke and network saturation make coordination between volunteers and civil protection difficult at critical moments.",
            risk: "Fire",
          },
        ],
        gap: {
          eyebrow: "The gap that exists",
          title: "Official systems don't reach the last mile",
          desc1:
            "Mass alert systems (ES-Alert, sirens) inform but don't allow two-way communication. Emergency services have professional radios, but citizens and volunteers are left without channels.",
          desc2:
            "FARO fills that gap: a resilient, cheap and open source communication layer that works without internet, without mobile coverage and without depending on any operator.",
        },
        costEyebrow: "Cost of NOT having it",
        costItems: [
          "SOS that take minutes to arrive",
          "Rescue coordination on saturated phone lines",
          "Resources sent to the wrong location",
          "Isolated volunteers without information",
        ],
      },
      howItWorks: {
        eyebrow: "How it works",
        title: ["From citizen to command post, ", "without internet"] as [string, string],
        description:
          "FARO combines three complementary technologies: LoRa radio for connectivity, local AI for triage, and an offline web dashboard for coordination.",
        steps: [
          {
            num: "01",
            title: "The citizen sends an SOS",
            description:
              "From the PWA mobile app (works without internet), the citizen sends an emergency message. They can type or use offline voice. The message is classified locally on the device.",
          },
          {
            num: "02",
            title: "The LoRa mesh transmits it",
            description:
              "The message hops from node to node through the LoRa network (long-range, low-power radio). No internet. No mobile coverage. Runs on battery for days. Each node repeats the message until it reaches the command post.",
          },
          {
            num: "03",
            title: "Local AI does the triage",
            description:
              "A lightweight classifier (< 500 KB, inference < 1 ms) analyzes each message: urgency (SOS, high, medium, low) and category (rescue, fire, medical, collapse...). Bilingual ES/CA. Runs on the municipality's local server, without sending data outside.",
          },
          {
            num: "04",
            title: "The CP coordinates from the dashboard",
            description:
              "The command post sees a real-time map with all alerts prioritized by triage, grouped by geographic area. The manager can dispatch resources, respond to citizens and update the status of each incident.",
          },
        ],
        corroboration: {
          eyebrow: "Corroboration system",
          title: "Automatic incident detection — without surveillance",
          desc: "When 2 or more reports of the same category arrive from an area of ~700 m, FARO groups them and marks the incident as <strong>confirmed</strong>. This enables early detection without monitoring any individual citizen. Only voluntary reports within the network.",
        },
      },
      features: {
        eyebrow: "Technology",
        title: ["Designed to work ", "in the worst conditions"] as [string, string],
        description:
          "Every FARO component is chosen to be robust, cheap and replicable by any municipality without external dependencies.",
        items: [
          {
            initials: "LoRa",
            title: "Multi-hop LoRa mesh",
            description:
              "Long-range, low-power EU868 radio. Nodes relay messages in multiple hops to the command post. No infrastructure — a Raspberry Pi and a LoRa module are enough.",
          },
          {
            initials: "AI",
            title: "Local AI triage",
            description:
              "Hybrid classifier (linear model + emergency lexicon) under 500 KB. Urgency and category in < 1 ms. Bilingual ES/CA. No connection, no cloud server, no network latency.",
          },
          {
            initials: "PWA",
            title: "Offline citizen app",
            description:
              "Web app installable on any phone (no app store needed). Works without internet: local triage, map cache, offline speech-to-text with Vosk WASM. Accessible and bilingual.",
          },
          {
            initials: "MAP",
            title: "Georeferenced command dashboard",
            description:
              "Real municipal map (OSM) with all alerts in real time. Vector pan/zoom, incident card, triage-prioritized inbox. Works without internet on the local server.",
          },
          {
            initials: "MUL",
            title: "Multi-hazard and multi-municipality",
            description:
              "Covers flood, forest/urban fire, earthquake/collapse, extreme heat and wind. Configured with real OpenStreetMap data. Scalable to multiple municipalities on the same mesh.",
          },
          {
            initials: "ALT",
            title: "Automatic activation by alerts",
            description:
              "Integrates with official CAP feeds (AEMET, IGN, EFFIS, SAIH). Upon receiving an alert, FARO switches from dormant mode to active surveillance without manual intervention from the manager.",
          },
        ],
        cost: {
          title: "Estimated cost per node: ~50-80 €",
          desc: "Heltec WiFi LoRa 32 V4 (~30 €) + Heltec Wireless Tracker (~30 €) + outdoor enclosure + battery. A municipality of 3,000 inhabitants can be covered with 8-12 strategic nodes.",
        },
        stats: [
          { v: "< 500 KB", l: "AI Model" },
          { v: "< 1 ms", l: "Local triage" },
          { v: "~80 €", l: "Per node" },
        ],
      },
      currentState: {
        eyebrow: "Current state",
        title: ["Functional prototype, ", "proven metrics"] as [string, string],
        description:
          "The software demo is built and validated. The triage algorithms and LoRa mesh simulation are running with real data from Maresme municipalities.",
        progress: "Prototype progress",
        completedLabel: "Completed",
        pendingLabel: "Next steps",
        of: "of",
        itemsCompleted: "items completed",
        done: [
          "ES/CA triage classifier (84% urgency, 76% category)",
          "LoRa mesh simulator with real physics (EU868, duty cycle 1%)",
          "Offline web command dashboard with real map (Sant Andreu de Llavaneres + Mataró)",
          "Installable mobile citizen PWA app, offline-first",
          "Offline speech-to-text (Vosk WASM)",
          "Geographic zone corroboration system",
          "Incident dispatch flow (new / en route / resolved)",
          "6 demo scenarios (DANA, fire, earthquake) on real Maresme map",
          "Adversarial test (45 real messages): 0 SOS undelivered",
          "NGI Zero application draft (41,600 € / 6 tasks)",
        ],
        pending: [
          "Publish repo on GitHub (pending Pablo's decision)",
          "Purchase Heltec V4 + GPS Tracker hardware (~155 €)",
          "CAP + AEMET parser for automatic activation",
          "Real pilot with municipality / civil protection",
          "2:15 demo video for NGI (recordable without hardware except 1 scene)",
        ],
        cta: {
          title: "Looking for pilot municipalities and technical collaborators",
          desc: "If you represent a municipality, civil protection, or are a technical specialist in LoRa / emergency systems, we'd love to talk with you.",
          button: "Talk to the team →",
        },
      },
      roadmap: {
        eyebrow: "Roadmap",
        title: ["From prototype to ", "European infrastructure"] as [string, string],
        description:
          "A clear funding path: NGI Zero first (validation and first deployment), then UCPM to scale, Horizon Europe for long-term research.",
        completedLabel: "Completed",
        phases: [
          {
            num: 1,
            label: "Current",
            title: "Validated prototype",
            description:
              "Functional demo: ES/CA triage, LoRa simulator, offline command dashboard, citizen PWA app. Metrics demonstrated. NGI Zero application in draft.",
          },
          {
            num: 2,
            label: "Next",
            title: "Open source publication + hardware",
            description:
              "Public repo on GitHub/Codeberg (NGI Zero requirement). Purchase of first hardware kit (~155 €). Real environment test with physical nodes. Demo video for the application.",
          },
          {
            num: 3,
            label: "6-12 months",
            title: "NGI Zero Commons Fund",
            description:
              "Application to the general call (reopens after summer 2026). Budget: 41,600 €. 6 tasks: multilingual triage, CAP activation, standard hardware kit, municipal pilot, documentation.",
          },
          {
            num: 4,
            label: "12-18 months",
            title: "Real municipal pilot",
            description:
              "Deployment in a real municipality in Catalonia (target: Maresme). Coordination with local civil protection. Validation in official drill. First real users.",
          },
          {
            num: 5,
            label: "18-30 months",
            title: "UCPM KAPP (EU)",
            description:
              "European consortium (≥3 entities, ≥3 countries). Application to the UCPM KAPP mechanism (500 k – 1 M€). Cross-border deployment and standardization as critical resilience infrastructure.",
          },
          {
            num: 6,
            label: "Horizon",
            title: "Horizon Europe",
            description:
              "Advanced research: semantic message compression for LoRa, emergency satellite integration, European interoperability standard. Academic publication.",
          },
        ],
      },
      cta: {
        title: ["Let's get FARO ", "to the field"] as [string, string],
        description:
          "If you represent a municipality, are a civil protection volunteer, researcher or simply want to support the project — we want to meet you.",
        cta1: "Contact the team →",
        cta2: "Discover the AI behind it: KRON",
        footer: "FARO is open source · AGPL-3.0 License · Developed under DynamisAI",
      },
    },
  },
};

export type Locale = keyof typeof t;
