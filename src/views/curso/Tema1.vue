<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Introducción a los estados financieros'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        p.mb-0 Los estados financieros son informes que reflejan la situación económica y financiera de una empresa en un momento determinado. Estos documentos son esenciales para evaluar la rentabilidad, liquidez y solvencia de una organización, facilitando la toma de decisiones estratégicas y operativas.
    
    .bg-full-width.bg-color-3.mb-5
      .p-4.p-md-5
        .row.justify-content-around.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/1.svg", data-aos="zoom-in")
          .col-lg-6
            p(data-aos="fade-left").mb-4 Para estudiar la temática, lo invitamos a escuchar el siguiente podcast.
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Estados financieros"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Definición y objetivos de los estados financieros
    
    p.mb-4 Los estados financieros proporcionan una representación estructurada de la situación financiera y el rendimiento de una empresa en un periodo determinado. Su objetivo principal es suministrar información útil para la toma de decisiones económicas por parte de diversos usuarios, como inversores, acreedores y directivos.

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
    
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/2.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Balance general
                p.mb-0 Presenta los activos, pasivos y patrimonio de la empresa en una fecha específica, ofreciendo una visión clara de su situación financiera.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/3.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Estado de resultados
                p.mb-0 Muestra los ingresos y gastos durante un periodo, reflejando la rentabilidad de las operaciones.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/4.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Estado de flujo de efectivo
                p.mb-0 Informa sobre las entradas y salidas de efectivo, evidenciando la capacidad de la empresa para generar liquidez y cumplir con sus obligaciones a corto plazo.
    
    h2(data-aos="fade-left") Ejemplo práctico
    p.mb-5 Considere una empresa que, al cierre del año, presenta los siguientes datos:

    .row.mb-5
      .col-lg-6
        .titulo-figura.mb-4
          h5 Tabla 1.
          span Balance General

        .tabla-a.color-acento-botones.mb-5 
          table.pst
            thead
              tr
                th.bg-color-4 Concepto
                th.bg-color-4 Monto ($)
            tbody
              tr
                td Activo
                td 500,000
              tr
                td Pasivo
                td 200,000
              tr
                td Patrimonio
                td 300,000
              tr
                td Total
                td 500,000
      .col-lg-6
        .titulo-figura.mb-4
          h5 Tabla 2.
          span Estado de Resultados

        .tabla-a.color-acento-botones.mb-5 
          table.pst
            thead
              tr
                th.bg-color-4 Concepto
                th.bg-color-4 Monto ($)
            tbody
              tr
                td Ingresos
                td 300,000
              tr
                td Gastos
                td 150,000
              tr
                td Utilidad
                td 150,000
              tr
                td Total
                td 300,000

    .bg-full-width-2.bg-color-5
      .px-4.px-md-5.pb-md-3       
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
                p A partir de estos datos:
                ul.lista-ul--color
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 En el <b>balance general</b>, los activos totales son $500,000 y los pasivos $200,000, resultando en un patrimonio de $300,000.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 En el <b>estado de resultados</b>, la utilidad neta es de $150,000, obtenida al restar los gastos de los ingresos.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 En el <b>estado de flujo de efectivo</b>, se detalla cómo se generó y utilizó el efectivo durante el año, proporcionando una visión completa de la liquidez de la empresa.
              .col-lg-5(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema1/5.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 La correcta interpretación de estos estados es esencial para evaluar la salud financiera de la empresa y tomar decisiones informadas que promuevan su crecimiento y sostenibilidad.


    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Importancia en la gestión de empresas comerciales
    
    p.mb-4 Los estados financieros son herramientas esenciales en la gestión de empresas comerciales, ya que proporcionan una visión detallada de la situación económica y financiera de la organización. Estos informes permiten a los directivos evaluar el desempeño de la empresa, identificar áreas de mejora y tomar decisiones fundamentadas para optimizar la rentabilidad y la sostenibilidad del negocio.

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/6.png")
            .col-lg-7
              h5 Toma de decisiones informadas
              p Permite evaluar ingresos, gastos, activos y pasivos para ajustar estrategias financieras. <b>Ejemplo:</b> si los gastos operativos aumentan un 15 % sin un incremento proporcional en los ingresos, se pueden implementar medidas para reducir costos o mejorar la eficiencia operativa.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/7.png")
            .col-lg-7
              h5 Evaluación de la rentabilidad
              p El estado de resultados muestra la relación entre ingresos y gastos. <b>Ejemplo:</b> si una empresa reporta ingresos por $500,000 y gastos por $450,000, obtiene una utilidad neta de $50,000, lo que indica una rentabilidad positiva.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/8.png")
            .col-lg-7
              h5 Gestión de la liquidez
              p El estado de flujo de efectivo ayuda a prever entradas y salidas de efectivo. <b>Ejemplo:</b> si se proyecta una salida importante de efectivo para la compra de inventario, pero los ingresos no son suficientes, la empresa puede renegociar plazos con proveedores o buscar financiamiento.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/9.png")
            .col-lg-7
              h5 Planificación estratégica
              p Los estados financieros históricos permiten identificar tendencias y patrones en el desempeño empresarial. <b>Ejemplo:</b> si un producto muestra un crecimiento sostenido en ventas, se puede decidir invertir más en su promoción o expandir la línea de productos.

    .bg-full-width.bg-color-8.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/10.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Los estados financieros son fundamentales para la gestión empresarial, ya que facilitan la toma de decisiones estratégicas, operativas y financieras con base en información estructurada y confiable.


    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Normas contables aplicables
    
    p.mb-4 Las normas contables son directrices esenciales que estandarizan la preparación y presentación de los estados financieros, asegurando la comparabilidad y transparencia de la información financiera entre empresas y sectores. Su aplicación permite que inversores, acreedores y otros interesados confíen en datos financieros consistentes y fiables para la toma de decisiones.

    .row.align-items-start.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/11.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0.order-1
    
        AcordionA(tipo="b")
          .div(titulo="Normas Internacionales de Información Financiera (NIIF)")
            p Emitidas por el IASB, establecen lineamientos globales para la elaboración de estados financieros. Ejemplo: La NIIF 16 exige que los arrendatarios reconozcan activos y pasivos derivados de contratos de arrendamiento en su balance. Si una empresa alquila maquinaria a largo plazo, debe reflejar el valor presente de los pagos futuros como un activo y un pasivo.
    
          .div(titulo="Normas Internacionales de Contabilidad (NIC)")
            p Complementan el marco normativo contable. Ejemplo: La NIC 2 establece que los inventarios deben valorarse al menor entre el costo y el valor neto realizable. Si un producto costó $50 pero su precio de venta disminuyó a $45, el inventario debe registrarse a este último valor.
    
          .div(titulo="Principios de Contabilidad Generalmente Aceptados (PCGA)")
            p Normas contables aplicadas principalmente en EE. UU. Presentan diferencias con las NIIF en ciertos tratamientos contables, como el reconocimiento de ingresos.
    
    h2.mb-5(data-aos="fade-left") Importancia de las normas contables

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/12.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") El cumplimiento de estas normas garantiza que los estados financieros reflejen con precisión la realidad económica de las empresas, promoviendo la confianza entre los usuarios de la información financiera. Además, facilitan la comparabilidad entre entidades de distintas jurisdicciones, aspecto clave en un entorno económico globalizado.
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Por ejemplo, si un inversor analiza dos empresas del mismo sector en diferentes países y ambas aplican las NIIF, puede estar seguro de que sus estados financieros siguen criterios de valoración similares, lo que permite tomar decisiones de inversión más fundamentadas.
    
    
    h2.mb-5(data-aos="fade-left") Ejemplo práctico

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/13.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        p(data-aos="fade-left") Considere una empresa que ha adquirido un equipo por $100,000 con una vida útil estimada de 10 años y un valor residual de $10,000. Según la NIC 16, la depreciación del activo debe calcularse de manera sistemática a lo largo de su vida útil. Utilizando el método de depreciación lineal, la depreciación anual sería:
        h5 Cálculo de depreciación anual:
        figure.bg-color-9.p-5
          img(src="@/assets/curso/tema1/13-1.svg", data-aos="zoom-in")
        .bg-color-10.p-4.mb-3(data-aos="fade-left")
          p.mb-0 De este modo, la empresa registrará una depreciación anual de $9,000 durante 10 años, reflejando la disminución del valor del activo en sus estados financieros.
        p Las normas contables proporcionan un marco estructurado que asegura la integridad y comparabilidad de la información financiera, siendo fundamentales para la transparencia y eficiencia de los mercados financieros.
        
    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Clases de sistemas de registro contables
    
    p.mb-4 Los sistemas de registro contable permiten documentar, clasificar y resumir transacciones financieras de manera estructurada y eficiente. La elección del sistema adecuado depende del tamaño de la empresa, la complejidad de sus operaciones y los recursos disponibles.

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/14.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="16%" y="35.5%" numero="+")
                h5 Diario mayor único
                p Registra todas las transacciones en un solo libro de manera cronológica. Es simple, pero puede volverse poco práctico para empresas con un alto volumen de operaciones.
    
              .bg-color-white.box-shadow.p-3(x="41%" y="9%" numero="+")
                h5 Diario y caja
                p Utiliza dos libros: el <b>Diario</b>, que registra todas las transacciones, y el <b>Libro de Caja</b>, que se enfoca en entradas y salidas de efectivo. Permite un mejor control del flujo de caja.
    
              .bg-color-white.box-shadow.p-3(x="77%" y="19%" numero="+")
                h5 Sistema centralizador
                p Utiliza diarios auxiliares para cada departamento (compras, ventas, nómina) y un diario general donde se consolidan periódicamente las operaciones. Facilita el control por áreas y la descentralización del registro.
    
              .bg-color-white.box-shadow.p-3(x="86%" y="63%" numero="+")
                h5 Sistema de pólizas
                p Cada transacción se documenta con una póliza (ingreso, egreso o diario), lo que proporciona un alto nivel de control interno y documentación detallada.
    
              .bg-color-white.box-shadow.p-3(x="23.5%" y="80%" numero="+")
                h5 Cuentas por cobrar y pagar
                p Se enfoca en registrar las deudas y créditos de la empresa, permitiendo el seguimiento de obligaciones pendientes y cuentas por cobrar. Es esencial para empresas con muchas operaciones a crédito.
              .bg-color-white.box-shadow.p-3(x="56.5%" y="90%" numero="+")
                h5 Sistemas computarizados
                p Automatizan el registro contable y generan informes en tiempo real, reduciendo errores y aumentando la eficiencia. Se integran con áreas como inventarios y recursos humanos.


    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in")
      .col-lg-8
        h2(data-aos="fade-left") Ejemplo práctico
        p.mb-5(data-aos="fade-left") Una empresa mediana implementa un <b>sistema centralizador</b> para gestionar su estructura departamental. Cada departamento (ventas, compras, producción) mantiene un diario auxiliar donde registra sus transacciones diarias. Al final del mes, estos diarios auxiliares se consolidan en el diario general, lo que facilita la identificación de discrepancias y permite evaluar el desempeño de cada área.
    
        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/16.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La selección del sistema de registro contable adecuado es clave para una gestión financiera eficiente y una toma de decisiones informada. Antes de implementarlo, se deben considerar el volumen de transacciones, la complejidad operativa y los recursos disponibles.


    #t_1_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.5] Métodos de evaluación de las mercancías
    
    p.mb-4 La valuación de inventarios es crucial para reflejar con precisión la situación financiera de una empresa. Existen varios métodos con aplicaciones específicas según el tipo de negocio y los cambios en los costos.


    .bg-full-width-2.bg-fondo-1
      .p-4.p-md-5
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/17.svg" alt="" style="width: 90px")
              h5.text-center PEPS (Primeras Entradas, Primeras Salidas)
              p.mb-0.text-center Los primeros artículos en ingresar son los primeros en venderse. Es ideal para productos perecederos o de rápida obsolescencia.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/17.svg" alt="" style="width: 90px")
              h5.text-center UEPS (Últimas Entradas, Primeras Salidas)
              p.mb-0.text-center Los últimos productos en entrar son los primeros en venderse. Beneficioso en entornos inflacionarios porque reduce la utilidad imponible. No está  permitido bajo las NIIF.

          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/17.svg" alt="" style="width: 90px")
              h5.text-center Costo Promedio Ponderado
              p.mb-0.text-center Calcula un costo promedio para todas las unidades disponibles durante un período. Es útil en empresas con grandes volúmenes de productos similares.
        
    h2(data-aos="fade-left") Ejemplo práctico
    p.mb-5 Una empresa compra y vende productos con los siguientes costos y cantidades:


    .row.mb-5.justify-content-center
      .col-lg-10
        .titulo-figura.mb-3
          h5 Tabla 3.
          span Compras de inventario y su costo

        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th.bg-color-4.text-center Transacción
                th.bg-color-4.text-center Unidades
                th.bg-color-4.text-center Costo por unidad ($)
                th.bg-color-4.text-center Costo total ($)
            tbody
              tr.text-center
                td Compra 1
                td 100
                td 10
                td 1,000
              tr.text-center
                td Compra 2
                td 100
                td 12
                td 1,200
              tr.text-center
                td.text-bold Total disponibles
                td.text-bold 200
                td.text-bold -
                td.text-bold 2,200
        p Si la empresa vende 150 unidades, el costo de los bienes vendidos variará según el método aplicado:    

        .titulo-figura.mb-3
          h5 Tabla 4.
          span Valoración del costo de las unidades vendidas según el método aplicado

        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th.bg-color-4.text-center Método
                th.bg-color-4.text-center Costo aplicado
                th.bg-color-4.text-center Costo total de 150 unidades ($)
            tbody
              tr.text-center
                td.text-bold PEPS
                td 100 unidades a $10 + 50 unidades a $12
                td 1,100 + 600 = 1,700
              tr.text-center
                td.text-bold UEPS
                td 100 unidades a $12 + 50 unidades a $10
                td 1,200 + 500 = 1,700
              tr.text-center
                td.text-bold Costo Promedio
                td 150 unidades x $11 (costo promedio)
                td 1,650

    #t_1_6.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.6] Devoluciones y rebajas de compras y ventas
    
    p.mb-4 Las devoluciones y rebajas de compras y ventas son ajustes contables que modifican el valor de las operaciones comerciales cuando ocurren devoluciones de mercancías o concesiones de descuentos. Su correcto registro es clave para mantener información financiera precisa.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/18.png")
            .col-lg-7
              h5 Devoluciones de compras
              p Ocurren cuando una empresa devuelve mercancías adquiridas por defectos, calidad deficiente o incumplimiento de especificaciones. Se registran en la cuenta <b>"Devoluciones sobre compras"</b>, reduciendo el valor total de las compras registradas.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/19.png")
            .col-lg-7
              h5 Devoluciones de ventas
              p Se producen cuando los clientes devuelven productos debido a insatisfacción con calidad, precio o características. Se registran en la cuenta <b>"Devoluciones sobre ventas"</b>, disminuyendo los ingresos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/20.png")
            .col-lg-7
              h5 Rebajas sobre compras
              p Reducciones en el precio de adquisición de mercancías concedidas por los proveedores debido al  volumen de compra, promociones o acuerdos comerciales. Se registran en la cuenta <b>"Descuentos sobre compras"</b>, reduciendo el valor de las compras.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/21.png")
            .col-lg-7
              h5 Rebajas sobre ventas
              p Descuentos otorgados a los clientes por promociones, fidelización o acuerdos comerciales. Se registran en la cuenta <b>"Descuentos sobre ventas"</b>, disminuyendo los ingresos netos.

    h2.mb-5(data-aos="fade-left") Ejemplo práctico

    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/22.svg", data-aos="zoom-in")
      .col-lg-9.order-2.order-lg-1
        p(data-aos="fade-left") Una empresa vende mercancías por <b>$10,000</b> más un <b>21 % de IVA</b>, totalizando $12,100. Posteriormente, el cliente devuelve productos por un valor de <b>$2,000</b> más IVA (<b>$2,420</b> en total).
        .titulo-figura.mb-3
          h5 Tabla 5.
          span Registro contable de la devolución

        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th.bg-color-4.text-center Cuenta
                th.bg-color-4.text-center Débito ($)
                th.bg-color-4.text-center Crédito ($)
            tbody
              tr.text-center
                td.text-bold Devoluciones sobre ventas
                td 2,000
                td -
              tr.text-center
                td.text-bold IVA por pagar
                td 420
                td -
              tr.text-center
                td.text-bold Clientes
                td -
                td 2,420

    .bg-full-width.bg-color-9
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/23.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Este asiento revierte parcialmente la venta original, ajustando los ingresos, impuestos y cuentas por cobrar. Una adecuada gestión de devoluciones y descuentos permite reflejar con precisión la situación financiera de la empresa y cumplir con las normativas contables vigentes.




    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.nasapack.com/metodos-de-valuacion-de-inventarios/" target="_blank" rel="noopener noreferrer") NASA PACK. (2022). Conoce los métodos de valuación de inventarios. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.mef.gob.pe/contenidos/conta_publ/con_nor_co/MarcoConceptualNIC_30102008.pdf" target="_blank" rel="noopener noreferrer") International Accounting Standards Board. (2008). Marco Conceptual para la Preparación y Presentación de los Estados Financieros.  

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=EOofNYLirnI  " target="_blank" rel="noopener noreferrer") Ramírez C. (2021, 25 de marzo). Introducción a la contabilidad financiera. Carlos Ramírez MBA EA. [Archivo de video] YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
