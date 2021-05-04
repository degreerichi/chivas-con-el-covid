import React, { useEffect } from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
// import SmoothScroll from 'smooth-scroll'

export default function Guiaweb() {

   useEffect(() => {
      const loadSmothScroll = async ()=>{
         const SmoothScroll = (await import('smooth-scroll')).default;
         new SmoothScroll('a[href*="#"]', {
            speed: 500,
            speedAsDuration: true,
            offset: 100
         });
      }
      loadSmothScroll();
   }, []);

   return (
      <>
         <Nav/>
         <a className="indice-button" href="#contenido">Índice</a>
         <div className="blog-container">
            <img className="w-100 blog-image" src="/bannerguia.jpg" alt=""/>
            <div className="blog-content">
               <h1 className="title">
                  Regresar al trabajo de forma segura <br/>
                  <small>Guía para los empleadores del Sector Comercio de Honduras sobre la prevención de la COVID-19</small>
               </h1>
               
               <h2 className="mt-5 subtitle" id="contenido">Contenido</h2>
               
               <ol>
                  <li><a href="#introduccion"><b>Introducción</b></a></li>
                  <li><a href="#consideraciones-generales"><b>¿Que consideraciones generales, información y sensibilización deben contemplar los difernetes comercios ante la crisis provocada por la COVID-19?</b></a></li>
                  <li><a href="#importancia-medidas-higiene"><b>¿Cual es la importancia de las medidas de higiene?</b></a></li>
                  <li><a href="#medidas-posibles-desde-el-hogar"><b>¿Que medidas posibles se deben considerar desde el hogar al lugar de trabajo?</b></a></li>
                  <li><a href="#medidas-posibles-al-entrar-al-trabajo"><b>¿Que medidas posibles se deben considerar al entrar en el lugar de trabajo?</b></a></li>
                  <li><a href="#medidas-dentro-del-lugar-de-trabajo"><b>¿Que medidas posibles se deben tener en cuenta dentro del lugar de trabajo?</b></a></li>
                  <li><a href="#medidas-al-salir-del-trabajo"><b>¿Qué medidas posibles se deben tener en cuenta al salir del lugar de trabajo?</b></a></li>
                  <li><a href="#trato-con-proveedores-y-clientes"><b>¿Cómo debe ser el trato con los proveedores y clientes?</b></a></li>
                  <li><a href="#gestionar-trabajadores-vulnerables"><b>¿Cómo gestionar los trabajadores vulnerables?</b></a></li>
                  <li><a href="#proteccion-del-bienestar-mental"><b>¿Qué debemos conocer sobre la protección del bienestar mental de los trabajadores en tiempos de la pandemia por la COVID-19?</b></a></li>
                  <li><a href="#como-proceder-cuando-trabajador-desarrolla-sintomas"><b>¿Cómo proceder cuando un trabajador desarrolla síntomas de COVID-19 en el lugar de trabajo?</b></a></li>
                  <li><a href="#referencias-y-recursos"><b>Referencias y recursos</b></a></li>
               </ol>
               
               <h2 className="mt-5 subtitle" id="introduccion">1. Introducción</h2>
               
               <p>En virtud de la imperante necesidad de evitar la propagación de la COVID-19 en las empresas y comercios formales e informales de Honduras a efecto de proteger la salud y vida de empleados y clientes; así como, de proteger las empresas del sector comercio del país, con el propósito que continúen con sus actividades comerciales bajo la “nueva normalidad”, de acuerdo al marco de la política de la OIT y de las Organizaciones Empresariales de Honduras y atendiendo las regulaciones específicas aplicables, se ha adaptado esta guía con la colaboración de la Cámara de Comercio e Industrias de Tegucigalpa (CCIT) contemplando las disposiciones del “Manual de Bioseguridad por motivo de la Pandemia por COVID-19”, y los “Protocolos de Bioseguridad” relativos a los rubros de comercio y servicios” emitido por la Secretaria del Trabajo y Seguridad Social (STSS) de Honduras.</p>
               <p>La adaptación de esta guía para empleadores del sector comercio de Honduras, se realizó de la guía de referencia general elaborada por la Oficina de Actividades para los Empleadores de la Organización Internacional del Trabajo (OIT-ACT/EMP) la cual se fundamenta en materiales desarrollados por muchas organizaciones de todo el mundo entre ellas: «La Guía general para prevenir la propagación de COVID-19 en el lugar de trabajo», preparada por los interlocutores sociales belgas y expertos gubernamentales, así como las guías elaboradas por ManufacturingNZ, IBEC, Unión Industrial Argentina, la Cámara Chilena de la Construcción, la Cámara de Comercio de Guayaquil, la Cámara de Agricultura de Guatemala, junto con diversos materiales y orientaciones de la OMS y la adaptación para Honduras en la que se contó con la colaboración del Consejo Hondureño de la Empresa Privada (COHEP), considerando la regulación nacional.</p>
               <p>El objetivo de esta guía es proporcionar a los comerciantes las directrices e información general sobre la forma de evitar la propagación de la COVID-19, que les permita continuar con sus actividades comerciales de forma segura.</p>
               <p>La herramienta contempla recomendaciones sobre las prácticas y estrategias de salud y seguridad para la prevención de la COVID-19. También facilita algunas ideas sobre cómo proteger el bienestar mental de los trabajadores durante la pandemia. </p>
               <p>Se alienta a todas las empresas, independientemente de su tamaño o sector, a que adopten estas recomendaciones para cuidar la salud de las personas y, en la medida de lo posible, no afectar negativamente a las actividades comerciales.</p>
               
               <h2 className="mt-5 subtitle" id="consideraciones-generales">2.	¿Qué consideraciones generales, información y sensibilización deben contemplar los diferentes comercios ante la crisis provocada por la COVID-19?</h2>
            
               <p>La aplicación de medidas de protección y prevención puede requerir la introducción de cambios importantes en los procesos y prácticas del lugar de trabajo. Para facilitar esta transición, cabe considerar la posibilidad de <b>reanudar gradualmente las actividades</b> (por ejemplo, reduciendo el número de grupos de productos o actividades comerciales) a fin de simplificar la logística y el flujo de procesos, al menos, al comienzo del período de reincorporación al trabajo.</p>
               <p>Actualice <b>las evaluaciones de los riesgos</b> para la salud y la seguridad (a la luz de la necesidad de prevenir la COVID-19) con objeto de calibrar sistemáticamente cualquier riesgo de infección en los lugares de trabajo y determinar cuáles son las medidas idóneas de control que deberían aplicarse. No hay que perder de vista la jerarquía en la aplicación de estas medidas.</p>
               <p>Determine <b>cuáles son los trabajadores que pueden volver antes a trabajar</b>. En la mayoría de los comercios, es poco probable que todos los trabajadores de una misma empresa puedan reincorporarse a la vez. Habrá que atender a las necesidades de la empresa al considerar cuáles son los trabajadores, departamentos, grupos o unidades que deberán retomar antes sus actividades. También debería considerarse el cumplimiento de las restricciones en curso relativas a las operaciones comerciales y el cumplimiento de las precauciones sanitarias, como el distanciamiento físico. <b>Los trabajadores que puedan continuar con el teletrabajo deberían hacerlo</b>. Puede pensarse en la posibilidad de un horario de trabajo flexible, como el escalonamiento de las horas o el trabajo por turnos, a fin de reducir el riesgo de aglomeraciones en el lugar de trabajo.  Los comercios deberían argumentar documentalmente la legitimidad de la lógica comercial que anima este proceso, probando que los criterios de selección aplicados no son discriminatorios.</p>
               <p><b>Prepare el lugar de trabajo para el regreso de los trabajadores</b>. En particular, examine la distribución del espacio de trabajo y haga los cambios que permitan el distanciamiento físico; establezca un plan de limpieza y desinfección sistemáticas de los espacios y herramientas de trabajo, así como de abastecimiento de los suministros de limpieza y de todos los equipos de protección personal que sean necesarios (como mascarillas y guantes).</p>
               <p><b>Mantenga un diálogo abierto con los trabajadores</b>. En particular, propicie que los representantes, comités de salud y seguridad en el lugar de trabajo o delegado de bioseguridad participen en la planificación, introducción y supervisión de las medidas profilácticas y de protección. Los trabajadores pueden hacer importantes contribuciones al evaluar los riesgos y proponer soluciones. Además, puede ser necesario negociar algunos cambios con cada uno de los trabajadores, por ejemplo, en relación con los turnos o el teletrabajo.</p>
               <p><b>Involucre a los expertos</b>. Al elaborar las medidas de control y prevención y el plan de «reincorporación al trabajo», contemple la posibilidad de recurrir a los conocimientos especializados que estén disponibles a nivel interno y externo, como un asesor en materia de prevención o servicios externos de salud ocupacional y, en este momento, con los capacitadores de INFOP, Cámara de Comercio e Industrias de Tegucigalpa (CCIT), CANAHTUR y El Instituto Hondureño de Turismo, con quienes se toman las capacitaciones que acreditan a la empresa para volver a operar.</p>
               <p><b>Controle de manera frecuente los requisitos y recomendaciones emitidos por las autoridades sanitarias y laborales pertinentes</b>. Como la situación epidemiológica está cambiando y los conocimientos sobre el virus van en aumento, las recomendaciones y los requisitos están sujetos a numerosos cambios, los cuales deberán reflejarse en las políticas y prácticas del lugar de trabajo. <b>Aténgase a la reglamentación vigente a nivel local</b> (por ejemplo, en lo que respecta al número máximo de miembros del personal o clientes permitidos en los locales, las restricciones a las reuniones, los tipos de actividades comerciales que pueden reanudarse). Tanto la Secretaría de Estado en los Despachos de Trabajo y Seguridad Social, como la Secretaria de Estado en el Despacho de Salud, actualizan constantemente sus páginas web con las circulares, manuales y protocolos a tener en cuenta.</p>
               <p><b>Informe e instruya a los trabajadores sobre la COVID-19</b>. Trate con ellos temas como cuáles son los síntomas, de qué modo puede protegerse el trabajador, las restricciones actuales (por ejemplo, las prohibiciones de viaje) y la razón de ser del distanciamiento físico. Asimismo, proporcione información sobre las políticas, procesos y prácticas de la actividad económica relacionadas con la gestión de la COVID-19. Lleve un registro de los trabajadores que han participado en las sesiones de información y/o capacitación, para asegurarse de que <b>todos los trabajadores han sido instruidos convenientemente</b>.</p>
               <p>Asegúrese de que <b>los trabajadores conozcan bien los planes y procedimientos de la empresa con miras al «regreso al trabajo»</b>.</p>
               <p>Asegúrese de que <b>los trabajadores, así como los clientes y visitantes, sepan con quién pueden contactar en la empresa si se les plantean preguntas relacionadas con la COVID-19</b>.</p>
               <p>Tome medidas con objeto de <b>ayudar al bienestar mental de los trabajadores</b>, teniendo en cuenta las diversas circunstancias de cada uno de ellos.</p>
               <p>A medida que la gente se acostumbre a la vuelta al trabajo, es posible que aumente la tendencia a «restar importancia a los riesgos» que entraña la situación. Los encargados tendrán <b>que recordar constantemente los requisitos de las medidas en materia de prevención y protección</b>, y asegurarse de que estas se aplican de forma coherente.</p>

               <h2 className="mt-5 subtitle" id="importancia-medidas-higiene">3.	¿Cuál es la importancia de las medidas de higiene?</h2>

               <h3 className="mt-5 subtitle2">¿Como proceder para mantener la higiene personal?</h3>

               <h4 className="mt-5 subtitle3">El lavado de manos</h4>

               <p>La higiene de las manos es extremadamente importante en la prevención de la propagación del virus de la COVID-19. En ese sentido debe contemplar lo siguiente:</p>

               <ul>
                  <li>Provea de capacitación a los trabajadores, sobre la técnica adecuada para el lavado de las manos y sobre los productos adecuados para el lavado y desinfección de las manos (agua y jabón, alcohol con glicerina, alcohol gel).</li>
                  <li>Asegúrese de que los trabajadores tienen a su disposición instalaciones para lavarse las manos con agua y jabón, adecuadamente y con frecuencia.</li>
                  <li>Proporcione toallitas de papel para secarse las manos (en lugar de toallas o secadores de manos automáticos).</li>
                  <li>Recuerde a los trabajadores que deben lavarse las manos frecuentemente, con agua y jabón, durante al menos  1 minuto, especialmente al llegar al trabajo, después de ir al baño, después de sonarse la nariz, toser o estornudar y antes de almorzar. En donde no sea posible lavarse las manos con agua y jabón, facilite geles desinfectantes para manos a base de alcohol (con un 60-70% de alcohol ).</li>
                  <li>Coloque carteles y señales que promuevan el correcto lavado de manos. Al parecer, el método más efectivo es una infografía clara y con colores brillantes, sin demasiado texto adjunto.</li>
                  <li>Instruya a los trabajadores para que eviten el contacto con objetos o superficies que hayan sido utilizadas o tocadas por otras personas (por ejemplo, los tiradores de las puertas) y para que se laven las manos después del contacto con dichas superficies u objetos y antes de colocarse el EPP y después de su retirada.</li>
               </ul>

               <h4 className="mt-5 subtitle3">La higiene respiratoria</h4>

               <p>El uso de la mascarilla es obligatorio cuando no se está solo en el espacio de trabajo adicionalmente es importante considerar las siguientes indicaciones:</p>

               <ul>
                  <li>Recuerde a los trabajadores la necesidad de cubrirse la boca y la nariz con el codo flexionado o un pañuelo al toser o estornudar y de desechar inmediatamente los pañuelos usados.</li>
                  <li>Facilite pañuelos de papel y contenedores específicos para desecharlos. Los cubos con tapadera accionada con  pedal son los más adecuados para ello.</li>
                  <li>Prevea un sistema para vaciar los contenedores y desinfectarlos.</li>
                  <li>Coloque carteles y letreros que recuerden a los trabajadores que deben evitar tocarse la nariz, los ojos o la boca.</li>
               </ul>

               <h3 className="mt-5 subtitle2">¿Cómo mantener la limpieza de los espacios, los equipos y las instalaciones de trabajo?</h3>

               <p>Para asegurar una correcta limpieza de los objetos y las superficies se debe establecer protocolos o procedimientos de limpieza y desinfección diarios para velar por que el lugar, los puestos, los equipos y las instalaciones de trabajo estén limpias y ordenadas.</p>
               <p>Cree uno (o varios) equipos específicos para mantener la limpieza y desinfección de los espacios. El equipo debe contar con los suministros, la formación y el equipo de protección personal necesarios para llevar a cabo estas tareas.</p>
               <p>Considere la posibilidad de llevar y exhibir un registro de las actividades de limpieza (como el que vemos en los aseos de los aeropuertos, por ejemplo). Para algunas industrias esta es una medida obligatoria, conforme el Manual de Bioseguridad de cada una.</p>
               <p>A la hora de la limpieza, conviene prestar especial atención a las áreas de contacto o tránsito intensivo o frecuente, tales como las salas de venta o atención al cliente, las instalaciones de la caja, los  mostradores, los casilleros o vestuarios, los pasillos, las áreas de fumadores, los escritorios y teclados compartidos, las máquinas expendedoras, los tiradores de puertas y ventanas, las barandillas, los interruptores de luz, los botones de puertas de ascensores, las puertas de los aseos, los grifos de los baños, los dispensadores de jabón, los paneles o mandos de control de aparatos y máquinas como impresoras, las herramientas de uso frecuente, etc.</p>
               <p>Limite el número de áreas de contacto o tránsito intensivo, por ejemplo:</p>

               <ul className="cross-ullist">
                  <li>Considerando la posibilidad de reducir algunas áreas de contacto intensivo dejando algunas puertas abiertas (teniendo en cuenta que algunas pueden ser puertas cortafuegos).</li>
                  <li>Examinando las posibilidades de abrir las puertas y los armarios sin necesidad de contacto (por ejemplo, dejando las puertas de los baños permanentemente abiertas parcialmente).</li>
                  <li>Disuadiendo al personal de compartir el material de oficina común (por ejemplo, bolígrafos, grapadoras) y otros enseres como tazas, platos y cubiertos.</li>
                  <li>Retirando las revistas y periódicos de las salas de espera y áreas de  comedores.</li>
               </ul>
               <p>Proporcione puestos de limpieza adicionales en lugares estratégicos en el establecimiento donde los trabajadores puedan abastecerse de materiales (por ejemplo, toallitas hidroalcohólicas) para limpiar sus propias áreas, puestos de trabajo, áreas de atención al cliente,  etc.</p>
               <p>Asegúrese de que haya un buen suministro de productos de limpieza. Conforme la Ley de Uso Obligatorio de Mascarilla y Aplicación de Protocolos De Bioseguridad es obligación del patrono proporcionar todo el equipo de protección personal a sus trabajadores.</p>

               <h3 className="mt-5 subtitle2">¿Cómo mantener una ventilación adecuada en su local comercial?</h3>

               <ul>
                  <li>Ventile a fondo el lugar de trabajo mediante métodos de ventilación mecánica o natural (entre los turnos y de forma regular durante el día). Por ejemplo, en los edificios que tienen sistemas de ventilación mecánica, considere la posibilidad de cambiar la velocidad a la ventilación estándar al menos 2 horas antes del comienzo del consumo de electricidad del edificio y modificarla a otra de potencia inferior 2 horas después de finalizar el tiempo de consumo del edificio.</li>
                  <li>Mantenga funcionando la ventilación del baño las 24 horas del día, siete días a la semana. Instruya a los ocupantes del edificio para que tiren de la cadena de los inodoros con las tapas cerradas.</li>
                  <li>Asegure la ventilación con entrada de aire del exterior. Cambie las unidades con recirculación de aire a un modo de aireación completamente exterior. Asegure una ventilación natural periódica abriendo las ventanas incluso en los edificios que dispongan de ventilación mecánica.</li>
                  <li>Inspeccione el equipo de recuperación de calor para asegurarse de que las fugas están bajo control. No utilice ventiladores individuales que puedan propagar el virus.</li>
               </ul>

               <h3 className="mt-5 subtitle2">¿En qué consiste el uso del equipo de protección personal?</h3>

               <p>El equipo de protección personal puede contener mascarillas quirúrgicas y respiradores, guantes desechables, protección contra salpicaduras en los ojos u overoles  desechables. Las mascarillas para fines no médicos no se consideran equipo de protección personal, pero pueden ayudar a evitar que las personas que han contraído la COVID-19 propaguen la infección al hablar o toser.</p>
               <p>Cíñase a las recomendaciones oficiales de las autoridades sanitarias nacionales y locales sobre la conveniencia u obligatoriedad de suministrar equipos de protección personal (o mascarillas sin fines médicos) y en qué situaciones. Por ejemplo, hay distintos tipos de mascarillas que son recomendables para diferentes propósitos. Ello dependerá de las ocupaciones o tareas laborales específicas, la ubicación, las evaluaciones actualizadas de los riesgos que estas entrañan para los trabajadores y la información sobre la eficacia de las mascarillas para prevenir la propagación de la COVID-19.</p>
               <p>En general, de acuerdo con el orden de prelación en el control de riesgos, las medidas de protección colectiva (por ejemplo, la instalación de paneles de plástico a modo de separación entre los trabajadores, o la delimitación de espacios mediante cintas o cordones para asegurar el distanciamiento físico) tienen prioridad sobre las medidas de protección individual. Las mascarillas se recomiendan a menudo como medida profiláctica complementaria en situaciones en las que no es posible respetar plenamente las normas de distanciamiento físico.</p>
               <p>Las mascarillas también se recomiendan a menudo para cualquier persona que empiece a presentar síntomas de la COVID-19, así como para los trabajadores que necesiten estar en contacto con esas personas.</p>
               <p>Sea cual sea el tipo de mascarilla, el uso y la eliminación apropiados son esenciales para garantizar su eficacia y evitar cualquier aumento de la transmisión. Si un empleador exige a los trabajadores que utilicen mascarillas o cualquier otro equipo de protección, se debe proporcionar información y capacitación sobre su uso adecuado y manipulación (puesta y retirada).</p>
               <p>Incluso si se utilizan mascarillas, recuerde a los trabajadores que es esencial seguir cumpliendo estrictamente el resto de las medidas profilácticas (por ejemplo, la higiene de las manos o el distanciamiento físico).</p>
               <p>*Se recomienda a los comerciantes revisar los protocolos se bioseguridad para cada tipo de rubro, puesto que las medidas necesarias y obligatorias varían dependiente del rubro. La consulta se puede realizar en la página web de la Secretaría de Trabajo y Seguridad Social.</p>

               <h2 className="mt-5 subtitle" id="medidas-posibles-desde-el-hogar">4. ¿Qué medidas posibles se deben considerar desde el hogar al lugar de trabajo?</h2>

               <h3 className="mt-5 subtitle2">¿Qué medidas deben tomarse antes de salir de casa?</h3>

               <ul>
                  <li>Recomiende a los trabajadores que presenten cualquier síntoma de la COVID-19 (fiebre, tos seca, dolor de garganta, dificultades para respirar, resfriado, por ejemplo, con secreción nasal o estornudos, pérdida del sentido del olfato) que permanezcan en sus hogares, se pongan en contacto con un centro médico o llamen a los servicios de salud designados por las autoridades del país y sigan sus indicaciones. Los trabajadores también deben informar a su supervisor o jefe inmediato sobre esta situación.</li>
                  <li>Consulte las recomendaciones de las autoridades sanitarias sobre qué hacer cuando algún miembro del hogar de un trabajador tiene que aislarse. En muchos casos, en tales situaciones también se debe pedir al trabajador que se quede en su casa y se ponga en cuarentena.</li>
               </ul>

               <h3 className="mt-5 subtitle2">¿Qué medidas deben tomarse en el transporte hacia y desde el trabajo?</h3>

               <p>Cuando se hayan de recorrer distancias cortas para acudir al trabajo, anime a los trabajadores a ir andando o en bicicleta.</p>
               <p>Recomiende a los trabajadores que eviten el transporte público, especialmente en las horas pico. A los que tengan que hacer uso de él, aconséjelos que sigan las instrucciones de las empresas de transporte.</p>
               <p>Considere la posibilidad de prever espacios de parqueo adicionales, ya que es posible que aumente el número de trabajadores que prefieran utilizar sus propios automóviles.</p>
               <p>Recuerde a los trabajadores la importancia de mantener una buena higiene de manos y de las vías respiratorias antes, durante y después del desplazamiento.</p>
               <p>Si un empleador proporciona transporte (por ejemplo, una furgoneta o un autobús):</p>

               <ul className="cross-ullist">
                  <li>Se debe realizar la limpieza y desinfección interna y externa de la unidad de transporte, previo a cada viaje, dando especial énfasis a las superficies de apoyo de las manos, utilizando detergentes y posteriormente desinfectantes comprobados que eliminen al SARS-CoV-2</li>
                  <li>Se debe tomar la temperatura a los trabajadores antes de su ingreso a la unidad, ésta deberá encontrarse por debajo de los 37.5°C, se deberá usar gel desinfectante con base de alcohol al 70% y verificar el uso de la mascarilla.</li>
                  <li>Recuerde que debe mantenerse una distancia mínima recomendada de entre un metro y medio y dos metros  entre cada persona (por ejemplo, bloqueando ciertos asientos). Por consiguiente, el número de usuarios dependerá del tipo de vehículo. En el Protocolo de Bioseguridad de la Secretaria de Estado en los Despachos de Trabajo y Seguridad Social del mes de Junio de 2020 se recomienda, en la medida de lo posible, solo usar los asientos que cuentan con ventanilla (un trabajador por ventana) y, de no ser posible, se recomienda una distancia mínima de entre uno y dos puestos entre trabajador.</li>
                  <li>Si no se puede asegurar dicha distancia, considere la posibilidad de proporcionar protección adicional mediante mascarillas, de acuerdo con las recomendaciones de las autoridades sanitarias nacionales.</li>
                  <li>Considere la posibilidad de aumentar la frecuencia de los servicios de transporte para reducir las aglomeraciones.</li>
                  <li>Tenga en cuenta una adecuada ventilación en los vehículos (por ejemplo, con la apertura de ventanillas durante los trayectos)</li>
                  <li>Asegúrese de que el vehículo se limpia con asiduidad, prestando atención en particular a la limpieza frecuente de las zonas de alto contacto (por ejemplo, tiradores de las puertas, barandillas).</li>
                  <li>Marque la separación entre el área frontal donde se sienta el conductor y el resto del vehículo (por ejemplo, por medio de cinta adhesiva o señales en el suelo).</li>
                  <li>Pida a los pasajeros que entren y salgan del vehículo por las puertas de entrada traseras.</li>
                  <li>Evite aglomeraciones en los puntos de acceso al transporte.</li>
                  <li>Recuerde colocar avisos para los trabajadores sobre el lavado de manos y su importancia, la correcta técnica para estornudar o toser, evitar tocarse la cara, y promuevan los saludos sin ponerse en contacto con la otra persona</li>
               </ul>

               <h2 className="mt-5 subtitle" id="medidas-posibles-al-entrar-al-trabajo">5. ¿Qué medidas posibles se deben considerar al entrar en el lugar de trabajo?</h2>

               <h3 className="mt-5 subtitle2">¿En qué consiste la detección de síntomas? (por ejemplo, mediante el control de la temperatura)</h3>

               <p>Consulte las leyes, los reglamentos y las recomendaciones de las autoridades sanitarias competentes en relación con las políticas de detección de síntomas.</p>
               <p>En algunos países, los trabajadores pueden ser sometidos a un control de la temperatura corporal antes de acceder al lugar de trabajo. En caso de fiebre (temperatura superior a 37,5°), se deniega el acceso.</p>
               <p>Si se va a realizar una toma de temperatura, ésta debería hacerse a todos los trabajadores sin distinción (independientemente de su función, el tipo de contrato, etc.) y con un termómetro fiable (por ejemplo, de infrarrojos) por parte de personas que hayan recibido las instrucciones adecuadas, ya sea el personal médico, el personal de recursos humanos o el personal capacitado designado a estos efectos. Sin embargo, debe quedar claro que este control no tiene por objeto ni sustituye al diagnóstico clínico.</p>
               <p>Algunos países no recomiendan la toma de temperatura, ya que la COVID-19 no siempre implica la presencia de fiebre. Además, la detección puede tener consecuencias no deseadas: las personas con fiebre pueden ser más propensas a ocultar su estado tomando medicamentos antipiréticos (por ejemplo, paracetamol) para reducir la temperatura elevada, lo que puede dar una falsa sensación de seguridad.</p>
               <p>En algunos países, los empleadores piden a los trabajadores una declaración firmada de que están libre de los síntomas (fiebre, tos seca, dolor de garganta, dificultades para respirar, resfriado, por ejemplo, con secreción nasal o estornudos, pérdida del sentido del olfato, con o sin fiebre) para autorizarles la entrada al lugar de trabajo.</p>
               <p>Si se realiza algún control de síntomas, comunique claramente a los trabajadores que el único motivo de esta prueba es protegerlos de un posible contagio. Además, informe a los trabajadores sobre cómo se gestionarán los datos. Deben respetarse las normas de protección de datos de carácter privado.</p>
               
               <h3 className="mt-5 subtitle2">¿Qué medidas debe tomarse en el registro de las entradas y salidas?</h3>

               <p>Reduzca al mínimo el número de entradas a los locales de los comercios; en general, no debe autorizarse el paso a personas que no están directamente involucradas en las actividades del mismo. Informe a todos los visitantes (por ejemplo, clientes y proveedores) sobre las políticas de higiene y seguridad  antes de que entren en los locales comerciales. Considere la posibilidad de solicitar a los visitantes que suscriban su acuerdo con dichas políticas.</p>
               <p>En algunos países, los empleadores registran todas las entradas y salidas y los datos de contacto (dirección, número de teléfono, etc.) de los trabajadores, contratistas, proveedores y visitantes que acceden al establecimiento. Documentar las entradas y salidas puede facilitar la localización de los contactos en caso de que se detecte una infección por COVID-19 o una presunta infección. Los sistemas existentes de registro de trabajadores, proveedores y visitantes pueden utilizarse a menú do con este fin. Se debería dar preferencia a los sistemas electrónicos. Si se dispone normalmente de un sistema de acceso controlado por huellas dactilares, considere la posibilidad de cambiar temporalmente a un sistema que utilice tarjetas de acceso individuales. Un sistema basado en papel también crea un peligro potencial: el de numerosas personas que tocan las mismas superficies al fichar y registrar su entrada. Si no es posible cambiar a un sistema electrónico, asegúrese de que los trabajadores y los visitantes se hayan lavado las manos o se hayan aplicado gel hidroalcohólico antes de firmar el libro de entrada de la empresa o de utilizar el reloj de control.</p>
               
               <h3 className="mt-5 subtitle2">¿Cómo prevenir las aglomeraciones en las entradas y salidas?</h3>

               <ul>
                  <li>Promueva el distanciamiento físico y utilice medidas de separación en las entradas al establecimiento y en las salidas. Sírvase también de marcas en el suelo, cintas o señales que contribuyan a esa finalidad.</li>
                  <li>Si puede hacerse, considere la posibilidad de escalonar los turnos o las horas de entrada y salida (algunos trabajadores pueden empezar más temprano y otros más tarde en el día) para reducir la afluencia.</li>
                  <li>En la medida de lo posible y siempre que sea preciso, planifique rutas de acceso y de salida separadas para los distintos equipos.</li>
                  <li>Preste atención a la disposición de los parqueos (número, distribución de vehículos y bicicletas) para facilitar el distanciamiento.</li>
               </ul>

               <h3 className="mt-5 subtitle2">¿Cómo promover los buenos hábitos de higiene?</h3>

               <ul>
                  <li>Coloque carteles para recordar a los trabajadores que se laven las manos al llegar al lugar de trabajo y que deben evitar los apretones de manos y otros saludos que impliquen contacto personal.</li>
               </ul>

               <p>En el Manual General de Bioseguridad por motivos de la Pandemia COVID-19 en los centros de Trabajo se incluye un capítulo sobre el lavado de manos que establece:</p>

               <p><b><i>“Capacitación sobre la técnica adecuada para el lavado de las manos.</i></b></p>

               <p>Por lo general, se recomiendan la técnica establecida por la Organización Mundial de la Salud (OMS). La duración mínima es de un (1) minuto: </p>

               <ul className="arrow-ullist">
                  <li>Mojar las manos con agua y jabón.</li>
                  <li>Enjabonar muy bien la palma, el dorso, entre los dedos y las uñas.</li>
                  <li>Aclarar bien los restos de jabón y si es necesario, repetir el proceso.</li>
                  <li>Secar adecuadamente las manos con una toalla de papel.</li>
               </ul>

               <p>El lavado y desinfección debe de ser frecuente, mientras desarrollan la actividad laboral. La frecuencia debe de ser establecida de acuerdo con el tipo de actividad.</p>

               <p><b><i>Capacitación sobre los productos adecuados para el lavado y desinfección de las manos (agua y jabón, alcohol con glicerina, alcohol gel).</i></b></p>

               <p>Estos productos deben de ser suministrados por la persona responsable o el empleador. Los centros y puestos de trabajo deben contar con instalaciones para el lavado de manos que dispongan de agua y jabón, dispensadores de alcohol en gel o en glicerina.</p>
               <p>El lavado de las manos se realizará de manera obligatoria, antes de colocarse el EPP y después de su retirada. La limpieza y desinfección de las manos se realizará con agua y jabón o gel en base alcohólica entre 60 y 70 %. La utilización de guantes nunca exime de realizar un correcto lavado de las manos luego de su retirada. Las uñas deben estar cortas y bien cuidadas.</p>
               <p>Lavarse o desinfestarse las manos deberá de ser una medida necesaria en las siguientes situaciones:</p>

               <ul className="arrow-ullist">
                  <li>Luego de toser o estornudar.</li>
                  <li>Antes y después de tocarse o sonarse la nariz.</li>
                  <li>Antes y después de utilizar cualquier medio de transporte, en especial si es colectiva o público.</li>
                  <li>Antes y después de visitar lugares públicos.</li>
                  <li>Antes y después de manipular objetos, desechos sólidos o líquidos, dinero.</li>
                  <li>Antes y después de tocar animales o personas.</li>
                  <li>Antes y después de comer.</li>
                  <li>Antes y después de utilizar los servicios sanitarios.</li>
                  <li>Antes y después de la realización del trabajo.</li>
                  <li>Durante la realización del trabajo, la frecuencia dependerá del lugar de trabajo y el tipo de actividades y tareas que se desarrollan. Estará definida en cada organización o centro de trabajo”.</li>
               </ul>

               <h2 className="mt-5 subtitle" id="medidas-dentro-del-lugar-de-trabajo">6.	¿Qué medidas posibles se deben tener en cuenta dentro del lugar de trabajo?</h2>

               <h3 className="mt-5 subtitle2">¿Cuáles son las medidas a considerar en los vestuarios?</h3>

               <ul>
                  <li>Limite el número de trabajadores presentes al mismo tiempo en los vestuarios para asegurar una distancia suficiente entre ellos.</li>
                  <li>Si es necesario, ponga provisionalmente a su disposición otros vestuarios.</li>
                  <li>Cerciórese de que los vestuarios se limpian periódicamente y, en cualquier caso, entre los turnos y al final o al principio de cada jornada.</li>
               </ul>

               <h3 className="mt-5 subtitle2">¿Cuáles son las medidas a considerar en los cuartos de baño y aseos?</h3>

               <ul>
                  <li>Recuerde a los trabajadores que se laven las manos antes y después de usar el baño.</li>
                  <li>Haga que se observe, en la medida de lo posible, el distanciamiento físico: por ejemplo, instalando provisionalmente otros aseos, limitando el número de personas presentes en la zona de aseo al mismo tiempo y dejando suficiente espacio entre los urinarios y los lavabos que se puedan utilizar.</li>
                  <li>Si es posible, proporcione jabón líquido para lavarse las manos (en lugar de un jabón en barra) y toallas de papel para secarse las manos (en lugar de toallas o secadores eléctricos).</li>
                  <li>Vele por una limpieza periódica de las instalaciones y áreas de aseo y, en cualquier caso, entre los turnos y al final de jornada, procurando una ventilación permanente.</li>
                  <li>Los utensilios de limpieza de los cuartos de baño y aseo deben ser exclusivos para tal fin. Estos deben estar identificados.</li>
               </ul>

               <h3 className="mt-5 subtitle2">¿Cuáles son las medidas a considerar en las instalaciones para la alimentación y las áreas de descanso?</h3>

               <p>A menos que los comedores o instalaciones para las comidas no puedan gestionarse de acuerdo con las medidas que se indican a continuación, manténgalos abiertos para evitar que los empleados abandonen el lugar de trabajo en las pausas del almuerzo:</p>

               <ul>
                  <li>Recuerde a los trabajadores que se laven las manos antes de entrar en el comedor, y considere la posibilidad de proporcionar dispensadores de gel hidroalcohólico para las manos en la zona de comidas.</li>
                  <li>Determine el número máximo de personas que pueden permanecer en el comedor de forma segura al mismo tiempo, siempre que se respeten las medidas de distanciamiento físico.</li>
                  <li>Asigne turnos de descanso y almuerzos escalonados para evitar las aglomeraciones. Si divide a los trabajadores en equipos o turnos, evite mezclar diferentes equipos de trabajadores en el mismo espacio al mismo tiempo.</li>
                  <li>Disponga la zona de restauración de forma que permita mantener las distancias (es decir, separe más las mesas y sillas, reduzca el número de sillas disponibles).</li>
                  <li>Reduzca o elimine la posibilidad de servirse a voluntad raciones de las fuentes compartidas de alimentos, y reduzca el uso compartido de aparatos (por ejemplo, del microondas).</li>
                  <li>Considere la posibilidad de cambiar el servicio de comedor por otro de «raciones rápidas para llevar». Introduzca o aliente los pagos electrónicos para evitar el manejo de dinero en efectivo.</li>
                  <li>Mantenga los comedores limpios e higiénicos, especialmente en lo que se refiere a los utensilios proporcionados por la empresa, como cubiertos, vajilla y vasos.</li>
                  <li>Recuerde a los trabajadores que es preferible no compartir utensilios (tazas, platos, cubiertos) ni comida.</li>
                  <li>Preste especial atención a la limpieza periódica de los teclados de selección de las máquinas expendedoras de bebidas o aperitivos. Considere la posibilidad de colocar gel hidroalcohólico para las manos o toallitas limpiadoras en las zonas pertinentes.</li>
               </ul>

               <p>Además de los anteriores, en el Manual de Bioseguridad publicado por la Secretaria de Estado en los Despachos de Trabajo y Seguridad Social se establece que  en las instalaciones para la alimentación en las empresas se debe garantizar: <b>a)</b> que todo el personal que labora en las instalaciones para el proceso, manipulación y expendio de alimentos, utilice los EPP requeridos y cumpla con las técnicas y productos establecidos; <b>b)</b> Garantizar el cumplimiento de todas las exigencias que establecen las buenas prácticas de elaboración de alimentos y el acatamiento de cualquier otro nuevo protocolo de higiene, limpieza y tamizaje que establezca la empresa; <b>c)</b> el uso de utensilios desechables; y, <b>d)</b> Garantizar que todo el personal que labora en la limpieza y desinfección de las instalaciones utilice los EPP requeridos y cumpla con las técnicas y productos establecidos.</p>

               <h3 className="mt-5 subtitle2">¿Cómo organizar el trabajo, los puestos de trabajo, las actividades comerciales y/o las cadenas de producción?</h3>

               <ul>
                  <li>Promueva el teletrabajo para potenciarlo al máximo en aquellas funciones que lo permitan.</li>
                  <li>Organice la actividad laboral de manera que permita a los trabajadores presentes en el establecimiento respetar las reglas de distanciamiento físico.</li>
                  <li>En el contexto de una oficina, esto se traduce en un distanciamiento suficiente de los puestos de trabajo, espaciándolos más. Si esto no es viable, reorganice los puestos de trabajo de manera que se mantenga una distancia suficiente: por ejemplo, dejando de utilizar algunas mesas de escritorio en espacios abiertos; desplazando algunos puestos de trabajo a salas de descanso; o situando los puestos de trabajo de manera que las personas trabajen espalda con espalda o costado con costado en lugar de cara a cara.</li>
                  <li>Si no es posible asegurar una distancia suficiente entre los trabajadores: en primer lugar, utilice equipos de protección colectiva como pantallas y paneles de plástico para compartimentar los espacios de trabajo y/o medidas organizativas como el escalonamiento de las horas de trabajo y los descansos y/o la aplicación de una secuencia adaptada de tareas para maximizar el distanciamiento. Por ejemplo, en las operaciones de montaje, puede ser posible conseguir que un solo trabajador realice más (de una) tarea de montaje que normalmente realizarían dos personas si no fuera posible ejecutarla mediante la separación física de los puestos de montaje.</li>
                  <li>Si se trabaja en equipo, considere la posibilidad de limitar el tamaño de los equipos, mantener fijos sus componentes y reducir al mínimo el contacto entre los trabajadores de unos equipos y otros (por ejemplo, escalonando el tiempo de trabajo o dividiendo el espacio de trabajo en zonas e instruyendo a los equipos específicos para que se limiten a determinadas zonas únicamente).</li>
                  <li>Si uno de los miembros del equipo contrae la enfermedad, considere la posibilidad de poner en cuarentena al equipo en su totalidad (si se consideran como contactos cercanos) y recurra a un equipo de reemplazo. La composición de este podría ser funcional, de modo que se cubran todas las funciones críticas de un proceso concreto, o por ubicación, de modo que todos los integrantes del equipo trabajen en la misma zona de la oficina, fábrica, local comercial.</li>
                  <li>Señalice con marcas en el suelo la distancia interpersonal de seguridad entre los puestos de trabajo.</li>
                  <li>Si las medidas colectivas y organizativas no bastan para garantizar un distanciamiento físico adecuado mientras se ejecutan las tareas que conducen a esas situaciones, se debe proporcionar protección adicional (mascarillas faciales y/u otro equipo de protección personal) de conformidad con los requisitos y recomendaciones establecidos por las autoridades competentes.</li>
               </ul>

               <h3 className="mt-5 subtitle2">¿Cómo gestionar los utensilios o herramientas de trabajo?</h3>

               <ul>
                  <li>Instruya a cada trabajador para que use exclusivamente sus propias herramientas de trabajo o las proporcionadas por la empresa. Se debe desalentar o prohibir el uso compartido de estos utensilios entre los compañeros.</li>
                  <li>Asegurarse de que se limpien regularmente (especialmente al final de cada turno, y antes de pasar a otro trabajador).</li>
               </ul>

               <p>Los lineamientos de la Secretaria de Estado en los Despachos de Trabajo y Seguridad Social a seguir en la limpieza de los utensilios o herramientas de trabajo establecen, entre otras: <b>1)</b> Para la limpieza y desinfección se pueden emplear toallas con desinfectante, agua y jabón o los detergentes y desinfectantes que de manera habitual se encuentran autorizados para tal fin (con efecto virucida) y para las superficies se utilizará material textil desechable; <b>2)</b> Las superficies se deben limpiar con soluciones recomendadas por los organismos internacionales y comprobada su eficacia contra Sars-CoV-2. Dentro de las recomendaciones están: <b>a)</b> Para objetos personales (pantallas, teléfonos, tabletas, lentes, espejuelos, gafas): Utilice una solución de alcohol al 70 % al menos, rocíe y deje secar al aire o frote con un paño y deje secar al aire; <b>b)</b> Para superficies de trabajo, pisos, paredes, puertas, escritorios y otras superficies, como los zapatos: - Utilice una solución de cloro de uso doméstico (al 5 %) diluida de la siguiente manera: Cuatro cucharaditas de cloro por litro de agua, rocíe o frote y deje actuar por al menos 10 minutos; - Utilice amonio cuaternario al 5 % de dilución, siga las instrucciones de cada proveedor para su dilución en caso de ser más concentrado. Espere al menos 10 minutos para que actúe; - Utilice el peróxido de hidrógeno uso comercial al 3 % deje actuar por al menos 5 minutos; y, <b>c)</b> Para todo producto utilizado en limpieza de superficies y desinfección de SARS CoV-2, se debe consultar las indicaciones de uso ya que la concentración de los componentes activos puede variar de presentación industrial al doméstico y de marca en marca.</p>

               <h3 className="mt-5 subtitle2">¿Qué es el registro de contactos?</h3>

               <p>Considere la posibilidad de establecer un registro de contactos. En su forma más simple es una lista (donde figuran la fecha, el nombre del compañero y el departamento) de todos los compañeros con los que un trabajador entra en contacto durante su turno o a lo largo de una jornada de trabajo sin poder observar las reglas de distancia mínima durante más de 15 minutos.</p>
               <p>Cada trabajador debe hacerse responsable de mantener un registro de contactos y devolverlo al jefe del equipo al final de su turno o jornada laboral. El registro puede utilizarse entonces para establecer una lista de tareas que no cabe realizar mediante el distanciamiento físico: estas tareas pueden ser revisadas y están sujetas a medidas de control alternativas.</p>

               <h3 className="mt-5 subtitle2">¿Cómo controlar la circulación interna del personal?</h3>

               <ul>
                  <li>En la medida de lo posible, limite la circulación interna de los trabajadores e instrúyalos para que se abstengan de frecuentar salas o espacios donde no tengan que estar presentes o no estén obligados a realizar una tarea determinada.</li>
                  <li>Recuerde a los trabajadores que respeten las reglas de distanciamiento físico cuando se muevan por el espacio de trabajo en la medida de lo posible.</li>
                  <li>Recuerde a los trabajadores que se abstengan de usar los ascensores. Si esto no fuera posible, recuerde a los trabajadores limitar el número de personas que utilizan el ascensor a la vez (por ejemplo, autorizando únicamente una persona en un ascensor pequeño). Recomiende a los trabajadores que mantengan las distancias y se sitúen de espaldas a los demás.</li>
                  <li>Habilite, en la medida de lo posible, circuitos separados para deambular en los espacios de trabajo. Para ello, sírvase de marcas en el suelo o cintas para indicar, del modo más claro posible, las pasarelas seguras.</li>
                  <li>Considere la posibilidad de introducir la circulación unidireccional o reglas de preferencia en escaleras estrechas donde las personas coinciden sin poder guardar una distancia suficiente (por ejemplo, otorgando prioridad al sentido de bajada).</li>
                  <li>Piense en la posibilidad de establecer la circulación unidireccional en los pasillos donde las personas coinciden a menudo o las distancias no permiten una separación suficiente.</li>
                  <li>Utilice estas reglas tanto dentro como fuera del edificio, por ejemplo, en los aparcamientos, para llegar a las unidades de producción y los puestos de trabajo, así como en las instalaciones con fines sociales, los espacios para café o las salas de fumadores.</li>
                  <li>Cuando no sea posible disponer estos circuitos de forma que se asegure el distanciamiento físico, piense en recomendar una protección adicional (mascarillas faciales), de acuerdo con los requisitos y recomendaciones de las autoridades nacionales.</li>
                  <li>Se recomienda que, si el trabajador debe salir de las instalaciones en los horarios de receso y descanso, deberá cumplir con los protocolos de higiene y desinfección requeridos para la salida y reingreso a la organización o centro de trabajo.</li>
                  <li>Si se va a desplazar dentro de las instalaciones, el trabajador debe respetar el lavado frecuente de manos o su desinfección. Y si pasa de un espacio en el que esta solo (y se le permita estar sin mascarilla) a un espacio común o donde hay más empleados debe obligatoriamente ponerse la mascarilla o cubre boca.</li>
               </ul>

               <h3 className="mt-5 subtitle2">¿Qué disposiciones establecer en relación a las reuniones y los viajes?</h3>

               <ul>
                  <li>Cancele las reuniones, formaciones y viajes que no sean esenciales.</li>
                  <li>Suspenda toda reunión que requiera la presencia de un número de personas superior al máximo determinado por los requerimientos o recomendaciones nacionales.</li>
                  <li>Proponga alternativas para las reuniones cara a cara, como las herramientas y plataformas digitales.</li>
                  <li>Las reuniones preparativas o informativas pueden realizarse a través de un sistema de altavoces en el que todo el mundo trabaje desde su puesto y se mantengan las distancias.</li>
                  <li>Si es necesario celebrar una reunión cara a cara, que sea lo más breve posible, reduzca el número de asistentes al mínimo, proporcione una sala de un tamaño adecuado para asegurar el distanciamiento físico (o celebre la reunión en el exterior) y mantenga la sala limpia y bien ventilada. Contemple la posibilidad de mantener la lista y los datos personales de los participantes en la reunión por lo menos durante 14 días para facilitar el seguimiento de los contactos por si fuera necesario.</li>
                  <li>Tal vez sea conveniente indicar el número máximo de personas que pueden permanecer en cada local comercial, sala de ventas o atención al cliente y reuniones al mismo tiempo sin riesgo para su seguridad.</li>
               </ul>

               <h2 className="mt-5 subtitle" id="medidas-al-salir-del-trabajo">7. ¿Qué medidas posibles se deben tener en cuenta al salir del lugar de trabajo?</h2>

               <ul>
                  <li>Inste a los trabajadores a que se laven las manos antes de salir del lugar de trabajo. Cuando sea posible, reparta los turnos de salida para evitar las aglomeraciones.</li>
                  <li>Si es su empresa la que organiza el transporte, asegúrese de que el vehículo se limpie adecuadamente antes del traslado (véanse también las recomendaciones del punto 4).</li>
                  <li>Recuerde a los trabajadores que se laven las manos al llegar a casa.</li>
                  <li>Según la actividad comercial a que se dediquen, se pueden establecer protocolos de higiene y desinfección previos a la salida del local comercial. Asimismo, si fuere necesario, se recomienda instalar recipientes con tapa de apertura accionada con pedal, para el depósito del equipo de protección personal que no sea conveniente llevar desde el centro del trabajo hasta el hogar. Recuerde disponer de tijeras para cortar los equipos de protección personal (mascarillas y guantes) previo a su depósito.</li>
               </ul>

               <h2 className="mt-5 subtitle" id="trato-con-proveedores-y-clientes">8.	¿Cómo debe ser el trato con los proveedores y clientes?</h2>

               <h3 className="mt-5 subtitle2">¿Cómo manejar a los proveedores y las entregas?</h3>

               <ul>
                  <li>Es conveniente establecer un procedimiento específico para la recepción de las mercancías, así como revisar los protocolos de seguridad (carga y descarga) para tener en cuenta los posibles riesgos asociados a la COVID-19 y reducir las ocasiones o/y oportunidades de contacto entre proveedores y trabajadores.</li>
                  <li>Limite el número de trabajadores encargados de las entregas. A estos trabajadores se les debe impartir formación sobre los procedimientos pertinentes.</li>
                  <li>Considere la posibilidad de que la carga y descarga pueda ser realizada enteramente por el proveedor, o enteramente por el destinatario. En cualquier caso, deben mantenerse distancias seguras y puede solicitarse el lavado de manos.</li>
                  <li>De ser posible, planifique las entregas de manera escalonada para evitar la presencia de demasiadas personas ajenas a la empresa al mismo tiempo.</li>
                  <li>El virus de la COVID-19 puede sobrevivir hasta 72 horas en superficies de plástico y acero inoxidable, menos de 4 horas en el cobre y menos de 24 horas en cartón  .  Si es posible, considere la desinfección de los paquetes en los puntos de entrega antes de su entrada en el almacén o bodega o en los procesos de producción (no olvide, sin embargo, que la COVID-19 se propaga principalmente de persona a persona).</li>
                  <li>Cuando sea posible, considere la posibilidad de instalar baños móviles destinados exclusivamente a los proveedores, a fin de limitar la entrada de estos últimos en los locales comerciales.</li>
                  <li>Disponga de un lugar donde se puedan depositar sin contacto el correo o los paquetes.</li>
                  <li>Si es posible, haga sus pagos por medios electrónicos y evite el uso de dinero en efectivo. Además, asegúrese de que el mostrador y la caja se limpia regularmente.</li>
               </ul>

               <h3 className="mt-5 subtitle2">¿Cómo atender a los clientes?</h3>

               <p>La reanudación de la actividad comercial puede presentar situaciones complejas para las empresas o comercios que prestan servicios de cara al público (por ejemplo, las empresas de los sectores del comercio y los servicios públicos), ya que además de las medidas de protección de los trabajadores, también deben tener en cuenta la seguridad de sus clientes. Entre las medidas adicionales que deben considerarse en esas situaciones figuran las siguientes:</p>

               <ul>
                  <li>Compruebe y aplique con frecuencia los requisitos, recomendaciones y limitaciones pertinentes relativos a su actividad económica o rubro. Se debe cumplir con el calendario de reincorporación laboral respetando las fases y los porcentajes de trabajadores que se autoricen, los que están siendo constantemente actualizados en los comunicados que generalmente realiza la Secretaria de Estado en el Despacho de Seguridad los domingos por la noche en cadena nacional y que luego son publicados en los portales oficiales.</li>
                  <li>Ponga carteles solicitando a los clientes que presenten cualquier síntoma que no entren en el local comercial. Asimismo, coloque controles informando los controles de bioseguridad que se llevaran a cabo previo al ingreso, informando en los mismos cuando el control de temperatura del cliente previo al ingreso al local sea obligatorio</li>
                  <li>Coloque rótulos para recordar tanto al personal como a los clientes las precauciones de seguridad, en particular, la de mantener la distancia de seguridad con los demás y, siempre que sea posible, seguir buenos hábitos de higiene.</li>
                  <li>Para proteger al personal y a los clientes y evitar las aglomeraciones, determine el número máximo de personas que pueden permanecer simultáneamente dentro de sus instalaciones en un momento dado. Siga las directrices oficiales y consulte con las autoridades sanitarias locales sobre cómo proceder en estos casos. </li>
                  <li>Gestione las entradas a los locales de su empresa, autorizando únicamente la presencia de un número reducido de personas al mismo tiempo en función del área disponible para su estancia. Designe a un miembro del personal para llevar a cabo este control o establezca un mecanismo que le permita al encargado del local comercial el control del ingreso de los clientes. Una vez alcanzado el máximo aforo, sólo deberá permitirse la entrada al local de nuevos clientes de forma gradual a medida que los que están dentro vayan saliendo. En la medida de lo posible se recomienda a los lugares colocar sillas con la distancia de seguridad o marcar el suelo para que los clientes/usuarios sepan la distancia que deben respetar al esperar el ingreso al local.</li>
                  <li>Mientras esperan fuera su turno de entrada, asegúrese de que los clientes respetan las normas de distanciamiento físico. Considere la posibilidad de señalizar la distancia apropiada mediante marcas u otras señales indicativas.</li>
                  <li>Dirija la circulación de personas dentro de sus instalaciones. Debe hacerse todo lo posible para evitar los flujos cruzados, facilitando la circulación de personas en un solo sentido. Pueden utilizarse marcas en el suelo para indicar esos pasillos.</li>
                  <li>Ponga a disposición de los clientes un pediluvio y la cantidad suficiente de gel hidroalcohólico, aconsejándoles que lo usen al entrar y salir del local.</li>
                  <li>Pida a los clientes que sólo toquen los objetos que pretenden comprar.</li>
                  <li>Si es factible, instale paneles de plexiglás en todos los puntos de interacción habitual (por ejemplo,  vestíbulos, cajeros) para reducir aún más el riesgo de infección de todas las partes implicadas. Limpie estos paneles con regularidad.</li>
                  <li>Verifique que tanto clientes, proveedores, como trabajadores lleven mascarillas faciales, teniendo en cuenta que la obligatoriedad de su uso ha sido ordenada por las autoridades nacionales.</li>
                  <li>Contemple la posibilidad de aceptar pedidos en línea o por teléfono con antelación y de empaquetar provisionalmente los pedidos para limitar el tiempo de espera en persona.</li>
                  <li>Piense en facilitar servicios de reparto, si fuera viable.</li>
                  <li>Cuando sea factible, considere la posibilidad de permitir a los clientes entrar en los locales sólo con cita previa.</li>
               </ul>

               <h2 className="mt-5 subtitle" id="gestionar-trabajadores-vulnerables">9. ¿Como gestionar los trabajadores vulnerables?</h2>

               <p>La COVID-19 es una nueva enfermedad y escasea la información sobre los factores de riesgo cuando los pacientes tienen otras patologías graves. Según la información disponible hoy, las personas de edad avanzada y de cualquier edad que padezcan otras patologías de carácter grave podrían correr un mayor riesgo de evolucionar a un cuadro clínico agudo a causa de la COVID-19 .</p>
               <p>Aconseje a los trabajadores que, si se encuentran en los grupos de personas más vulnerables a la COVID-19, consulten a sus médicos. El médico puede evaluar cada caso y formular recomendaciones para que adopten medidas preventivas concretas, incluso solicitar la «incapacidad laboral» a título preventivo.</p>
               <p>Entre otras medidas profilácticas, puede adoptarse también, por ejemplo, el teletrabajo o la reasignación de los trabajadores a tareas que impliquen un menor riesgo de contraer la COVID-19.</p>
               <p>El médico también puede aconsejar sobre la adopción de otras medidas profilácticas en el hogar.</p>
               <p>Ha de mantenerse la confidencialidad sobre todos los detalles relativos al estado de salud de los trabajadores.</p>
               <p>Para los efectos de las disposiciones adoptadas a nivel nacional se consideran personas vulnerables: </p>

               <ul className="arrow-ullist">
                  <li>los mayores de 60 años; </li>
                  <li>las mujeres embarazadas; </li>
                  <li>las personas con un sistema inmunitario debilitado o inmunosupreso (cáncer, portador VIH, SIDA, asplenia, disfunción esplénica, esplenectomía, personas con trasplante, tratamiento con inmunosupresores, mayores de 60 años, embarazadas y lactantes, hacinamiento, tabaquismo, alcoholismo o con enfermedades agudas o crónicas del sistema respiratorio (infecciones, asma, bronquitis, enfisema, EPOC); </li>
                  <li>las personas con problemas cardiocirculatorios (hipertensión arterial, enfermedad isquémica, insuficiencia cardiaca, arritmias); </li>
                  <li>las personas con problemas renales; y, </li>
                  <li>las personas con enfermedades endocrino-metabólicas (obesidad, desnutrición, diabetes mellitus, dislipidemias).</li>
               </ul>

               <h2 className="mt-5 subtitle" id="proteccion-del-bienestar-mental">10. ¿Qué debemos conocer sobre la protección del bienestar mental de los trabajadores en tiempos de la pandemia por la COVID-19?</h2>

               <h3 className="mt-5 subtitle2">¿Cuál es el impacto de la pandemia en el bienestar de los trabajadores?</h3>

               <p>La pandemia de coronavirus puede inducir un grado considerable de temor, preocupación e inquietud. Hay varios factores que pueden contribuir al aumento del estrés y la ansiedad, entre ellos:</p>

               <ul className="cross-ullist">
                  <li>La ansiedad causada por los riesgos para la salud del coronavirus, especialmente en el caso de las personas consideradas como parte de un «grupo vulnerable» o que conviven con alguien con esas características.</li>
                  <li>El aislamiento, especialmente si se trata de personas que trabajan desde casa.</li>
                  <li>El flujo constante y abrumador de información.</li>
                  <li>La incertidumbre sobre la duración de la crisis y el miedo a perder el trabajo o quedarse sin ingresos, etc.</li>
                  <li>El aumento de la presión sobre los padres trabajadores y cuidadores a raíz de la suspensión de la actividad escolar.</li>
                  <li>Una mayor exigencia en la carga de trabajo debido al elevado número de ausencias y/o el aumento de la demanda, especialmente en los sectores esenciales.</li>
                  <li>La gestión emocional de la pena y el duelo.</li>
               </ul>

               <p>La ´principales causas de angustia del trabajador son atribuibles a situaciones tales como: <b>a)</b> pensar que puede sufrir un contagio y no contar con la seguridad de una atención pronta y en correspondencia con su estado de necesidad; en consecuencia, ofrecerle la seguridad de que será asistido de manera inmediata en caso de contagio contribuye a su seguridad; <b>b)</b> La incertidumbre si dejara de percibir su salario, si será suspendido o despedido; en tal sentido el empleador deberá tomar medidas ´para atenuar los efectos de la falta de ingresos familiares; <b>c)</b> Las consecuencias que pudieran derivarse de su eventual contagio, especialmente la muerte; diferentes medidas deberán tomarse si se trata de personal de salud que adquiere la enfermedad por razón de la actividad que realiza. En cuyo caso deberá ser tratada como una enfermedad profesional según la legislación nacional o según el contrato colectivo; <b>d)</b> También existe el grupo de trabajadores que, sin estar encargados de combatir la COVID-19, lo adquieren en las instalaciones de la empresa o cuando viajan de su casa a su centro de trabajo o viceversa. En cuyo caso, aunque es difícil establecer la etiología de la enfermedad, la relación de elementos topográficos o cronológicos podrá ayudar a identificar el origen profesional de la enfermedad, e indemnizarlo como tal.</p>

               <p>De acuerdo con la legislación en materia de previsión social, no solo se considera enfermedad profesional la que se contrae a causa o con ocasión del trabajo, sino también aquella enfermedad preexistente que se agrave con motivo del contagio con Covid-19.</p>
               <p>En Honduras existen un regímenes aplicable para los casos de indemnización por enfermedad profesional amparado por el Código del Trabajo que ofrece una tutela específica para los casos de muerte por enfermedad profesional consistente en el pago a los sobrevivientes una tantum de 620 días de salario, más lo que le ofrece el régimen de invalidez vejez y muerte de los institutos previsionales y. sin descartar la aseguración privada contratada por algunas instituciones o empresas. </p>
               <p>Para ayudar a los trabajadores a reducir el estrés y la ansiedad derivados de las pandemias, considere la posibilidad de:</p>

               <ul className="cross-ullist">
                  <li>Entablar regularmente una comunicación clara y precisa con los trabajadores, proporcionándoles toda la información necesaria para responder a sus principales preguntas, pero sin incitar a las especulaciones.</li>
                  <li>Tranquilizar a los trabajadores sobre las medidas adoptadas por la empresa para responder a la pandemia.</li>
                  <li>Cerciorarse de que los trabajadores sepan con quién contactar en caso de que necesiten apoyo o se sientan abrumados.</li>
                  <li>Alentar a los trabajadores a racionalizar el uso de la información, ya que la exposición continua a las noticias, los medios de comunicación y las redes sociales puede desencadenar o elevar la ansiedad, el estrés o el pánico. Es mejor mantenerse informado a través de unas pocas fuentes fidedignas, como un organismo nacional de salud o la OMS.</li>
                  <li>Crear una cultura de liderazgo compasivo: dotar a los responsables técnicos de los conocimientos y los recursos necesarios para dialogar con sus equipos, comprobar cómo se encuentran y reconocer las señales de angustia.</li>
                  <li>Recordar a los trabajadores el contenido del programa de asistencia a los empleados si la organización dispone de uno, ya que puede ser un recurso clave en materia de salud mental o de finanzas.</li>
                  <li>Indicar a los trabajadores –si no existiera ese tipo de programa– las fuentes de información y asesoramiento en materia de salud mental y bienestar, por ejemplo: de la OMS, las organizaciones de salud mental o los organismos nacionales de salud.</li>
               </ul>

               <p>En el Manual de Bioseguridad, la Secretaria de Estado en los Despachos de Trabajo y Seguridad Social recomienda a los empleadores: <b>a)</b>  Dar a conocer la posibilidad de impacto emocional debido a la pandemia COVID19; <b>b)</b> Explicar los posibles miedos y prevenir el estrés para poder mantener una forma de pensamiento de acuerdo a los requerimientos, evitar una preocupación constante, irritabilidad, mal humor, ansiedad, mala concentración u otros que puedan interferir con un buen desempeño: <b>c)</b> Informar y promover sobre el bienestar emocional; <b>d)</b> Facilitar un servicio de apoyo social y apoyo psicológico.;  y, <b>e)</b> Mantener la confidencialidad de la información de los trabajadores sospechosos o enfermos con COVID-19. Adicionalmente, la Secretaría de Estado en el Despacho de Salud ha puesto a disposición de la ciudadanía la Línea de Orientación Psicoemocional frente al COVID-19, el que ha dividido por regiones en el país.</p>

               <p>A través del portal de la OPS/OMS se puede acceder a una serie de postales para redes sociales con mensajes de apoyo a cuidadores y trabajadores de salud, así como mensajes de amplificación de historias positivas. <a href="https://www.paho.org/es/temas/coronavirus/enfermedad-por-coronavirus-covid-19/postales-para-redes-sociales-solidaridad" target="_blank">https://www.paho.org/es/temas/coronavirus/enfermedad-por-coronavirus-covid-19/postales-para-redes-sociales-solidaridad</a></p>

               <h3 className="mt-5 subtitle2">¿Cómo ajustar el apoyo a las necesidades de los trabajadores?</h3>

               <p>Ante una situación de estrés, cada persona reacciona de manera diferente. Es probable que las preocupaciones de los trabajadores durante la pandemia no sean las mismas en todos los casos. Por lo tanto, el primer paso para prestar apoyo a la salud mental de los trabajadores es comprender cómo se sienten y cuáles son realmente los factores que influyen en su bienestar. Considere la posibilidad de llevar a cabo una encuesta entre los empleados o debatir estas cuestiones con varios grupos de empleados. Contar con esta información le ayudará a que el apoyo sea más específico.</p>
               <p>Al organizar los métodos de asistencia al bienestar mental de sus empleados tenga en cuenta, según proceda, tres amplios grupos de trabajadores: los trabajadores que teletrabajan, los que han sido suspendidos o despedidos temporalmente y los que continúan en sus puestos o regresan al lugar de trabajo.</p>

               <h4 className="mt-5 subtitle3">El apoyo a los teletrabajadores</h4>

               <p>Muchas personas están teletrabajando por primera vez a tiempo completo, aisladas de sus compañeros y amigos o familiares. La interrupción de las rutinas de la vida diaria puede causarles más ansiedad y estrés. Por lo tanto, es importante apoyarlas para que se adapten a esta situación.</p>
               <p>Inste a los trabajadores a que se asesoren sobre cómo pueden proteger su propia salud mental durante este período de teletrabajo. Por ejemplo, aconséjeles que se atengan a unos horarios de trabajo regulares; que delimiten un espacio dedicado al trabajo y hagan pausas periódicamente; que fijen límites horarios para no incurrir en turnos desmesurados y participen en actividades que sean fuente de satisfacción y les distraigan de los problemas; y que mantengan el contacto con amigos y familiares a través de plataformas de comunicación en línea para evitar sentirse aislados y solos, y, en la medida de sus posibilidades, que haga ejercicio.</p>
               <p>Además, considere la posibilidad de respaldar de varias formas a quienes teletrabajan:</p>

               <ul className="cross-ullist">
                  <li>Favorezca la empatía y la disponibilidad: los responsables de la actividad comercial deben entender que los trabajadores se sientan probablemente abrumados y nerviosos. Deben estar dispuestos a escucharlos, responder a sus preguntas y tranquilizarlos sobre el empleo y otros temas que se les planteen.</li>
                  <li>Fomente el contacto entre ellos a través de las plataformas digitales de comunicación: las reuniones   virtuales pueden ser utilizadas para hacer comprobaciones periódicas y fomentar la conectividad entre los equipos.</li>
                  <li>Inste a los trabajadores a «desconectarse»: el trabajo a domicilio puede contribuir a una cultura de «conexión permanente», por lo que los responsables de la actividad comercial deberían tratar de dar ejemplo, absteniéndose de enviar mensajes en los períodos de inactividad de las personas y alentando a los trabajadores a desconectarse también. En el mismo sentido, se debería verificar que haya un acto de conexión y de desconexión dentro de un margen de tiempo tolerable.</li>
               </ul>

               <p>Preste especial atención a las necesidades de los teletrabajadores con responsabilidades de cuidados, ya que durante los períodos de cierre de las escuelas y guarderías puede resultar difícil conciliar estas responsabilidades con el trabajo. Discuta y considere con ellos varias opciones, como el ajuste de los objetivos de rendimiento, las modalidades de tiempo de trabajo flexible, la reducción del tiempo de trabajo o las licencias.</p>

               <h4 className="mt-5 subtitle3">El apoyo a los teletrabajadores</h4>

               <p>Las personas afectadas por estas modalidades pueden responder de diferentes maneras. Algunos pueden considerar grato tomarse un descanso; sin embargo, para muchos será un momento difícil, donde emociones como la incertidumbre sobre su futuro, la pérdida de un sentido de propósito o la sensación de sentirse subestimados, estarán a flor de piel.</p>
               <p>Los trabajadores pueden tener preferencias diferentes en cuanto a la forma en que desean que se les mantenga actualizados, con qué frecuencia y por quién.</p>
               <p>Para muchas personas, el trabajo constituye una parte considerable de su identidad. Celebrar reuniones por vía telemática puede ayudar a los trabajadores que están temporalmente fuera a mantener el contacto con el comercio y con compañeros de trabajo.</p>
               <p>Considere la posibilidad de sugerir a los trabajadores que realicen otras actividades, como el voluntariado o la formación en línea, para que puedan seguir perfeccionándose durante este período.</p>
               <p>También se puede incentivar la celebración de cumpleaños o fechas memorables a través de plataformas digitales.</p>

               <h4 className="mt-5 subtitle3">Los trabajadores que continúan trabajando en los locales comerciales de la empresa o regresan a sus puestos</h4>

               <p>Es crucial asegurarse de que los trabajadores que continúan trabajando en la empresa o que regresan a sus locales comerciales se sientan seguros y apoyados. Por lo tanto, el papel de la comunicación sobre las medidas de seguridad e higiene es fundamental.</p>
               <p>Además, tenga presente cualquier circunstancia especial en la que se encuentren los trabajadores (como el hecho de ser cuidador de su familia), y discuta cualquier posible ajuste que les pueda resultar útil, como horarios flexibles, reducciones de su jornada laboral, etc.</p>

               <h2 className="mt-5 subtitle" id="como-proceder-cuando-trabajador-desarrolla-sintomas">11. ¿Cómo proceder cuando un trabajador desarrolla síntomas de COVID-19 en el lugar de trabajo?</h2>

               <p>Consultar y seguir las recomendaciones o los procedimientos establecidos por las autoridades sanitarias nacionales y locales.</p>
               <p>Establecer un plan sobre las medidas que van a adoptarse si un trabajador desarrolla síntomas (fiebre, tos, dificultades respiratorias) en el lugar de trabajo. Informar a los trabajadores sobre los pasos y procedimientos pertinentes. Tenga en cuenta la adopción de medidas como las siguientes:</p>

               <ul className="cross-ullist">
                  <li>Aísle a los trabajadores afectados, preferiblemente en una habitación separada y a puerta cerrada. Si es posible, abra una ventana para ventilar. Proporcione una mascarilla quirúrgica al trabajador afectado.</li>
                  <li>Si se trata de una emergencia (un caso con síntomas graves como dificultades respiratorias), llame de inmediato a los servicios hospitalarios de urgencias. En otros casos, llame a los servicios de urgencias de atención primaria que corresponda. Ponga en práctica las instrucciones dadas.</li>
                  <li>Restrinja al mínimo necesario el contacto con los trabajadores afectados. Toda persona que preste asistencia al trabajador afectado debe llevar una mascarilla, gafas y guantes.</li>
                  <li>Limpie las zonas utilizadas por el trabajador afectado atendiendo a las recomendaciones de las autoridades de salud pública en esa materia.</li>
                  <li>Identifique las personas de su entorno laboral con las que el trabajador afectado ha estado en contacto (hasta 2 días antes de la aparición de los síntomas) para determinar cuáles son los demás trabajadores que podrían haberse expuesto a contagio. Siga las instrucciones de las autoridades sanitarias y colabore con ellas en cualquier investigación epidemiológica.</li>
               </ul>

               <h2 className="mt-5 subtitle" id="referencias-y-recursos">12. Referencias y recursos</h2>

               <p>Behavioural Insights Team, 2020, <a href="https://www.bi.team/blogs/bright-infographics-and-minimal-text-make-handwashing-posters-most-effective/" target="_blank">Bright infographics & minimal text make handwashing posters most effective – result from an online experiment</a> (en inglés).</p>
               <p>BetterWork Indonesia, 2020, <a href="https://betterwork.org/wp-content/uploads/2020/04/BWI_covid_guidance_eng_web.pdf" target="_blank">Compilation of Guidelines on Covid-19 Transmission, Prevention and Management and the Best Practices in the Workplace</a> (en inglés).</p>
               <p>Cámara Chilena de la Construcción, 2020, <a href="https://issuu.com/camaraconstruccion/docs/protocolo-en-obras-20.04.2020" target="_blank">Protocolo de acciones preventivas para obras de construcción, Versión 2.0 actualizada en 20.04.2020</a>. (en español)</p>
               <p>Cámara de Agricultura de Guatemala, 2020, <a href="https://www.camaradelagro.org/covid-19/" target="_blank">Aplicación de Protocolos del Sector Agro para la Prevención de contagio COVID19 en el lugar de trabajo</a> (en español).</p>
               <p>Cámara de Comercio de Guayaquil, 2020, <a href="https://www.lacamara.org/website/" target="_blank">Protocolo de Prevención COVID-19 en empresas comerciales o de servicios</a> (en español).</p>
               <p>Center for Workplace Mental Health, 2020, <a href="http://workplacementalhealth.org/Employer-Resources/Working-Remotely-During-COVID-19" target="_blank">Working Remotely During COVID-19</a> (en inglés).</p>
               <p>Centers for Disease Control and Prevention, 2020, <a href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-higher-risk.html" target="_blank">Coronavirus disease 2019 - People Who Are at Higher Risk for Severe Illness</a> (en inglés).</p>
               <p>Confederation of British Industry, 2020, <a href="https://www.cbi.org.uk/articles/factsheet-mental-health-and-wellbeing-in-a-crisis/" target="_blank">Factsheet: mental health and wellbeing in a crisis</a> (en inglés)</p>
               <p>Conseil supérieur pour la prévention et la protection au travail en Belgique, 2020, <a href="https://www.feb.be/globalassets/actiedomeinen/economie--conjunctuur/economie--conjunctuur/goed-voorbereid-herstarten/generieke-gids_fr_2020-04-23v1_compressed.pdf" target="_blank">Guide générique pour lutter contre la propagation du COVID-19 au travail</a> (en francés y neerlandés).</p>
               <p>Federation of European Heating, Ventilation, and Air Conditioning Associations, 2020, <a href="https://www.rehva.eu/fileadmin/user_upload/REHVA_COVID-19_guidance_document_ver2_20200403_1.pdf" target="_blank">REHVA COVID-19 guidance document, April 3, 2020</a> (en inglés).</p>
               <p>FEDIL - The Voice of Luxembourg’s Industry, 2020, <a href="https://www.fedil.lu/wp-content/uploads/2020/04/Guide_24.04.2020.pdf" target="_blank">Guide de bonnes pratiques destiné à accompagner les entreprises du secteur manufacturier poursuivant ou redémarrant leurs activités</a> (en francés).</p>
               <p>Ibec, 2020, <a href="https://www.ibec.ie/employer-hub/covid-19" target="_blank">COVID-19 hub</a></p>
               <p>ManufacturingNZ, 2020, <a href="https://covid19.ema.co.nz/wp-content/uploads/2020/04/Covid-19-Safe-Work-Protocols-Final-3-_-Manufacturing-JAM-WS.pdf" target="_blank">Covid-19 Safe Work Protocols for the manufacturing industries</a>, 19 de abril. McKinsey & Company, 2020. <a href="https://www.mckinsey.com/industries/public-sector/our-insights/europe-needs-to-prepare-now-to-get-back-to-work-safely" target="_blank">Europe needs to prepare now to get back to work—safely</a>.</p>
               <p>OIT, 2020, <a href="https://www.ilo.org/global/topics/safety-and-health-at-work/resources-library/publications/WCMS_741818/lang--es/index.htm" target="_blank">Prevención y mitigación del COVID-19 en el trabajo Lista de Comprobación</a></p>
               <p>OMS, 2020, <a href="https://apps.who.int/iris/handle/10665/331789" target="_blank">Recomendaciones sobre el uso de mascarillas en el contexto de la COVID-19: orientaciones provisionales, 6 de abril de 2020</a>.</p>
               <p>----, 2020, <a href="https://www.who.int/who-documents-detail/interim-recommendations-on-obligatory-hand-hygiene-against-transmission-of-covid-19" target="_blank">Interim recommendations on obligatory hand hygiene against transmission of COVID-19</a>.</p>
               <p>----, 2020. <a href="https://www.paho.org/es/documentos/consideraciones-psicosociales-salud-mental-durante-brote-covid-19" target="_blank">Consideraciones psicosociales y de salud mental durante el brote de COVID-19</a>.</p>
               <p>Reino Unido, Gobierno del, 2020, <a href="https://www.gov.uk/guidance/social-distancing-in-the-workplace-during-coronavirus-covid-19-sector-guidance" target="_blank">Social distancing in the workplace during coronavirus (COVID-19): sector guidance</a> (en inglés).</p>
               <p>Union Industrial Argentina, 2020, <a href="https://uia.org.ar/files/show/?id=4748" target="_blank">Protocolo de actuacion. Prevención y control de coronavirus</a> (COVID-19).</p>

               <h3 className="mt-5 subtitle2">Referencias Nacionales</h3>

               <h4 className="mt-5 subtitle3">Leyes, Decretos y reglamentos:</h4>

               <ol>
                  <li>Constitución de la República</li>
                  <li>Código del Trabajo</li>
                  <li>Código de Salud</li>
                  <li>Ley del Instituto Hondureño de Seguridad Social y su Reglamento</li>
                  <li>Ley Marco del Sistema de Protección Social (Decreto No. 56-2015)</li>
                  <li>Decreto 33-2020 de 03 de abril de 2020 publicado en el Diario Oficial La Gaceta No. 35,217 se emitió la Ley de Auxilio al Sector Productivo y a los Trabajadores ante los Efectos de la Pandemia Provocada por la COVID-19</li>
                  <li>Decreto 58-2020 de 23 de mayo de 2020 publicado en el Diario Oficial La Gaceta No. 35,261 se dictó la Ley de Uso Obligatorio de Mascarillas y Aplicación de Protocolos de Bioseguridad</li>
                  <li>Decreto Ejecutivo Número PCM-005-2020 de 10 de febrero de 2020</li>
                  <li>Reglamento General de Salud Ambiental Acuerdo No. 0094</li>
                  <li>Acuerdo Ejecutivo No. STSS-053-04 Publicado en el Diario Oficial La Gaceta No. 30,523 publicado el 19 de octubre de 2004 contentivo del Reglamento General de Medidas Preventivas de Accidentes de Trabajo y Enfermedades Profesionales</li>
               </ol>

               <h4 className="mt-5 subtitle3">Otros:</h4>

               <ul>
                  <li>Protocolos de Bioseguridad para los distintos sectores comerciales o centros de trabajo que pueden descargarse en <a href="http://www.trabajo.gob.hn/protocolos-de-bioseguridad-en-los-centros-de-trabajo/" target="_blank">http://www.trabajo.gob.hn/protocolos-de-bioseguridad-en-los-centros-de-trabajo/</a></li>
                  <li>Los Decretos de la Pandemia pueden encontrarse en la Página del Tribunal Superior de Cuentas: <a href="https://www.tsc.gob.hn/covid19/index.php/descarga-decretos-pcm-s" target="_blank">https://www.tsc.gob.hn/covid19/index.php/descarga-decretos-pcm-s</a></li>
                  <li>Los distintos comunicados oficiales emitidos por el Gobierno pueden ser descargados en el portal <a href="https://covid19honduras.org/?q=Comunicados&page=19" target="_blank">https://covid19honduras.org/?q=Comunicados&page=19</a></li>
                  <li>Los datos oficiales sobre la Pandemia pueden ser verificados en el portal <a href="https://covid19honduras.org/" target="_blank">https://covid19honduras.org/</a></li>
                  <li>En la página del COHEP pueden encontrarse datos importantes por lo que se invita a visitar su página web <a href="http://cohep.com/" target="_blank">http://cohep.com/</a></li>
                  <li>El comunicado sobre tema de cierre de fronteras puede encontrarse en el siguiente enlace: <a href="https://docs.google.com/viewerng/viewer?url=https://covid19honduras.org/sites/default/files/Comunicado_COVID-19%252010.pdf" target="_blank">https://docs.google.com/viewerng/viewer?url=https://covid19honduras.org/sites/default/files/Comunicado_COVID-19%252010.pdf</a></li>
                  <li>Para la tramitación de salvoconductos se puede avocar al siguiente enlace proporcionado por la policía Nacional: <a href="https://www.policianacional.gob.hn/scsc2020" target="_blank">https://www.policianacional.gob.hn/scsc2020</a></li>
                  <li>Portal OPS/OMS para postales de apoyo emocional: <a href="https://www.paho.org/es/temas/coronavirus/enfermedad-por-coronavirus-covid-19/postales-para-redes-sociales-solidaridad" target="_blank">https://www.paho.org/es/temas/coronavirus/enfermedad-por-coronavirus-covid-19/postales-para-redes-sociales-solidaridad</a></li>
                  <li>Portal de la Secretaría de Salud donde pueden verse comunicados oficiales y verificar los números telefónicos de las regiones que cuentan con líneas de apoyo emocional para los afectados por COVID-19 <a href="http://www.salud.gob.hn/site/" target="_blank">http://www.salud.gob.hn/site/</a></li>
                  <li>Pagina oficial de ACNUR para el estudio del tema de los desplazados <a href="https://www.acnur.org/desplazamiento-en-centroamerica.html" target="_blank">https://www.acnur.org/desplazamiento-en-centroamerica.html</a></li>
                  <li>Olvin E. Rodriguez, Segunda Edición 13 de marzo de 2013, “Derecho Individual del Trabajo”, Tegucigalpa, Honduras. OIM Editorial, S.A</li>
               </ul>

            </div>
         </div>
         <Footer/>
      </>
   )
}
