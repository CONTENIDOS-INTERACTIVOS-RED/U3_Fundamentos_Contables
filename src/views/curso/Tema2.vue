<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Tipos de estados financieros y su elaboración'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        p(data-aos="fade-left") Los estados financieros son informes esenciales que proporcionan una visión detallada de la situación económica y financiera de una empresa en un momento determinado. Su correcta elaboración y análisis son clave para la toma de decisiones estratégicas en el ámbito empresarial. Entre los principales estados financieros se encuentran:
        .bg-color-11.p-5.mb-3(data-aos="fade-left")
          ul.lista-ul--color
            li.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-6
              p.mb-0 <b>Estado de situación financiera (balance general):</b> refleja los activos, pasivos y patrimonio de la empresa, ofreciendo una imagen clara de su posición financiera en una fecha específica.
            li.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-6
              p.mb-0 <b>Estado de resultados:</b> detalla los ingresos y gastos durante un periodo determinado, permitiendo evaluar la rentabilidad de las operaciones.
            li.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-6
              p.mb-0 <b>Estado de flujo de efectivo:</b> muestra la entrada y salida de dinero en la empresa, permitiendo analizar su liquidez y capacidad para afrontar obligaciones.
            li.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-6
              p.mb-0 <b>Estado de cambios en el patrimonio neto:</b> evidencia las variaciones en el capital de los accionistas a lo largo del tiempo.
    
    p.mb-4 La elaboración de estos informes requiere un proceso meticuloso que incluye:

  
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-up")
        div.tarjeta.bg-color-12.p-4.text-white.h-100
          h2 01
          p.mb-0.text-center Registro de transacciones financieras.
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-down")
        div.tarjeta.bg-color-13.p-4.h-100
          h2 02
          p.mb-0.text-center Aplicación de ajustes contables.
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-up")
        div.tarjeta.bg-color-4.p-4.h-100
          h2 03
          p.mb-0.text-center Presentación estructurada de la información, cumpliendo con las normas contables vigentes.
    
    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Comprender estos informes es fundamental para los estudiantes de administración de empresas, ya que les permite analizar el rendimiento financiero de las organizaciones y tomar decisiones estratégicas con base en información confiable.
        

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Estado de resultados: estructura y análisis
    
    p El estado de resultados, también conocido como estado de pérdidas y ganancias, es un informe financiero esencial que muestra detalladamente los ingresos, costos y gastos de una empresa durante un periodo específico. Su propósito principal es reflejar la rentabilidad de la organización, proporcionando una visión clara de su desempeño financiero.
    p.mb-5 La estructura del Estado de Resultados es: 

    .row.align-items-start.mb-3
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/3.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Ingresos totales")
            p Corresponden a la suma de todas las ventas o servicios prestados por la empresa en el período analizado. 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 <b>Por ejemplo</b>, si una empresa vende productos por un valor de $100,000 y ofrece servicios adicionales por $20,000, sus ingresos totales serían $120,000.
            .row.justify-content-center
              .col-lg-10
                .tabla-a.color-acento-botones
                  table.pst
                    thead
                      tr
                        th.bg-color-14.text-center.text-white Concepto
                        th.bg-color-14.text-center.text-white Monto
                    tbody
                      tr.text-center
                        td Ingresos por ventas o servicios
                        td $100,000
                      tr.text-center
                        td Ingresos por servicios adicionales
                        td $20,000
                      tr.text-center.text-bold
                        td Ingresos totales
                        td $120,000
             
    
          .div(titulo="Costo de Ventas (o Costos Directos)")
            p Incluye los gastos directamente asociados con la producción o adquisición de los bienes vendidos o servicios prestados. Esto abarca costos como materia prima, mano de obra directa y otros gastos relacionados. Si el costo de producción de los productos vendidos es de $60,000, este monto se registra aquí.
            .row.justify-content-center
              .col-lg-10
                .tabla-a.color-acento-botones 
                  table.pst
                    thead
                      tr
                        th.bg-color-14.text-center.text-white Concepto
                        th.bg-color-14.text-center.text-white Monto
                    tbody
                      tr.text-center
                        td Costos de materia prima
                        td $30,000
                      tr.text-center
                        td Mano de obra directa
                        td $20,000
                      tr.text-center
                        td Otros gastos relacionados
                        td $10,000
                      tr.text-center.text-bold
                        td Costo de Ventas (o Costos Directos)
                        td $60,000

          .div(titulo="Utilidad bruta")
            p Se obtiene al restar el costo de ventas de los ingresos totales. 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 Siguiendo <b>el ejemplo anterior:</b> $120,000 (ingresos totales) - $60,000 (costo de ventas) = $60,000 de utilidad bruta.
            .row.justify-content-center
              .col-lg-10
                .tabla-a.color-acento-botones
                  table.pst
                    thead
                      tr
                        th.bg-color-14.text-center.text-white Concepto
                        th.bg-color-14.text-center.text-white Monto
                    tbody
                      tr.text-center
                        td Ingresos totales
                        td $120,000
                      tr.text-center
                        td Costo de ventas
                        td $60,000
                      tr.text-center.text-bold
                        td Utilidad bruta
                        td $60,000
    
    .row.align-items-start.mb-3
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/4.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-2.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Gastos operativos")
            p Son aquellos necesarios para el funcionamiento diario de la empresa y se dividen en:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 <b>Gastos de Venta:</b> Incluyen publicidad, comisiones y otros costos relacionados con la comercialización.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 <b>Gastos Administrativos:</b> Comprenden salarios del personal administrativo, alquiler de oficinas, servicios públicos, entre otros.
            p <b>Por ejemplo</b>, si una empresa incurre en $10,000 en gastos de venta y $15,000 en gastos administrativos, sus gastos operativos totales serían $25,000.
            .row.justify-content-center
              .col-lg-10
                .tabla-a.color-acento-botones 
                  table.pst
                    thead
                      tr
                        th.bg-color-14.text-center.text-white Concepto
                        th.bg-color-14.text-center.text-white Monto
                    tbody
                      tr.text-center
                        td Gastos de ventas
                        td $10,000
                      tr.text-center
                        td Gastos administrativos
                        td $15,000
                      tr.text-center.text-bold
                        td Gastos operativos
                        td $25,000
             
    
          .div(titulo="Utilidad Operativa (o Utilidad de Operación)")
            p Resulta de restar los gastos operativos de la utilidad bruta. Con los datos anteriores: $60,000 (utilidad bruta) - $25,000 (gastos operativos) = $35,000 de utilidad operativa.
            .row.justify-content-center
              .col-lg-10
                .tabla-a.color-acento-botones 
                  table.pst
                    thead
                      tr
                        th.bg-color-14.text-center.text-white Concepto
                        th.bg-color-14.text-center.text-white Monto
                    tbody
                      tr.text-center
                        td Utilidad bruta
                        td $60,000
                      tr.text-center
                        td Gastos operativos
                        td $25,000
                      tr.text-center.text-bold
                        td Utilidad Operativa (o Utilidad de Operación)
                        td $35,000

    .row.align-items-start.mb-3
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/5.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Otros ingresos y gastos")
            p Incluyen ingresos o gastos no relacionados directamente con la operación principal de la empresa, como ganancias o pérdidas por venta de activos, intereses ganados o pagados, etc.  
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 <b>Por ejemplo</b>, si la empresa obtuvo $5,000 en intereses por inversiones y pagó $2,000 en intereses por deudas, el resultado neto en esta sección sería un ingreso de $3,000.
            .row.justify-content-center
              .col-lg-10
                .tabla-a.color-acento-botones
                  table.pst
                    thead
                      tr
                        th.bg-color-14.text-center.text-white Concepto
                        th.bg-color-14.text-center.text-white Monto
                    tbody
                      tr.text-center
                        td Intereses por inversiones
                        td $5,000
                      tr.text-center
                        td Intereses por deudas
                        td $2,000
                      tr.text-center.text-bold
                        td Otros Ingresos y Gastos
                        td $3,000
             
    
          .div(titulo="Utilidad antes de impuestos")
            p Es la suma de la utilidad operativa y los otros ingresos y gastos. En este caso: $35,000 (utilidad operativa) + $3,000 (otros ingresos netos) = $38,000.
            .row.justify-content-center
              .col-lg-10
                .tabla-a.color-acento-botones 
                  table.pst
                    thead
                      tr
                        th.bg-color-14.text-center.text-white Concepto
                        th.bg-color-14.text-center.text-white Monto
                    tbody
                      tr.text-center
                        td Utilidad operativa
                        td $35,000
                      tr.text-center
                        td Otros ingresos y gastos
                        td $3,000
                      tr.text-center.text-bold
                        td Utilidad Antes de Impuestos
                        td $38,000

          .div(titulo="Impuestos sobre la renta")
            p Corresponde al monto que la empresa debe pagar en impuestos, calculado sobre la utilidad antes de impuestos. Si la tasa impositiva es del 30%, entonces: $38,000 × 0.30 = $11,400. 
            .row.justify-content-center
              .col-lg-10
                .tabla-a.color-acento-botones
                  table.pst
                    thead
                      tr
                        th.bg-color-14.text-center.text-white Concepto
                        th.bg-color-14.text-center.text-white Monto
                    tbody
                      tr.text-center
                        td Utilidad antes de impuesto
                        td $38,000
                      tr.text-center
                        td Tasa impositiva 30%
                        td -
                      tr.text-center.text-bold
                        td Impuestos sobre la Renta
                        td $11,400     
          .div(titulo="Utilidad neta")
            p Es el resultado final después de deducir los impuestos. Con los valores anteriores: $38,000 - $11,400 = $26,600 de utilidad neta.
            .row.justify-content-center
              .col-lg-10
                .tabla-a.color-acento-botones
                  table.pst
                    thead
                      tr
                        th.bg-color-14.text-center.text-white Concepto
                        th.bg-color-14.text-center.text-white Monto
                    tbody
                      tr.text-center
                        td Utilidad antes de impuesto
                        td $38,000
                      tr.text-center
                        td Impuestos sobre la renta
                        td $11,400
                      tr.text-center.text-bold
                        td Utilidad Neta
                        td $26,600

    h2(data-aos="fade-left") Análisis del Estado de Resultados
    p.mb-5 El análisis del estado de resultados permite evaluar la rentabilidad y eficiencia operativa de una empresa. Para ello, se emplean diversas técnicas, entre las que destacan:

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Análisis vertical" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2.order-lg-1
            h4 Análisis vertical
            p Expresa cada partida del estado de resultados como un porcentaje de las ventas netas, facilitando la comparación de la estructura de costos y gastos a lo largo del tiempo o entre empresas de distintos tamaños.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 <b>Ejemplo:</b> si los gastos de venta representan el 8 % de las ventas netas, este porcentaje puede monitorearse en periodos futuros para detectar tendencias o áreas de mejora.

    
          .col-md-8.col-lg-5.col-xl-4.order-2.order-lg-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/6.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Análisis horizontal" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2.order-lg-1
            h4 Análisis horizontal
            p Compara las partidas del estado de resultados en diferentes periodos, permitiendo identificar tendencias, crecimientos o disminuciones significativas.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-6
                p.mb-0 <b>Ejemplo:</b> si los ingresos totales aumentaron un 10 % respecto al periodo anterior, pero los gastos operativos crecieron un 15 %, podría indicar que los costos están aumentando más rápido que los ingresos, lo que podría afectar la rentabilidad a largo plazo.
    
          .col-md-8.col-lg-5.col-xl-4.order-2.order-lg-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/7.png', alt='')
    
    .bg-full-width.bg-color-9.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Comprender y analizar el estado de resultados es fundamental para la toma de decisiones estratégicas, ya que proporciona información clave sobre la rentabilidad y la eficiencia de las operaciones empresariales.

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Balance General (Estado de Situación Financiera): interpretación de activos, pasivos y patrimonio
    
    p El Balance General, también conocido como Estado de Situación Financiera, es un informe contable que ofrece una visión detallada de la posición financiera de una empresa en un momento específico. Este estado se compone de tres elementos fundamentales: activos, pasivos y patrimonio. La ecuación básica que rige el Balance General es: Activo= Pasivo + Patrimonio.

    div.bg-color-3.p-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-8
          figure
            img(src="@/assets/curso/tema2/9.svg", data-aos="zoom-in")
    
    h2(data-aos="fade-left") Activos, pasivos y patrimonio
    p.mb-5 Los estados financieros incluyen tres elementos clave: activos, pasivos y patrimonio, los cuales reflejan la estructura financiera de una empresa.

    h2(data-aos="fade-left") Activos
    p.mb-5 Representan los recursos controlados por la empresa que se espera generen beneficios económicos futuros. Se clasifican en:

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
    
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/10.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Activo corriente
                p Bienes y derechos que se convertirán en efectivo o se consumirán en el ciclo normal de operaciones (generalmente dentro de un año).
                p <b>Ejemplos:</b> efectivo, cuentas por cobrar e inventarios.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/11.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Activo no corriente
                p Bienes y derechos destinados a servir a la empresa por un periodo superior a un año.
                p <b>Ejemplos:</b> propiedades, maquinaria y equipos.
    

    h2(data-aos="fade-left") Pasivos
    p.mb-5 Son las obligaciones que la empresa tiene frente a terceros, es decir, las deudas y compromisos adquiridos. Se dividen en:

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-10.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Pasivo corriente
              p.mb-0 Obligaciones que deben liquidarse en el corto plazo (usualmente dentro de un año).
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 <b>Ejemplos:</b> cuentas por pagar a proveedores y deudas a corto plazo.

      .col-lg-6.mb-3.mb-lg-0
        .bg-color-10.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Pasivo no corriente
              p.mb-0 Deudas y obligaciones con vencimiento a largo plazo.
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 <b>Ejemplos:</b> préstamos bancarios a largo plazo y bonos emitidos por la empresa.
    
    h2(data-aos="fade-left") Patrimonio

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/15.png", data-aos="zoom-in")
      .col-lg-7.order-2.order-lg-1
        p.mb-5.mb-lg-3(data-aos="fade-left") Refleja la participación residual en los activos de la empresa después de deducir los pasivos. Incluye:      
        .row.justify-content-center.align-items-center.bg-h85-2
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left")
                ul.lista-ul--color.mb-0
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 Capital aportado por los propietarios.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-6
                    p.mb-0 Utilidades retenidas.
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema2/14.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto
    
    h2(data-aos="fade-left") Ejemplo práctico
    p.mb-5 A continuación, se presenta un <b>Balance General simplificado</b> de la empresa Innovaciones Tecnológicas S.A. al 31 de diciembre de 2024: En este ejemplo, la suma de los activos ($200,000) es igual a la suma de los pasivos y el patrimonio ($100,000 + $100,000), cumpliendo con la ecuación fundamental del Balance General.

    .bg-full-width.bg-color-5.mb-5.mb-3.mb-lg-0
      .px-4.px-md-5.pb-md-3       
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.order-1.order-lg-2
                h5 Interpretación
                p Analizar el Balance General permite evaluar la liquidez, solvencia y estructura de capital de la empresa. Por ejemplo, al comparar el activo corriente ($100,000) con el pasivo corriente ($40,000), se puede determinar la capacidad de la empresa para cubrir sus obligaciones a corto plazo. Una proporción saludable indica una buena posición de liquidez. Comprender la composición y relación entre activos, pasivos y patrimonio neto es esencial para evaluar la salud financiera de una empresa y tomar decisiones informadas.
              .col-lg-4(data-aos="zoom-in").order-2.order-lg-1
                img.img-fluid(src='@/assets/curso/tema2/16.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    .row.mb-5.justify-content-center
      .col-lg-10
        .titulo-figura.mb-3
          h5 Tabla 6.
          span Estado de situación financiera / Balance general

        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th.bg-color-4.text-center(colspan="2") ESTADO DE SITUACIÓN FINANCIERA / BALANCE GENERAL
                
            tbody
              tr
                td.text-bold(colspan="2") ACTIVO
              tr
                td(colspan="2") Activo corriente
              tr
                td Total Activo corriente
                td $ 100.000
              tr
                td Activo no corriente
                td 
              tr
                td Total Activo no corriente
                td $ 100.000
              tr
                td.text-bold TOTAL ACTIVO
                td.text-bold $ 200.000
              tr
                td.text-bold(colspan="2") PASIVO
              tr
                td(colspan="2") Pasivo corriente
              tr
                td Total pasivo corriente
                td $ 40.000
              tr
                td Pasivo no corriente
                td 
              tr
                td Total pasivo no corriente
                td $ 60.000
              tr
                td.text-bold TOTAL PASIVO
                td.text-bold $ 100.000
              tr
                td.text-bold(colspan="2") PATRIMONIO
              tr
                td TOTAL PATRIMONIO
                td $ 100.000
              tr
                td.text-bold TOTAL PASIVO + PATRIMONIO
                td.text-bold $ 200.000


    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Estado de Flujo de Efectivo: seguimiento del efectivo operativo
    
    p El <b>Estado de Flujo de Efectivo</b> es un informe financiero esencial que detalla las entradas y salidas de efectivo en una empresa durante un periodo específico. Su objetivo principal es proporcionar una visión clara de cómo la empresa genera y utiliza el efectivo, especialmente en sus actividades operativas, de inversión y financiamiento. Este análisis es crucial para evaluar la liquidez y la capacidad de la empresa para cumplir con sus obligaciones financieras a corto plazo.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/17.png", data-aos="zoom-in")
      .col-lg-8.order-2.order-lg-1
        h2(data-aos="fade-left") Actividades operativas
        p(data-aos="fade-left") Las actividades operativas engloban las transacciones relacionadas directamente con la operación principal del negocio. Incluyen:
        .bg-color-11.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-6
              p.mb-0 <b>Entradas de efectivo:</b> cobros por ventas de bienes o prestación de servicios.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right.bg-color-6
              p.mb-0 <b>Salidas de efectivo:</b> pagos a proveedores por suministros y servicios, salarios, impuestos y otros gastos operativos.
        .bg-color-15.p-5.mb-3(data-aos="fade-left")
          p.mb-0 El seguimiento del flujo de efectivo operativo es vital, ya que indica si la empresa genera suficiente efectivo para mantener sus operaciones sin recurrir a fuentes externas de financiamiento.

    h2(data-aos="fade-left") Métodos de elaboración
    p.mb-5 Existen dos métodos para elaborar el estado de flujo de efectivo:

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Método directo" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-1.order-lg-2
            h4 Método directo
            p Presenta las entradas y salidas de efectivo relacionadas con las actividades operativas de manera detallada. Por ejemplo, muestra los cobros a clientes y los pagos a proveedores. Aunque proporciona información más precisa, es menos utilizado debido a la dificultad en la recopilación de datos.
    
          .col-md-8.col-lg-5.col-xl-4.order-2.order-lg-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/18.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Método indirecto" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-1.order-lg-2
            h4 Método indirecto
            p Parte de la utilidad neta y ajusta por partidas no monetarias, como depreciaciones, y por cambios en el capital de trabajo. Es más común debido a la facilidad en la obtención de la información necesaria.
          .col-md-8.col-lg-5.col-xl-4.order-2.order-lg-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/19.png', alt='')

    h2(data-aos="fade-left") Ejemplo práctico

    .row.mb-5.justify-content-center
      .col-lg-10.p-5.bg-color-16
        div.bg-h85-3.p-5
          p Supongamos que la empresa “Innovaciones Tecnológicas S.A.” presenta la siguiente información para el año 2024:
          .row.align-items-center.justify-content-center.p-3.p-lg-0
            .col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/20.svg", data-aos="zoom-in")
            .col-lg-9.order-2.order-lg-1.mb-3.mb-lg-0
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 <b>Utilidad neta:</b> $50,000
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 <b>Depreciación:</b> $10,000
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 <b>Aumento en cuentas por cobrar:</b> $5,000
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 <b>Disminución en inventarios:</b> $3,000
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  p.mb-0 <b>Aumento en cuentas por pagar:</b> $2,000
        div.bg-h85-4.p-5
          .row.align-items-center.justify-content-center.p-3.p-lg-0
            
            .col-lg-2.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/21.svg", data-aos="zoom-in")
            .col-lg-10.mb-3.mb-lg-0
              p.mb-5 Utilizando el método indirecto, el flujo de efectivo de actividades operativas se calcularía así:
              p.mb-0 <b>Flujo de efectivo operativo =</b> Utilidad neta + Depreciación − Aumento en cuentas por cobrar + Disminución en inventarios + Aumento en cuentas por pagar.

    .titulo-figura.mb-3
      h5 Tabla 7.
      span Estado de flujo de efectivo operativo
    .row.mb-5.justify-content-center
      .col-lg-10
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-4.text-center Utilidad neta
                th.bg-color-4.text-center Depreciación
                th.bg-color-4.text-center Aumento en cuentas por cobrar
                th.bg-color-4.text-center Disminución en inventarios
                th.bg-color-4.text-center Aumento en cuentas por pagar
                
            tbody
              tr.text-center
                td + 
                td +
                td -
                td +
                td +
              tr.text-center
                td $5.000
                td $5.000
                td $5.000
                td $3.000
                td $2.000
              tr.text-center
                td(colspan="4") Flujo de efectivo operativo
                td $ 60,000
            
        .bg-color-17.p-5.mb-3(data-aos="fade-left")
          p.mb-0 Este resultado indica que, durante el año 2024, “Innovaciones Tecnológicas S.A.” generó $60,000 de efectivo a través de sus actividades operativas.

    h2(data-aos="fade-left") Importancia del seguimiento del efectivo operativo.
    p.mb-5 Monitorear el flujo de efectivo operativo permite a la empresa:

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-10.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/22.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Primero
              p.mb-0 Evaluar su capacidad para generar efectivo a partir de sus operaciones principales.

      .col-lg-6.mb-3.mb-lg-0
        .bg-color-10.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/22.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Segundo
              p.mb-0 Identificar posibles problemas de liquidez.
    
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-10.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/22.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Tercero
              p.mb-0 Tomar decisiones informadas sobre inversiones y financiamiento.

      .col-lg-6.mb-3.mb-lg-0
        .bg-color-10.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/22.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Cuarto
              p.mb-0 Planificar estrategias para mejorar la eficiencia operativa.
    
    p.mb-4 Un flujo de efectivo operativo positivo indica que la empresa puede cubrir sus gastos operativos y tiene potencial para invertir en crecimiento o reducir deudas. Por el contrario, un flujo negativo puede señalar la necesidad de financiamiento externo o ajustes en las operaciones para mejorar la generación de efectivo.

    .bg-full-width.bg-color-11.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Impacto de los Estados Financieros en la toma de decisiones
            p.mb-4(data-aos="fade-right") Los invitamos a leer <b>"Impacto de los estados financieros en la toma de decisiones"</b>, un análisis fundamental para comprender cómo estos documentos permiten evaluar la rentabilidad, liquidez y solvencia de una empresa. 
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Impacto de los Estados Financieros en la toma de decisiones.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/23.png', alt='')

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://virtual.uao.edu.co/blog/que-son-los-estados-financieros" target="_blank" rel="noopener noreferrer") Universidad Autónoma de Occidente. (2023). ¿Qué son los estados financieros y cuál es su importancia? 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.bbva.com/es/salud-financiera/estados-financieros-que-son-y-por-que-son-tan-importantes-para-una-empresa-o-pyme/" target="_blank" rel="noopener noreferrer") BBVA. (2023). Estados financieros: ¿qué son y por qué son tan importantes para una empresa o pyme? 

           

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=6KOXHc-q67E   " target="_blank" rel="noopener noreferrer") Facultad de estudios a distancia. (2021, 13 de agosto). Conceptos para informes financieros. Universidad Militar Nueva Granada. [Archivo de video] YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de los siguientes estados financieros proporciona información sobre la rentabilidad de la empresa durante un periodo específico? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Balance General',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Estado de Flujo de Efectivo',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Estado de Resultados',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Estado de Cambios en el Patrimonio',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'El estado financiero que refleja la relación entre activos, pasivos y patrimonio se llama: ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Balance General',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Estado de Resultados',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Estado de Flujo de Efectivo',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Estado de Cambios en el Patrimonio',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál es el propósito principal del estado de flujo de efectivo? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Mostrar los activos y pasivos de la empresa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Detallar las entradas y salidas de efectivo',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Evaluar los cambios en el patrimonio neto',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Determinar la rentabilidad operativa',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'El estado que registra las variaciones en el capital de los propietarios de la empresa es: ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Estado de Resultados',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Estado de Cambios en el Patrimonio',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Estado de Flujo de Efectivo',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Balance General',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'En la elaboración de los estados financieros, ¿qué paso inicial es esencial? ',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Recopilación de información contable',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Presentación de los resultados a la gerencia',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Cálculo del margen de beneficio',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Análisis de los ratios financieros',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
