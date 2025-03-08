export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Estados financieros y contables de empresas comerciales',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción a los estados financieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición y objetivos de los estados financieros',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Importancia en la gestión de empresas comerciales',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Normas contables aplicables',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Clases de sistemas de registro contables',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Métodos de evaluación de las mercancías',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Devoluciones y rebajas de compras y ventas',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipos de estados financieros y su elaboración',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Estado de resultados: estructura y análisis',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Balance General (Estado de Situación Financiera): interpretación de activos, pasivos y patrimonio',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Estado de Flujo de Efectivo: seguimiento del efectivo operativo',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Vargas Moreno, M. D. L. Á. (2020). Fundamentos de contabilidad: ( ed.). Instituto Mexicano de Contadores Públicos. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/151232?page=1',
    },
    {
      referencia:
        'Muñoz Orcera, R. Márquez Vigil, J. & Lazcano Benito, L. (2020). Fundamentos de contabilidad: (1 ed.). McGraw-Hill España. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/218332?page=1',
    },
    {
      referencia:
        'Sánchez Morales, F. (2024). Fundamentos de contabilidad financiera: (1 ed.). Editorial Universitaria de Chile. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/271541?page=1',
    },
    {
      referencia:
        'Antón Pérez, J. J. & Garijo de Miguel, S. (2024). Empresa y administración: (1 ed.). Macmillan Iberia, S.A. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/267631 ',
    },
    {
      referencia:
        'Gutiérrez Aragón, Ó. (2015). Fundamentos de administración de empresas. Difusora Larousse - Ediciones Pirámide. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/49039  ',
    },
    {
      referencia:
        'Reza Trosino, J. C. (2019). El gerente efectivo: los fundamentos de la administración, el trabajo en equipo y el liderazgo (1.ª ed.). Universidad Nacional Autónoma de México (UNAM). ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/228831',
    },
    {
      referencia:
        'Salgado Benítez, J., Guerrero López, L., & Salgado Hernández, N. (2016). Fundamentos de Administración. Grupo Editorial Éxodo. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/130328',
    },
    {
      referencia:
        'BBVA. (2023). Estados financieros: ¿qué son y por qué son tan importantes para una empresa o pyme? ',
      link:
        'https://www.bbva.com/es/salud-financiera/estados-financieros-que-son-y-por-que-son-tan-importantes-para-una-empresa-o-pyme/',
    },
    {
      referencia:
        'Defontana. (2022). ¿Qué son los estados financieros y cuál es su importancia?',
      link:
        'https://www.defontana.com/blog/cl/que-son-los-estados-financieros-y-cual-es-su-importancia',
    },
    {
      referencia:
        'Esade. (2023). ¿Qué son los estados financieros de una empresa? ',
      link: 'https://www.esade.edu/beyond/es/estados-financieros-empresa/',
    },
    {
      referencia:
        'Fundación AOF. (2023). Estados financieros básicos con ejemplos para pequeños negocios. ',
      link: 'https://aofund.org/es/resource/estados-financieros/',
    },
    {
      referencia:
        'QuickBooks. (2023). Estados financieros: una guía para propietarios de pequeñas empresas. ',
      link:
        'https://quickbooks.intuit.com/global/resources/es/contabilidad-y-registro-contable/estados-financieros-guia-propietarios-pequenas-empresas/',
    },
  ],
  glosario: [
    {
      termino: 'Activo',
      significado:
        'Bienes y derechos que posee una empresa y que pueden generar beneficios económicos futuros.',
    },
    {
      termino: 'Balance general',
      significado:
        'Estado financiero que muestra la situación económica de una empresa en un momento específico, compuesto por activos, pasivos y patrimonio.',
    },
    {
      termino: 'Capital',
      significado:
        'Aportación de los socios o propietarios a una empresa, utilizada para financiar su actividad.',
    },
    {
      termino: 'Costo de ventas',
      significado:
        'Gasto directamente asociado a la producción o adquisición de los bienes vendidos por una empresa.',
    },
    {
      termino: 'Cuentas por cobrar',
      significado:
        'Derechos de la empresa para recibir pagos de clientes por ventas a crédito.',
    },
    {
      termino: 'Cuentas por pagar',
      significado:
        'Obligaciones que la empresa tiene con terceros, derivadas de la compra de bienes o servicios a crédito.',
    },
    {
      termino: 'Depreciación',
      significado:
        'Disminución del valor de un activo fijo debido al desgaste o paso del tiempo.',
    },
    {
      termino: 'Devoluciones',
      significado:
        'Retorno de mercancías a los proveedores o de los clientes a la empresa, debido a defectos o discrepancias.',
    },
    {
      termino: 'Estado de resultados',
      significado:
        'Informe que muestra los ingresos, costos y gastos de una empresa, determinando su utilidad o pérdida en un periodo específico.',
    },
    {
      termino: 'Flujo de efectivo',
      significado:
        'Estado financiero que detalla las entradas y salidas de efectivo de una empresa durante un periodo.',
    },
    {
      termino: 'Inventario',
      significado:
        'Conjunto de bienes disponibles para la venta o el uso en la producción.',
    },
    {
      termino: 'Liquidez',
      significado:
        'Capacidad de una empresa para cumplir con sus obligaciones financieras a corto plazo.',
    },
    {
      termino: 'Margen de beneficio',
      significado:
        'Porcentaje de ganancia que obtiene una empresa después de restar los costos de producción a los ingresos por ventas.',
    },
    {
      termino: 'NIIF (Normas Internacionales de Información Financiera)',
      significado:
        'Conjunto de normas contables que regulan la preparación y presentación de estados financieros.',
    },
    {
      termino: 'Pasivo',
      significado: 'Deudas y obligaciones que una empresa tiene con terceros.',
    },
    {
      termino: 'Patrimonio',
      significado:
        'Diferencia entre los activos y pasivos de una empresa, reflejando la inversión neta de los propietarios.',
    },
    {
      termino: 'PEPS (Primeras Entradas, Primeras Salidas)',
      significado:
        'Método de valoración de inventarios que asume que los primeros artículos en entrar son los primeros en salir.',
    },
    {
      termino: 'Rentabilidad:',
      significado:
        'Capacidad de una empresa para generar ganancias en relación con sus ventas, activos o capital.',
    },
    {
      termino: 'UEPS (Últimas Entradas, Primeras Salidas)',
      significado:
        'Método de valoración de inventarios que asume que los últimos artículos en entrar son los primeros en salir.',
    },
    {
      termino: 'Utilidad Neta',
      significado:
        'Beneficio total obtenido por una empresa después de restar todos los costos, gastos e impuestos de los ingresos.',
    },
  ],
}
