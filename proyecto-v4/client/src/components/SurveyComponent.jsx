import React, { Component } from "react";

import * as Survey from "survey-core";
import * as SurveyReact from "survey-react-ui";

import "survey-core/modern.css";
//import "./index.css";

Survey.StylesManager.applyTheme("modern");

class SurveyComponent extends Component {
  constructor() {
    super();

    const json = {
      title: "Formularios sobre los Indicadores de Estilo de Vida Mediterráneo",
      pages: [
        {
          name: "page1",
          navigationTitle: "SLIQ",
          navigationDescription: "Cuestionario Indicador de Estilo de Vida Simple",
          elements: [
            {
              type: "panel",
              name: "case_dieta",
              title: "Para contestar estas preguntas, piensa sobre tus hábitos alimentarios durante el último año. Indica con qué frecuencia consumes los siguientes alimentos. Por favor, para ello, ten en cuenta todas las comidas, aperitivos y alimentos que consumes fuera de casa.",
              elements: [
                {
                  type: "radiogroup",
                  name: "customer_role",
                  isRequired: true,
                  title: "Lechuga o ensalada de hojas verdes, con o sin otros vegetales:",
                  choices: [
                    {
                      value: 0,
                      text: "Menos de 1 a la semana"
                    },
                    {
                      value: 1,
                      text: "1 a la semana"
                    },
                    {
                      value: 2,
                      text: "2-3 veces a la semana"
                    },
                    {
                      value: 3,
                      text: "4-6 veces a la semana"
                    },
                    {
                      value: 4,
                      text: "1 al día"
                    },
                    {
                      value: 5,
                      text: "2 o más veces al día"
                    }
                  ],
                  colCount: 3
                },
                {
                  type: "radiogroup",
                  name: "start_using",
                  isRequired: true,
                  title: "Fruta, incluida la fresca, enlatada o congelada, pero sin contar los zumos:",
                  choices: [
                    {
                      value: 0,
                      text: "Menos de 1 a la semana"
                    },
                    {
                      value: 1,
                      text: "1 a la semana"
                    },
                    {
                      value: 2,
                      text: "2-3 veces a la semana"
                    },
                    {
                      value: 3,
                      text: "4-6 veces a la semana"
                    },
                    {
                      value: 4,
                      text: "1 al día"
                    },
                    {
                      value: 5,
                      text: "2 o más veces al día"
                    }
                  ],
                  colCount: 3
                },
                {
                  type: "radiogroup",
                  name: "product_discovering",
                  title: "Cereales ricos en fibra, como salvado de trigo o avena, o pan integral, de trigo o centeno, por ejemplo:",
                  choices: [
                    {
                      value: 0,
                      text: "Menos de 1 a la semana"
                    },
                    {
                      value: 1,
                      text: "1 a la semana"
                    },
                    {
                      value: 2,
                      text: "2-3 veces a la semana"
                    },
                    {
                      value: 3,
                      text: "4-6 veces a la semana"
                    },
                    {
                      value: 4,
                      text: "1 al día"
                    },
                    {
                      value: 5,
                      text: "2 o más veces al día"
                    }
                  ],
                  colCount: 3
                },
              ]
            },
            {
              type: "panel",
              name: "case_dieta",
              title: "Para contestar a las siguientes preguntas, por favor, indica cuántas veces a la semana participas en las siguientes actividades durante 30 minutos o más.",
              elements: [
                {
                  type: "radiogroup",
                  name: "ejercicio_ligero",
                  isRequired: true,
                  title: "Trabajo ligero en el jardín y pequeñas tareas domésticas (ej.: limpiar el polvo, barrar, pasar la aspiradora). Caminar sin prisa (ej.: pasear al perro), jugar a los bolos, pesca, carpintería, tocar un instrumento musical, trabajo voluntario. ",
                  choices: [
                    {
                      value: 0,
                      text: "0 a la semana"
                    },
                    {
                      value: 2,
                      text: "1-3 veces a la semana"
                    },
                    {
                      value: 3,
                      text: "4-7 veces a la semana"
                    },
                    {
                      value: 4,
                      text: "8 o más veces a la semana"
                    }
                  ],
                  colCount: 3
                },
                {
                  type: "radiogroup",
                  name: "ejercicio_moderado",
                  isRequired: true,
                  title: "Caminar rápidamente, andar en bicilceta, patinar, nadar, practicar curling, trabajar en el jardín (ej.: rastrillear, desmalezar, cavar), clases de baile, Tai Chi o ejercicio moderado.",
                  choices: [
                    {
                      value: 0,
                      text: "0 a la semana"
                    },
                    {
                      value: 4,
                      text: "1-3 veces a la semana"
                    },
                    {
                      value: 6,
                      text: "4-7 veces a la semana"
                    },
                    {
                      value: 8,
                      text: "8 o más veces a la semana"
                    }
                  ],
                  colCount: 3
                },
                {
                  type: "radiogroup",
                  name: "ejercicio_intenso",
                  isRequired: true,
                  title: "Correr, andar en bicilceta, esquí de fondo, natación, ejercicios aeróbicos, trabajos pesados en el jardín, entrenamiento con pesas, fútbol, baloncesto u otros deportes de liga.",
                  choices: [
                    {
                      value: 0,
                      text: "0 a la semana"
                    },
                    {
                      value: 6,
                      text: "1-3 veces a la semana"
                    },
                    {
                      value: 9,
                      text: "4-7 veces a la semana"
                    },
                    {
                      value: 12,
                      text: "8 o más veces a la semana"
                    }
                  ],
                  colCount: 3
                },
              ],
            },
            {
              type: "panel",
              name: "case_alcohol",
              title: "Por favor, indica cuantas copas de los siguientes tipos de alcohol consumes normalmente en una semana.",
              elements: [
                {
                  type: "text",
                  name: "vino",
                  isRequired: true,
                  title: "Vino (Copas 90-150 ml)"
                }, 
                {
                  type: "text",
                  name: "cerveza",
                  isRequired: true,
                  startWithNewLine: false,
                  title: "Cerveza (Copas 300-330 ml o 1 botellín)"
                },
                {
                  type: "text",
                  name: "copas",
                  isRequired: true,
                  startWithNewLine: false,
                  title: "Bebidas espirituosas (Licores, Ron, Whisky, Ginebra...) (Copas 30-45 ml de alcohol o 1 copa normal)"
                },
              ],
            },
            {
              type: "panel",
              name: "case_tabaco",
              title: "Por favor, indica tus hábitos tabáquicos más bajos.",
              elements: [
                {
                  type: "radiogroup",
                  name: "fumas",
                  isRequired: true,
                  title: "¿Eres fumador/a?",
                  choices: [
                    {
                      value: 0,
                      text: "Yes"
                    }, 
                    {
                      value: 0,
                      text: "No"
                    }
                  ]
                }, 
                {
                  type: "radiogroup",
                  name: "has_fumado",
                  title: "Si no, ¿has fumado alguna vez?",
                  choices: [
                    {
                      value: 1,
                      text: "Yes"
                    }, 
                    {
                      value: 2,
                      text: "No"
                    }
                  ]
                }, 
              ],
            },
            {
              type: "rating",
              name: "estres_cotidiano",
              title: "Para contestar a esta pregunta, por favor, marca la respuesta que mejor se corresponda con tu nivel de estrés en tu vida cotidiana. ",
              isRequired: true,
              rateMin: 1,
              rateMax: 6,
              minRateDescription: "Muy estresante",
              maxRateDescription: "Nada estresante"
            },  
          ],
          title: "SLIQ (Cuestionario Indicador de Estilo de Vida Simple)",
          showNumber: true,
          showQuestionNumbers: "off",
        },
        {
          name: "page2",
          navigationTitle: "SWLS",
          navigationDescription: "Escala de Satisfacción con la Vida",
          elements: [
            {
              type: "rating",
              name: "aspectos",
              title: "En la mayoría de los aspectos mi vida es como yo quiero que sea.",
              isRequired: true,
              rateMin: 1,
              rateMax: 5,
              minRateDescription: "Muy en desacuerdo",
              maxRateDescription: "Muy de acuerdo"
            },  
            {
              type: "rating",
              name: "circunstancias",
              title: "Las circunstancias de mi bida son muy buenas.",
              isRequired: true,
              rateMin: 1,
              rateMax: 5,
              minRateDescription: "Muy en desacuerdo",
              maxRateDescription: "Muy de acuerdo"
            },
            {
              type: "rating",
              name: "satisfecho",
              title: "Estoy satisfecho con mi vida.",
              isRequired: true,
              rateMin: 1,
              rateMax: 5,
              minRateDescription: "Muy en desacuerdo",
              maxRateDescription: "Muy de acuerdo"
            },
            {
              type: "rating",
              name: "importantes",
              title: "Hasta ahora he conseguido de la vida las cosas que considero importantes.",
              isRequired: true,
              rateMin: 1,
              rateMax: 5,
              minRateDescription: "Muy en desacuerdo",
              maxRateDescription: "Muy de acuerdo"
            },
            {
              type: "rating",
              name: "vivir",
              title: "Si pudiera vivir mi vida otra vez no cambiaría casi nada.",
              isRequired: true,
              rateMin: 1,
              rateMax: 5,
              minRateDescription: "Muy en desacuerdo",
              maxRateDescription: "Muy de acuerdo"
            },
          ],
          title: "SWLS (Escala de Satisfacción con la Vida)",
          showNumber: true,
          showQuestionNumbers: "off",
        },
        {
          name: "page3",
          elements: [
            {
              type: "radiogroup",
              name: "product_alternative",
              title:
                "What would you use as an alternative if [the product] were no\nlonger available?",
              hasOther: true,
              choices: [
                "Alternative 1",
                "Alternative 2",
                "Alternative 3",
                "Alternative 4",
                "Alternative 5",
                "Alternative 6"
              ],
              otherText: "Other (please name)",
              colCount: 3
            },
            {
              type: "radiogroup",
              name: "product_benefit",
              title:
                "What is the primary benefit that you have received from the\nproduct?",
              hasOther: true,
              choices: [
                "Benefit 1",
                "Benefit 2",
                "Benefit 3",
                "Benefit 4",
                "Benefit 5",
                "Benefit 6"
              ],
              colCount: 3
            },
            {
              type: "radiogroup",
              name: "product_recommend",
              title: "Have you recommended the product to anyone?",
              choices: ["Yes", "No"]
            }
          ]
        },
        {
          name: "page4",
          elements: [
            {
              type: "rating",
              name: "nps_score",
              title:
                "How likely are you to recommend the product to a friend or\ncolleague? ",
              isRequired: true,
              rateMin: 0,
              rateMax: 10,
              minRateDescription: "Most unlikely",
              maxRateDescription: "Most likely"
            },
            {
              type: "radiogroup",
              name: "favorite_functionality",
              title:
                "What's your favorite functionality / add-on for the product?",
              hasOther: true,
              choices: [
                "Feature 1",
                "Feature 2",
                "Feature 3",
                "Feature 4",
                "Feature 5",
                "Feature 6"
              ],
              colCount: 3
            },
            {
              type: "comment",
              name: "product_improvement",
              title:
                "How could the product be improved to better meet your\nneeds?"
            }
          ]
        },
        {
          name: "page5",
          elements: [
            {
              type: "multipletext",
              name: "contact_customer",
              title: "Want us to follow-up? Leave your name and email here:",
              items: [
                {
                  name: "Name"
                },
                {
                  name: "E-mail",
                  inputType: "email",
                  validators: [
                    {
                      type: "email"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };
    const survey = new Survey.Model(json);
    this.survey = survey;
  }
  render() {
    return <SurveyReact.Survey model={this.survey} />;
  }
}

export default SurveyComponent;